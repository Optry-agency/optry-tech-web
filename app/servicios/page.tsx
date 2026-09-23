import Link from "next/link";
import CircuitArt from "@/components/CircuitArt";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — Optry",
  description:
    "Sistemas a la medida para negocios locales, automatización con IA para operaciones de más volumen, y auditorías de ciberseguridad para sistemas que ya operan en producción.",
};

export default function Servicios() {
  return (
    <>
      <section className="section">
        <CircuitArt className="section-art-bg" />
        <div className="container">
          <div className="kicker reveal"><span className="kicker-line" /><span className="kicker-label">Qué resolvemos</span></div>
          <h1 className="reveal" style={{ transitionDelay: "0.05s" }}>
            Tres formas de trabajar contigo, según cómo opera tu negocio
          </h1>
        </div>
      </section>

      <section className="section section--tint">
        <CircuitArt className="section-art-bg" />
        <div className="container">
          <div className="kicker reveal"><span className="kicker-line" /><span className="kicker-label">Segmento 1</span></div>
          <h2 className="reveal">Sistema a la medida para tu negocio local</h2>
          <p className="reveal" style={{ maxWidth: 640 }}>
            Para dueños de restaurantes, gimnasios, talleres y constructoras
            que hoy operan con papel, Excel o memoria. Construimos el sistema
            alrededor de cómo trabajas de verdad, no de un molde genérico.
          </p>
          <div className="grid grid--3" style={{ marginTop: 32 }}>
            <div className="card reveal"><h3>Punto de venta</h3><p>Cobro, tickets, cortes de caja y reportes desde el celular.</p></div>
            <div className="card reveal" style={{ transitionDelay: "0.08s" }}><h3>Inventario y producción</h3><p>Control de insumos, avance de producción y órdenes de pedido en un solo lugar.</p></div>
            <div className="card reveal" style={{ transitionDelay: "0.16s" }}><h3>Cuentas y bitácoras</h3><p>Historial de clientes, cuentas corrientes y movimientos que nunca se pierden ni se sobreescriben.</p></div>
          </div>
          <p className="reveal" style={{ marginTop: 24 }}>
            Incluye hardware cuando el negocio lo necesita: básculas,
            impresoras de tickets, lectores de código de barras, tablets.
          </p>
        </div>
      </section>

      <section className="section">
        <CircuitArt className="section-art-bg" />
        <div className="container">
          <div className="kicker reveal"><span className="kicker-line" /><span className="kicker-label">Segmento 2</span></div>
          <h2 className="reveal">Automatización con IA para operaciones de más volumen</h2>
          <p className="reveal" style={{ maxWidth: 640 }}>
            Para restaurantes con varias sucursales, cadenas, clínicas con
            agenda de alto volumen y negocios de servicio con muchos leads
            simultáneos. Aquí no vendemos un producto fijo — automatizamos
            el proceso específico que te está quitando tiempo.
          </p>
          <div className="grid grid--3" style={{ marginTop: 32 }}>
            <div className="card reveal"><h3>Captura de leads</h3><p>Ningún prospecto se pierde entre WhatsApp, redes y llamadas — todo se registra y se le da seguimiento solo.</p></div>
            <div className="card reveal" style={{ transitionDelay: "0.08s" }}><h3>Agenda y recordatorios</h3><p>Confirmación y recordatorio de citas o reservas sin que alguien tenga que marcar uno por uno.</p></div>
            <div className="card reveal" style={{ transitionDelay: "0.16s" }}><h3>Reportes automáticos</h3><p>La información que hoy juntas a mano, lista sola cuando la necesitas.</p></div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <CircuitArt className="section-art-bg" />
        <div className="container">
          <div className="kicker reveal"><span className="kicker-line" /><span className="kicker-label">Segmento 3</span></div>
          <h2 className="reveal">Ciberseguridad: le buscamos las grietas a tu sistema antes de que alguien más lo haga</h2>
          <p className="reveal" style={{ maxWidth: 640 }}>
            Todo lo que construimos en Optry pasa por una revisión de
            seguridad antes de tocar producción — eso ya viene incluido, sin
            costo extra, en cada proyecto nuestro. Esta auditoría es distinta:
            es una revisión formal y a fondo para el sistema que tu negocio ya
            tiene corriendo hoy — lo hayamos construido nosotros o no — y que
            maneja información o dinero real de tus clientes sin que nadie le
            haya buscado las grietas todavía.
          </p>
          <p className="reveal" style={{ maxWidth: 640, marginTop: 16 }}>
            No revisamos una lista genérica sacada de internet. Revisamos tu
            sistema función por función, buscando exactamente el tipo de
            error que ya hemos encontrado — y corregido — en aplicaciones
            propias que manejan dinero real de clientes: una función que
            registraba movimientos de saldo sin pedir ninguna sesión,
            pantallas de &ldquo;solo personal&rdquo; alcanzables por
            cualquier cuenta con la sesión abierta, un webhook que confiaba
            en cualquiera que le mandara una petición con el formato
            correcto. Ese tipo de falla no sale en una demo ni en una
            película de hackers — sale el día que alguien, sin mucho
            esfuerzo, encuentra la puerta que nadie cerró.
          </p>
          <div className="grid grid--3" style={{ marginTop: 32 }}>
            <div className="card reveal"><h3>Auditoría de acceso y lógica</h3><p>Revisamos cada función que tu sistema expone hacia afuera — no solo las pantallas que se ven — buscando control de acceso roto: quién puede tocar qué, y si de verdad se verifica en el servidor y no solo en la pantalla.</p></div>
            <div className="card reveal" style={{ transitionDelay: "0.08s" }}><h3>Dependencias y configuración</h3><p>Vulnerabilidades conocidas en las librerías que usa tu sistema, secretos o llaves expuestas, sesiones y cookies mal configuradas, y cualquier endpoint que quedó abierto sin que nadie se diera cuenta.</p></div>
            <div className="card reveal" style={{ transitionDelay: "0.16s" }}><h3>Reporte por severidad y corrección</h3><p>Un reporte claro, ordenado por qué tan grave es cada hallazgo. No nos quedamos en el diagnóstico: te decimos exactamente cómo corregir cada uno, y si prefieres, lo corregimos nosotros mismos.</p></div>
          </div>
          <p className="reveal" style={{ marginTop: 24 }}>
            Alcance actual: auditoría de aplicaciones ya construidas, propias
            o de terceros. Cotización a la medida según el tamaño del
            sistema — cuéntanos qué maneja tu sistema hoy y lo revisamos
            juntos.
          </p>
        </div>
      </section>

      <section className="section">
        <CircuitArt className="section-art-bg" />
        <div className="container reveal" style={{ textAlign: "center" }}>
          <h2>¿No estás seguro en cuál encajas?</h2>
          <p style={{ maxWidth: 480, margin: "0 auto 24px" }}>Cuéntanos cómo operas hoy y te decimos qué tiene más sentido.</p>
          <Link href="/contacto" className="btn btn--primary">Platiquemos</Link>
        </div>
      </section>
    </>
  );
}
