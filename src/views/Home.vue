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
   mounted() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://timo-achtelik.dev/",
      "name": "Timo Achtelik",
      "author": {
        "@type": "Person",
        "name": "Timo Achtelik"
      },
      "description": "Freelancer for Web Development & Technical Consulting"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  },
  data() {
    return {
      skills: [
        { 
          name: 'Vue.js / Nuxt.js', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>', 
          color: 'primary' 
        },
        { 
          name: 'Node.js & C#/.NET', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M10 12l-3-3m0 6l3-3m7-3l-3 3m0-6l3 3" /></svg>',
          color: 'accent' 
        },
        { 
          name: 'TypeScript', 
          icon: '<svg width="50px" height="50px" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_typescript</title><path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z"/></svg>',
          color: 'highlight' 
        }, 
        {
          name: 'SQL Databases', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
          color: 'primary' 
        },
        { 
          name: 'Docker', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 756.26 596.9" fill="currentColor" class="w-8 h-8"><path d="M743.96,245.25c-18.54-12.48-67.26-17.81-102.68-8.27-1.91-35.28-20.1-65.01-53.38-90.95l-12.32-8.27-8.21,12.4c-16.14,24.5-22.94,57.14-20.53,86.81,1.9,18.28,8.26,38.83,20.53,53.74-46.1,26.74-88.59,20.67-276.77,20.67H.06c-.85,42.49,5.98,124.23,57.96,190.77,5.74,7.35,12.04,14.46,18.87,21.31,42.26,42.32,106.11,73.35,201.59,73.44,145.66.13,270.46-78.6,346.37-268.97,24.98.41,90.92,4.48,123.19-57.88.79-1.05,8.21-16.54,8.21-16.54l-12.3-8.27ZM189.67,206.39h-81.7v81.7h81.7v-81.7ZM295.22,206.39h-81.7v81.7h81.7v-81.7ZM400.77,206.39h-81.7v81.7h81.7v-81.7ZM506.32,206.39h-81.7v81.7h81.7v-81.7ZM84.12,206.39H2.42v81.7h81.7v-81.7ZM189.67,103.2h-81.7v81.7h81.7v-81.7ZM295.22,103.2h-81.7v81.7h81.7v-81.7ZM400.77,103.2h-81.7v81.7h81.7v-81.7ZM400.77,0h-81.7v81.7h81.7V0Z"/></svg>',
          color: 'accent' 
        },
        { 
          name: 'Software Architecture',
          icon: '<svg fill="currentColor" width="50px" height="50px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg"> <g> <path d="m604.33 211.37h-408.67c-4.1719 0.003906-8.168 1.6641-11.117 4.6133s-4.6055 6.9492-4.6094 11.117v345.79c0.003906 4.1719 1.6602 8.168 4.6094 11.117s6.9453 4.6094 11.117 4.6172h408.67c4.1719-0.007812 8.168-1.668 11.117-4.6172s4.6055-6.9453 4.6133-11.117v-345.79c-0.007812-4.168-1.6641-8.168-4.6133-11.117s-6.9453-4.6094-11.117-4.6133zm-0.015625 15.734v47.137h-408.65l-0.003907-47.129zm-408.64 345.79-0.011719-282.91h408.65v282.9zm408.65 7.8594v-7.8711h0.007813z"/> <path d="m525.74 250.68c0 4.3398-3.5195 7.8594-7.8594 7.8594-4.3398 0-7.8594-3.5195-7.8594-7.8594 0-4.3398 3.5195-7.8594 7.8594-7.8594 4.3398 0 7.8594 3.5195 7.8594 7.8594"/> <path d="m557.18 250.68c0 4.3398-3.5156 7.8594-7.8555 7.8594-4.3438 0-7.8594-3.5195-7.8594-7.8594 0-4.3398 3.5156-7.8594 7.8594-7.8594 4.3398 0 7.8555 3.5195 7.8555 7.8594"/> <path d="m588.61 250.68c0 4.3398-3.5195 7.8594-7.8594 7.8594s-7.8594-3.5195-7.8594-7.8594c0-4.3398 3.5195-7.8594 7.8594-7.8594s7.8594 3.5195 7.8594 7.8594"/> <path d="m341.13 483.25c-1.3945 0-2.7578-0.37109-3.9609-1.0703l-66.883-39.027c-2.418-1.4102-3.9023-4-3.9023-6.8008 0-2.7969 1.4844-5.3867 3.9023-6.7969l66.883-39.031c3.7539-2.1914 8.5742-0.92188 10.766 2.832 2.1914 3.7578 0.92188 8.5781-2.832 10.766l-55.227 32.23 55.227 32.227c3.0703 1.793 4.5586 5.4258 3.6289 8.8594-0.92969 3.4297-4.0469 5.8164-7.6016 5.8125z"/> <path d="m458.87 483.25c-3.5586 0.003906-6.6758-2.3828-7.6055-5.8125-0.92969-3.4336 0.55859-7.0664 3.6289-8.8594l55.227-32.227-55.227-32.23c-3.7539-2.1875-5.0234-7.0078-2.832-10.766 2.1914-3.7539 7.0117-5.0234 10.766-2.832l66.883 39.031c2.418 1.4102 3.9062 4 3.9062 6.7969 0 2.8008-1.4883 5.3906-3.9062 6.8008l-66.883 39.027c-1.1992 0.69922-2.5664 1.0703-3.957 1.0703z"/> <path d="m380.08 490.78c-2.5977-0.003906-5.0273-1.2852-6.4922-3.4258-1.4688-2.1406-1.7852-4.8711-0.85156-7.293l39.836-102.94v0.003906c0.74609-1.957 2.2422-3.5352 4.1562-4.3867 1.9141-0.85156 4.0859-0.90625 6.0391-0.15234 1.957 0.75781 3.5273 2.2617 4.3672 4.1797 0.84375 1.9141 0.88672 4.0898 0.12109 6.0391l-39.836 102.94c-1.1719 3.0312-4.0898 5.0312-7.3398 5.0352z"/> </g> </svg>',
          color: 'highlight' 
        },
        { 
          name: 'Agile & Scrum', 
          icon: '<svg fill="currentColor" width="50px" height="50px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">  <g>   <path d="m632.38 160.06h-464.76c-3.1172 0-5.668 2.5508-5.668 5.668v468.54c0 3.1172 2.5508 5.668 5.668 5.668h464.77c3.1172 0 5.668-2.5508 5.668-5.668l-0.003906-468.54c0-3.1172-2.5508-5.668-5.668-5.668zm-5.668 468.54h-453.43v-457.21h453.43z"/>   <path d="m209.24 273.61h110.02v317.53c0 3.1172 2.5508 5.668 5.668 5.668 3.1172 0 5.668-2.5508 5.668-5.668v-317.53h138.83v317.53c0 3.1172 2.5508 5.668 5.668 5.668 3.1172 0 5.668-2.5508 5.668-5.668v-317.53h110.02c3.1172 0 5.668-2.5508 5.668-5.668s-2.5508-5.668-5.668-5.668h-110.02v-53.402c0-3.1172-2.5508-5.668-5.668-5.668-3.1172 0-5.668 2.5508-5.668 5.668v53.402h-138.86v-53.402c0-3.1172-2.5508-5.668-5.668-5.668-3.1172 0-5.668 2.5508-5.668 5.668v53.402h-109.99c-3.1172 0-5.668 2.5508-5.668 5.668s2.5195 5.668 5.668 5.668z"/>   <path d="m285.32 296.72h-70.977c-3.1172 0-5.668 2.5508-5.668 5.668v57.023c0 3.1172 2.5508 5.668 5.668 5.668h70.973c3.1172 0 5.668-2.5508 5.668-5.668l0.003906-57.023c0-3.1172-2.5508-5.668-5.668-5.668zm-5.668 57.023h-59.641v-45.688h59.637z"/>   <path d="m285.32 388.19h-70.977c-3.1172 0-5.668 2.5508-5.668 5.668v57.023c0 3.1172 2.5508 5.668 5.668 5.668h70.973c3.1172 0 5.668-2.5508 5.668-5.668l0.003906-57.023c0-3.1172-2.5508-5.668-5.668-5.668zm-5.668 57.023h-59.641v-45.688h59.637z"/>   <path d="m232.01 336.23 9.2578 8.2812c1.0703 0.97656 2.4258 1.4492 3.7773 1.4492 1.4492 0 2.8984-0.56641 4-1.668l18.797-18.797c2.2031-2.2031 2.2031-5.793 0-8.0312-2.2031-2.2344-5.793-2.2031-8.0312 0l-15.02 15.02-5.2578-4.7227c-2.332-2.0781-5.918-1.8906-7.9961 0.44141-2.043 2.3594-1.8555 5.9492 0.47266 8.0273z"/>   <path d="m435.48 296.72h-70.973c-3.1172 0-5.668 2.5508-5.668 5.668v57.023c0 3.1172 2.5508 5.668 5.668 5.668h70.973c3.1172 0 5.668-2.5508 5.668-5.668v-57.023c0-3.1172-2.5508-5.668-5.668-5.668zm-5.668 57.023h-59.637v-45.688h59.637z"/>   <path d="m585.65 296.72h-70.973c-3.1172 0-5.668 2.5508-5.668 5.668v57.023c0 3.1172 2.5508 5.668 5.668 5.668h70.973c3.1172 0 5.668-2.5508 5.668-5.668v-57.023c0-3.1172-2.5195-5.668-5.668-5.668zm-5.668 57.023h-59.637v-45.688h59.637z"/>   <path d="m585.65 388.19h-70.973c-3.1172 0-5.668 2.5508-5.668 5.668v57.023c0 3.1172 2.5508 5.668 5.668 5.668h70.973c3.1172 0 5.668-2.5508 5.668-5.668v-57.023c0-3.1172-2.5195-5.668-5.668-5.668zm-5.668 57.023h-59.637v-45.688h59.637z"/>   <path d="m585.65 479.7h-70.973c-3.1172 0-5.668 2.5508-5.668 5.668v57.023c0 3.1172 2.5508 5.668 5.668 5.668h70.973c3.1172 0 5.668-2.5508 5.668-5.668v-57.023c0-3.1484-2.5195-5.668-5.668-5.668zm-5.668 56.992h-59.637v-45.688h59.637z"/>   <path d="m532.38 519.18 9.2578 8.2812c1.0703 0.97656 2.4258 1.4492 3.7773 1.4492 1.4492 0 2.8984-0.56641 4-1.668l18.797-18.797c2.2031-2.2031 2.2031-5.793 0-8.0312-2.2031-2.2031-5.793-2.2031-8.0312 0l-15.02 15.02-5.2578-4.7227c-2.332-2.0781-5.918-1.8906-7.9961 0.44141-2.0781 2.3594-1.8906 5.9492 0.47266 8.0273z"/>   <path d="m382.18 336.23 9.2578 8.2812c1.0703 0.97656 2.4258 1.4492 3.7773 1.4492 1.4492 0 2.8984-0.56641 4-1.668l18.797-18.797c2.2031-2.2031 2.2031-5.793 0-8.0312-2.2031-2.2031-5.793-2.2031-8.0312 0l-15.016 15.02-5.2578-4.7227c-2.332-2.0781-5.918-1.8906-7.9961 0.44141-2.0508 2.3594-1.8594 5.9492 0.46875 8.0273z"/>  </g> </svg>', 
          color: 'primary' 
        },
        { 
          name: 'AngularJS Migration', 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M12 2L3 5v11l9 4 9-4V5L12 2Z" /><path d="m3 5 9 4 9-4" /><path d="M12 2v20" /><path d="m21 16-9-4" /><path d="m3 16 9-4" /><path d="m9 8 3 4 3-4" /><path d="M12 12v4" /></svg>',
          color: 'accent' 
        }
      ],
    }
  }
}
</script>