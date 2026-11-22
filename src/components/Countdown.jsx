import { useCountdown } from '../hooks/useCountdown'

export default function Countdown({ targetIso }) {
  const countdown = useCountdown(targetIso)
  if (!countdown) {
    return <div className="countdown completed">Alhamdulillah, today is the day!</div>
  }
  return (
    <div className="countdown" aria-label="Countdown">
      {Object.entries(countdown).map(([label, value]) => (
        <div key={label}>
          <b>{value}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}
