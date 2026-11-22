export default function CelestialMark() {
  return (
    <svg viewBox="0 0 220 90" aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff3c4" />
          <stop offset="1" stopColor="#c9a227" />
        </linearGradient>
        <linearGradient id="lnL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d4af37" stopOpacity="0" />
          <stop offset="1" stopColor="#d4af37" />
        </linearGradient>
        <linearGradient id="lnR" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d4af37" />
          <stop offset="1" stopColor="#d4af37" stopOpacity="0" />
        </linearGradient>
        <mask id="cm">
          <rect width="220" height="90" fill="#fff" />
          <circle cx="121" cy="38" r="25" fill="#000" />
        </mask>
      </defs>
      <circle cx="105" cy="45" r="30" fill="url(#lg)" mask="url(#cm)" />
      <polygon points="132,29 133.7,33.65 138.66,33.84 134.76,36.9 136.11,41.66 132,38.9 127.89,41.66 129.24,36.9 125.34,33.84 130.3,33.65" fill="url(#lg)" />
      <path d="M6 45H62" stroke="url(#lnL)" strokeWidth="1.2" />
      <path d="M158 45H214" stroke="url(#lnR)" strokeWidth="1.2" />
      <path d="M68 45l4 4-4 4-4-4zM152 45l4 4-4 4-4-4z" fill="#d4af37" />
    </svg>
  )
}
