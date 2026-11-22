import { useEffect, useRef } from 'react'

export function useParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = canvas.getContext('2d')
    let width = 0
    let height = 0
    let frameId
    const particles = Array.from({ length: 38 }, () => ({
      x: 0, y: 0, radius: 2 + Math.random() * 4, speed: 0.3 + Math.random() * 0.8,
      angle: Math.random() * 6.28, sway: 0.01 + Math.random() * 0.02,
      opacity: 0.25 + Math.random() * 0.5,
    }))

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      particles.forEach((particle) => {
        if (!particle.x && !particle.y) {
          particle.x = Math.random() * width
          particle.y = Math.random() * height
        }
      })
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      particles.forEach((particle) => {
        particle.y += particle.speed
        particle.angle += particle.sway
        particle.x += Math.sin(particle.angle) * 0.6
        if (particle.y > height + 10) {
          particle.y = -10
          particle.x = Math.random() * width
        }
        context.save()
        context.translate(particle.x, particle.y)
        context.rotate(particle.angle)
        context.globalAlpha = particle.opacity
        context.fillStyle = '#f1d98a'
        context.beginPath()
        context.ellipse(0, 0, particle.radius, particle.radius * 0.55, 0, 0, 6.28)
        context.fill()
        context.restore()
      })
      frameId = window.requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw()
    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return canvasRef
}
