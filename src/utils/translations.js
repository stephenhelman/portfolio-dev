export const navTranslations = {
  en: {
    hireMe: "Hire Me",
    links: [
      { label: "Home", link: "/" },
      { label: "Work", link: "/work" },
      { label: "Services", link: "/services" },
      { label: "About", link: "/about" },
      { label: "Contact", link: "/contact" },
    ],
  },
  es: {
    hireMe: "Contrátame",
    links: [
      { label: "Inicio", link: "/" },
      { label: "Proyectos", link: "/work" },
      { label: "Servicios", link: "/services" },
      { label: "Acerca de", link: "/about" },
      { label: "Contacto", link: "/contact" },
    ],
  },
};

export const footerTranslations = {
  en: {
    built: "Built with React · Deployed on Vercel",
  },
  es: {
    built: "Construido con React · Desplegado en Vercel",
  },
};

export const heroTranslations = {
  en: {
    eyebrow: "Full-Stack Developer · El Paso, TX",
    description:
      "MERN stack developer and automation specialist. I build websites for local El Paso businesses, full-stack applications, and CRM systems that run themselves.",
    viewWork: "View Work",
    contact: "Contact",
  },
  es: {
    eyebrow: "Desarrollador Full-Stack · El Paso, TX",
    description:
      "Desarrollador MERN y especialista en automatización. Construyo sitios web para negocios locales en El Paso, aplicaciones full-stack y sistemas CRM que trabajan solos.",
    viewWork: "Ver Proyectos",
    contact: "Contacto",
  },
};

export const aboutTranslations = {
  en: {
    sectionLabel: "About",
    headingLine1: "Local developer.",
    headingLine2: "Real results.",
    bio1: "I'm a full-stack MERN developer and TripleTen bootcamp graduate based in El Paso, TX. Before code, I spent years managing 80+ client accounts and building automation systems that reduced manual work by 75%.",
    bio2: "I built Operation Profit LLC to serve local businesses that need more than a template — they need a developer who understands sales, automation, and what actually drives revenue.",
    cta: "Let's talk",
    config: [
      {
        label: "Stack",
        values: ["React, Node.js, Express, MongoDB, Tailwind"],
        icon: "code",
      },
      {
        label: "Automation",
        values: ["GoHighLevel, Google Apps Script, Zapier, Make"],
        icon: "cpu",
      },
      {
        label: "APIs",
        values: ["Stripe, DeepL, Twilio, Nodemailer, Google Places"],
        icon: "zap",
      },
      {
        label: "Currently",
        values: ["Building local web presence for El Paso businesses"],
        icon: "map",
      },
      { label: "Languages", values: ["English", "Spanish"], icon: "globe" },
    ],
  },
  es: {
    sectionLabel: "Acerca de",
    headingLine1: "Desarrollador local.",
    headingLine2: "Resultados reales.",
    bio1: "Soy desarrollador full-stack MERN y egresado del bootcamp TripleTen, radicado en El Paso, TX. Antes del código, pasé años gestionando más de 80 cuentas de clientes y creando sistemas de automatización que redujeron el trabajo manual en un 75%.",
    bio2: "Fundé Operation Profit LLC para servir a los negocios locales que necesitan más que una plantilla — necesitan un desarrollador que entienda ventas, automatización y lo que realmente genera ingresos.",
    cta: "Hablemos",
    config: [
      {
        label: "Stack",
        values: ["React, Node.js, Express, MongoDB, Tailwind"],
        icon: "code",
      },
      {
        label: "Automatización",
        values: ["GoHighLevel, Google Apps Script, Zapier, Make"],
        icon: "cpu",
      },
      {
        label: "APIs",
        values: ["Stripe, DeepL, Twilio, Nodemailer, Google Places"],
        icon: "zap",
      },
      {
        label: "Actualmente",
        values: ["Construyendo presencia web local para negocios en El Paso"],
        icon: "map",
      },
      { label: "Idiomas", values: ["Inglés", "Español"], icon: "globe" },
    ],
  },
};

export const servicesTranslations = {
  en: {
    sectionLabel: "Services",
    services: [
      {
        number: "01",
        title: "Landing Pages",
        desc: "AI-assisted, bilingual-ready landing pages built fast and deployed faster. Mobile-first, conversion-focused.",
        price: "From $300",
      },
      {
        number: "02",
        title: "Full Web Apps",
        desc: "Full-stack MERN applications with auth, dashboards, APIs, and real business logic. Not templates.",
        price: "Custom",
      },
      {
        number: "03",
        title: "CRM & Automation",
        desc: "GoHighLevel pipelines, Google Apps Script workflows, and Zapier flows that eliminate manual work.",
        price: "From $500",
      },
      {
        number: "04",
        title: "Ongoing Hosting",
        desc: "Monthly hosting, uptime monitoring, and content updates. Your site stays fast, secure, and current.",
        price: "$150–200/mo",
      },
    ],
  },
  es: {
    sectionLabel: "Servicios",
    services: [
      {
        number: "01",
        title: "Páginas de Aterrizaje",
        desc: "Páginas de aterrizaje asistidas por IA, listas para ser bilingües, construidas rápido y desplegadas más rápido aún. Mobile-first, enfocadas en conversión.",
        price: "Desde $300",
      },
      {
        number: "02",
        title: "Aplicaciones Web Completas",
        desc: "Aplicaciones MERN full-stack con autenticación, paneles de control, APIs y lógica de negocio real. Sin plantillas.",
        price: "A medida",
      },
      {
        number: "03",
        title: "CRM y Automatización",
        desc: "Pipelines de GoHighLevel, flujos de Google Apps Script y automatizaciones de Zapier que eliminan el trabajo manual.",
        price: "Desde $500",
      },
      {
        number: "04",
        title: "Hosting Continuo",
        desc: "Hosting mensual, monitoreo de disponibilidad y actualizaciones de contenido. Tu sitio se mantiene rápido, seguro y al día.",
        price: "$150–200/mes",
      },
    ],
  },
};

export const workTranslations = {
  en: {
    sectionLabel: "Selected Work",
    projects: [
      {
        tag: "Nonprofit · Bilingual · Full Stack",
        title: "Hemophilia Outreach of El Paso",
        subtitle: "HOEP",
        stack: [
          "React",
          "Node.js",
          "MongoDB",
          "GoHighLevel",
          "DeepL API",
          "Nodemailer",
        ],
        desc: "A bilingual (EN/ES) web platform for El Paso's hemophilia community. Features include diagnosis letter verification, dynamic resource directories, email notification systems, and DeepL-powered translations optimized for local SEO.",
        color: "#C8102E",
        accent: "#FFD100",
        live: "https://hemo-el-paso.org",
      },
      {
        tag: "Coming Soon",
        title: "Your Business Here",
        subtitle: "Local · El Paso",
        stack: [],
        desc: "A fast, modern website that turns Google searchers into paying customers. Bilingual, mobile-first, and built to last.",
        placeholder: true,
      },
    ],
    viewLive: "View Live",
    placeholderHeading: "Your project could be here",
    placeholderCta: "El Paso businesses — let's build something together",
  },
  es: {
    sectionLabel: "Proyectos Seleccionados",
    projects: [
      {
        tag: "Sin fines de lucro · Bilingüe · Full Stack",
        title: "Hemophilia Outreach of El Paso",
        subtitle: "HOEP",
        stack: [
          "React",
          "Node.js",
          "MongoDB",
          "GoHighLevel",
          "DeepL API",
          "Nodemailer",
        ],
        desc: "Una plataforma web bilingüe (EN/ES) para la comunidad de hemofilia en El Paso. Incluye verificación de cartas de diagnóstico, directorios de recursos dinámicos, sistemas de notificación por correo y traducciones con DeepL optimizadas para SEO local.",
        color: "#C8102E",
        accent: "#FFD100",
        live: "https://hemo-el-paso.org",
      },
      {
        tag: "Próximamente",
        title: "Tu Negocio Aquí",
        subtitle: "Local · El Paso",
        stack: [],
        desc: "Un sitio web rápido y moderno que convierte búsquedas en Google en clientes que pagan. Bilingüe, mobile-first y construido para durar.",
        placeholder: true,
      },
    ],
    viewLive: "Ver en Vivo",
    placeholderHeading: "Tu proyecto podría estar aquí",
    placeholderCta: "Negocios de El Paso — construyamos algo juntos",
  },
};

export const contactTranslations = {
  en: {
    sectionLabel: "Get In Touch",
    headingLine1: "Ready to get",
    headingLine2: "online?",
    description:
      "I build websites for El Paso businesses. Fast turnaround, bilingual-ready, and priced for local budgets. Fill out the form or reach out directly.",
    github: "GitHub",
    linkedin: "LinkedIn",

    // Form labels
    labelName: "Name",
    labelPhone: "Phone",
    labelEmail: "Email",
    labelService: "I'm interested in",
    labelMessage: "Message",
    labelSource: "How did you find me?",
    required: "*",

    // Placeholders
    placeholderName: "John Smith",
    placeholderPhone: "(000) 000-0000",
    placeholderEmail: "you@example.com",
    placeholderMessage:
      "Tell me about your business and what you're looking for...",
    placeholderService: "Select a service...",
    placeholderSource: "Select one...",

    // Services dropdown
    services: [
      "Landing Page ($300–500 setup)",
      "Full Web App (Custom)",
      "CRM & Automation (from $500)",
      "Ongoing Hosting & Maintenance",
      "Not Sure — Let's Talk",
    ],

    // Sources dropdown
    sources: [
      "Google Search",
      "Referral",
      "Social Media",
      "Drove Past / Local",
      "Other",
    ],

    // Submit button
    submitIdle: "Send Message",
    submitLoading: "Sending...",

    // Footer note
    footerNote: "I respond within 24 hours · No spam, ever",

    // Error
    errorMsg: "Something went wrong. Try emailing me directly.",

    // Success screen
    successHeading: "Message sent.",
    successBody:
      "I'll get back to you within 24 hours. Check your inbox for a confirmation.",
    successReset: "Send Another",
  },

  es: {
    sectionLabel: "Contáctame",
    headingLine1: "¿Listo para estar",
    headingLine2: "en línea?",
    description:
      "Construyo sitios web para negocios en El Paso. Entrega rápida, listo para ser bilingüe y con precios para presupuestos locales. Llena el formulario o contáctame directamente.",
    github: "GitHub",
    linkedin: "LinkedIn",

    // Form labels
    labelName: "Nombre",
    labelPhone: "Teléfono",
    labelEmail: "Correo Electrónico",
    labelService: "Me interesa",
    labelMessage: "Mensaje",
    labelSource: "¿Cómo me encontraste?",
    required: "*",

    // Placeholders
    placeholderName: "Juan García",
    placeholderPhone: "(000) 000-0000",
    placeholderEmail: "tu@ejemplo.com",
    placeholderMessage: "Cuéntame sobre tu negocio y lo que estás buscando...",
    placeholderService: "Selecciona un servicio...",
    placeholderSource: "Selecciona una opción...",

    // Services dropdown
    services: [
      "Página de Inicio ($300–500 de configuración)",
      "Aplicación Web Completa (Personalizada)",
      "CRM y Automatización (desde $500)",
      "Hospedaje y Mantenimiento Mensual",
      "No Estoy Seguro — Hablemos",
    ],

    // Sources dropdown
    sources: [
      "Búsqueda en Google",
      "Referido",
      "Redes Sociales",
      "Pasé por Aquí / Local",
      "Otro",
    ],

    // Submit button
    submitIdle: "Enviar Mensaje",
    submitLoading: "Enviando...",

    // Footer note
    footerNote: "Respondo en 24 horas · Sin spam, nunca",

    // Error
    errorMsg: "Algo salió mal. Intenta enviarme un correo directamente.",

    // Success screen
    successHeading: "Mensaje enviado.",
    successBody:
      "Te responderé en 24 horas. Revisa tu bandeja de entrada para una confirmación.",
    successReset: "Enviar Otro",
  },
};

export const statsTranslations = {
  en: {
    linkLabel: "Impact",
    toggleLabel: "View Impact",
    modalHeading: "Impact Metrics",
    stats: [
      {
        value: "75",
        label: "Reduction in manual work via automation",
        suffix: " %",
      },
      {
        value: "80",
        label: "Client accounts managed concurrently",
        suffix: " +",
      },
      {
        value: "261",
        label: "Local El Paso businesses identified",
        suffix: null,
      },
      {
        value: "5",
        label: "Bootcamp graduate, TripleTen Nov 2024",
        suffix: " ★",
      },
    ],
  },
  es: {
    linkLabel: "Impacto",
    toggleLabel: "Ver Impacto",
    modalHeading: "Métricas de Impacto",
    stats: [
      {
        value: "75",
        label: "Reducción del trabajo manual mediante automatización",
        suffix: " %",
      },
      {
        value: "80",
        label: "Cuentas de clientes gestionadas simultáneamente",
        suffix: " +",
      },
      {
        value: "261",
        label: "Negocios locales identificados en El Paso",
        suffix: null,
      },
      {
        value: "5",
        label: "Egresado del bootcamp TripleTen, nov. 2024",
        suffix: " ★",
      },
    ],
  },
};
