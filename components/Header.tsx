import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
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
          <Link href="/contacto" className="btn btn--primary">
            Contáctanos
          </Link>
        </nav>
      </div>
    </header>
  );
}
