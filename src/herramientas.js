/** La declaración de las herramientas: lo que ve el agente para decidir qué
 *  llamar. Los textos son parte del producto, no documentación. */
import { MODELOS } from "./prompts.js";

const IDS = Object.keys(MODELOS);

export const HERRAMIENTAS = [
  {
    name: "start_slideshow",
    description:
      "EMPIEZA POR AQUÍ siempre que el usuario pida un slideshow, aunque no diga "
      + "cómo: «créame un slideshow», «hazme uno para mi cuenta», «uno al azar», "
      + "«replícame la de fulanito», «hazme otro como este». Elige la referencia, "
      + "carga el perfil del usuario con su nicho y su estilo, y te devuelve TODAS "
      + "las instrucciones ya escritas junto con las imágenes de la referencia. No "
      + "hace falta que el usuario te pegue ningún prompt: eso es justo lo que esta "
      + "herramienta evita, así que no se lo pidas. Si le falta algún dato (para qué "
      + "perfil, con qué backend) no hace nada y te dice qué preguntarle.",
    inputSchema: {
      type: "object",
      properties: {
        reference_id: { type: "number", description:
          "id de la referencia. Si se omite, sale una al azar (modo ruleta)." },
        profile: { type: "string", description:
          "nombre del perfil. Si tiene más de uno y no lo indica, pregúntaselo." },
        backend: { type: "string", enum: ["codex", "openrouter", "flux"],
          description: "con qué se generan las imágenes. Pregúntaselo, no elijas tú: "
            + "es su dinero (openrouter es de pago)." },
        openrouter_model: { type: "string", enum: IDS,
          description: "modelo, solo si backend=openrouter" },
        count: { type: "number", description:
          "cuántos slideshows quiere de golpe («genérame 5»). Por defecto 1." },
      },
    },
  },
  {
    name: "list_profiles",
    description:
      "Los perfiles del usuario y qué tiene cada uno: si su dossier está lleno o "
      + "vacío, si tiene estilo guardado, y cuántas capturas y fotos lleva. Míralo "
      + "antes de tocar nada del perfil, y cuando diga «mi perfil» habiendo varios.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "setup_profile",
    description:
      "Para crear o rellenar el DOSSIER de un perfil (su público, sus dolores, su "
      + "lenguaje, su tono). Úsalo cuando diga «configura mi perfil», «no tengo "
      + "perfil», o cuando start_slideshow avise de que está vacío. Sin mode no hace "
      + "nada: te devuelve las dos opciones para que se las preguntes.",
    inputSchema: {
      type: "object",
      properties: {
        profile: { type: "string", description: "nombre del perfil" },
        mode: { type: "string", enum: ["prompt", "entrevista"], description:
          "cómo quiere construirlo. Pregúntaselo, no lo elijas." },
      },
    },
  },
  {
    name: "save_profile_dossier",
    description:
      "Guarda en un perfil su dossier de producto (desc) y/o su dossier de estilo "
      + "estético (style). Es el paso final de la entrevista, y también sirve cuando "
      + "el usuario te pega un dossier ya hecho. Nunca le hagas copiar y pegar en la "
      + "web: guárdalo tú. Enséñale antes lo que vas a guardar.",
    inputSchema: {
      type: "object",
      properties: {
        profile: { type: "string", description: "nombre del perfil" },
        desc: { type: "string", description:
          "dossier de producto completo. Sustituye al anterior, no se añade al final." },
        style: { type: "string", description:
          "dossier de estilo ESTÉTICO. Solo estética, nunca guion ni estructura." },
        create: { type: "boolean", description: "crea el perfil si no existe" },
      },
    },
  },
  {
    name: "add_profile_image",
    description:
      "Añade al perfil una imagen de referencia con su descripción. kind=\"shots\" "
      + "son capturas REALES del producto (para cuando una slide enseña una app en "
      + "pantalla); kind=\"faces\" son fotos de la PERSONA de referencia (para que sea "
      + "siempre la misma cara). La imagen puede venir por ruta en disco o en base64. "
      + "El caption es obligatorio: si no ha dicho qué se ve, pregúntaselo.",
    inputSchema: {
      type: "object",
      properties: {
        profile: { type: "string", description: "nombre del perfil" },
        kind: { type: "string", enum: ["shots", "faces"] },
        path: { type: "string", description: "ruta del archivo (admite ~)" },
        image_base64: { type: "string", description: "alternativa a path" },
        caption: { type: "string", description:
          "qué se ve, en una línea. Obligatorio." },
      },
      required: ["caption"],
    },
  },
  {
    name: "list_profile_shots",
    description:
      "Las capturas REALES del producto del usuario, con su descripción y las "
      + "imágenes para que las veas. Llámala ANTES de generar una slide que muestre "
      + "una app o web EN PANTALLA, y pasa como reference_shot_files las que encajen: "
      + "así esa pantalla es su producto de verdad y no una interfaz inventada. Si "
      + "ninguna encaja, sigue sin ellas, no es obligatorio.",
    inputSchema: {
      type: "object",
      properties: { profile: { type: "string", description: "nombre del perfil" } },
    },
  },
  {
    name: "list_profile_faces",
    description:
      "Las fotos de la PERSONA de referencia del usuario, en varios ángulos. "
      + "Llámala ANTES de generar cualquier slide donde salga una persona "
      + "reconocible (cara, medio cuerpo, manos con la cara al fondo) y pasa sus "
      + "url como reference_shot_files. Es siempre la misma persona en todas sus "
      + "publicaciones: si en cada slideshow sale una cara distinta, se nota a la "
      + "legua que es generado.",
    inputSchema: {
      type: "object",
      properties: { profile: { type: "string", description: "nombre del perfil" } },
    },
  },
  {
    name: "browse_corpus",
    description:
      "Explora el catálogo de referencias virales. Filtra por nicho, cuenta o texto, "
      + "ordena y pagina. Úsalo para ENCONTRAR candidatas, pero no decidas solo con "
      + "las métricas: antes de elegir, mira las imágenes con view_slideshow. Las "
      + "mejores suelen estar en nichos DISTINTOS al del producto: lo que se replica "
      + "es la mecánica, no el tema.",
    inputSchema: {
      type: "object",
      properties: {
        niche: { type: "string" },
        account: { type: "string", description:
          "cuenta de TikTok, parcial y sin la @. Para «la de fulanito»." },
        query: { type: "string", description: "buscar texto en hook/slides" },
        sort: { type: "string", enum: ["virality", "save_rate", "views", "likes"] },
        limit: { type: "number" },
        page: { type: "number" },
      },
    },
  },
  {
    name: "view_slideshow",
    description:
      "Devuelve los datos, el texto de cada slide y LAS IMÁGENES REALES de una "
      + "referencia, para que la juzgues con tu visión: ¿la mecánica es transponible "
      + "sin calcar el tema? ¿su viralidad depende de algo irreplicable? Si no cuadra, "
      + "descártala y mira otra.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "number" } },
      required: ["id"],
    },
  },
  {
    name: "generate_image",
    description:
      "Genera UNA imagen con Codex CLI (image_gen nativo, con la suscripción de "
      + "ChatGPT del usuario, sin coste de API).\n"
      + "LLÁMALA DE UNA EN UNA: cada imagen tarda minutos y Codex genera una sola a "
      + "la vez; en paralelo se encolan y les salta el timeout. Espera al image_id de "
      + "una antes de pedir la siguiente.\n"
      + "El prompt debe pedir: vertical 4:5, fotografía realista, SIN texto ni letras "
      + "dentro, y el mismo bloque de estilo en todas las slides del set.",
    inputSchema: {
      type: "object",
      properties: {
        prompt: { type: "string" },
        reference_shot_files: { type: "array", items: { type: "string" },
          description: "opcional — url de capturas devueltas por list_profiles" },
      },
      required: ["prompt"],
    },
  },
  {
    name: "generate_image_openrouter",
    description:
      "Genera UNA imagen por OpenRouter. Es API de pago. Puedes lanzarlas en "
      + "paralelo. Mismas reglas de prompt que generate_image.",
    inputSchema: {
      type: "object",
      properties: {
        prompt: { type: "string" },
        model: { type: "string", enum: IDS, description:
          "modelo de esta tanda; si se omite, el que tenga elegido en la app" },
        reference_shot_files: { type: "array", items: { type: "string" } },
      },
      required: ["prompt"],
    },
  },
  {
    name: "generate_image_flux",
    description:
      "OJO, NO ES «FLUX.2 Pro». Esto es Flux 2 Klein corriendo EN LOCAL con la app "
      + "Draw Things, que el usuario tiene que tener abierta con su API activada.\n"
      + "Si el usuario ha dicho «FLUX.2 Pro» o «FLUX de OpenRouter», NO uses esta: "
      + "ese es un modelo de OpenRouter y se genera con generate_image_openrouter "
      + 'pasando model="black-forest-labs/flux.2-pro". Confundirlos da un error de '
      + "Draw Things que no tiene nada que ver.",
    inputSchema: {
      type: "object",
      properties: { prompt: { type: "string" } },
      required: ["prompt"],
    },
  },
  {
    name: "check_image",
    description:
      "Pregunta si una imagen ya está lista, con el job_id que te devolvió la "
      + "generación. Generar tarda minutos y por eso no se espera bloqueando: se "
      + "arranca y se consulta. Si te dice que sigue en curso, espera unos 20 "
      + "segundos y vuelve a preguntar por el MISMO job_id; no relances la "
      + "generación, que empezaría otra desde cero. Cuando esté, te da el image_id "
      + "para create_slideshow.",
    inputSchema: {
      type: "object",
      properties: { job_id: { type: "string" } },
      required: ["job_id"],
    },
  },
  {
    name: "stage_bulk_images",
    description:
      "Deja imágenes preparadas para el modo «crear en masa» de la webapp, "
      + "agrupadas por POSICIÓN de slide. El usuario las recoge con un botón y le "
      + "salen varios slideshows de golpe con la misma plantilla.\n"
      + "La imagen k de cada posición forma el slideshow k, así que el ORDEN "
      + "importa: manda las image_id en el mismo orden en todas las posiciones. "
      + "Úsala DESPUÉS de generar todas las imágenes. Sustituye lo que hubiera "
      + "preparado antes.",
    inputSchema: {
      type: "object",
      properties: {
        positions: {
          type: "array",
          description: "una entrada por slide de la plantilla",
          items: {
            type: "object",
            properties: {
              position: { type: "number", description: "nº de slide, desde 1" },
              image_ids: { type: "array", items: { type: "string" },
                description: "los image_id de esa posición, en orden" },
            },
            required: ["position", "image_ids"],
          },
        },
      },
      required: ["positions"],
    },
  },
  {
    name: "create_slideshow",
    description:
      "Monta el slideshow con las imágenes generadas y sus textos ya posicionados, y "
      + "devuelve el enlace para abrirlo en el editor. Es el último paso.\n"
      + "Cada texto lleva: t (el texto, con \\n donde quieras cortar), x/y en "
      + "fracciones 0-1, size relativo al ancho (0.02-0.2), style (outline, pill o "
      + "dark), font (classic, bold, serif, typewriter, handwriting o neon) y color "
      + "en #RRGGBB.",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string" },
        slides: {
          type: "array",
          items: {
            type: "object",
            properties: {
              image_id: { type: "string", description: "el que devolvió generate_image*" },
              texts: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    text: { type: "string" }, x: { type: "number" },
                    y: { type: "number" }, size: { type: "number" },
                    style: { type: "string", enum: ["outline", "pill", "dark"] },
                    font: { type: "string", enum: ["classic", "bold", "serif",
                      "typewriter", "handwriting", "neon"] },
                    color: { type: "string" },
                  },
                  required: ["text"],
                },
              },
            },
            required: ["image_id"],
          },
        },
      },
      required: ["name", "slides"],
    },
  },
];
