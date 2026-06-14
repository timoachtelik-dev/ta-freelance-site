<template>
  <div :class="darkMode ? 'dark' : ''">
    <main class="bg-background dark:bg-secondaryDark text-secondary dark:text-background min-h-screen transition-colors duration-300">
      <Navbar @toggle-theme="toggleTheme" :darkMode="darkMode" />
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { SITE_CONFIG } from './config/site'

// Static Person schema (3.4): rendered into every prerendered page so the
// crawler sees it without executing JS. Language-neutral, so not localized.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Timo Achtelik',
  jobTitle: 'Lead Software Engineer',
  worksFor: { '@type': 'Organization', name: 'BAYOOTEC GmbH' },
  url: SITE_CONFIG.siteOrigin,
  sameAs: [
    'https://www.linkedin.com/in/timo-achtelik-112b2127a/',
    'https://www.xing.com/profile/Timo_Achtelik2/web_profiles',
    'https://github.com/timoachtelik-dev',
  ],
  knowsAbout: ['Angular', 'Vue.js', 'TypeScript', 'Node.js'],
}

export default {
  components: { Navbar, Footer },
  data() {
    // SSR-safe default; the real preference is applied client-side in mounted().
    return { darkMode: false }
  },
  setup() {
    const { t, locale } = useI18n()
    const route = useRoute()
    const origin = SITE_CONFIG.siteOrigin

    const seoKey = computed(() => route.meta?.seoKey || 'home')
    const title = computed(() => t(`seo.${seoKey.value}.title`))
    const description = computed(() => t(`seo.${seoKey.value}.description`))
    const url = computed(() => origin + (route.path === '/' ? '/' : route.path))

    useHead({
      title,
      htmlAttrs: { lang: locale },
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url },
        { property: 'og:image', content: `${origin}/social-preview.jpg` },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'canonical', href: url }],
      script: [
        { type: 'application/ld+json', innerHTML: JSON.stringify(personSchema) },
      ],
    })
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
    },
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      this.darkMode = savedTheme === 'dark'
    } else if (window.matchMedia) {
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },
  watch: {
    darkMode(newValue) {
      localStorage.setItem('theme', newValue ? 'dark' : 'light')
    },
  },
}
</script>
