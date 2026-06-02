import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageModal from '../components/ImageModal'
import './GalleryPage.css'

// Band mapping for concert images — extracted from filename
const BAND_MAP = {
  'DSF4376': '',
  'DSF4338': 'Kristiane',
  'DSF4339': 'Kristiane',
  'DSF4341': 'Kristiane',
  'DSF4353': 'Kristiane',
  'DSF4364': 'Kristiane',
  'DSF4440': 'Kristiane',
  'DSF4453': 'Kristiane',
  'DSF4463': 'Kristiane',
  'DSF4668': 'HAFFWAY',
  'DSF4813': 'HAFFWAY',
  'DSF4823': 'HAFFWAY',
  'DSF4909': 'HAFFWAY',
  'DSF4981': 'HAFFWAY',
  'DSF5027': 'HAFFWAY',
  'DSF5047': 'HAFFWAY',
  'DSF5082': 'Frances Softheart',
  'DSF5086': 'Frances Softheart',
  'DSF5093': 'Frances Softheart',
  'DSF5154': 'Ethan Tasch',
  'DSF5174': 'Ethan Tasch',
  'DSF5216': 'Ethan Tasch',
  'DSF5229': 'Ethan Tasch',
  'DSF5283': 'Ethan Tasch',
  'DSF7145': 'Sarah Kinsley',
}

export default function GalleryPage({ sections, highlights }) {
  const { sectionId } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedBandName, setSelectedBandName] = useState(null)
  const [lazyLoadOnMobile, setLazyLoadOnMobile] = useState(true)

  useEffect(() => {
    if (typeof navigator === 'undefined') return

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    const onSlowNetwork = connection?.saveData || ['slow-2g', '2g', '3g'].includes(connection?.effectiveType)
    const onSmallScreen = window.innerWidth <= 700

    setLazyLoadOnMobile(onSlowNetwork || onSmallScreen)
  }, [])

  const images = useMemo(() => {
    if (sectionId === 'highlights') return highlights
    const section = sections.find((s) => s.id === sectionId)
    return (section?.images ?? [])
  }, [sectionId, sections, highlights])

  const getImageLabel = (image) => {
    if (sectionId !== 'concerts') return null
    const filename = image.alt || ''
    for (const [key, band] of Object.entries(BAND_MAP)) {
      if (filename.includes(key)) return band
    }
    return null
  }

  return (
    <>
      <main className="gallery-page">
        <div className="gallery-grid">
          {images.map((image, index) => {
            const bandName = getImageLabel(image)
            return (
              <div
                key={`${image.src}-${index}`}
                className="gallery-item"
                onClick={() => {
                  setSelectedImage(image)
                  setSelectedBandName(bandName)
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt || ''}
                  decoding="async"
                  loading={lazyLoadOnMobile ? 'lazy' : 'eager'}
                />
                {bandName && <span className="gallery-item__label">{bandName}</span>}
              </div>
            )
          })}
        </div>
      </main>

      <ImageModal
        image={selectedImage}
        bandName={selectedBandName}
        isOpen={!!selectedImage}
        onClose={() => {
          setSelectedImage(null)
          setSelectedBandName(null)
        }}
      />
    </>
  )
}
