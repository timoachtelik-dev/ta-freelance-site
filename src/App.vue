<template>
  <div :class="darkMode ? 'dark' : ''">
    <main class="bg-background dark:bg-secondary text-secondary dark:text-background min-h-screen transition-colors duration-300">
      <Navbar @toggle-theme="toggleTheme" :darkMode="darkMode" />
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components: { Navbar, Footer },
  data() {
    return { 
      darkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches 
    }
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