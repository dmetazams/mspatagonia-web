// ============================================================
// Configuración central del sitio MS Patagonia
// ============================================================

export const SITE = {
  name: 'MS Patagonia Argentina',
  shortName: 'MS Patagonia',
  tagline: 'Soluciones integrales en climatización, bombeo de líquidos y aire comprimido',
  description:
    'MS Patagonia: soluciones integrales en climatización, bombeo de líquidos y aire comprimido. Proyecto, provisión de equipos, instalaciones llave en mano y servicio de postventa en toda la Patagonia.',
  url: 'https://mspatagonia.com',
  storeUrl: 'https://tienda.mspatagonia.com/',
  whatsapp: '5492966781474', // sin + ni espacios
  social: {
    facebook: 'https://www.facebook.com/mspatagoniaargentina/',
    instagram: 'https://www.instagram.com/mspatagoniaargentina/',
    linkedin: 'https://ar.linkedin.com/company/ms-patagonia-argentina',
    youtube: 'https://www.youtube.com/channel/UCGf-hFxx0qm8ZZx5FxwX92w',
  },
};

// ============================================================
// CLIENTIFY — Integración CRM / Marketing
// ------------------------------------------------------------
// Completá estos valores con los de tu cuenta de Clientify.
// (Clientify → Configuración → Seguimiento / Formularios / Chat).
// Mientras estén vacíos, los scripts NO se cargan y el formulario
// muestra el mensaje de éxito sin enviar (modo demo).
// ============================================================
export const CLIENTIFY = {
  // 1) SCRIPT DE SEGUIMIENTO (tracking de visitas/leads).
  //    Pegá el ID de tu cuenta. El tag oficial se arma en Base.astro.
  trackingId: '', // ej: '123456'  (Clientify → Configuración → Código de seguimiento)

  // 2) CHAT EN VIVO / INBOX.
  //    ID del widget de chat de Clientify.
  chatWidgetId: '', // ej: 'ab12cd34'  (Clientify → Inbox → Chat web → Instalar)

  // 3) FORMULARIOS → CRM.
  //    Opción A (recomendada, sin backend): endpoint del webform de Clientify.
  //    Clientify → Formularios → tu formulario → Integrar → URL de envío (action).
  formEndpoint: '', // ej: 'https://webforms.clientify.net/forms/xxxxxxxx/'

  //    Mapeo de campos del formulario a los nombres que espera tu webform
  //    de Clientify (ajustá si tu formulario usa otros "name").
  formFields: {
    nombre: 'name',
    email: 'email',
    telefono: 'phone',
    motivo: 'subject',
    mensaje: 'message',
  },
};

export const isClientifyTracking = () => CLIENTIFY.trackingId.trim().length > 0;
export const isClientifyChat = () => CLIENTIFY.chatWidgetId.trim().length > 0;
