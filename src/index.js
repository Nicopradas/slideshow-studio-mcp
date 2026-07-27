#!/usr/bin/env node
/** Conector MCP de Slideshow Studio.
 *
 *  Habla con la webapp (perfil y catálogo) y genera las imágenes AQUÍ, en el
 *  ordenador del usuario, que es lo único que no se puede hacer en un servidor.
 */
import { createInterface } from "node:readline";
import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import * as api from "./api.js";
import * as img from "./imagenes.js";
import { HERRAMIENTAS } from "./herramientas.js";
import {
  MODELOS, MODELO_POR_DEFECTO, PERFIL_VACIO, bloqueEstilo, promptEntrevista,
  promptEntrevistaConDossier, promptExtraccion, promptReplica,
} from "./prompts.js";

const MAX_REF_IMGS = Math.max(1, Number(process.env.MAX_REFERENCE_IMAGES || 20));
const MAX_TANDA = Math.max(1, Number(process.env.MAX_BATCH || 10));
const LATIDO_CADA = Math.max(1, Number(process.env.PROGRESS_EVERY || 10));

const BACKENDS = {
  codex: ["generate_image",
    "tu propio Codex CLI, con tu suscripción de ChatGPT y sin coste de API"],
  openrouter: ["generate_image_openrouter",
    "OpenRouter, que es API de pago y hay que elegir modelo"],
  flux: ["generate_image_flux",
    "Flux 2 Klein en local con Draw Things (gratis, pero NO es FLUX.2 Pro)"],
};

const LENTAS = {
  generate_image: "generando la imagen con Codex",
  generate_image_flux: "generando la imagen con Draw Things",
  generate_image_openrouter: "generando la imagen con OpenRouter",
};

const fmtN = (n) => n == null ? "?"
  : n >= 1e6 ? (n / 1e6).toFixed(1) + "M"
  : n >= 1e3 ? Math.round(n / 1e3) + "k" : String(n);

function enviar(o) { process.stdout.write(JSON.stringify(o) + "\n"); }
const texto = (t) => [{ type: "text", text: t }];

// las imágenes generadas se quedan en memoria hasta que se monta el slideshow
const GENERADAS = new Map();

/** Trabajos en curso. Generar tarda minutos y el cliente MCP corta la petición
 *  mucho antes, así que no se espera: se arranca, se devuelve un ticket y el
 *  agente pregunta luego. Cada llamada es instantánea, así que da igual el
 *  timeout que tenga configurado el cliente. */
const TRABAJOS = new Map();

function arrancar(etiqueta, promesa) {
  const id = "job_" + Math.random().toString(36).slice(2, 12);
  const t = { estado: "en curso", etiqueta, desde: Date.now(), imagen: null, error: null };
  TRABAJOS.set(id, t);
  promesa.then(
    (bytes) => { t.imagen = guardar(bytes, "png"); t.estado = "listo"; },
    (e) => { t.error = e?.message || String(e); t.estado = "error"; },
  );
  return id;
}

function consultar(id) {
  const t = TRABAJOS.get(String(id));
  if (!t) {
    return `No tengo ningún trabajo con id ${id}. ¿Seguro que es el job_id que te `
      + "devolvió la generación?";
  }
  const seg = Math.round((Date.now() - t.desde) / 1000);
  if (t.estado === "en curso") {
    return `Todavía en curso (${seg}s) — ${t.etiqueta}.\n`
      + "Es normal: generar tarda minutos. Espera unos 20 segundos y vuelve a "
      + "preguntar por este mismo job_id. No lances otra generación mientras tanto.";
  }
  if (t.estado === "error") {
    TRABAJOS.delete(String(id));
    return `Falló después de ${seg}s.\n\n${t.error}`;
  }
  TRABAJOS.delete(String(id));
  return `Lista en ${seg}s. image_id: ${t.imagen}`;
}

// ------------------------------------------------------------ perfiles

async function contexto(nombrePerfil) {
  const d = await api.perfiles();
  const lista = d.perfiles || [];
  let elegido = null;
  if (nombrePerfil) {
    const aguja = String(nombrePerfil).trim().toLowerCase();
    elegido = lista.find((p) => p.nombre.toLowerCase() === aguja)
      ?? (lista.filter((p) => p.nombre.toLowerCase().includes(aguja))[0] ?? null);
  }
  // sin nombre se queda en null SIEMPRE, aunque solo haya un perfil: el usuario
  // puede querer otro o crear uno nuevo, y darlo por hecho le obliga a descubrir
  // a mitad de la generación que salió con el perfil equivocado
  return { lista, elegido, modelo: d.modelo || MODELO_POR_DEFECTO };
}

function preguntar(faltan) {
  return texto(
    "FALTA POR DECIDIR ANTES DE EMPEZAR. No elijas tú: pregúntaselo al usuario, "
    + "espera su respuesta y vuelve a llamar a start_slideshow con los datos.\n"
    + "Al preguntar, enseña TODAS las opciones que te doy abajo. Si tu interfaz no "
    + "admite tantas, usa texto normal y numéralas: quitar opciones no es una "
    + "opción, porque la que falte es justo la que puede querer el usuario.\n\n"
    + faltan.join("\n\n"));
}

// -------------------------------------------------------- ver referencia

async function verReferencia(id) {
  const r = await api.referencia(id);
  const n = r.imagenes.length;
  const cuantas = Math.min(n, MAX_REF_IMGS);
  const info = [
    `@${r.cuenta} · nicho: ${r.nicho} · ${fmtN(r.vistas)} vistas · `
    + `${fmtN(r.guardados)} guardados · save rate ${(100 * (r.saveRate || 0)).toFixed(1)}% · `
    + `viralidad ${Math.round(r.viralidad || 0)}/100`,
    `${n} imágenes (${cuantas} adjuntas abajo, EN ORDEN)`,
  ];
  for (const [i, t] of (r.textos || []).entries()) info.push(`Slide ${i + 1}: "${t}"`);
  if (cuantas < n) {
    info.push(`⚠ Solo van las ${cuantas} primeras de ${n}. Las slides ${cuantas + 1}-${n} `
      + `NO las estás viendo: guíate por su texto de arriba para esas, y no des por `
      + `hecho que el slideshow termina en la ${cuantas}.`);
  }
  const salida = texto(info.join("\n"));
  for (const url of r.imagenes.slice(0, cuantas)) {
    try {
      const bytes = await api.descargar(url);
      salida.push({ type: "image", data: bytes.toString("base64"), mimeType: "image/jpeg" });
    } catch { /* una imagen caída no tumba la referencia entera */ }
  }
  return { contenido: salida, ref: r };
}

// --------------------------------------------------------- start_slideshow

async function startSlideshow(a) {
  const { lista, elegido, modelo } = await contexto(a.profile);
  const backend = String(a.backend || "").trim().toLowerCase();
  const model = a.openrouter_model;

  if (!lista.length) {
    throw new Error("El usuario todavía no tiene ningún perfil de producto. Sin él "
      + "los slideshows salen genéricos, así que créalo primero: llama a "
      + "setup_profile y sigue lo que te diga.");
  }

  const faltan = [];
  if (!elegido) {
    faltan.push(
      (a.profile ? `No he encontrado ningún perfil que se llame «${a.profile}».\n` : "")
      + "PARA QUÉ PERFIL es el slideshow. Pregúntaselo aunque solo tenga uno: "
      + "puede querer usar otro o crear uno nuevo para este contenido.\n"
      + lista.map((p) => `  · ${p.nombre}`
        + (p.desc?.trim() ? "" : "  (dossier vacío)")).join("\n")
      + "\n  · o uno NUEVO — entonces llama a setup_profile con ese nombre en vez "
      + "de a start_slideshow\n"
      + 'Vuelve a llamarme con profile="<el nombre>".');
  }
  // backend y modelo en preguntas SEPARADAS: juntos son 6 opciones y los
  // clientes suelen enseñar 4, así que se perdían dos modelos
  if (!BACKENDS[backend]) {
    faltan.push("CON QUÉ QUIERE GENERAR LAS IMÁGENES. Ofrécele EXACTAMENTE estas tres "
      + "opciones, ni una más (el modelo concreto se elige DESPUÉS):\n"
      + Object.entries(BACKENDS).map(([k, v]) => `  · backend="${k}" — ${v[1]}`).join("\n"));
  } else if (backend === "openrouter" && !MODELOS[model]) {
    faltan.push((model ? `«${model}» no es un modelo válido.\n` : "")
      + `QUÉ MODELO DE OPENROUTER quiere. Son estos ${Object.keys(MODELOS).length} y `
      + `tienes que ofrecerle LOS ${Object.keys(MODELOS).length}, sin dejarte ninguno:\n`
      + Object.entries(MODELOS).map(([id, n]) => `  · ${n} — openrouter_model="${id}"`).join("\n")
      + '\nVuelve a llamarme con backend="openrouter" y openrouter_model.');
  }
  if (faltan.length) return preguntar(faltan);

  const imgTool = BACKENDS[backend][0];
  const cuantos = Math.max(1, Math.min(Number(a.count) || 1, MAX_TANDA));
  if (cuantos > 1) return planDeTanda(cuantos, backend, model, elegido);

  const { contenido, ref } = await verReferencia(a.reference_id);
  const modeloUsado = backend === "openrouter" && MODELOS[model] ? model : modelo;

  const cabecera = [
    `Perfil: «${elegido.nombre}»${elegido.style?.trim() ? "" : " (sin estilo guardado)"}`,
    `Imágenes: ${BACKENDS[backend][1].split(",")[0]}`
      + (backend === "openrouter" ? ` · modelo ${MODELOS[modeloUsado]}` : ""),
    ...(backend === "openrouter" && MODELOS[model]
      ? [`Pasa model="${model}" en cada llamada a ${imgTool}.`] : []),
    `Referencia: id ${ref.id} · @${ref.cuenta} · ${ref.imagenes.length} slides`
      + (a.reference_id == null ? " (al azar)" : ""),
    "",
    "Estas son TUS instrucciones. Síguelas de principio a fin sin pedirme "
      + "confirmación entre pasos.",
    "",
  ].join("\n");

  const body = (ref.textos || []).length
    ? (ref.textos.map((t, i) => `Slide ${i + 1}: "${t}"`).join("\n") + "\n") : "";

  const instrucciones = promptReplica({
    app: (elegido.desc || "").trim() || PERFIL_VACIO,
    lang: "español", refNicho: ref.nicho || "otro nicho", body,
    vistas: fmtN(ref.vistas), saveRate: (100 * (ref.saveRate || 0)).toFixed(1),
    n: ref.imagenes.length, imgTool, id: ref.id,
    styleTxt: elegido.style || "", listas: true,
  });

  return [{ type: "text", text: cabecera + instrucciones }, ...contenido.slice(1)];
}

async function planDeTanda(cuantos, backend, model, perfil) {
  const vistos = new Set(), refs = [];
  for (let i = 0; i < cuantos * 6 && refs.length < cuantos; i++) {
    const r = await api.referencia();
    if (!vistos.has(r.id)) { vistos.add(r.id); refs.push(r); }
  }
  const extra = backend === "openrouter" && MODELOS[model]
    ? `, openrouter_model="${model}"` : "";
  const ritmo = backend === "codex"
    ? "UNO CADA VEZ, y dentro de cada uno las imágenes también de una en una. Codex "
      + "genera de una en una y tarda minutos por imagen: si lanzas varias a la vez se "
      + "encolan y les salta el timeout. No empieces el siguiente hasta tener el anterior."
    : "Uno cada vez: termina un slideshow entero antes de empezar el siguiente, para no "
      + "mezclar los image_id. Las imágenes DENTRO de cada slideshow sí puedes lanzarlas "
      + "en paralelo.";
  return texto(
    `PLAN DE TANDA: ${refs.length} slideshows para el perfil «${perfil.nombre}».\n\n`
    + `He sorteado estas ${refs.length} referencias, todas distintas:\n`
    + refs.map((r, i) => `  ${i + 1}. reference_id=${r.id} · @${r.cuenta} · `
      + `${r.imagenes.length} slides`).join("\n")
    + `\n\nRITMO: ${ritmo}\n\nPARA CADA UNA, por orden, llama a:\n`
    + `  start_slideshow(reference_id=<el de la lista>, profile="${perfil.nombre}", `
    + `backend="${backend}"${extra})\n`
    + "y sigue al pie de la letra las instrucciones que te devuelva.\n\n"
    + "Cuando acabes con una, dile al usuario su enlace y sigue con la siguiente sin "
    + `preguntarle nada. Al final, resume las ${refs.length} con sus enlaces.\n`
    + "Si una falla, dilo y sigue con las demás: no abortes la tanda entera.");
}

// --------------------------------------------------------------- perfiles

async function listProfiles() {
  const { lista } = await contexto();
  if (!lista.length) return "No hay ningún perfil. Créalo con setup_profile.";
  return lista.map((p) =>
    `«${p.nombre}»: dossier ${p.desc?.trim() ? "sí" : "NO — está vacío"} · `
    + `estilo estético ${p.style?.trim() ? "sí" : "no"} · `
    + `${(p.shots || []).length} capturas del producto · `
    + `${(p.faces || []).length} fotos de la persona de referencia`).join("\n");
}

async function setupProfile(a) {
  const { lista, elegido } = await contexto(a.profile);
  const modo = String(a.mode || "").trim().toLowerCase();
  const quien = elegido ? `«${elegido.nombre}»`
    : (a.profile ? `«${a.profile}» (que aún no existe, lo creo al guardar)` : "su perfil");

  if (modo !== "prompt" && modo !== "entrevista") {
    return `PREGÚNTASELO ANTES DE SEGUIR. Para llenar el dossier de ${quien} hay dos `
      + "caminos y decide él, porque dependen de si tiene el proyecto a mano:\n\n"
      + '  · mode="prompt" — le doy un prompt para que lo pegue en un agente ABIERTO '
      + "DENTRO DE LA CARPETA de su producto. Ese agente se lee su web y sus textos, y "
      + "luego le entrevista. Sale el dossier más completo, pero necesita el proyecto.\n"
      + '  · mode="entrevista" — le entrevistas TÚ aquí mismo, en este chat, y cuando '
      + "esté, lo guardas tú. No necesita tener nada abierto.\n\n"
      + "Pregúntale cuál prefiere y vuelve a llamarme con mode y profile.";
  }
  if (modo === "prompt") {
    return "Dale al usuario este prompt TAL CUAL, en un bloque de código para que "
      + "pueda copiarlo, y dile que abra un agente dentro de la carpeta de su "
      + "producto y se lo pegue ahí. Cuando le devuelva el dossier, que lo traiga a "
      + "este chat y lo guardas tú con save_profile_dossier.\n\n─────────\n"
      + promptExtraccion("español");
  }
  const nombre = elegido?.nombre || String(a.profile || "").trim();
  if (!nombre) throw new Error("dime el nombre del perfil (profile=…) para la entrevista");
  return (elegido?.desc?.trim()
    ? promptEntrevistaConDossier("español", nombre)
    : promptEntrevista("español", nombre))
    + (elegido ? "" : `\n\n(OJO: el perfil «${nombre}» todavía no existe. Cuando guardes `
      + "con save_profile_dossier, pasa create=true para crearlo.)");
}

async function addProfileImage(a) {
  const caption = String(a.caption || "").trim();
  if (!caption) {
    throw new Error("falta el caption: hay que describir qué se ve en la imagen, "
      + "porque es lo que luego decide si esta referencia encaja con una slide. "
      + "Pregúntaselo al usuario si no lo ha dicho.");
  }
  const kind = ["faces", "face", "persona", "cara"]
    .includes(String(a.kind || "").toLowerCase()) ? "faces" : "shots";
  let b64 = a.image_base64;
  if (a.path) {
    const ruta = String(a.path).replace(/^~/, homedir());
    if (!existsSync(ruta)) throw new Error(`no existe el archivo ${ruta}`);
    b64 = readFileSync(ruta).toString("base64");
  }
  if (!b64) throw new Error("pásame la imagen: path (ruta en disco) o image_base64");
  const r = await api.subirAdjunto(a.profile || "", kind, b64, caption);
  return r.mensaje || "Imagen guardada en el perfil.";
}

// ---------------------------------------------------------------- imágenes

function guardar(bytes, ext) {
  const id = Math.random().toString(36).slice(2, 14);
  GENERADAS.set(id, { bytes, ext });
  return id;
}

/** Las capturas o caras del perfil, con sus imágenes, para que el agente las
 *  vea y decida cuáles encajan. Sin esto el prompt le pedía llamar a unas
 *  herramientas que no existían y las referencias visuales no se usaban nunca. */
async function adjuntosDe(nombrePerfil, kind) {
  const { lista, elegido } = await contexto(nombrePerfil);
  const perfil = elegido ?? (lista.length === 1 ? lista[0] : null);
  const que = kind === "faces"
    ? "fotos de la persona de referencia" : "capturas reales del producto";
  if (!perfil) {
    const nombres = lista.map((p) => `«${p.nombre}»`).join(", ");
    return texto(lista.length
      ? `¿De qué perfil? Hay varios: ${nombres}. Pásame profile="<el nombre>".`
      : "El usuario no tiene ningún perfil todavía.");
  }
  const adjuntos = perfil[kind] || [];
  if (!adjuntos.length) {
    return texto(kind === "faces"
      ? "El usuario no ha subido fotos de una persona de referencia. Genera a las "
        + "personas de forma libre, pero mantén una descripción física coherente "
        + "dentro del mismo slideshow."
      : "El usuario no tiene capturas de su producto subidas. Si alguna slide "
        + "necesita enseñar una pantalla, invéntala coherente con su nicho y avísale "
        + "de que puede subir capturas reales desde la webapp o diciéndotelo aquí.");
  }
  const salida = texto(
    `${adjuntos.length} ${que} del perfil «${perfil.nombre}». Pasa como `
    + "reference_shot_files las URL de las que de verdad encajen con la slide que "
    + "vas a generar, no todas por defecto:\n"
    + adjuntos.map((x) => `- ${x.url}\n  «${x.caption}»`).join("\n"));
  for (const x of adjuntos) {
    try {
      const bytes = await api.descargar(x.url);
      salida.push({ type: "image", data: bytes.toString("base64"), mimeType: "image/png" });
    } catch { /* una que no cargue no tumba la lista */ }
  }
  return salida;
}

async function referenciasDe(urls) {
  if (!urls?.length) return [];
  const { lista } = await contexto();
  const todos = lista.flatMap((p) => [...(p.shots || []), ...(p.faces || [])]);
  const elegidas = todos.filter((a) => urls.includes(a.url));
  return img.bajarReferencias(elegidas);
}

async function crearSlideshowMcp(a) {
  const slides = a.slides || [];
  if (!slides.length) throw new Error("slides vacío");
  const nombre = String(a.name || "slideshow");
  const subidas = [];
  for (const [i, s] of slides.entries()) {
    const g = GENERADAS.get(String(s.image_id));
    if (!g) {
      throw new Error(`slide ${i + 1}: no tengo la imagen ${s.image_id}. `
        + "¿Seguro que es el image_id que devolvió la generación?");
    }
    const r = await api.subirImagen(g.bytes.toString("base64"), g.ext, "s", i);
    subidas.push({ img: r.url, texts: (s.texts || []).map((t) => ({
      t: String(t.text ?? t.t ?? ""),
      x: Math.min(1, Math.max(0, Number(t.x ?? 0.5))),
      y: Math.min(1, Math.max(0, Number(t.y ?? 0.45))),
      size: Math.min(0.2, Math.max(0.02, Number(t.size ?? 0.055))),
      style: String(t.style || "outline"), font: String(t.font || "classic"),
      color: String(t.color || "#ffffff"),
    })) });
  }
  const r = await api.crearSlideshow(nombre, subidas);
  return `Slideshow creado con ${subidas.length} slides.\n\nDale al usuario este `
    + `enlace, que se lo abre directamente en el editor:\n${r.url}`;
}

async function prepararTanda(a) {
  const entradas = a.positions || [];
  if (!entradas.length) throw new Error("positions vacío");
  const posiciones = {};
  for (const e of entradas) {
    const pos = Number(e?.position);
    if (!Number.isInteger(pos) || pos < 1 || pos > 50) {
      throw new Error(`position tiene que ser el nº de slide, de 1 a 50 (llegó ${e?.position})`);
    }
    const ids = e.image_ids || [];
    if (!ids.length) throw new Error(`posición ${pos}: image_ids vacío`);
    const urls = [];
    for (const [k, id] of ids.entries()) {
      const g = GENERADAS.get(String(id));
      if (!g) {
        throw new Error(`posición ${pos}: no tengo la imagen ${id}. `
          + "¿Seguro que es el image_id que devolvió la generación?");
      }
      const r = await api.subirImagen(g.bytes.toString("base64"), g.ext, `tanda${pos}`, k);
      urls.push(r.url);
    }
    posiciones[String(pos)] = urls;
  }
  const r = await api.guardarTanda(posiciones);
  return `Tanda preparada: ${r.slideshows} slideshows de ${r.posiciones} slides `
    + "cada uno.\n\nDile al usuario que entre en la webapp, pestaña Crear, y pulse "
    + "«Crear en masa»: le saldrán todos con sus imágenes ya colocadas para que "
    + "revise y ponga los textos.";
}

// ------------------------------------------------------------- despacho

async function despachar(nombre, a) {
  api.revisarConfiguracion();
  switch (nombre) {
    case "start_slideshow": return { contenido: await startSlideshow(a) };
    case "list_profiles": return { texto: await listProfiles() };
    case "setup_profile": return { texto: await setupProfile(a) };
    case "save_profile_dossier": {
      if (a.desc == null && a.style == null) {
        throw new Error("no me has pasado nada que guardar: desc y/o style");
      }
      const r = await api.guardarDossier(a.profile || "", a.desc, a.style, a.create);
      const q = [a.desc != null && "el dossier de producto",
        a.style != null && "el estilo estético"].filter(Boolean).join(" y ");
      return { texto: `Guardado ${q} en «${r.perfil?.nombre || ""}». Se inyecta solo `
        + "en todos los slideshows que generes a partir de ahora." };
    }
    case "add_profile_image": return { texto: await addProfileImage(a) };
    case "list_profile_shots": return { contenido: await adjuntosDe(a.profile, "shots") };
    case "list_profile_faces": return { contenido: await adjuntosDe(a.profile, "faces") };
    case "browse_corpus": {
      const d = await api.buscarCorpus(a);
      const nichos = (d.nichos || []).map((x) => `${x.nicho} (${x.n})`).join(", ");
      const filas = (d.items || []).map((r) =>
        `id ${r.id} · @${r.u} · nicho: ${r.n} · ${r.img.length} slides · `
        + `${fmtN(r.v)} vistas · save rate ${(100 * (r.sr || 0)).toFixed(1)}% · `
        + `viralidad ${Math.round(r.vi || 0)}/100 · hook: ${(r.h || "(sin hook)").slice(0, 110)}`);
      return { texto: `Nichos disponibles: ${nichos}\n\n`
        + (filas.join("\n") || "(sin resultados — prueba otro nicho/orden/página)") };
    }
    case "view_slideshow": {
      const { contenido } = await verReferencia(Number(a.id));
      return { contenido };
    }
    case "generate_image": {
      const refs = await referenciasDe(a.reference_shot_files);
      const job = arrancar("Codex", img.generarConCodex(a.prompt, refs));
      return { texto: `Generando con Codex. job_id: ${job}\n\n`
        + "Tarda varios minutos. Pregunta por él con check_image dentro de unos 20 "
        + "segundos; si sigue en curso, vuelve a preguntar. No lances otra imagen "
        + "mientras tanto: Codex genera de una en una." };
    }
    case "generate_image_openrouter": {
      const { modelo } = await contexto();
      const m = MODELOS[a.model] ? a.model : modelo;
      const refs = await referenciasDe(a.reference_shot_files);
      const job = arrancar(MODELOS[m], img.generarConOpenRouter(a.prompt, m, refs));
      return { texto: `Generando con ${MODELOS[m]}. job_id: ${job}\n\n`
        + "Pregunta por él con check_image en unos segundos. Estas sí puedes "
        + "lanzarlas en paralelo: arranca las demás y luego consúltalas todas." };
    }
    case "generate_image_flux": {
      const job = arrancar("Draw Things", img.generarConFlux(a.prompt));
      return { texto: `Generando con Flux local. job_id: ${job}\n\n`
        + "Pregunta por él con check_image en unos segundos." };
    }
    case "check_image": return { texto: consultar(a.job_id) };
    case "stage_bulk_images": return { texto: await prepararTanda(a) };
    case "create_slideshow": return { texto: await crearSlideshowMcp(a) };
    default: throw new Error(`herramienta desconocida: ${nombre}`);
  }
}

/** Avisa al cliente de que seguimos vivos mientras la herramienta trabaja: sin
 *  esto, generar con Codex se pasa del timeout y sale un -32001. */
function latido(token, mensaje) {
  if (token == null) return () => {};
  let n = 0;
  const h = setInterval(() => {
    n++;
    enviar({ jsonrpc: "2.0", method: "notifications/progress", params: {
      progressToken: token, progress: n,
      message: `${mensaje} (${n * LATIDO_CADA}s)` } });
  }, LATIDO_CADA * 1000);
  return () => clearInterval(h);
}

async function atender(id, params) {
  const nombre = params?.name;
  const token = params?._meta?.progressToken;
  const parar = latido(LENTAS[nombre] ? token : null, LENTAS[nombre] || "");
  try {
    const r = await despachar(nombre, params?.arguments || {});
    enviar({ jsonrpc: "2.0", id, result: {
      content: r.contenido || texto(r.texto), isError: false } });
  } catch (e) {
    enviar({ jsonrpc: "2.0", id, result: {
      content: texto("Error: " + (e?.message || String(e))), isError: true } });
  } finally {
    parar();
  }
}

createInterface({ input: process.stdin }).on("line", (linea) => {
  if (!linea.trim()) return;
  let m;
  try { m = JSON.parse(linea); } catch { return; }
  const { id, method, params } = m;
  if (method === "initialize") {
    enviar({ jsonrpc: "2.0", id, result: {
      protocolVersion: params?.protocolVersion || "2024-11-05",
      capabilities: { tools: {} },
      serverInfo: { name: "slideshow-studio", version: "2.0.0" } } });
  } else if (method === "tools/list") {
    enviar({ jsonrpc: "2.0", id, result: { tools: HERRAMIENTAS } });
  } else if (method === "tools/call") {
    atender(id, params);
  } else if (id != null) {
    enviar({ jsonrpc: "2.0", id, error: {
      code: -32601, message: `method not found: ${method}` } });
  }
});
