import SmartImage from './SmartImage'
import './About.css'

export default function About() {
  return (
    <section className="section section--light about" id="story">
      <div className="container about__grid">
        <div className="about__media reveal">
          <SmartImage
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80"
            alt="Roaster checking a tray of cooling coffee beans"
            className="about__img about__img--tall"
          />
          <SmartImage
            src="https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=700&q=80"
            alt="Green and roasted coffee beans side by side"
            className="about__img about__img--small"
          />
          <div className="about__stat">
            <span className="about__stat-num">11</span>
            <span className="about__stat-label">years on the same roaster</span>
          </div>
        </div>

        <div className="about__copy reveal">
          <p className="eyebrow">Our story</p>
          <h2 className="section-title">
            A roaster, a stopwatch, and a stubborn idea.
          </h2>
          <p className="section-lead">
            Meridian started in a borrowed garage with a 1kg sample roaster and
            a notebook full of failed batches. The idea was simple and slightly
            stubborn: treat every lot like it deserves its own recipe.
          </p>
          <p className="about__body">
            We still roast that way. Each origin gets profiled by hand on a
            cast-iron drum roaster, logged crack to crack, and tasted on a
            cupping table before it earns a label. Nothing ships more than a few
            days off the roast, because freshness isn&rsquo;t a marketing word —
            it&rsquo;s the part you can taste.
          </p>

          <ul className="about__values">
            <li>
              <span className="about__values-k">01</span>
              <div>
                <h3>Direct relationships</h3>
                <p>
                  We buy from importers and farms we can name, and we pay above
                  the commodity rate. Every bag lists the farm or co-op.
                </p>
              </div>
            </li>
            <li>
              <span className="about__values-k">02</span>
              <div>
                <h3>Roast to order</h3>
                <p>
                  Batches are scheduled against orders, not stockpiled. Most
                  coffee leaves within 72 hours of the roast.
                </p>
              </div>
            </li>
            <li>
              <span className="about__values-k">03</span>
              <div>
                <h3>Notes you can trust</h3>
                <p>
                  If the bag says blackcurrant, the table tasted blackcurrant.
                  We&rsquo;d rather under-promise the cup.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
