"use client";

import { useEffect, useState } from "react";

type CircuitArtProps = {
  className?: string;
};

/**
 * Grafico decorativo tipo "circuito conectado" — mismo lenguaje visual que
 * las piezas de Instagram de Optry (nodos + lineas en angulo recto + un
 * acento mostaza). Vive DE FONDO detras del contenido: formato alto,
 * lineas con un poco mas de presencia, y "vivo" — nodos que laten, lineas
 * punteadas que fluyen y puntos que viajan por el circuito (todo se apaga
 * solo si el sistema pide reducir movimiento). Puramente decorativo
 * (aria-hidden); no es el isotipo final de marca (esa decision sigue
 * pendiente en la guia de identidad).
 */
export default function CircuitArt({ className }: CircuitArtProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <svg
      className={`circuit-art ${className ?? ""}`}
      viewBox="0 0 1200 900"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* arcos grandes de fondo */}
      <circle cx="980" cy="460" r="260" stroke="#1E4D3B" strokeOpacity="0.12" strokeWidth="1.5" />
      <circle cx="110" cy="700" r="180" stroke="#1E4D3B" strokeOpacity="0.09" strokeWidth="1.5" />

      {/* red principal de lineas en angulo recto */}
      <path id="circuit-p1" d="M40 60 V260 H260 V440" stroke="#1E4D3B" strokeOpacity="0.48" strokeWidth="1.6" />
      <path id="circuit-p2" d="M260 440 H620 V220" stroke="#1E4D3B" strokeOpacity="0.48" strokeWidth="1.6" />
      <path d="M620 220 H900 V380" stroke="#1E4D3B" strokeOpacity="0.4" strokeWidth="1.6" />
      <path d="M900 380 L1010 290" stroke="#1E4D3B" strokeOpacity="0.34" strokeWidth="1.6" />
      <path id="circuit-p3" d="M260 440 V660 H460" stroke="#1E4D3B" strokeOpacity="0.3" strokeWidth="1.6" />
      <path d="M460 660 V780" stroke="#1E4D3B" strokeOpacity="0.26" strokeWidth="1.6" />
      <path
        className="circuit-flow"
        d="M620 220 V60"
        stroke="#1E4D3B"
        strokeOpacity="0.3"
        strokeWidth="1.6"
        strokeDasharray="3 9"
        strokeLinecap="round"
      />
      <path
        className="circuit-flow"
        d="M900 380 V600 H1100"
        stroke="#1E4D3B"
        strokeOpacity="0.26"
        strokeWidth="1.6"
        strokeDasharray="3 9"
        strokeLinecap="round"
      />
      <path d="M1100 600 V780" stroke="#1E4D3B" strokeOpacity="0.22" strokeWidth="1.6" />
      <path
        className="circuit-flow"
        d="M110 520 V700"
        stroke="#1E4D3B"
        strokeOpacity="0.2"
        strokeWidth="1.6"
        strokeDasharray="3 9"
        strokeLinecap="round"
      />

      {/* nodo mostaza — acento principal, laten */}
      <circle className="circuit-pulse-ring" cx="260" cy="440" r="30" stroke="#E2AB44" strokeOpacity="0.5" strokeWidth="1.6" />
      <circle className="circuit-pulse-dot" cx="260" cy="440" r="10" fill="#E2AB44" />

      {/* nodo mostaza secundario */}
      <circle className="circuit-pulse-ring" cx="900" cy="380" r="17" stroke="#E2AB44" strokeOpacity="0.42" strokeWidth="1.6" style={{ animationDelay: "1.1s" }} />
      <circle className="circuit-pulse-dot" cx="900" cy="380" r="5" fill="#E2AB44" style={{ animationDelay: "1.1s" }} />

      {/* nodos huecos */}
      <circle cx="40" cy="60" r="6" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.6" />
      <circle cx="620" cy="220" r="7" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.6" />
      <circle cx="1010" cy="290" r="5" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.6" />
      <circle cx="460" cy="660" r="6" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.6" />
      <circle cx="1100" cy="600" r="6" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.6" />

      {/* puntos solidos secundarios */}
      <circle cx="260" cy="260" r="4" fill="#1E4D3B" fillOpacity="0.55" />
      <circle cx="620" cy="440" r="4" fill="#9CAE9F" />
      <circle cx="460" cy="780" r="4" fill="#9CAE9F" />
      <circle cx="1100" cy="780" r="4" fill="#9CAE9F" />

      {/* señales viajando por el circuito — solo si el sistema no pide reducir movimiento */}
      {animate && (
        <>
          <circle r="4" fill="#E2AB44">
            <animateMotion dur="6s" repeatCount="indefinite" begin="0s">
              <mpath href="#circuit-p1" />
            </animateMotion>
          </circle>
          <circle r="3.5" fill="#1E4D3B" fillOpacity="0.8">
            <animateMotion dur="7s" repeatCount="indefinite" begin="1.5s">
              <mpath href="#circuit-p2" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#9CAE9F">
            <animateMotion dur="5s" repeatCount="indefinite" begin="3s">
              <mpath href="#circuit-p3" />
            </animateMotion>
          </circle>
        </>
      )}
    </svg>
  );
}
