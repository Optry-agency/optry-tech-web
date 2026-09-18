type CircuitArtProps = {
  className?: string;
};

/**
 * Grafico decorativo tipo "circuito conectado" — mismo lenguaje visual que
 * las piezas de Instagram de Optry (nodos + lineas en angulo recto + un
 * acento mostaza). Pensado para vivir DE FONDO detras del contenido (no
 * como ilustracion en su propia columna): formato ancho, lineas tenues.
 * Puramente decorativo (aria-hidden), no es el isotipo final de marca (esa
 * decision sigue pendiente en la guia de identidad).
 */
export default function CircuitArt({ className }: CircuitArtProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 700"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* arcos grandes de fondo */}
      <circle cx="980" cy="360" r="230" stroke="#1E4D3B" strokeOpacity="0.10" strokeWidth="1.5" />
      <circle cx="120" cy="560" r="160" stroke="#1E4D3B" strokeOpacity="0.08" strokeWidth="1.5" />

      {/* red principal de lineas en angulo recto */}
      <path d="M40 60 V220 H260 V360" stroke="#1E4D3B" strokeOpacity="0.4" strokeWidth="1.5" />
      <path d="M260 360 H620 V160" stroke="#1E4D3B" strokeOpacity="0.4" strokeWidth="1.5" />
      <path d="M620 160 H900 V300" stroke="#1E4D3B" strokeOpacity="0.32" strokeWidth="1.5" />
      <path d="M900 300 L1000 220" stroke="#1E4D3B" strokeOpacity="0.28" strokeWidth="1.5" />
      <path d="M260 360 V540 H460" stroke="#1E4D3B" strokeOpacity="0.24" strokeWidth="1.5" />
      <path d="M460 540 V620" stroke="#1E4D3B" strokeOpacity="0.2" strokeWidth="1.5" />
      <path
        d="M620 160 V60"
        stroke="#1E4D3B"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      <path
        d="M900 300 V460 H1080"
        stroke="#1E4D3B"
        strokeOpacity="0.18"
        strokeWidth="1.5"
        strokeDasharray="2 7"
        strokeLinecap="round"
      />
      <path d="M1080 460 V600" stroke="#1E4D3B" strokeOpacity="0.16" strokeWidth="1.5" />

      {/* nodo mostaza — acento principal */}
      <circle cx="260" cy="360" r="30" stroke="#E2AB44" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="260" cy="360" r="10" fill="#E2AB44" />

      {/* nodo mostaza secundario, mas chico */}
      <circle cx="900" cy="300" r="16" stroke="#E2AB44" strokeOpacity="0.4" strokeWidth="1.5" />
      <circle cx="900" cy="300" r="5" fill="#E2AB44" />

      {/* nodos huecos */}
      <circle cx="40" cy="60" r="6" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.5" />
      <circle cx="620" cy="160" r="7" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.5" />
      <circle cx="1000" cy="220" r="5" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.5" />
      <circle cx="460" cy="540" r="6" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.5" />
      <circle cx="1080" cy="460" r="6" fill="#F6F4ED" stroke="#1E4D3B" strokeWidth="1.5" />

      {/* puntos solidos secundarios */}
      <circle cx="260" cy="220" r="4" fill="#1E4D3B" fillOpacity="0.5" />
      <circle cx="620" cy="360" r="4" fill="#9CAE9F" />
      <circle cx="460" cy="620" r="4" fill="#9CAE9F" />
      <circle cx="1080" cy="600" r="4" fill="#9CAE9F" />
    </svg>
  );
}
