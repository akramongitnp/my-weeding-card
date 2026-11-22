import { useEffect, useRef, useState } from 'react'
import CelestialMark from '../../components/CelestialMark'
import Countdown from '../../components/Countdown'
import Ornament from '../../components/Ornament'
import CelebrationIcon from '../../components/CelebrationIcon'
import { invitation } from '../../data/invitation'
import { useParticleCanvas } from '../../hooks/useParticleCanvas'
import { useReveal } from '../../hooks/useReveal'

export default function InvitationPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 700px)').matches)
  const cardRef = useRef(null)
  const canvasRef = useParticleCanvas()
  useReveal(isOpen, cardRef)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)')
    const updateVideoSource = (event) => setIsMobile(event.matches)
    mediaQuery.addEventListener('change', updateVideoSource)
    return () => mediaQuery.removeEventListener('change', updateVideoSource)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? '' : 'hidden'
  }, [isOpen])

  const openInvitation = () => {
    setIsOpen(true)
    document.documentElement.style.overflow = ''
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <canvas ref={canvasRef} id="fx" aria-hidden="true" />
      <section className={`cover${isOpen ? ' open' : ''}`} aria-label="Invitation cover">
        <video
          key={isMobile ? 'mobile' : 'desktop'}
          className="cover-video"
          src={isMobile ? '/cover-mobile.mp4' : '/cover-desktop.mp4'}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/Akram_Tamanna_cover.jpeg"
          aria-hidden="true"
        />
        <div className="cover-shade" aria-hidden="true" />
        {[10, 84, 18, 80, 48, 6, 92].map((left, index) => (
          <i
            key={index}
            className="spark"
            style={{ left: `${left}%`, top: `${[14, 20, 72, 78, 8, 46, 50][index]}%`, animationDelay: `${index * 0.4}s` }}
          />
        ))}
        <div className="moon"><CelestialMark /></div>
        <div className="bismillah">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
        <div className="cover-names">
          {invitation.couple[0]}<span>&amp;</span>{invitation.couple[1]}
        </div>
        <p className="small">Wedding Reception · 31 Jan 2027</p>
        <button className="open-button" type="button" onClick={openInvitation}>Open Invitation</button>
      </section>

      <main className="card" ref={cardRef}>
        <div className="inner">
          <div className="bismillah rv">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
          <div className="small rv">With the blessings of Allah</div>
          <p className="small invitation-lead rv">You are warmly invited to the wedding reception of</p>
          <div className="names rv">{invitation.couple[0]}<span>&amp;</span>{invitation.couple[1]}</div>

          <p className="verse rv" dir="rtl">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
          <p className="translation rv">
            “And among His signs is that He created for you spouses, that you may find tranquility in them, and placed between you love and mercy.” — Quran 30:21
          </p>

          <Ornament />
          <section className="families rv" aria-label="Wedding families">
            {invitation.families.map((family) => (
              <div key={family.label}>
                <b>{family.label}</b>
                <h3>{family.name}</h3>
                <p>{family.parents}</p>
                <p>{family.location}</p>
              </div>
            ))}
          </section>

          <Ornament />
          <h2 className="big rv">Wedding Reception</h2>
          <div className="date rv">{invitation.receptionDate}</div>
          <div className="slot rv"><span>Reception</span><strong>{invitation.receptionTime}</strong></div>
          <Countdown targetIso={invitation.countdownTarget} />
          <p className="foot rv">Venue: Duadanda, Khanakul, Hooghly</p>
          <a className="open-button directions rv" href={invitation.directionUrl} target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">📍</span> Get Directions
          </a>

          <Ornament />
          <h2 className="rv">Other Celebrations</h2>
          <p className="small rv">January 2027</p>
          <section aria-label="Celebration schedule">
            {invitation.celebrations.map((celebration, index) => (
              <div className={`event ${index % 2 ? 'right' : 'left'} rv`} key={celebration.title}>
                <div className="event-icon"><CelebrationIcon type={celebration.type} /></div>
                <div>
                  <h3>{celebration.title}</h3>
                  <p>{celebration.date}</p>
                  <b>{celebration.time}</b>
                </div>
              </div>
            ))}
          </section>

          <Ornament />
          <p className="foot rv">Your presence and duas will make our day complete.</p>
          <div className="dua rv">بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْر</div>
          <p className="small final-note rv">With love from the families</p>
        </div>
      </main>
    </>
  )
}
