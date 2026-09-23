import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Optry — Software y automatización con IA para tu negocio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const montserrat = await readFile(
    join(process.cwd(), "public/fonts/Montserrat-Variable.ttf")
  );

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
          fontFamily: "Montserrat",
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
      fonts: [
        {
          name: "Montserrat",
          data: montserrat,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
