"use server";

type ContactoResult = { ok: boolean; error?: string };

export async function enviarContacto(
  _prev: ContactoResult,
  formData: FormData
): Promise<ContactoResult> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const negocio = String(formData.get("negocio") ?? "").trim();
  const contacto = String(formData.get("contacto") ?? "").trim();
  const mensaje = String(formData.get("mensaje") ?? "").trim();

  // Validación en servidor — nunca confiar solo en el required del <input>,
  // una Server Action es un endpoint público alcanzable sin pasar por la UI.
  if (!nombre || !contacto || !mensaje) {
    return { ok: false, error: "Falta nombre, un contacto o el mensaje." };
  }
  if (nombre.length > 200 || negocio.length > 200 || mensaje.length > 4000) {
    return { ok: false, error: "Uno de los campos es demasiado largo." };
  }

  const webhookUrl = process.env.OPTRY_LEADS_WEBHOOK_URL;

  if (!webhookUrl) {
    // Scaffolding inicial: falta conectar el webhook de n8n que recibe los
    // leads (variable OPTRY_LEADS_WEBHOOK_URL en Vercel). Mientras tanto,
    // el envío falla explícitamente en vez de perder el lead en silencio.
    console.error(
      "OPTRY_LEADS_WEBHOOK_URL no está configurada — lead no enviado:",
      { nombre, negocio, contacto, mensaje }
    );
    return {
      ok: false,
      error:
        "El formulario todavía no está conectado. Escríbenos directo a optry.tech@gmail.com mientras tanto.",
    };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        negocio,
        contacto,
        mensaje,
        origen: "optry-tech-web",
        fecha: new Date().toISOString(),
      }),
    });
    if (!res.ok) {
      throw new Error(`webhook respondió ${res.status}`);
    }
  } catch (err) {
    console.error("Error enviando lead a n8n:", err);
    return {
      ok: false,
      error:
        "No se pudo enviar el mensaje. Escríbenos directo a optry.tech@gmail.com.",
    };
  }

  return { ok: true };
}
