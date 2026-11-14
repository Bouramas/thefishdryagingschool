import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const hostname = env.VITE_SITE_URL || 'https://thefishdryagingschool.com'
  return {
    plugins: [
      vue(),
      tailwindcss(),
      Sitemap({
        hostname,
        dynamicRoutes: ['/privacy'],
        exclude: ['/404'],
        generateRobotsTxt: false,
      }),
    ],
  }
})
