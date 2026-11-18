export interface ProductoCat {
  slug: string;
  title: string;
  desc: string;
}

// Categorías de productos. El catálogo y la compra viven en la tienda
// (tienda.mspatagonia.com); estas páginas describen la categoría y enlazan allí.
export const productos: ProductoCat[] = [
  { slug: 'aire-acondicionado', title: 'Aire acondicionado', desc: 'Equipos split, multisplit y sistemas Inverter/VRV de las marcas líderes para hogar, comercio e industria.' },
  { slug: 'aire-comprimido', title: 'Aire comprimido', desc: 'Compresores, secadores, filtros y accesorios para sistemas de aire comprimido eficientes.' },
  { slug: 'bombeo-de-liquidos', title: 'Bombeo de líquidos', desc: 'Bombas de pozo, centrífugas, sumergibles y neumáticas de doble diafragma para todo caudal.' },
  { slug: 'calefaccion', title: 'Calefacción', desc: 'Calderas, radiadores, toalleros, piso radiante y calefactores para proyectos residenciales e industriales.' },
  { slug: 'canerias', title: 'Cañerías', desc: 'Cañerías y accesorios para instalaciones de agua, gas y procesos industriales.' },
  { slug: 'energias-alternativas', title: 'Energías alternativas', desc: 'Termotanques y sistemas solares, bombeo solar y soluciones de energía renovable.' },
  { slug: 'grupos-electrogenos', title: 'Grupos electrógenos', desc: 'Generadores portátiles e industriales a gas natural, propano y combustible.' },
  { slug: 'herramientas-industriales', title: 'Herramientas industriales', desc: 'Herramientas y sistemas de montaje para la industria y el mantenimiento.' },
  { slug: 'mangas', title: 'Mangas', desc: 'Mangueras y mangas industriales para diversas aplicaciones y fluidos.' },
  { slug: 'motores-electricos', title: 'Motores eléctricos', desc: 'Motores eléctricos y sistemas de automatización de alta eficiencia.' },
  { slug: 'tableros-electricos', title: 'Materiales eléctricos para tableros', desc: 'Componentes y materiales para la fabricación de tableros eléctricos.' },
  { slug: 'sellos-mecanicos', title: 'Sellos mecánicos', desc: 'Sellos mecánicos para bombas y equipos rotativos, con certificaciones industriales.' },
  { slug: 'tratamiento-de-agua-y-efluentes', title: 'Tratamiento de agua y efluentes', desc: 'Equipos y plantas para tratamiento de agua de consumo y de efluentes.' },
  { slug: 'valvulas-industriales', title: 'Válvulas para aplicaciones industriales', desc: 'Válvulas y accesorios para el control de fluidos en aplicaciones industriales.' },
];
