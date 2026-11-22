export default function CelebrationIcon({ type }) {
  if (type === 'haldi') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 34h48c0 14-10 24-24 24S8 48 8 34z" fill="#c97c2c" />
        <ellipse cx="32" cy="34" rx="24" ry="7" fill="#f6c21a" />
        <ellipse cx="32" cy="32" rx="16" ry="5" fill="#ffd84d" />
        <circle cx="25" cy="45" r="2" fill="#3b2412" /><circle cx="39" cy="45" r="2" fill="#3b2412" />
        <path d="M28 50q4 4 8 0" stroke="#3b2412" strokeWidth="2" fill="none" />
      </svg>
    )
  }
  if (type === 'blessing') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 3v7" stroke="#d4af37" strokeWidth="2" />
        <rect x="24" y="9" width="16" height="6" rx="2" fill="#d4af37" />
        <path d="M22 17h20c6 6 8 22 0 30H22c-8-8-6-24 0-30z" fill="#f08a3c" />
        <rect x="24" y="47" width="16" height="6" rx="2" fill="#d4af37" />
        <circle cx="27" cy="31" r="2" fill="#3b2412" /><circle cx="37" cy="31" r="2" fill="#3b2412" />
        <path d="M28 36q4 4 8 0" stroke="#3b2412" strokeWidth="2" fill="none" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M9 60l2-20q9-7 18 0l2 20z" fill="#7a2f57" />
      <circle cx="20" cy="28" r="8" fill="#f2c9a0" />
      <path d="M33 30a11 13 0 0 1 22 0l1 22H32z" fill="#f4a6c0" />
      <circle cx="44" cy="28" r="8" fill="#f2c9a0" />
      <path d="M32 20c-8-6-10-12-5-14 3-1 5 1 5 3 0-2 2-4 5-3 5 2 3 8-5 14z" fill="#ff5d8f" />
    </svg>
  )
}
