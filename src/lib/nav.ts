// Helper de enlaces: antepone la ruta base del sitio (import.meta.env.BASE_URL).
// Funciona tanto en GitHub Pages (base '/mspatagonia-web') como en el dominio
// real (base '/'), sin cambiar los componentes.
const RAW = import.meta.env.BASE_URL || '/';
const BASE = RAW.endsWith('/') ? RAW.slice(0, -1) : RAW;

export function link(path: string): string {
  if (!path) return BASE + '/';
  // URLs externas o especiales: se devuelven sin tocar.
  if (/^(https?:|tel:|mailto:|#|\/\/)/.test(path)) return path;
  if (!path.startsWith('/')) path = '/' + path;
  return BASE + path;
}
