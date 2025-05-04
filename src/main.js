import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createI18n } from 'vue-i18n'
import messages from './locales'
import router from './router'

const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages,
})

createApp(App).use(router).use(i18n).mount('#app')