<template>
  <div class="container mx-auto px-6 py-12">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-secondary dark:text-background">
        {{ $t('about.title') }}
      </h1>
      
      <div class="mt-10 space-y-10">
        <!-- Bio Section -->
        <div class="bg-white dark:bg-secondary/80 rounded-xl shadow-lg p-6 md:p-8">
          <div class="flex flex-col md:flex-row items-center md:items-start">
            <div class="md:w-1/3 flex justify-center mb-6 md:mb-0">
              <div class="relative w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary">
                <!-- Replace with actual image when available -->
                <div class="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
                <div class="absolute inset-0 flex items-center justify-center text-4xl font-bold text-background">TA</div>
              </div>
            </div>
            
            <div class="md:w-2/3 md:pl-8">
              <h2 class="text-2xl font-semibold text-primary dark:text-accent">{{ $t('about.intro.title') }}</h2>
              <p class="mt-4 text-secondary dark:text-background leading-relaxed">
                {{ $t('about.intro.content1') }}
              </p>
              <p class="mt-4 text-secondary dark:text-background leading-relaxed">
                {{ $t('about.intro.content2') }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Experience Section -->
        <div>
          <h2 class="text-2xl font-semibold text-primary dark:text-accent mb-6">{{ $t('about.experience.title') }}</h2>
          
          <div class="space-y-6">
            <div v-for="(job, index) in localizedJobs" :key="index" class="bg-white dark:bg-secondary/80 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
              <div class="flex flex-col md:flex-row justify-between md:items-center">
                <h3 class="text-xl font-semibold text-secondary dark:text-background">{{ job.title }}</h3>
                <span class="text-accent font-medium mt-1 md:mt-0">{{ job.period }}</span>
              </div>
              <p class="text-primary dark:text-accent/90 mt-1">{{ job.company }}</p>
              <p class="mt-4 text-secondary/80 dark:text-background/80 leading-relaxed">{{ job.description }}</p>
            </div>
          </div>
        </div>
        
        <!-- Education Section -->
        <div>
          <h2 class="text-2xl font-semibold text-primary dark:text-accent mb-6">{{ $t('about.education.title') }}</h2>
          
          <div class="space-y-6">
            <div v-for="edu in localizedEducation" :key="edu.degree" class="bg-white dark:bg-secondary/80 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
              <div class="flex flex-col md:flex-row justify-between md:items-center">
                <h3 class="text-xl font-semibold text-secondary dark:text-background">{{ edu.degree }}</h3>
                <span class="text-accent font-medium mt-1 md:mt-0">{{ edu.period }}</span>
              </div>
              <p class="text-primary dark:text-accent/90 mt-1">{{ edu.school }}</p>
              <p class="mt-4 text-secondary/80 dark:text-background/80 leading-relaxed">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({
  inheritLocale: true,
  useScope: 'global'
});

// Computed properties to access localized data
const localizedJobs = computed(() => {
  const jobKeys = ['job1', 'job2'];
  return jobKeys.map(key => ({
    title: t(`about.experience.jobs.${key}.title`),
    company: t(`about.experience.jobs.${key}.company`),
    period: t(`about.experience.jobs.${key}.period`),
    description: t(`about.experience.jobs.${key}.description`)
  }));
});

const localizedEducation = computed(() => {
  const eduKeys = ['edu1', 'edu2'];
  return eduKeys.map(key => ({
    degree: t(`about.education.${key}.degree`),
    school: t(`about.education.${key}.school`),
    period: t(`about.education.${key}.period`),
    description: t(`about.education.${key}.description`)
  }));
});
</script>