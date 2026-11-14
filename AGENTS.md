# AGENTS.md

Pre-launch site for The Fish Dry Aging School (Marathia restaurant and the University of West Attica, Agios Fokas, Tinos, Greece). It presents the program and collects emails for a launch notification.

## Stack
- Vue 3 (`<script setup>`), Vite, vue-router 5, Tailwind CSS v4 (`@tailwindcss/vite`)
- `vite-plugin-sitemap` for `sitemap.xml`; `public/robots.txt` is static
- Fonts self-hosted via `@fontsource-variable/fraunces` (display) and `@fontsource-variable/figtree` (body)
- Plain JavaScript, no TypeScript, no test runner

## Commands
- `npm install`
- `npm run dev` starts the dev server (port 5173)
- `npm run build` builds to `dist/` and writes `dist/sitemap.xml`
- `npm run preview` serves the build

## Structure
- `index.html`: title, meta description, Open Graph, canonical, JSON-LD (`Course`)
- `vite.config.js`: plugins; sitemap hostname from `VITE_SITE_URL`
- `src/main.js`: app bootstrap, font imports
- `src/router/index.js`: routes `/`, `/privacy`, catch-all 404 (`noindex`); sets `document.title` and the robots meta per route
- `src/style.css`: Tailwind import, `@theme` tokens, `--age` colour variables, hero animations
- `src/App.vue`: layout shell and the scroll listener that sets `--age`
- `src/data/content.js`: all copy and UI strings, in `en` and `el`. Edit copy here, not in views. Keep both locales in sync.
- `src/i18n.js`: `locale` ref (saved in localStorage, defaults to browser language), `t` computed with the active copy. `LanguageSwitch.vue` (header and footer) toggles it. The switch is state-based, not URL-based.
- `src/views/`: `HomeView`, `PrivacyView`, `NotFoundView`
- `src/components/`: `FishIllustration`, `ModuleList`, `NotifyForm`, `SiteHeader`, `SiteFooter`
- `public/`: `robots.txt`, `favicon.svg`
- `content.md`: original source copy

## Design decisions
- The page "ages" as the user scrolls. `App.vue` writes `--age` (0 to 1) on `<html>`. `style.css` derives `--bg`, `--bg-raised`, `--accent`, `--flesh` and `--flesh-edge` from it with `color-mix`. The fish SVG and accent colours use these variables. Use them for new colour-dependent elements instead of fixed colours.
- Palette (in `@theme`): ink `#0c2433`, whitewash `#e8edee`, brine `#2e6c73`, ruby `#a32a31`, amber `#c98a3b`.
- Type: Fraunces for headings via the `.display` class, Figtree for body. Sentence case, no all-caps labels.
- Motion: only the hero load sequence (`.hero-fish`, `.hero-line`). Do not add per-section entrance animations. `prefers-reduced-motion` is respected.
- Modules are numbered because the source numbers them. Do not add numbering to non-sequential content.

## Notify form
- `NotifyForm.vue` validates the email, requires consent, includes a honeypot field, and POSTs JSON `{ "email": "..." }` to `VITE_SUBSCRIBE_URL`.
- No backend exists. When `VITE_SUBSCRIBE_URL` is unset the form shows a "not connected" error, so no signup is lost silently.
- Collected data is limited to the email address. If the data collected changes, update `PrivacyView.vue`.

## Environment variables
See `.env.example`.
- `VITE_SITE_URL`: public site URL, used for the sitemap
- `VITE_SUBSCRIBE_URL`: endpoint that receives signups

## Open items
- Replace the placeholder domain `https://thefishdryagingschool.com` in `.env`, `public/robots.txt` and the canonical and Open Graph URLs in `index.html`.
- Connect a real signup endpoint.
- Have the privacy notice reviewed.
- The layout has not been checked in a browser (the Chrome extension was not connected). Verify the hero, the scroll colour change, form states and the mobile layout.

## Conventions
- English and Greek, sentence case, no emojis in UI copy. The language switch uses SVG flags.
- Keep copy faithful to `content.md`. Typos were fixed ("the the", "word wide"); the emojis and hashtags were intentionally dropped.
- Never commit `.env` or credentials.
