import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import './GalleryPage.css'

export default function GalleryPage({ sections, highlights }) {
  const { sectionId } = useParams()

  const images = useMemo(() => {
    if (sectionId === 'highlights') return highlights
    const section = sections.find((s) => s.id === sectionId)
    return (section?.images ?? [])
  }, [sectionId, sections, highlights])

  return (
    <main className="gallery-page">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={`${image.src}-${index}`} className="gallery-item">
            <img src={image.src} alt={image.alt || ''} loading="lazy" />
          </div>
        ))}
      </div>
    </main>
  )
}
