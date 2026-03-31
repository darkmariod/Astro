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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsHidden(latest < 0.1);
  });

  useEffect(() => {
    setIsHidden(scrollYProgress.get() < 0.1);
  }, [scrollYProgress]);

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
