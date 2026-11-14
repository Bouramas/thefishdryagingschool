<script setup>
import FishIllustration from '../components/FishIllustration.vue'
import ModuleList from '../components/ModuleList.vue'
import NotifyForm from '../components/NotifyForm.vue'
import LinkedText from '../components/LinkedText.vue'
import { t } from '../i18n'

const logos = [
  { key: 'marathia', src: '/logos/logo_marathia.png', pad: 'p-8', url: 'https://marathiatinos.gr' },
  { key: 'uwa', src: '/logos/logo_uwa.png', pad: 'p-3', url: 'https://www.uniwa.gr/' },
  { key: 'kedivim', src: '/logos/logo_kedivim_gr.jpg', pad: 'p-1', url: 'https://kedivim.uniwa.gr/' },
]
</script>

<template>
  <!-- Hero -->
  <section class="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:px-10">
      <div class="lg:col-span-6">
        <p class="hero-line mb-5 text-base font-medium" :style="{ color: 'var(--accent)' }">
          {{ t.hero.eyebrow }}
        </p>
        <h1 class="hero-line display text-6xl font-semibold leading-[0.95] sm:text-7xl xl:text-8xl">
          {{ t.siteName }}
        </h1>
        <p class="hero-line mt-8 max-w-prose text-lg leading-relaxed text-white/80"><LinkedText :text="t.intro" /></p>
        <div class="hero-line mt-10">
          <NotifyForm compact />
        </div>
      </div>
      <div class="hero-fish lg:col-span-6 lg:-mr-24">
        <FishIllustration />
      </div>
    </div>
  </section>

  <!-- Program -->
  <section class="py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <h2 class="display max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
        {{ t.program.headline(t.program.days, t.program.hours, t.program.participants) }}
      </h2>
      <p class="mt-6 max-w-prose text-lg leading-relaxed text-white/75"><LinkedText :text="t.program.summary" /></p>
    </div>
  </section>

  <!-- Modules -->
  <section class="py-12 lg:py-20" aria-labelledby="modules-title">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <h2 id="modules-title" class="display mb-10 text-4xl font-semibold sm:text-5xl">{{ t.modulesTitle }}</h2>
      <ModuleList :modules="t.modules" />
    </div>
  </section>

  <!-- Audience + certification -->
  <section class="py-20 lg:py-28">
    <div class="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
      <div>
        <h2 class="display text-4xl font-semibold sm:text-5xl">{{ t.audienceTitle }}</h2>
        <ul class="mt-8 space-y-4 text-lg text-white/85">
          <li v-for="a in t.audience" :key="a" class="flex gap-4 border-t border-white/15 pt-4">{{ a }}</li>
        </ul>
      </div>
      <div>
        <h2 class="display text-4xl font-semibold sm:text-5xl">{{ t.certificationTitle }}</h2>
        <p class="mt-8 max-w-prose text-lg leading-relaxed text-white/85"><LinkedText :text="t.certification" /></p>
        <p class="display mt-8 text-6xl font-semibold" :style="{ color: 'var(--accent)' }">3 ECVET</p>
        <p class="text-white/65"><LinkedText :text="t.certificationCredits" /></p>
      </div>
    </div>
  </section>

  <!-- Auspices -->
  <section class="py-12 lg:py-20" aria-labelledby="auspices-title">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <h2 id="auspices-title" class="display mb-10 text-4xl font-semibold sm:text-5xl">{{ t.auspices.title }}</h2>
      <ul class="grid gap-6 sm:grid-cols-3">
        <li
          v-for="l in logos"
          :key="l.key"
          class="flex h-40 items-center justify-center rounded-3xl bg-white"
          :class="l.pad"
        >
          <a :href="l.url" target="_blank" rel="noopener noreferrer" class="flex h-full w-full items-center justify-center">
            <img :src="l.src" :alt="t.auspices.logos[l.key]" class="max-h-full max-w-full object-contain" loading="lazy" />
          </a>
        </li>
      </ul>
    </div>
  </section>

  <!-- Science -->
  <section class="py-12 lg:py-20">
    <div class="mx-auto max-w-4xl px-6 lg:px-10">
      <h2 class="display text-4xl font-semibold leading-tight sm:text-5xl">{{ t.science.title }}</h2>
      <p v-for="p in t.science.body" :key="p" class="mt-6 max-w-prose text-xl leading-relaxed text-white/80">{{ p }}</p>
    </div>
  </section>

  <!-- Notify -->
  <section id="notify" class="scroll-mt-24 py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="rounded-3xl p-8 sm:p-14" :style="{ background: 'var(--bg-raised)' }">
        <h2 class="display max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          {{ t.notify.title }}
        </h2>
        <p class="mt-5 mb-10 max-w-prose text-lg text-white/75">
          {{ t.notify.body(t.program.participants) }}
        </p>
        <NotifyForm />
      </div>
    </div>
  </section>
</template>
