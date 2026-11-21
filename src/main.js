import { ViteSSG } from 'vite-ssg'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/figtree'
import '@fontsource-variable/source-sans-3'
import '@fontsource-variable/noto-serif'
import '@fontsource-variable/inter'
import './style.css'
import App from './App.vue'
import { routes } from './router/routes'
import { setLocale } from './i18n'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to) {
      if (to.hash) return { el: to.hash, behavior: 'smooth' }
      return { top: 0 }
    },
  },
  ({ router }) => {
    // The URL is the source of truth for the locale.
    router.beforeEach((to) => {
      setLocale(to.meta.locale)
    })
  },
)
