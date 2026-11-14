<script setup>
import { computed } from 'vue'

// Renders text where [[...]] marks the Marathia restaurant link
// and {{...}} marks the University of West Attica (KEDIVIM) link.
const URLS = { '[': 'https://marathiatinos.gr', '{': 'https://kedivim.uniwa.gr/' }
const props = defineProps({ text: { type: String, required: true } })
const parts = computed(() =>
  props.text
    .split(/(\[\[.+?\]\]|\{\{.+?\}\})/)
    .filter(Boolean)
    .map((raw) => {
      const url = URLS[raw[0]]
      return url && raw.length > 4 && raw[1] === raw[0]
        ? { value: raw.slice(2, -2), url }
        : { value: raw }
    }),
)
</script>

<template>
  <template v-for="(p, i) in parts" :key="i">
    <a
      v-if="p.url"
      :href="p.url"
      target="_blank"
      rel="noopener noreferrer"
      class="underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
      >{{ p.value }}</a
    >
    <template v-else>{{ p.value }}</template>
  </template>
</template>
