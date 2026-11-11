import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollDepth from "@/components/ScrollDepth";
import ScrollReveal from "@/components/ScrollReveal";
import CursorParallax from "@/components/CursorParallax";
import JsonLd from "@/components/JsonLd";
import { getBaseUrl } from "@/lib/site-url";
import { NEGOCIO, SERVICIOS } from "@/lib/negocio";

const montserrat = localFont({
  src: "../public/fonts/Montserrat-Variable.woff2",
  weight: "100 900",
  variable: "--font-montserrat",
  display: "swap",
});

const inter = localFont({
  src: "../public/fonts/Inter-Variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Software a medida y automatización con IA en León | Optry",
    template: "%s | Optry",
  },
  description:
    "Agencia de software en León, Gto. Sistemas a la medida (punto de venta, inventario, producción), automatización con IA y auditorías de ciberseguridad.",
  applicationName: "Optry",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Optry",
  },
  // Códigos de verificación de Google Search Console y Bing Webmaster
  // Tools. Se configuran como variables de entorno en Vercel (no en el
  // código) para poder darlos de alta sin tocar el repo.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

// Ficha del negocio para Google: qué es, dónde da servicio y cómo
// contactarlo. Es un negocio de área de servicio (va con el cliente), por
// eso no lleva calle, solo ciudad y área atendida.
const negocioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/#negocio`,
  name: NEGOCIO.nombre,
  description: NEGOCIO.descripcion,
  url: baseUrl,
  logo: `${baseUrl}/optry-isotipo-fondo-crema.svg`,
  image: `${baseUrl}/opengraph-image`,
  telephone: NEGOCIO.telefonoE164,
  email: NEGOCIO.correo,
  address: {
    "@type": "PostalAddress",
    addressLocality: NEGOCIO.ciudad,
    addressRegion: NEGOCIO.estado,
    addressCountry: NEGOCIO.pais,
  },
  areaServed: [
    { "@type": "City", name: "León, Guanajuato" },
    { "@type": "State", name: "Guanajuato" },
  ],
  sameAs: [NEGOCIO.instagram],
  knowsLanguage: "es",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios",
    itemListElement: SERVICIOS.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.nombre,
        description: s.resumen,
        url: `${baseUrl}/servicios/${s.slug}`,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Las variables de las fuentes van en <html>, no en <body>: globals.css
    // las usa desde :root (--font-heading/--font-body), y si se definen más
    // abajo el navegador no las encuentra y cae a Times New Roman.
    <html lang="es-MX" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={negocioJsonLd} />
        <ScrollDepth />
        <ScrollReveal />
        <CursorParallax />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
