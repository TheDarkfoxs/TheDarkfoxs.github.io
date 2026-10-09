export const portfolioData = {
  es: {
    personalInfo: {
      name: "Jonatan Martínez",
      username: "@TheDarkfoxs",
      title: "Ingeniero en Sistemas Inteligentes",
      subtitle: "Ingeniero de software enfocado en crear soluciones tecnológicas escalables y eficientes. Especializado en el desarrollo de plataformas empresariales, con enfoque en automatización y experiencia de usuario. Destaco por mi capacidad de adaptación, aprendizaje continuo y enfoque colaborativo para resolver problemas.",
      bio: "Soy un desarrollador apasionado por crear experiencias digitales interactivas, responsivas y visualmente impactantes. Me especializo en React, desarrollo frontend moderno y en la creación de interfaces de usuario premium que cautiven al usuario a primera vista.",
      location: "México",
      email: "jonatanu24mtz@gmail.com",
      social: {
        github: "https://github.com/TheDarkfoxs",
        resume: "#"
      }
    },
    highlights: [
      {
        title: "Desarrollador Full Stack",
        level: "Expert",
        levelColor: "#38bdf8",
        iconName: "laptop",
        description: "Desarrollo de software moderno, interactivo y escalable.",
        tags: ["React", "Node.js", "TypeScript"]
      },
      {
        title: "UI/UX",
        level: "Advanced",
        levelColor: "#47a248",
        iconName: "palette",
        description: "Apasionado por el diseño UI/UX centrado en el usuario.",
        tags: ["Figma", "Tailwind", "Next.js"]
      },
      {
        title: "Software Empresarial",
        level: "Senior",
        levelColor: "#ec4899",
        iconName: "building",
        description: "Desarrollo de CRM, ERP y plataformas corporativas a medida.",
        tags: ["Salesforce", "HubSpot", "Enterprise"]
      },
      {
        title: "APIs y Automatización",
        level: "Master",
        levelColor: "#a855f7",
        iconName: "code",
        description: "Diseño de APIs, integraciones y flujos de automatización.",
        tags: ["REST", "GraphQL", "n8n"]
      }
    ],
    skills: [
      {
        category: "Lenguajes y Frameworks",
        items: ["JavaScript", "PHP", "C", "React", "Laravel", "React Native", "Flutter"]
      },
      {
        category: "Bases de Datos y Cloud",
        items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Amazon S3"]
      },
      {
        category: "Herramientas y Especialidades",
        items: ["GitHub", "Postman", "Figma", "Desarrollo Full Stack", "APIs REST", "Integración de Sistemas"]
      },
      {
        category: "Habilidades Interpersonales",
        items: ["Trabajo en Equipo", "Resolución de Problemas", "Adaptabilidad", "Proactividad"]
      }
    ],
    projects: [
      {
        id: 8,
        title: "Criatools - Creator OS",
        description: "Plataforma web integral para creadores de contenido impulsada por Inteligencia Artificial. Incluye herramientas de automatización, generador de guiones con IA, gestión de patrocinios, analíticas y utilidades avanzadas para optimizar la productividad y creación de contenido.",
        tech: ["React.js", "Laravel", "TypeScript", "Vite", "Tailwind CSS", "Lucide Icons"],
        image: "/criatools.webp",
        github: "https://github.com/TheDarkfoxs",
        demo: "https://criatools.com/",
        demoText: "Visitar Sitio",
        isFigma: false,
        badge: "Proyecto más reciente"
      },
      {
        id: 10,
        title: "ClickBos (Migración desde ClickUp)",
        description: "Plataforma empresarial de gestión de tareas y proyectos migrada desde ClickUp. Cuenta con un frontend optimizado mediante arquitecturas robustas, y un asistente virtual de IA integrado con modelos de OpenAI para automatizar procesos mediante lenguaje natural.",
        tech: ["React.js", "NestJS", "PostgreSQL", "OpenAI API", "TypeScript"],
        image: "/clickbos.webp",
        images: [
          "/clickbos.webp",
          "/clickbos/inicio.webp",
          "/clickbos/vista_tarea.webp",
          "/clickbos/list.webp",
          "/clickbos/board.webp",
          "/clickbos/bubble_board.webp",
          "/clickbos/dashboard.webp",
          "/clickbos/form.webp"
        ],
        github: "https://github.com/TheDarkfoxs",
        demo: "https://novaflow.solislooms.com/auth/login",
        demoText: "Visitar ClickBos",
        isFigma: false,
        imageFit: "contain"
      },
      {
        id: 9,
        title: "LoomSpot (Migración desde HubSpot)",
        description: "CRM completo diseñado para la gestión y migración de relaciones con clientes. Incluye la integración de un Power Dialer con Aircall mediante APIs para la automatización de llamadas, y un módulo de mensajería omnicanal integrado con las APIs de Meta para WhatsApp y Messenger.",
        tech: ["Laravel", "MySQL", "Meta API", "Aircall API", "HubSpot"],
        image: "/crm.webp",
        images: [
          "/crm.webp",
          "/crm/summary_page.webp",
          "/crm/layout_page_1.webp",
          "/crm/power_dialer.webp",
          "/crm/whatsapp.webp",
          "/crm/messenger.webp"
        ],
        github: "https://github.com/TheDarkfoxs",
        demo: "https://loomsspot.com/auth/login",
        demoText: "Visitar CRM",
        isFigma: false,
        imageFit: "contain"
      },
      {
        id: 7,
        title: "Minecraft Network\nLanding Page y Comunidad",
        description: "Plataforma web oficial para un servidor de Minecraft. Incluye estado del servidor en tiempo real, calculadora de créditos/tienda, guía de modalidades, eventos comunitarios y un diseño moderno e inmersivo.",
        tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Lucide Icons"],
        image: "/mc-server.webp",
        images: [
          "/mc-server.webp",
          "/mcserver/caracteristicas.webp",
          "/mcserver/trade.webp"
        ],
        github: "https://github.com/TheDarkfoxs",
        demo: "https://mymcserver.netlify.app/",
        demoText: "Visitar Sitio",
        isFigma: false,
        imageFit: "contain"
      },
      {
        id: 5,
        title: "Sistema de Gestión de Calidad",
        description: "Proyecto de 3 semestres desarrollado en la escuela para la materia de proyectos computacionales. Es un sistema integral para la gestión de calidad, cumplimiento y auditorías de procesos en una organización. Al ser un desarrollo de uso privado empresarial, únicamente se incluye el diseño interactivo en Figma.",
        tech: ["UI/UX Design", "Figma", "Web Dashboard", "B2B SaaS Prototype"],
        image: "/mi-calidad.svg",
        figmaUrl: "https://www.figma.com/proto/nsolbQsjmt0mMwZYjRTpO3/ProyectoCalidad?t=7F98ppAdHLYH5gf7-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=0-1",
        embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnsolbQsjmt0mMwZYjRTpO3%2FProyectoCalidad%3Ft%3D7F98ppAdHLYH5gf7-0%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26node-id%3D0-1",
        isFigma: true,
        isMobile: false,
        award: {
          title: "1er Lugar - ExpoCiComp Otoño 2025",
          description: "12.ª Edición - Primer lugar en la Exposición de Proyectos del Área de Ciencias de la Computación. Reconocimiento por un proyecto de software desarrollado durante tres semestres."
        }
      },
      {
        id: 4,
        title: "ClickBos\n(Aplicación Móvil)",
        description: "Aplicación móvil oficial de ClickBos desarrollada con React Native y conectada a la misma arquitectura backend con NestJS, PostgreSQL e IA de OpenAI. Permite gestionar tareas, espacios, módulos, tableros Kanban, formularios y analíticas en tiempo real. Proyecto en desarrollo.",
        tech: ["React Native", "TypeScript", "NestJS", "PostgreSQL", "OpenAI API"],
        image: "/clickbos_mobile/login.webp",
        images: [
          "/clickbos_mobile/login.webp",
          "/clickbos_mobile/inicio.webp",
          "/clickbos_mobile/espacios.webp",
          "/clickbos_mobile/modulos.webp",
          "/clickbos_mobile/nova_flow.webp",
          "/clickbos_mobile/task.webp",
          "/clickbos_mobile/list.webp",
          "/clickbos_mobile/board.webp",
          "/clickbos_mobile/dashboard.webp",
          "/clickbos_mobile/form.webp"
        ],
        github: "https://github.com/TheDarkfoxs",
        figmaUrl: "https://www.figma.com/proto/A3Ectc2SReDv5oqcJWE8Fa/Nova-Flow-App-Screens?node-id=0-1&t=WcAlqcLtpitwAwep-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
        embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FA3Ectc2SReDv5oqcJWE8Fa%2FNova-Flow-App-Screens%3Fnode-id%3D0-1%26t%3DWcAlqcLtpitwAwep-1%26scaling%3Dscale-down%26content-scaling%3Dfixed",
        isFigma: true,
        isMobile: true,
        imageFit: "contain"
      },
      {
        id: 1,
        title: "FNAFdle\nGuess the FNAF Character",
        description: "Un juego interactivo estilo Wordle ambientado en el universo de Five Nights at Freddy's. Adivina el personaje secreto diario a partir de pistas dinámicas como su género, especie, color y juego debut.",
        tech: ["React.js", "Vite", "CSS Modules", "Tailwind CSS"],
        image: "/fnafdle.webp",
        github: "https://github.com/TheDarkfoxs",
        demo: "https://fnafdle.netlify.app/",
        demoText: "Visitar Sitio",
        isFigma: false
      },
      {
        id: 2,
        title: "Rancho Trailers",
        description: "Plataforma web premium para un fabricante líder de food trailers totalmente equipados en Houston, Texas. Diseñada para una óptima conversión y velocidad, con amplias galerías y detalles comerciales.",
        tech: ["HTML5", "CSS3", "Bootstrap", "PHP", "Livewire"],
        image: "/trailers.webp",
        images: [
          "/trailers.webp",
          "/trailers/about.webp",
          "/trailers/our-team.webp",
          "/trailers/our-trailers.webp",
          "/trailers/financing.webp",
          "/trailers/projects.webp",
          "/trailers/our-clients.webp",
          "/trailers/contact.webp"
        ],
        github: "https://github.com/TheDarkfoxs",
        demo: "https://ranchotrailers.com/",
        demoText: "Visitar Sitio",
        isFigma: false
      },
      {
        id: 3,
        title: "Houston IT Security",
        description: "Sitio corporativo profesional de servicios TI, diseño web, desarrollo de software a medida y ciberseguridad. Optimizado con las mejores prácticas de SEO y un flujo de cotización dinámico.",
        tech: ["HTML5", "CSS3", "Bootstrap", "Laravel", "Livewire"],
        image: "/security.webp",
        github: "https://github.com/TheDarkfoxs",
        demo: "https://houstonitsecurity.net/",
        demoText: "Visitar Sitio",
        isFigma: false
      }
    ]
  },
  en: {
    personalInfo: {
      name: "Jonatan Martínez",
      username: "@TheDarkfoxs",
      title: "Intelligent Systems Engineer",
      subtitle: "Software engineer focused on creating scalable and efficient technological solutions. Specialized in enterprise platform development, with a strong focus on automation and user experience. Known for adaptability, continuous learning, and a collaborative problem-solving approach.",
      bio: "Passionate software developer dedicated to crafting interactive, responsive, and visually striking digital experiences. Specialized in React, modern frontend development, and creating premium user interfaces that engage users from the very first glance.",
      location: "Mexico",
      email: "jonatanu24mtz@gmail.com",
      social: {
        github: "https://github.com/TheDarkfoxs",
        resume: "#"
      }
    },
    highlights: [
      {
        title: "Full Stack Developer",
        level: "Expert",
        levelColor: "#38bdf8",
        iconName: "laptop",
        description: "Modern, interactive, and highly scalable software development.",
        tags: ["React", "Node.js", "TypeScript"]
      },
      {
        title: "UI/UX Design",
        level: "Advanced",
        levelColor: "#47a248",
        iconName: "palette",
        description: "Passionate about user-centered and intuitive UI/UX design.",
        tags: ["Figma", "Tailwind", "Next.js"]
      },
      {
        title: "Enterprise Software",
        level: "Senior",
        levelColor: "#ec4899",
        iconName: "building",
        description: "Custom CRM, ERP, and corporate enterprise platforms.",
        tags: ["Salesforce", "HubSpot", "Enterprise"]
      },
      {
        title: "APIs & Automation",
        level: "Master",
        levelColor: "#a855f7",
        iconName: "code",
        description: "API architecture, third-party integrations, and workflow automation.",
        tags: ["REST", "GraphQL", "n8n"]
      }
    ],
    skills: [
      {
        category: "Languages & Frameworks",
        items: ["JavaScript", "PHP", "C", "React", "Laravel", "React Native", "Flutter"]
      },
      {
        category: "Databases & Cloud",
        items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Amazon S3"]
      },
      {
        category: "Tools & Specialties",
        items: ["GitHub", "Postman", "Figma", "Full Stack Development", "REST APIs", "Systems Integration"]
      },
      {
        category: "Interpersonal Skills",
        items: ["Teamwork", "Problem Solving", "Adaptability", "Proactivity"]
      }
    ],
    projects: [
      {
        id: 8,
        title: "Criatools - Creator OS",
        description: "All-in-one AI-powered web platform for content creators. Features automation tools, AI script generation, sponsorship tracking, analytics, and advanced utilities to boost productivity and content creation.",
        tech: ["React.js", "Laravel", "TypeScript", "Vite", "Tailwind CSS", "Lucide Icons"],
        image: "/criatools.webp",
        github: "https://github.com/TheDarkfoxs",
        demo: "https://criatools.com/",
        demoText: "Visit Site",
        isFigma: false,
        badge: "Latest Project"
      },
      {
        id: 10,
        title: "ClickBos (Migration from ClickUp)",
        description: "Enterprise task and project management platform migrated from ClickUp. Built with an optimized frontend architecture and an integrated OpenAI virtual assistant to automate workflows through natural language.",
        tech: ["React.js", "NestJS", "PostgreSQL", "OpenAI API", "TypeScript"],
        image: "/clickbos.webp",
        images: [
          "/clickbos.webp",
          "/clickbos/inicio.webp",
          "/clickbos/vista_tarea.webp",
          "/clickbos/list.webp",
          "/clickbos/board.webp",
          "/clickbos/bubble_board.webp",
          "/clickbos/dashboard.webp",
          "/clickbos/form.webp"
        ],
        github: "https://github.com/TheDarkfoxs",
        demo: "https://novaflow.solislooms.com/auth/login",
        demoText: "Visit ClickBos",
        isFigma: false,
        imageFit: "contain"
      },
      {
        id: 9,
        title: "LoomSpot (Migration from HubSpot)",
        description: "Comprehensive CRM designed for customer relationship management and migration. Features Aircall API Power Dialer integration for automated calling, and an omnichannel messaging module integrated with Meta APIs for WhatsApp and Messenger.",
        tech: ["Laravel", "MySQL", "Meta API", "Aircall API", "HubSpot"],
        image: "/crm.webp",
        images: [
          "/crm.webp",
          "/crm/summary_page.webp",
          "/crm/layout_page_1.webp",
          "/crm/power_dialer.webp",
          "/crm/whatsapp.webp",
          "/crm/messenger.webp"
        ],
        github: "https://github.com/TheDarkfoxs",
        demo: "https://loomsspot.com/auth/login",
        demoText: "Visit CRM",
        isFigma: false,
        imageFit: "contain"
      },
      {
        id: 7,
        title: "Minecraft Network\nLanding Page & Community",
        description: "Official web platform for a Minecraft server network. Features real-time server status, credit/store calculator, game modes guide, community events, and a modern immersive design.",
        tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Lucide Icons"],
        image: "/mc-server.webp",
        images: [
          "/mc-server.webp",
          "/mcserver/caracteristicas.webp",
          "/mcserver/trade.webp"
        ],
        github: "https://github.com/TheDarkfoxs",
        demo: "https://mymcserver.netlify.app/",
        demoText: "Visit Site",
        isFigma: false,
        imageFit: "contain"
      },
      {
        id: 5,
        title: "Quality Management System",
        description: "A 3-semester academic project developed for the computational projects course. A comprehensive system for quality management, compliance, and process audits in an organization. As a private enterprise development, only the interactive Figma prototype is showcased.",
        tech: ["UI/UX Design", "Figma", "Web Dashboard", "B2B SaaS Prototype"],
        image: "/mi-calidad.svg",
        figmaUrl: "https://www.figma.com/proto/nsolbQsjmt0mMwZYjRTpO3/ProyectoCalidad?t=7F98ppAdHLYH5gf7-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=0-1",
        embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnsolbQsjmt0mMwZYjRTpO3%2FProyectoCalidad%3Ft%3D7F98ppAdHLYH5gf7-0%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26node-id%3D0-1",
        isFigma: true,
        isMobile: false,
        award: {
          title: "1st Place - ExpoCiComp Fall 2025",
          description: "12th Edition - First place award at the Computer Science Projects Exhibition. Recognition for a 3-semester software engineering project."
        }
      },
      {
        id: 4,
        title: "ClickBos\n(Mobile App)",
        description: "Official ClickBos mobile app built with React Native and connected to the NestJS, PostgreSQL, and OpenAI backend architecture. Enables managing tasks, workspaces, modules, Kanban boards, custom forms, and real-time analytics. In active development.",
        tech: ["React Native", "TypeScript", "NestJS", "PostgreSQL", "OpenAI API"],
        image: "/clickbos_mobile/login.webp",
        images: [
          "/clickbos_mobile/login.webp",
          "/clickbos_mobile/inicio.webp",
          "/clickbos_mobile/espacios.webp",
          "/clickbos_mobile/modulos.webp",
          "/clickbos_mobile/nova_flow.webp",
          "/clickbos_mobile/task.webp",
          "/clickbos_mobile/list.webp",
          "/clickbos_mobile/board.webp",
          "/clickbos_mobile/dashboard.webp",
          "/clickbos_mobile/form.webp"
        ],
        github: "https://github.com/TheDarkfoxs",
        figmaUrl: "https://www.figma.com/proto/A3Ectc2SReDv5oqcJWE8Fa/Nova-Flow-App-Screens?node-id=0-1&t=WcAlqcLtpitwAwep-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
        embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FA3Ectc2SReDv5oqcJWE8Fa%2FNova-Flow-App-Screens%3Fnode-id%3D0-1%26t%3DWcAlqcLtpitwAwep-1%26scaling%3Dscale-down%26content-scaling%3Dfixed",
        isFigma: true,
        isMobile: true,
        imageFit: "contain"
      },
      {
        id: 1,
        title: "FNAFdle\nGuess the FNAF Character",
        description: "An interactive Wordle-style guessing game set in the Five Nights at Freddy's universe. Guess the secret daily character using dynamic clues such as gender, species, color, and debut game.",
        tech: ["React.js", "Vite", "CSS Modules", "Tailwind CSS"],
        image: "/fnafdle.webp",
        github: "https://github.com/TheDarkfoxs",
        demo: "https://fnafdle.netlify.app/",
        demoText: "Visit Site",
        isFigma: false
      },
      {
        id: 2,
        title: "Rancho Trailers",
        description: "Premium web platform for a leading manufacturer of fully equipped food trailers in Houston, Texas. Designed for optimal conversion and performance, featuring extensive galleries and commercial specifications.",
        tech: ["HTML5", "CSS3", "Bootstrap", "PHP", "Livewire"],
        image: "/trailers.webp",
        images: [
          "/trailers.webp",
          "/trailers/about.webp",
          "/trailers/our-team.webp",
          "/trailers/our-trailers.webp",
          "/trailers/financing.webp",
          "/trailers/projects.webp",
          "/trailers/our-clients.webp",
          "/trailers/contact.webp"
        ],
        github: "https://github.com/TheDarkfoxs",
        demo: "https://ranchotrailers.com/",
        demoText: "Visit Site",
        isFigma: false
      },
      {
        id: 3,
        title: "Houston IT Security",
        description: "Professional corporate website for IT services, web design, custom software development, and cybersecurity. Optimized with SEO best practices and a dynamic quotation flow.",
        tech: ["HTML5", "CSS3", "Bootstrap", "Laravel", "Livewire"],
        image: "/security.webp",
        github: "https://github.com/TheDarkfoxs",
        demo: "https://houstonitsecurity.net/",
        demoText: "Visit Site",
        isFigma: false
      }
    ]
  }
};

export const uiTranslations = {
  es: {
    logo: "Mi Portafolio",
    navHome: "Inicio",
    navSkills: "Habilidades",
    navProjects: "Proyectos",
    navContact: "Contacto",
    themeSelectLegend: "Seleccionar Tema",
    themeLight: "Modo Claro",
    themeDark: "Modo Oscuro",
    langSwitchTitle: (currentLang) => currentLang === 'es' ? 'Cambiar a Inglés' : 'Cambiar a Español',
    langAria: "Cambiar idioma (ES / EN)",
    heroViewProjects: "Ver Proyectos",
    heroContact: "Contactar",
    teamwork: "Trabajo en equipo",
    problemSolving: "Resolución de problemas",
    adaptability: "Adaptabilidad",
    proactivity: "Proactividad",
    skillsSectionTitle: "Habilidades y Especialidades",
    projectsSectionTitle: "Mis Proyectos",
    screenshotsCount: (count) => `${count} capturas`,
    viewFullscreen: "Ver en pantalla completa",
    viewPrototype: "Ver Prototipo",
    viewScreenshots: "Ver Capturas",
    contactSectionTitle: "Contacto",
    contactTextLine1: "¿Quieres construir algo asombroso o simplemente conectar?",
    contactTextLine2: "Escríbeme y charlemos.",
    footerText: (year, name) => `© ${year} ${name}. Hecho con React y Estilo Liquid Glass.`,
    lightboxCover: "Portada",
    lightboxCapture: (idx, total) => `Captura ${idx} de ${total}`,
    zoomOut: "Reducir zoom (-)",
    zoomIn: "Aumentar zoom (+)",
    zoomReset: "Click para restablecer zoom",
    closeEsc: "Cerrar (Esc)",
    closePreview: "Cerrar vista previa",
    prevArrow: "Anterior (Flecha izquierda)",
    nextArrow: "Siguiente (Flecha derecha)",
    figmaBadge: "Prototipo Figma",
    openInFigma: "Abrir en Figma",
    closePrototype: "Cerrar prototipo",
    loadingPrototype: "Cargando prototipo interactivo...",
    interactivePrototype: "Prototipo Interactivo"
  },
  en: {
    logo: "My Portfolio",
    navHome: "Home",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    themeSelectLegend: "Select Theme",
    themeLight: "Light Mode",
    themeDark: "Dark Mode",
    langSwitchTitle: (currentLang) => currentLang === 'es' ? 'Switch to English' : 'Switch to Spanish',
    langAria: "Change language (ES / EN)",
    heroViewProjects: "View Projects",
    heroContact: "Contact Me",
    teamwork: "Teamwork",
    problemSolving: "Problem Solving",
    adaptability: "Adaptability",
    proactivity: "Proactivity",
    skillsSectionTitle: "Skills & Expertise",
    projectsSectionTitle: "My Projects",
    screenshotsCount: (count) => `${count} screenshots`,
    viewFullscreen: "View fullscreen",
    viewPrototype: "View Prototype",
    viewScreenshots: "View Screenshots",
    contactSectionTitle: "Contact",
    contactTextLine1: "Looking to build something amazing or just want to connect?",
    contactTextLine2: "Drop me a line and let's talk.",
    footerText: (year, name) => `© ${year} ${name}. Built with React and Liquid Glass Design.`,
    lightboxCover: "Cover",
    lightboxCapture: (idx, total) => `Screenshot ${idx} of ${total}`,
    zoomOut: "Zoom out (-)",
    zoomIn: "Zoom in (+)",
    zoomReset: "Click to reset zoom",
    closeEsc: "Close (Esc)",
    closePreview: "Close preview",
    prevArrow: "Previous (Left Arrow)",
    nextArrow: "Next (Right Arrow)",
    figmaBadge: "Figma Prototype",
    openInFigma: "Open in Figma",
    closePrototype: "Close prototype",
    loadingPrototype: "Loading interactive prototype...",
    interactivePrototype: "Interactive Prototype"
  }
};
