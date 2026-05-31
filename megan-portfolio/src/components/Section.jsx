import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryPreview from './CategoryPreview'
import './Section.css'

export default function Section({ section, index, onVisible }) {
  const ref = useRef(null)
  const navigate = useNavigate()
  const isEven = index % 2 === 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(section.id) },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [section.id, onVisible])

  const handleViewGallery = () => {
    navigate(`/gallery/${section.id}`)
  }

  return (
    <section
      id={section.id}
      ref={ref}
      className={`section section--${isEven ? 'even' : 'odd'}`}
      style={{ '--sect-accent': section.accent }}
    >
      {/* Background blob per section */}
      <div className="section__blob" />

      <div className="section__inner">
        <div className={`section__layout section__layout--${isEven ? 'normal' : 'reverse'}`}>

          {/* Text side */}
          <div className="section__text">
            <span className="section__index-hand">0{index + 1}</span>
            <p className="section__hand-sub">{section.handLabel}</p>
            <h2 className="section__title">{section.title}</h2>
            <button className="section__cta" onClick={handleViewGallery}>
              view gallery
              <span className="section__cta-arrow">→</span>
            </button>
          </div>

          {/* Photo side */}
          <div className="section__gallery">
            <CategoryPreview
              images={(section.images ?? []).slice(0, 4)}
              label={section.label}
              onView={() => navigate(`/gallery/${section.id}`)}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
