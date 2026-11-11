// Datos públicos del negocio en un solo lugar. Los usan los metadatos,
// los datos estructurados para Google (JSON-LD) y el footer. Si cambia el
// teléfono, el correo o las redes, se cambia aquí y en ningún otro lado:
// Google cruza estos datos con el perfil de Google Business, y si no
// coinciden en todos lados, le baja la confianza al negocio.
export const NEGOCIO = {
  nombre: "Optry",
  descripcion:
    "Agencia de software a medida, automatización con IA y ciberseguridad para negocios de León, Guanajuato.",
  telefono: "+52 442 203 9835",
  telefonoE164: "+524422039835",
  whatsapp: "https://wa.me/524422039835",
  correo: "optry.tech@gmail.com",
  ciudad: "León",
  estado: "Guanajuato",
  estadoCorto: "Gto.",
  pais: "MX",
  instagram: "https://www.instagram.com/optry.tech/",
} as const;

export const SERVICIOS = [
  {
    slug: "software-a-medida",
    nombre: "Software a medida",
    resumen:
      "Punto de venta, inventario, producción y cuentas de clientes hechos alrededor de cómo opera tu negocio.",
  },
  {
    slug: "automatizacion-con-ia",
    nombre: "Automatización con IA",
    resumen:
      "Captura de leads, citas y recordatorios, y reportes que se hacen solos, conectados a WhatsApp y a lo que ya usas.",
  },
  {
    slug: "ciberseguridad",
    nombre: "Auditoría de ciberseguridad",
    resumen:
      "Revisión a fondo del sistema que tu negocio ya tiene corriendo, con reporte por severidad y corrección.",
  },
] as const;
