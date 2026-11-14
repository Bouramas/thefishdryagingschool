import { createApp } from 'vue'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/figtree'
import '@fontsource-variable/noto-serif'
import '@fontsource-variable/inter'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
