<script setup>
import { onMounted, onUnmounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { t } from './i18n'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

const route = useRoute()
watchEffect(() => {
  document.documentElement.lang = t.value.lang
  document.title = t.value.titles[route.meta.titleKey] || t.value.siteName
  document.head.querySelector('meta[name="description"]')?.setAttribute('content', t.value.description)
})

let frame = 0
function updateAge() {
  frame = 0
  const max = document.documentElement.scrollHeight - window.innerHeight
  const age = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
  document.documentElement.style.setProperty('--age', age.toFixed(3))
}
function onScroll() {
  if (!frame) frame = requestAnimationFrame(updateAge)
}
onMounted(() => {
  updateAge()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
