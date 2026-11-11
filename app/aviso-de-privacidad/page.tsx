import type { Metadata } from "next";
import Link from "next/link";
import { NEGOCIO } from "@/lib/negocio";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Cómo trata Optry los datos personales que nos compartes en el formulario de contacto, para qué los usamos y cómo ejercer tus derechos.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

// Fecha de la última actualización. Cambiarla cada vez que cambie el
// contenido de este aviso.
const ACTUALIZADO = "11 de noviembre de 2026";

export default function AvisoDePrivacidad() {
  return (
    <section className="section">
      <div className="container legal">
        <div className="kicker">
          <span className="kicker-line" />
          <span className="kicker-label">Legal</span>
        </div>
        <h1>Aviso de privacidad</h1>
        <p className="legal-fecha">Última actualización: {ACTUALIZADO}</p>

        <h2>Quién es responsable de tus datos</h2>
        <p>
          {NEGOCIO.nombre}, con domicilio en {NEGOCIO.ciudad},{" "}
          {NEGOCIO.estado}, México, es responsable del tratamiento de los
          datos personales que nos compartes a través de este sitio. Para
          cualquier tema relacionado con tus datos puedes escribirnos a{" "}
          <a href={`mailto:${NEGOCIO.correo}`}>{NEGOCIO.correo}</a> o al
          WhatsApp {NEGOCIO.telefono}.
        </p>

        <h2>Qué datos recabamos</h2>
        <p>Cuando nos escribes por el formulario de contacto recabamos:</p>
        <ul>
          <li>Tu nombre.</li>
          <li>El nombre de tu negocio, si decides compartirlo.</li>
          <li>Tu WhatsApp o correo electrónico.</li>
          <li>El mensaje que nos escribes.</li>
        </ul>
        <p>
          No te pedimos datos sensibles (como información de salud,
          creencias u origen étnico) ni datos financieros. Te pedimos no
          incluirlos en tu mensaje.
        </p>
        <p>
          Por seguridad, al enviar el formulario se usa tu dirección IP de
          forma temporal para evitar envíos masivos (spam); no la guardamos
          junto con tus datos de contacto.
        </p>

        <h2>Para qué los usamos</h2>
        <p>Usamos tus datos únicamente para:</p>
        <ul>
          <li>Responder tu mensaje y contactarte por el medio que nos diste.</li>
          <li>
            Darle seguimiento a tu solicitud de información o de
            cotización.
          </li>
        </ul>
        <p>
          Estas finalidades son necesarias para atender lo que nos pides.
          No usamos tus datos para publicidad, no hacemos perfiles y no los
          vendemos ni los compartimos con terceros para sus propios fines.
        </p>

        <h2>Con quién se comparten</h2>
        <p>
          No transferimos tus datos a terceros. Para operar el sitio usamos
          proveedores que los procesan solo por cuenta nuestra: el
          alojamiento del sitio (Vercel) y el correo electrónico donde
          recibimos tu mensaje (Google). Sus servidores pueden estar fuera
          de México.
        </p>

        <h2>Cuánto tiempo los guardamos</h2>
        <p>
          El tiempo necesario para atender tu solicitud y darle
          seguimiento. Si no se concreta un proyecto y nos pides que los
          borremos, los eliminamos.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Puedes acceder a tus datos, pedir que los corrijamos, que los
          cancelemos u oponerte a su uso (derechos ARCO). También puedes
          revocar tu consentimiento o pedirnos que limitemos su uso.
        </p>
        <p>
          Para hacerlo, escríbenos a{" "}
          <a href={`mailto:${NEGOCIO.correo}`}>{NEGOCIO.correo}</a> con tu
          nombre, el medio por el que te contactamos, qué derecho quieres
          ejercer y una descripción de tu solicitud. Es gratuito y te
          respondemos por el mismo medio dentro de los plazos que marca la
          ley.
        </p>
        <p>
          Si consideras que tu derecho a la protección de datos personales
          fue vulnerado, puedes acudir a la autoridad competente, que hoy
          es la Secretaría Anticorrupción y Buen Gobierno.
        </p>

        <h2>Cookies y tecnologías de rastreo</h2>
        <p>
          Este sitio no usa cookies propias ni de terceros para analítica,
          publicidad o rastreo, ni píxeles de redes sociales. Si en algún
          momento las agregamos, actualizaremos este aviso y te pediremos
          tu consentimiento cuando la ley lo requiera.
        </p>

        <h2>Cambios a este aviso</h2>
        <p>
          Cualquier cambio a este aviso se publicará en esta misma página,
          con su fecha de actualización.
        </p>

        <p style={{ marginTop: 40 }}>
          <Link href="/contacto" className="btn btn--secondary">
            Volver a contacto
          </Link>
        </p>
      </div>
    </section>
  );
}
