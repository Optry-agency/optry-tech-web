import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Optry",
  description: "Cuéntanos qué parte de tu operación te quita más tiempo.",
};

export default function Contacto() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Contacto</span>
        <h1>Platiquemos de tu negocio</h1>
        <p style={{ maxWidth: 520, marginBottom: 40 }}>
          Sin relleno ni presentación de ventas — cuéntanos cómo operas hoy
          y te decimos honestamente si podemos ayudarte.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
