# The Fish Dry Aging School

Pre-launch website for The Fish Dry Aging School, a program by the Marathia restaurant and the University of West Attica (Agios Fokas, Tinos, Greece). The site presents the program and collects email addresses for a launch notification.

## Stack

- Vue 3 (`<script setup>`), Vite, vue-router
- Tailwind CSS v4 (`@tailwindcss/vite`)
- `vite-plugin-sitemap` for `sitemap.xml`
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
| `npm run build` | Build to `dist/` and write `dist/sitemap.xml` |
| `npm run preview` | Serve the production build locally |

## Environment variables

See `.env.example`.

| Variable | Description |
| --- | --- |
| `VITE_SITE_URL` | Public site URL, used for the sitemap |
| `VITE_SUBSCRIBE_URL` | Endpoint that receives signups (JSON `{ "email": "..." }` via POST) |

If `VITE_SUBSCRIBE_URL` is unset, the notify form shows a "not connected" error.

## Project structure

```
index.html            Meta tags, Open Graph, JSON-LD
vite.config.js        Plugins and sitemap config
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

The site is available in English and Greek. Edit copy in `src/data/content.js` and keep both locales in sync. The language switch is state-based and saved in localStorage.

## Deployment

`npm run build` outputs a static site in `dist/`, which can be hosted on any static host (for example an AWS S3 bucket). Before launch, replace the placeholder domain `https://thefishdryagingschool.com` in `.env`, `public/robots.txt` and the canonical and Open Graph URLs in `index.html`.

## Further notes

See `AGENTS.md` for design decisions and conventions, and `TODO.md` for planned work.

Never commit `.env` or credentials.
