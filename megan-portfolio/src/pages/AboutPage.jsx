import './AboutPage.css'
import photoStrip from '../assets/photostrip.webp'
import skinnyPhotoStrip from '../assets/skinnyphotostrip.webp'

const BIO = {
  name: 'Megan Price',
  photo: photoStrip,
  mobilePhoto: skinnyPhotoStrip,
  photoAlt: 'A photo of me',
  bio: `Hi, I'm Megan :) I'm a photographer based in Chicago. Lets take some cool photos!`,
  instagram: 'meganpricephotog',
  email: '20pricem@gmail.com',
}

export default function AboutPage() {
  return (
    <div className="about">
      {/* Blobs */}
      <div className="about__blob about__blob--1" />
      <div className="about__blob about__blob--2" />

      <div className="about__inner">

        {/* Left column — photo */}
        <div className="about__photo-col">
          <div className="about__photo-frame">
            {BIO.photo ? (
              <picture className="about__photo-picture">
                <source media="(max-width: 860px)" srcSet={BIO.mobilePhoto} />
                <img src={BIO.photo} alt={BIO.photoAlt} className="about__photo" />
              </picture>
            ) : (
              <div className="about__photo-placeholder">
                <span className="about__photo-hand">add your photo here ✦</span>
                <p className="about__photo-hint">
                  set <code>photo</code> in <code>AboutPage.jsx</code>
                </p>
              </div>
            )}
          </div>

        </div>

        {/* Right column — text */}
        <div className="about__text-col">
          <p className="about__eyebrow">about me ✦</p>
          <h1 className="about__name">{BIO.name}</h1>

          <div className="about__bio">
            {BIO.bio.split('\n').map((line, i) =>
              line.trim() ? <p key={i}>{line.trim()}</p> : null
            )}
          </div>

          <div className="about__links">
            <a
              href={`https://instagram.com/${BIO.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="about__link about__link--insta"
            >
              <svg className="about__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              @{BIO.instagram}
            </a>

            <a
              href={`mailto:${BIO.email}`}
              className="about__link about__link--email"
            >
              <svg className="about__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
              {BIO.email}
            </a>
          </div>

          <a href="#/" className="about__back">← back to portfolio</a>
        </div>

      </div>
    </div>
  )
}
