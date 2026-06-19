import { useState } from 'react'
import './Contact.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initial = { name: '', email: '', topic: 'Subscriptions', message: '' }

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const validate = (vals) => {
    const next = {}
    if (!vals.name.trim()) next.name = 'Please tell us your name.'
    if (!vals.email.trim()) next.email = 'We need an email to reply.'
    else if (!EMAIL_RE.test(vals.email.trim()))
      next.email = 'That email doesn’t look right.'
    if (vals.message.trim().length < 10)
      next.message = 'A little more detail helps — at least 10 characters.'
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(nextValues)[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, email: true, message: true })
    if (Object.keys(found).length > 0) return

    // Front-end only: simulate a network request, then confirm.
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 900)
  }

  const reset = () => {
    setValues(initial)
    setErrors({})
    setTouched({})
    setStatus('idle')
  }

  return (
    <section className="section section--light contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__intro reveal">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">
            Wholesale, custom roasts, or just a question.
          </h2>
          <p className="section-lead">
            Tell us what you&rsquo;re after and we&rsquo;ll get back within one
            business day. For café and restaurant accounts, mention your volume
            and we&rsquo;ll put together samples.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__details-k">Roastery</span>
              218 Kiln Row, Eastside
            </li>
            <li>
              <span className="contact__details-k">Hours</span>
              Tue–Sun · 8am – 4pm
            </li>
            <li>
              <span className="contact__details-k">Email</span>
              hello@meridianroasters.coffee
            </li>
          </ul>
        </div>

        <div className="contact__form-wrap reveal">
          {status === 'sent' ? (
            <div className="contact__success" role="status" aria-live="polite">
              <span className="contact__success-mark" aria-hidden="true">
                <svg width="34" height="34" viewBox="0 0 34 34">
                  <path
                    d="M8 17.5l6 6 12-13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3>Message on its way</h3>
              <p>
                Thanks, {values.name.split(' ')[0] || 'there'} — your note
                landed in our inbox. We&rsquo;ll reply to{' '}
                <strong>{values.email}</strong> within a business day.
              </p>
              <button className="btn btn--ghost" onClick={reset}>
                <span className="btn-label">Send another</span>
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name ? 'has-error' : ''}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-err' : undefined}
                  placeholder="Jordan Reyes"
                />
                {errors.name && (
                  <span className="field__error" id="name-err">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email ? 'has-error' : ''}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-err' : undefined}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <span className="field__error" id="email-err">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="field">
                <label htmlFor="topic">What&rsquo;s it about?</label>
                <div className="select-wrap">
                  <select
                    id="topic"
                    name="topic"
                    value={values.topic}
                    onChange={handleChange}
                  >
                    <option>Subscriptions</option>
                    <option>Wholesale &amp; cafés</option>
                    <option>Custom &amp; private-label roasts</option>
                    <option>Something else</option>
                  </select>
                  <span className="select-wrap__chev" aria-hidden="true">
                    ▾
                  </span>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message ? 'has-error' : ''}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-err' : undefined}
                  placeholder="Tell us a little about what you need…"
                />
                {errors.message && (
                  <span className="field__error" id="message-err">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn--primary contact__submit"
                disabled={status === 'sending'}
              >
                <span className="btn-label">
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </span>
                {status !== 'sending' && (
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
