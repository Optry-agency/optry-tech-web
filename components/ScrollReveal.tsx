"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Activa el fade/slide-in de cualquier elemento con className="reveal"
 * cuando entra en el viewport. No usa estado de React a propósito —
 * solo alterna una clase en el DOM, así que no compite con la hidratación.
 *
 * Se vuelve a ejecutar en cada cambio de ruta (usePathname) porque este
 * componente vive en el layout raíz y no se vuelve a montar al navegar
 * por el menú — sin esto, los ".reveal" de la página nueva nunca se
 * observaban y se quedaban invisibles (opacity: 0) para siempre.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Espera un frame a que el DOM de la página nueva ya esté pintado.
    const raf = requestAnimationFrame(() => {
      const elements = Array.from(document.querySelectorAll(".reveal"));
      if (elements.length === 0) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) {
        elements.forEach((el) => el.classList.add("reveal-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );

      elements.forEach((el) => {
        el.classList.remove("reveal-visible");
        observer?.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
