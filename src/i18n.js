import { ref, computed } from 'vue'
import { locales, defaultLocale } from './data/content'

// The route decides the locale (see router guard in main.js).
// localStorage only stores the preference, read by the inline script in index.html.
const KEY = 'fdas-locale'
const EN_PREFIX = /^\/en(?=\/|$)/

export const locale = ref(defaultLocale)
export const t = computed(() => locales[locale.value])

export function setLocale(l) {
  if (locales[l]) locale.value = l
}

export function savePreference(l) {
  try {
    localStorage.setItem(KEY, l)
  } catch {}
}

// Path in the given locale: Greek at the root, English under /en.
export function pathFor(path, loc) {
  const base = path.replace(EN_PREFIX, '') || '/'
  if (loc !== 'en') return base
  return base === '/' ? '/en' : `/en${base}`
}

export function localePath(path = '/') {
  return pathFor(path, locale.value)
}

export function localeOf(path) {
  return EN_PREFIX.test(path) ? 'en' : 'el'
}
