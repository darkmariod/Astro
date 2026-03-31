import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./nav.module.css";

const links = [
  { href: "/", text: "Inicio" },
  { href: "/nosotros/", text: "Nosotros" },
  { href: "/blog/", text: "Blog" },
  { href: "/galeria/", text: "Galería" },
  { href: "/contacto/", text: "Contacto" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll({
    offset: ["0% 0%", "10% 0%"],
  });

  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isMobile) {
      setIsHidden(latest < 0.1);
    }
  });

  useEffect(() => {
    if (!isMobile) {
      setIsHidden(scrollYProgress.get() < 0.1);
    }
  }, [isMobile, scrollYProgress]);

  // Mobile Menu
  if (isMobile) {
    return (
      <>
        <button 
          className={styles.menu_button}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburger_open : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobile_menu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ul className={styles.mobile_links}>
                {links.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className={styles.mobile_link}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop Nav
  return (
    <AnimatePresence mode="sync">
      <motion.nav layout className={styles.nav_container}>
        {isHidden && (
          <motion.a
            href="/"
            className={styles.nav_logo}
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0, rotate: [5, 18, 0] }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            layout
            transition={{ duration: 0.3 }}
          >
            <img
              src="/favicon.svg"
              alt="Ancestral Lab"
              width="32"
              height="32"
            />
          </motion.a>
        )}

        <motion.ul layout className={styles.nav_links}>
          {links.map((link) => (
            <motion.li layout key={link.href} className={styles.nav_item}>
              <a href={link.href} className={styles.nav_link}>
                {link.text}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </AnimatePresence>
  );
}
