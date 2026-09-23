import { ImageResponse } from "next/og";

export const alt = "Optry — Software y automatización con IA para tu negocio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Nota: no se usa una fuente de marca (Montserrat) aquí a propósito.
// next/og (satori) truena con las variable fonts del proyecto
// (public/fonts/*-Variable.ttf) con "TypeError: Cannot read properties
// of undefined (reading '256')" al generar la imagen — satori no
// soporta bien fuentes variables. Se usa la fuente por defecto en vez
// de invertir en convertir/incluir una fuente estática solo para esto.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#1E4D3B",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 44,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "#E2AB44",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#F6F4ED",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            OPTRY
          </span>
        </div>
        <div
          style={{
            display: "flex",
            color: "#F6F4ED",
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 940,
          }}
        >
          Software y automatización con IA para tu negocio
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            color: "#E2AB44",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          You lead.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
