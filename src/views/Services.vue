<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-3xl md:text-4xl font-bold text-secondary dark:text-background text-center">
      {{ isApplicationMode ? $t('focus.title') : $t('services.title') }}
    </h1>
    <p class="mt-4 text-center text-primary dark:text-accent max-w-2xl mx-auto">
      {{ isApplicationMode ? $t('focus.subtitle') : $t('services.subtitle') }}
    </p>
    
    <div v-if="!isApplicationMode" class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

      <div class="bg-surface dark:bg-surfaceDark rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <div class="h-2 bg-primary"></div>
        <div class="p-6 md:p-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary dark:text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h2 class="ml-4 text-xl font-semibold text-secondary dark:text-background">{{ $t('services.fullstack.title') }}</h2>
          </div>
          <p class="text-secondary/80 dark:text-background/80 leading-relaxed">{{ $t('services.fullstack.description') }}</p>
          <div class="mt-6 space-y-3">
            <div class="flex items-center" v-for="skill in ['skill_frontend', 'skill_backend', 'skill_database', 'skill_testing']" :key="skill">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t(`services.fullstack.${skill}`) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-surface dark:bg-surfaceDark rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <div class="h-2 bg-accent"></div>
        <div class="p-6 md:p-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent dark:text-accent">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
               </svg>
            </div>
            <h2 class="ml-4 text-xl font-semibold text-secondary dark:text-background">{{ $t('services.consulting.title') }}</h2>
          </div>
          <p class="text-secondary/80 dark:text-background/80 leading-relaxed">{{ $t('services.consulting.description') }}</p>
          <div class="mt-6 space-y-3">
             <div class="flex items-center" v-for="skill in ['skill_architecture', 'skill_reviews', 'skill_tech_selection', 'skill_vibe_coding', 'skill_seo']" :key="skill">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t(`services.consulting.${skill}`) }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-surface dark:bg-surfaceDark rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <div class="h-2 bg-highlight"></div>
        <div class="p-6 md:p-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-highlight/10 rounded-full flex items-center justify-center text-highlight dark:text-highlight">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <h2 class="ml-4 text-xl font-semibold text-secondary dark:text-background">{{ $t('services.modernization.title') }}</h2>
          </div>
          <p class="text-secondary/80 dark:text-background/80 leading-relaxed">{{ $t('services.modernization.description') }}</p>
           <div class="mt-6 space-y-3">
             <div class="flex items-center" v-for="skill in ['skill_analysis', 'skill_migration', 'skill_refactoring', 'skill_integration']" :key="skill">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t(`services.modernization.${skill}`) }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-surface dark:bg-surfaceDark rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <div class="h-2 bg-secondary"></div>
        <div class="p-6 md:p-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary dark:text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h2 class="ml-4 text-xl font-semibold text-secondary dark:text-background">{{ $t('services.devops.title') }}</h2>
          </div>
          <p class="text-secondary/80 dark:text-background/80 leading-relaxed">{{ $t('services.devops.description') }}</p>
          <div class="mt-6 space-y-3">
             <div class="flex items-center" v-for="skill in ['skill_scrum', 'skill_ci_cd', 'skill_docker', 'skill_mentoring']" :key="skill">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">{{ $t(`services.devops.${skill}`) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="area in focusAreas"
        :key="area.key"
        class="bg-surface dark:bg-surfaceDark rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
      >
        <div class="h-2" :class="area.barClass"></div>
        <div class="p-6 md:p-8">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 rounded-full flex items-center justify-center" :class="area.iconWrapperClass">
              <div :class="area.iconClass" v-html="area.icon"></div>
            </div>
            <h2 class="ml-4 text-xl font-semibold text-secondary dark:text-background">
              {{ $t(`focus.areas.${area.key}.title`) }}
            </h2>
          </div>
          <p class="text-secondary/80 dark:text-background/80 leading-relaxed">
            {{ $t(`focus.areas.${area.key}.description`) }}
          </p>
          <div class="mt-6 space-y-3">
            <div class="flex items-center" v-for="item in area.items" :key="item">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="area.checkClass" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2 text-secondary/90 dark:text-background/90">
                {{ $t(`focus.areas.${area.key}.${item}`) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-8 md:p-12 text-center">
      <h2 class="text-2xl md:text-3xl font-bold text-background">
        {{ isApplicationMode ? $t('focus.ctaTitle') : $t('contact.title') }}
      </h2>
      <p class="mt-4 text-background/90 max-w-2xl mx-auto">
        {{ isApplicationMode ? $t('focus.ctaDescription') : $t('contact.description') }}
      </p>
      <div class="mt-8">
        <router-link to="/contact" class="inline-block bg-accent hover:bg-highlight text-background px-8 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 font-medium">
          {{ isApplicationMode ? $t('focus.ctaButton') : $t('contact.button_text') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SITE_CONFIG, PROFILE_MODES } from '../config/site';

const isApplicationMode = SITE_CONFIG.profileMode === PROFILE_MODES.APPLICATION;

const focusAreas = [
  {
    key: 'engineering',
    barClass: 'bg-primary',
    iconWrapperClass: 'bg-primary/10 text-primary',
    iconClass: 'text-primary',
    checkClass: 'text-accent',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
    items: ['item1', 'item2', 'item3'],
  },
  {
    key: 'quality',
    barClass: 'bg-accent',
    iconWrapperClass: 'bg-accent/10 text-accent',
    iconClass: 'text-accent',
    checkClass: 'text-highlight',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>',
    items: ['item1', 'item2', 'item3'],
  },
  {
    key: 'architecture',
    barClass: 'bg-secondary',
    iconWrapperClass: 'bg-secondary/10 text-secondary',
    iconClass: 'text-secondary',
    checkClass: 'text-accent',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M4 21V7a2 2 0 012-2h4m8 16V9a2 2 0 00-2-2h-4m-4 14V11a2 2 0 012-2h4" /></svg>',
    items: ['item1', 'item2', 'item3'],
  },
  {
    key: 'collaboration',
    barClass: 'bg-highlight',
    iconWrapperClass: 'bg-highlight/10 text-highlight',
    iconClass: 'text-highlight',
    checkClass: 'text-primary',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
    items: ['item1', 'item2', 'item3'],
  },
];
</script>
