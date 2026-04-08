# TASKS.md — Portfolio Improvement Roadmap

Scoring baseline from audit (2026-04-08). Target: 10/10 on all five axes.

---

## 1. Performance & Core Web Vitals (7 → 10)

- [x] **P1** Add a real branded favicon — `public/favicon.svg` with SV initials; `index.html` updated
- [x] **P1** Delete unused PNG originals from `public/img/` (`perfume.png`, `morning.png`, `plant.png`, `climbing.png`, `multilingual.png`, `chess.png`) — deleted
- [x] **P2** Add Google Analytics (GA4) — gtag snippet added to `index.html`; replace `G-XXXXXXXXXX` with real Measurement ID
- [x] **P2** Generate AVIF versions of all images alongside WebP; `<picture>` elements in `Hero.jsx` and `FunFacts.jsx` serve AVIF first with WebP fallback
- [x] **P3** Audit `scripts/prerender.js` — removed dead `/chess-coaching` route; simplified to home-only
- [x] **P3** Remove unused hero image variants (`hero-profile.jpg`, `hero-profile.webp`, `hero-profile-medium.webp`, `hero-profile-small.webp`) — deleted

---

## 2. Machine Experience / AI Readiness (6 → 10)

- [x] **P1** Fix `index.html` lang attribute — currently hardcoded `lang="en"`. Change to `lang="hu"` to match the default language, avoiding mismatch before React hydrates
- [x] **P1** Add semantic HTML wrappers — `<header>` around `<Navbar>`, `<footer>` around `<Footer>` in `src/pages/Home.jsx`; ensure sections use `<section>` with meaningful `id` attributes
- [x] **P2** Expand JSON-LD Person schema in `Home.jsx` — add `alumniOf` (Corvinus), `knowsLanguage` (Hungarian, English, Japanese), `hasOccupation` entries
- [x] **P2** Create `public/llms.txt` — emerging 2025/2026 convention; a plain-text summary of who Salvador is for AI crawlers
- [x] **P3** Verify sitemap URLs match deployed routes after chess removal — regenerate sitemap

---

## 3. Accessibility / A11y (5 → 10)

- [x] **P1** Fix color contrast — `--color-text-primary: #6B8C9E` on `--color-bg: #F3F3E9` is ~3.5:1, fails WCAG AA. Darken to at least `#4F6E80` or adjust background
- [x] **P1** Add `id`/`htmlFor` pairing to all form inputs in `Contact.jsx` — currently labels and inputs are visually paired but not semantically linked
- [x] **P1** Replace `alert()` calls in `Contact.jsx` — use inline error state rendered in the UI with specific per-field messages
- [x] **P1** Convert calendar day `<div>` cells to `<button>` elements in `Contact.jsx` — currently unreachable by keyboard and invisible to screen readers
- [x] **P2** Add `:focus-visible` styles to `src/index.css` for all interactive elements (links, buttons, inputs) — keyboard users currently have no visible focus indicator
- [x] **P2** Add `aria-label` to social icon links in `Contact.jsx` (Phone, Mail, LinkedIn, GitHub icons have no text alternative)
- [x] **P2** Sanitize the catch block error message in `Contact.jsx` — currently exposes raw API error strings to the user

---

## 4. User Experience / UX (7 → 10)

- [x] **P1** Fix LinkedIn and GitHub links in `Contact.jsx` — updated to `https://linkedin.com/in/salvador-villarroel` and `https://github.com/VHSalvador`
- [x] **P1** Add `prefers-color-scheme: dark` media query to `src/index.css` with a dark palette — warm dark palette added
- [x] **P2** Improve mobile calendar UX in `Contact.jsx` — contact-form-grid collapses to 1 column at 900px (was 768px)
- [x] **P2** Add Google Analytics (shared with Performance P2 above)
- [x] **P3** Add a `#work` anchor to the correct section — `Experience.jsx` already had `id="work"` on the section

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
