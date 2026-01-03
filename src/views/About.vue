<template>
  <div class="container mx-auto px-6 py-12">
    <div class="max-w-5xl xl:max-w-6xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-secondary dark:text-background">
        {{ $t('about.title') }}
      </h1>
      
      <div class="mt-10 space-y-10">
        <!-- Bio Section -->
        <div class="bg-surface dark:bg-surfaceDark rounded-xl shadow-lg p-6 md:p-8">
          <div class="flex flex-col md:flex-row items-center md:items-start">
            <div class="md:w-1/3 flex justify-center mb-6 md:mb-0">
              <div class="relative w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary">
                <div class="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
                <img
                  v-if="portraitSrc"
                  :src="portraitSrc"
                  :alt="portraitAlt"
                  class="absolute inset-0 w-full h-full object-cover object-[0%_0%]"
                />
                <div v-else class="absolute inset-0 flex items-center justify-center text-4xl font-bold text-background">TA</div>
              </div>
            </div>
            
            <div class="md:w-2/3 md:pl-8">
              <h2 class="text-2xl font-semibold text-primary dark:text-accent">{{ $t('about.intro.title') }}</h2>
              <p class="mt-4 text-secondary dark:text-background leading-relaxed">
                {{ introContent1 }}
              </p>
              <p class="mt-4 text-secondary dark:text-background leading-relaxed">
                {{ introContent2 }}
              </p>
              <p v-if="introContent3" class="mt-4 text-secondary dark:text-background leading-relaxed">
                {{ introContent3 }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Experience Section -->
        <div>
          <h2 class="text-2xl font-semibold text-primary dark:text-accent mb-6">{{ $t('about.experience.title') }}</h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="(job, index) in localizedJobs" :key="index" class="bg-surface dark:bg-surfaceDark rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
              <div class="flex flex-col md:flex-row justify-between gap-1 md:items-center">
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
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="(edu, index) in localizedEducation" :key="index" class="bg-surface dark:bg-surfaceDark rounded-xl shadow-lg p-6 transition-all hover:shadow-xl">
              <div class="flex flex-col md:flex-row justify-between gap-1 md:items-center">
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
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { SITE_CONFIG, PROFILE_MODES } from '../config/site';

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'global'
});

onMounted(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Timo Achtelik",
      "url": "https://timo-achtelik.dev/about",
      "jobTitle": "Freelance Software Engineer & Technical Consultant",
      "sameAs": [
        "https://www.xing.com/profile/Timo_Achtelik2/web_profiles"
        // Add other profiles like LinkedIn, GitHub, etc.
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
});

// Computed properties to access localized data
const isApplicationMode = SITE_CONFIG.profileMode === PROFILE_MODES.APPLICATION;
const portraitSrc = SITE_CONFIG.portraitSrc;
const portraitAlt = SITE_CONFIG.portraitAlt;

const introContent1 = computed(() =>
  isApplicationMode ? t('about.intro.applicationContent1') : t('about.intro.content1')
);
const introContent2 = computed(() =>
  isApplicationMode ? t('about.intro.applicationContent2') : t('about.intro.content2')
);
const introContent3 = computed(() =>
  isApplicationMode ? t('about.intro.applicationContent3') : ''
);

const localizedJobs = computed(() => {
  const jobKeys = ['job1', 'job2', 'job3'];
  return jobKeys.map(key => ({
    title: t(`about.experience.jobs.${key}.title`),
    company: t(`about.experience.jobs.${key}.company`),
    period: t(`about.experience.jobs.${key}.period`),
    description: t(`about.experience.jobs.${key}.description`)
  }));
});

const localizedEducation = computed(() => {
  const eduKeys = ['edu1', 'edu2', 'edu3', 'edu4'];
  return eduKeys.map(key => ({
    degree: t(`about.education.${key}.degree`),
    school: t(`about.education.${key}.school`),
    period: t(`about.education.${key}.period`),
    description: t(`about.education.${key}.description`)
  }));
});
</script>
