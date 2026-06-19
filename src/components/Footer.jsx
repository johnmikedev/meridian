import './Footer.css'

const nav = {
  Coffee: [
    { label: 'This season’s lots', href: '#coffee' },
    { label: 'Subscriptions', href: '#pricing' },
    { label: 'Brew guides', href: '#story' },
    { label: 'Wholesale', href: '#contact' },
  ],
  Roastery: [
    { label: 'Our story', href: '#story' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit us', href: '#contact' },
    { label: 'Careers', href: '#contact' },
  ],
}

const socials = ['Instagram', 'TikTok', 'YouTube', 'Newsletter']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="footer__logo" href="#top">
            <span className="footer__mark" aria-hidden="true" />
            Meridian
          </a>
          <p className="footer__tag">
            Small-batch, single-origin coffee, roasted to order on the east
            side since 2014.
          </p>
          <form
            className="footer__news"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <input
              type="email"
              placeholder="Email for new lots"
              aria-label="Email address"
            />
            <button type="submit" aria-label="Sign up">
              →
            </button>
          </form>
        </div>

        <div className="footer__cols">
          {Object.entries(nav).map(([heading, items]) => (
            <nav key={heading} aria-label={heading}>
              <h4>{heading}</h4>
              <ul>
                {items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href}>{it.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <nav aria-label="Social">
            <h4>Follow</h4>
            <ul>
              {socials.map((s) => (
                <li key={s}>
                  <a href="#top">{s}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="container footer__bar">
        <span>© {new Date().getFullYear()} Meridian Coffee Roasters</span>
        <span className="footer__bar-links">
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
          <a href="#top">Shipping</a>
        </span>
        <span className="footer__credit">Built with React + Vite</span>
      </div>
    </footer>
  )
}
