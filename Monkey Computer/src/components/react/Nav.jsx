import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

// Links: Inicio, Proyectos, Servicios, Contacto
const links = {
  es: [
    { href: "#inicio", text: "Inicio" },
    { href: "#proyectos", text: "Proyectos" },
    { href: "#servicios", text: "Servicios" },
    { href: "#contacto", text: "Contacto" },
  ],
  en: [
    { href: "#inicio", text: "Home" },
    { href: "#proyectos", text: "Projects" },
    { href: "#servicios", text: "Services" },
    { href: "#contacto", text: "Contact" },
  ]
};

const ctaTexts = { es: "Cotizar", en: "Quote" };

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("es");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang") === "en" ? "en" : "es";
    setCurrentLang(lang);
  }, []);

  const toggleLang = () => {
    const newLang = currentLang === "es" ? "en" : "es";
    const url = new URL(window.location.href);
    url.searchParams.set("lang", newLang);
    window.location.href = url.toString();
  };

  const closeMenu = () => setIsOpen(false);

  const currentLinks = links[currentLang] || links.es;
  const ctaText = ctaTexts[currentLang] || ctaTexts.es;

  return (
    <>
      {/* Navbar Sticky Fijo */}
      <motion.nav 
        className="nav-fixed"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Logo */}
        <a href="#inicio" className="nav-logo" onClick={closeMenu}>
          <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
            <circle cx="11" cy="12" r="3" fill="currentColor"/>
            <circle cx="21" cy="12" r="3" fill="currentColor"/>
            <path d="M9 22c0-3 2-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>

        {/* Desktop: Links + CTA */}
        <div className="nav-desktop">
          <ul className="nav-links">
            {currentLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="nav-actions">
            <button
              onClick={toggleLang}
              className="nav-lang"
              aria-label="Switch language"
            >
              {currentLang === "es" ? "EN" : "ES"}
            </button>
            <a href="#contacto" className="nav-cta">
              {ctaText}
            </a>
          </div>
        </div>

        {/* Mobile: Hamburger */}
        <button 
          className="nav-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="nav-mobile-links">
              {currentLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a href={link.href} className="nav-mobile-link" onClick={closeMenu}>
                    {link.text}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: currentLinks.length * 0.05 }}
              >
                <a href="#contacto" className="nav-mobile-cta" onClick={closeMenu}>
                  {ctaText}
                </a>
              </motion.li>
            </ul>
            
            <button 
              className="nav-lang-mobile"
              onClick={toggleLang}
            >
              {currentLang === "es" ? "🇪🇸 Español" : "🇺🇸 English"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}