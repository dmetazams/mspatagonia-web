# MS Patagonia — Sitio web corporativo

Sitio one-page para MS Patagonia Argentina, con la estructura tipo Clima Design y la identidad visual oficial del Brand Kit (manual de marca "25 años"), usando el contenido real de mspatagonia.com.

## Identidad (Brand Kit)

- **Colores:** Azul institucional `#3E5799`, Celeste `#69B5F7`, Amarillo 25 años `#E0B227`, Blanco `#F9FAFB`, Negro `#232323`, neutros Acero `#96A3C7` / Aluminio `#C5CCE0`.
- **Tipografía:** Open Sans (títulos y cuerpo).
- **Logo:** se usan los archivos oficiales del Brand Kit (carpeta Logo/PNG), no un texto:
  - `assets/logo-ms-horizontal-blanco.png` → header (fondo oscuro).
  - `assets/logo-ms-apilado-blanco.png` → footer.
  - `assets/logo-ms-color.png` → favicon / usos sobre fondo claro.

## Estructura

```
MSPatagoniaWeb/
├── index.html        # Marcado de todas las secciones
├── css/styles.css    # Estilos (paleta dark #212529 + acento azul #009EE3)
└── js/main.js        # Datos (marcas, sucursales) e interacciones
```

## Secciones

Hero · Sobre nosotros (4 pilares) · Productos · Sectores y aplicaciones · Marcas (19, con texto) · Banner Tienda · Propósito · Novedades · Sucursales (7, con tabs) · Contacto · Footer.

## Características

- Header oscuro sticky con mega-menú desplegable.
- Carrusel infinito de marcas + panel detalle (lista lateral seleccionable).
- Tabs de sucursales con dirección, teléfonos y horarios.
- Formulario de asesoramiento con validación client-side.
- Animaciones reveal on scroll, botón flotante de WhatsApp, 100% responsive.

## Cómo verlo

Abrí `index.html` en el navegador (doble clic) o serví la carpeta:

```bash
python -m http.server 8000   # luego http://localhost:8000
```

## Pendientes / notas

- **Tienda**: queda enlazada a `https://tienda.mspatagonia.com/` (sin desarrollar, según lo acordado).
- **Imágenes**: por ahora se usan fondos con gradientes/placeholders. Reemplazar por fotos reales en hero, productos, sectores y novedades cuando estén disponibles.
- El formulario hoy solo valida y muestra confirmación; falta conectar el envío al backend/email.
- Los logos de marca se muestran como texto; reemplazar por los logos oficiales (SVG/PNG) en `js/main.js` / `assets/`.
