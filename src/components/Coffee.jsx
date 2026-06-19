import SmartImage from './SmartImage'
import { coffees } from '../data'
import './Coffee.css'

const ROAST_LABELS = ['Light', 'Med-light', 'Medium', 'Med-dark', 'Dark']

function RoastMeter({ level }) {
  return (
    <div className="roast" aria-label={`Roast level: ${ROAST_LABELS[level]}`}>
      <div className="roast__head">
        <span>Roast</span>
        <span className="roast__value">{ROAST_LABELS[level]}</span>
      </div>
      <div className="roast__track" role="presentation">
        {ROAST_LABELS.map((_, i) => (
          <span
            key={i}
            className={`roast__node ${i <= level ? 'is-on' : ''} ${
              i === level ? 'is-current' : ''
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Coffee() {
  return (
    <section className="section section--dark coffee" id="coffee">
      <div className="container">
        <header className="coffee__head reveal">
          <div>
            <p className="eyebrow">The current table</p>
            <h2 className="section-title">This season&rsquo;s lots</h2>
          </div>
          <p className="coffee__head-lead">
            Six coffees on rotation right now. Each one is roasted to its own
            profile — the meter shows where it lands, the notes are what we
            tasted on the cupping table.
          </p>
        </header>

        <ul className="coffee__grid">
          {coffees.map((c) => (
            <li className="coffee-card reveal" key={c.id}>
              <div className="coffee-card__media">
                <SmartImage
                  src={c.image}
                  alt={`${c.name} — ${c.origin}`}
                  className="coffee-card__img"
                />
                <span className="coffee-card__price">${c.price}</span>
              </div>

              <div className="coffee-card__body">
                <div className="coffee-card__meta">
                  <span>{c.origin}</span>
                  <span aria-hidden="true">·</span>
                  <span>{c.altitude}</span>
                </div>
                <h3 className="coffee-card__name">{c.name}</h3>

                <ul className="coffee-card__notes">
                  {c.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>

                <div className="coffee-card__process">
                  <span className="coffee-card__process-k">Process</span>
                  {c.process}
                </div>

                <RoastMeter level={c.roast} />

                <a href="#contact" className="link-arrow coffee-card__cta">
                  Add to order
                  <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
