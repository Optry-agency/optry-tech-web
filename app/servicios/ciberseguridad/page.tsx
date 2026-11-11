import type { Metadata } from "next";
import PaginaServicio from "@/components/PaginaServicio";

export const metadata: Metadata = {
  title: "Auditoría de ciberseguridad en León, Gto.",
  description:
    "Revisamos a fondo el sistema que tu negocio ya usa: control de acceso, dependencias y configuración. Reporte por severidad y corrección. León, Gto.",
  alternates: { canonical: "/servicios/ciberseguridad" },
};

export default function Ciberseguridad() {
  return (
    <PaginaServicio
      slug="ciberseguridad"
      nombreServicio="Auditoría de ciberseguridad"
      kicker="Ciberseguridad · León, Gto."
      titulo="Auditoría de ciberseguridad: le buscamos las grietas a tu sistema antes de que alguien más lo haga"
      intro={
        <>
          <p>
            Es una revisión formal y a fondo para el sistema que tu negocio
            ya tiene corriendo hoy, lo hayamos construido nosotros o no, y
            que maneja información o dinero real de tus clientes sin que
            nadie le haya buscado las grietas todavía.
          </p>
          <p>
            No revisamos una lista genérica sacada de internet. Revisamos
            tu sistema función por función, buscando exactamente el tipo de
            error que ya hemos encontrado y corregido en aplicaciones que
            manejan dinero real: una función que registraba movimientos de
            saldo sin pedir ninguna sesión, pantallas de &ldquo;solo
            personal&rdquo; alcanzables por cualquier cuenta, un webhook
            que confiaba en cualquiera que le mandara una petición con el
            formato correcto.
          </p>
        </>
      }
      paraQuien={[
        "Negocios con una app o sistema que maneja dinero, saldos o datos de sus clientes.",
        "Sistemas que hizo un freelancer o una agencia que ya no da soporte.",
        "Apps que están por salir a producción y nadie ha revisado con ojos de atacante.",
        "Dueños que no saben qué tan expuesto está su sistema y prefieren saberlo antes que después.",
      ]}
      tituloIncluye="Qué revisamos"
      incluye={[
        {
          titulo: "Acceso y lógica",
          texto: "Cada función que tu sistema expone hacia afuera, no solo las pantallas que se ven: quién puede tocar qué, y si de verdad se verifica en el servidor.",
        },
        {
          titulo: "Dependencias y configuración",
          texto: "Vulnerabilidades conocidas en las librerías, llaves expuestas, sesiones y cookies mal configuradas, y endpoints que quedaron abiertos.",
        },
        {
          titulo: "Reporte y corrección",
          texto: "Un reporte claro, ordenado por qué tan grave es cada hallazgo, con cómo corregir cada uno. Si prefieres, lo corregimos nosotros.",
        },
      ]}
      extra={
        <p>
          Todo lo que construimos en Optry ya pasa por una revisión de
          seguridad antes de tocar producción, sin costo extra. Esta
          auditoría es un servicio aparte, para sistemas que ya están
          operando.
        </p>
      }
      preguntas={[
        {
          pregunta: "¿Revisan sistemas que no hicieron ustedes?",
          respuesta:
            "Sí. La auditoría es para aplicaciones ya construidas, propias o de terceros.",
        },
        {
          pregunta: "¿Hacen pruebas de hackeo ofensivo (pentest)?",
          respuesta:
            "Por ahora no. El alcance actual es la auditoría a fondo de la aplicación: código, control de acceso, dependencias y configuración.",
        },
        {
          pregunta: "¿Cuánto cuesta?",
          respuesta:
            "Se cotiza a la medida según el tamaño del sistema. Cuéntanos qué maneja tu sistema hoy y lo revisamos juntos.",
        },
        {
          pregunta: "¿Atienden fuera de León?",
          respuesta:
            "Estamos en León, Guanajuato, y trabajamos con negocios de León y alrededores.",
        },
      ]}
    />
  );
}
