import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — Optry",
  description:
    "Sistemas a la medida para negocios locales y automatización con IA para operaciones de más volumen.",
};

export default function Servicios() {
  return (
    <>
      <section className="section--dark section">
        <div className="container">
          <span className="eyebrow">Servicios</span>
          <h1>Dos formas de trabajar contigo, según cómo opera tu negocio</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="tag">Segmento 1</span>
          <h2>Sistema a la medida para tu negocio local</h2>
          <p style={{ maxWidth: 640 }}>
            Para dueños de restaurantes, gimnasios, talleres y constructoras
            que hoy operan con papel, Excel o memoria. Construimos el sistema
            alrededor de cómo trabajas de verdad, no de un molde genérico.
          </p>
          <div className="grid grid--3" style={{ marginTop: 32 }}>
            <div className="card">
              <h3>Punto de venta</h3>
              <p>Cobro, tickets, cortes de caja y reportes desde el celular.</p>
            </div>
            <div className="card">
              <h3>Inventario y producción</h3>
              <p>
                Control de insumos, avance de producción y órdenes de
                pedido en un solo lugar.
              </p>
            </div>
            <div className="card">
              <h3>Cuentas y bitácoras</h3>
              <p>
                Historial de clientes, cuentas corrientes y movimientos que
                nunca se pierden ni se sobreescriben.
              </p>
            </div>
          </div>
          <p style={{ marginTop: 24 }}>
            Incluye hardware cuando el negocio lo necesita: básculas,
            impresoras de tickets, lectores de código de barras, tablets.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="tag">Segmento 2</span>
          <h2>Automatización con IA para operaciones de más volumen</h2>
          <p style={{ maxWidth: 640 }}>
            Para restaurantes con varias sucursales, cadenas, clínicas con
            agenda de alto volumen y negocios de servicio con muchos leads
            simultáneos. Aquí no vendemos un producto fijo — automatizamos
            el proceso específico que te está quitando tiempo.
          </p>
          <div className="grid grid--3" style={{ marginTop: 32 }}>
            <div className="card">
              <h3>Captura de leads</h3>
              <p>
                Ningún prospecto se pierde entre WhatsApp, redes y llamadas
                — todo se registra y se le da seguimiento solo.
              </p>
            </div>
            <div className="card">
              <h3>Agenda y recordatorios</h3>
              <p>
                Confirmación y recordatorio de citas o reservas sin que
                alguien tenga que marcar uno por uno.
              </p>
            </div>
            <div className="card">
              <h3>Reportes automáticos</h3>
              <p>
                La información que hoy juntas a mano, lista sola cuando la
                necesitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section--dark section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>¿No estás seguro en cuál encajas?</h2>
          <p style={{ maxWidth: 480, margin: "0 auto 24px" }}>
            Cuéntanos cómo operas hoy y te decimos qué tiene más sentido.
          </p>
          <Link href="/contacto" className="btn btn--primary">
            Platiquemos
          </Link>
        </div>
      </section>
    </>
  );
}
