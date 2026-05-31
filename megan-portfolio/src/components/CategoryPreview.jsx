import './CategoryPreview.css'

export default function CategoryPreview({ images = [], label, onView }) {
  return (
    <div className="category-preview" onClick={onView} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onView() }}>
      <div className="category-preview__grid">
        {Array.from({ length: 4 }).map((_, i) => {
          const img = images[i]
          return (
            <div key={i} className={`category-preview__cell category-preview__cell--${i}`}>
              {img ? (
                <>
                  <img src={img.src} alt={img.alt || ''} loading="lazy" />
                  <div className="category-preview__cell-label">{label}</div>
                </>
              ) : (
                <div className="category-preview__placeholder">
                  <div className="category-preview__cell-label">{label}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
