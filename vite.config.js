import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

const PAGES = ['/', '/privacy']
const EN = (p) => (p === '/' ? '/en' : `/en${p}`)

function sitemap(origin) {
  const abs = (p) => origin + p
  const entry = (p, el, en) => `  <url>
    <loc>${abs(p)}</loc>
    <xhtml:link rel="alternate" hreflang="el" href="${abs(el)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${abs(en)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(el)}" />
  </url>`
  const urls = PAGES.flatMap((p) => [entry(p, p, EN(p)), entry(EN(p), p, EN(p))])
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const origin = (env.VITE_SITE_URL || 'https://thefishdryagingschool.com').replace(/\/$/, '')
  return {
    plugins: [vue(), tailwindcss()],
    ssgOptions: {
      dirStyle: 'nested',
      // The locale is module-level state set by the router guard, so render one page at a time.
      concurrency: 1,
      includedRoutes: () => [...PAGES, ...PAGES.map(EN)],
      onFinished() {
        writeFileSync(join(process.cwd(), 'dist', 'sitemap.xml'), sitemap(origin))
      },
    },
  }
})
