import Link from "next/link";
import CircuitArt from "@/components/CircuitArt";
import styles from "./home/Hero.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <CircuitArt className={styles.art} />
        <div className={`container ${styles.content}`}>
          <div className="kicker reveal">
            <span className="kicker-line" />
            <span className="kicker-label">Automatización de software</span>
          </div>
          <h1 className="display reveal" style={{ transitionDelay: "0.05s" }}>
            <span>Automatiza</span>
            <span>Conecta</span>
            <span>Escala</span>
          </h1>
          <p
            className="reveal"
            style={{ maxWidth: 480, fontSize: "1.125rem", transitionDelay: "0.1s" }}
          >
            Reemplazamos las hojas de cálculo, el WhatsApp y la memoria con
            software a medida y automatización con IA — sin la fricción ni el
            costo de una agencia grande.
          </p>
          <div
            className="reveal"
            style={{ display: "flex", gap: 16, marginTop: 8, transitionDelay: "0.15s" }}
          >
            <Link href="/contacto" className="btn btn--primary">
              Cuéntanos tu caso
            </Link>
            <Link href="/servicios" className="btn btn--secondary">
              Ver qué hacemos
            </Link>
          </div>

          <div className={`${styles.footerLine} reveal`} style={{ transitionDelay: "0.2s" }}>
            <span className="tagline-mini">
              Menos caos
              <br />
              Más control
            </span>
            <span className="tagline-mini" style={{ textAlign: "right" }}>
              You lead.
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <CircuitArt className="section-art-bg" />
        <div className="container">
          <div className="kicker reveal">
            <span className="kicker-line" />
            <span className="kicker-label">Cómo trabajamos</span>
          </div>
          <h2 className="reveal" style={{ maxWidth: 640 }}>
            Un proceso pensado para que no te la juegues con nosotros
          </h2>
          <p className="reveal" style={{ maxWidth: 560, marginBottom: 48 }}>
            No vendemos software y desaparecemos. Así es cada proyecto, de la
            primera plática a los ajustes que llegan meses después de
            entregado.
          </p>
          <div className="step-list">
            <div className="step reveal">
              <span className="step-num">1</span>
              <div className="step-body">
                <h3>Escuchamos antes de cotizar</h3>
                <p>
                  Empezamos con una plática real sobre cómo operas hoy — no
                  un formulario genérico. Vemos tu proceso tal cual es antes
                  de proponer nada, porque el software que sirve se
                  construye alrededor de tu negocio, no al revés.
                </p>
              </div>
            </div>
            <div className="step reveal" style={{ transitionDelay: "0.05s" }}>
              <span className="step-num">2</span>
              <div className="step-body">
                <h3>Cotización clara, sin sorpresas</h3>
                <p>
                  Una cuota de arranque única más una mensualidad — nada
                  escondido. Los costos de terceros (dominio, WhatsApp, IA)
                  siempre van separados y a la vista, y no manejamos precios
                  agresivos a la baja que luego se cobran de otra forma.
                </p>
              </div>
            </div>
            <div className="step reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="step-num">3</span>
              <div className="step-body">
                <h3>Diseñamos contigo antes de programar</h3>
                <p>
                  Antes de escribir una sola línea de código de producción
                  te mostramos cómo se van a ver las pantallas, a partir del
                  caso real que más te quita tiempo hoy. Validamos juntos
                  que resuelva tu operación — no lo adivinamos.
                </p>
              </div>
            </div>
            <div className="step reveal" style={{ transitionDelay: "0.15s" }}>
              <span className="step-num">4</span>
              <div className="step-body">
                <h3>Construimos en iteraciones, contigo en el ciclo</h3>
                <p>
                  Entregamos avances reales, no una gran revelación al
                  final. Más de un sistema nuestro se ha reestructurado por
                  completo después de ver cómo se usaba de verdad en el
                  negocio — el uso real siempre enseña algo que ninguna
                  junta inicial predice, y respondemos a eso.
                </p>
              </div>
            </div>
            <div className="step reveal" style={{ transitionDelay: "0.2s" }}>
              <span className="step-num">5</span>
              <div className="step-body">
                <h3>Revisamos seguridad antes de tocar producción</h3>
                <p>
                  Antes de que tu sistema opere con datos y dinero real,
                  pasa por una auditoría de control de acceso e integridad
                  de datos — la misma revisión que ya nos ha encontrado y
                  corregido fallas reales antes de que llegaran a un
                  cliente.
                </p>
              </div>
            </div>
            <div className="step reveal" style={{ transitionDelay: "0.25s" }}>
              <span className="step-num">6</span>
              <div className="step-body">
                <h3>Entregamos, capacitamos y seguimos cerca</h3>
                <p>
                  No te dejamos solo con un enlace. Te explicamos cómo
                  usarlo y seguimos ajustando conforme tu negocio lo va
                  necesitando — una báscula que conectar, un reporte nuevo,
                  lo que haga falta.
                </p>
              </div>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: 48 }}>
            <Link href="/contacto" className="btn btn--primary">
              Cuéntanos tu caso
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <CircuitArt className="section-art-bg" />
        <div className="container reveal" style={{ textAlign: "center" }}>
          <h2>¿Tu negocio todavía opera a mano?</h2>
          <p style={{ maxWidth: 480, margin: "0 auto 24px" }}>
            Cuéntanos qué parte de tu operación te quita más tiempo y te
            decimos cómo la resolvemos.
          </p>
          <Link href="/contacto" className="btn btn--primary">
            Platiquemos
          </Link>
        </div>
      </section>

      <section className="section">
        <div
          className="container reveal"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/servicios" className="btn btn--secondary">
            Qué resolvemos
          </Link>
          <Link href="/casos" className="btn btn--secondary">
            Casos
          </Link>
          <Link href="/contacto" className="btn btn--secondary">
            Contáctanos
          </Link>
        </div>
      </section>
    </>
  );
}
