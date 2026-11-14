<script setup>
defineProps({ modules: { type: Array, required: true } })
</script>

<template>
  <ol class="grid gap-x-16 md:grid-cols-2">
    <li
      v-for="(m, i) in modules"
      :key="m"
      class="flex gap-5 border-t border-white/15 py-5"
    >
      <span class="display w-9 shrink-0 text-3xl leading-none" :style="{ color: 'var(--accent)' }">{{ i + 1 }}</span>
      <span class="text-lg leading-snug text-white/90">{{ m }}</span>
    </li>
  </ol>
</template>
