import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import messages from './locales'
import router from './router'
import './assets/main.css';

const savedLocale = localStorage.getItem('locale');
const i18n = createI18n({
  legacy: false, 
  globalInjection: true,
  locale: savedLocale || 'de',
  fallbackLocale: 'en',
  messages,
})

createApp(App).use(router).use(i18n).mount('#app')
