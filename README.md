# MS Patagonia — Sitio web (Astro)

Sitio corporativo **multipágina** de MS Patagonia Argentina, construido en **Astro**, con la identidad del **Brand Kit** (25 años) e integración con **Clientify**. Pensado como reemplazo del sitio WordPress actual.

## Stack e identidad

- **Astro** (sitio estático, sin backend) — se despliega en cualquier hosting sirviendo `dist/`.
- **Contenido editable en Markdown** (novedades) + datos estructurados en TypeScript.
- **Brand Kit:** Azul `#3E5799`, Celeste `#69B5F7`, Amarillo `#E0B227`, Blanco `#F9FAFB`, Negro `#232323`. Tipografía **Open Sans**. Logos oficiales en `public/assets/`.

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:4321
npm run build    # genera el sitio estático en dist/
npm run preview  # previsualiza el build
```

> En `dist/` ya está una compilación lista para desplegar (Netlify, Vercel, Cloudflare Pages, o el hosting actual).

## Estructura

```
src/
├── config.ts              # Config del sitio + CLIENTIFY (tracking, chat, formularios)
├── layouts/Base.astro     # Shell: head, fuentes, Clientify, header, footer
├── components/            # Header, Footer, Brands, Branches, StoreCTA, ContactForm
├── data/                  # marcas, sucursales, sectores, soluciones, productos (editables)
├── content/novedades/     # Novedades en Markdown (agregá un .md para publicar)
├── styles/global.css      # Sistema de estilos de marca
└── pages/                 # Rutas (multipágina)
    ├── index.astro                 # Home
    ├── sobre-nosotros.astro
    ├── soluciones/[index + slug]   # 6 soluciones
    ├── productos/[index + slug]    # 14 categorías
    ├── sectores/[index + slug]     # 7 sectores
    ├── novedades/[index + slug]    # blog (Markdown)
    └── contacto.astro
public/assets/             # Logos oficiales (horizontal blanco, apilado blanco, color)
_referencia-v1/            # Versión estática inicial (solo referencia, no se publica)
```

## Integración con Clientify

Todo se configura en **`src/config.ts`** (objeto `CLIENTIFY`). Mientras los valores estén vacíos, los scripts no se cargan y el formulario funciona en modo demo.

1. **Formularios → CRM.** Cargá `formEndpoint` con la URL de envío de tu webform de Clientify (Clientify → Formularios → Integrar). El formulario de contacto mapea sus campos según `formFields` y hace el POST. Alternativamente podés pegar directamente el formulario embebido que genera Clientify dentro de `components/ContactForm.astro`.
2. **Script de seguimiento.** Cargá `trackingId` (Clientify → Configuración → Código de seguimiento). El tag se inyecta en todas las páginas desde `Base.astro`.
3. **Chat en vivo / inbox.** Cargá `chatWidgetId` (Clientify → Inbox → Chat web → Instalar). El widget se carga en todas las páginas.

> Nota: las URLs de los scripts de Clientify en `Base.astro` están armadas de forma genérica. Verificá contra el snippet exacto que te da tu panel de Clientify y ajustá la URL si difiere.

## Editar contenido

- **Novedades:** agregá un archivo `.md` en `src/content/novedades/` con el frontmatter del ejemplo.
- **Marcas / Sucursales / Sectores / Soluciones / Productos:** editá los archivos en `src/data/`.
- **Textos de Home y páginas:** en los `.astro` de `src/pages/`.

## Pendientes sugeridos

- **Imágenes reales:** hoy hero, sectores y novedades usan fondos de marca (gradientes). Reemplazar por fotos reales en `public/assets/`.
- **Tienda:** queda enlazada a `tienda.mspatagonia.com` (no se desarrolla acá).
- **Verificar los snippets exactos de Clientify** (tracking/chat/forms) contra el panel de la cuenta.
