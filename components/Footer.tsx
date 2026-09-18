import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Image
            src="/optry-isotipo-fondo-crema.svg"
            alt=""
            width={32}
            height={32}
          />
          <span>Optry</span>
        </div>
        <p className={styles.tag}>
          Software a medida y automatización con IA para negocios de León,
          Guanajuato.
        </p>
        <a href="mailto:optry.tech@gmail.com" className={styles.email}>
          optry.tech@gmail.com
        </a>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Optry. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
