import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://mspatagonia.com',
  // Sitio 100% estático: se puede desplegar en cualquier hosting (Netlify, Vercel,
  // Cloudflare Pages, S3, o el mismo hosting actual) sirviendo la carpeta dist/.
  output: 'static',
  build: { format: 'directory' },
  trailingSlash: 'ignore'
});
