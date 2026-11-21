<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { t, locale, pathFor } from './i18n'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

const route = useRoute()
const origin = (import.meta.env.VITE_SITE_URL || 'https://thefishdryagingschool.com').replace(/\/$/, '')
const url = (path, loc) => {
  const p = pathFor(path, loc)
  return origin + (p === '/' ? '/' : p)
}

useHead(() => {
  const title = t.value.titles[route.meta.titleKey] || t.value.siteName
  const key = route.meta.titleKey
  const description = t.value.descriptions[key] || t.value.description
  const image = origin + '/images/og.jpg'
  const noindex = route.meta.noindex
  const canonical = url(route.path, locale.value)
  const links = noindex
    ? []
    : [
        { rel: 'canonical', href: canonical },
        { rel: 'alternate', hreflang: 'el', href: url(route.path, 'el') },
        { rel: 'alternate', hreflang: 'en', href: url(route.path, 'en') },
        { rel: 'alternate', hreflang: 'x-default', href: url(route.path, 'el') },
      ]
  const schema = []
  if (key === 'home') {
    schema.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: t.value.siteName,
        description,
        inLanguage: t.value.lang,
        provider: [
          {
            '@type': 'Organization',
            name: 'Marathia restaurant',
            url: 'https://marathiatinos.gr',
            address: { '@type': 'PostalAddress', addressLocality: 'Agios Fokas, Tinos', addressCountry: 'GR' },
          },
          { '@type': 'CollegeOrUniversity', name: 'University of West Attica' },
        ],
      }),
    })
  } else if (key === 'privacy') {
    schema.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t.value.siteName, item: url('/', locale.value) },
          { '@type': 'ListItem', position: 2, name: t.value.titles.privacy.split(' | ')[0], item: canonical },
        ],
      }),
    })
  }
  return {
    htmlAttrs: { lang: t.value.lang },
    title,
    meta: [
      { name: 'description', content: description },
      ...(noindex ? [{ name: 'robots', content: 'noindex' }] : []),
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: t.value.siteName },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: t.value.hero.chefAlt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: image },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:locale', content: locale.value === 'el' ? 'el_GR' : 'en_US' },
      { property: 'og:locale:alternate', content: locale.value === 'el' ? 'en_US' : 'el_GR' },
      ...(noindex ? [] : [{ property: 'og:url', content: canonical }]),
    ],
    link: links,
    script: schema,
  }
})
</script>

<template>
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-2 focus:text-ink">{{ t.nav.skip }}</a>
  <SiteHeader />
  <main id="main">
    <RouterView />
  </main>
  <SiteFooter />
</template>
