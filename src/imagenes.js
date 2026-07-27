/** Los tres sitios donde se puede generar una imagen. Todos corren en el
 *  ordenador del usuario: por eso el conector es local y no un servicio. */
import { spawn } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { MODELOS, MODELO_POR_DEFECTO } from "./prompts.js";
import { claveOpenRouter } from "./api.js";

const CODEX_PARALELO = Math.max(1, Number(process.env.CODEX_PARALLEL || 2));
const FLUX_URL = process.env.FLUX_URL || "http://127.0.0.1:7860";
const FLUX_MODELO = process.env.FLUX_MODEL || "flux_2_klein_4b_q8p.ckpt";
const FLUX_PASOS = Number(process.env.FLUX_STEPS || 8);
const FLUX_TAM = process.env.FLUX_SIZE || "1024x1280";   // 4:5 exacto

/** Qué ofrecerle al usuario cuando un backend se cae. Va aquí y no en la cabeza
 *  del agente porque, improvisando, se deja opciones fuera. */
export function alternativas(fallido) {
  const otras = [];
  if (fallido !== "openrouter") {
    for (const [id, nombre] of Object.entries(MODELOS)) {
      otras.push(`  · ${nombre} — generate_image_openrouter con model="${id}"  (de pago)`);
    }
  }
  if (fallido !== "codex") {
    otras.push("  · Codex CLI — generate_image  (su suscripción de ChatGPT, sin coste, "
      + "pero tarda minutos por imagen)");
  }
  if (fallido !== "flux") {
    otras.push("  · Flux 2 Klein en local — generate_image_flux  (gratis, necesita "
      + "Draw Things abierto. NO es FLUX.2 Pro)");
  }
  return "NO cambies de backend por tu cuenta: cuesta dinero o cuesta tiempo y lo "
    + "decide el usuario. Enséñale ESTA lista entera, tal cual, y que elija:\n"
    + otras.join("\n");
}

// ------------------------------------------------------------------ Codex

let enCurso = 0;
const cola = [];
function turno() {
  if (enCurso < CODEX_PARALELO) { enCurso++; return Promise.resolve(); }
  return new Promise((ok) => cola.push(ok));
}
function liberar() {
  const siguiente = cola.shift();
  if (siguiente) siguiente(); else enCurso--;
}

function ejecutar(cmd, args, opciones = {}) {
  return new Promise((ok) => {
    const p = spawn(cmd, args, { stdio: ["ignore", "pipe", "pipe"], ...opciones });
    let salida = "";
    p.stdout.on("data", (d) => { salida += d; });
    p.stderr.on("data", (d) => { salida += d; });
    p.on("error", (e) => ok({ code: -1, salida: e.message }));
    p.on("close", (code) => ok({ code, salida }));
  });
}

/** Encuentra el binario de Codex.
 *
 *  El cliente MCP arranca el conector SIN el PATH del usuario, así que `which`
 *  falla casi siempre y hay que mirar a mano. Y muchos lo tienen instalado con
 *  nvm, que guarda un binario por versión de Node: sin recorrer esas carpetas,
 *  el conector decía "no encuentro Codex" con Codex instalado. */
async function buscarCodex() {
  const forzado = (process.env.CODEX_BIN || "").trim();
  if (forzado) {
    if (existsSync(forzado)) return forzado;
    throw new Error(`CODEX_BIN apunta a ${forzado} y ahí no hay nada.`);
  }
  const r = await ejecutar("which", ["codex"]);
  const encontrado = r.code === 0 ? r.salida.trim().split("\n")[0] : "";
  if (encontrado && existsSync(encontrado)) return encontrado;

  const casa = process.env.HOME || "";
  const candidatos = [
    "/opt/homebrew/bin/codex", "/usr/local/bin/codex",
    `${casa}/.local/bin/codex`, `${casa}/.bun/bin/codex`,
    `${casa}/.volta/bin/codex`, "/Applications/ChatGPT.app/Contents/Resources/codex",
  ];
  // nvm y fnm: un binario por versión de Node, de la más nueva a la más vieja
  for (const gestor of [`${casa}/.nvm/versions/node`, `${casa}/.fnm/node-versions`]) {
    try {
      const versiones = readdirSync(gestor).sort().reverse();
      for (const v of versiones) {
        candidatos.push(join(gestor, v, "bin", "codex"));
        candidatos.push(join(gestor, v, "installation", "bin", "codex"));
      }
    } catch { /* ese gestor no está instalado */ }
  }
  for (const c of candidatos) {
    if (existsSync(c)) return c;
  }
  return null;
}

export async function generarConCodex(prompt, referencias = []) {
  const bin = await buscarCodex();
  if (!bin) {
    throw new Error(
      "No encuentro el binario de Codex CLI en este ordenador.\n"
      + "Si lo tienes instalado, dile al usuario que ejecute `which codex` en su "
      + "terminal y añada esa ruta como CODEX_BIN en la configuración del conector; "
      + "el cliente arranca el conector sin su PATH y a veces no lo ve.\n"
      + "Si no lo tiene, se instala con `npm i -g @openai/codex` y luego `codex login` "
      + "con su cuenta de ChatGPT.\n\n"
      + alternativas("codex"));
  }
  const dir = mkdtempSync(join(tmpdir(), "sstudio-"));
  const salida = join(dir, "imagen.png");
  const refs = referencias.length
    ? "\n\nIMÁGENES DE REFERENCIA REALES DEL USUARIO (ábrelas y mira su contenido "
      + "antes de generar; úsalas dentro de la composición en vez de inventarte "
      + "una interfaz o una cara):\n"
      + referencias.map((r) => `- ${r.ruta} — "${r.caption}"`).join("\n")
    : "";
  const instruccion =
    "Genera UNA imagen usando EXCLUSIVAMENTE tu herramienta nativa image_gen. "
    + "PROHIBIDO usar OpenRouter, APIs externas o scripts propios.\n"
    + `Guarda el PNG final EXACTAMENTE en esta ruta: ${salida}\n`
    + "Formato: vertical 4:5 si image_gen lo permite. La imagen NO debe contener "
    + "texto ni letras."
    + refs
    + `\n\nPROMPT DE LA IMAGEN:\n${prompt}\n\n`
    + "Cuando el PNG exista en esa ruta exacta, responde OK y termina.";

  await turno();
  try {
    const entorno = { ...process.env };
    delete entorno.OPENROUTER_API_KEY;   // Codex no tiene por qué ver la clave
    const r = await ejecutar(bin,
      ["exec", "--dangerously-bypass-approvals-and-sandbox", "-C", dir, instruccion],
      { env: entorno, timeout: 900000 });
    if (!existsSync(salida)) {
      throw new Error(`Codex no dejó la imagen en ${salida}. `
        + `Salida: …${r.salida.slice(-400)}\n\n${alternativas("codex")}`);
    }
    return readFileSync(salida);
  } finally {
    liberar();
    rmSync(dir, { recursive: true, force: true });
  }
}

// ------------------------------------------------------------- OpenRouter

/** La clave sale del entorno si está (útil para probar), y si no de la que el
 *  usuario guardó en la webapp: así no tiene que pegarla en cada agente. */
async function clave() {
  const local = (process.env.OPENROUTER_API_KEY || "").trim();
  if (local) return local;
  let guardada = "";
  try {
    guardada = await claveOpenRouter();
  } catch { /* si la webapp no responde, el mensaje de abajo ya lo explica */ }
  if (guardada) return guardada;
  throw new Error("No tienes guardada la API key de OpenRouter. Dile al usuario "
    + "que entre en la webapp, pestaña MCP, y la pegue en «Tu clave de OpenRouter» "
    + `(la saca de openrouter.ai → Keys).\n\n${alternativas("openrouter")}`);
}

export async function generarConOpenRouter(prompt, modelo, referencias = []) {
  const m = MODELOS[modelo] ? modelo : MODELO_POR_DEFECTO;
  const contenido = [{ type: "text", text: prompt }];
  for (const r of referencias) {
    contenido.push({
      type: "image_url",
      image_url: { url: `data:image/png;base64,${readFileSync(r.ruta).toString("base64")}` },
    });
  }
  const k = await clave();
  const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${k}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: m, messages: [{ role: "user", content: contenido }] }),
  });
  if (!r.ok) {
    throw new Error(`OpenRouter respondió ${r.status}: ${(await r.text()).slice(0, 300)}`);
  }
  const d = await r.json();
  const imgs = d?.choices?.[0]?.message?.images || [];
  const url = imgs[0]?.image_url?.url;
  if (!url) {
    throw new Error(`${MODELOS[m]} no devolvió ninguna imagen. `
      + `Respuesta: ${JSON.stringify(d).slice(0, 300)}`);
  }
  if (url.startsWith("data:")) return Buffer.from(url.split(",")[1], "base64");
  const img = await fetch(url);
  return Buffer.from(await img.arrayBuffer());
}

// ------------------------------------------------- Flux local (Draw Things)

export async function generarConFlux(prompt) {
  const [w, h] = FLUX_TAM.toLowerCase().split("x").map(Number);
  let r;
  try {
    r = await fetch(FLUX_URL.replace(/\/$/, "") + "/sdapi/v1/txt2img", {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ prompt, width: w, height: h,
        steps: FLUX_PASOS, model: FLUX_MODELO }),
    });
  } catch (e) {
    throw new Error(
      `No llego al API de Draw Things en ${FLUX_URL} (${e.message}).\n`
      + "¿Seguro que el usuario quería ESTE Flux? generate_image_flux es el modelo "
      + "LOCAL (Flux 2 Klein en Draw Things). Si pidió «FLUX.2 Pro», ese es de "
      + "OpenRouter: usa generate_image_openrouter con "
      + 'model="black-forest-labs/flux.2-pro".\n'
      + "Si de verdad quería el local: en Draw Things, ajustes → API Server → activa "
      + `el servidor HTTP (puerto 7860).\n\n${alternativas("flux")}`);
  }
  const d = await r.json();
  if (!d?.images?.length) {
    throw new Error("Draw Things no devolvió imagen: " + JSON.stringify(d).slice(0, 300));
  }
  return Buffer.from(String(d.images[0]).split(",").pop(), "base64");
}

/** Guarda una referencia del perfil en disco para que Codex pueda abrirla. */
export async function bajarReferencias(adjuntos) {
  const dir = mkdtempSync(join(tmpdir(), "ssrefs-"));
  const salida = [];
  for (const [i, a] of adjuntos.entries()) {
    try {
      const r = await fetch(a.url);
      if (!r.ok) continue;
      const ruta = join(dir, `ref_${i}.png`);
      const { writeFileSync } = await import("node:fs");
      writeFileSync(ruta, Buffer.from(await r.arrayBuffer()));
      salida.push({ ruta, caption: a.caption || "" });
    } catch { /* una referencia caída no tumba la generación */ }
  }
  return salida;
}
