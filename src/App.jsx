import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';
import { portfolioData, uiTranslations } from './data/portfolioData';
import { 
  SiReact, 
  SiLaravel, 
  SiPhp, 
  SiJavascript, 
  SiC, 
  SiFlutter, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiFirebase, 
  SiGithub, 
  SiPostman, 
  SiFigma,
  SiDocker
} from 'react-icons/si';
import { 
  BsBuilding, 
  BsLaptop, 
  BsPalette, 
  BsCodeSlash, 
  BsDatabase, 
  BsRocket, 
  BsDiagram3, 
  BsCloud,
  BsTrophyFill
} from 'react-icons/bs';
import { 
  LuUsers, 
  LuLightbulb, 
  LuWorkflow, 
  LuZap 
} from 'react-icons/lu';


const SiAmazons3 = ({ color, ...props }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color }}
    width="1em"
    height="1em"
    {...props}
  >
    <title>Amazon S3</title>
    <path d="M20.913 13.147l.12-.895c.947.576 1.258.922 1.354 1.071-.16.031-.562.046-1.474-.176zm-2.174 7.988a.547.547 0 0 0-.005.073c0 .084-.207.405-1.124.768a10.28 10.28 0 0 1-1.438.432c-1.405.325-3.128.504-4.853.504-4.612 0-7.412-1.184-7.412-1.704a.547.547 0 0 0-.005-.073L1.81 5.602c.135.078.28.154.432.227.042.02.086.038.128.057.134.062.272.122.417.18l.179.069c.154.058.314.114.478.168.043.013.084.029.13.043.207.065.423.127.646.187l.176.044c.175.044.353.087.534.127a23.414 23.414 0 0 0 .843.17l.121.023c.252.045.508.085.768.122.071.011.144.02.216.03.2.027.4.053.604.077l.24.027c.245.026.49.05.74.07l.081.009c.275.022.552.04.83.056l.233.012c.21.01.422.018.633.025a33.088 33.088 0 0 0 2.795-.026l.232-.011c.278-.016.555-.034.83-.056l.08-.008c.25-.02.497-.045.742-.072l.238-.026c.205-.024.408-.05.609-.077.07-.01.141-.019.211-.03.261-.037.519-.078.772-.122l.111-.02c.215-.04.427-.082.634-.125l.212-.047c.186-.041.368-.085.546-.13l.166-.042c.225-.06.444-.122.654-.189.04-.012.077-.026.115-.038a10.6 10.6 0 0 0 .493-.173c.058-.021.114-.044.17-.066.15-.06.293-.12.43-.185.038-.017.079-.034.116-.052.153-.073.3-.15.436-.228l-.976 7.245c-2.488-.78-5.805-2.292-7.311-3a1.09 1.09 0 0 0-1.088-1.085c-.6 0-1.088.489-1.088 1.088 0 .6.488 1.089 1.088 1.089.196 0 .378-.056.537-.148 1.72.812 5.144 2.367 7.715 3.15zm-7.42-20.047c5.677 0 9.676 1.759 9.75 2.736l-.014.113c-.01.033-.031.067-.048.101-.015.028-.026.057-.047.087-.024.033-.058.068-.09.102-.028.03-.051.06-.084.09-.038.035-.087.07-.133.105-.04.03-.074.06-.119.091-.053.036-.116.071-.177.107-.05.03-.095.06-.15.09-.068.036-.147.073-.222.11-.059.028-.114.057-.177.085-.084.038-.177.074-.268.111-.068.027-.13.054-.203.082-.097.036-.205.072-.31.107-.075.026-.148.053-.228.079-.111.035-.233.069-.35.103-.085.024-.165.05-.253.073-.124.034-.258.065-.389.098-.093.022-.181.046-.278.068-.139.032-.287.061-.433.091-.098.02-.191.041-.293.06-.155.03-.32.057-.482.084-.1.018-.198.036-.302.052-.166.026-.342.048-.515.072-.11.014-.213.03-.325.044-.181.023-.372.041-.56.06-.11.012-.218.025-.332.036-.188.016-.386.029-.58.043-.122.009-.24.02-.364.028-.207.012-.422.02-.635.028-.12.005-.234.012-.354.016a35.605 35.605 0 0 1-2.069 0c-.12-.004-.234-.011-.352-.016-.214-.008-.43-.016-.637-.028-.122-.008-.238-.02-.36-.027-.195-.015-.394-.028-.584-.044-.11-.01-.215-.024-.324-.035-.19-.02-.384-.038-.568-.06l-.315-.044c-.176-.024-.355-.046-.525-.073-.1-.015-.192-.033-.29-.05-.167-.028-.335-.055-.494-.086-.096-.018-.183-.038-.276-.056-.151-.032-.305-.062-.45-.095-.09-.02-.173-.043-.26-.064-.138-.034-.277-.067-.407-.102-.082-.022-.157-.046-.235-.069a11.75 11.75 0 0 1-.368-.108c-.075-.024-.141-.049-.213-.073-.11-.037-.223-.075-.325-.113-.067-.025-.125-.051-.188-.077-.096-.038-.195-.076-.282-.115-.06-.027-.11-.054-.166-.08-.08-.039-.162-.077-.233-.116-.052-.028-.094-.055-.142-.084-.063-.038-.13-.075-.185-.113-.043-.029-.075-.058-.113-.086-.048-.037-.098-.073-.139-.11-.032-.029-.054-.057-.08-.087-.033-.035-.069-.07-.093-.104-.02-.03-.031-.058-.046-.086-.018-.035-.039-.068-.049-.102l-.015-.113c.076-.977 4.074-2.736 9.748-2.736zm12.182 12.124c-.118-.628-.84-1.291-2.31-2.128l.963-7.16a.531.531 0 0 0 .005-.073C22.16 1.581 16.447 0 11.32 0 6.194 0 .482 1.581.482 3.851a.58.58 0 0 0 .005.072L2.819 21.25c.071 2.002 5.236 2.75 8.5 2.75 1.805 0 3.615-.188 5.098-.531.598-.138 1.133-.3 1.592-.48 1.18-.467 1.789-1.053 1.813-1.739l.945-7.018c.557.131 1.016.197 1.389.197.54 0 .902-.137 1.134-.413a.956.956 0 0 0 .21-.804z" />
  </svg>
);

const techLogos = [
  { node: <SiReact color="#61DAFB" />, title: "React" },
  { node: <SiLaravel color="#FF2D20" />, title: "Laravel" },
  { node: <SiPhp color="#777BB4" />, title: "PHP" },
  { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript" },
  { node: <SiC color="#A8B9CC" />, title: "C" },
  { node: <SiFlutter color="#02569B" />, title: "Flutter" },
  { node: <SiMysql color="#4479A1" />, title: "MySQL" },
  { node: <SiPostgresql color="#4169E1" />, title: "PostgreSQL" },
  { node: <SiMongodb color="#47A248" />, title: "MongoDB" },
  { node: <SiFirebase color="#FFCA28" />, title: "Firebase" },
  { node: <SiAmazons3 color="#FF9900" />, title: "Amazon S3" },
  { node: <SiGithub style={{ color: 'var(--text-primary)' }} />, title: "GitHub" },
  { node: <SiPostman color="#FF6C37" />, title: "Postman" },
  { node: <SiFigma color="#F24E1E" />, title: "Figma" },
  { node: <SiDocker color="#2496ED" />, title: "Docker" }
];


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
      const saved = localStorage.getItem('theme');
      return saved === 'light' ? 'light' : 'dark';
    }
    return 'dark';
  });

  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'es';
    }
    return 'es';
  });

  const [prevOption, setPrevOption] = useState(() => {
    const savedTheme = (typeof window !== 'undefined' ? localStorage.getItem('theme') : null) || 'dark';
    return savedTheme === 'light' ? '1' : '2';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.title = lang === 'es' ? 'Mi Portafolio' : 'My Portfolio';
  }, [lang]);

  const handleLangToggle = (e) => {
    const nextLang = e.target.checked ? 'en' : 'es';
    setLang(nextLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', nextLang);
    }
  };

  const handleThemeChange = (e, nextTheme) => {
    if (theme === nextTheme) return;

    setPrevOption(theme === 'light' ? '1' : '2');

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

  const currentLangData = portfolioData[lang] || portfolioData.es;
  const t = uiTranslations[lang] || uiTranslations.es;
  const { personalInfo, highlights, projects } = currentLangData;

  const [projectImageIndexes, setProjectImageIndexes] = useState({});
  const [activeLightboxProject, setActiveLightboxProject] = useState(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0);
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ startX: 0, startY: 0, posX: 0, posY: 0 });
  const lightboxViewRef = useRef(null);
  const lightboxImgRef = useRef(null);

  const clampPosition = (x, y, scale) => {
    const container = lightboxViewRef.current;
    const img = lightboxImgRef.current;
    if (!container || !img || scale <= 1) return { x: 0, y: 0 };

    const cRect = container.getBoundingClientRect();
    const baseW = img.offsetWidth || cRect.width * 0.8;
    const baseH = img.offsetHeight || cRect.height * 0.8;

    const scaledW = baseW * scale;
    const scaledH = baseH * scale;

    const maxX = Math.max(0, (scaledW - cRect.width) / 2) + Math.min(cRect.width * 0.2, 100);
    const maxY = Math.max(0, (scaledH - cRect.height) / 2) + Math.min(cRect.height * 0.2, 100);

    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y))
    };
  };

  const resetZoom = () => {
    setZoomScale(1);
    setZoomPosition({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const openLightbox = (e, project, initialIndex = 0) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const images = project.images && project.images.length > 0 ? project.images : [project.image];
    setActiveLightboxProject({
      ...project,
      images
    });
    setActiveLightboxIndex(initialIndex);
    resetZoom();
    document.body.classList.add('no-scroll');
  };

  const closeLightbox = () => {
    setActiveLightboxProject(null);
    setActiveLightboxIndex(0);
    resetZoom();
    document.body.classList.remove('no-scroll');
  };

  const changeLightboxSlide = (newIndex) => {
    if (newIndex === activeLightboxIndex) return;
    setZoomScale(1);
    setZoomPosition({ x: 0, y: 0 });
    setIsDragging(false);
    setActiveLightboxIndex(newIndex);
  };

  const handleLightboxPrev = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (!activeLightboxProject) return;
    const total = activeLightboxProject.images.length;
    const targetIndex = (activeLightboxIndex - 1 + total) % total;
    changeLightboxSlide(targetIndex);
  };

  const handleLightboxNext = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (!activeLightboxProject) return;
    const total = activeLightboxProject.images.length;
    const targetIndex = (activeLightboxIndex + 1) % total;
    changeLightboxSlide(targetIndex);
  };

  useEffect(() => {
    const el = lightboxViewRef.current;
    if (!el || !activeLightboxProject) return;

    const onWheel = (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.18 : 0.85;
      setZoomScale((prev) => {
        const next = Math.min(Math.max(1, prev * zoomFactor), 4.5);
        if (next <= 1.02) {
          setZoomPosition({ x: 0, y: 0 });
          return 1;
        }
        setZoomPosition((prevPos) => clampPosition(prevPos.x, prevPos.y, next));
        return next;
      });
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, [activeLightboxProject]);

  const handlePointerDown = (e) => {
    if (zoomScale <= 1 || e.target.closest('button')) return;
    setIsDragging(true);
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: zoomPosition.x,
      posY: zoomPosition.y
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}
  };

  const handlePointerMove = (e) => {
    if (!isDragging || zoomScale <= 1) return;
    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;
    const rawX = dragStartRef.current.posX + dx;
    const rawY = dragStartRef.current.posY + dy;
    setZoomPosition(clampPosition(rawX, rawY, zoomScale));
  };

  const handlePointerUp = (e) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  };

  const handleImageDoubleClick = () => {
    if (zoomScale > 1) {
      resetZoom();
    } else {
      setZoomScale(2.2);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxProject) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') handleLightboxPrev();
        if (e.key === 'ArrowRight') handleLightboxNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxProject, activeLightboxIndex, zoomScale]);

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
    const sections = ['home', 'about', 'projects', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -55% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
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
    const raf = requestAnimationFrame(updateIndicator);
    const timer = setTimeout(updateIndicator, 50);

    window.addEventListener('resize', updateIndicator);

    const container = document.querySelector('.nav-links');
    let ro = null;
    if (container && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(updateIndicator);
      ro.observe(container);
    }

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicator);
      if (ro) ro.disconnect();
    };
  }, [activeSection, menuOpen, lang]);


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
              {t.logo}
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
                  {t.navHome}
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                >
                  {t.navSkills}
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={activeSection === 'projects' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}
                >
                  {t.navProjects}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                >
                  {t.navContact}
                </a>
              </li>
            </ul>

            {/* Actions (Language Switch & Mobile Menu Toggle) */}
            <div className="nav-actions">
              <div className="lang-switch-wrapper">
                <input 
                  type="checkbox" 
                  id="lang-toggle" 
                  className="lang-checkbox" 
                  checked={lang === 'en'} 
                  onChange={handleLangToggle} 
                  aria-label={t.langAria}
                />
                <label 
                  className="lang-switch" 
                  htmlFor="lang-toggle" 
                  title={t.langSwitchTitle(lang)}
                >
                  <span className="lang-slider" />
                  <span className="lang-code lang-code-es">ES</span>
                  <span className="lang-code lang-code-en">EN</span>
                </label>
              </div>

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
          <legend className="switcher__legend">{t.themeSelectLegend}</legend>
          
          <label className="switcher__option" title={t.themeLight}>
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

          <label className="switcher__option" title={t.themeDark}>
            <input 
              type="radio" 
              name="theme-switcher" 
              value="dark" 
              checked={theme === 'dark'} 
              onChange={(e) => handleThemeChange(e, 'dark')} 
              className="switcher__input"
              c-option="2"
            />
            <svg className="switcher__icon moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </label>
        </fieldset>
      </div>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content-group">
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 key={`hero-title-${lang}`} className="hero-title lang-animate lang-stagger-1">{personalInfo.title}</h2>
            <p key={`hero-desc-${lang}`} className="hero-description lang-animate lang-stagger-2">{personalInfo.subtitle}</p>
          </div>
          <div key={`hero-ctas-${lang}`} className="hero-ctas lang-animate lang-stagger-3">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>
              {t.heroViewProjects}
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
              {t.heroContact}
            </a>
          </div>

          {/* Interpersonal skills */}
          <div className="interpersonal-section">
            <div className="interpersonal-grid">
              <div key={`ip-1-${lang}`} className="interpersonal-card lang-animate lang-stagger-2" style={{ '--card-accent': '#0ea5e9' }}>
                <div className="interpersonal-card-icon-wrapper">
                  <div className="interpersonal-card-icon">
                    <LuUsers />
                  </div>
                </div>
                <h4 className="interpersonal-card-title">{t.teamwork}</h4>
              </div>

              <div key={`ip-2-${lang}`} className="interpersonal-card lang-animate lang-stagger-3" style={{ '--card-accent': '#f59e0b' }}>
                <div className="interpersonal-card-icon-wrapper">
                  <div className="interpersonal-card-icon">
                    <LuLightbulb />
                  </div>
                </div>
                <h4 className="interpersonal-card-title">{t.problemSolving}</h4>
              </div>

              <div key={`ip-3-${lang}`} className="interpersonal-card lang-animate lang-stagger-4" style={{ '--card-accent': '#10b981' }}>
                <div className="interpersonal-card-icon-wrapper">
                  <div className="interpersonal-card-icon">
                    <LuWorkflow />
                  </div>
                </div>
                <h4 className="interpersonal-card-title">{t.adaptability}</h4>
              </div>

              <div key={`ip-4-${lang}`} className="interpersonal-card lang-animate lang-stagger-5" style={{ '--card-accent': '#8b5cf6' }}>
                <div className="interpersonal-card-icon-wrapper">
                  <div className="interpersonal-card-icon">
                    <LuZap />
                  </div>
                </div>
                <h4 className="interpersonal-card-title">{t.proactivity}</h4>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about">
          <h2 key={`skills-title-${lang}`} className="section-title lang-animate lang-stagger-1">{t.skillsSectionTitle}</h2>
          <div className="skills-grid">
            {highlights.map((h, idx) => (
              <div key={`${lang}-highlight-${idx}`} className={`skill-card lang-animate lang-stagger-${(idx % 4) + 1}`} style={{ '--accent-color': h.levelColor }}>
                {/* Watermark Icon */}
                <div className="skill-card-watermark">
                  {getHighlightIcon(h.iconName)}
                </div>

                <h3 className="skill-card-title">{h.title}</h3>
                <p className="skill-card-desc">{h.description}</p>
              </div>
            ))}
          </div>

          {/* Stack de Tecnologías */}
          <div className="hero-tech-container">
            {techLogos.map((tech, idx) => (
              <div key={idx} className="hero-tech-card" title={tech.title}>
                {tech.node}
                <span>{tech.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 key={`projects-title-${lang}`} className="section-title lang-animate lang-stagger-1">{t.projectsSectionTitle}</h2>
          <div className="projects-grid">
            {projects.map((project, pIdx) => {
              const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];
              const currentIndex = projectImageIndexes[project.id] || 0;
              const currentImg = projectImages[currentIndex] || project.image;
              const hasMultiple = projectImages.length > 1;

              return (
                <article key={`${project.id}-${lang}`} className={`project-card ${project.isMobile ? 'project-card-mobile' : ''} lang-animate lang-stagger-${(pIdx % 4) + 1}`}>
                  <div 
                    className={`project-image-wrapper ${hasMultiple ? 'has-gallery' : ''}`}
                    onClick={(e) => openLightbox(e, project, currentIndex)}
                  >
                    <img 
                      src={currentImg} 
                      alt={`${project.title} - Imagen ${currentIndex + 1}`} 
                      className={`project-image ${project.imageFit === 'contain' ? 'image-contain' : ''}`} 
                      loading="lazy" 
                    />

                    {/* Fullscreen Expand Indicator Button */}
                    <button 
                      className="card-fullscreen-btn"
                      onClick={(e) => openLightbox(e, project, currentIndex)}
                      aria-label={t.viewFullscreen}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </button>

                    {/* Floating badge for featured/recent projects */}
                    {project.badge && (
                      <div className={`card-floating-badge ${hasMultiple ? 'badge-left' : ''}`}>
                        <span>{project.badge}</span>
                      </div>
                    )}

                    {/* Floating badge for awards */}
                    {project.award && (
                      <div className={`card-floating-badge card-award-badge ${hasMultiple ? 'badge-left' : ''}`}>
                        <div className="award-icon-wrapper">
                          <BsTrophyFill className="award-icon" />
                        </div>
                        <span className="award-text">{project.award.title}</span>
                      </div>
                    )}

                    {/* Counter badge if multiple images */}
                    {hasMultiple && (
                      <div className="card-gallery-counter">
                        <span>{t.screenshotsCount(projectImages.length)}</span>
                      </div>
                    )}
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    {project.tech && project.tech.length > 0 && (
                      <div className="project-tech-tags">
                        {project.tech.map((techItem, idx) => (
                          <span key={idx} className="project-tech-tag">{techItem}</span>
                        ))}
                      </div>
                    )}
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
                          {t.viewPrototype}
                        </a>
                      ) : project.demo ? (
                        <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          {project.demoText || "Visitar Sitio"}
                        </a>
                      ) : (
                        <button 
                          type="button" 
                          className="project-link" 
                          style={{ cursor: 'pointer', border: '1px solid var(--glass-border)', background: 'var(--bg-card)' }}
                          onClick={(e) => openLightbox(e, project, 0)}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                          </svg>
                          {t.viewScreenshots}
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 key={`contact-title-${lang}`} className="section-title lang-animate lang-stagger-1">{t.contactSectionTitle}</h2>
          <div className="contact-container">
            <p key={`contact-text-${lang}`} className="contact-text lang-animate lang-stagger-2">
              {t.contactTextLine1}<br />{t.contactTextLine2}
            </p>
            <div className="contact-socials">
              <a 
                href={personalInfo.social.github} 
                className="social-btn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGithub size={20} />
                <span>GitHub</span>
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
        <p>{t.footerText(new Date().getFullYear(), personalInfo.name)}</p>
      </footer>

      {/* Fullscreen Image Lightbox Modal */}
      <div 
        className={`image-lightbox-overlay ${activeLightboxProject ? 'active' : ''}`}
        onClick={closeLightbox}
      >
        {activeLightboxProject && (
          <div 
            className="image-lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="image-lightbox-header">
              <div className="image-lightbox-info">
                <h3 className="image-lightbox-title">
                  {(projects.find(p => p.id === activeLightboxProject.id)?.title || activeLightboxProject.title).replace('\n', ' ')}
                </h3>
                {activeLightboxProject.images && activeLightboxProject.images.length > 1 && (
                  <span className="image-lightbox-badge">
                    {activeLightboxIndex === 0 ? t.lightboxCover : t.lightboxCapture(activeLightboxIndex, activeLightboxProject.images.length - 1)} ({activeLightboxIndex + 1}/{activeLightboxProject.images.length})
                  </span>
                )}
              </div>
              <div className="image-lightbox-actions">
                <div className="lightbox-zoom-controls">
                  <button 
                    className="lightbox-zoom-btn" 
                    onClick={() => setZoomScale(s => {
                      const next = Math.max(1, s - 0.35);
                      if (next === 1) setZoomPosition({ x: 0, y: 0 });
                      return next;
                    })}
                    disabled={zoomScale <= 1}
                    title={t.zoomOut}
                    aria-label={t.zoomOut}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                  <span 
                    className="lightbox-zoom-level" 
                    onClick={resetZoom}
                    title={t.zoomReset}
                  >
                    {Math.round(zoomScale * 100)}%
                  </span>
                  <button 
                    className="lightbox-zoom-btn" 
                    onClick={() => setZoomScale(s => Math.min(4.5, s + 0.35))}
                    disabled={zoomScale >= 4.5}
                    title={t.zoomIn}
                    aria-label={t.zoomIn}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>

                <button 
                  className="prototype-modal-close" 
                  onClick={closeLightbox} 
                  aria-label={t.closePreview}
                  title={t.closeEsc}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div className="image-lightbox-body">
              <div 
                className={`image-lightbox-view ${zoomScale > 1 ? 'is-zoomed' : ''} ${isDragging ? 'is-dragging' : ''}`}
                ref={lightboxViewRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onDoubleClick={handleImageDoubleClick}
              >
                <img 
                  ref={lightboxImgRef}
                  src={activeLightboxProject.images ? activeLightboxProject.images[activeLightboxIndex] : activeLightboxProject.image} 
                  alt={`${activeLightboxProject.title} captura ${activeLightboxIndex + 1}`}
                  className="image-lightbox-img"
                  style={{
                    transform: `translate(${zoomPosition.x}px, ${zoomPosition.y}px) scale(${zoomScale})`,
                    transition: isDragging ? 'none' : 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: zoomScale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
                  }}
                  draggable={false}
                />
              </div>

              {activeLightboxProject.images && activeLightboxProject.images.length > 1 && (
                <>
                  <button 
                    className="lightbox-nav-btn lightbox-prev"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={handleLightboxPrev}
                    aria-label={t.prevArrow}
                    title={t.prevArrow}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>

                  <button 
                    className="lightbox-nav-btn lightbox-next"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={handleLightboxNext}
                    aria-label={t.nextArrow}
                    title={t.nextArrow}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </>
              )}

              {activeLightboxProject.images && activeLightboxProject.images.length > 1 && (
                <div className="image-lightbox-thumbnails">
                  {activeLightboxProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`lightbox-thumb-btn ${idx === activeLightboxIndex ? 'active' : ''}`}
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={() => changeLightboxSlide(idx)}
                      title={idx === 0 ? t.lightboxCover : `${t.lightboxCover === 'Portada' ? 'Captura' : 'Screenshot'} ${idx}`}
                    >
                      <img src={img} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Figma Prototype Modal Lightbox (Same Glass Design) */}
      <div 
        className={`image-lightbox-overlay ${activeFigmaEmbed ? 'active' : ''}`}
        onClick={closeFigmaPrototype}
      >
        {activeFigmaEmbed && (
          <div 
            className="image-lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="image-lightbox-header">
              <div className="image-lightbox-info">
                <h3 className="image-lightbox-title">
                  {(projects.find(p => p.figmaUrl === activeFigmaUrl)?.title || activeFigmaTitle).replace('\n', ' ')}
                </h3>
                <span className="image-lightbox-badge">{t.figmaBadge}</span>
              </div>
              <div className="image-lightbox-actions">
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
                    <span>{t.openInFigma}</span>
                  </a>
                )}
                <button 
                  className="prototype-modal-close" 
                  onClick={closeFigmaPrototype} 
                  aria-label={t.closePrototype}
                  title={t.closeEsc}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
            <div className="image-lightbox-body">
              {iframeLoading && (
                <div className="prototype-modal-loader">
                  <div className="spinner"></div>
                  <p>{t.loadingPrototype}</p>
                </div>
              )}
              <iframe
                src={activeFigmaEmbed}
                className="prototype-modal-iframe"
                allowFullScreen
                onLoad={() => setIframeLoading(false)}
                title={t.interactivePrototype}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const getHighlightIcon = (name, style = {}) => {
  switch (name) {
    case 'building': return <BsBuilding style={style} />;
    case 'laptop': return <BsLaptop style={style} />;
    case 'palette': return <BsPalette style={style} />;
    case 'code': return <BsCodeSlash style={style} />;
    case 'database': return <BsDatabase style={style} />;
    case 'rocket': return <BsRocket style={style} />;
    case 'nodes': return <BsDiagram3 style={style} />;
    case 'cloud': return <BsCloud style={style} />;
    default: return null;
  }
};

export default App;
