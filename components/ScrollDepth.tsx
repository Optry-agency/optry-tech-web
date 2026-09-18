"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// El blanco domina todo el sitio; esto solo agrega una insinuación de
// profundidad al fondo mientras bajas (nunca compromete el contraste,
// porque el texto usa --color-ink fijo, no se anima).
const BG_START = [255, 255, 255]; // blanco puro, arriba de la página
const BG_END = [234, 231, 222]; // gris cálido muy claro, abajo del todo

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
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      root.style.setProperty("--color-bg", `rgb(${BG_START.join(", ")})`);
      return;
    }

    let ticking = false;

    const apply = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      const t = Math.min(1, Math.max(0, progress));
      root.style.setProperty("--color-bg", mix(BG_START, BG_END, t));
    };

    // Recalcular de inmediato al entrar a una página nueva (navegación por
    // menú resetea el scroll a 0, pero la variable en <html> venía de la
    // página anterior — sin esto se ve un flash con el tono de antes).
    apply();

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
