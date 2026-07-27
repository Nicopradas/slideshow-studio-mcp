# Slideshow Studio · conector MCP

Replica slideshows virales de TikTok en tu nicho, hablando con tu agente.

Le dices **«créame un slideshow»** y él busca una referencia viral, la analiza,
escribe los textos con tu voz, genera las imágenes y te devuelve el resultado
montado. Tú lo retocas y lo publicas.

## Qué es esto

Es el conector que se instala en **tu ordenador**. Tu perfil, el catálogo de
referencias y los slideshows que vas creando viven en la webapp; aquí solo está
la pieza que tiene que correr en tu máquina, y está ahí por un motivo: **las
imágenes se generan en tu equipo**, con tu propio Codex CLI si lo tienes (sin
coste de API, va con tu suscripción de ChatGPT), con OpenRouter si prefieres
pagar por llamada, o con Flux en local vía Draw Things.

Pesa unos pocos MB. El catálogo de imágenes no se descarga.

## Instalación

No hay nada que descargar ni que instalar: `npx` se encarga.

Entra en la webapp, pestaña **MCP**, genera tu token y copia la configuración
que te da. En Claude Desktop: Configuración → **Desarrollador** → Editar
configuración. Pega esto con **tu** token:

```json
{
  "mcpServers": {
    "slideshow-studio": {
      "command": "npx",
      "args": ["-y", "github:Nicopradas/slideshow-studio-mcp"],
      "env": {
        "SLIDESHOW_API": "https://studio.buildershub.es",
        "SLIDESHOW_TOKEN": "tu token"
      }
    }
  }
}
```

Necesitas Node 18 o superior. Si no lo tienes: `brew install node`, o
descárgalo de [nodejs.org](https://nodejs.org).

Cierra Claude Desktop con **⌘Q** (cerrar la ventana no basta) y ábrelo otra vez.

> No uses «Añadir conector personalizado» de los ajustes: ese formulario es para
> servidores remotos con URL, y este es local. Va en el archivo de
> configuración, como arriba.

## Qué le puedes pedir

Todo en lenguaje natural, no hay sintaxis que memorizar.

- **«créame un slideshow»** — saca una referencia al azar y la replica
- **«replícame la referencia 2217»** — el id sale del botón de cada tarjeta
- **«replícame la de fulanito»** — busca por cuenta de TikTok
- **«genérame 5 slideshows»** — una tanda entera, uno detrás de otro
- **«configura mi perfil»** — te entrevista y guarda tu dossier
- **«añade esta captura a mi perfil»** — imágenes reales de tu producto

Antes de generar te preguntará **para qué perfil** y **con qué backend**, porque
uno cuesta dinero y otro cuesta tiempo, y eso lo decides tú.

## Backends de imagen

| Backend | Coste | Requisito |
|---|---|---|
| Codex CLI | Gratis, va con tu suscripción de ChatGPT | Codex instalado y con sesión iniciada |
| OpenRouter | De pago, por imagen | Tu propia API key |
| Draw Things | Gratis, corre en tu Mac | La app abierta con su API activada |

## Configuración por entorno

Las dos primeras las rellena por ti la pestaña MCP de la webapp. Las demás son
opcionales.

| Variable | Para qué |
|---|---|
| `SLIDESHOW_API` | URL de la webapp |
| `SLIDESHOW_TOKEN` | Tu token personal |
| `OPENROUTER_API_KEY` | Si generas con OpenRouter |
| `MAX_BATCH` | Tope de slideshows por tanda (10) |
| `MAX_REFERENCE_IMAGES` | Cuántas slides de una referencia ve el agente (20) |
| `CODEX_PARALLEL` | Generaciones simultáneas de Codex (2) |
| `CODEX_BIN` | Ruta de Codex, si el conector no lo encuentra solo |
| `FLUX_URL` | Draw Things, si no está en el puerto 7860 |

## Si vas a generar con Codex

El conector ejecuta tu Codex CLI en tu ordenador. Necesitas dos cosas:

```bash
npm i -g @openai/codex   # si no lo tienes
codex login              # con tu cuenta de ChatGPT
```

No hay que conectar nada más: el conector busca el binario solo, incluido si lo
instalaste con nvm. Si aun así no lo encuentra, ejecuta `which codex` y pon esa
ruta como `CODEX_BIN` en la configuración del conector.

## Licencia

MIT.
