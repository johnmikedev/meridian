import { testimonials } from '../data'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="section section--light reviews" id="reviews">
      <div className="container">
        <header className="reviews__head reveal">
          <p className="eyebrow">From the table</p>
          <h2 className="section-title">
            Cafés, chefs, and people who&rsquo;d notice if it slipped.
          </h2>
        </header>

        <ul className="reviews__grid">
          {testimonials.map((t, i) => (
            <li className="review reveal" key={t.name} style={{ '--i': i }}>
              <span className="review__quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="review__quote">{t.quote}</blockquote>
              <footer className="review__author">
                <span className="review__avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <span className="review__role">{t.role}</span>
                </span>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
