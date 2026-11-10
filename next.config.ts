import type { NextConfig } from "next";

const esDev = process.env.NODE_ENV !== "production";
// En los deploys de preview Vercel inyecta su barra de comentarios
// (vercel.live); se permite solo ahí para no romperla.
const esPreview = process.env.VERCEL_ENV === "preview";
const vercelLive = esPreview ? " https://vercel.live" : "";

// Content-Security-Policy: le dice al navegador de dónde puede cargar
// cosas la página. El sitio no usa nada externo (fuentes e imágenes son
// locales, sin analytics), así que todo se limita a 'self'.
// 'unsafe-inline' en scripts y estilos es necesario porque Next mete
// scripts inline para hidratar y los componentes usan style={{}}; la
// alternativa (nonces) obliga a renderizar cada página en el servidor y
// se pierde el caché estático del CDN, que es lo que aguanta el tráfico.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${esDev ? " 'unsafe-eval'" : ""}${vercelLive}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${vercelLive}${esPreview ? " wss://ws-us3.pusher.com" : ""}`,
  `frame-src 'self'${vercelLive}`,
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(esDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Nadie puede meter el sitio en un iframe (evita clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // El navegador no adivina tipos de archivo.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // A otros sitios solo se les manda el dominio, no la URL completa.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // El sitio no usa cámara, micrófono, ubicación ni pagos.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // No anunciar que el sitio corre con Next.js.
  poweredByHeader: false,
  experimental: {
    serverComponentsHmrCache: false,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
