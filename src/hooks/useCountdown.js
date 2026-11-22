import { useEffect, useState } from 'react'

export function useCountdown(targetIso) {
  const calculate = () => {
    const remaining = new Date(targetIso).getTime() - Date.now()
    if (remaining <= 0) return null
    return {
      days: Math.floor(remaining / 86400000),
      hours: Math.floor((remaining % 86400000) / 3600000),
      minutes: Math.floor((remaining % 3600000) / 60000),
      seconds: Math.floor((remaining % 60000) / 1000),
    }
  }

  const [countdown, setCountdown] = useState(calculate)

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(calculate()), 1000)
    return () => window.clearInterval(timer)
  }, [targetIso])

  return countdown
}
