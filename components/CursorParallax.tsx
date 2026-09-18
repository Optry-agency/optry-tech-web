"use client";

import { useEffect } from "react";

/**
 * Pone --mx/--my (de -0.5 a 0.5) en <html> según la posición del cursor,
 * para que el fondo de circuito (.circuit-art) se desplace levemente y se
 * sienta interactivo, no solo animado. En móvil (sin mouse real) no hace
 * nada — las variables se quedan en 0 y el fondo se ve estático salvo por
 * sus propias animaciones.
 */
export default function CursorParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = document.documentElement;
    let ticking = false;
    let lastX = 0;
    let lastY = 0;

    const apply = () => {
      ticking = false;
      root.style.setProperty("--mx", lastX.toFixed(3));
      root.style.setProperty("--my", lastY.toFixed(3));
    };

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX / window.innerWidth - 0.5;
      lastY = e.clientY / window.innerHeight - 0.5;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
