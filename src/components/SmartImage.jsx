import { useState } from 'react'

// Inline SVG data-URI used if a remote (Unsplash) image fails to load,
// so the layout never shows a broken-image icon. On-brand espresso/ember.
const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
      <rect width="900" height="900" fill="#2c2118"/>
      <ellipse cx="450" cy="450" rx="150" ry="210" fill="#dd6b3d"/>
      <path d="M450 270c-42 64-42 326 0 390" stroke="#2c2118" stroke-width="34" fill="none" stroke-linecap="round"/>
      <text x="450" y="760" fill="#a8978a" font-family="monospace" font-size="30" text-anchor="middle" letter-spacing="6">MERIDIAN</text>
    </svg>`
  )

export default function SmartImage({ src, alt, className, loading = 'lazy' }) {
  const [imgSrc, setImgSrc] = useState(src)
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        if (imgSrc !== FALLBACK) setImgSrc(FALLBACK)
      }}
    />
  )
}
