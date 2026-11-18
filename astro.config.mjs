import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // ── Despliegue ───────────────────────────────────────────────
  // GitHub Pages (proyecto): el sitio vive en dmetazams.github.io/mspatagonia-web/
  site: 'https://dmetazams.github.io',
  base: '/mspatagonia-web',
  //
  // Cuando migres al dominio real (mspatagonia.com), cambiá a:
  //   site: 'https://mspatagonia.com',
  //   base: '/',
  // Los enlaces se adaptan solos porque usan import.meta.env.BASE_URL
  // (helper en src/lib/nav.ts).
  // ─────────────────────────────────────────────────────────────
  output: 'static',
  build: { format: 'directory' },
  trailingSlash: 'ignore',
});
