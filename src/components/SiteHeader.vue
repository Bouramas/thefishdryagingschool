<script setup>
import { t, localePath } from '../i18n'
import LanguageSwitch from './LanguageSwitch.vue'
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-(--bg)">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
      <RouterLink :to="localePath('/')" class="block" :aria-label="t.siteName">
        <img src="/logo/logo_header.png" :alt="t.siteName" width="2020" height="1280" class="block h-14 w-auto sm:h-16" />
      </RouterLink>
      <nav class="flex items-center gap-3" :aria-label="t.nav.label">
        <RouterLink
          :to="{ path: localePath('/'), hash: '#notify' }"
          class="hidden rounded-full border border-white/30 px-5 py-2 text-sm font-medium sm:block btn-ghost"
        >
          {{ t.nav.getNotified }}
        </RouterLink>
        <LanguageSwitch />
      </nav>
    </div>
  </header>
</template>
