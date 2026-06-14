import React, { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { portfolioData } from './data/portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFigmaEmbed, setActiveFigmaEmbed] = useState(null);
  const [activeFigmaUrl, setActiveFigmaUrl] = useState(null);
  const [activeFigmaTitle, setActiveFigmaTitle] = useState('');
  const [iframeLoading, setIframeLoading] = useState(true);
  const [activeFigmaIsMobile, setActiveFigmaIsMobile] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  const [prevOption, setPrevOption] = useState(() => {
    const savedTheme = (typeof window !== 'undefined' ? localStorage.getItem('theme') : null) || 'dark';
    if (savedTheme === 'light') return '1';
    if (savedTheme === 'dim') return '3';
    return '2'; // dark
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (e, nextTheme, optionIndex) => {
    if (theme === nextTheme) return;

    let prevIndex = '2';
    if (theme === 'light') prevIndex = '1';
    if (theme === 'dim') prevIndex = '3';
    setPrevOption(prevIndex);

    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(nextTheme);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.classList.add('theme-transition-active');

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
        setTheme(nextTheme);
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 650,
          easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });

    transition.finished.then(() => {
      document.documentElement.classList.remove('theme-transition-active');
    });
  };

  const { personalInfo, skills, projects } = portfolioData;

  const openFigmaPrototype = (embedUrl, figmaUrl, title, isMobile) => {
    setActiveFigmaTitle(title);
    setActiveFigmaEmbed(embedUrl);
    setActiveFigmaUrl(figmaUrl);
    setActiveFigmaIsMobile(isMobile);
    setIframeLoading(true);
    document.body.classList.add('no-scroll');
  };

  const closeFigmaPrototype = () => {
    setActiveFigmaEmbed(null);
    setActiveFigmaUrl(null);
    setActiveFigmaTitle('');
    setActiveFigmaIsMobile(false);
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150; // offset for nav height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = document.querySelector('.nav-links a.active');
      const container = document.querySelector('.nav-links');
      if (activeLink && container) {
        container.style.setProperty('--nav-indicator-left', `${activeLink.offsetLeft}px`);
        container.style.setProperty('--nav-indicator-width', `${activeLink.offsetWidth}px`);
        container.style.setProperty('--nav-indicator-height', `${activeLink.offsetHeight}px`);
        container.style.setProperty('--nav-indicator-top', `${activeLink.offsetTop}px`);
      }
    };

    updateIndicator();
    const timer = setTimeout(updateIndicator, 50);

    window.addEventListener('resize', updateIndicator);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeSection, menuOpen]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Liquid Dynamic Wallpaper Background */}
      <div className="liquid-bg-wrapper">
        <div className="liquid-blob blob-1"></div>
        <div className="liquid-blob blob-2"></div>
        <div className="liquid-blob blob-3"></div>
      </div>

      {/* Navigation Header */}
      {/* Navigation Header Wrapper */}
      <div className="navbar-wrapper">
        <div className="navbar-fixed-container">
          <nav className="navbar" id="main-nav">
            <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
              {personalInfo.name}
            </a>

            {/* Navigation links */}
            <ul className="nav-links" style={{ 
              display: menuOpen ? 'flex' : undefined, 
              flexDirection: menuOpen ? 'column' : undefined, 
              position: menuOpen ? 'absolute' : undefined, 
              top: menuOpen ? '75px' : undefined, 
              right: menuOpen ? '0' : undefined, 
              width: menuOpen ? '100%' : undefined, 
              background: menuOpen ? 'var(--menu-bg)' : undefined, 
              backdropFilter: menuOpen ? 'blur(25px)' : undefined,
              WebkitBackdropFilter: menuOpen ? 'blur(25px)' : undefined,
              padding: menuOpen ? '2rem' : undefined, 
              borderBottom: menuOpen ? '1px solid var(--glass-border)' : undefined, 
              borderRadius: menuOpen ? '24px' : undefined,
              boxShadow: menuOpen ? '0 20px 40px var(--glass-shadow)' : undefined,
              gap: menuOpen ? '1.2rem' : undefined 
            }}>
              <div className="nav-indicator"></div>
              <li>
                <a 
                  href="#home" 
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={activeSection === 'projects' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                >
                  Contacto
                </a>
              </li>
            </ul>

            {/* Actions (Menu toggle only) */}
            <div className="nav-actions">
              <button 
                className="menu-toggle" 
                onClick={toggleMenu} 
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
                <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }}></span>
              </button>
            </div>
          </nav>
        </div>

        {/* Floating Theme Switcher Outside */}
        <fieldset className="switcher" c-previous={prevOption}>
          <legend className="switcher__legend">Seleccionar Tema</legend>
          
          <label className="switcher__option" title="Modo Claro">
            <input 
              type="radio" 
              name="theme-switcher" 
              value="light" 
              checked={theme === 'light'} 
              onChange={(e) => handleThemeChange(e, 'light', '1')} 
              className="switcher__input"
              c-option="1"
            />
            <svg className="switcher__icon sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </label>

          <label className="switcher__option" title="Modo Oscuro">
            <input 
              type="radio" 
              name="theme-switcher" 
              value="dark" 
              checked={theme === 'dark'} 
              onChange={(e) => handleThemeChange(e, 'dark', '2')} 
              className="switcher__input"
              c-option="2"
            />
            <svg className="switcher__icon moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </label>

          <label className="switcher__option" title="Modo Tenue">
            <input 
              type="radio" 
              name="theme-switcher" 
              value="dim" 
              checked={theme === 'dim'} 
              onChange={(e) => handleThemeChange(e, 'dim', '3')} 
              className="switcher__input"
              c-option="3"
            />
            <svg className="switcher__icon star-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </label>
        </fieldset>
      </div>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <p className="hero-welcome">Portfolio Personal</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-username">{personalInfo.username}</p>
          <h2 className="hero-title">{personalInfo.title}</h2>
          <p className="hero-description">{personalInfo.subtitle}</p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>
              Ver Proyectos
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
              Contactar
            </a>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about">
          <h2 className="section-title">Sobre Mí</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>{personalInfo.bio}</p>
              <p>📍 Ubicación actual: {personalInfo.location}</p>
              
              <div className="skills-container">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skills-category">
                    <h3>{skillGroup.category}</h3>
                    <div className="skills-list">
                      {skillGroup.items.map((skill, sIdx) => (
                        <span key={sIdx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-graphics">
              <div className="profile-card">
                <div className="profile-card-content">
                  <div className="profile-icon">💻</div>
                  <h3>Desarrollo</h3>
                  <p>Código elegante y optimizado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="section-title">Mis Proyectos</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className={`project-card ${project.isMobile ? 'project-card-mobile' : ''}`}>
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="project-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.isFigma ? (
                      <a 
                        href="#projects" 
                        className="project-link" 
                        onClick={(e) => { e.preventDefault(); openFigmaPrototype(project.embedUrl, project.figmaUrl, project.title, project.isMobile); }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Ver Prototipo
                      </a>
                    ) : (
                      <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        {project.demoText || "Visitar Sitio"}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-container">
            <p className="contact-text">
              ¿Quieres construir algo asombroso o simplemente conectar? Escríbeme y charlemos.
            </p>
            <div className="contact-socials">
              <a href={personalInfo.social.github} className="social-btn" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="contact-email">
              {personalInfo.email}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Hecho con React & Estilo Liquid Glass.</p>
      </footer>

      {/* Figma Prototype Modal Lightbox */}
      <div 
        className={`prototype-modal-overlay ${activeFigmaEmbed ? 'active' : ''}`}
        onClick={closeFigmaPrototype}
      >
        <div 
          className={`prototype-modal-container ${activeFigmaIsMobile ? 'mobile-format' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="prototype-modal-header">
            <h3 className="prototype-modal-title">{activeFigmaTitle}</h3>
            <div className="prototype-modal-actions">
              {activeFigmaUrl && (
                <a 
                  href={activeFigmaUrl} 
                  className="prototype-modal-btn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>Abrir en Figma</span>
                </a>
              )}
              <button className="prototype-modal-close" onClick={closeFigmaPrototype} aria-label="Cerrar prototipo">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <div className="prototype-modal-body">
            {iframeLoading && (
              <div className="prototype-modal-loader">
                <div className="spinner"></div>
                <p>Cargando prototipo interactivo...</p>
              </div>
            )}
            {activeFigmaEmbed && (
              <iframe
                src={activeFigmaEmbed}
                className="prototype-modal-iframe"
                allowFullScreen
                onLoad={() => setIframeLoading(false)}
                title={activeFigmaTitle}
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
