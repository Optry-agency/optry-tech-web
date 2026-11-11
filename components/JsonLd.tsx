// Inserta datos estructurados (JSON-LD) que Google lee para entender qué
// es el negocio. No es JavaScript ejecutable: el navegador lo ignora y la
// CSP no lo bloquea. Se escapa "<" para que ningún texto pueda cerrar la
// etiqueta <script> antes de tiempo.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
