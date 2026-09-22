import Link from "next/link";
import Image from "next/image";
import CircuitArt from "@/components/CircuitArt";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <CircuitArt className="section-art-bg" />
      <div className={`container ${styles.top}`}>
        <div className={styles.brandBlock}>
          <div className={styles.brand}>
            <Image
              src="/optry-isotipo-transparente.svg"
              alt=""
              width={30}
              height={30}
            />
            <span>Optry</span>
          </div>
          <p className={styles.tagline}>
            Software a medida, automatización con IA y ciberseguridad para
            negocios que quieren operar mejor.
          </p>
        </div>

        <nav className={styles.linkGroup}>
          <span className="tagline-mini">Sitio</span>
          <Link href="/servicios">Servicios</Link>
          <Link href="/casos">Casos</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <div className={styles.linkGroup}>
          <span className="tagline-mini">Contacto</span>
          <a href="mailto:optry.tech@gmail.com" className={styles.email}>
            optry.tech@gmail.com
          </a>
          <a
            href="https://wa.me/524751032807"
            className={styles.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp +52 475 103 2807
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <span className="tagline-mini">Optry · Automatización, integraciones y ciberseguridad</span>
        <span className="tagline-mini">
          © {new Date().getFullYear()} Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
}
