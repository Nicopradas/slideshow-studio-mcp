/** La metodología: lo que dirige cómo se analiza una referencia viral y cómo se
 *  reescribe en el nicho del usuario.
 *
 *  Este archivo es GENERADO. No lo edites a mano: sale de la plantilla maestra y
 *  se verifica byte a byte contra ella, porque una coma distinta aquí cambia el
 *  resultado de todos los slideshows.
 */
export const MODELOS = {"google/gemini-3.1-flash-image": "Nano Banana 2", "google/gemini-3-pro-image": "Nano Banana Pro", "openai/gpt-5.4-image-2": "OpenAI Image 2", "black-forest-labs/flux.2-pro": "FLUX.2 Pro"};
export const MODELO_POR_DEFECTO = "openai/gpt-5.4-image-2";
export const PERFIL_VACIO = `(PERFIL DE PRODUCTO VACÍO — el usuario aún no lo ha creado. Genera el slideshow centrado en el nicho de la referencia y avisa de que falta el perfil: se crea con el prompt de extracción de la app, en ⚙ Perfil de producto.)`;

export const reglasCopy = (lang) => `REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.`;

export const bloqueEstilo = (styleTxt) =>
  !styleTxt || !styleTxt.trim() ? "" : `═══ ESTILO VISUAL DE MI CUENTA (MANDA SOBRE LA ESTÉTICA DE LA REFERENCIA) ═══
Todo lo que publico tiene que parecer de la MISMA cuenta: si cada slideshow sale con
una estética distinta, parece que lo publica un desconocido cada semana. Este es el
dossier de estilo de mi perfil y es innegociable en todo lo ESTÉTICO:

${styleTxt}

Cómo se reparte el trabajo con la referencia viral:
- La REFERENCIA manda en la ESTRUCTURA: nº de slides, función narrativa de cada una,
  nº de bloques de texto, posición (x,y) y tamaño (size) de cada bloque, y si vende o
  no vende. Eso se calca igual que siempre.
- MI ESTILO manda en la ESTÉTICA: tratamiento fotográfico, luz, paleta, textura,
  encuadre y ambiente de las imágenes; y también fuente (font), color y fondo
  (color/style) del texto SI mi dossier los especifica.
- Lo que mi dossier NO mencione, se copia de la referencia como siempre.
- Cuando la estética de la referencia choque con la mía, gana la mía: prefiero
  parecerme a mí mismo antes que parecerme a la referencia.

`;

export const promptExtraccion = (lang) => `Estás dentro del directorio de mi producto. Tu misión: construir el DOSSIER DE
MARKETING definitivo de este producto, TODO A NIVEL DE USUARIO — qué vive, qué
siente y qué consigue quien lo usa, cómo habla de verdad y cómo se posiciona frente
a sus alternativas. NADA técnico: me da igual la arquitectura, el stack, el código o
cómo está construido; eso no aparece ni en tus preguntas ni en el dossier. Lo usaré
como "perfil de producto" en una app que replica slideshows virales de TikTok, así
que de aquí saldrán TODOS los textos, ángulos, ganchos y el lenguaje de mis
contenidos — cuanto más extenso, concreto y verbatim sea este dossier, más variado
y más ajustado a mi público real podrá ser cada slideshow. No te conformes con
respuestas genéricas: profundiza. Trabaja en 3 fases y NO te saltes la entrevista.

═══ FASE 1 — ENTIENDE EL PRODUCTO COMO USUARIO (sin preguntarme nada aún) ═══
Usa lo que haya en el directorio (textos de UI, onboarding, landing, docs, capturas,
pricing, testimonios o reseñas si las hay, cualquier comparativa o mención de
competidores, nombres propios de features o secciones) SOLO como fuente para
entender la experiencia de usuario:
- Qué es el producto y qué consigue el usuario con él, en lenguaje llano.
- Qué puede hacer el usuario (features vistas desde fuera: "le mandas una foto y te
  dice X", nunca "usa la API de Y").
- El flujo real de uso: qué hace el usuario paso a paso y cuánto le cuesta.
- Precio/modelo si aparece, plataforma, y el tono con el que habla el producto.
- Qué pinta tiene el diferencial de EXPERIENCIA frente a lo típico del mercado.
- Cualquier palabra, expresión o glosario propio que el producto use para hablar de
  sí mismo o de sus usuarios (así no me lo tienes que preguntar después).

═══ FASE 2 — ENTREVISTA EXTENSA (por rondas, espera mi respuesta) ═══
Entrevístame a nivel de usuario, marketing y posicionamiento — nunca técnico.
Rondas cortas (3-5 preguntas) hasta cerrar todos estos frentes sin huecos; esta
entrevista alimenta TODOS mis slideshows futuros, así que cuantas más rondas hagan
falta para profundizar, mejor — no la cierres por ir rápido:
1. El diferencial REAL frente a cada alternativa concreta (nómbralas), contado como
   lo notaría un usuario, no como lo explicaría un ingeniero.
2. A quién va dirigido: segmentos concretos con su SITUACIÓN DE VIDA real (no "gente
   que quiere adelgazar" sino "quien come fuera 3 veces por semana y ya abandonó
   MyFitnessPal dos veces"), y a quién NO.
3. Dolores que resuelve: qué le pasa a alguien ANTES de encontrar el producto,
   situaciones reales y cotidianas, con ejemplos míos.
4. LENGUAJE DEL CLIENTE: pídeme frases TEXTUALES (de reseñas, comentarios, DMs,
   conversaciones reales) que la gente usa para describir su problema y para
   describir el producto — no lo que yo crea que dicen, lo que dicen literalmente.
   Esto es lo que hace que el copy suene a persona real y no a IA.
5. Por qué la gente abandona las alternativas (incluida la opción de "no hacer nada"
   o un método manual) y qué le haría quedarse aquí. Sepáralo en:
   - qué le EMPUJA a buscar algo nuevo (el dolor, la frustración con lo actual)
   - qué le ATRAE de este producto (la promesa concreta)
   - qué le mantiene ENGANCHADO a lo de antes aunque no le funcione (la costumbre)
   - qué le da MIEDO o duda a la hora de cambiar (la ansiedad del cambio)
6. Objeciones típicas de un usuario que duda, y cómo las respondo.
7. Competencia: no solo apps o marcas rivales directas — también otras formas de
   resolver lo mismo (un método manual, otra categoría de producto, "no hacer
   nada"). En qué se queda corta cada una, con sus nombres si los hay.
8. Momentos "wow" (lo que un usuario le contaría a un amigo) y cualquier prueba
   social real que pueda citar: métricas, resultados, testimonios o reseñas
   (aproximados si no tengo el dato exacto).
9. Cómo quiero posicionarlo: contra qué categoría compito, qué quiero que la gente
   diga que es, ángulos que ya me han funcionado o quiero probar, y los prohibidos.
10. Tono de marca: 3-5 adjetivos que lo describan, cómo hablo y cómo NO hablo,
    palabras o expresiones que uso y las que evito activamente.
No preguntes lo que ya sabes por la Fase 1; pregunta lo que falta y pide ejemplos
concretos cuando la respuesta salga genérica.

═══ FASE 3 — DOSSIER DEFINITIVO ═══
Cuando esté todo cubierto, devuélveme SOLO un bloque de texto en ${lang}, listo para
copiar y pegar tal cual, 100% en lenguaje de usuario (cero jerga técnica), con esta
estructura exacta (es el formato que consume mi app):

[Nombre] — [qué es, en una línea con gancho].

EL DIFERENCIAL (esto es lo que la hace distinta a todas): [párrafo, como lo vive el usuario]

QUÉ PUEDES HACER (features completas — usa solo las que pida el ángulo):
- [feature contada desde fuera, con el beneficio real]
- ...

A QUIÉN VA: [segmentos concretos, con su situación de vida real]
A QUIÉN NO VA / OBJECIONES: [y cómo responderlas]

DOLORES ANTES DE ENCONTRARNOS: [situaciones reales y cotidianas del "antes", con ejemplos]

POR QUÉ CAMBIAN (para escribir ganchos que enganchen de verdad):
- Lo que les empuja a buscar algo nuevo: [...]
- Lo que les atrae de nosotros: [...]
- Lo que les mantiene enganchados a lo de antes: [...]
- Lo que les da miedo o duda al cambiar: [...]

COMPETENCIA: [alternativas directas e indirectas, incluido "no hacer nada" o un
método manual] — en qué se queda corta cada una

LENGUAJE DEL CLIENTE (frases TEXTUALES, no parafraseadas — úsalas tal cual en el copy):
- Cómo describen el problema: "..."
- Cómo nos describen a nosotros: "..."
- Palabras/expresiones que usamos: [...]
- Palabras que evitamos: [...]

ÁNGULOS DE MARKETING (elige el que encaje con la referencia, no los mezcles):
- "[dolor o situación en palabras del usuario]" → [cómo lo resuelve el producto]
- ... (todos los ángulos que hayan salido, incluidos los de la entrevista)

POSICIONAMIENTO: [contra qué compite y qué quiero que la gente diga que es]
TONO: [3-5 adjetivos] · cómo hablar y qué evitar
PRUEBA SOCIAL: [métricas, testimonios o resultados citables, si los hay — si no hay, omite esta línea]

Cuanto más largo y concreto salga cada bloque, mejor: es el ÚNICO material del que
sacaré variedad para docenas de slideshows futuros. Nada de introducciones ni
cierre: solo el bloque. Lo pegaré como perfil de producto.`;

export const promptEntrevista = (lang, nombre) => `Vas a construir por CHAT el dossier de marketing del perfil «${nombre}»,
entrevistando al usuario. No tienes su código ni su web delante, así que todo sale
de lo que te cuente: pregunta hasta tenerlo, no rellenes huecos inventando.

De este dossier saldrán TODOS los textos, ángulos y ganchos de sus futuros
slideshows, así que prioriza PROFUNDIDAD sobre rapidez. Nada técnico: ni stack ni
arquitectura ni cómo está construido. Todo a nivel de usuario: qué vive, qué siente
y qué consigue quien lo usa.

═══ CÓMO ENTREVISTAR ═══
Por rondas CORTAS de 3-5 preguntas, esperando su respuesta antes de seguir. Cuando
una respuesta salga genérica ("ayuda a la gente a organizarse"), no la des por buena:
pide un ejemplo concreto, una situación real o una frase textual. Cubre todos estos
frentes sin dejar huecos:

1. Qué es el producto y qué consigue el usuario con él, en lenguaje llano.
2. El diferencial REAL frente a cada alternativa concreta (que las nombre), contado
   como lo notaría un usuario, no como lo explicaría un ingeniero.
3. A quién va dirigido: segmentos con su SITUACIÓN DE VIDA real (no "gente que
   quiere adelgazar" sino "quien come fuera 3 veces por semana y ya abandonó
   MyFitnessPal dos veces"), y a quién NO.
4. Dolores que resuelve: qué le pasa a alguien ANTES de encontrarlo, con situaciones
   cotidianas y ejemplos suyos.
5. LENGUAJE DEL CLIENTE: pídele frases TEXTUALES de reseñas, comentarios, DMs o
   conversaciones reales — cómo describe la gente su problema y cómo describe el
   producto. No lo que él crea que dicen: lo que dicen literalmente. Esto es lo que
   hace que el copy suene a persona y no a IA, así que insiste aunque cueste.
6. Por qué la gente abandona las alternativas (incluido "no hacer nada" o un método
   manual), separado en: qué le EMPUJA a buscar algo nuevo, qué le ATRAE de este
   producto, qué le mantiene ENGANCHADO a lo de antes aunque no le funcione, y qué
   MIEDO o duda le da cambiar.
7. Objeciones típicas de quien duda, y cómo las responde.
8. Competencia directa e indirecta (otra categoría, un método manual, no hacer
   nada), y en qué se queda corta cada una.
9. Momentos "wow" que un usuario le contaría a un amigo, y prueba social citable:
   métricas, resultados, testimonios (aproximados si no tiene el dato exacto).
10. Posicionamiento: contra qué categoría compite, qué quiere que la gente diga que
    es, ángulos que ya le han funcionado o quiere probar, y los prohibidos.
11. Tono de marca: 3-5 adjetivos, cómo habla y cómo NO habla, palabras que usa y
    palabras que evita activamente.

═══ CUANDO LO TENGAS TODO ═══
Redacta el dossier en ${lang}, 100% en lenguaje de usuario, con esta estructura
exacta (es el formato que consume la app):

[Nombre] — [qué es, en una línea con gancho].

EL DIFERENCIAL (esto es lo que la hace distinta a todas): [párrafo, como lo vive el usuario]

QUÉ PUEDES HACER (features completas — usa solo las que pida el ángulo):
- [feature contada desde fuera, con el beneficio real]
- ...

A QUIÉN VA: [segmentos concretos, con su situación de vida real]
A QUIÉN NO VA / OBJECIONES: [y cómo responderlas]

DOLORES ANTES DE ENCONTRARNOS: [situaciones reales y cotidianas del "antes", con ejemplos]

POR QUÉ CAMBIAN (para escribir ganchos que enganchen de verdad):
- Lo que les empuja a buscar algo nuevo: [...]
- Lo que les atrae de nosotros: [...]
- Lo que les mantiene enganchados a lo de antes: [...]
- Lo que les da miedo o duda al cambiar: [...]

COMPETENCIA: [alternativas directas e indirectas, incluido "no hacer nada" o un
método manual] — en qué se queda corta cada una

LENGUAJE DEL CLIENTE (frases TEXTUALES, no parafraseadas — úsalas tal cual en el copy):
- Cómo describen el problema: "..."
- Cómo nos describen a nosotros: "..."
- Palabras/expresiones que usamos: [...]
- Palabras que evitamos: [...]

ÁNGULOS DE MARKETING (elige el que encaje con la referencia, no los mezcles):
- "[dolor o situación en palabras del usuario]" → [cómo lo resuelve el producto]
- ... (todos los ángulos que hayan salido, incluidos los de la entrevista)

POSICIONAMIENTO: [contra qué compite y qué quiero que la gente diga que es]
TONO: [3-5 adjetivos] · cómo hablar y qué evitar
PRUEBA SOCIAL: [métricas, testimonios o resultados citables, si los hay — si no hay, omite esta línea]

Cuanto más largo y concreto salga cada bloque, mejor: es el ÚNICO material del que
sacaré variedad para docenas de slideshows futuros. Nada de introducciones ni
cierre: solo el bloque. Lo pegaré como perfil de producto.

Enséñaselo, pregúntale si quiere cambiar algo y, cuando te diga que sí, GUÁRDALO tú
llamando a save_profile_dossier con profile="${nombre}" y el dossier en desc.
No le hagas copiar y pegar nada: para eso está la herramienta.`;

export const promptEntrevistaConDossier = (lang, nombre) => `Vas a construir por CHAT el dossier de marketing del perfil «${nombre}»,
entrevistando al usuario. No tienes su código ni su web delante, así que todo sale
de lo que te cuente: pregunta hasta tenerlo, no rellenes huecos inventando.

Este perfil YA tiene dossier. No empieces de cero: enséñale lo que hay, pregúntale qué quiere cambiar o ampliar y trabaja sobre eso.

De este dossier saldrán TODOS los textos, ángulos y ganchos de sus futuros
slideshows, así que prioriza PROFUNDIDAD sobre rapidez. Nada técnico: ni stack ni
arquitectura ni cómo está construido. Todo a nivel de usuario: qué vive, qué siente
y qué consigue quien lo usa.

═══ CÓMO ENTREVISTAR ═══
Por rondas CORTAS de 3-5 preguntas, esperando su respuesta antes de seguir. Cuando
una respuesta salga genérica ("ayuda a la gente a organizarse"), no la des por buena:
pide un ejemplo concreto, una situación real o una frase textual. Cubre todos estos
frentes sin dejar huecos:

1. Qué es el producto y qué consigue el usuario con él, en lenguaje llano.
2. El diferencial REAL frente a cada alternativa concreta (que las nombre), contado
   como lo notaría un usuario, no como lo explicaría un ingeniero.
3. A quién va dirigido: segmentos con su SITUACIÓN DE VIDA real (no "gente que
   quiere adelgazar" sino "quien come fuera 3 veces por semana y ya abandonó
   MyFitnessPal dos veces"), y a quién NO.
4. Dolores que resuelve: qué le pasa a alguien ANTES de encontrarlo, con situaciones
   cotidianas y ejemplos suyos.
5. LENGUAJE DEL CLIENTE: pídele frases TEXTUALES de reseñas, comentarios, DMs o
   conversaciones reales — cómo describe la gente su problema y cómo describe el
   producto. No lo que él crea que dicen: lo que dicen literalmente. Esto es lo que
   hace que el copy suene a persona y no a IA, así que insiste aunque cueste.
6. Por qué la gente abandona las alternativas (incluido "no hacer nada" o un método
   manual), separado en: qué le EMPUJA a buscar algo nuevo, qué le ATRAE de este
   producto, qué le mantiene ENGANCHADO a lo de antes aunque no le funcione, y qué
   MIEDO o duda le da cambiar.
7. Objeciones típicas de quien duda, y cómo las responde.
8. Competencia directa e indirecta (otra categoría, un método manual, no hacer
   nada), y en qué se queda corta cada una.
9. Momentos "wow" que un usuario le contaría a un amigo, y prueba social citable:
   métricas, resultados, testimonios (aproximados si no tiene el dato exacto).
10. Posicionamiento: contra qué categoría compite, qué quiere que la gente diga que
    es, ángulos que ya le han funcionado o quiere probar, y los prohibidos.
11. Tono de marca: 3-5 adjetivos, cómo habla y cómo NO habla, palabras que usa y
    palabras que evita activamente.

═══ CUANDO LO TENGAS TODO ═══
Redacta el dossier en ${lang}, 100% en lenguaje de usuario, con esta estructura
exacta (es el formato que consume la app):

[Nombre] — [qué es, en una línea con gancho].

EL DIFERENCIAL (esto es lo que la hace distinta a todas): [párrafo, como lo vive el usuario]

QUÉ PUEDES HACER (features completas — usa solo las que pida el ángulo):
- [feature contada desde fuera, con el beneficio real]
- ...

A QUIÉN VA: [segmentos concretos, con su situación de vida real]
A QUIÉN NO VA / OBJECIONES: [y cómo responderlas]

DOLORES ANTES DE ENCONTRARNOS: [situaciones reales y cotidianas del "antes", con ejemplos]

POR QUÉ CAMBIAN (para escribir ganchos que enganchen de verdad):
- Lo que les empuja a buscar algo nuevo: [...]
- Lo que les atrae de nosotros: [...]
- Lo que les mantiene enganchados a lo de antes: [...]
- Lo que les da miedo o duda al cambiar: [...]

COMPETENCIA: [alternativas directas e indirectas, incluido "no hacer nada" o un
método manual] — en qué se queda corta cada una

LENGUAJE DEL CLIENTE (frases TEXTUALES, no parafraseadas — úsalas tal cual en el copy):
- Cómo describen el problema: "..."
- Cómo nos describen a nosotros: "..."
- Palabras/expresiones que usamos: [...]
- Palabras que evitamos: [...]

ÁNGULOS DE MARKETING (elige el que encaje con la referencia, no los mezcles):
- "[dolor o situación en palabras del usuario]" → [cómo lo resuelve el producto]
- ... (todos los ángulos que hayan salido, incluidos los de la entrevista)

POSICIONAMIENTO: [contra qué compite y qué quiero que la gente diga que es]
TONO: [3-5 adjetivos] · cómo hablar y qué evitar
PRUEBA SOCIAL: [métricas, testimonios o resultados citables, si los hay — si no hay, omite esta línea]

Cuanto más largo y concreto salga cada bloque, mejor: es el ÚNICO material del que
sacaré variedad para docenas de slideshows futuros. Nada de introducciones ni
cierre: solo el bloque. Lo pegaré como perfil de producto.

Enséñaselo, pregúntale si quiere cambiar algo y, cuando te diga que sí, GUÁRDALO tú
llamando a save_profile_dossier con profile="${nombre}" y el dossier en desc.
No le hagas copiar y pegar nada: para eso está la herramienta.`;

const P_generate_image_0_0 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas view_slideshow, ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

REGLA DE BACKEND: genera las imágenes con ${imgTool} (Codex CLI) y hazlo DE UNA EN UNA: Codex genera una sola a la vez.
CÓMO FUNCIONA: generar NO devuelve la imagen, devuelve un job_id. Después preguntas con check_image por ese job_id. Si te dice que sigue en curso, espera unos 20 segundos y vuelve a preguntar por el MISMO job_id: NO relances la generación, que empezaría otra desde cero y tardaría el doble. Cada imagen puede tardar varios minutos y eso es normal.
Solo cuando check_image te dé el image_id, arranca la siguiente. Si una falla de verdad, dile al usuario lo que ha pasado y ofrécele las alternativas que te dé el error, sin elegir tú.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Llama YA a view_slideshow con id=${id} para ver sus imágenes reales (en orden).
No intentes replicarla solo con los textos de arriba: la maquetación y el rol visual de cada
slide solo se ven mirando las imágenes.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Define UN bloque de estilo visual (luz, vibra)
   y repítelo en todos los prompts del set.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia, no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };
const P_generate_image_0_1 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

REGLA DE BACKEND: genera las imágenes con ${imgTool} (Codex CLI) y hazlo DE UNA EN UNA: Codex genera una sola a la vez.
CÓMO FUNCIONA: generar NO devuelve la imagen, devuelve un job_id. Después preguntas con check_image por ese job_id. Si te dice que sigue en curso, espera unos 20 segundos y vuelve a preguntar por el MISMO job_id: NO relances la generación, que empezaría otra desde cero y tardaría el doble. Cada imagen puede tardar varios minutos y eso es normal.
Solo cuando check_image te dé el image_id, arranca la siguiente. Si una falla de verdad, dile al usuario lo que ha pasado y ofrécele las alternativas que te dé el error, sin elegir tú.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Tienes sus imágenes adjuntas AQUÍ ABAJO, en orden. Son la referencia: míralas
antes de escribir nada.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Define UN bloque de estilo visual (luz, vibra)
   y repítelo en todos los prompts del set.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia, no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };
const P_generate_image_1_0 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas view_slideshow, ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

REGLA DE BACKEND: genera las imágenes con ${imgTool} (Codex CLI) y hazlo DE UNA EN UNA: Codex genera una sola a la vez.
CÓMO FUNCIONA: generar NO devuelve la imagen, devuelve un job_id. Después preguntas con check_image por ese job_id. Si te dice que sigue en curso, espera unos 20 segundos y vuelve a preguntar por el MISMO job_id: NO relances la generación, que empezaría otra desde cero y tardaría el doble. Cada imagen puede tardar varios minutos y eso es normal.
Solo cuando check_image te dé el image_id, arranca la siguiente. Si una falla de verdad, dile al usuario lo que ha pasado y ofrécele las alternativas que te dé el error, sin elegir tú.

═══ ESTILO VISUAL DE MI CUENTA (MANDA SOBRE LA ESTÉTICA DE LA REFERENCIA) ═══
Todo lo que publico tiene que parecer de la MISMA cuenta: si cada slideshow sale con
una estética distinta, parece que lo publica un desconocido cada semana. Este es el
dossier de estilo de mi perfil y es innegociable en todo lo ESTÉTICO:

${styleTxt}

Cómo se reparte el trabajo con la referencia viral:
- La REFERENCIA manda en la ESTRUCTURA: nº de slides, función narrativa de cada una,
  nº de bloques de texto, posición (x,y) y tamaño (size) de cada bloque, y si vende o
  no vende. Eso se calca igual que siempre.
- MI ESTILO manda en la ESTÉTICA: tratamiento fotográfico, luz, paleta, textura,
  encuadre y ambiente de las imágenes; y también fuente (font), color y fondo
  (color/style) del texto SI mi dossier los especifica.
- Lo que mi dossier NO mencione, se copia de la referencia como siempre.
- Cuando la estética de la referencia choque con la mía, gana la mía: prefiero
  parecerme a mí mismo antes que parecerme a la referencia.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Llama YA a view_slideshow con id=${id} para ver sus imágenes reales (en orden).
No intentes replicarla solo con los textos de arriba: la maquetación y el rol visual de cada
slide solo se ven mirando las imágenes.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Repite en TODOS los prompts el mismo bloque de
   estilo estético de mi dossier de arriba, para que este slideshow y
   todos los que ya he publicado parezcan del mismo autor.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia (salvo fuente, color y fondo si mi dossier de estilo los fija:
   ahí manda mi estilo), no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };
const P_generate_image_1_1 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

REGLA DE BACKEND: genera las imágenes con ${imgTool} (Codex CLI) y hazlo DE UNA EN UNA: Codex genera una sola a la vez.
CÓMO FUNCIONA: generar NO devuelve la imagen, devuelve un job_id. Después preguntas con check_image por ese job_id. Si te dice que sigue en curso, espera unos 20 segundos y vuelve a preguntar por el MISMO job_id: NO relances la generación, que empezaría otra desde cero y tardaría el doble. Cada imagen puede tardar varios minutos y eso es normal.
Solo cuando check_image te dé el image_id, arranca la siguiente. Si una falla de verdad, dile al usuario lo que ha pasado y ofrécele las alternativas que te dé el error, sin elegir tú.

═══ ESTILO VISUAL DE MI CUENTA (MANDA SOBRE LA ESTÉTICA DE LA REFERENCIA) ═══
Todo lo que publico tiene que parecer de la MISMA cuenta: si cada slideshow sale con
una estética distinta, parece que lo publica un desconocido cada semana. Este es el
dossier de estilo de mi perfil y es innegociable en todo lo ESTÉTICO:

${styleTxt}

Cómo se reparte el trabajo con la referencia viral:
- La REFERENCIA manda en la ESTRUCTURA: nº de slides, función narrativa de cada una,
  nº de bloques de texto, posición (x,y) y tamaño (size) de cada bloque, y si vende o
  no vende. Eso se calca igual que siempre.
- MI ESTILO manda en la ESTÉTICA: tratamiento fotográfico, luz, paleta, textura,
  encuadre y ambiente de las imágenes; y también fuente (font), color y fondo
  (color/style) del texto SI mi dossier los especifica.
- Lo que mi dossier NO mencione, se copia de la referencia como siempre.
- Cuando la estética de la referencia choque con la mía, gana la mía: prefiero
  parecerme a mí mismo antes que parecerme a la referencia.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Tienes sus imágenes adjuntas AQUÍ ABAJO, en orden. Son la referencia: míralas
antes de escribir nada.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Repite en TODOS los prompts el mismo bloque de
   estilo estético de mi dossier de arriba, para que este slideshow y
   todos los que ya he publicado parezcan del mismo autor.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia (salvo fuente, color y fondo si mi dossier de estilo los fija:
   ahí manda mi estilo), no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };
const P_generate_image_openrouter_0_0 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas view_slideshow, ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

REGLA DE BACKEND: genera TODAS las imágenes exclusivamente con ${imgTool} (OpenRouter + OpenAI Image 2). No uses generate_image ni generate_image_flux (ese es el Flux LOCAL de Draw Things, otro modelo distinto).
CÓMO FUNCIONA: generar NO devuelve la imagen, devuelve un job_id. Después preguntas con check_image por ese job_id hasta que esté lista y te dé el image_id. Es así porque generar tarda y bloquear la llamada acaba en timeout. Con OpenRouter puedes arrancarlas TODAS de seguido y luego consultarlas.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Llama YA a view_slideshow con id=${id} para ver sus imágenes reales (en orden).
No intentes replicarla solo con los textos de arriba: la maquetación y el rol visual de cada
slide solo se ven mirando las imágenes.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Define UN bloque de estilo visual (luz, vibra)
   y repítelo en todos los prompts del set.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia, no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };
const P_generate_image_openrouter_0_1 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

REGLA DE BACKEND: genera TODAS las imágenes exclusivamente con ${imgTool} (OpenRouter + OpenAI Image 2). No uses generate_image ni generate_image_flux (ese es el Flux LOCAL de Draw Things, otro modelo distinto).
CÓMO FUNCIONA: generar NO devuelve la imagen, devuelve un job_id. Después preguntas con check_image por ese job_id hasta que esté lista y te dé el image_id. Es así porque generar tarda y bloquear la llamada acaba en timeout. Con OpenRouter puedes arrancarlas TODAS de seguido y luego consultarlas.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Tienes sus imágenes adjuntas AQUÍ ABAJO, en orden. Son la referencia: míralas
antes de escribir nada.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Define UN bloque de estilo visual (luz, vibra)
   y repítelo en todos los prompts del set.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia, no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };
const P_generate_image_openrouter_1_0 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas view_slideshow, ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

REGLA DE BACKEND: genera TODAS las imágenes exclusivamente con ${imgTool} (OpenRouter + OpenAI Image 2). No uses generate_image ni generate_image_flux (ese es el Flux LOCAL de Draw Things, otro modelo distinto).
CÓMO FUNCIONA: generar NO devuelve la imagen, devuelve un job_id. Después preguntas con check_image por ese job_id hasta que esté lista y te dé el image_id. Es así porque generar tarda y bloquear la llamada acaba en timeout. Con OpenRouter puedes arrancarlas TODAS de seguido y luego consultarlas.

═══ ESTILO VISUAL DE MI CUENTA (MANDA SOBRE LA ESTÉTICA DE LA REFERENCIA) ═══
Todo lo que publico tiene que parecer de la MISMA cuenta: si cada slideshow sale con
una estética distinta, parece que lo publica un desconocido cada semana. Este es el
dossier de estilo de mi perfil y es innegociable en todo lo ESTÉTICO:

${styleTxt}

Cómo se reparte el trabajo con la referencia viral:
- La REFERENCIA manda en la ESTRUCTURA: nº de slides, función narrativa de cada una,
  nº de bloques de texto, posición (x,y) y tamaño (size) de cada bloque, y si vende o
  no vende. Eso se calca igual que siempre.
- MI ESTILO manda en la ESTÉTICA: tratamiento fotográfico, luz, paleta, textura,
  encuadre y ambiente de las imágenes; y también fuente (font), color y fondo
  (color/style) del texto SI mi dossier los especifica.
- Lo que mi dossier NO mencione, se copia de la referencia como siempre.
- Cuando la estética de la referencia choque con la mía, gana la mía: prefiero
  parecerme a mí mismo antes que parecerme a la referencia.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Llama YA a view_slideshow con id=${id} para ver sus imágenes reales (en orden).
No intentes replicarla solo con los textos de arriba: la maquetación y el rol visual de cada
slide solo se ven mirando las imágenes.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Repite en TODOS los prompts el mismo bloque de
   estilo estético de mi dossier de arriba, para que este slideshow y
   todos los que ya he publicado parezcan del mismo autor.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia (salvo fuente, color y fondo si mi dossier de estilo los fija:
   ahí manda mi estilo), no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };
const P_generate_image_openrouter_1_1 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

REGLA DE BACKEND: genera TODAS las imágenes exclusivamente con ${imgTool} (OpenRouter + OpenAI Image 2). No uses generate_image ni generate_image_flux (ese es el Flux LOCAL de Draw Things, otro modelo distinto).
CÓMO FUNCIONA: generar NO devuelve la imagen, devuelve un job_id. Después preguntas con check_image por ese job_id hasta que esté lista y te dé el image_id. Es así porque generar tarda y bloquear la llamada acaba en timeout. Con OpenRouter puedes arrancarlas TODAS de seguido y luego consultarlas.

═══ ESTILO VISUAL DE MI CUENTA (MANDA SOBRE LA ESTÉTICA DE LA REFERENCIA) ═══
Todo lo que publico tiene que parecer de la MISMA cuenta: si cada slideshow sale con
una estética distinta, parece que lo publica un desconocido cada semana. Este es el
dossier de estilo de mi perfil y es innegociable en todo lo ESTÉTICO:

${styleTxt}

Cómo se reparte el trabajo con la referencia viral:
- La REFERENCIA manda en la ESTRUCTURA: nº de slides, función narrativa de cada una,
  nº de bloques de texto, posición (x,y) y tamaño (size) de cada bloque, y si vende o
  no vende. Eso se calca igual que siempre.
- MI ESTILO manda en la ESTÉTICA: tratamiento fotográfico, luz, paleta, textura,
  encuadre y ambiente de las imágenes; y también fuente (font), color y fondo
  (color/style) del texto SI mi dossier los especifica.
- Lo que mi dossier NO mencione, se copia de la referencia como siempre.
- Cuando la estética de la referencia choque con la mía, gana la mía: prefiero
  parecerme a mí mismo antes que parecerme a la referencia.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Tienes sus imágenes adjuntas AQUÍ ABAJO, en orden. Son la referencia: míralas
antes de escribir nada.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Repite en TODOS los prompts el mismo bloque de
   estilo estético de mi dossier de arriba, para que este slideshow y
   todos los que ya he publicado parezcan del mismo autor.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia (salvo fuente, color y fondo si mi dossier de estilo los fija:
   ahí manda mi estilo), no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };
const P_generate_image_flux_0_0 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas view_slideshow, ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Llama YA a view_slideshow con id=${id} para ver sus imágenes reales (en orden).
No intentes replicarla solo con los textos de arriba: la maquetación y el rol visual de cada
slide solo se ven mirando las imágenes.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Define UN bloque de estilo visual (luz, vibra)
   y repítelo en todos los prompts del set.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia, no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };
const P_generate_image_flux_0_1 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Tienes sus imágenes adjuntas AQUÍ ABAJO, en orden. Son la referencia: míralas
antes de escribir nada.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Define UN bloque de estilo visual (luz, vibra)
   y repítelo en todos los prompts del set.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia, no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };
const P_generate_image_flux_1_0 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas view_slideshow, ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

═══ ESTILO VISUAL DE MI CUENTA (MANDA SOBRE LA ESTÉTICA DE LA REFERENCIA) ═══
Todo lo que publico tiene que parecer de la MISMA cuenta: si cada slideshow sale con
una estética distinta, parece que lo publica un desconocido cada semana. Este es el
dossier de estilo de mi perfil y es innegociable en todo lo ESTÉTICO:

${styleTxt}

Cómo se reparte el trabajo con la referencia viral:
- La REFERENCIA manda en la ESTRUCTURA: nº de slides, función narrativa de cada una,
  nº de bloques de texto, posición (x,y) y tamaño (size) de cada bloque, y si vende o
  no vende. Eso se calca igual que siempre.
- MI ESTILO manda en la ESTÉTICA: tratamiento fotográfico, luz, paleta, textura,
  encuadre y ambiente de las imágenes; y también fuente (font), color y fondo
  (color/style) del texto SI mi dossier los especifica.
- Lo que mi dossier NO mencione, se copia de la referencia como siempre.
- Cuando la estética de la referencia choque con la mía, gana la mía: prefiero
  parecerme a mí mismo antes que parecerme a la referencia.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Llama YA a view_slideshow con id=${id} para ver sus imágenes reales (en orden).
No intentes replicarla solo con los textos de arriba: la maquetación y el rol visual de cada
slide solo se ven mirando las imágenes.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Repite en TODOS los prompts el mismo bloque de
   estilo estético de mi dossier de arriba, para que este slideshow y
   todos los que ya he publicado parezcan del mismo autor.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia (salvo fuente, color y fondo si mi dossier de estilo los fija:
   ahí manda mi estilo), no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };
const P_generate_image_flux_1_1 = (o) => { const {app,lang,refNicho,body,vistas,saveRate,n,imgTool,id,styleTxt} = o; return `Tienes acceso al MCP "slideshow-studio" (herramientas ${imgTool} y
create_slideshow). Quiero que repliques una referencia viral de TikTok en MI nicho y
me la generes ENTERA en mi app local, lista para revisar.

═══ ESTILO VISUAL DE MI CUENTA (MANDA SOBRE LA ESTÉTICA DE LA REFERENCIA) ═══
Todo lo que publico tiene que parecer de la MISMA cuenta: si cada slideshow sale con
una estética distinta, parece que lo publica un desconocido cada semana. Este es el
dossier de estilo de mi perfil y es innegociable en todo lo ESTÉTICO:

${styleTxt}

Cómo se reparte el trabajo con la referencia viral:
- La REFERENCIA manda en la ESTRUCTURA: nº de slides, función narrativa de cada una,
  nº de bloques de texto, posición (x,y) y tamaño (size) de cada bloque, y si vende o
  no vende. Eso se calca igual que siempre.
- MI ESTILO manda en la ESTÉTICA: tratamiento fotográfico, luz, paleta, textura,
  encuadre y ambiente de las imágenes; y también fuente (font), color y fondo
  (color/style) del texto SI mi dossier los especifica.
- Lo que mi dossier NO mencione, se copia de la referencia como siempre.
- Cuando la estética de la referencia choque con la mía, gana la mía: prefiero
  parecerme a mí mismo antes que parecerme a la referencia.

MI NICHO Y MI APP (dossier de contexto):
${app}

PARA QUÉ SIRVE ESE DOSSIER (léelo dos veces, es donde más se falla):
te dice EN QUÉ NICHO me muevo y cómo habla mi público. NO es el tema del post y no es
un folleto que haya que colocar en alguna slide.

La cuenta de la referencia seguramente vende algo (un curso, una app, una asesoría) y
aun así su slideshow NO habla de eso: habla de un tema de su nicho, y justo por eso se
hizo viral. Nadie guarda un anuncio; se guarda lo que sirve. Así que:
- Lo que REPLICAS es el alma de la referencia: su formato, su ángulo, su tono y la
  mecánica exacta de su gancho.
- Lo que CAMBIAS es el tema, que sale de MI nicho y te lo puedes inventar.
- Mi producto no es el tema. Solo aparece si la referencia mete producto, en la misma
  slide y con la misma intensidad; y si la referencia no lo hace, el mío tampoco.
Si el resultado se puede leer como un anuncio de lo mío, está mal hecho: parece un
tablón de anuncios y no lo comparte nadie. Mi conversión llega indirecta, por la bio y
los comentarios, y para eso basta con que el contenido sea tan bueno que den ganas de
mirar quién lo ha publicado.

REFERENCIA VIRAL (nicho original: ${refNicho}, ${n} slides,
${vistas} vistas, save rate ${saveRate}%):
${body}Tienes sus imágenes adjuntas AQUÍ ABAJO, en orden. Son la referencia: míralas
antes de escribir nada.

═══ FASE 1 — ANALIZA LA REFERENCIA (usa tu visión con las imágenes) ═══
1. FORMATO: qué tipo de pieza es, con nombre propio (top o lista, curiosidades,
   confesión, opinión polémica, error que comete todo el mundo, antes y después,
   storytime, mito contra realidad, comparativa, carta a alguien…). Esto es lo
   primero que se replica y lo que más condiciona el resto.
2. ÁNGULO Y TONO: desde dónde lo cuenta (confrontación, complicidad, autoridad,
   vulnerabilidad, humor seco, urgencia, secreto que se comparte…) y por qué esa voz
   concreta funciona en ese formato.
3. GANCHO: qué hace EXACTAMENTE la slide 1 para frenar el dedo. Qué promete, qué
   esconde, qué tensión abre que obligue a deslizar.
4. POR QUÉ SE GUARDA: qué emoción o qué utilidad hace que alguien quiera volver.
5. ¿MENCIONA ALGÚN PRODUCTO? En qué slide y con qué intensidad. Cuidado con esto:
   que la CUENTA venda algo no significa que el POST vaya de eso. Juzga solo lo que
   ves en las slides. Si el post no mete producto, el mío tampoco.
6. MAQUETACIÓN DEL TEXTO, bloque a bloque. Esto se CALCA, no se interpreta, y es
   donde más se nota si el resultado parece un clon o una imitación mala. Amplía las
   imágenes y para CADA bloque de texto de CADA slide decide:

   font — mírale la FORMA a las letras, no la sensación general:
     ¿tienen remates o patitas en los extremos? -> serif
     ¿todas ocupan el mismo ancho y van muy separadas? -> typewriter
     ¿parece escrito a mano, con trazo continuo? -> handwriting
     ¿va en mayúsculas con un halo de color que ilumina? -> neon
     ¿es de palo seco MUY gruesa, casi negra? -> bold
     ¿es de palo seco de grosor normal? -> classic
     Si dudas entre dos, decide por el grosor del trazo y por si hay remates.
     No pongas classic "por defecto": classic es una decisión, no un descarte.

   style — el fondo del bloque:
     texto suelto con reborde de otro color -> outline
     caja de color OPACA detrás del texto -> pill
     caja translúcida que deja ver la foto -> dark

   color — el color EXACTO que ves, en "#RRGGBB" si no cae justo en la paleta. En
     outline es el color de la LETRA; en pill/dark es el color de la CAJA.

   Anota además posición (x,y en fracciones 0-1), tamaño relativo, si va en
   mayúsculas o minúsculas, y por dónde parte cada línea.
   Escríbeme esta tabla ANTES de generar nada. Un bloque que te saltes es un bloque
   que no se va a parecer.
7. ROL VISUAL de cada imagen (selfie UGC, POV, captura de pantalla, flat lay,
   collage, primer plano de producto…) — el ROL, no la escena literal del nicho
   ${refNicho}. Y anota CÓMO CONVIVE EL TEXTO CON LA IMAGEN en cada slide:
     (a) la imagen deja una zona despejada y el texto se coloca ahí, o
     (b) el texto va ENCIMA de una imagen llena y se lee por su caja o su reborde.
   Esto importa mucho: si la referencia es un collage o una foto sin aire y el texto
   la pisa, tu versión tiene que hacer lo mismo. Inventarte un hueco vacío donde la
   referencia no lo tiene cambia la composición y canta muchísimo.
8. ¿Alguna slide enseña de verdad un dispositivo (móvil, portátil, tablet) con una
   app o web EN PANTALLA (no solo sujetando el móvil, sino mostrando su interfaz)?
   Marca cuáles. Solo en esas, más adelante, tiene sentido usar una captura real de
   MI producto en vez de una interfaz inventada.

═══ FASE 2 — ELIGE EL TEMA (dentro de MI nicho) ═══
Antes de generar nada, decide de qué va mi slideshow:
- Mismo FORMATO, mismo ÁNGULO, mismo TONO y misma mecánica de gancho. Eso no se toca.
- Tema NUEVO sacado de mi nicho, y te lo puedes inventar: un error que comete todo el
  mundo, una creencia falsa, una rutina, una comparación, una lista de cosas que nadie
  cuenta… lo que pida el formato.
- Cero elementos del nicho ${refNicho}.
- El tema NO es mi producto. Si el formato es "5 curiosidades", que sean 5
  curiosidades del nicho que le sirvan a alguien aunque no compre nada nunca.
Dime en una línea el tema que has elegido, y sigue sin esperar respuesta.

═══ FASE 3 — GENERA MI VERSIÓN EN LA APP LOCAL (MCP) ═══
Misma arquitectura y mismo nº de slides que la referencia:

0a. Si alguna slide va a enseñar una PERSONA reconocible (cara, medio cuerpo,
   manos con la cara al fondo), llama a list_profile_faces ANTES de generarla y pasa
   los file que te devuelva como reference_shot_files a ${imgTool}. Soy siempre la
   misma persona en mis publicaciones: si en cada slideshow sale una cara distinta,
   se nota a la legua que es generado. Si no tengo fotos subidas te lo dirá, y
   entonces genera a la persona libremente pero coherente dentro del slideshow.
0b. Si en el punto 8 marcaste alguna slide con una app o web EN PANTALLA, llama a
   list_profile_shots antes de generar esa slide: si tengo capturas reales que
   encajen, pásalas también como reference_shot_files para que esa pantalla sea mi
   producto de verdad y no una interfaz inventada. Si no encaja ninguna, sigue sin
   más, no es obligatorio.
1. Por cada slide llama a ${imgTool}: prompt autocontenido, vertical 4:5,
   fotografía del ROL visual equivalente en MI nicho, SIN texto ni letras dentro de
   la imagen. La composición la decide el punto 7: si en la referencia el texto va
   sobre una zona despejada, pide esa zona despejada; si el texto pisa una imagen
   llena (collage, primer plano, foto sin aire), NO pidas hueco, pide la misma
   composición llena y deja que el texto se lea por su caja o su reborde.
   Repite en TODOS los prompts el mismo bloque de
   estilo estético de mi dossier de arriba, para que este slideshow y
   todos los que ya he publicado parezcan del mismo autor.
2. Con todos los image_id, llama a create_slideshow: name descriptivo y, por slide,
   sus textos EN ${lang} (tono TikTok casual, misma función narrativa que la slide
   equivalente) con la maquetación calcada de la tabla del punto 6: mismo nº de bloques, MISMA
   fuente (font), MISMO color y fondo (color/style), posición (x,y) y tamaño (size)
   equivalentes — el objetivo es que el estilo del texto se vea IGUAL que en la
   referencia (salvo fuente, color y fondo si mi dossier de estilo los fija:
   ahí manda mi estilo), no solo la posición — cuidando que el texto se lea bien sobre la
   imagen generada.

REGLAS DE COPY (no negociables):
- ${lang} NATIVO de TikTok: escribe como habla la gente de verdad. Lee cada frase en
  voz alta antes de darla por buena; si suena a traducción del inglés o a robot
  ("trucos random para SÍ contar", "dejar de fallar a la semana"), reescríbela.
  Cero calcos del inglés.
- Cada slide, SIN EXCEPCIÓN, tiene que tener gancho propio que obligue a pasar a
  la siguiente. PROHIBIDO el listicle plano "1., 2., 3." o "tip 4", salvo que la
  referencia use EXACTAMENTE ese formato, y aun así cada slide lleva gancho, no
  una etiqueta.
- PROHIBIDO el guión largo (—) en los textos: huele a IA a kilómetros. Usa punto,
  coma, dos puntos o paréntesis.
- Test del guardado: cada slide tiene que sonar tan verdad que dé ganas de
  guardarla. Si un consejo es relleno inventado que ninguna persona real diría,
  fuera: mejor 5 verdades que 7 rellenos.
- Escribe para el nicho AMPLIO (toda la gente que vive ese dolor), no para el
  micro-segmento que ya usa un producto o ya domina el tema. Lo amplio y relatable
  viraliza; el micro-hábito raro, no.
- Si el dossier trae LENGUAJE DEL CLIENTE (frases textuales) o POR QUÉ CAMBIAN
  (push/pull/hábito/ansiedad), mínalos de verdad: una frase textual de un cliente
  real vale más que diez inventadas por ti, y el "empuje" (push) suele ser el mejor
  material para el hook de la slide 1 — no los ignores por ir más rápido.
3. Al final dime el nombre del slideshow creado, un caption con hashtags, y 5 hooks
   alternativos para la slide 1.

No me pidas confirmación entre pasos: analiza, genera las imágenes y crea el
slideshow del tirón.`; };

const VARIANTES = { P_generate_image_0_0, P_generate_image_0_1, P_generate_image_1_0, P_generate_image_1_1, P_generate_image_openrouter_0_0, P_generate_image_openrouter_0_1, P_generate_image_openrouter_1_0, P_generate_image_openrouter_1_1, P_generate_image_flux_0_0, P_generate_image_flux_0_1, P_generate_image_flux_1_0, P_generate_image_flux_1_1 };

export function promptReplica(o) {
  const clave = `P_${o.imgTool}_${o.styleTxt && o.styleTxt.trim() ? 1 : 0}_${o.listas ? 1 : 0}`;
  const f = VARIANTES[clave];
  if (!f) throw new Error("variante de prompt desconocida: " + clave);
  return f(o);
}
