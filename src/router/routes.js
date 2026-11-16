import HomeView from '../views/HomeView.vue'
import { pathFor } from '../i18n'

const pages = [
  { name: 'home', path: '/', component: HomeView, titleKey: 'home' },
  { name: 'privacy', path: '/privacy', component: () => import('../views/PrivacyView.vue'), titleKey: 'privacy' },
]

const notFound = () => import('../views/NotFoundView.vue')

// One definition, two locales: Greek at the root, English under /en.
export const routes = ['el', 'en'].flatMap((locale) => [
  ...pages.map(({ name, path, component, titleKey }) => ({
    path: pathFor(path, locale),
    name: `${name}-${locale}`,
    component,
    meta: { locale, titleKey },
  })),
  {
    path: `${locale === 'en' ? '/en' : ''}/:pathMatch(.*)*`,
    name: `not-found-${locale}`,
    component: notFound,
    meta: { locale, titleKey: 'notFound', noindex: true },
  },
])

// Paths to prerender (static routes only).
export const prerenderPaths = routes.filter((r) => !r.path.includes(':')).map((r) => r.path)
