/** Cliente de la webapp. Es la única puerta entre el conector y tus datos:
 *  el perfil, el catálogo de referencias y los slideshows viven allí. */
const API = (process.env.SLIDESHOW_API || "").replace(/\/$/, "");
const TOKEN = (process.env.SLIDESHOW_TOKEN || "").trim();

export function revisarConfiguracion() {
  if (!API && !TOKEN) {
    throw new Error(
      "Falta la configuración. En la webapp, pestaña MCP, copia el bloque entero " +
      "y pégalo en la configuración de tu agente: trae SLIDESHOW_API y SLIDESHOW_TOKEN.");
  }
  if (API && !TOKEN) {
    throw new Error(
      "Tienes SLIDESHOW_API pero falta SLIDESHOW_TOKEN. Entra en la webapp, " +
      "pestaña MCP, genera tu token y pégalo en la configuración de tu agente.");
  }
  if (TOKEN && !API) {
    throw new Error(
      "Tienes SLIDESHOW_TOKEN pero falta SLIDESHOW_API. Copia el bloque entero " +
      "desde la pestaña MCP de la webapp, que ya trae la URL.");
  }
}

async function pedir(ruta, cuerpo, metodo) {
  const r = await fetch(API + ruta, {
    method: metodo || (cuerpo ? "POST" : "GET"),
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      ...(cuerpo ? { "Content-Type": "application/json" } : {}),
    },
    body: cuerpo ? JSON.stringify(cuerpo) : undefined,
  }).catch((e) => {
    throw new Error(
      `No llego a la webapp en ${API} (${e.message}). Comprueba que SLIDESHOW_API ` +
      `apunta a la URL correcta y que tienes internet.`);
  });

  const txt = await r.text();
  let d = {};
  try { d = txt ? JSON.parse(txt) : {}; } catch { /* respuesta no JSON */ }
  if (!r.ok) {
    if (r.status === 401 || r.status === 403) {
      throw new Error(
        "La webapp no reconoce tu token. Entra en tu cuenta, pestaña MCP, genera " +
        "uno nuevo y ponlo en SLIDESHOW_TOKEN. " + (d.error || ""));
    }
    throw new Error(`la webapp respondió ${r.status}: ${d.error || txt.slice(0, 200)}`);
  }
  return d;
}

export const buscarCorpus = (q) =>
  pedir("/api/corpus?" + new URLSearchParams({
    nicho: q.niche || "", cuenta: q.account || "", q: q.query || "",
    orden: q.sort || "virality", por: String(q.limit ?? 10),
    pagina: String(q.page ?? 0),
  }));

/** Una referencia con los nombres que esperan los prompts. */
export async function referencia(id) {
  const r = await pedir(id == null ? "/api/corpus?azar=1" : `/api/corpus?id=${Number(id)}`);
  return {
    id: r.id, cuenta: r.u, nicho: r.n, vistas: r.v, likes: r.l,
    guardados: r.b, saveRate: r.sr, viralidad: r.vi,
    hook: r.h, textos: r.t, producto: r.p, imagenes: r.img,
  };
}

export const perfiles = () => pedir("/api/perfiles");

/** La clave de OpenRouter que el usuario guardó en la webapp. Se pide solo
 *  cuando hace falta generar, no al arrancar. */
export const claveOpenRouter = async () => (await pedir("/api/clave", null, "PUT")).key || "";

export const guardarDossier = (perfil, desc, style, crear) =>
  pedir("/api/perfiles", {
    perfil,
    ...(desc != null ? { desc } : {}),
    ...(style != null ? { style } : {}),
    ...(crear ? { crear: true } : {}),
  });

export const crearPerfil = (nombre) =>
  pedir("/api/perfiles", { accion: "crear", nombre });

export const subirAdjunto = (perfil, kind, imagen, caption) =>
  pedir("/api/adjuntos", { perfil, kind, imagen, caption });

export const subirImagen = (imgB64, ext, slideshow, pos) =>
  pedir("/api/slideshows/imagen", { img_b64: imgB64, ext, slideshow, pos });

export const guardarTanda = (posiciones) => pedir("/api/tanda", { posiciones });

export const crearSlideshow = (nombre, slides) =>
  pedir("/api/slideshows", { nombre, slides });

/** Baja una imagen del catálogo. Sin token: son URLs públicas del CDN. */
export async function descargar(url) {
  const r = await fetch(url, { headers: { "User-Agent": "slideshow-studio-mcp" } });
  if (!r.ok) throw new Error(`${r.status} al bajar ${url}`);
  return Buffer.from(await r.arrayBuffer());
}
