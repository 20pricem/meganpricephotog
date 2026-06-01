import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import './App.css'
import GalleryPage from './pages/GalleryPage'
import sectionImages,{highlights} from './lib/sections'

const sections = [
  {
    id: 'portraits',
    label: 'PORTRAITS',
    title: 'Portrait Photography',
    handLabel: 'weddings, grads & more',
    accent: '#4b1540',
    images: sectionImages.portraits || [],
  },
  {
    id: 'concerts',
    label: 'CONCERTS',
    title: 'Concert Photography',
    handLabel: 'live music & festivals',
    accent: '#7a6652',
    images: sectionImages.concerts || [],
  },
  {
    id: 'creative',
    label: 'CREATIVE',
    title: 'Creative Shoots',
    handLabel: 'fashion & narrative',
    accent: '#9c6b4e',
    images: sectionImages.stylized || [],
  },
  {
    id: 'graphics',
    label: 'GRAPHICS',
    title: 'Graphics',
    handLabel: 'design & composites',
    accent: '#6b7c5e',
    images: sectionImages.graphics || [],
  },
]

export default function App() {
  return (
    <div className="app">
      <Nav sections={sections} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery/:sectionId" element={<GalleryPage sections={sections} highlights={highlights} />} />
      </Routes>
      <Footer />
    </div>
  )
}
