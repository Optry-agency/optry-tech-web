"use client";

import { useActionState } from "react";
import { enviarContacto } from "./actions";
import styles from "./contacto.module.css";

const initialState = { ok: false, error: undefined as string | undefined };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    enviarContacto,
    initialState
  );

  if (state.ok) {
    return (
      <div className={styles.success}>
        <h3>Listo, ya nos llegó tu mensaje.</h3>
        <p>Te contactamos en menos de un día hábil.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      <label className={styles.field}>
        <span>Tu nombre</span>
        <input name="nombre" required maxLength={200} />
      </label>
      <label className={styles.field}>
        <span>Negocio (opcional)</span>
        <input name="negocio" maxLength={200} />
      </label>
      <label className={styles.field}>
        <span>WhatsApp o correo</span>
        <input name="contacto" required maxLength={200} />
      </label>
      <label className={styles.field}>
        <span>¿Qué te está quitando más tiempo hoy?</span>
        <textarea name="mensaje" required rows={5} maxLength={4000} />
      </label>
      {state.error && <p className={styles.error}>{state.error}</p>}
      <button type="submit" className="btn btn--primary" disabled={pending}>
        {pending ? "Enviando…" : "Enviar"}
      </button>
    </form>
  );
}
