<script setup>
import { t, localePath } from '../i18n'
import LanguageSwitch from './LanguageSwitch.vue'
import LinkedText from './LinkedText.vue'

// Placeholder URLs: replace with the real profile links.
const social = [
  { key: 'facebook', href: 'https://www.facebook.com/marathiatinos' },
  { key: 'instagram', href: 'https://www.instagram.com/thefishdryagingschool/' },
  { key: 'substack', href: 'https://marathiatinos.substack.com/' },
]
</script>

<template>
  <footer class="border-t border-white/10">
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 pt-10 sm:flex-row sm:items-center sm:gap-6 lg:px-10">
      <p class="text-xs uppercase tracking-[0.2em] text-white/60">{{ t.footer.social.caption }}</p>
      <ul class="flex items-center justify-center gap-3">
        <li v-for="s in social" :key="s.key">
          <a
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="t.footer.social[s.key]"
            :title="t.footer.social[s.key]"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
          >
            <svg v-if="s.key === 'facebook'" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
              <path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.5H7.5v3.3h2.8V22h3.2z" />
            </svg>
            <svg v-else-if="s.key === 'instagram'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5" aria-hidden="true">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">
              <path d="M4 4h16v2.2H4V4zm0 4.4h16v2.2H4V8.4zM4 12.8h16V21l-8-4.5L4 21v-8.2z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-8 text-center text-sm text-white/60 lg:flex-row lg:text-left lg:items-center lg:justify-between lg:px-10">
      <p><LinkedText :text="t.footer.text" /></p>
      <nav class="flex items-center gap-6">
        <RouterLink :to="localePath('/privacy')" class="hover:text-white">{{ t.nav.privacy }}</RouterLink>
        <LanguageSwitch />
      </nav>
    </div>
    <div class="mx-auto max-w-7xl px-6 pb-8 text-center text-xs text-white/60 lg:px-10">
      <p>thefishdryagingschool.com | © All rights reserved</p>
    </div>
  </footer>
</template>
