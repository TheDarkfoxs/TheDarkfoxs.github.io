export const portfolioData = {
  personalInfo: {
    name: "Jonatan Martínez",
    username: "@TheDarkfoxs",
    title: "Ingeniero en Sistemas Inteligentes",
    subtitle: "Desarrollador Full Stack con experiencia en Laravel, React e integración de APIs. Especializado en el desarrollo de plataformas empresariales, con enfoque en escalabilidad, automatización y experiencia de usuario. Destaco por mi capacidad de adaptación, aprendizaje continuo y enfoque colaborativo para resolver problemas.",
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
      title: "CRM & ERP",
      level: "Senior",
      levelColor: "#ec4899",
      iconName: "building",
      description: "Desarrollo de CRM, ERP y plataformas de software empresarial.",
      tags: ["Salesforce", "HubSpot", "Enterprise"]
    },
    {
      title: "Full Stack Dev",
      level: "Expert",
      levelColor: "#38bdf8",
      iconName: "laptop",
      description: "Full Stack Developer enfocado en Frontend y experiencias interactivas.",
      tags: ["React", "Node.js", "TypeScript"]
    },
    {
      title: "React & UI/UX",
      level: "Advanced",
      levelColor: "#47a248",
      iconName: "palette",
      description: "Entusiasta de React y apasionado por el diseño UI/UX centrado en el usuario.",
      tags: ["Figma", "Tailwind", "Next.js"]
    },
    {
      title: "API & Automation",
      level: "Master",
      levelColor: "#ec4899",
      iconName: "code",
      description: "Diseño de APIs, integraciones y flujos de automatización complejos.",
      tags: ["REST", "GraphQL", "n8n"]
    }
  ],
  skills: [
    {
      category: "Lenguajes & Frameworks",
      items: ["JavaScript", "PHP", "C", "React", "Laravel", "React Native", "Flutter"]
    },
    {
      category: "Bases de Datos & Cloud",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Amazon S3"]
    },
    {
      category: "Herramientas & Especialidades",
      items: ["GitHub", "Postman", "Figma", "Desarrollo Full Stack", "APIs REST", "Integración de Sistemas"]
    },
    {
      category: "Habilidades Interpersonales",
      items: ["Trabajo en Equipo", "Resolución de Problemas", "Adaptabilidad", "Proactividad"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "FNAFdle - Guess the FNAF Character",
      description: "Un juego interactivo estilo Wordle ambientado en el universo de Five Nights at Freddy's. Adivina el personaje secreto diario a partir de pistas dinámicas como su género, especie, color y juego debut.",
      tech: ["React.js", "Vite", "CSS Modules", "Tailwind CSS"],
      image: "/fnafdle.png",
      github: "https://github.com/TheDarkfoxs",
      demo: "https://fnafdle.netlify.app/",
      demoText: "Demo Live",
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
    },
    {
      id: 5,
      title: "Sistema de Gestión de Calidad",
      description: "Proyecto de 3 meses desarrollado en la escuela para la materia de proyectos computacionales. Es un sistema integral para la gestión de calidad, cumplimiento y auditorías de procesos en una organización. Al ser un desarrollo de uso privado empresarial, únicamente se incluye el diseño interactivo en Figma.",
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
      title: "Mi Finanzas",
      description: "Aplicación móvil funcional de finanzas personales. Fue desarrollada como un proyecto escolar para la materia de desarrollo móvil. Cuenta con flujos completos de registro de transacciones, análisis mensual e integración de presupuestos. Se incluye únicamente el diseño interactivo en Figma debido a la imposibilidad de ejecutar la aplicación nativa en el navegador.",
      tech: ["React Native", "SQLite", "UI/UX Design", "Figma", "Functional App"],
      image: "/mi-finanzas.svg",
      figmaUrl: "https://www.figma.com/proto/4e6wudh28kE5NLVp1R2etz/MiFinanzas?t=hfj8IY2HyUuzTvFr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=3-345",
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4e6wudh28kE5NLVp1R2etz%2FMiFinanzas%3Ft%3Dhfj8IY2HyUuzTvFr-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26node-id%3D3-345",
      isFigma: true,
      isMobile: true
    },
    {
      id: 6,
      title: "Aplicación de Música",
      description: "Prototipo interactivo de aplicación móvil para reproducción musical. Presenta un reproductor flotante minimalista, exploración de playlists, transiciones fluidas y un modo oscuro inmersivo.",
      tech: ["UI/UX Design", "Figma", "Mobile App", "Music Player Prototype"],
      image: "/mi-musica.svg",
      figmaUrl: "https://www.figma.com/proto/N5olUbGATfW3rg3fCGvQls/Untitled?node-id=1-3&p=f&t=31iBSX9mqH57WtCh-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FN5olUbGATfW3rg3fCGvQls%2FUntitled%3Fnode-id%3D1-3%26p%3Df%26t%3D31iBSX9mqH57WtCh-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1",
      isFigma: true,
      isMobile: true
    }
  ]
};
