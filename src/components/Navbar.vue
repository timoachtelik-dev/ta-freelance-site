<template>
  <nav class="px-6 py-4 flex justify-between items-center border-b border-primary/10 shadow-sm">
    <router-link to="/" class="text-xl font-bold text-primary dark:text-accent transition-colors">
      <span class="font-extrabold">TA</span>
    </router-link>
    
    <div class="hidden md:flex items-center space-x-6">
      <router-link 
        v-for="item in navItems" 
        :key="item.path" 
        :to="item.path"
        class="text-secondary dark:text-background hover:text-primary dark:hover:text-accent font-medium transition-colors duration-200"
        :class="{ 'text-primary dark:text-accent': $route.path === item.path }"
      >
        {{ item.label }}
      </router-link>
      
      <!-- Language Toggle -->
      <button 
        @click="toggleLanguage" 
        class="text-secondary dark:text-background hover:text-primary dark:hover:text-accent transition-colors"
      >
        {{ currentLocale === 'de' ? 'EN' : 'DE' }}
      </button>
      
      <!-- Dark Mode Toggle -->
      <button 
        @click="$emit('toggle-theme')" 
        class="text-secondary dark:text-background hover:text-primary dark:hover:text-accent transition-colors"
        aria-label="Toggle dark mode"
      >
        <svg v-if="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu Button -->
    <button 
      @click="mobileMenuOpen = !mobileMenuOpen" 
      class="md:hidden text-secondary dark:text-background"
    >
      <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </nav>
  
  <!-- Mobile Menu -->
  <div v-if="mobileMenuOpen" class="md:hidden bg-background dark:bg-secondary border-b border-primary/10 shadow-md">
    <div class="flex flex-col px-6 py-4 space-y-4">
      <router-link 
        v-for="item in navItems" 
        :key="item.path" 
        :to="item.path"
        class="text-secondary dark:text-background hover:text-primary dark:hover:text-accent font-medium transition-colors"
        :class="{ 'text-primary dark:text-accent': $route.path === item.path }"
        @click="mobileMenuOpen = false"
      >
        {{ item.label }}
      </router-link>
      
      <div class="flex justify-between pt-2 border-t border-primary/10">
        <button 
          @click="toggleLanguage" 
          class="text-secondary dark:text-background hover:text-primary dark:hover:text-accent transition-colors"
        >
          {{ currentLocale === 'de' ? 'EN' : 'DE' }}
        </button>
        
        <button 
          @click="$emit('toggle-theme')" 
          class="text-secondary dark:text-background hover:text-primary dark:hover:text-accent transition-colors"
        >
          {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    darkMode: Boolean
  },
  emits: ['toggle-theme'],
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale;
    },
    navItems() {
      return [
        { path: '/', label: this.$t('nav.home') },
        { path: '/services', label: this.$t('nav.services') },
        { path: '/about', label: this.$t('nav.about') },
        { path: '/contact', label: this.$t('nav.contact') }
      ];
    }
  },
  methods: {
    toggleLanguage() {
      const newLocale = this.currentLocale === 'de' ? 'en' : 'de';
      this.$i18n.locale = newLocale;
      localStorage.setItem('locale', newLocale);
    }
  },
  mounted() {
    // Check for saved locale preference
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale) {
      this.$i18n.locale = savedLocale;
    }
  }
}
</script>