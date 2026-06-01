import './Footer.css'

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer__blob" />
      <div className="footer__inner">
        <div className="footer__top">
          <div className="about__links">
            <p className="footer__tagline">LET'S WORK TOGETHER</p>
            <a
              href={`https://instagram.com/meganpricephotog`}
              target="_blank"
              rel="noreferrer"
              className="about__link about__link--insta"
            >
              <svg className="about__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              @meganpricephotog
            </a>
            <a
              href={`mailto:20pricem@gmail.com`}
              className="footer__link footer__link--email"
            >
              <svg className="about__link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
              20pricem@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
