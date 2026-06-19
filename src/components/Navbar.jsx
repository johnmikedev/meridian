import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#story', label: 'Story' },
  { href: '#coffee', label: 'Coffee' },
  { href: '#pricing', label: 'Subscriptions' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#top" onClick={close}>
          <span className="nav__mark" aria-hidden="true" />
          <span className="nav__brand-text">
            Meridian<span className="nav__brand-sub">Coffee Roasters</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#pricing" className="btn btn--primary nav__cta">
          Subscribe
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={`nav__drawer ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <nav className="nav__drawer-links" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#pricing" className="btn btn--primary" onClick={close}>
          Subscribe
        </a>
      </div>
      <button
        className={`nav__scrim ${open ? 'is-open' : ''}`}
        tabIndex={-1}
        aria-hidden="true"
        onClick={close}
      />
    </header>
  )
}
