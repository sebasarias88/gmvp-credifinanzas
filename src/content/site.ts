/**
 * All copy for gmvpcredifinanzas.com. Texts come from the original site, lightly polished.
 */

export const site = {
  name: "GMVP Credifinanzas",
  shortName: "Credifinanzas",
  legalName: "GMVP Credifinanzas S.A.S.",
  url: "https://gmvpcredifinanzas.com",
  description:
    "Asesoría financiera para personas naturales y jurídicas: reportes en CIFIN-TransUnion y DataCrédito-Experian, mejora de puntaje, crédito rotativo, compra de cartera y seguros. Bogotá, Colombia.",
  phone: "+57 318 640 1900",
  phoneHref: "tel:+573186401900",
  whatsapp: "573186401900",
  emails: {
    info: "info@gmvpcredifinanzas.com",
    service: "servicioalcliente@gmvpcredifinanzas.com",
    legal: "notificacionesjudiciales@gmvpcredifinanzas.com",
  },
  address: { city: "Bogotá", country: "Colombia" },
  parent: { name: "GMVP Group Enterprise", url: "https://gmvpgroupenterprise.com" },
  nav: [
    { href: "/nuestra-compania", label: "Compañía" },
    { href: "/servicios", label: "Servicios" },
    { href: "/educacion", label: "Educación financiera" },
    { href: "/politicas", label: "Políticas" },
    { href: "/contacto", label: "Contacto" },
  ],
} as const;

export const hero = {
  badge: "Asesoría en CIFIN-TransUnion y DataCrédito-Experian",
  title: ["Llega hasta donde", "te propongas."],
  accent: "Te llevamos más allá.",
  intro:
    "Cada persona puede llegar hasta donde desee y se lo proponga. Eso mismo hacemos nosotros: llegamos hasta donde nuestros clientes desean, y los llevamos más allá.",
};

export const story = {
  year: 2015,
  title: "Nacimos para que vuelvas a tener vida crediticia.",
  text: "Nacimos en 2015 de una necesidad de nuestro fundador: no existía una entidad a la cual acudir que guiara a las personas sobre cómo solucionar sus reportes en las centrales de riesgo, cómo saber de qué forma están reportadas en CIFIN-TransUnion y DataCrédito-Experian y qué posibilidades tienen para salir de ellas. Por eso creó esta compañía: para que todas las personas sepan cómo volver a tener historial crediticio.",
};

export const about = {
  who: [
    "Somos una compañía de asesoramiento financiero para personas naturales y jurídicas que necesitan asesoría o financiamiento para adquirir productos financieros: asesoría sobre reportes en las centrales de riesgo, cómo mejorar su score o puntaje y un perfilamiento de su historial crediticio.",
    "Colocamos créditos entre las personas que adquieren nuestras asesorías: cómo empezar para obtener su primer crédito, o cómo volver a tener vida crediticia si por alguna razón quedó mal reportado y no pudo volver a obtener crédito.",
  ],
  mission:
    "Ser una compañía de asesoramiento financiero para personas que estén iniciando su vida crediticia, o que deseen reiniciar o mejorar su historial crediticio, a través de soluciones de fácil acceso.",
  vision: "Lograr nuestro objetivo de crecimiento con clientes leales, productos de calidad y personal satisfecho.",
  valuesIntro:
    "Nuestros valores, orientados a nuestro equipo de trabajo, reúnen los elementos necesarios para cumplir nuestras metas corporativas.",
  values: [
    {
      title: "Actitud de equipo",
      text: "Un equipo idóneo y altamente calificado, con experiencia en el sector financiero: asesores financieros y abogados con amplio conocimiento en Habeas Data y en el sector financiero en general.",
    },
    {
      title: "Pasión por el cliente",
      text: "Compromiso total y respeto por nuestros clientes, con gran calidez humana y vocación de servicio para todos.",
    },
    {
      title: "Compromiso",
      text: "Comprometidos con nuestros clientes desde el inicio hasta el final del servicio: es nuestra mayor prioridad.",
    },
    {
      title: "Innovación",
      text: "Innovamos todos los días para estar a la vanguardia y acercar esa innovación a nuestros clientes.",
    },
    {
      title: "Confianza",
      text: "Es nuestra mayor fortaleza. Demostramos seriedad, claridad y prontitud en lo que ofrecemos y en lo que hacemos.",
    },
    {
      title: "Agilidad",
      text: "Procesos ágiles, orientados a resolver los inconvenientes de nuestros clientes en el menor tiempo posible y con alta calidad.",
    },
  ],
};

export const services = [
  {
    slug: "asesorias",
    title: "Asesorías financieras",
    kicker: "Para personas naturales y jurídicas",
    text: "Asesoramos a personas reportadas en CIFIN-TransUnion y DataCrédito-Experian. Evaluamos toda su información y le ofrecemos las mejores alternativas para volver a tener historial y mejorar su puntaje, y así acceder al sistema financiero.",
    bullets: ["Diagnóstico de tu reporte", "Plan para mejorar tu puntaje", "Acompañamiento legal en Habeas Data"],
  },
  {
    slug: "credito-rotativo",
    title: "Crédito rotativo",
    kicker: "Tu primer cupo o un nuevo comienzo",
    text: "Un cupo rotativo para personas que están iniciando su vida crediticia en el sistema financiero, o que quieren volver a tener un buen historial después de perderlo por malos reportes.",
    bullets: ["Inicia tu vida crediticia", "Reconstruye tu historial", "Cupo que se renueva al pagar"],
  },
  {
    slug: "compra-de-cartera",
    title: "Compra de cartera",
    kicker: "Para entidades",
    text: "Compramos carteras de entidades del sector financiero, cooperativo, real y de telecomunicaciones, analizadas por nuestro departamento de riesgos crediticios para determinar su viabilidad y posterior saneamiento.",
    bullets: ["Sector financiero y cooperativo", "Sector real", "Telecomunicaciones"],
  },
  {
    slug: "seguros",
    title: "Seguros",
    kicker: "Protección financiada",
    text: "Financiamos seguros para personas naturales: vida, deudores y SOAT.",
    bullets: ["Seguro de vida", "Seguro de deudores", "SOAT"],
  },
] as const;

export const steps = [
  { title: "Diagnóstico", text: "Revisamos cómo estás reportado en las centrales de riesgo y entendemos tu historia." },
  { title: "Plan de mejora", text: "Asesores financieros y abogados diseñan contigo la ruta para mejorar tu puntaje." },
  { title: "Vuelves al sistema", text: "Accedes a tu crédito rotativo y construyes un historial sano, paso a paso." },
];

export const policies = {
  intro:
    "Nuestras políticas corporativas establecen el marco legal para brindar información clara y completa a nuestros clientes. Así aseguramos la confiabilidad y el respaldo de nuestro equipo frente a cada cliente.",
  collection: [
    { days: 30, title: "Cobro persuasivo", text: "A partir de los 30 días calendario de mora iniciamos un cobro persuasivo y amable." },
    { days: 60, title: "Cobro prejurídico", text: "A los 60 días calendario la obligación pasa a gestión prejurídica." },
    { days: 90, title: "Cobro judicial", text: "A los 90 días calendario la obligación se envía a cobro judicial." },
  ],
  data: "Nuestra política de manejo de datos personales se rige por lo establecido en la Ley 1581 de 2012.",
  risk:
    "Gestionamos el riesgo para minimizar los riesgos en la colocación del crédito y facilitar la financiación a quien la requiere, de acuerdo con nuestros niveles de política de colocación.",
};

export const education = [
  {
    title: "Paga a tiempo, siempre",
    text: "El hábito de pago es lo que más pesa en tu historial. Programa recordatorios o débitos automáticos para no atrasarte ni un día.",
    tag: "Hábitos",
  },
  {
    title: "No uses todo tu cupo",
    text: "Mantener una parte de tu cupo disponible muestra que manejas el crédito con responsabilidad.",
    tag: "Crédito",
  },
  {
    title: "Revisa tu reporte con frecuencia",
    text: "Conocer cómo apareces en las centrales de riesgo te permite detectar errores a tiempo y solicitar su corrección.",
    tag: "Habeas Data",
  },
  {
    title: "Evita pedir muchos créditos a la vez",
    text: "Varias solicitudes en poco tiempo pueden afectar tu perfil. Planea y solicita solo lo que necesitas.",
    tag: "Estrategia",
  },
  {
    title: "Negocia antes de caer en mora",
    text: "Si ves que no podrás pagar, habla con tu acreedor antes. Un acuerdo a tiempo protege tu historial.",
    tag: "Deudas",
  },
  {
    title: "Conoce tus derechos",
    text: "La Ley de Habeas Data (Ley 1266 de 2008) y sus actualizaciones regulan cómo se reporta y cuánto tiempo permanece tu información. Te asesoramos para entenderla.",
    tag: "Legal",
  },
];

export const quiz = [
  {
    q: "¿Cómo describirías tu situación hoy?",
    options: [
      { label: "Nunca he tenido un crédito", score: { rotativo: 2 } },
      { label: "Estoy reportado(a) negativamente", score: { asesoria: 2 } },
      { label: "Ya pagué, pero sigo sin acceso a crédito", score: { asesoria: 1, rotativo: 1 } },
      { label: "Represento a una entidad con cartera", score: { cartera: 3 } },
    ],
  },
  {
    q: "¿Qué quieres lograr primero?",
    options: [
      { label: "Entender mi reporte", score: { asesoria: 2 } },
      { label: "Obtener mi primer cupo", score: { rotativo: 2 } },
      { label: "Mejorar mi puntaje", score: { asesoria: 1, rotativo: 1 } },
      { label: "Sanear o vender cartera", score: { cartera: 2 } },
    ],
  },
  {
    q: "¿Cuándo quieres empezar?",
    options: [
      { label: "Hoy mismo", score: {} },
      { label: "Este mes", score: {} },
      { label: "Solo estoy explorando", score: {} },
    ],
  },
] as const;

export const quizResults = {
  asesoria: {
    title: "Te recomendamos una Asesoría financiera",
    text: "Empecemos por un diagnóstico de tu reporte en CIFIN-TransUnion y DataCrédito-Experian y una ruta clara para mejorar tu puntaje.",
  },
  rotativo: {
    title: "El Crédito rotativo es para ti",
    text: "Un cupo pensado para iniciar o reconstruir tu vida crediticia, con el acompañamiento de nuestros asesores.",
  },
  cartera: {
    title: "Hablemos de Compra de cartera",
    text: "Nuestro departamento de riesgos crediticios analizará la viabilidad de tu cartera y su saneamiento.",
  },
} as const;

export const disclaimer =
  "GMVP Credifinanzas S.A.S. presta servicios de asesoría y financiación. Garantizamos la eliminación de tus reportes negativos con el acompañamiento de nuestros asesores financieros y abogados, conforme a la ley. Todo crédito está sujeto a estudio y aprobación.";
