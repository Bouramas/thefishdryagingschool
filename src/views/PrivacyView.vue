<script setup>
import { t } from '../i18n'
</script>

<template>
  <article class="mx-auto max-w-3xl px-6 pt-36 pb-24 lg:px-10">
    <h1 class="display text-5xl font-semibold">{{ t.privacy.title }}</h1>
    <div class="mt-8 space-y-5 text-lg leading-relaxed text-white/80">
      <p v-for="p in t.privacy.paragraphs" :key="p">{{ p }}</p>
      <p>
        <RouterLink to="/" class="underline underline-offset-2 hover:text-white">{{ t.privacy.back }}</RouterLink>
      </p>
    </div>
  </article>
</template>
