export const portfolioData = {
  personalInfo: {
    name: "TheDarkfox",
    title: "Software Developer & Designer",
    subtitle: "Construyendo el futuro de la web con código limpio y diseño excepcional.",
    bio: "Soy un desarrollador apasionado por crear experiencias digitales interactivas, responsivas y visualmente impactantes. Me especializo en React, desarrollo frontend moderno y en la creación de interfaces de usuario premium que cautiven al usuario a primera vista.",
    location: "México",
    email: "correo@ejemplo.com",
    social: {
      github: "https://github.com/TheDarkfoxs",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      resume: "#"
    }
  },
  skills: [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3 / CSS Modules", "JavaScript (ES6+)", "React.js", "Vite"]
    },
    {
      category: "Backend & Bases de Datos",
      items: ["Node.js", "Express", "REST APIs", "MongoDB", "SQL"]
    },
    {
      category: "Herramientas & Diseño",
      items: ["Git & GitHub", "VS Code", "Figma", "Responsive Design", "UX/UI Principles"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Plataforma E-Commerce Futurista",
      description: "Una tienda online de productos de alta tecnología con animaciones fluidas, pasarela de pago simulada y un carrito de compras altamente interactivo.",
      tech: ["React", "CSS Grid", "Context API", "Local Storage"],
      image: "/src/assets/project_ecommerce.png",
      github: "https://github.com/TheDarkfoxs",
      demo: "https://thedarkfoxs.github.io"
    },
    {
      id: 2,
      title: "Dashboard de Analíticas en Tiempo Real",
      description: "Panel de control premium con gráficos dinámicos interactivos, widgets personalizables y un tema oscuro/claro con estética minimalista.",
      tech: ["React", "CSS Variables", "ChartJS", "WebSockets"],
      image: "/src/assets/project_dashboard.png",
      github: "https://github.com/TheDarkfoxs",
      demo: "https://thedarkfoxs.github.io"
    },
    {
      id: 3,
      title: "Gestor de Tareas Colaborativo",
      description: "Aplicación Kanban interactiva para la gestión de proyectos de equipos con arrastrar y soltar, comentarios en tiempo real y asignación de tareas.",
      tech: ["React", "CSS Modules", "Firebase", "Drag & Drop"],
      image: "/src/assets/project_kanban.png",
      github: "https://github.com/TheDarkfoxs",
      demo: "https://thedarkfoxs.github.io"
    }
  ]
};
