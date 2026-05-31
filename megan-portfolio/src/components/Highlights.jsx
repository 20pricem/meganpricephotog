import { useEffect, useRef } from 'react'
import PhotoGrid from './PhotoGrid'
import './Highlights.css'

function formatAltText(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .trim()
}

const HIGHLIGHT_IMAGES = Object.entries(
  import.meta.glob('../assets/highlights/*.{jpg,jpeg,png}', { eager: true, query: '?url', import: 'default' })
)
  .map(([path, url]) => ({
    src: url,
    alt: formatAltText(path.replace(/^.*[\\/]/, '')),
  }))
  .sort((a, b) => a.src.localeCompare(b.src))



export default function Highlights({ onVisible, images = HIGHLIGHT_IMAGES }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && typeof onVisible === 'function') onVisible('highlights')
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [onVisible])

  return (
    <section id="highlights" ref={ref} className="highlights">
      <div className="highlights__inner">
        <div className="highlights__header">
          <div className="highlights__label-wrap">
          </div>
          <h2 className="highlights__title">
            <span className="highlights__title-serif">Highlights</span>
            <span className="highlights__title-hand">✦</span>
          </h2>
        </div>
        <PhotoGrid images={images} accent="#4b1540" variant="highlights" />
      </div>
    </section>
  )
}
