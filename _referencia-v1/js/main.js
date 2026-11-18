/* ============================================================
   MS Patagonia — interacciones del sitio
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Datos: marcas (texto de mspatagonia.com) ---------- */
  const BRANDS = [
    { name: 'Grundfos', since: 'Distribuidores desde 2004',
      desc: 'Somos distribuidores de Bombas Grundfos desde el año 2004. Formamos parte del Grupo K de BGA y además Agentes de Servicio técnico oficial para todos los productos (ASTAG) en nuestra zona de influencia.',
      why: 'Es una empresa global de tecnología de agua, comprometida con soluciones pioneras a los desafíos climáticos e hídricos del mundo. Nace en Dinamarca en 1945 y hoy cuenta con más de 100 sucursales en 65 países. Busca la eficiencia en productos prácticos, confiables y de bajo consumo energético, invirtiendo entre un 4 y 5% de su facturación en Investigación y Desarrollo.' },
    { name: 'Atlas Copco', since: 'Distribuidores Oro desde 2016',
      desc: 'Somos distribuidores oficiales y Servicio Técnico autorizado de Atlas Copco desde 2016 en toda nuestra zona de influencia. En 2020 adquirimos la distinción de "Distribuidores Oro".',
      why: 'Líder mundial por sus soluciones innovadoras en compresores, sistemas de vacío, tratamiento de aire, equipos de construcción, herramientas industriales y sistemas de montaje. Se diferencia por su rentabilidad y sustentabilidad a través de su pilar de "Productividad Responsable", reduciendo costes y emisiones de CO2.' },
    { name: 'Triangular', since: 'Aliados desde 2000',
      desc: 'Nuestros inicios se remontan al año 2000, vinculados desde el primer momento con Triangular, miembro de BAXI Group, actualmente nuestro principal aliado en climatización. Somos distribuidores oficiales y servicio técnico autorizado.',
      why: 'Introdujo nuevos estándares de calidad mediante certificaciones internacionales en el mercado argentino, siendo líderes en diseño e innovación de sistemas de calefacción y agua caliente. Compartimos los mismos principios de calidad, seguridad, sostenibilidad e innovación tecnológica.' },
    { name: 'Ciroc', since: 'Distribuidores desde 2003',
      desc: 'Somos distribuidores oficiales de CIROC desde el año 2003, compartiendo los mismos principios y objetivos, realizando la instalación y servicios de postventa en todos sus productos.',
      why: 'Lidera el mercado de calefacción y ventilación para uso industrial, comercial y agrícola, con una amplia oferta capaz de cubrir instalaciones termomecánicas simples e importantes. Su desempeño se enmarca en el Sistema de Gestión de Calidad ISO 9001:2015, misma norma vigente en nuestra empresa.' },
    { name: 'Flowserve', since: 'Distribuidores desde 2023',
      desc: 'Somos distribuidores Flowserve desde 2023. Nuestro objetivo era responder mejor a las necesidades reales de nuestros clientes, las industrias en La Patagonia Austral.',
      why: 'Distribuidores autorizados de bombas y sellos mecánicos Flowserve. Elegimos la marca por su innovación y confiabilidad, ofreciendo soluciones de alta calidad para petroquímicas, minerías y más, con productos para tratamiento de agua, lodo, agitadores, gas, turbinas a vapor y compresores, con certificaciones ANSI y API.' },
    { name: 'Spirax Sarco', since: 'Distribuidores desde 2013',
      desc: 'Somos distribuidores oficiales de Spirax Sarco desde 2013, brindando productos y servicios que reducen los impactos ambientales de nuestros clientes.',
      why: 'Líderes en el empleo del vapor para soluciones industriales, con aplicaciones que van desde la producción de alimentos hasta el refinado de petróleo. Tenemos capacidad para abastecer a todo tipo de industria en la región logrando reducción de costos con energía segura, sostenible y eficiente.' },
    { name: 'WEG', since: 'Distribuidores desde 2018',
      desc: 'Somos distribuidores de WEG desde 2018 en toda la Patagonia y ofrecemos servicio técnico orientado a las necesidades de nuestros clientes.',
      why: 'Empresa de posicionamiento global en máquinas eléctricas: motores, tableros y sistemas de automatización. Crea productos de calidad, brinda soluciones eficientes e invierte continuamente en innovación, promoviendo el trabajo en equipo y la eficiencia energética.' },
    { name: 'Indesur', since: 'Distribuidores desde 2012',
      desc: 'Somos distribuidores y servicio técnico autorizado en Bombas neumáticas Indesur desde 2012 en La Patagonia.',
      why: 'Proveedor nacional y el mayor fabricante de Bombas Neumáticas de Doble Diafragma de Sudamérica. Basa el desarrollo de sus equipos en una permanente actualización tecnológica. Su Sistema de Gestión está certificado bajo la Norma ISO 9001.' },
    { name: 'Industrias Quilmes', since: 'Proveedor desde 2019',
      desc: 'En 2019 ampliamos nuestra cartera de proveedores incorporando a Industrias Quilmes, respondiendo de manera confiable a las diversas necesidades de nuestros clientes.',
      why: 'Productor nacional de mangueras, miembro y proveedor de la multinacional Kuriyama. Su gran variedad de productos aptos para diversas industrias permite agilizar procesos, bajo un concepto de innovación constante y de vanguardia en el mercado global.' },
    { name: 'Daikin', since: 'Distribuidores desde 2018',
      desc: 'Desde 2018 somos distribuidores oficiales de Daikin en toda la Patagonia, ofreciendo una amplia gama de productos de aire acondicionado que se ajustan a las necesidades de nuestros clientes.',
      why: 'Presencia global desde hace 100 años y más de 20 años en Argentina, reflejando una vasta experiencia en calidad y eficiencia energética en aire acondicionado. Son los creadores de los sistemas Inverter y VRV, la tecnología más avanzada en equipos de aire.' },
    { name: 'Surrey', since: 'Distribuidores desde 2012',
      desc: 'En 2012 comenzamos a distribuir oficialmente la marca Surrey, ampliando nuestras alternativas de calidad en productos de aire acondicionado y calefacción central.',
      why: 'Sus productos y objetivos se caracterizan por la excelencia en calidad, seguridad, sustentabilidad e innovación tecnológica; valores que sostenemos. Ofrece asesoramiento y servicio técnico de postventa para cada solución.' },
    { name: 'Industrias Saladillo', since: 'Distribuidores oficiales',
      desc: 'Somos distribuidores oficiales de Industrias Saladillo, compartiendo los principios de innovación, calidad y el objetivo de mejorar la experiencia del instalador y del usuario final.',
      why: 'Entienden la calidad como un todo, buscando la satisfacción del cliente. Su trayectoria, desarrollo innovador y calidad lo ubican como una de las marcas de preferencia para instaladores y usuarios. Sus sistemas de gestión cumplen los requisitos de la Norma ISO 9001.' },
    { name: 'Fluence', since: 'Distribuidores desde 2017',
      desc: 'Somos distribuidores oficiales y Servicio Técnico desde 2017, comenzando con la marca Unitek. Luego de fusiones interempresariales surge la firma Fluence.',
      why: 'Proveedor líder global de soluciones de tratamiento de aguas y efluentes, rápidas de implementar, descentralizadas y paquetizadas. Su tecnología eficiente y de bajo consumo aporta seguridad en cada solución de consumo y reuso de agua.' },
    { name: 'Genebre', since: 'Distribuidores desde 2019',
      desc: 'Somos distribuidores oficiales desde comienzos de 2019 en nuestra zona de influencia, brindando productos y soluciones adaptados a los requerimientos de las industrias patagónicas.',
      why: 'Inició su actividad en 1981 en válvulas y accesorios para control de fluidos. Su mayor objetivo es un control exhaustivo en sus procesos, diseño y calidad, elaborando productos seguros. Ha demostrado ser líder en el mercado.' },
    { name: 'Westric', since: 'Distribuidores desde 2011',
      desc: 'Somos distribuidores y servicio técnico oficial de Westric desde 2011 en toda nuestra zona de influencia.',
      why: 'En Multicontrol S.A., es la única empresa especializada en América Latina en la fabricación de equipamiento de Aire Acondicionado para comunicaciones, telefonía y datacenters, con investigación, desarrollo e innovación tecnológica propios y un servicio amigable con el medio ambiente.' },
    { name: 'Goodman', since: 'Comercializamos desde 2011',
      desc: 'Comercializamos Goodman desde 2011 en toda la Patagonia, a través de relaciones comerciales con distintos importadores, respondiendo a las diversas necesidades de nuestros clientes.',
      why: 'Utilizada en obras de calefacción central y de bajas potencias, posee una relación de precio y aplicación conveniente, manteniendo alta calidad a bajo costo y una larga vida útil. Su política se basa en sustentabilidad, ahorro energético y mejora constante.' },
    { name: 'Flowing', since: 'Distribuidores desde 2012',
      desc: 'Comenzamos a distribuir y ser servicio autorizado de la marca Flowing en el año 2012.',
      why: 'Empresa nacional líder en desarrollo y fabricación de equipos de calentamiento, enfriamiento y acondicionamiento de fluidos: agua caliente, calefacción, generación de vapor y control de temperatura. Orienta sus esfuerzos a equipos más eficientes con menor contaminación.' },
    { name: 'Kohler', since: 'Distribuidores desde 2017',
      desc: 'Somos distribuidores y servicio técnico autorizado de Kohler desde 2017, ofreciendo productos y soluciones eléctricas, permanentes o de emergencia, a medida de los requerimientos de nuestros clientes.',
      why: 'Diseña, fabrica e instala grupos electrógenos desde 1966. Su amplia gama de equipos portátiles e industriales abarca generadores a gas natural, gas propano y combustible. Elegimos la marca por su trayectoria, seguridad y calidad.' },
    { name: 'Caldaia', since: 'Distribuidores desde 2012',
      desc: 'Somos distribuidores oficiales de la marca Caldaia desde 2012, ofreciendo servicio técnico en toda la región.',
      why: 'Su especialización en climatización inteligente y generación de agua caliente sanitaria la ubica como líder en innovación tecnológica en el segmento de la construcción. Refleja los mismos principios de sustentabilidad y ahorro energético que sostenemos.' }
  ];

  /* ---------- Datos: sucursales ---------- */
  const BRANCHES = [
    { city: 'Río Gallegos', prov: 'Santa Cruz', phone: '+54 9 2966 78-1474', phone2: '',
      hours: 'Lun. a Vie: 08:00 a 13:00 y 14:00 a 17:00 / Sáb: 08:30 a 12:30',
      addr: 'De la Madrid 1495 esq. Av. Balbín — Río Gallegos, Santa Cruz' },
    { city: 'Comodoro Rivadavia', prov: 'Chubut', phone: '+54 9 2975 04-6786', phone2: '',
      hours: 'Lun. a Vie: 08:00 a 13:00 y 14:00 a 17:00 / Sáb: 08:30 a 12:30',
      addr: 'Hipólito Yrigoyen 6281 — Ruta KM3, Comodoro Rivadavia, Chubut' },
    { city: 'Río Grande', prov: 'Tierra del Fuego', phone: '+54 9 2964 614034', phone2: '+54 9 2964 599070',
      hours: 'Lun. a Vie: 08:00 a 13:00 y 14:00 a 17:00 / Sáb: 08:30 a 12:30',
      addr: 'Av. San Martín 2955 — Río Grande, Tierra del Fuego' },
    { city: 'Puerto Madryn', prov: 'Chubut', phone: '+54 2966 63-8323', phone2: '',
      hours: 'Lun. a Vie: 08:00 a 13:00 y 14:00 a 17:00 / Sáb: 08:30 a 12:30',
      addr: 'Av. Gales 371 — Puerto Madryn, Chubut' },
    { city: 'Caleta Olivia', prov: 'Santa Cruz', phone: '+54 2975 385690', phone2: '+54 297 4838059',
      hours: 'Lun. a Vie: 09:00 a 18:00 / Sáb: 08:30 a 12:30',
      addr: 'Independencia 440 — Caleta Olivia, Santa Cruz' },
    { city: 'El Calafate', prov: 'Santa Cruz', phone: '+54 9 2902 41-5753', phone2: '+54 9 2902 489603',
      hours: 'Lun. a Vie: 09:00 a 18:00 / Sáb: 08:30 a 12:30',
      addr: 'Av. Libertador 2421, Local 2 — El Calafate, Santa Cruz' },
    { city: 'Perito Moreno', prov: 'Santa Cruz', phone: '+54 2975 415043', phone2: '',
      hours: 'Lun. a Vie: 09:00 a 18:00 / Sáb: 08:30 a 12:30',
      addr: 'Nacimiento 329 — Perito Moreno, Santa Cruz' }
  ];

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.prototype.slice.call((c || document).querySelectorAll(s));

  /* ---------- Header scroll ---------- */
  const header = $('#header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menú mobile ---------- */
  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
  });
  // Sub-menús desplegables en mobile
  $$('.nav__item').forEach(item => {
    const link = $('.nav__link', item);
    const dd = $('.dropdown', item);
    if (!dd) return;
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  });
  // Cerrar menú al hacer click en un enlace ancla
  $$('.nav a[href^="#"]').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); burger.classList.remove('open');
  }));

  /* ---------- Marcas: track + lista + panel ---------- */
  const track = $('#brandTrack');
  const dup = BRANDS.concat(BRANDS); // duplicar para loop continuo
  track.innerHTML = dup.map(b => `<div class="brand-chip">${b.name}</div>`).join('');

  const list = $('#brandList'), panel = $('#brandPanel');
  list.innerHTML = BRANDS.map((b, i) =>
    `<button data-i="${i}"${i === 0 ? ' class="active"' : ''}>${b.name}</button>`).join('');

  function renderBrand(i) {
    const b = BRANDS[i];
    panel.innerHTML =
      `<h3 class="brand-panel__name">${b.name}</h3>` +
      `<span class="brand-panel__since">${b.since}</span>` +
      `<p>${b.desc}</p>` +
      `<p class="brand-panel__why">¿Por qué elegimos trabajar con ${b.name}?</p>` +
      `<p>${b.why}</p>`;
  }
  list.addEventListener('click', (e) => {
    const btn = e.target.closest('button'); if (!btn) return;
    $$('#brandList button').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    renderBrand(+btn.dataset.i);
  });
  renderBrand(0);

  /* ---------- Sucursales: tabs ---------- */
  const tabs = $('#branchTabs'), panels = $('#branchPanels');
  const pin = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>';
  const ph = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.8 2z"/></svg>';
  const clk = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  const telHref = (p) => 'tel:' + p.replace(/[^+\d]/g, '');

  tabs.innerHTML = BRANCHES.map((b, i) =>
    `<button class="branch-tab${i === 0 ? ' active' : ''}" data-i="${i}"><strong>${b.city}</strong><span>${b.prov}</span></button>`).join('');

  panels.innerHTML = BRANCHES.map((b, i) =>
    `<div class="branch-panel${i === 0 ? ' active' : ''}" data-i="${i}">
       <h3>${b.city}</h3>
       <div class="branch-rows">
         <div class="branch-row">${pin}<div><strong>Dirección</strong><span>${b.addr}</span></div></div>
         <div class="branch-row">${ph}<div><strong>Teléfono</strong><a href="${telHref(b.phone)}">${b.phone}</a>${b.phone2 ? ` · <a href="${telHref(b.phone2)}">${b.phone2}</a>` : ''}</div></div>
         <div class="branch-row">${clk}<div><strong>Horarios</strong><span>${b.hours}</span></div></div>
       </div>
     </div>`).join('');

  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.branch-tab'); if (!btn) return;
    const i = btn.dataset.i;
    $$('.branch-tab', tabs).forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    $$('.branch-panel', panels).forEach(p => p.classList.toggle('active', p.dataset.i === i));
  });

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Formulario ---------- */
  const form = $('#contactForm'), msg = $('#formMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    $$('[required]', form).forEach(f => {
      const bad = !f.value.trim() || (f.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value));
      f.classList.toggle('field-error', bad);
      if (bad) ok = false;
    });
    if (!ok) return;
    msg.classList.add('show');
    form.reset();
    setTimeout(() => msg.classList.remove('show'), 6000);
  });
  $$('[required]', form).forEach(f => f.addEventListener('input', () => f.classList.remove('field-error')));

  /* ---------- Año footer ---------- */
  $('#year').textContent = new Date().getFullYear();
})();
