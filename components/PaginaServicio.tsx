import Link from "next/link";
import type { ReactNode } from "react";
import CircuitArt from "@/components/CircuitArt";
import JsonLd from "@/components/JsonLd";
import { getBaseUrl } from "@/lib/site-url";

type Tarjeta = { titulo: string; texto: string };
type Pregunta = { pregunta: string; respuesta: string };

// Plantilla común de las páginas de servicio (/servicios/<slug>). Cada
// página trae su propio copy; aquí solo vive la estructura, para que las
// tres se vean y se lean igual (y Google las entienda igual).
export default function PaginaServicio({
  slug,
  nombreServicio,
  kicker,
  titulo,
  intro,
  paraQuien,
  tituloIncluye,
  incluye,
  extra,
  preguntas,
}: {
  slug: string;
  nombreServicio: string;
  kicker: string;
  titulo: string;
  intro: ReactNode;
  paraQuien: string[];
  tituloIncluye: string;
  incluye: Tarjeta[];
  extra?: ReactNode;
  preguntas: Pregunta[];
}) {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/servicios/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: nombreServicio,
      serviceType: nombreServicio,
      url,
      provider: { "@id": `${baseUrl}/#negocio` },
      areaServed: { "@type": "City", name: "León, Guanajuato" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Servicios", item: `${baseUrl}/servicios` },
        { "@type": "ListItem", position: 3, name: nombreServicio, item: url },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="section">
        <CircuitArt className="section-art-bg" />
        <div className="container">
          <nav aria-label="Ruta" className="breadcrumb reveal">
            <Link href="/servicios">Servicios</Link>
            <span aria-hidden="true">/</span>
            <span>{nombreServicio}</span>
          </nav>
          <div className="kicker reveal">
            <span className="kicker-line" />
            <span className="kicker-label">{kicker}</span>
          </div>
          <h1 className="reveal" style={{ maxWidth: 760, transitionDelay: "0.05s" }}>
            {titulo}
          </h1>
          <div className="reveal prose" style={{ transitionDelay: "0.1s" }}>
            {intro}
          </div>
          <div className="reveal" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="/contacto" className="btn btn--primary">
              Cuéntanos tu caso
            </Link>
            <Link href="/casos" className="btn btn--secondary">
              Ver casos reales
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <CircuitArt className="section-art-bg" />
        <div className="container">
          <div className="kicker reveal">
            <span className="kicker-line" />
            <span className="kicker-label">Para quién es</span>
          </div>
          <ul className="check-list reveal">
            {paraQuien.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <CircuitArt className="section-art-bg" />
        <div className="container">
          <div className="kicker reveal">
            <span className="kicker-line" />
            <span className="kicker-label">Qué incluye</span>
          </div>
          <h2 className="reveal">{tituloIncluye}</h2>
          <div className="grid grid--3" style={{ marginTop: 32 }}>
            {incluye.map((t, i) => (
              <div
                className="card reveal"
                key={t.titulo}
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <h3>{t.titulo}</h3>
                <p>{t.texto}</p>
              </div>
            ))}
          </div>
          {extra && (
            <div className="reveal prose" style={{ marginTop: 32 }}>
              {extra}
            </div>
          )}
        </div>
      </section>

      <section className="section section--tint">
        <CircuitArt className="section-art-bg" />
        <div className="container">
          <div className="kicker reveal">
            <span className="kicker-line" />
            <span className="kicker-label">Preguntas frecuentes</span>
          </div>
          <h2 className="reveal">Lo que nos preguntan antes de empezar</h2>
          <div className="faq reveal">
            {preguntas.map((q) => (
              <details key={q.pregunta}>
                <summary>{q.pregunta}</summary>
                <p>{q.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <CircuitArt className="section-art-bg" />
        <div className="container reveal" style={{ textAlign: "center" }}>
          <h2>¿Hablamos de tu negocio?</h2>
          <p style={{ maxWidth: 480, margin: "0 auto 24px" }}>
            Cuéntanos cómo operas hoy y te decimos con honestidad si te
            podemos ayudar. Estamos en León, Guanajuato.
          </p>
          <Link href="/contacto" className="btn btn--primary">
            Platiquemos
          </Link>
        </div>
      </section>
    </>
  );
}
