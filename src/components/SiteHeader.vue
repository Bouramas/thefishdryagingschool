<script setup>
import { t, localePath } from '../i18n'
import LanguageSwitch from './LanguageSwitch.vue'
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[color-mix(in_oklab,var(--bg)_80%,transparent)] backdrop-blur-md">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
      <RouterLink :to="localePath('/')" class="display text-lg font-semibold tracking-tight">
        {{ t.siteName }}
      </RouterLink>
      <div class="flex items-center gap-3">
        <RouterLink
          :to="{ path: localePath('/'), hash: '#notify' }"
          class="hidden rounded-full border border-white/30 px-5 py-2 text-sm font-medium transition-colors sm:block hover:bg-white/10"
        >
          {{ t.nav.getNotified }}
        </RouterLink>
        <LanguageSwitch />
      </div>
    </div>
  </header>
</template>
