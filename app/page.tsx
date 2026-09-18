import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container">
          <span className="eyebrow reveal">Optry · León, Guanajuato</span>
          <h1 className="reveal" style={{ maxWidth: 720, transitionDelay: "0.05s" }}>
            Del caos operativo a un negocio que corre solo.
          </h1>
          <p
            className="reveal"
            style={{
              maxWidth: 560,
              fontSize: "1.125rem",
              transitionDelay: "0.1s",
            }}
          >
            Reemplazamos las hojas de cálculo, el WhatsApp y la memoria con
            software a medida y automatización con IA — sin la fricción ni el
            costo de una agencia grande.
          </p>
          <div
            className="reveal"
            style={{ display: "flex", gap: 16, marginTop: 32, transitionDelay: "0.15s" }}
          >
            <Link href="/contacto" className="btn btn--primary">
              Cuéntanos tu caso
            </Link>
            <Link href="/servicios" className="btn btn--secondary">
              Ver qué hacemos
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <span className="eyebrow reveal">Cómo trabajamos</span>
          <h2 className="reveal">Dos formas de resolver tu operación</h2>
          <div className="grid grid--2" style={{ marginTop: 32 }}>
            <div className="card reveal">
              <span className="tag">Negocio local</span>
              <h3>Sistema a la medida</h3>
              <p>
                Punto de venta, control de accesos, bitácoras, inventario —
                construido para cómo trabaja tu negocio hoy, no al revés.
                Para dueños que deciden por confianza y cercanía, no por
                especificaciones técnicas.
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: "0.1s" }}>
              <span className="tag">Más volumen</span>
              <h3>Automatización con IA + n8n</h3>
              <p>
                Captura y seguimiento de leads, confirmación de citas y
                reservas, reportes automáticos. Para negocios con varias
                sucursales o mucho flujo simultáneo que ya no se puede
                atender a mano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow reveal">Casos</span>
          <h2 className="reveal">Ya lo hemos construido</h2>
          <div className="grid grid--3" style={{ marginTop: 32 }}>
            <div className="card reveal">
              <h3>Sistema anti-fuga de leads</h3>
              <p>
                Para clínicas y consultorios: agenda de citas automatizada
                que confirma y recuerda sin intervención manual.
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: "0.08s" }}>
              <h3>Cuenta corriente y pedidos</h3>
              <p>
                Para un negocio familiar de abarrotes: control de pedidos,
                cuentas de clientes y báscula conectada, en uso real todos
                los días.
              </p>
            </div>
            <div className="card reveal" style={{ transitionDelay: "0.16s" }}>
              <h3>Gestión de taller</h3>
              <p>
                Inventario, producción y ventas en un solo sistema, con
                lectores de código de barras e impresión de tickets.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: 32 }}>
            <Link href="/casos" className="btn btn--primary">
              Ver todos los casos
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
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
    </>
  );
}
