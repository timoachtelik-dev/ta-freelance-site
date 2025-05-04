<template>
  <section class="min-h-[calc(100vh-64px)] bg-background dark:bg-gray-900 py-12 px-4 sm:px-8 md:px-16 flex flex-col items-center">
    <div class="w-full max-w-3xl mx-auto">
      <!-- Header section -->
      <div class="mb-12 text-center">
        <h1 class="text-3xl sm:text-4xl font-bold text-secondary dark:text-background mb-4">{{ $t('contact.title') }}</h1>
        <p class="text-lg text-primary dark:text-accent max-w-xl mx-auto">
          {{ $t('contact.description') }}
        </p>
      </div>

      <!-- Contact options -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <!-- Direct email -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-subtle p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="p-3 rounded-full bg-accent/10 text-highlight">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="ml-4 text-xl font-semibold text-secondary dark:text-background">{{ $t('contact.email') }}</h3>
          </div>
          <p class="text-primary dark:text-accent mb-4">{{ $t('contact.emailDescription') }}</p>
          <a href="mailto:kontakt@timo-achtelik.dev" class="text-highlight hover:text-accent dark:text-accent dark:hover:text-highlight font-medium transition-colors duration-300 flex items-center">
            kontakt@timo-achtelik.dev
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <!-- Response time -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-subtle p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="p-3 rounded-full bg-accent/10 text-highlight">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="ml-4 text-xl font-semibold text-secondary dark:text-background">{{ $t('contact.response') }}</h3>
          </div>
          <p class="text-primary dark:text-accent">{{ $t('contact.responseDescription') }}</p>
        </div>
      </div>

      <!-- Contact form -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-semibold text-secondary dark:text-background mb-6">{{ $t('contact.formTitle') }}</h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name field -->
          <div>
            <label for="name" class="block text-sm font-medium text-primary dark:text-accent mb-1">{{ $t('contact.name') }} *</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-700 dark:text-white transition-colors duration-200"
              :placeholder="$t('contact.namePlaceholder')" 
              required
            />
          </div>
          
          <!-- Email field -->
          <div>
            <label for="email" class="block text-sm font-medium text-primary dark:text-accent mb-1">{{ $t('contact.email') }} *</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-700 dark:text-white transition-colors duration-200"
              :placeholder="$t('contact.emailPlaceholder')" 
              required
            />
          </div>
          
          <!-- Subject field -->
          <div>
            <label for="subject" class="block text-sm font-medium text-primary dark:text-accent mb-1">{{ $t('contact.subject') }} *</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-700 dark:text-white transition-colors duration-200"
              :placeholder="$t('contact.subjectPlaceholder')" 
              required
            />
          </div>
          
          <!-- Message field -->
          <div>
            <label for="message" class="block text-sm font-medium text-primary dark:text-accent mb-1">{{ $t('contact.message') }} *</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5" 
              class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-accent dark:bg-gray-700 dark:text-white transition-colors duration-200"
              :placeholder="$t('contact.messagePlaceholder')" 
              required
            ></textarea>
          </div>
          
          <!-- Submit button -->
          <div>
            <button 
              type="submit" 
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-highlight hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300 shadow-subtle hover:shadow-md"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="flex items-center" >
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ $t('contact.sending') }}
              </span>
              <span v-else class="flex items-center">
                {{ $t('contact.send', 'Nachricht senden') }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
          
          <!-- Form status messages -->
          <div v-if="formStatus.show" :class="`p-4 rounded-md ${formStatus.isError ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300' : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'}`">
            {{ formStatus.message }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      formStatus: {
        show: false,
        isError: false,
        message: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      this.formStatus.show = false;
      
      try {
        // Here you would typically send the form data to your backend
        // For now, we'll simulate a successful submission after a delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success handling
        this.formStatus = {
          show: true,
          isError: false,
          message: this.$t('contact.successMessage')
        };
        
        // Reset form fields
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      } catch (error) {
        // Error handling
        this.formStatus = {
          show: true,
          isError: true,
          message: this.$t('contact.errorMessage')
        };
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>