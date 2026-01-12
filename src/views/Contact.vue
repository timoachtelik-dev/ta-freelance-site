<template>
  <section class="min-h-[calc(100vh-64px)] bg-background dark:bg-secondaryDark py-12 px-4 sm:px-8 md:px-16 flex flex-col items-center">
    <div class="w-full max-w-5xl xl:max-w-6xl mx-auto">
      <!-- Header section -->
      <div class="mb-12 text-center">
        <h1 class="text-3xl sm:text-4xl font-bold text-secondary dark:text-background mb-4">{{ $t('contact.title') }}</h1>
        <p class="text-lg text-primary dark:text-accent max-w-xl mx-auto">
          {{ isApplicationMode ? $t('contact.applicationDescription') : $t('contact.description') }}
        </p>
      </div>

      <!-- Contact options -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <!-- Direct email -->
        <div class="bg-surface dark:bg-surfaceDark rounded-lg shadow-subtle p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center mb-4">
            <div class="p-3 rounded-full bg-accent/10 text-highlight">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="ml-4 text-xl font-semibold text-secondary dark:text-background">{{ $t('contact.email') }}</h3>
          </div>
          <p class="text-primary dark:text-accent mb-4">{{ $t('contact.emailDescription') }}</p>
          <a :href="`mailto:${contactEmail}`" class="text-highlight hover:text-accent dark:text-accent dark:hover:text-highlight font-medium transition-colors duration-300 flex items-center">
            {{ contactEmail }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <!-- Response time -->
        <div class="bg-surface dark:bg-surfaceDark rounded-lg shadow-subtle p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
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

      <div class="bg-surface dark:bg-surfaceDark rounded-lg shadow-subtle p-6 mb-12">
        <h3 class="text-xl font-semibold text-secondary dark:text-background mb-2">
          {{ $t('contact.otherWaysTitle') }}
        </h3>
        <p class="text-primary dark:text-accent">
          {{ $t('contact.otherWaysDescription') }}
        </p>
        <div class="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <a
            :href="cvUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-4 py-2 rounded-md bg-highlight text-white hover:bg-accent transition-colors duration-200"
          >
            {{ $t('contact.cvLabel') }}
          </a>
          <a
            v-for="profile in profiles"
            :key="profile.name"
            :href="profile.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-secondary dark:text-background hover:border-highlight hover:text-highlight transition-colors duration-200"
          >
            {{ profile.name }}
          </a>
        </div>
      </div>

      <!-- Contact form -->
      <div class="bg-surface dark:bg-surfaceDark rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-semibold text-secondary dark:text-background mb-6">{{ $t('contact.formTitle') }}</h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
            <label for="company" class="block text-sm font-medium text-primary dark:text-accent mb-1">
              {{ $t('contact.honeypotLabel') }}
            </label>
            <input
              type="text"
              id="company"
              v-model="honeypot"
              autocomplete="off"
              tabindex="-1"
            />
          </div>
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

          <div v-if="turnstileEnabled" class="flex flex-col items-center gap-2">
            <p class="text-sm text-primary dark:text-accent">{{ $t('contact.captchaLabel') }}</p>
            <div ref="turnstileContainer"></div>
            <p v-if="turnstileStatus === 'error'" class="text-xs text-red-600 dark:text-red-300 text-center">
              {{ $t('contact.captchaUnavailable') }}
            </p>
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
import { SITE_CONFIG, PROFILE_MODES } from '../config/site';

const ERROR_CODE_TO_MESSAGE_KEY = {
  INVALID_NAME: 'contact.errorInvalidName',
  INVALID_EMAIL: 'contact.errorInvalidEmail',
  INVALID_SUBJECT: 'contact.errorInvalidSubject',
  INVALID_MESSAGE: 'contact.errorInvalidMessage',
  CAPTCHA_NOT_CONFIGURED: 'contact.errorCaptchaUnavailable',
  CAPTCHA_VERIFICATION_FAILED: 'contact.errorCaptchaFailed',
  EMAIL_SERVICE_NOT_CONFIGURED: 'contact.errorEmailServiceNotConfigured',
  EMAIL_DELIVERY_FAILED: 'contact.errorEmailDeliveryFailed',
  ORIGIN_NOT_ALLOWED: 'contact.errorOriginNotAllowed',
  RATE_LIMITED: 'contact.errorRateLimited',
  SERVER_ERROR: 'contact.errorServer'
};

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
      honeypot: '',
      captchaToken: '',
      turnstileWidgetId: null,
      turnstileStatus: 'idle',
      isSubmitting: false,
      formStatus: {
        show: false,
        isError: false,
        message: ''
      }
    }
  },
  computed: {
    contactEmail() {
      return SITE_CONFIG.contactEmail;
    },
    cvUrl() {
      return SITE_CONFIG.cvUrl;
    },
    isApplicationMode() {
      return SITE_CONFIG.profileMode === PROFILE_MODES.APPLICATION;
    },
    profiles() {
      return SITE_CONFIG.profiles || [];
    },
    contactEndpoint() {
      return import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';
    },
    turnstileSiteKey() {
      return import.meta.env.VITE_TURNSTILE_SITE_KEY || '';
    },
    turnstileEnabled() {
      return Boolean(this.turnstileSiteKey);
    }
  },
  mounted() {
    this.ensureTurnstile();
  },
  methods: {
    ensureTurnstile() {
      if (!this.turnstileEnabled) {
        return;
      }

      this.turnstileStatus = 'loading';

      if (window.turnstile) {
        this.renderTurnstile();
        return;
      }

      const existingScript = document.querySelector('script[data-turnstile]');
      if (existingScript) {
        existingScript.addEventListener('load', this.renderTurnstile, { once: true });
        existingScript.addEventListener('error', this.handleTurnstileError, { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.dataset.turnstile = 'true';
      script.onload = this.renderTurnstile;
      script.onerror = this.handleTurnstileError;
      document.head.appendChild(script);
    },
    renderTurnstile() {
      if (!this.turnstileEnabled || !this.$refs.turnstileContainer || !window.turnstile) {
        return;
      }

      try {
        if (this.turnstileWidgetId !== null) {
          window.turnstile.remove?.(this.turnstileWidgetId);
        }
        this.$refs.turnstileContainer.innerHTML = '';
        this.turnstileWidgetId = window.turnstile.render(this.$refs.turnstileContainer, {
          sitekey: this.turnstileSiteKey,
          theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
          callback: (token) => {
            this.captchaToken = token;
          },
          'expired-callback': () => {
            this.captchaToken = '';
          },
          'error-callback': () => {
            this.captchaToken = '';
          }
        });
        this.turnstileStatus = this.turnstileWidgetId === null ? 'error' : 'ready';
      } catch (error) {
        this.turnstileStatus = 'error';
      }
    },
    handleTurnstileError() {
      this.turnstileStatus = 'error';
    },
    async handleSubmit() {
      this.isSubmitting = true;
      this.formStatus.show = false;

      try {
        if (this.turnstileEnabled && this.turnstileStatus === 'error') {
          this.formStatus = {
            show: true,
            isError: true,
            message: this.$t('contact.captchaUnavailable')
          };
          return;
        }

        if (this.turnstileEnabled && !this.captchaToken) {
          this.formStatus = {
            show: true,
            isError: true,
            message: this.$t('contact.captchaRequired')
          };
          return;
        }

        const name = this.form.name.trim();
        const email = this.form.email.trim();
        const subject = (this.form.subject || '').trim() || this.$t('contact.defaultSubject');
        const message = this.form.message.trim();
        const locale = this.$i18n?.locale;
        const localeValue = typeof locale === 'string' ? locale : locale?.value || 'de';
        const payload = {
          name,
          email,
          subject,
          message,
          token: this.captchaToken,
          honeypot: this.honeypot,
          locale: localeValue,
          profileMode: SITE_CONFIG.profileMode
        };

        const response = await fetch(this.contactEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.ok) {
          const error = new Error(result.message || 'Request failed');
          error.code = result.code;
          throw error;
        }

        this.formStatus = {
          show: true,
          isError: false,
          message: this.$t('contact.successMessage')
        };

        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        this.honeypot = '';
        this.captchaToken = '';
        if (this.turnstileEnabled && window.turnstile && this.turnstileWidgetId !== null) {
          window.turnstile.reset(this.turnstileWidgetId);
        }
      } catch (error) {
        const fallbackMessage = this.$t('contact.errorMessage');
        const errorCode = typeof error?.code === 'string' ? error.code : '';
        const mappedKey = errorCode ? ERROR_CODE_TO_MESSAGE_KEY[errorCode] : '';
        const mappedMessage = mappedKey ? this.$t(mappedKey) : '';
        const serverMessage = typeof error?.message === 'string' ? error.message : '';
        const message = mappedMessage || (serverMessage && serverMessage !== 'Request failed' && serverMessage !== 'Failed to fetch'
          ? serverMessage
          : fallbackMessage);
        this.formStatus = {
          show: true,
          isError: true,
          message
        };
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>
