export const portfolioData = {
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
      title: "Criatools",
      description: "Plataforma web integral para creadores de contenido impulsada por Inteligencia Artificial. Incluye herramientas de automatización, generador de guiones con IA, gestión de patrocinios, analíticas y utilidades avanzadas para optimizar la productividad y creación de contenido.",
      tech: ["React.js", "Laravel", "TypeScript", "Vite", "Tailwind CSS", "Lucide Icons"],
      image: "/criatools.png",
      github: "https://github.com/TheDarkfoxs",
      demo: "https://criatools.com/",
      demoText: "Visitar Sitio",
      isFigma: false,
      badge: "Proyecto más reciente"
    },
    {
      id: 10,
      title: "ClickBos\n(Migración desde ClickUp)",
      description: "Plataforma empresarial de gestión de tareas y proyectos migrada desde ClickUp. Cuenta con un frontend optimizado mediante arquitecturas robustas, y un asistente virtual de IA integrado con modelos de OpenAI para automatizar procesos mediante lenguaje natural.",
      tech: ["React.js", "NestJS", "PostgreSQL", "OpenAI API", "TypeScript"],
      image: "/clickbos.png",
      images: [
        "/clickbos.png",
        "/clickbos/inicio.png",
        "/clickbos/vista_tarea.jpeg",
        "/clickbos/list.png",
        "/clickbos/board.png",
        "/clickbos/bubble_board.png",
        "/clickbos/dashboard.png",
        "/clickbos/form.png"
      ],
      github: "https://github.com/TheDarkfoxs",
      demo: "https://novaflow.solislooms.com/auth/login",
      demoText: "Visitar ClickBos",
      isFigma: false
    },
    {
      id: 9,
      title: "LoomSpot\n(Migración desde HubSpot)",
      description: "CRM completo diseñado para la gestión y migración de relaciones con clientes. Incluye la integración de un Power Dialer con Aircall mediante APIs para la automatización de llamadas, y un módulo de mensajería omnicanal integrado con las APIs de Meta para WhatsApp y Messenger.",
      tech: ["Laravel", "MySQL", "Meta API", "Aircall API", "HubSpot"],
      image: "/crm.png",
      images: [
        "/crm.png",
        "/crm/summary_page.png",
        "/crm/layout_page.png",
        "/crm/power_dialer.png",
        "/crm/whatsapp.png",
        "/crm/messenger.png"
      ],
      github: "https://github.com/TheDarkfoxs",
      demo: "https://loomsspot.com/auth/login",
      demoText: "Visitar CRM",
      isFigma: false
    },
    {
      id: 7,
      title: "Minecraft Network\nLanding Page y Comunidad",
      description: "Plataforma web oficial para un servidor de Minecraft. Incluye estado del servidor en tiempo real, calculadora de créditos/tienda, guía de modalidades, eventos comunitarios y un diseño moderno e inmersivo.",
      tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Lucide Icons"],
      image: "/mc-server.png",
      github: "https://github.com/TheDarkfoxs",
      demo: "https://mymcserver.netlify.app/",
      demoText: "Visitar Sitio",
      isFigma: false
    },
    {
      id: 5,
      title: "Sistema de Gestión de Calidad",
      description: "Proyecto de 3 semestres desarrollado en la escuela para la materia de proyectos computacionales. Es un sistema integral para la gestión de calidad, cumplimiento y auditorías de procesos en una organización. Al ser un desarrollo de uso privado empresarial, únicamente se incluye el diseño interactivo en Figma.",
      tech: ["UI/UX Design", "Figma", "Web Dashboard", "B2B SaaS Prototype"],
      image: "/mi-calidad.svg",
      figmaUrl: "https://www.figma.com/proto/nsolbQsjmt0mMwZYjRTpO3/ProyectoCalidad?t=7F98ppAdHLYH5gf7-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=0-1",
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnsolbQsjmt0mMwZYjRTpO3%2FProyectoCalidad%3Ft%3D7F98ppAdHLYH5gf7-0%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26node-id%3D0-1%26hide-ui%3D1",
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
      image: "/clickbos_mobile/login.png",
      images: [
        "/clickbos_mobile/login.png",
        "/clickbos_mobile/inicio.png",
        "/clickbos_mobile/espacios.png",
        "/clickbos_mobile/modulos.png",
        "/clickbos_mobile/nova_flow.png",
        "/clickbos_mobile/task.png",
        "/clickbos_mobile/list.png",
        "/clickbos_mobile/board.png",
        "/clickbos_mobile/dashboard.png",
        "/clickbos_mobile/form.png"
      ],
      github: "https://github.com/TheDarkfoxs",
      figmaUrl: "https://www.figma.com/proto/A3Ectc2SReDv5oqcJWE8Fa/Nova-Flow-App-Screens?node-id=0-1&t=WcAlqcLtpitwAwep-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FA3Ectc2SReDv5oqcJWE8Fa%2FNova-Flow-App-Screens%3Fnode-id%3D0-1%26t%3DWcAlqcLtpitwAwep-1%26scaling%3Dscale-down%26content-scaling%3Dfixed",
      isFigma: true,
      imageFit: "contain"
    },
    {
      id: 1,
      title: "FNAFdle\nGuess the FNAF Character",
      description: "Un juego interactivo estilo Wordle ambientado en el universo de Five Nights at Freddy's. Adivina el personaje secreto diario a partir de pistas dinámicas como su género, especie, color y juego debut.",
      tech: ["React.js", "Vite", "CSS Modules", "Tailwind CSS"],
      image: "/fnafdle.png",
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
      image: "/trailers.png",
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
      image: "/security.png",
      github: "https://github.com/TheDarkfoxs",
      demo: "https://houstonitsecurity.net/",
      demoText: "Visitar Sitio",
      isFigma: false
    }
  ]
};
