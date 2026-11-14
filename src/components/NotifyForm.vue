<script setup>
import { ref, useId } from 'vue'
import { t } from '../i18n'

defineProps({ compact: Boolean })

const id = useId()
const email = ref('')
const website = ref('') // honeypot
const consent = ref(false)
const status = ref('idle') // idle | loading | success | error
const message = ref('')

const endpoint = import.meta.env.VITE_SUBSCRIBE_URL
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

async function submit() {
  message.value = ''
  if (!emailPattern.test(email.value.trim())) {
    status.value = 'error'
    message.value = 'errInvalid'
    return
  }
  if (!consent.value) {
    status.value = 'error'
    message.value = 'errConsent'
    return
  }
  if (website.value) {
    // Bots fill the hidden field. Pretend success.
    status.value = 'success'
    return
  }
  if (!endpoint) {
    status.value = 'error'
    message.value = 'errNotConnected'
    return
  }
  status.value = 'loading'
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email: email.value.trim() }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    status.value = 'success'
  } catch {
    status.value = 'error'
    message.value = 'errFailed'
  }
}
</script>

<template>
  <div v-if="status === 'success'" role="status" class="rounded-2xl border border-white/20 bg-white/5 p-5">
    <p class="display text-xl">{{ t.form.successTitle }}</p>
    <p class="mt-1 text-white/70">{{ t.form.successBody }}</p>
  </div>

  <form v-else novalidate @submit.prevent="submit" :class="compact ? 'max-w-md' : 'max-w-xl'">
    <label :for="id" class="mb-2 block text-sm font-medium text-white/80">{{ t.form.label }}</label>
    <div class="flex flex-col gap-3 sm:flex-row">
      <input
        :id="id"
        v-model="email"
        type="email"
        name="email"
        autocomplete="email"
        :placeholder="t.form.placeholder"
        :aria-invalid="status === 'error'"
        :aria-describedby="`${id}-msg`"
        class="min-w-0 flex-1 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-base text-white placeholder:text-white/40 focus:border-transparent"
      />
      <button
        type="submit"
        :disabled="status === 'loading'"
        class="rounded-full px-6 py-3 font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
        :style="{ background: 'var(--accent)' }"
      >
        {{ status === 'loading' ? t.form.saving : t.form.submit }}
      </button>
    </div>
    <input v-model="website" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="absolute -left-[9999px] h-0 w-0 opacity-0" />
    <label class="mt-3 flex items-start gap-3 text-sm text-white/65">
      <input v-model="consent" type="checkbox" class="mt-0.5 size-4 shrink-0 accent-amber" />
      <span>
        {{ t.form.consentBefore }}
        <RouterLink to="/privacy" class="underline underline-offset-2 hover:text-white">{{ t.form.privacyLink }}</RouterLink>.
      </span>
    </label>
    <p :id="`${id}-msg`" role="alert" class="mt-3 min-h-5 text-sm text-red-300">{{ status === 'error' ? t.form[message] : '' }}</p>
  </form>
</template>
