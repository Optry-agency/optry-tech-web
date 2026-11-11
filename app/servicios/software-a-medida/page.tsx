import type { Metadata } from "next";
import PaginaServicio from "@/components/PaginaServicio";

export const metadata: Metadata = {
  title: "Software a medida para negocios en León, Gto.",
  description:
    "Punto de venta, inventario, producción y cuentas de clientes a la medida de tu negocio en León, Gto. Con básculas, impresoras y lectores conectados.",
  alternates: { canonical: "/servicios/software-a-medida" },
};

export default function SoftwareAMedida() {
  return (
    <PaginaServicio
      slug="software-a-medida"
      nombreServicio="Software a medida"
      kicker="Software a medida · León, Gto."
      titulo="Software a medida para negocios de León que hoy operan con papel, Excel o memoria"
      intro={
        <>
          <p>
            Construimos el sistema alrededor de cómo trabaja tu negocio de
            verdad, no de un molde genérico. Si hoy las ventas se anotan en
            una libreta, el fiado vive en la cabeza del dueño y el
            inventario se cuenta a ojo, eso es lo que resolvemos.
          </p>
          <p>
            Somos de León y trabajamos contigo en persona: vemos tu
            operación tal cual es antes de cotizar, diseñamos las pantallas
            contigo antes de programar y te capacitamos al entregar.
          </p>
        </>
      }
      paraQuien={[
        "Restaurantes, gimnasios, talleres, constructoras y comercios locales que operan con papel, Excel o WhatsApp.",
        "Abarrotes, fruterías y negocios que venden por peso o dan crédito (fiado) a sus clientes.",
        "Talleres de producción que necesitan saber qué insumos tienen y en qué etapa va cada pedido.",
        "Dueños que quieren dejar de ser la única persona que sabe cómo va el negocio.",
      ]}
      tituloIncluye="Lo que podemos construir para tu negocio"
      incluye={[
        {
          titulo: "Punto de venta",
          texto: "Cobro, tickets, cortes de caja y reportes, desde la computadora, la tablet o el celular.",
        },
        {
          titulo: "Inventario y producción",
          texto: "Control de insumos, avance de producción por etapa y órdenes de pedido de mayoreo en un solo lugar.",
        },
        {
          titulo: "Cuentas de clientes y fiado",
          texto: "Historial de cada cliente, saldos y movimientos que nunca se pierden ni se sobreescriben.",
        },
        {
          titulo: "Hardware conectado",
          texto: "Básculas, impresoras de tickets y etiquetas, lectores de código de barras y tablets funcionando con el sistema.",
        },
        {
          titulo: "Permisos por persona",
          texto: "El dueño ve y controla todo; cada empleado solo puede hacer lo que le toca.",
        },
        {
          titulo: "Hecho para el día a día",
          texto: "Pantallas pensadas para quien las usa en el mostrador. Si hace falta, el sistema puede seguir trabajando sin internet.",
        },
      ]}
      preguntas={[
        {
          pregunta: "¿Cuánto cuesta un sistema a la medida?",
          respuesta:
            "Depende de lo que necesite tu negocio, por eso primero platicamos y después cotizamos. El esquema es una cuota de arranque única y una mensualidad que incluye hosting y soporte. Los costos de terceros (por ejemplo, el dominio) van aparte y al costo, sin margen.",
        },
        {
          pregunta: "¿Tengo que comprar equipo?",
          respuesta:
            "Solo si tu negocio lo necesita. Las básculas, impresoras o tablets las compras tú directo, al precio de la tienda; nosotros las instalamos y las conectamos al sistema.",
        },
        {
          pregunta: "¿Por qué no usar un sistema de caja que ya existe?",
          respuesta:
            "Si uno comercial te funciona, úsalo. El software a medida tiene sentido cuando tu forma de trabajar no cabe en uno genérico: fiado, pedidos de mayoreo, producción por etapas, venta por peso o reportes que ningún sistema te da como los necesitas.",
        },
        {
          pregunta: "¿Qué pasa después de que lo entregan?",
          respuesta:
            "Te capacitamos a ti y a tu equipo, y seguimos cerca: soporte y los ajustes que van saliendo con el uso real, incluso meses después de entregado.",
        },
        {
          pregunta: "¿Atienden fuera de León?",
          respuesta:
            "Estamos en León, Guanajuato, y trabajamos en persona con negocios de León y alrededores.",
        },
      ]}
    />
  );
}
