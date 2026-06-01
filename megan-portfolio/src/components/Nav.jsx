import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Nav.css'
import logo from '../assets/logo.png'

export default function Nav({ sections }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handlePortfolioNav = (id) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        navigate(`/gallery/${id}`)
      }, 100)
    } else {
      navigate(`/gallery/${id}`)
    }
  }

  const allLinks = sections

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}${menuOpen ? ' nav--open' : ''}`}>
      <button className="nav__logo" onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        <img className="nav__logo-img" src={logo} alt="Megan Price logo" />
      </button>

      <button className="nav__hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>

      <nav className="nav__links">
        {allLinks.map(s => (
          <button
            key={s.id}
            className="nav__link"
            onClick={() => handlePortfolioNav(s.id)}
          >
            {s.label}
          </button>
        ))}
        <button
          className="nav__cta"
          onClick={() => { setMenuOpen(false); navigate('/about') }}
        >
          say hello
        </button>
      </nav>
    </header>
  )
}
