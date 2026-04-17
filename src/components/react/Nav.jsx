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

// WhatsApp link
const WhatsApp_URL = "https://wa.me/5491136000797?text=Hola,%20me%20contacto%20desde%20la%20web";

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

        {/* Desktop: Links + CTA + WhatsApp */}
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
            {/* WhatsApp en navbar */}
            <a 
              href={WhatsApp_URL} 
              className="nav-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path fill="#fff" d="M17.498 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.197-.1-.577-.3-.1.1-.198.198-.283.298-.287.327-.008.032-.006.198.005.347.07.477.16 1.06-.048 1.207-.23.164-.709.164-1.106 0-.396-.198-.672-.596-.792-.988-.12-.392.12-.833.272-1.002.15-.168.299-.347.448-.521.151-.174.2-.347.272-.521.074-.174.025-.372.012-.525-.012-.174-.074-.323.198-.497l.65-.854c.271-.323.528-.579.704-.793.176-.213.322-.366.455-.521.173-.174.347-.223.523-.347l1.207-1.207c.173-.173.347-.223.523-.348l1.207-1.207c.173-.173.347-.223.523-.348l.65-.854c.271-.323.528-.579.704-.793.176-.213.322-.366.455-.521.173-.174.347-.223.523-.347l1.207-1.207c.173-.173.347-.223.523-.348l1.207-1.207c.173-.173.347-.223.523-.348l.65-.854c.271-.323.528-.579.704-.793.176-.213.322-.366.455-.521.173-.174.347-.223.523-.347l1.207-1.207c.173-.173.347-.223.523-.348l.347-.298c.025-.198.025-.397.012-.596l-.012-1.037c-.025-.198-.174-.397-.348-.521l-1.207-1.207c-.347-.347-.595-.794-.793-1.106-.198-.347-.198-.595-.074-.846.124-.248.173-.521.272-.793.1-.273.197-.595.173-.846-.025-.248-.124-.495-.272-.694l-.65-.854c-.347-.347-.793-.595-1.106-.793l-1.207-.854c-.272-.124-.595-.222-.846-.272l-1.106-.198c-.348-.074-.595-.173-.846-.347l-.347-.347c.1-.025.198-.025.297-.025.099 0 .223.012.347.025l.793.198c.272.074.521.198.695.347l.65.854c.198.174.347.397.472.695.124.273.173.595.173.846-.025.273-.025.595-.099.846l-.012.124c0 .05.012.099.025.147l.15 1.04c.05.347.198.674.397.919z"/>
                <path fill="#25d366" d="M12.227 2.501c-2.271 0-4.351 1.402-5.341 3.45-1.035 2.131-.914 4.681.2 6.522l.225.348-.225.348c-1.115 1.734-1.235 3.391-.2 6.522.99 2.048 2.89 3.45 5.341 3.45.571 0 1.104-.042 1.571-.111-.565-1.736-2.211-3.061-3.966-3.061-1.755 0-3.401 1.325-3.966 3.061-.107.376.214.547.524.424.929-.198 1.713-.723 2.255-1.258.542-.535 1.169-1.313 1.467-2.023.099-.229.025-.424-.05-.549-.198-.323-.673-.801-1.467-1.564-.793-.762-1.467-1.438-2.155-1.925-.688-.487-1.377-.686-1.679-.773-.302-.087-.595-.061-.797.225-.202.286-.696.988-.797 1.128-.101.14-.814 1.313-.814 2.487 0 1.174 1.169 2.312 1.359 2.462.19.15 2.962 2.462 5.168 2.462 2.206 0 4.978-1.553 5.717-3.803.739-2.251.739-4.681.368-5.681-.37-1-2.107-3.803-4.643-5.804-2.536-2.001-4.643-2.838-5.391-3.114-.748-.276-2.404-.397-3.966.272z" transform="translate(0,-.5)"/>
              </svg>
            </a>
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