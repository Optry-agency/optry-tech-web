import type { Metadata } from "next";
import PaginaServicio from "@/components/PaginaServicio";

export const metadata: Metadata = {
  title: "Automatización con IA para negocios en León, Gto.",
  description:
    "Automatizamos la captura de leads, las citas y los reportes de tu negocio con IA, conectado a WhatsApp y al sistema que ya usas. León, Gto.",
  alternates: { canonical: "/servicios/automatizacion-con-ia" },
};

export default function AutomatizacionConIA() {
  return (
    <PaginaServicio
      slug="automatizacion-con-ia"
      nombreServicio="Automatización con IA"
      kicker="Automatización con IA · León, Gto."
      titulo="Automatización con IA para que tu equipo deje de hacer a mano lo que se puede hacer solo"
      intro={
        <>
          <p>
            Aquí no vendemos un producto fijo: automatizamos el proceso
            específico que te está quitando tiempo. Prospectos que se
            pierden entre WhatsApp, redes y llamadas; citas que alguien
            tiene que confirmar una por una; reportes que se arman a mano
            cada semana.
          </p>
          <p>
            Y no tienes que cambiar de sistema para lograrlo: también
            automatizamos el software que tu negocio ya usa, conectándolo
            con lo demás.
          </p>
        </>
      }
      paraQuien={[
        "Restaurantes con varias sucursales y cadenas.",
        "Clínicas, consultorios y estéticas con agenda de citas de alto volumen.",
        "Salones de eventos y negocios de servicio que reciben muchos prospectos al mismo tiempo.",
        "Equipos que pasan el día copiando datos de un sistema a otro.",
      ]}
      tituloIncluye="Lo que automatizamos"
      incluye={[
        {
          titulo: "Captura de leads",
          texto: "Ningún prospecto se pierde entre WhatsApp, redes y llamadas: todo se registra y se le da seguimiento solo.",
        },
        {
          titulo: "Agenda y recordatorios",
          texto: "Confirmación y recordatorio de citas o reservas sin que alguien tenga que marcar uno por uno.",
        },
        {
          titulo: "Reportes automáticos",
          texto: "La información que hoy juntas a mano, lista sola cuando la necesitas.",
        },
        {
          titulo: "Respuestas con IA",
          texto: "Un asistente que contesta las preguntas de siempre y le pasa la conversación a una persona cuando hace falta.",
        },
        {
          titulo: "Tu sistema actual, automatizado",
          texto: "Conectamos el software que ya usas con WhatsApp, correo u otras herramientas para que la información fluya sola.",
        },
        {
          titulo: "Hecho a tu proceso",
          texto: "Primero entendemos cómo trabaja tu equipo; después automatizamos justo el paso que más tiempo les quita.",
        },
      ]}
      preguntas={[
        {
          pregunta: "¿Tengo que cambiar el sistema que ya uso?",
          respuesta:
            "No. En muchos casos lo que hacemos es conectar y automatizar lo que ya tienes, sin que tu equipo tenga que aprender un sistema nuevo.",
        },
        {
          pregunta: "¿La IA les va a contestar mal a mis clientes?",
          respuesta:
            "Definimos contigo qué puede contestar y qué no. Lo que sale de eso se le pasa a una persona de tu equipo, en vez de inventar una respuesta.",
        },
        {
          pregunta: "¿Cuánto cuesta?",
          respuesta:
            "Una cuota de arranque única y una mensualidad. Los servicios de terceros que use la automatización (como los mensajes de WhatsApp o el uso de IA) se cobran aparte y al costo, sin margen, para que sepas exactamente qué pagas.",
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
