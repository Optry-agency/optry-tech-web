type CircuitArtProps = {
  className?: string;
};

/**
 * Grafico decorativo tipo "circuito conectado" — mismo lenguaje visual que
 * las piezas de Instagram de Optry (nodos + lineas en angulo recto + un
 * acento mostaza). Puramente decorativo (aria-hidden), no es el isotipo
 * final de marca (esa decision sigue pendiente en la guia de identidad).
 */
export default function CircuitArt({ className }: CircuitArtProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 520"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* arco grande de fondo, como el "sol" que se asoma en la referencia */}
      <circle
        cx="330"
        cy="360"
        r="150"
        stroke="#1E4D3B"
        strokeOpacity="0.14"
        strokeWidth="1.5"
      />

      {/* linea principal: baja, dobla, sube */}
      <path
        d="M60 40 V150 H190 V230"
        stroke="#1E4D3B"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <path
        d="M190 230 H320 V120"
        stroke="#1E4D3B"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <path
        d="M190 230 V340 H110"
        stroke="#1E4D3B"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path
        d="M320 120 L370 70"
        stroke="#1E4D3B"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path
        d="M110 340 L110 420"
        stroke="#1E4D3B"
        strokeOpacity="0.3"
        strokeWidth="1.5"
      />
      <path
        d="M320 120 L320 220"
        stroke="#1E4D3B"
        strokeOpacity="0.22"
        strokeWidth="1.5"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />

      {/* nodo mostaza — el acento principal, con anillo suave alrededor */}
      <circle cx="190" cy="230" r="26" stroke="#E2AB44" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="190" cy="230" r="9" fill="#E2AB44" />

      {/* nodos huecos */}
      <circle cx="60" cy="40" r="6" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.5" />
      <circle cx="320" cy="120" r="7" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.5" />
      <circle cx="370" cy="70" r="5" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.5" />
      <circle cx="110" cy="420" r="6" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.5" />

      {/* puntos solidos secundarios */}
      <circle cx="190" cy="150" r="4" fill="#1E4D3B" />
      <circle cx="320" cy="220" r="4" fill="#9CAE9F" />
      <circle cx="110" cy="340" r="4" fill="#9CAE9F" />
    </svg>
  );
}
