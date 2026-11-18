export interface Solucion {
  slug: string;
  title: string;
  intro: string;
  items: string[];
}

export const soluciones: Solucion[] = [
  { slug: 'aire-comprimido', title: 'Aire comprimido',
    intro: 'Diseñamos, proveemos e instalamos sistemas de aire comprimido eficientes, con monitoreo y control de calidad del aire para cada proceso industrial.',
    items: ['Air Net', 'Monitoreo de sistemas', 'Control de la calidad del aire', 'Plan de mantenimiento total', 'Plan de inspección, auditoría y consultoría'] },
  { slug: 'bombeo-de-liquido', title: 'Bombeo de líquidos',
    intro: 'Soluciones integrales de bombeo e impulsión de fluidos, desde bombas de pozo hasta estaciones de efluentes y sistemas contra incendios.',
    items: ['Instalación de bombas de pozo', 'Skid de bombeo', 'Skid de dosificación', 'Estaciones de efluentes / pluviales', 'Bombeo solar', 'Sistemas contra incendios'] },
  { slug: 'climatizacion', title: 'Climatización',
    intro: 'Sistemas de climatización a medida de cada espacio: por agua, aire acondicionado, radiación o aire caliente, con eficiencia energética.',
    items: ['Instalación por agua', 'Instalaciones de aire acondicionado', 'Instalación por radiación', 'Instalación por aire caliente'] },
  { slug: 'electricas', title: 'Eléctricas',
    intro: 'Diseño y fabricación de tableros eléctricos para minería, industria, construcción y sistemas de bombeo y calefacción.',
    items: ['Tableros para minería', 'Tableros para bombas de sistemas de elevación e impulsión', 'Tableros para sistemas de calefacción', 'Tableros de distribución para construcción', 'Tableros para bombas sumergibles', 'Tableros para bombas de desagüe cloacales / pluviales'] },
  { slug: 'servicios', title: 'Servicios',
    intro: 'Servicio técnico integral: obras llave en mano, asistencia en sitio, reparación y mantenimiento de equipos de toda la gama.',
    items: ['Ejecución de obras llave en mano', 'Asistencia técnica en sitio', 'Alineación', 'Reparación de bombas', 'Ensamble de bombas', 'Mantenimiento de calefacción y aire acondicionado', 'Mantenimiento de compresores', 'Mantenimiento de luminarias', 'Mantenimiento de plantas de ósmosis inversa', 'Mantenimiento de generadores eléctricos'] },
  { slug: 'tratamiento-de-agua', title: 'Tratamiento de agua',
    intro: 'Soluciones de tratamiento de agua para consumo y de efluentes, descentralizadas y eficientes, para industrias y comunidades.',
    items: ['Tratamiento de agua para consumo', 'Tratamiento de efluentes'] },
];
