<script setup>
import { locale, setLocale, t } from '../i18n'

// Shows the flag of the language you can switch to.
function toggle() {
  setLocale(locale.value === 'en' ? 'el' : 'en')
}
</script>

<template>
  <button
    type="button"
    class="inline-flex shrink-0 cursor-pointer transition-opacity hover:opacity-80"
    :aria-label="t.nav.switchTo"
    :title="t.nav.switchTo"
    :lang="locale === 'en' ? 'el' : 'en'"
    @click="toggle"
  >
    <svg v-if="locale === 'en'" viewBox="0 0 27 18" class="h-5 w-[30px] rounded-md" aria-hidden="true">
      <rect width="27" height="18" fill="#0d5eaf" />
      <g fill="#fff">
        <rect y="2" width="27" height="2" /><rect y="6" width="27" height="2" /><rect y="10" width="27" height="2" /><rect y="14" width="27" height="2" />
      </g>
      <rect width="10" height="10" fill="#0d5eaf" />
      <rect x="4" width="2" height="10" fill="#fff" /><rect y="4" width="10" height="2" fill="#fff" />
    </svg>
    <svg v-else viewBox="0 0 60 30" class="h-5 w-[30px] rounded-md" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0L60 30M60 0L0 30" stroke="#fff" stroke-width="6" />
      <path d="M0 0L60 30M60 0L0 30" stroke="#c8102e" stroke-width="3" />
      <path d="M30 0V30M0 15H60" stroke="#fff" stroke-width="10" />
      <path d="M30 0V30M0 15H60" stroke="#c8102e" stroke-width="6" />
    </svg>
  </button>
</template>
