<script setup>
import { ref } from 'vue'
import { t } from '../i18n'

const atEnd = ref(false)
function onScroll(e) {
  const el = e.target
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
}

const photos = [
  { src: '/images/big_fish_600.jpeg', tilt: '-2deg' },
  { src: '/images/big_fish2_600.jpeg', tilt: '1.5deg' },
  { src: '/images/big_fish3_600.jpeg', tilt: '-1deg' },
]
</script>

<template>
  <section class="py-12 lg:py-20" aria-labelledby="line-title">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <h2 id="line-title" class="display mb-10 text-4xl font-semibold sm:text-5xl">{{ t.clothesline.title }}</h2>
    </div>
    <div class="line-wrap mx-auto max-w-7xl" :class="{ 'is-end': atEnd }">
    <div class="line-scroll sm:px-6 lg:px-10" @scroll.passive="onScroll">
      <ul class="line-row">
        <svg class="line-cable" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0 Q50 40 100 0" class="cable-shadow" />
          <path d="M0 0 Q50 40 100 0" class="cable" />
        </svg>
        <li v-for="(p, i) in photos" :key="p.src" class="hang" :class="{ mid: i === 1 }" :style="{ '--tilt': p.tilt }">
          <span class="pin" aria-hidden="true" />
          <div class="photo-print photo-print--small">
            <img
              :src="p.src"
              :alt="t.clothesline.alts[i]"
              width="700"
              height="875"
              loading="lazy"
              class="block aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
        </li>
      </ul>
    </div>
    <span class="line-hint" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6" /></svg>
    </span>
    </div>
  </section>
</template>
