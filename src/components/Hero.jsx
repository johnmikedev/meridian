import SmartImage from './SmartImage'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow reveal">Est. 2014 · Roasted to order</p>
          <h1 className="hero__title reveal">
            Coffee with a<br />
            <span className="hero__title-accent">place of origin.</span>
          </h1>
          <p className="hero__lead reveal">
            We roast single-origin lots in small batches the week they ship —
            so what reaches your grinder still tastes like the farm it came
            from. No mystery blends, no stale shelf time.
          </p>
          <div className="hero__actions reveal">
            <a href="#coffee" className="btn btn--primary">
              <span className="btn-label">Shop the roast</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a href="#story" className="btn btn--ghost">
              <span className="btn-label">Our story</span>
            </a>
          </div>

          <dl className="hero__stats reveal">
            <div>
              <dt>Origins on rotation</dt>
              <dd>12</dd>
            </div>
            <div>
              <dt>Days bean-to-door</dt>
              <dd>3</dd>
            </div>
            <div>
              <dt>Batch size, max</dt>
              <dd>15kg</dd>
            </div>
          </dl>
        </div>

        <div className="hero__media reveal">
          <SmartImage
            src="https://images.unsplash.com/photo-1559525839-d9a609fdbf9e?auto=format&fit=crop&w=1100&q=80"
            alt="Fresh roasted coffee beans tumbling from a small-batch roaster"
            loading="eager"
            className="hero__img"
          />
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Roasting today
            <strong>Yirgacheffe Konga</strong>
          </div>
        </div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              Kenya&nbsp;·&nbsp;Ethiopia&nbsp;·&nbsp;Colombia&nbsp;·&nbsp;Costa
              Rica&nbsp;·&nbsp;Brazil&nbsp;·&nbsp;Guatemala&nbsp;·&nbsp;Rwanda&nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
