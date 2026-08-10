import styles from "@/styles/pages/index/nav.module.css";
import { useState } from "react";

const links = [
  { href: "#projects", text: "Proyectos" },
  { href: "#sobre-mi", text: "Sobre mí" },
  { href: "#contacto", text: "Contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/5491136000797?text=Hola,%20quiero%20conversar%20sobre%20un%20proyecto%20de%20software.";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className={styles.nav_container}>
      <div className={styles.nav_inner}>
        <a href="#home" className={styles.brand} onClick={close} aria-label="Monkey Computer, inicio">
          <img src="/favicon.svg" className={styles.brand_mark} alt="" aria-hidden="true" />
          <span>Monkey Computer</span>
        </a>

        <nav className={styles.nav_links} aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.nav_link}>
              {link.text}
            </a>
          ))}
        </nav>

        <div className={styles.nav_actions}>
          <a
            href={WHATSAPP_URL}
            className={styles.nav_cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Trabajemos juntos
          </a>

          <button
            className={styles.burger}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <span className={`${styles.burger_bar} ${open ? styles.burger_bar_top : ""}`} />
            <span className={`${styles.burger_bar} ${open ? styles.burger_bar_hide : ""}`} />
            <span className={`${styles.burger_bar} ${open ? styles.burger_bar_bottom : ""}`} />
          </button>
        </div>
      </div>

      <nav
        className={`${styles.mobile_menu} ${open ? styles.mobile_menu_open : ""}`}
        aria-label="Navegación móvil"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} className={styles.mobile_link} onClick={close}>
            {link.text}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          className={styles.mobile_cta}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          Trabajemos juntos
        </a>
      </nav>
    </header>
  );
}
