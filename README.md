# The Fish Dry Aging School

Pre-launch website for The Fish Dry Aging School, a program by the Marathia restaurant and the University of West Attica (Agios Fokas, Tinos, Greece). The site presents the program and collects name, email and phone for the class waitlist.

## Stack

- Vue 3 (`<script setup>`), Vite, vue-router
- Tailwind CSS v4 (`@tailwindcss/vite`)
- `vite-ssg` prerenders each route (`/`, `/privacy`, `/en`, `/en/privacy`); `@unhead/vue` sets per-route head tags
- Self-hosted fonts: Fraunces (display) and Figtree (body)
- Plain JavaScript, no test runner

## Getting started

```sh
npm install
cp .env.example .env   # then edit the values
npm run dev            # http://localhost:5173
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Prerender all routes to `dist/` and write `dist/sitemap.xml` (with hreflang alternates) |
| `npm run preview` | Serve the production build locally |

## Environment variables

See `.env.example`.

| Variable | Description |
| --- | --- |
| `VITE_SITE_URL` | Public site URL, used for the sitemap, canonical and hreflang links |
| `VITE_LOOPS_FORM_URL` | Loops.so form endpoint: `https://app.loops.so/api/newsletter-form/<FORM_ID>` (form-encoded `email`, `firstName`, `lastName`, `phone`, `userGroup`) |

If `VITE_LOOPS_FORM_URL` is unset, the notify form shows a "not connected" error.

## Project structure

```
index.html            Meta tags, Open Graph, JSON-LD
vite.config.js        Plugins, prerender and sitemap config
public/               Static assets (favicon, logos, robots.txt)
src/
  main.js             App bootstrap
  router/             Routes: /, /privacy, 404
  data/content.js     All copy, in English (en) and Greek (el)
  i18n.js             Locale state and translations
  components/         UI components
  views/              Home, Privacy, NotFound
  style.css           Tailwind theme tokens and animations
content.md            Original source copy
```

## Content and languages

The site is available in English and Greek. Edit copy in `src/data/content.js` and keep both locales in sync. Greek is served at the root (`/`, `/privacy`) and English under `/en` (`/en`, `/en/privacy`). The URL decides the language; the switch links to the same page in the other language and saves the choice in localStorage (`fdas-locale`). An inline script in `index.html` sends returning visitors with `en` saved from `/` to `/en`. Add new pages in `src/router/routes.js` and in `PAGES` in `vite.config.js`. Unknown paths need the host to fall back to `index.html`.

## Deployment

`npm run build` outputs a static site in `dist/`, which can be hosted on any static host (for example an AWS S3 bucket). Before launch, replace the placeholder domain `https://thefishdryagingschool.com` in `.env`, `public/robots.txt` and the `VITE_SITE_URL` value (canonical, hreflang and Open Graph URLs are generated from it).

## Further notes

See `AGENTS.md` for design decisions and conventions, and `TODO.md` for planned work.

Never commit `.env` or credentials.
