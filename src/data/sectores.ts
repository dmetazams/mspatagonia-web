export interface Sector {
  slug: string;
  title: string;
  grad: string; // clase de gradiente de marca
  intro: string;
  bullets: string[];
}

export const sectores: Sector[] = [
  { slug: 'oil-gas', title: 'Oil & Gas', grad: 'sg1',
    intro: 'Soluciones robustas y confiables para la industria del petróleo y el gas, con equipos y servicios que responden a las exigencias de la Patagonia Austral.',
    bullets: ['Bombeo de líquidos y skids de dosificación', 'Sellos mecánicos y válvulas industriales (ANSI/API)', 'Aire comprimido y tratamiento de aire', 'Asistencia técnica en sitio'] },
  { slug: 'empresas-de-agua', title: 'Empresas de agua', grad: 'sg2',
    intro: 'Acompañamos a prestadoras y cooperativas de agua con soluciones de bombeo, tratamiento y monitoreo eficientes.',
    bullets: ['Bombas de pozo e impulsión', 'Tratamiento de agua para consumo', 'Tratamiento de efluentes', 'Estaciones de bombeo y telemetría'] },
  { slug: 'construccion', title: 'Construcción', grad: 'sg3',
    intro: 'Equipamiento e instalaciones para obra: climatización, agua caliente sanitaria, tableros y energía.',
    bullets: ['Climatización e instalaciones por agua/aire', 'Calderas y radiadores', 'Tableros de distribución para construcción', 'Grupos electrógenos'] },
  { slug: 'mineria', title: 'Minería', grad: 'sg4',
    intro: 'Soluciones de alta exigencia para operaciones mineras, con foco en continuidad operativa y seguridad.',
    bullets: ['Tableros para minería', 'Bombas y sellos mecánicos', 'Aire comprimido industrial', 'Mantenimiento y repuestos'] },
  { slug: 'hogar', title: 'Hogar', grad: 'sg5',
    intro: 'Confort y eficiencia para el hogar: aire acondicionado, calefacción y agua caliente.',
    bullets: ['Aire acondicionado split y multisplit', 'Calderas y piso radiante', 'Termotanques y energías alternativas', 'Service y postventa'] },
  { slug: 'agro', title: 'Agro', grad: 'sg6',
    intro: 'Soluciones para el sector agropecuario: bombeo, energía y manejo de fluidos.',
    bullets: ['Bombeo solar y de pozo', 'Bombas neumáticas de doble diafragma', 'Mangueras y cañerías industriales', 'Grupos electrógenos'] },
  { slug: 'otras-industrias', title: 'Otras industrias', grad: 'sg7',
    intro: 'Resolvemos desafíos de climatización, bombeo y aire comprimido en todo tipo de industria de la región.',
    bullets: ['Proyecto y asesoramiento técnico', 'Provisión de equipos', 'Instalaciones llave en mano', 'Servicio de postventa'] },
];
