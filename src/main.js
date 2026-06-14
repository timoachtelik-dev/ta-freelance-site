import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import messages from './locales'
import { routes, scrollBehavior } from './router'
import './assets/main.css'

// ViteSSG replaces createApp().mount(): it renders every route to static HTML
// at build time and hydrates on the client. The setup callback runs in both
// environments, so any browser-only access must be guarded by `isClient`.
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior, base: import.meta.env.BASE_URL },
  ({ app }) => {
    // Always initialize with the prerendered locale ('de') so the first client
    // render matches the server HTML. Navbar.vue applies the visitor's saved
    // locale in mounted(), i.e. after hydration, avoiding a mismatch.
    const i18n = createI18n({
      legacy: false,
      globalInjection: true,
      locale: 'de',
      fallbackLocale: 'en',
      messages,
    })
    app.use(i18n)
  },
)
