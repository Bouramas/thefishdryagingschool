<script setup>
import { onMounted, onUnmounted } from 'vue'
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
  const description = t.value.description
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
  return {
    htmlAttrs: { lang: t.value.lang },
    title,
    meta: [
      { name: 'description', content: description },
      ...(noindex ? [{ name: 'robots', content: 'noindex' }] : []),
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:locale', content: locale.value === 'el' ? 'el_GR' : 'en_US' },
      { property: 'og:locale:alternate', content: locale.value === 'el' ? 'en_US' : 'el_GR' },
      ...(noindex ? [] : [{ property: 'og:url', content: canonical }]),
    ],
    link: links,
    script: [
      {
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
      },
    ],
  }
})

let frame = 0
function updateAge() {
  frame = 0
  const max = document.documentElement.scrollHeight - window.innerHeight
  const age = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
  document.documentElement.style.setProperty('--age', age.toFixed(3))
}
function onScroll() {
  if (!frame) frame = requestAnimationFrame(updateAge)
}
onMounted(() => {
  updateAge()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
