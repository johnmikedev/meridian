# Meridian Coffee Roasters

A polished, fully responsive marketing site for a fictional small-batch coffee
roastery. Built as a portfolio piece to demonstrate front-end development with
**React + Vite** and **hand-written, custom CSS** (no Tailwind, no UI kit).

> Live demo: _add your Vercel URL here after deploying_

## ✦ What's inside

- **Hero** with headline, dual CTAs, live "roasting today" badge, and an
  animated origins marquee
- **Story / About** section with an image collage and brand values
- **Coffee grid** — six single-origin cards, each with a custom **roast-level
  meter** (the signature UI element), tasting notes, and origin data
- **Testimonials** from cafés, chefs, and home brewers
- **Subscriptions / pricing** — three tiers with a highlighted "most popular"
  plan
- **Contact form** — front-end only, with live validation, accessible error
  messaging, and a "message sent" confirmation state
- **Footer** with navigation, social links, and a newsletter input

### Design & engineering notes

- Custom design system in `src/index.css` (CSS variables for color, type,
  spacing, motion) — no frameworks
- Type pairing: **Fraunces** (display) · **Hanken Grotesk** (body) ·
  **Space Mono** (data labels)
- Fully responsive across mobile / tablet / desktop using CSS Grid, Flexbox,
  and `clamp()` fluid typography
- Smooth-scroll anchor navigation with a sticky, scroll-aware header and a
  mobile drawer
- Subtle, intentional motion: hover micro-interactions plus an
  `IntersectionObserver` scroll-reveal — all gated behind
  `prefers-reduced-motion`
- Accessibility: skip link, visible keyboard focus, ARIA on the menu and form,
  semantic landmarks
- Remote images degrade gracefully — if an Unsplash URL ever fails, a
  self-contained on-brand SVG placeholder is shown instead (see
  `src/components/SmartImage.jsx`)

## ✦ Project structure

```
meridian/
├── index.html              # entry HTML + Google Fonts
├── vite.config.js
├── vercel.json             # explicit Vite build settings (optional)
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # React root
    ├── App.jsx             # composes all sections
    ├── index.css           # design tokens + global styles
    ├── data.js             # coffees, testimonials, pricing content
    ├── hooks/
    │   └── useReveal.js     # scroll-reveal hook
    └── components/          # one component + one stylesheet per section
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Coffee.jsx / .css
        ├── Testimonials.jsx / .css
        ├── Pricing.jsx / .css
        ├── Contact.jsx / .css
        ├── Footer.jsx / .css
        └── SmartImage.jsx
```

## ✦ Run it locally

You'll need **Node.js 18+** and npm.

```bash
# 1. install dependencies
npm install

# 2. start the dev server (hot reload)
npm run dev
# → open the printed URL, usually http://localhost:5173

# 3. build for production
npm run build         # outputs to /dist

# 4. preview the production build locally
npm run preview
```

## ✦ Deploy to Vercel

This project is zero-config on Vercel — it auto-detects Vite. Pick either path.

### Option A — GitHub (recommended, gives you auto-deploys)

1. Create a new repo on GitHub and push this project:
   ```bash
   git init
   git add .
   git commit -m "Meridian Coffee Roasters"
   git branch -M main
   git remote add origin https://github.com/<you>/meridian.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Leave every field at its default — Vercel detects the Vite preset:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. You'll get a live URL in ~30 seconds, and every future
   `git push` redeploys automatically.

### Option B — Vercel CLI (fastest one-off)

```bash
npm i -g vercel
vercel          # first run: log in + answer the prompts (accept defaults)
vercel --prod   # promote to a production URL
```

Accept the detected defaults when prompted; no custom settings are needed.

---

Images courtesy of [Unsplash](https://unsplash.com). All copy and the
"Meridian Coffee Roasters" brand are fictional, created for this demo.
