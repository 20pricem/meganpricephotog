import { useNavigate } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  const navigate = useNavigate()
  return (
    <section className="hero">

      <div className="hero__content">
        <p className="hero__hand-top">photography & design ✦</p>

        <h1 className="hero__title">
          <span className="hero__title-serif">Megan</span>
          <span className="hero__title-serif">Price</span>
        </h1>

        <div className="hero__cta-row">
          <button
            className="hero__btn"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            see my work ↓
          </button>
          <button className="hero__link" onClick={() => navigate('/about')}>about me →</button>
        </div>
      </div>

    </section>
  )
}
