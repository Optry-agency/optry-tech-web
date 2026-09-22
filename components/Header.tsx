"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Cierra el menú al navegar a otra página.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/optry-logo-horizontal-lema.svg"
            alt="Optry"
            width={140}
            height={40}
            priority
          />
        </Link>
        <span className={styles.masthead}>
          Software
          <br />
          para un mayor impacto
        </span>
        <nav className={styles.nav}>
          <Link href="/servicios">Servicios</Link>
          <Link href="/casos">Casos</Link>
          <Link href="/contacto" className={`btn btn--primary ${styles.contactBtn}`}>
            Contáctanos
          </Link>
        </nav>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.menuIcon} ${open ? styles.menuIconOpen : ""}`} />
        </button>
      </div>

      <div className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="/servicios">Servicios</Link>
          <Link href="/casos">Casos</Link>
          <Link href="/contacto" className={`btn btn--primary ${styles.contactBtn}`}>
            Contáctanos
          </Link>
        </nav>
      </div>
    </header>
  );
}
