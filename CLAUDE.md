# optry-tech-web

Sitio web público de Optry (agencia de desarrollo de software y automatización con IA, León, Guanajuato). Marketing site — no maneja dinero ni datos operativos de clientes de Optry, solo captura leads por el formulario de contacto.

## Fuente de verdad de marca y negocio

No improvisar copy ni colores. Antes de tocar contenido o identidad visual, leer:
- `../optry-contexto/optry-identidad-de-marca.md` — paleta, tipografía, logo, tono de voz.
- `../optry-contexto/OPTRY_CONTEXTO.md` — ICP (dos segmentos), casos, propuesta de valor.

## Reglas de este proyecto

- Toda Server Action (incluido el formulario de contacto) valida el input en servidor, no solo en el cliente.
- CSS plano, sin framework. Variables de marca en `app/globals.css`, no hardcodear hex sueltos en componentes.
- Nombres de clientes reales de Optry NUNCA aparecen en este sitio público — los casos van generalizados/anonimizados (ver `OPTRY_CONTEXTO.md`, regla de anonimización).
- Mostaza (`--color-accent`) solo como acento (botones, íconos, subrayados) — nunca como color de texto de párrafo.

## Git

- Commit automático al terminar cada cambio funcional, sin preguntar.
- Push a `main` dispara deploy a producción en Vercel — el push se hace cuando Diego diga que está listo, no automático.
