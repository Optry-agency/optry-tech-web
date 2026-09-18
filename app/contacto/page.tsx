import type { Metadata } from "next";
import CircuitArt from "@/components/CircuitArt";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Optry",
  description: "Cuéntanos qué parte de tu operación te quita más tiempo.",
};

export default function Contacto() {
  return (
    <section className="section">
      <CircuitArt className="section-art-bg" />
      <div className="container">
        <div className="kicker reveal"><span className="kicker-line" /><span className="kicker-label">Contacto</span></div>
        <h1 className="reveal">Platiquemos de tu negocio</h1>
        <p className="reveal" style={{ maxWidth: 520, marginBottom: 40 }}>
          Sin relleno ni presentación de ventas — cuéntanos cómo operas hoy
          y te decimos honestamente si podemos ayudarte.
        </p>
        <div className="reveal" style={{ transitionDelay: "0.08s" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
