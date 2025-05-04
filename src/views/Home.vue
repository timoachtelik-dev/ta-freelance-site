<template>
  <div class="container mx-auto px-6 py-12 lg:py-24">
    <div class="flex flex-col lg:flex-row items-center justify-between">
      <!-- Left column - Text content -->
      <div class="lg:w-1/2 mb-12 lg:mb-0">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary dark:text-background leading-tight">
          {{ $t('home.headline') }}
        </h1>
        <p class="mt-6 text-xl text-primary dark:text-accent">
          {{ $t('home.subline') }}
        </p>
        <div class="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <router-link to="/services" class="bg-primary hover:bg-primary/90 text-background px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 font-medium text-center">
            {{ $t('nav.services') }}
          </router-link>
          <router-link to="/contact" class="bg-accent hover:bg-accent/90 text-background px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 font-medium text-center">
            {{ $t('nav.contact') }}
          </router-link>
        </div>
      </div>
      
      <!-- Right column - Visual element -->
      <div class="lg:w-2/5">
        <div class="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl p-2 rotate-3 transition-all duration-300 hover:rotate-0">
          <div class="bg-background dark:bg-secondary rounded-xl overflow-hidden p-6">
            <div class="grid grid-cols-3 gap-2">
              <div v-for="i in 9" :key="i" class="h-20 rounded-lg" :class="[
                i % 3 === 1 ? 'bg-primary/10 dark:bg-primary/20' : 
                i % 3 === 2 ? 'bg-accent/10 dark:bg-accent/20' : 
                'bg-highlight/10 dark:bg-highlight/20'
              ]"></div>
            </div>
            <div class="mt-4 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Skills section -->
    <div class="mt-24">
      <h2 class="text-2xl md:text-3xl font-bold text-secondary dark:text-background text-center">
        {{ $t('home.skills.headline') }}
      </h2>
      <div class="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="(skill, index) in skills" :key="index" 
             class="p-6 rounded-xl bg-white dark:bg-secondary/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
          <div class="w-16 h-16 flex items-center justify-center rounded-full mb-4"
               :class="`bg-${skill.color}-100 dark:bg-${skill.color}-900/30 text-${skill.color}-600 dark:text-${skill.color}-400`">
            <div class="text-2xl" v-html="skill.icon"></div>
          </div>
          <h3 class="text-lg font-semibold text-secondary dark:text-background">{{ skill.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { 
          name: 'Vue.js', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>', 
          color: 'primary' 
        },
        { 
          name: 'Tailwind CSS', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>', 
          color: 'accent' 
        },
        { 
          name: 'JavaScript', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M0,0h24v24H0V0z" fill="none"/><path d="M3,3h18v18H3V3z M12,15c0,1.1,0.9,2,2,2s2-0.9,2-2v-2h-2v2h-0.2c-0.44,0-0.8-0.36-0.8-0.8v-1.5c0-0.44,0.36-0.8,0.8-0.8H16 c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2s-2,0.9-2,2v2h2V8h0.2c0.44,0,0.8,0.36,0.8,0.8v1.5c0,0.44-0.36,0.8-0.8,0.8H14 c-1.1,0-2,0.9-2,2V15z M8,11h2V8c0-1.1-0.9-2-2-2S6,6.9,6,8v5c0,1.1,0.9,2,2,2s2-0.9,2-2v-2H8V11z"/></svg>', 
          color: 'highlight' 
        },
        { 
          name: 'UI/UX Design', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16c2.21,0,4-1.79,4-4 C20,7.14,16.41,4,12,4z M6.5,12c-0.83,0-1.5-0.67-1.5-1.5S5.67,9,6.5,9S8,9.67,8,10.5S7.33,12,6.5,12z M9.5,8C8.67,8,8,7.33,8,6.5 S8.67,5,9.5,5S11,5.67,11,6.5S10.33,8,9.5,8z M14.5,8C13.67,8,13,7.33,13,6.5S13.67,5,14.5,5S16,5.67,16,6.5S15.33,8,14.5,8z M17.5,12c-0.83,0-1.5-0.67-1.5-1.5S16.67,9,17.5,9S19,9.67,19,10.5S18.33,12,17.5,12z"/></svg>', 
          color: 'primary' 
        },
        { 
          name: 'Responsive Design', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M4,6h16v10H4V6z M20,18H4v-2h16V18z M2,4v16h20V4H2z M4,2h16c1.1,0,2,0.9,2,2v16c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V4 C2,2.9,2.9,2,4,2z"/></svg>', 
          color: 'accent' 
        },
        { 
          name: 'Web Performance', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M11.99,2C6.47,2,2,6.48,2,12s4.47,10,9.99,10C17.52,22,22,17.52,22,12S17.52,2,11.99,2z M15.29,16.71L11,12.41V7h2v4.59 l3.71,3.71L15.29,16.71z"/></svg>', 
          color: 'highlight' 
        },
        { 
          name: 'Technical Consulting', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H5.17L4,17.17V4h16V16z"/></svg>', 
          color: 'primary' 
        },
        { 
          name: 'Agile Development', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M10,17l-5-5l1.41-1.41L10,14.17 l7.59-7.59L19,8L10,17z"/></svg>', 
          color: 'accent' 
        }
      ],
    }
  }
}
</script>