# Análisis de viabilidad — Migración mspatagonia.com → Astro

**Fecha:** noviembre 2026
**Sitio actual:** WordPress + Rank Math SEO · tienda en subdominio aparte
**Destino propuesto:** sitio estático en Astro + Brand Kit + Clientify

---

## 1. Veredicto

La migración es **viable y de bajo riesgo técnico**. Astro estático es un destino ideal para un sitio de este tipo: más rápido, más barato de hostear y sin la superficie de ataque/mantenimiento de WordPress. El prototipo ya construido valida el enfoque de punta a punta (diseño de marca, build, estructura, integración con Clientify).

El trabajo real no está en la tecnología sino en **dos cosas**: el **volumen de contenido** (el sitio actual tiene ~200 páginas, no ~37) y **dos decisiones de negocio** que definen el alcance y el modelo de mantenimiento. Ninguna es un bloqueante; sí condicionan el esfuerzo.

---

## 2. Inventario real del sitio actual

A diferencia de lo que sugiere el menú, el sitio tiene **~203 URLs indexadas** (relevadas del `sitemap_index.xml`, generado por Rank Math):

| Tipo de contenido | URLs | Patrón de URL actual |
|---|---|---|
| Novedades (posts) | 12 | `/<slug>/` (en la raíz) |
| Páginas institucionales | 2 | `/`, `/sobre-nosotros/` |
| Soluciones | 34 | `/soluciones/<slug>/` |
| Productos | 83 | `/productos/<slug>/` |
| Sectores | 42 | `/sectores/<slug>/` |
| Sucursales | 8 | `/sucursales/<slug>/` |
| Marcas | 21 | `/marcas/<slug>/` |
| Categoría | 1 | `/category/sin-categoria/` (descartable) |
| **Total** | **~203** | |

Dato clave: cada **ítem** de soluciones, productos, sectores y marcas es una **página propia** (ej. `/productos/sello-mecanico-flowserve-qbq/`, `/sectores/extraccion-de-agua-subterranea/`). El prototipo actual cubre la estructura de primer nivel (37 páginas: índices + categorías), pero no la profundidad de detalle. Escalar de 37 a ~200 páginas es el grueso del proyecto.

---

## 3. Viabilidad técnica

**Hosting y rendimiento.** Astro genera HTML estático: se puede desplegar en Netlify, Vercel, Cloudflare Pages o incluso en el hosting actual sirviendo la carpeta `dist/`. Menor costo, mejor performance y sin actualizaciones de plugins ni vulnerabilidades de WordPress. ✔ Sin obstáculos.

**Extracción de contenido (lo que vuelve viable el volumen).** WordPress expone una **API REST** (`/wp-json/wp/v2/...`). Eso permite extraer los ~200 contenidos de forma **automatizada** —título, cuerpo, slug, imágenes y metadatos SEO— y convertirlos a Markdown/JSON con un script, en lugar de copiarlos a mano. Esto baja el esfuerzo de "inviable a mano" a "una tarea de datos acotada". ✔ Principal factor a favor.

**Media / imágenes.** Hay que exportar la biblioteca de medios (fotos de productos, novedades, obras) y referenciarlas desde `public/`. Es mecánico pero hay que contemplar el volumen y optimizarlas.

**Tienda.** `tienda.mspatagonia.com` es un subdominio independiente: **no migra y no se ve afectada**. Riesgo nulo.

---

## 4. SEO y URLs — el punto más sensible (y manejable)

El mayor riesgo de cualquier migración es perder posicionamiento. Acá hay una **buena noticia**: los patrones de URL del sitio actual se pueden **replicar 1:1 en Astro**.

| Contenido | URL actual | URL en Astro (recomendado) | Acción |
|---|---|---|---|
| Soluciones | `/soluciones/<slug>/` | `/soluciones/<slug>/` | Igual → sin redirect |
| Productos | `/productos/<slug>/` | `/productos/<slug>/` | Igual → sin redirect |
| Sectores | `/sectores/<slug>/` | `/sectores/<slug>/` | Igual → sin redirect |
| Marcas | `/marcas/<slug>/` | `/marcas/<slug>/` | Igual → sin redirect |
| Novedades | `/<slug>/` (raíz) | `/<slug>/` o `/novedades/<slug>/` | Decisión (ver abajo) |

Si respetamos los slugs, los redirects son mínimos. (El prototipo hoy usa `/novedades/<slug>` y agrupa productos por categoría; para la migración real conviene **conservar exactamente las URLs actuales** y la granularidad de detalle.)

Checklist SEO de la migración: regenerar `<title>`/meta description por página (hoy las maneja Rank Math), generar `sitemap.xml` (Astro tiene integración oficial), `robots.txt`, redirects 301 para lo que cambie, y revalidar en Google Search Console tras el cutover. ✔ Gestionable con un plan.

---

## 5. Modelo de edición — decisión #1

Hoy, en WordPress, personal no técnico carga novedades y productos desde el panel. En Astro el contenido vive en archivos (Markdown/JSON). Con ~200 páginas y una tienda que suma productos, hay que definir **quién edita y cómo**:

- **Opción A — Por código (Git/Markdown).** Lo mantiene Sistemas. Más simple y barato; requiere que los cambios de contenido pasen por el equipo técnico.
- **Opción B — CMS headless** (Decap/Netlify CMS, TinaCMS o Strapi) sobre el mismo Astro. Da un panel para que cualquiera cargue novedades/productos sin tocar código, conservando el sitio estático. Más setup inicial, pero replica la comodidad del admin de WordPress.

Recomendación: si el equipo comercial carga productos/novedades con frecuencia, **Opción B**. Si esos cambios son esporádicos y los centraliza Sistemas, **Opción A** alcanza.

---

## 6. Productos vs. Tienda — decisión #2

El sitio principal tiene **83 páginas de `/productos/`** informativas, además de la tienda (subdominio) que es donde se compra. Hay que decidir:

- **Migrar las 83** como páginas informativas (preserva SEO y contenido, mayor esfuerzo), o
- **Consolidar**: mantener categorías informativas en el sitio nuevo y derivar el detalle/compra a la tienda (menos páginas, pero se pierden URLs que hoy pueden tener tráfico/SEO → requieren redirects).

Esta decisión mueve el alcance de forma significativa (es la diferencia entre ~120 y ~200 páginas) y conviene tomarla con los datos de tráfico de Search Console / Analytics.

---

## 7. Integraciones a contemplar

- **Clientify** (nuevo): formularios → CRM, tracking y chat. Ya está cableado en el prototipo; falta cargar los IDs reales.
- **Facebook/Meta Pixel** (hoy vía PixelYourSite): se reinstala como script en el layout.
- **Rank Math SEO**: su rol (metas + sitemap + redirects) se reemplaza por la config SEO de Astro.
- **Formularios**: el form actual de WordPress pasa a Clientify.
- **Analytics** (si hay GA): reinstalar y conservar la propiedad.

---

## 8. Riesgos y mitigación

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Pérdida de SEO por cambio de URLs | Alto | Replicar slugs 1:1 + redirects 301 + sitemap + Search Console |
| Volumen de contenido (~200 páginas) | Medio | Extracción automatizada vía `wp-json` → Markdown/JSON |
| Edición por personal no técnico | Medio | Definir modelo (código vs CMS headless) antes de migrar |
| Imágenes/media sin migrar | Medio | Exportar biblioteca de medios y optimizar |
| Caída durante el cutover | Bajo | Desplegar en paralelo, probar, y recién cambiar DNS |
| Relación productos ↔ tienda | Medio | Decidir alcance con datos de tráfico |

---

## 9. Esfuerzo estimado por fases

| Fase | Qué incluye | Estado |
|---|---|---|
| 0 · Prototipo | Diseño de marca, arquitectura Astro, 37 páginas, Clientify cableado | ✅ Hecho |
| 1 · Inventario y decisiones | Confirmar alcance (productos/tienda), modelo de edición, mapa de URLs | Pendiente |
| 2 · Extracción de contenido | Script sobre `wp-json` → Markdown/JSON + export de media | Pendiente |
| 3 · Escalado de páginas | Generar las ~200 páginas desde el contenido extraído | Pendiente |
| 4 · SEO y redirects | Metas por página, sitemap, 301, robots | Pendiente |
| 5 · Clientify real | Cargar IDs, probar formularios/tracking/chat | Pendiente |
| 6 · QA y cutover | Pruebas, deploy en paralelo, DNS, Search Console | Pendiente |

---

## 10. Qué ya está validado

El prototipo (carpeta de este proyecto) **demuestra la viabilidad**: la identidad del Brand Kit aplicada, la arquitectura multipágina en Astro, el build limpio (37 páginas) y la integración con Clientify cableada. Es la prueba de que el camino funciona; lo que resta es **escalar contenido** y **tomar las dos decisiones** de las secciones 5 y 6.

## 11. Próximos pasos sugeridos

1. Sacar de Google Analytics/Search Console el tráfico por sección (sobre todo `/productos/`) para decidir alcance.
2. Definir el modelo de edición (código vs CMS headless).
3. Autorizar la **extracción automatizada** vía `wp-json` para dimensionar con exactitud el contenido real.
4. Con eso, estimar tiempos cerrados por fase.
