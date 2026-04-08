# TASKS.md — Portfolio Audit & Improvement Roadmap

Audit date: 2026-04-08. Scores based on five axes: Performance, Machine Experience, Accessibility, UX, Security.

---

## 1. Performance & Core Web Vitals — 8 / 10

### What's working well
- Hero image preloaded via `<link rel="preload">` + `fetchPriority="high"` — LCP well-targeted
- AVIF/WebP with 3-size responsive `srcSet` on every image
- `width`/`height` on `<img>` prevents layout shift (CLS near zero)
- Fonts self-hosted as woff2 with `font-display: swap`, preloaded
- Vite manual chunk splitting: vendor (60KB) + lucide (4KB) + main (224KB)
- CSS is only 8KB

### To do
- [ ] **P2** Main JS bundle is 224KB — large for a namecard site. Audit `src/` for unused imports or heavy dependencies that can be lazy-loaded or dropped.
- [ ] **P3** Verify `sizes` attributes on `morning` and `perfume` images — full-size AVIF variants are 200KB+ and may be unnecessarily served on mobile if `sizes` is too broad.
- [ ] **P3** Confirm `hero-profile-new.jpg` (132KB, in `dist/img/`) is never loaded by a rendered `<img>` — it should only appear as `og:image` in SEO meta.

---

## 2. Machine Experience / AI Readiness — 9 / 10

### What's working well
- `public/llms.txt` exists and is well-written — rare and forward-thinking
- `robots.txt` is fully open (`Allow: /`) — no AI crawlers blocked
- `public/sitemap.xml` is present
- JSON-LD Person schema is thorough: `jobTitle`, `knowsAbout`, `alumniOf`, `knowsLanguage`, `hasOccupation`, `sameAs`
- Semantic HTML: `<header>`, `<main>`, `<footer>` in `Home.jsx`; sections use `<section id="...">` correctly

### To do
- [ ] **P2** `<title>` and schema `description` in `Home.jsx:17-18` are Hungarian-only — add an English-language `<meta name="description">` or make the JSON-LD description bilingual for better international AI indexing.
- [ ] **P3** `<section>` elements lack `aria-labelledby` pointing to their heading — not a blocker but strengthens machine-readable document structure.

---

## 3. Accessibility / A11y — 7 / 10

### What's working well
- `:focus-visible` global style defined in `index.css:89` — keyboard users have a visible indicator
- Hamburger button has `aria-label="Toggle navigation menu"`
- Theme toggle button has descriptive `aria-label` (light/dark)
- Calendar day buttons: `aria-label` (full date string) + `aria-pressed`
- Form inputs: `id`/`htmlFor`, `aria-invalid`, `aria-describedby` — textbook correct

### To do
- [ ] **P1** Dark mode is incomplete — many components have hardcoded colors that won't adapt:
  - `Hero.jsx:100-101`: `backgroundColor: '#FFFFFF'`, `color: '#555'`, `color: '#888'` (quote box)
  - `Contact.jsx` throughout: `#F9F9F4`, `#FFFFFF`, `#333`, `#ddd`, `#ccc` — the form card will look broken in dark mode
  - Replace all hardcoded hex values in these components with CSS custom properties defined in the `[data-theme="dark"]` block in `index.css`
- [ ] **P1** Language toggle button in `Navbar.jsx:30` has no `aria-label` — a screen reader announces "EN" or "HU" with no context. Add `aria-label="Switch to English"` / `aria-label="Switch to Hungarian"`.
- [ ] **P2** No skip-to-content link — keyboard users must Tab through the entire navbar on every page. Add `<a href="#main-content" class="skip-link">` as the first element in the DOM.

---

## 4. User Experience / UX — 7 / 10

### What's working well
- Hero section communicates value within 3 seconds: name, tagline, two CTAs
- Mobile-first layout — `.hero-grid` and `.nav-links` both collapse correctly
- Dark mode respects OS preference on first visit, persists via `localStorage`
- Form error handling uses translated strings with specific per-field messages
- Calendar day buttons are thumb-sized (8px padding)

### To do
- [ ] **P1** Contact form success message in `Contact.jsx:193-194` is hardcoded English: `"Booking Confirmed!"` and `"A confirmation email has been sent to..."` — move to `translations.js`.
- [ ] **P1** Loading state string in `Contact.jsx:299` is hardcoded English: `'Scheduling...'` — move to `translations.js`.
- [ ] **P2** Form submit uses `<button onClick={handleSubmit}>` rather than `<form onSubmit={handleSubmit}>` — pressing Enter in an input field won't submit. Wrap the form fields in a `<form>` element.
- [ ] **P2** Quote box in `Hero.jsx:100` uses `backgroundColor: '#FFFFFF'` — in dark mode this renders as a jarring white box. Use a CSS variable.
- [ ] **P3** No `<noscript>` fallback — JS failure shows a blank page. Low risk but a simple message would improve resilience.

---

## 5. Security & Trust — 8 / 10

### What's working well
- GitHub Pages enforces HTTPS — no mixed content risk
- `public/_headers` is thorough: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, full scoped CSP
- CSP is correctly scoped: EmailJS API, GA4 domains, `unsafe-inline` only for the GA4 inline snippet, no wildcard `*`
- Favicon exists (SVG with SV initials), Contact info is prominent, LinkedIn/GitHub links establish legitimacy

### To do
- [ ] **P1** GA4 placeholder `G-XXXXXXXXXX` is live in `index.html:12-18` — the gtag snippet fires real HTTP requests on every page load with an invalid ID. Either replace with the real Measurement ID (after Rackhost migration) or comment the snippet out until ready.
- [ ] **P2** `_headers` is advisory-only on GitHub Pages — GitHub's CDN does not enforce it. The CSP provides zero runtime protection until the site sits behind a proxy (Cloudflare, Netlify, etc.). Document this clearly or fast-track a CDN.
- [ ] **P3** Add `Permissions-Policy: camera=(), microphone=(), geolocation=()` to `_headers` — blocks browser feature access not needed by this site.

---

## Score summary

| Category | Current | Target |
|---|---|---|
| Performance & Core Web Vitals | 8/10 | 9/10 |
| Machine Experience (AI Readiness) | 9/10 | 10/10 |
| Accessibility | 7/10 | 10/10 |
| UX & Intent | 7/10 | 10/10 |
| Security & Trust | 8/10 | 10/10 |
| **Overall** | **7.8 / 10** | **10 / 10** |

## Completed (pre-audit baseline)
- [x] Chess coaching removed from main site (routes, nav, translations stripped); preserved in `chess-site/`
- [x] All PNG originals deleted; images converted to WebP + AVIF at quality 60
- [x] Old hero image variants deleted; only `-new-` variants remain
- [x] Favicon: `public/favicon.svg` with SV initials and brand colors
- [x] GA4 snippet added to `index.html` (placeholder ID — see P1 above)
- [x] `public/_headers` with full CSP and security headers
- [x] `public/llms.txt` for AI crawler readability
- [x] JSON-LD Person schema with comprehensive profile data
- [x] Dark mode toggle with OS preference detection and localStorage persistence (FOUC-free)
- [x] Fonts self-hosted as woff2 with `font-display: swap`
- [x] Vite manual chunks: `vendor` + `lucide`
- [x] Color contrast fix: `--color-text-secondary` darkened to `#333333` for WCAG AA
- [x] Calendar day cells converted to `<button>` elements with `aria-label` + `aria-pressed`
- [x] Form inputs: `id`/`htmlFor`/`aria-invalid`/`aria-describedby` wired up
