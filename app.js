// Datos oficiales de PRICPHMA extraídos de su portal actual
const HERO_SLIDES = [
  {
    badge: 'MES PATRIO • JUNTA DIRECTIVA CENTRAL',
    title: '¡Viva Honduras! Unidos por un Magisterio Digno',
    desc: 'En este Mes Patrio, en PRICPHMA celebramos con orgullo nuestra identidad, nuestra historia y el compromiso con la educación hondureña.',
    meta: 'Prof. Jury Hernández — Presidente Junta Directiva Central PRICPHMA'
  },
  {
    badge: '64 ANIVERSARIO • SECCIONAL #1',
    title: '64 Años Defendiendo los Derechos del Magisterio',
    desc: 'Conmemoramos más de seis décadas de unidad, justicia, equidad y reconocimiento del valor de los maestros en la construcción de una sociedad mejor.',
    meta: 'Cena Conmemorativa • 21 Ago 2026, 08:00 PM en el Colegio Médico'
  },
  {
    badge: 'SERVICIOS DIGITALES • APP OFICIAL',
    title: 'Nuevas Líneas de Crédito y App Oficial PRICPHMA',
    desc: 'Accede de forma ágil a Préstamo Express (hasta L. 25,000.00), Préstamo Automático (hasta L. 50,000.00) y comunicados al instante.',
    meta: 'Oficina Principal, Calle contiguo a IHCAFE, Tegucigalpa y Oficinas Regionales'
  }
];

const JUNTA_DIRECTIVA = [
  { nombre: 'Prof. Jury Hernández', cargo: 'Presidente Junta Directiva Central', grupo: 'direccion', iniciales: 'JH' },
  { nombre: 'Prof. Nazario Pavón', cargo: 'Secretario de Finanzas', grupo: 'gestion', iniciales: 'NP' },
  { nombre: 'Prof. Carlos Mejía', cargo: 'Secretario del Interior', grupo: 'gestion', iniciales: 'CM' },
  { nombre: 'Prof. Ariel Baquedano', cargo: 'Secretario de Publicidad', grupo: 'direccion', iniciales: 'AB' },
  { nombre: 'Prof. Martha Alvarado', cargo: 'Secretaria de Relaciones Humanas', grupo: 'social', iniciales: 'MA' },
  { nombre: 'Prof. Salvador Palma', cargo: 'Secretario de Asuntos Pedagógicos', grupo: 'social', iniciales: 'SP' },
  { nombre: 'Prof. Eugenio Pleites', cargo: 'Secretario del Exterior', grupo: 'direccion', iniciales: 'EP' },
  { nombre: 'Prof. Yaneth Marquina', cargo: 'Secretaria del Ambiente', grupo: 'social', iniciales: 'YM' },
  { nombre: 'Prof. Claudia Ramírez', cargo: 'Secretaria de Asuntos Femeninos', grupo: 'social', iniciales: 'CR' },
  { nombre: 'Prof. Bessy Berrios', cargo: 'Secretaria General', grupo: 'direccion', iniciales: 'BB' },
  { nombre: 'Prof. José Bueso', cargo: 'Secretario de Asuntos Legales', grupo: 'gestion', iniciales: 'JB' }
];

const COMUNICADOS = [
  {
    id: 'com-creditos',
    titulo: 'Nuevas líneas de crédito',
    categoria: 'creditos',
    etiqueta: 'Créditos y Beneficios',
    fecha: '10 de julio de 2026',
    resumen: 'Compartimos el comunicado oficial PRICPHMA sobre las nuevas líneas de crédito: Préstamo Express hasta L. 25,000.00 y Préstamo Automático hasta L. 50,000.00.',
    contenido: [
      'El Primer Colegio Profesional Hondureño de Maestros (PRICPHMA) informa a nuestros afiliados(as) y público en general que, a partir del 10 de julio de 2026, se ponen a disposición las siguientes líneas de crédito:',
      '• Préstamo Express — Máximo: L. 25,000.00',
      '• Préstamo Automático — Máximo: L. 50,000.00',
      'Requisitos mínimos: voucher de pago más reciente, acuerdo de nombramiento o acuerdo vigente y documentos personales.',
      'Los afiliados interesados pueden presentar su solicitud en la oficina principal (Calle contiguo a IHCAFE, Tegucigalpa) y en las oficinas regionales más cercanas.'
    ]
  },
  {
    id: 'com-cierre',
    titulo: 'Cierre temporal de las instalaciones',
    categoria: 'administrativo',
    etiqueta: 'Aviso Administrativo',
    fecha: '09 de julio de 2026',
    resumen: 'Aviso sobre cierre temporal de oficina principal en Tegucigalpa y oficinas regionales por mantenimiento y fumigación.',
    contenido: [
      'El Primer Colegio Profesional Hondureño de Maestros (PRICPHMA) informa a nuestros afiliados(as) y público en general lo siguiente:',
      'Nuestra oficina principal en Tegucigalpa y oficinas regionales permanecerán cerradas los días miércoles 15, jueves 16 y viernes 17 de julio por efectos de mantenimiento y fumigación.',
      'Asimismo, los días lunes 13 y martes 14 de julio se atenderá en horario normal.',
      'Las actividades se reanudarán el lunes 20 de julio del presente año en nuestros horarios habituales. Agradecemos su comprensión. Administración PRICPHMA.'
    ]
  }
];

const BENEFICIOS_TABS = {
  express: {
    titulo: 'Préstamo Express PRICPHMA',
    monto: 'Máximo L. 25,000.00',
    descripcion: 'Línea de crédito ágil diseñada para atender necesidades inmediatas de nuestros docentes afiliados con requisitos mínimos y atención directa.',
    puntos: [
      'Vigente desde el 10 de julio de 2026.',
      'Proceso rápido en oficina principal (contiguo a IHCAFE) y oficinas regionales.',
      'Requiere voucher reciente, acuerdo vigente y documentos personales.'
    ]
  },
  automatico: {
    titulo: 'Préstamo Automático PRICPHMA',
    monto: 'Máximo L. 50,000.00',
    descripcion: 'Financiamiento de mayor alcance enfocado en el bienestar y estabilidad financiera del magisterio afiliado.',
    puntos: [
      'Disponible para afiliados activos en todo el país.',
      'Orientación personalizada en la oficina principal y sedes regionales.',
      'Trámite simplificado presentando los 3 documentos básicos.'
    ]
  },
  app: {
    titulo: 'App Oficial y Portal de Afiliados',
    monto: 'Acceso Digital 24/7',
    descripcion: 'Mantente informado desde tu celular sobre comunicados de la Junta Directiva Central, eventos de seccionales y beneficios vigentes.',
    puntos: [
      'Consulta inmediata de comunicados oficiales y calendarios.',
      'Acceso rápido al inicio de sesión de afiliados.',
      'Canales activos en Facebook, Instagram, TikTok y correo pricphma@gmail.com.'
    ]
  }
};

// Estado de la aplicación
const state = {
  slideIndex: 0,
  comFilter: 'todos',
  boardFilter: 'todos',
  boardQuery: '',
  activeTab: 'express',
  eventConfirmed: false
};

// Referencias DOM
const el = {
  heroBadge: document.getElementById('heroBadge'),
  heroTitle: document.getElementById('heroTitle'),
  heroDesc: document.getElementById('heroDesc'),
  heroMeta: document.getElementById('heroMeta'),
  sliderDots: document.getElementById('sliderDots'),
  comunicadosGrid: document.getElementById('comunicadosGrid'),
  boardGrid: document.getElementById('boardGrid'),
  boardSearch: document.getElementById('boardSearch'),
  tabContent: document.getElementById('tabContent'),
  reqProgressFill: document.getElementById('reqProgressFill'),
  reqProgressText: document.getElementById('reqProgressText'),
  rsvpEventBtn: document.getElementById('rsvpEventBtn'),
  rsvpStatus: document.getElementById('rsvpStatus'),
  mobileDrawer: document.getElementById('mobileDrawer'),
  menuToggle: document.getElementById('menuToggle'),
  modalBackdrop: document.getElementById('modalBackdrop'),
  modalTitle: document.getElementById('modalTitle'),
  modalBody: document.getElementById('modalBody'),
  modalClose: document.getElementById('modalClose'),
  toast: document.getElementById('toast'),
  backToTop: document.getElementById('backToTop')
};

let toastTimer = null;
let sliderTimer = null;

function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.toast.classList.remove('show'), 3400);
}

function openModal(title, htmlContent) {
  el.modalTitle.textContent = title;
  el.modalBody.innerHTML = htmlContent;
  el.modalBackdrop.classList.add('open');
  el.modalBackdrop.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  el.modalBackdrop.classList.remove('open');
  el.modalBackdrop.setAttribute('aria-hidden', 'true');
}

// 1. Carrusel Hero Dinámico
function renderHeroSlide() {
  const slide = HERO_SLIDES[state.slideIndex];
  el.heroBadge.textContent = slide.badge;
  el.heroTitle.textContent = slide.title;
  el.heroDesc.textContent = slide.desc;
  el.heroMeta.textContent = slide.meta;

  el.sliderDots.innerHTML = HERO_SLIDES.map((_, idx) =>
    `<button type="button" class="slider-dot ${idx === state.slideIndex ? 'active' : ''}" data-slide="${idx}" aria-label="Ver diapositiva ${idx + 1}"></button>`
  ).join('');

  el.sliderDots.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      state.slideIndex = Number(dot.dataset.slide);
      renderHeroSlide();
      resetSliderTimer();
    });
  });
}

function nextSlide() {
  state.slideIndex = (state.slideIndex + 1) % HERO_SLIDES.length;
  renderHeroSlide();
}

function prevSlide() {
  state.slideIndex = (state.slideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
  renderHeroSlide();
}

function resetSliderTimer() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(nextSlide, 6500);
}

// 2. Comunicados Oficiales
function renderComunicados() {
  const filtered = COMUNICADOS.filter(item =>
    state.comFilter === 'todos' || item.categoria === state.comFilter
  );

  el.comunicadosGrid.innerHTML = filtered.map(item => `
    <article class="com-card">
      <div>
        <div class="com-meta">
          <span class="com-badge">${item.etiqueta}</span>
          <span class="com-date">${item.fecha}</span>
        </div>
        <h3>${item.titulo}</h3>
        <p>${item.resumen}</p>
      </div>
      <button type="button" class="btn btn-green btn-sm read-com-btn" data-id="${item.id}">Leer comunicado completo</button>
    </article>
  `).join('');

  el.comunicadosGrid.querySelectorAll('.read-com-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const com = COMUNICADOS.find(c => c.id === btn.dataset.id);
      if (!com) return;
      const bodyHtml = `
        <p style="font-size:0.85rem;color:#15803d;font-weight:700;margin-top:0;">${com.etiqueta} • ${com.fecha}</p>
        ${com.contenido.map(p => `<p>${p}</p>`).join('')}
        <p style="font-size:0.84rem;color:#4b5d52;border-top:1px solid #d4e4da;padding-top:12px;">
          Dado en la Ciudad de Tegucigalpa, M.D.C. — Administración PRICPHMA.
        </p>
      `;
      openModal(com.titulo, bodyHtml);
    });
  });
}

// 3. Beneficios y Requisitos
function renderBenefitsTab() {
  const tab = BENEFICIOS_TABS[state.activeTab];
  el.tabContent.innerHTML = `
    <h3 style="margin:0;color:#0f3d22;">${tab.titulo}</h3>
    <div class="tab-amount">${tab.monto}</div>
    <p style="color:#4b5d52;margin-top:0;">${tab.descripcion}</p>
    <ul style="padding-left:20px;margin:0;color:#14221a;">
      ${tab.puntos.map(p => `<li style="margin-bottom:6px;">${p}</li>`).join('')}
    </ul>
  `;
}

function updateRequirementsProgress() {
  const boxes = document.querySelectorAll('.req-checkbox');
  const checked = Array.from(boxes).filter(b => b.checked).length;
  const pct = Math.round((checked / boxes.length) * 100);
  el.reqProgressFill.style.width = `${pct}%`;
  el.reqProgressText.textContent = checked === boxes.length
    ? '3 de 3 requisitos listos — Ya puedes presentar tu solicitud'
    : `${checked} de ${boxes.length} requisitos listos`;
}

// 4. Junta Directiva Central
function renderBoard() {
  const query = state.boardQuery.trim().toLowerCase();
  const list = JUNTA_DIRECTIVA.filter(m => {
    const matchGroup = state.boardFilter === 'todos' || m.grupo === state.boardFilter;
    const matchText = !query || m.nombre.toLowerCase().includes(query) || m.cargo.toLowerCase().includes(query);
    return matchGroup && matchText;
  });

  if (!list.length) {
    el.boardGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#4b5d52;">No se encontraron directivos con ese criterio de búsqueda.</p>`;
    return;
  }

  el.boardGrid.innerHTML = list.map(m => `
    <article class="member-card" tabindex="0" data-member="${m.nombre}">
      <div class="member-banner">
        <span class="member-seal">PRICPHMA</span>
        <div class="member-avatar">${m.iniciales}</div>
      </div>
      <div class="member-info">
        <h3>${m.nombre}</h3>
        <p>${m.cargo}</p>
      </div>
    </article>
  `).join('');

  el.boardGrid.querySelectorAll('.member-card').forEach(card => {
    const showMember = () => {
      const m = JUNTA_DIRECTIVA.find(item => item.nombre === card.dataset.member);
      if (!m) return;
      openModal(m.nombre, `
        <p style="margin-top:0;font-weight:700;color:#15803d;">${m.cargo}</p>
        <p>Integrante oficial de la <strong>Junta Directiva Central del PRICPHMA</strong>.</p>
        <p style="margin-bottom:0;font-size:0.9rem;color:#4b5d52;">
          Para consultas dirigidas a esta secretaría, escríbenos a <strong>pricphma@gmail.com</strong> o visítanos en la Oficina Principal, Calle contiguo a IHCAFE, Tegucigalpa.
        </p>
      `);
    };
    card.addEventListener('click', showMember);
    card.addEventListener('keydown', e => { if (e.key === 'Enter') showMember(); });
  });
}

// 5. Modales de Afiliación e Inicio de Sesión
function openAfiliateModal() {
  openModal('Pre-Afiliación al PRICPHMA', `
    <p style="margin-top:0;color:#4b5d52;">Completa tus datos para iniciar tu proceso de afiliación y recibir orientación de nuestra oficina.</p>
    <form id="afiliateForm">
      <div class="form-group">
        <label for="afNombre">Nombre completo del docente</label>
        <input type="text" id="afNombre" required placeholder="Ej. Prof. Carlos Ramírez">
      </div>
      <div class="form-group">
        <label for="afCorreo">Correo electrónico</label>
        <input type="email" id="afCorreo" required placeholder="docente@correo.com">
      </div>
      <div class="form-group">
        <label for="afDepto">Departamento / Seccional</label>
        <input type="text" id="afDepto" required placeholder="Ej. Francisco Morazán — Seccional #1">
      </div>
      <button type="submit" class="btn btn-gold btn-block">Enviar Solicitud de Afiliación</button>
    </form>
  `);
  document.getElementById('afiliateForm').addEventListener('submit', e => {
    e.preventDefault();
    closeModal();
    showToast('Solicitud de pre-afiliación registrada. Te contactaremos pronto.');
  });
}

function openLoginModal() {
  openModal('Portal de Afiliados PRICPHMA', `
    <p style="margin-top:0;color:#4b5d52;">Ingresa con tu correo de afiliado para consultar estado de trámites, comunicados y beneficios.</p>
    <form id="loginForm">
      <div class="form-group">
        <label for="logEmail">Correo o número de afiliado</label>
        <input type="text" id="logEmail" required placeholder="afiliado@pricphma.hn">
      </div>
      <div class="form-group">
        <label for="logPass">Contraseña</label>
        <input type="password" id="logPass" required placeholder="••••••••">
      </div>
      <button type="submit" class="btn btn-green btn-block">Ingresar al Portal</button>
    </form>
  `);
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    closeModal();
    showToast('Vista previa: el acceso real se conectará con Supabase Auth.');
  });
}

// Eventos e Inicialización
document.getElementById('nextSlide').addEventListener('click', () => { nextSlide(); resetSliderTimer(); });
document.getElementById('prevSlide').addEventListener('click', () => { prevSlide(); resetSliderTimer(); });

['openAfiliateTop', 'openAfiliateHero', 'openAfiliateMobile', 'openAfiliateCredit'].forEach(id => {
  document.getElementById(id).addEventListener('click', openAfiliateModal);
});

['openLoginNav', 'openLoginMobile', 'quickLoginBtn'].forEach(id => {
  document.getElementById(id).addEventListener('click', openLoginModal);
});

document.getElementById('quickCreditBtn').addEventListener('click', () => {
  document.getElementById('beneficios').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('quickEventBtn').addEventListener('click', () => {
  document.getElementById('eventos').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('quickAppBtn').addEventListener('click', () => {
  state.activeTab = 'app';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === 'app'));
  renderBenefitsTab();
  document.getElementById('beneficios').scrollIntoView({ behavior: 'smooth' });
});

el.rsvpEventBtn.addEventListener('click', () => {
  state.eventConfirmed = !state.eventConfirmed;
  el.rsvpEventBtn.textContent = state.eventConfirmed ? 'Asistencia Registrada ✓' : 'Confirmar Asistencia';
  el.rsvpStatus.textContent = state.eventConfirmed
    ? '¡Listo! Recordatorio activado para el 21 Ago 2026 a las 08:00 PM en el Colegio Médico.'
    : '';
  showToast(state.eventConfirmed ? 'Asistencia confirmada para el 64 Aniversario.' : 'Confirmación cancelada.');
});

document.getElementById('eventDetailsBtn').addEventListener('click', () => {
  openModal('Celebración 64 Aniversario — Seccional #1', `
    <p style="margin-top:0;"><strong>Fecha y hora:</strong> 21 de agosto de 2026, 08:00 PM</p>
    <p><strong>Lugar:</strong> Colegio Médico</p>
    <p><strong>Descripción:</strong> Cena oficial para conmemorar el 64 aniversario del Primer Colegio Profesional Hondureño de Maestros (PRICPHMA), encabezada por la Junta Directiva Central.</p>
    <p style="margin-bottom:0;color:#4b5d52;">Para más información escribe a <strong>pricphma@gmail.com</strong>.</p>
  `);
});

document.querySelectorAll('[data-com-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.comFilter = btn.dataset.comFilter;
    document.querySelectorAll('[data-com-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderComunicados();
  });
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    state.activeTab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderBenefitsTab();
  });
});

document.querySelectorAll('.req-checkbox').forEach(box => {
  box.addEventListener('change', updateRequirementsProgress);
});

document.querySelectorAll('[data-board-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.boardFilter = btn.dataset.boardFilter;
    document.querySelectorAll('[data-board-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderBoard();
  });
});

el.boardSearch.addEventListener('input', e => {
  state.boardQuery = e.target.value;
  renderBoard();
});

document.querySelectorAll('.video-play-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    openModal(btn.dataset.video, `
      <p style="margin-top:0;">Espacio preparado para incrustar el video oficial de YouTube, Facebook o TikTok de PRICPHMA.</p>
      <p style="margin-bottom:0;color:#4b5d52;">En la versión conectada con Panel Administrativo, el equipo podrá publicar o cambiar videos sin tocar código.</p>
    `);
  });
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
  showToast('Mensaje enviado correctamente. PRICPHMA te responderá a la brevedad.');
});

// Menú móvil
el.menuToggle.addEventListener('click', () => {
  const isOpen = el.mobileDrawer.classList.toggle('open');
  el.menuToggle.setAttribute('aria-expanded', String(isOpen));
  el.mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    el.mobileDrawer.classList.remove('open');
    el.menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Cierre de modal
el.modalClose.addEventListener('click', closeModal);
el.modalBackdrop.addEventListener('click', e => { if (e.target === el.modalBackdrop) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Botón volver arriba
window.addEventListener('scroll', () => {
  el.backToTop.classList.toggle('visible', window.scrollY > 360);
});
el.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Inicializar vistas
renderHeroSlide();
resetSliderTimer();
renderComunicados();
renderBenefitsTab();
updateRequirementsProgress();
renderBoard();