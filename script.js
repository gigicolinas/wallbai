'use strict';

const navToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav-links');
navToggle.addEventListener('click', function () {
  const open = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
  nav.inert = !open;
});
nav.inert = true;
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    nav.inert = true;
  });
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    const wasOpen = navToggle.getAttribute('aria-expanded') === 'true';
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    nav.inert = true;
    if (wasOpen) navToggle.focus();
  }
});
document.addEventListener('click', function (event) {
  if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    nav.inert = true;
  }
});

const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project[data-category]');
filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const selected = button.dataset.filter;
    document.querySelector('.project-grid').classList.toggle('is-filtered', selected !== 'todos');
    filterButtons.forEach(function (item) {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    projects.forEach(function (project) {
      const visible = selected === 'todos' || project.dataset.category === selected;
      project.hidden = !visible;
      if (visible) count++;
    });
    document.getElementById('project-count').textContent = String(count).padStart(2, '0');
  });
});

document.querySelectorAll('[data-compare]').forEach(function (button) {
  button.addEventListener('click', function () {
    const isBefore = button.dataset.compare === 'before';
    const image = document.getElementById('eco-image');
    image.src = isBefore ? 'assets/eco-before.webp' : 'assets/eco-after.webp';
    image.alt = isBefore ? 'Identidad visual anterior de Eco Green Energy' : 'Nueva identidad visual de Eco Green Energy con tonos verdes y un enfoque tecnológico';
    document.querySelectorAll('[data-compare]').forEach(function (item) {
      const active = item === button;
      item.setAttribute('aria-pressed', String(active));
      item.classList.toggle('is-active', active);
    });
  });
});

const caseStudies = {
  livoltek: {
    eyebrow: '01 / LIVOLTEK IBERIA · POSICIONAMIENTO',
    title: 'Una marca técnica, más cerca del mercado español.',
    summary: 'Trabajé en el reposicionamiento de LIVOLTEK en España, adaptando la comunicación de Solar y eMobility para conectar con clientes, instaladores y socios de canal.',
    role: 'Reposicionamiento y unificación de mensajes B2B y B2C para Solar y eMobility. Localización de materiales globales, rediseño de piezas y presentación de la estrategia a la sede, con aprobación para su implementación.',
    deliverables: ['Argumentos comerciales adaptados al mercado español.', 'Gestión de redes sociales y creación de contenido.', 'Folletos, formación y materiales para ferias e instaladores.'],
    images: [
      ['livoltek-recarga.webp', 'Comunicación de producto para un cargador de vehículo eléctrico.', 992, 519],
      ['livoltek-formacion.webp', 'Pieza de comunicación para formación de producto y canal.', 1100, 574]
    ],
    note: 'En mi etapa en LIVOLTEK gestioné un presupuesto anual de 160.000 € y contribuí a ventas de servicios y cargadores superiores a 500.000 € mediante acciones comerciales y alianzas. Las piezas mostradas forman parte del trabajo de comunicación de esa etapa.'
  },
  eco: {
    eyebrow: '02 / ECO GREEN ENERGY · IDENTIDAD VISUAL',
    title: 'Un sistema visual coherente para distintos mercados.',
    summary: 'Lideré la evolución de la comunicación visual de Eco Green Energy hacia una imagen más tecnológica y coherente con sus productos solares.',
    role: 'Dirección del nuevo enfoque visual, creación de plantillas adaptables y coordinación de la primera implementación con diseño y comunicación en Europa, MENA y Latinoamérica.',
    deliverables: ['Gestión de redes sociales y creación de contenido.', 'Plantillas y sistema visual para campañas.', 'Adaptación por idioma, región y canal.'],
    images: [
      ['eco-before.webp', 'Antes: muestra de la comunicación visual anterior.', 632, 364],
      ['eco-after.webp', 'Después: una de las piezas del nuevo enfoque visual.', 888, 510]
    ]
  },
  contenido: {
    eyebrow: '04 / CONTENIDO · PUBLICACIONES',
    title: 'Contenido técnico con una audiencia concreta.',
    summary: 'Una selección de publicaciones de mi trabajo en comunicación para energía y movilidad eléctrica. El contenido se adapta a las preguntas y necesidades de instaladores, operadores y compradores.',
    role: 'Creación de contenido, redacción y gestión de redes sociales. Coordinación con responsables técnicos y de negocio para explicar el valor del producto con rigor y adaptar cada mensaje a su audiencia.',
    deliverables: ['Comunicación corporativa y sectorial.', 'Artículos y contenidos de movilidad eléctrica.', 'Mensajes adaptados a clientes y canal.'],
    images: [
      ['publicacion-posicionamiento.webp', 'Posicionamiento de LIVOLTEK en el mercado español.', 900, 654],
      ['publicacion-solar-storage.webp', 'Comunicación de Solar & Storage Live Spain.', 808, 504],
      ['publicacion-carga-rapida.webp', 'Artículo sobre el futuro de la carga rápida.', 644, 651],
      ['publicacion-energyear.webp', 'Publicación sobre los retos de la electromovilidad.', 557, 665]
    ],
    links: [
      ['LIVOLTEK como socio de instaladores', 'C de Comunicación · Material Eléctrico', 'https://material-electrico.cdecomunicacion.es/noticias/proveedores/182966/livoltek-se-posiciona-socio-estrategico-instaladores-profesionales'],
      ['Solar & Storage Live Spain', 'LIVOLTEK Iberia', 'https://es.livoltek.com/livoltek-presenta-su-vision-de-movilidad-electrica-y-transicion-energetica-en-solar-storage-live-spain/'],
      ['El futuro de la carga rápida', 'Energética XXI', 'https://energetica21.com/articulo/futuro-carga-rapida-mas-potencia-menos-tiempo/'],
      ['Los retos de la electromovilidad en España', 'Review Energy', 'https://www.review-energy.com/movilidad/mas-coches-electricos-pero-mismos-problemas-espana-ante-el-reto-estructural-de-la-electromovilidad']
    ]
  },
  eventos: {
    eyebrow: '05 / EVENTOS · ACTIVACIÓN COMERCIAL',
    title: 'Llevar la marca al encuentro con el mercado.',
    summary: 'He coordinado ferias, encuentros sectoriales y acciones de formación para conectar productos, equipos comerciales y socios de canal en distintos mercados.',
    role: 'Preparación de marca, coordinación de materiales, proveedores y equipos. Creación de contenido y gestión de redes sociales para difundir las acciones, junto con apoyo a la captación y el seguimiento comercial.',
    deliverables: ['Ferias internacionales y presencia de marca.', 'Formación y encuentros con socios comerciales.', 'Coordinación entre marketing, ventas y equipos técnicos.'],
    images: [
      ['evento-escenario.webp', 'Encuentro sectorial de energía.', 1383, 1041],
      ['evento-encuentro.webp', 'Espacios de encuentro con clientes y profesionales.', 1024, 683],
      ['evento-formacion.webp', 'Presentaciones y formación de canal.', 800, 535],
      ['evento-equipo.webp', 'Trabajo con equipos en ferias internacionales.', 1143, 857]
    ],
    note: 'Mi selección de eventos incluye SNEC Shanghái 2024, Intersolar Alemania y Brasil, ExpoSolar Colombia, UZ Power Expo, Canton Fair 2023, Energyear Mobility, BePositive Lyon y Genera Madrid 2023–2025.'
  },
  datos: {
    eyebrow: '03 / MARKETING DIGITAL · MEDICIÓN',
    title: 'La siguiente acción empieza en los resultados.',
    summary: 'Ejemplos de seguimiento de campañas, alcance orgánico y referencias competitivas incluidos en mi portfolio. La medición acompaña a la ejecución para entender qué merece continuidad y qué necesita ajustes.',
    role: 'Campañas digitales, gestión de redes sociales y creación de contenido. Seguimiento de indicadores y coordinación de las siguientes acciones para distintas marcas y mercados.',
    deliverables: ['Seguimiento de campañas de Meta Ads.', 'Análisis del alcance y la actividad en LinkedIn.', 'Comparativas y observación de la competencia.'],
    images: [
      ['meta-ads.webp', 'Ejemplo de seguimiento de campañas de Meta Ads.', 1353, 713],
      ['linkedin-comparativa.webp', 'Comparativa de actividad en LinkedIn.', 1031, 870],
      ['linkedin-alcance.webp', 'Panel de alcance orgánico de contenido en LinkedIn.', 582, 567],
      ['linkedin-datos.webp', 'Detalle de indicadores de contenido en LinkedIn.', 520, 498]
    ]
  }
};

const dialog = document.getElementById('case-dialog');
const dialogContent = document.getElementById('case-content');
let lastProjectTrigger = null;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
function arrowIcon() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('icon');
  svg.setAttribute('aria-hidden', 'true');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', '#arrow-up-right');
  svg.appendChild(use);
  return svg;
}
function openCase(key, trigger) {
  const data = caseStudies[key];
  if (!data) return;
  lastProjectTrigger = trigger;
  dialogContent.replaceChildren();
  dialogContent.appendChild(element('p', 'eyebrow', data.eyebrow));
  const title = element('h2', '', data.title);
  title.id = 'case-title';
  dialogContent.appendChild(title);
  dialogContent.appendChild(element('p', 'dialog-summary', data.summary));
  const role = element('div', 'dialog-role');
  role.appendChild(element('strong', '', 'MI CONTRIBUCIÓN'));
  role.appendChild(element('span', '', data.role));
  dialogContent.appendChild(role);
  const list = element('ul', 'dialog-deliverables');
  data.deliverables.forEach(function (item) { list.appendChild(element('li', '', item)); });
  dialogContent.appendChild(list);
  const gallery = element('div', 'dialog-gallery');
  data.images.forEach(function (item) {
    const figure = element('figure');
    const image = element('img');
    image.src = 'assets/' + item[0];
    image.alt = item[1];
    image.width = item[2];
    image.height = item[3];
    image.loading = 'lazy';
    figure.appendChild(image);
    figure.appendChild(element('figcaption', '', item[1]));
    gallery.appendChild(figure);
  });
  dialogContent.appendChild(gallery);
  if (data.links) {
    const links = element('div', 'dialog-links');
    data.links.forEach(function (item) {
      const link = element('a');
      link.href = item[2];
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      const text = element('span');
      text.appendChild(element('span', '', item[0]));
      text.appendChild(element('small', '', item[1]));
      link.appendChild(text);
      link.appendChild(arrowIcon());
      links.appendChild(link);
    });
    dialogContent.appendChild(links);
  }
  if (data.note) dialogContent.appendChild(element('p', 'dialog-footnote', data.note));
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}
document.querySelectorAll('.case-trigger').forEach(function (trigger) {
  trigger.addEventListener('click', function () { openCase(trigger.dataset.case, trigger); });
});
document.getElementById('dialog-close').addEventListener('click', function () { dialog.close(); });
dialog.addEventListener('click', function (event) {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
dialog.addEventListener('close', function () {
  document.body.style.overflow = '';
  if (lastProjectTrigger) lastProjectTrigger.focus();
});

document.getElementById('copy-email').addEventListener('click', async function () {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('gigicolinas@gmail.com');
    status.textContent = 'Email copiado';
  } catch (error) {
    status.textContent = 'gigicolinas@gmail.com';
  }
  window.setTimeout(function () { status.textContent = ''; }, 5000);
});
