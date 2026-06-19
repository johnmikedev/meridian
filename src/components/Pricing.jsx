import { plans } from '../data'
import './Pricing.css'

function Check() {
  return (
    <svg
      className="plan__check"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <path
        d="M3.5 9.5l3.2 3.2L14.5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section className="section section--dark pricing" id="pricing">
      <div className="container">
        <header className="pricing__head reveal">
          <p className="eyebrow">Subscriptions</p>
          <h2 className="section-title">Fresh coffee on a schedule.</h2>
          <p className="section-lead">
            Pick a rhythm, not a contract. Skip, pause, or change tiers from
            your account whenever you like — every plan ships free over $35.
          </p>
        </header>

        <ul className="pricing__grid">
          {plans.map((p) => (
            <li
              className={`plan reveal ${p.featured ? 'plan--featured' : ''}`}
              key={p.id}
            >
              {p.featured && <span className="plan__tag">Most popular</span>}
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__blurb">{p.blurb}</p>

              <div className="plan__price">
                <span className="plan__amount">${p.price}</span>
                <span className="plan__cadence">/ {p.cadence}</span>
              </div>

              <ul className="plan__features">
                {p.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn ${
                  p.featured ? 'btn--primary' : 'btn--ghost'
                } plan__cta`}
              >
                <span className="btn-label">{p.cta}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="pricing__foot reveal">
          Prefer to buy bags one at a time? Every lot on the table is available
          as a single purchase, no subscription required.
        </p>
      </div>
    </section>
  )
}
