<script setup>
import { t, localePath } from '../i18n'
</script>

<template>
  <article class="mx-auto max-w-3xl px-6 pt-40 pb-32 lg:px-10">
    <h1 class="display text-5xl font-semibold">{{ t.notFound.title }}</h1>
    <p class="mt-6 text-lg text-white/85">{{ t.notFound.body }}</p>
    <RouterLink :to="localePath('/')" class="btn-accent mt-8 inline-block rounded-full px-6 py-3 font-semibold">{{ t.notFound.home }}</RouterLink>
  </article>
</template>
