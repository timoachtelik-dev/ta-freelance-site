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
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { SITE_CONFIG, PROFILE_MODES } from './config/site';

const applyDocumentTitle = (title) => {
  if (!title) {
    return;
  }
  document.title = title;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
    return;
  }

  const meta = document.createElement('meta');
  meta.setAttribute('property', 'og:title');
  meta.setAttribute('content', title);
  document.head.appendChild(meta);
};

const getTitleKey = () => (
  SITE_CONFIG.profileMode === PROFILE_MODES.APPLICATION
    ? 'meta.title.application'
    : 'meta.title.freelance'
);
export default {
  components: { Navbar, Footer },
  data() {
    return { 
      darkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
    }
  },
  setup() {
    const { locale, t } = useI18n();

    const updateMeta = () => {
      const title = t(getTitleKey());
      applyDocumentTitle(title);
    };

    watch(locale, (newLocale) => {
      document.documentElement.lang = newLocale;
      updateMeta();
    }, { immediate: true });
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
    }
  },
  mounted() {
    // Check for user preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode = savedTheme === 'dark';
    }
  },
  watch: {
    darkMode(newValue) {
      // Save preference to localStorage
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
    }
  }
}
</script>
