"use server";

import nodemailer from "nodemailer";

type ContactoResult = { ok: boolean; error?: string };

// Quita saltos de línea de cualquier valor que termine en un header de
// correo (subject, replyTo) — defensa adicional contra header injection
// aunque nodemailer también lo sanitice internamente (CVE de versiones
// viejas: GHSA-c7w3-x93f-qmm8 y relacionados, ver nodemailer >=10).
function sinSaltosDeLinea(valor: string): string {
  return valor.replace(/[\r\n]+/g, " ").trim();
}

export async function enviarContacto(
  _prev: ContactoResult,
  formData: FormData
): Promise<ContactoResult> {
  // Honeypot: campo invisible que ningún humano llena. Si viene con algo,
  // es un bot — se descarta en silencio (éxito falso) para no darle pistas
  // de que fue detectado, en vez de contestar un error que le enseñe a
  // ajustar su envío.
  const honeypot = String(formData.get("pagina_web") ?? "").trim();
  if (honeypot) {
    return { ok: true };
  }

  const nombre = sinSaltosDeLinea(String(formData.get("nombre") ?? ""));
  const negocio = sinSaltosDeLinea(String(formData.get("negocio") ?? ""));
  const contacto = sinSaltosDeLinea(String(formData.get("contacto") ?? ""));
  const mensaje = String(formData.get("mensaje") ?? "").trim();

  // Validación en servidor — nunca confiar solo en el required del <input>,
  // una Server Action es un endpoint público alcanzable sin pasar por la UI.
  if (!nombre || !contacto || !mensaje) {
    return { ok: false, error: "Falta nombre, un contacto o el mensaje." };
  }
  if (nombre.length > 200 || negocio.length > 200 || mensaje.length > 4000) {
    return { ok: false, error: "Uno de los campos es demasiado largo." };
  }

  // Antes se enviaba a un webhook de n8n — se quitó (2026-09-21) porque se
  // decidió dejar de pagar la instancia de n8n Cloud. Ahora se manda por
  // correo directo vía SMTP de Gmail, sin depender de ningún servicio de
  // terceros de pago.
  const smtpUser = process.env.OPTRY_SMTP_USER;
  const smtpPass = process.env.OPTRY_SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    // Pendiente de configurar en Vercel: OPTRY_SMTP_USER (el correo de
    // Gmail que envía, ej. optry.tech@gmail.com) y OPTRY_SMTP_PASS (una
    // contraseña de aplicación de Gmail — la genera Diego en
    // https://myaccount.google.com/apppasswords, nunca es la contraseña
    // normal de la cuenta). Mientras tanto, el envío falla explícitamente
    // en vez de perder el lead en silencio.
    console.error(
      "OPTRY_SMTP_USER/OPTRY_SMTP_PASS no configuradas — lead no enviado:",
      { nombre, negocio, contacto, mensaje }
    );
    return {
      ok: false,
      error:
        "El formulario todavía no está conectado. Escríbenos directo a optry.tech@gmail.com mientras tanto.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"Optry — sitio web" <${smtpUser}>`,
      to: "optry.tech@gmail.com",
      replyTo: contacto.includes("@") ? contacto : undefined,
      subject: `Nuevo lead del sitio: ${nombre}${negocio ? ` (${negocio})` : ""}`,
      text: [
        `Nombre: ${nombre}`,
        negocio ? `Negocio: ${negocio}` : null,
        `Contacto: ${contacto}`,
        "",
        mensaje,
      ]
        .filter((line): line is string => line !== null)
        .join("\n"),
    });
  } catch (err) {
    console.error("Error enviando lead por correo:", err);
    return {
      ok: false,
      error:
        "No se pudo enviar el mensaje. Escríbenos directo a optry.tech@gmail.com.",
    };
  }

  return { ok: true };
}
