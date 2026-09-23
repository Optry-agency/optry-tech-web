// URL base pública del sitio, para metadata/sitemap/robots (todo código
// de servidor, no de cliente, así que no hace falta el prefijo NEXT_PUBLIC_).
//
// Orden de prioridad:
// 1. SITE_URL — si Diego compra un dominio propio (ej. optry.tech), se
//    configura aquí en Vercel y todo lo usa automáticamente.
// 2. VERCEL_PROJECT_PRODUCTION_URL — dominio *.vercel.app estable de
//    producción que Vercel expone solo (no cambia por cada deploy, a
//    diferencia de VERCEL_URL). Es lo que se usa mientras no haya
//    dominio propio, para no pagar uno de más.
// 3. localhost — desarrollo local.
export function getBaseUrl(): string {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}
