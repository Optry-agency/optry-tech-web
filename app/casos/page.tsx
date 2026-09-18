import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos — Optry",
  description: "Sistemas y automatizaciones que Optry ya construyó y opera.",
};

const casos = [
  {
    tag: "Automatización IA",
    title: "Sistema anti-fuga de leads",
    body:
      "Para clínicas y consultorios que pierden prospectos entre WhatsApp, llamadas y redes. Un calendario de reserva de demo conectado a una automatización real que confirma y recuerda solo, sin que nadie tenga que estar pendiente.",
  },
  {
    tag: "Sistema a la medida",
    title: "Cuenta corriente y pedidos",
    body:
      "Un negocio familiar de abarrotes y frutería, en producción real desde hace meses. Pedidos, cuentas de clientes, historial que nunca se pierde y una báscula física conectada directo al sistema.",
  },
  {
    tag: "Sistema a la medida",
    title: "Gestión de taller de producción",
    body:
      "Inventario de insumos, control de avance de producción, punto de venta y órdenes de pedido de mayoreo en un solo sistema, con lectores de código de barras e impresión de tickets y etiquetas.",
  },
];

export default function Casos() {
  return (
    <>
      <section className="section--dark section">
        <div className="container">
          <span className="eyebrow reveal">Casos</span>
          <h1 className="reveal" style={{ transitionDelay: "0.05s" }}>
            Sistemas que ya están corriendo
          </h1>
          <p className="reveal" style={{ maxWidth: 560, opacity: 0.92, transitionDelay: "0.1s" }}>
            Por confidencialidad no mostramos el nombre del negocio, pero
            estos son sistemas reales, en uso todos los días.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {casos.map((c, i) => (
              <div
                className="card reveal"
                key={c.title}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section">
        <div className="container reveal" style={{ textAlign: "center" }}>
          <h2>¿Quieres ser el siguiente caso?</h2>
          <Link href="/contacto" className="btn btn--primary">
            Cuéntanos tu caso
          </Link>
        </div>
      </section>
    </>
  );
}
