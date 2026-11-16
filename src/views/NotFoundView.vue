<script setup>
import { t, localePath } from '../i18n'
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 pt-40 pb-32 lg:px-10">
    <h1 class="display text-5xl font-semibold">{{ t.notFound.title }}</h1>
    <p class="mt-6 text-lg text-white/75">{{ t.notFound.body }}</p>
    <RouterLink :to="localePath('/')" class="mt-8 inline-block rounded-full px-6 py-3 font-semibold text-ink" :style="{ background: 'var(--accent)' }">{{ t.notFound.home }}</RouterLink>
  </section>
</template>
