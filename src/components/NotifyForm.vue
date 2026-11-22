<script setup>
import { ref, useId } from 'vue'
import { t, locale } from '../i18n'

defineProps({ compact: Boolean })

const id = useId()
const fullName = ref('')
const email = ref('')
const phone = ref('')
const website = ref('') // honeypot
const consent = ref(false)
const status = ref('idle') // idle | loading | success | error
const message = ref('')

const endpoint = import.meta.env.VITE_LOOPS_FORM_URL
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const phonePattern = /^\+?[\d\s().-]+$/

function fail(key) {
  status.value = 'error'
  message.value = key
}

async function submit() {
  message.value = ''
  const name = fullName.value.trim().replace(/\s+/g, ' ')
  const phoneValue = phone.value.trim()
  const phoneDigits = phoneValue.replace(/\D/g, '')
  if (!name) return fail('errName')
  if (!emailPattern.test(email.value.trim())) return fail('errInvalid')
  if (!phonePattern.test(phoneValue) || phoneDigits.length < 7 || phoneDigits.length > 15) return fail('errPhone')
  if (!consent.value) return fail('errConsent')
  if (website.value) {
    // Bots fill the hidden field. Pretend success.
    status.value = 'success'
    return
  }
  if (!endpoint) return fail('errNotConnected')
  status.value = 'loading'
  const [firstName, ...rest] = name.split(' ')
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        email: email.value.trim(),
        firstName,
        lastName: rest.join(' '),
        phone: phoneValue,
        userGroup: locale.value,
      }).toString(),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || data.success === false) throw new Error(data.message || `HTTP ${res.status}`)
    status.value = 'success'
  } catch {
    fail('errFailed')
  }
}

const inputClass =
  'w-full rounded-full border border-white/25 bg-white/5 px-5 py-3 text-base text-white placeholder:text-white/70 focus:border-transparent'
</script>

<template>
  <div v-if="status === 'success'" role="status" class="rounded-2xl border border-white/20 bg-white/5 p-5">
    <p class="display text-xl">{{ t.form.successTitle }}</p>
    <p class="mt-1 text-white/85">{{ t.form.successBody }}</p>
  </div>

  <form v-else novalidate @submit.prevent="submit" :class="compact ? 'max-w-md' : 'max-w-xl'">
    <div class="flex flex-col gap-4">
      <div>
        <label :for="`${id}-name`" class="mb-2 block text-sm font-medium text-white/80">{{ t.form.labelName }}</label>
        <input
          :id="`${id}-name`"
          v-model="fullName"
          type="text"
          name="name"
          autocomplete="name"
          :placeholder="t.form.placeholderName"
          :aria-invalid="status === 'error' && message === 'errName'"
          :aria-describedby="`${id}-msg`"
          :class="inputClass"
        />
      </div>
      <div>
        <label :for="`${id}-email`" class="mb-2 block text-sm font-medium text-white/80">{{ t.form.label }}</label>
        <input
          :id="`${id}-email`"
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          :placeholder="t.form.placeholder"
          :aria-invalid="status === 'error' && message === 'errInvalid'"
          :aria-describedby="`${id}-msg`"
          :class="inputClass"
        />
      </div>
      <div>
        <label :for="`${id}-phone`" class="mb-2 block text-sm font-medium text-white/80">{{ t.form.labelPhone }}</label>
        <input
          :id="`${id}-phone`"
          v-model="phone"
          type="tel"
          name="phone"
          autocomplete="tel"
          inputmode="tel"
          :placeholder="t.form.placeholderPhone"
          :aria-invalid="status === 'error' && message === 'errPhone'"
          :aria-describedby="`${id}-msg`"
          :class="inputClass"
        />
      </div>
    </div>
    <input v-model="website" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="absolute -left-[9999px] h-0 w-0 opacity-0" />
    <label class="mt-4 flex items-start gap-3 text-sm text-white/85">
      <input v-model="consent" type="checkbox" class="mt-0.5 size-4 shrink-0 accent-amber" />
      <span>
        {{ t.form.consentBefore }}
        <RouterLink to="/privacy" class="underline underline-offset-2 hover:text-white">{{ t.form.privacyLink }}</RouterLink>.
      </span>
    </label>
    <p :id="`${id}-msg`" role="alert" class="mt-3 min-h-5 text-sm text-amber-200">{{ status === 'error' ? t.form[message] : '' }}</p>
    <button
      type="submit"
      :disabled="status === 'loading'"
      class="btn-accent mt-2 rounded-full px-6 py-3 font-semibold disabled:opacity-60"
    >
      {{ status === 'loading' ? t.form.saving : t.form.submit }}
    </button>
  </form>
</template>
