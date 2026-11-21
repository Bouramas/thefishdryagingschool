<script setup>
import ModuleList from '../components/ModuleList.vue'
import NotifyForm from '../components/NotifyForm.vue'
import Clothesline from '../components/Clothesline.vue'
import LinkedText from '../components/LinkedText.vue'
import { t } from '../i18n'

const logos = [
  { key: 'marathia', src: '/logos/logo_marathia.png', pad: 'p-6', round: false, url: 'https://marathiatinos.gr' },
  { key: 'uwa', src: '/logos/logo_uwa.png', pad: 'p-3', round: true, url: 'https://www.uniwa.gr/' },
  { key: 'kedivim', src: '/logos/logo_kedivim_gr.jpg', pad: 'p-1', round: true, url: 'https://kedivim.uniwa.gr/' },
]
</script>

<template>
  <!-- Hero -->
  <section class="relative isolate overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-28">
    <div
      class="symbol-bg -right-24 top-24 -z-10 h-[26rem] w-[26rem] opacity-[0.09] sm:top-auto sm:bottom-0 sm:-right-1/6 sm:h-[90vh] sm:w-[90vh] sm:translate-y-[17.5%] sm:opacity-[0.07]"
      :style="{ color: 'var(--accent)' }"
      aria-hidden="true"
    ></div>
    <div class="mx-auto flex max-w-7xl flex-col px-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-10">
      <div class="contents lg:block lg:col-span-6">
        <p class="hero-line mb-5 text-base font-medium" :style="{ color: 'var(--accent)' }">
          {{ t.hero.eyebrow }}
        </p>
        <div class="hero-line flex text-5xl leading-[1.02] sm:text-7xl lg:text-6xl xl:text-7xl">
          <h1 class="logo-font w-fit text-right">
            <span class="block">The Fish</span>
            <span class="block">Dry-Aging</span>
            <span class="block">School</span>
          </h1>
        </div>
        <p class="hero-line mt-8 max-w-prose text-lg leading-relaxed text-white/80"><LinkedText :text="t.intro" /></p>
        <div class="hero-line order-2 mt-10 lg:order-none">
          <NotifyForm compact />
        </div>
      </div>
      <figure class="hero-fish order-1 mt-10 lg:order-none lg:mt-0 lg:col-span-6">
        <div class="photo-print mx-auto w-full max-w-[19.2rem] sm:max-w-[22.4rem] lg:ml-auto lg:mr-6 lg:max-w-[25.6rem]">
          <img
            src="/images/chef_tuna_1200.jpeg"
            :alt="t.hero.chefAlt"
            width="1200"
            height="1600"
            fetchpriority="high"
            class="block aspect-[3/4] h-auto w-full object-cover object-top"
          />
        </div>
      </figure>
    </div>
  </section>

  <!-- Program -->
  <section class="py-6 lg:py-8" aria-labelledby="program-title">
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-10">
      <h2 id="program-title" class="display mx-auto max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
        {{ t.program.headline(t.program.days, t.program.hours, t.program.participants) }}
      </h2>
      <p class="mx-auto mt-6 max-w-prose text-lg leading-relaxed text-white/85"><LinkedText :text="t.program.summary" /></p>
    </div>
  </section>

  <!-- Modules -->
  <section class="relative isolate overflow-hidden pt-6 pb-12 lg:pt-8 lg:pb-20" aria-labelledby="modules-title">
    <div class="symbol-bg -z-10 top-1/2 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.06] lg:h-[46rem] lg:w-[46rem]" :style="{ color: 'var(--accent)' }" aria-hidden="true"></div>
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <h2 id="modules-title" class="display mb-10 text-4xl font-semibold sm:text-5xl">{{ t.modulesTitle }}</h2>
      <ModuleList :modules="t.modules" />
    </div>
  </section>

  <Clothesline />

  <!-- Audience + certification -->
  <div class="relative isolate overflow-hidden py-12 lg:py-28">
    <div class="symbol-bg -z-10 top-1/2 -left-32 h-[32rem] w-[32rem] -translate-y-1/2 -rotate-12 opacity-[0.06] lg:-left-16 lg:h-[42rem] lg:w-[42rem]" :style="{ color: 'var(--accent)' }" aria-hidden="true"></div>
    <div class="mx-auto grid max-w-7xl gap-10 px-6 lg:gap-16 lg:grid-cols-2 lg:px-10">
      <section aria-labelledby="audience-title">
        <h2 id="audience-title" class="display text-4xl font-semibold sm:text-5xl">{{ t.audienceTitle }}</h2>
        <ul class="mt-6 space-y-3 text-lg text-white/85 sm:mt-8 sm:space-y-4">
          <li v-for="a in t.audience" :key="a" class="flex gap-4 border-t border-white/15 pt-3 sm:pt-4">{{ a }}</li>
        </ul>
      </section>
      <section aria-labelledby="certification-title">
        <h2 id="certification-title" class="display text-4xl font-semibold sm:text-5xl">{{ t.certificationTitle }}</h2>
        <p class="mt-8 max-w-prose text-lg leading-relaxed text-white/85"><LinkedText :text="t.certification" /></p>
        <p class="display mt-8 text-6xl font-semibold" :style="{ color: 'var(--accent)' }">3 ECVET</p>
        <p class="text-white/85"><LinkedText :text="t.certificationCredits" /></p>
      </section>
    </div>
  </div>

  <!-- Science -->
  <section class="py-12 lg:py-20" aria-labelledby="science-title">
    <div class="mx-auto max-w-4xl px-6 lg:px-10">
      <h2 id="science-title" class="display text-4xl font-semibold leading-tight sm:text-5xl">{{ t.science.title }}</h2>
      <p v-for="p in t.science.body" :key="p" class="mt-6 max-w-prose text-xl leading-relaxed text-white/80">{{ p }}</p>
    </div>
  </section>

  <!-- Book -->
  <section class="py-6 lg:py-16" aria-labelledby="book-title">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="grid items-center gap-8 sm:rounded-3xl sm:bg-(--bg-raised) sm:p-14 lg:grid-cols-2 lg:gap-16">
        <figure class="flex justify-center">
          <img
            :src="t.book.cover"
            :alt="t.book.title"
            width="601"
            height="801"
            loading="lazy"
            class="h-auto w-full max-w-xs rounded-lg shadow-2xl"
          />
        </figure>
        <article aria-labelledby="book-title">
          <p class="mb-3 text-base font-medium" :style="{ color: 'var(--accent)' }">{{ t.book.label }} · {{ t.book.kicker }}</p>
          <h2 id="book-title" class="display mb-6 text-3xl font-semibold leading-snug sm:text-4xl">{{ t.book.title }}</h2>
          <p v-for="p in t.book.body" :key="p" class="mb-4 max-w-prose text-lg leading-relaxed text-white/80">{{ p }}</p>
          <a
            :href="t.book.buyUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-accent mt-4 inline-block rounded-full px-6 py-3 font-semibold"
          >
            {{ t.book.buy }}
          </a>
        </article>
      </div>
    </div>
  </section>

  <!-- Auspices -->
  <section class="py-6 lg:py-20" aria-labelledby="auspices-title">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <h2 id="auspices-title" class="display mb-4 sm:mb-10 text-4xl font-semibold sm:text-5xl">{{ t.auspices.title }}</h2>
      <ul class="grid items-center justify-items-center gap-6 sm:grid-cols-3">
        <li
          v-for="l in logos"
          :key="l.key"
          class="flex h-40 items-center justify-center"
          :class="l.round ? ['w-40 overflow-hidden rounded-full bg-white', l.pad] : 'w-full ' + l.pad"
        >
          <a :href="l.url" target="_blank" rel="noopener noreferrer" class="flex h-full w-full items-center justify-center">
            <img :src="l.src" :alt="t.auspices.logos[l.key]" class="max-h-full max-w-full object-contain" loading="lazy" />
          </a>
        </li>
      </ul>
    </div>
  </section>

  <!-- Notify -->
  <section id="notify" class="scroll-mt-24 py-24 lg:py-32" aria-labelledby="notify-title">
    <div class="mx-auto max-w-7xl px-6 lg:px-10">
      <div class="relative isolate overflow-hidden rounded-3xl p-8 sm:p-14" :style="{ background: 'var(--bg-raised)' }">
        <div
          class="symbol-bg -z-10 -right-16 -bottom-20 h-80 w-80 opacity-[0.05]"
          :style="{ color: 'var(--accent)' }"
          aria-hidden="true"
        ></div>
        <h2 id="notify-title" class="display max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          {{ t.notify.title }}
        </h2>
        <p class="mt-5 mb-10 max-w-prose text-lg text-white/85">
          {{ t.notify.body(t.program.participants) }}
        </p>
        <NotifyForm />
      </div>
    </div>
  </section>
</template>
