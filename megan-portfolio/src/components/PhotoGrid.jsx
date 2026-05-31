import './PhotoGrid.css'

const PLACEHOLDER_COUNT = 6

export default function PhotoGrid({ images, accent, variant = 'section' }) {
  const items = images.length > 0
    ? images
    : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({ id: i, placeholder: true }))

  return (
    <div className={`photo-grid photo-grid--${variant}`}>
      {items.map((img, i) => (
        <div
          key={img.id ?? i}
          className={`photo-grid__item photo-grid__item--${i}`}
          style={{ '--accent': accent }}
        >
          {img.placeholder ? (
            <div className="photo-grid__placeholder">
              <span className="photo-grid__placeholder-hand">+ add photo</span>
            </div>
          ) : (
            <>
              <img src={img.src} alt={img.alt || ''} loading="lazy" />
              <div className="photo-grid__overlay" />
            </>
          )}
        </div>
      ))}
    </div>
  )
}
