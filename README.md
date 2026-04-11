# Salvador Villarroel - Personal Portfolio

A sleek, modern portfolio and personal landing page built with React, Vite, and Javascript. Features comprehensive SEO, responsive dark-mode, multi-language support (English & Hungarian), and robust semantic HTML tailored for high accessibility and machine-readability (including a custom `llms.txt`).

## Key Features
- **Responsive Architecture**: Built fully custom with Vanilla CSS variables logic for smooth dark mode handling.
- **Internationalization (i18n)**: Seamless language toggling with dynamic JSON-LD and HTML `lang` attributes.
- **Accessibility (A11y)**: Fully WCAG AA+ compliant with deep ARIA mapping, skip-to-content logic, and auto-hyphenation.
- **Performance Optimized**: Lazy-loaded form components, pre-generated AVIF/WebP formats with custom `srcSet` loading, and minimal main UI blocking components.

## Setup & Deployment

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the local development server:
   ```bash
   npm run dev
   ```

3. Generate a production build:
   ```bash
   npm run build
   ```

## Security & CSP Headers

This project ships with a strict `_headers` file enforcing a tightened Content Security Policy (CSP), including constraints on `unsafe-inline` framing and preventing cross-origin sniffs.

> [!WARNING]
> **Important Note regarding GitHub Pages:** 
> The `public/_headers` file is currently **advisory only** when deployed directly to GitHub Pages. GitHub’s CDN edge nodes do not natively parse edge caching headers or enforce runtime CSP values from static repositories.
> 
> To enable actual runtime enforcement and ensure your visitors are securely protected, it is highly recommended to sit this application behind a proxy CDN (such as **Cloudflare**, **Netlify**, or **Vercel**), which will accurately read and enforce the `_headers` block.
