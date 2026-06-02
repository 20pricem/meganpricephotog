import { useEffect } from 'react'
import './ImageModal.css'

export default function ImageModal({ image, bandName, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  if (!isOpen || !image) return null

  return (
    <div className="image-modal" onClick={onClose}>
      <button className="image-modal__close" onClick={onClose} aria-label="Close fullscreen">
        ✕
      </button>
      <div className="image-modal__content" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} className="image-modal__img" />
        {bandName && <p className="image-modal__caption">{bandName}</p>}
      </div>
    </div>
  )
}
