<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-3xl md:text-4xl font-bold text-secondary dark:text-background text-center">
      {{ $t('services.title') }}
    </h1>
    <p class="mt-4 text-center text-primary dark:text-accent max-w-2xl mx-auto">
      {{ $t('services.subtitle') }}
    </p>
    
    <!-- Services Grid -->
    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Web Development Service -->
      <div class="bg-white dark:bg-secondary/80 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <div class="h-2 bg-primary"></div>
        <div class="p-6 md:p-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary dark:text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 class="ml-4 text-xl font-semibold text-secondary dark:text-background">{{ $t('services.webdev.title') }}</h2>
          </div>
          
          <p class="text-secondary/80 dark:text-background/80 leading-relaxed">
            {{ $t('services.webdev.description') }}
          </p>
          
          <div class="mt-6 space-y-3">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.webdev.skill_spa') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.webdev.skill_pwa') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.webdev.skill_responsiveDesign') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.webdev.skill_performance') }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Technical Consulting Service -->
      <div class="bg-white dark:bg-secondary/80 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <div class="h-2 bg-accent"></div>
        <div class="p-6 md:p-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent dark:text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 class="ml-4 text-xl font-semibold text-secondary dark:text-background">{{ $t('services.consulting.title') }}</h2>
          </div>
          
          <p class="text-secondary/80 dark:text-background/80 leading-relaxed">
            {{ $t('services.consulting.description') }}
          </p>
          
          <div class="mt-6 space-y-3">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.consulting.skill_architecture_planning') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.consulting.skill_codeQA') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.consulting.skill_stackSelection') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.consulting.skill_developerTraining') }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- UI/UX Design Service -->
      <div class="bg-white dark:bg-secondary/80 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <div class="h-2 bg-highlight"></div>
        <div class="p-6 md:p-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center text-highlight dark:text-highlight">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 class="ml-4 text-xl font-semibold text-secondary dark:text-background">{{ $t('services.uiux.title') }}</h2>
          </div>
          
          <p class="text-secondary/80 dark:text-background/80 leading-relaxed">
            {{ $t('services.uiux.description') }}
          </p>
          
          <div class="mt-6 space-y-3">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.uiux.skill_uiDesign') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.uiux.skill_uxResearch') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.uiux.skill_seoOptimization') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.uiux.skill_uiTesting') }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Performance Optimization Service -->
      <div class="bg-white dark:bg-secondary/80 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <div class="h-2 bg-primary"></div>
        <div class="p-6 md:p-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary dark:text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 class="ml-4 text-xl font-semibold text-secondary dark:text-background">{{ $t('services.performance.title') }}</h2>
          </div>
          
          <p class="text-secondary/80 dark:text-background/80 leading-relaxed">
            {{ $t('services.performance.description') }}
          </p>
          
          <div class="mt-6 space-y-3">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.performance.skill_web') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.performance.skill_asset') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.performance.skill_caching') }}</span>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t('services.performance.skill_mentoring') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- CTA Section -->
    <div class="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-8 md:p-12 text-center">
      <h2 class="text-2xl md:text-3xl font-bold text-background">{{ $t('contact.title') }}</h2>
      <p class="mt-4 text-background/90 max-w-2xl mx-auto">
        {{ $t('contact.description') }}
      </p>
      <div class="mt-8">
        <router-link to="/contact" class="inline-block bg-accent hover:bg-highlight text-background px-8 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 font-medium">
          {{ $t('contact.button_text') }}
        </router-link>
      </div>
    </div>
  </div>
</template>