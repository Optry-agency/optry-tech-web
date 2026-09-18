"use client";

import { useEffect } from "react";

// Colores de inicio (arriba de la página) y de destino (fondo de la página).
// Los "fijos" de marca (--color-primary, --color-accent, --color-ink) no se tocan:
// solo el fondo/texto por defecto de las secciones claras se profundiza al bajar,
// para dar sensación de profundidad sin perder legibilidad en tarjetas/CTAs.
const BG_START = [246, 244, 237]; // --color-bg crema
const BG_END = [12, 20, 16]; // verde-negro profundo
const FG_START = [18, 36, 28]; // --color-ink
const FG_END = [237, 240, 235]; // crema muy claro

function lerp(a: number, b: number, t: number) {
  return Math.round(a + (b - a) * t);
}

function mix(start: number[], end: number[], t: number) {
  return `rgb(${lerp(start[0], end[0], t)}, ${lerp(start[1], end[1], t)}, ${lerp(
    start[2],
    end[2],
    t
  )})`;
}

export default function ScrollDepth() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const root = document.documentElement;
    let ticking = false;

    const apply = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      // Curva suave: se profundiza rápido al inicio del scroll y se detiene
      // antes del fondo del todo, para no pelear con las secciones oscuras.
      const t = Math.min(1, Math.max(0, progress)) ** 0.85;

      root.style.setProperty("--color-bg", mix(BG_START, BG_END, t));
      root.style.setProperty("--color-fg", mix(FG_START, FG_END, t));
      root.style.setProperty(
        "--color-fg-muted",
        `${mix(FG_START, FG_END, t)}`.replace("rgb", "rgba").replace(")", ", 0.72)")
      );
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
