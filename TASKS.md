# TASKS.md — Portfolio Improvement Roadmap

Scoring baseline from audit (2026-04-08). Target: 10/10 on all five axes.

---

## 1. Performance & Core Web Vitals (7 → 10)

- [ ] **P1** Add a real branded favicon — replace `/vite.svg` reference in `index.html` and add `public/favicon.ico` + `public/favicon.svg`
- [ ] **P1** Delete unused PNG originals from `public/img/` (`perfume.png`, `morning.png`, `plant.png`, `climbing.png`, `multilingual.png`, `chess.png`) — they inflate the deploy but are never served
- [ ] **P2** Add Google Analytics (GA4) — add gtag snippet to `index.html` or via a component; no data currently collected
- [ ] **P2** Generate AVIF versions of all images alongside WebP for ~30% additional size savings; update `srcSet` to serve AVIF first with WebP fallback
- [ ] **P3** Audit `scripts/prerender.js` — verify it produces usable static HTML for the home route; if not, simplify or remove it to avoid false confidence
- [ ] **P3** Remove unused hero image variants (`hero-profile.jpg`, `hero-profile.webp`, `hero-profile-medium.webp`, `hero-profile-small.webp`) if superseded by `-new-` variants

---

## 2. Machine Experience / AI Readiness (6 → 10)

- [ ] **P1** Fix `index.html` lang attribute — currently hardcoded `lang="en"`. Change to `lang="hu"` to match the default language, avoiding mismatch before React hydrates
- [ ] **P1** Add semantic HTML wrappers — `<header>` around `<Navbar>`, `<footer>` around `<Footer>` in `src/pages/Home.jsx`; ensure sections use `<section>` with meaningful `id` attributes
- [ ] **P2** Expand JSON-LD Person schema in `Home.jsx` — add `alumniOf` (Corvinus), `knowsLanguage` (Hungarian, English, Japanese), `hasOccupation` entries
- [ ] **P2** Create `public/llms.txt` — emerging 2025/2026 convention; a plain-text summary of who Salvador is for AI crawlers
- [ ] **P3** Verify sitemap URLs match deployed routes after chess removal — regenerate sitemap

---

## 3. Accessibility / A11y (5 → 10)

- [ ] **P1** Fix color contrast — `--color-text-primary: #6B8C9E` on `--color-bg: #F3F3E9` is ~3.5:1, fails WCAG AA. Darken to at least `#4F6E80` or adjust background
- [ ] **P1** Add `id`/`htmlFor` pairing to all form inputs in `Contact.jsx` — currently labels and inputs are visually paired but not semantically linked
- [ ] **P1** Replace `alert()` calls in `Contact.jsx` — use inline error state rendered in the UI with specific per-field messages
- [ ] **P1** Convert calendar day `<div>` cells to `<button>` elements in `Contact.jsx` — currently unreachable by keyboard and invisible to screen readers
- [ ] **P2** Add `:focus-visible` styles to `src/index.css` for all interactive elements (links, buttons, inputs) — keyboard users currently have no visible focus indicator
- [ ] **P2** Add `aria-label` to social icon links in `Contact.jsx` (Phone, Mail, LinkedIn, GitHub icons have no text alternative)
- [ ] **P2** Sanitize the catch block error message in `Contact.jsx` — currently exposes raw API error strings to the user

---

## 4. User Experience / UX (7 → 10)

- [ ] **P1** Fix LinkedIn and GitHub links in `Contact.jsx` — currently point to `https://linkedin.com` and `https://github.com`; update to actual profile URLs
- [ ] **P1** Add `prefers-color-scheme: dark` media query to `src/index.css` with a dark palette — no dark mode currently exists
- [ ] **P2** Improve mobile calendar UX in `Contact.jsx` — on small screens the two-column form grid (calendar + inputs) is cramped; collapse to single column earlier or redesign the time-picker for mobile
- [ ] **P2** Add Google Analytics (shared with Performance P2 above)
- [ ] **P3** Add a `#work` anchor to the correct section in `Home.jsx` — the Navbar links to `#work` but no section has that id

---

## 5. Security & Trust Signals (6 → 10)

- [ ] **P1** Create `public/_headers` file for GitHub Pages with security headers:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Security-Policy` (permissive initial version, tighten over time)
- [ ] **P1** Add branded favicon (shared with Performance P1 above) — the Vite logo is a trust signal failure
- [ ] **P2** Audit EmailJS public key exposure — it is intentionally public, but ensure the EmailJS dashboard restricts allowed domains to `vhsalvador.github.io`

---

## Already done (2026-04-08)
- [x] Removed chess coaching from main site (routes, Navbar links, translations stripped)
- [x] Chess files preserved in `chess-site/` for future separate deployment
