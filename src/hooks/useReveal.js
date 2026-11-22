import { useEffect } from 'react'

export function useReveal(enabled, containerRef) {
  useEffect(() => {
    if (!enabled || !containerRef.current) return
    const elements = containerRef.current.querySelectorAll('.rv')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('in'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.15 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [enabled, containerRef])
}
