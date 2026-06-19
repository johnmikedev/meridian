import { useEffect } from 'react'

/**
 * Adds `.is-visible` to every `.reveal` element when it scrolls into view.
 * Runs once on mount; respects prefers-reduced-motion (elements are shown
 * immediately via CSS, so no observer work is needed in that case).
 */
export default function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const els = Array.from(document.querySelectorAll('.reveal'))

    if (prefersReduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
