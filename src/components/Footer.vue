<template>
    <footer class="bg-surface dark:bg-surfaceDark border-t border-gray-200 dark:border-gray-700 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Main footer content -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Logo and brief description -->
          <div>
            <div class="flex items-center mb-4">
              <span class="text-2xl font-bold text-highlight dark:text-accent">TA</span>
            </div>
            <p class="text-sm text-primary dark:text-accent mb-4">
              {{ $t('footer.description') }}
            </p>
            <!-- Social media -->
            <div class="flex space-x-4 mt-4">
              <a href="https://www.xing.com/profile/Timo_Achtelik2/web_profiles" target="_blank" rel="noopener noreferrer" 
                class="text-primary dark:text-accent hover:text-highlight dark:hover:text-highlight transition-colors duration-200"
                aria-label="Xing Profil">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.659-.962-.659H3.648v.016z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/timo-achtelik-112b2127a/" target="_blank" rel="noopener noreferrer"
                class="text-primary dark:text-accent hover:text-highlight dark:hover:text-highlight transition-colors duration-200"
                aria-label="LinkedIn Profil">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452H17.21V15.09c0-1.279-.023-2.924-1.782-2.924-1.782 0-2.054 1.392-2.054 2.832v5.454H10.14V9h3.112v1.561h.045c.434-.82 1.493-1.683 3.074-1.683 3.288 0 3.896 2.165 3.896 4.979v6.595zM5.337 7.433a1.82 1.82 0 1 1 0-3.64 1.82 1.82 0 0 1 0 3.64zM6.956 20.452H3.717V9h3.239v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
  
          <!-- Quick links -->
          <div>
            <h3 class="text-sm font-semibold text-secondary dark:text-background uppercase tracking-wider mb-4">
              {{ $t('footer.links') }}
            </h3>
            <ul class="space-y-2">
              <li>
                <router-link to="/" class="text-sm text-primary dark:text-accent hover:text-highlight dark:hover:text-highlight transition-colors duration-200">
                  {{ $t('nav.home') }}
                </router-link>
              </li>
              <li>
                <router-link to="/services" class="text-sm text-primary dark:text-accent hover:text-highlight dark:hover:text-highlight transition-colors duration-200">
                  {{ servicesLabel }}
                </router-link>
              </li>
              <li>
                <router-link to="/about" class="text-sm text-primary dark:text-accent hover:text-highlight dark:hover:text-highlight transition-colors duration-200">
                  {{ $t('nav.about') }}
                </router-link>
              </li>
              <li>
                <router-link to="/contact" class="text-sm text-primary dark:text-accent hover:text-highlight dark:hover:text-highlight transition-colors duration-200">
                  {{ $t('nav.contact') }}
                </router-link>
              </li>
            </ul>
          </div>
  
          <!-- Legal links -->
          <div>
            <h3 class="text-sm font-semibold text-secondary dark:text-background uppercase tracking-wider mb-4">
              {{ $t('footer.legal') }}
            </h3>
            <ul class="space-y-2">
              <li>
                <router-link to="/impressum" class="text-sm text-primary dark:text-accent hover:text-highlight dark:hover:text-highlight transition-colors duration-200">
                  {{ $t('footer.imprint') }}
                </router-link>
              </li>
              <li>
                <router-link to="/datenschutz" class="text-sm text-primary dark:text-accent hover:text-highlight dark:hover:text-highlight transition-colors duration-200">
                  {{ $t('footer.privacy') }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Bottom bar with copyright -->
        <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
          <p class="text-sm text-center text-primary dark:text-accent">
            © {{ currentYear }} Timo Achtelik. {{ $t('footer.rights') }}
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { SITE_CONFIG, PROFILE_MODES } from '../config/site';

  export default {
    name: 'Footer',
    computed: {
      currentYear() {
        return new Date().getFullYear();
      },
      servicesLabel() {
        return SITE_CONFIG.profileMode === PROFILE_MODES.APPLICATION
          ? this.$t('nav.focusAreas')
          : this.$t('nav.services');
      }
    }
  }
  </script>
