import { ref, computed } from 'vue'
import { locales, defaultLocale } from './data/content'

const KEY = 'fdas-locale'

function initial() {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved && locales[saved]) return saved
  } catch {}
  return navigator.language?.toLowerCase().startsWith('el') ? 'el' : defaultLocale
}

export const locale = ref(initial())
export const t = computed(() => locales[locale.value])

export function setLocale(l) {
  if (!locales[l]) return
  locale.value = l
  try {
    localStorage.setItem(KEY, l)
  } catch {}
}
