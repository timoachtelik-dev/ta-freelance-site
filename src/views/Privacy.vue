<template>
  <section
    class="min-h-[calc(100vh-64px)] bg-background dark:bg-gray-900 py-12 px-4 sm:px-8 md:px-16"
  >
    <div class="w-full max-w-5xl xl:max-w-6xl mx-auto">
      <h1
        class="text-3xl sm:text-4xl font-bold text-secondary dark:text-background mb-6"
      >
        {{ $t('privacy.title') }}
      </h1>

      <div class="bg-surface dark:bg-surfaceDark shadow-md rounded-lg p-8">

        <!-- Responsible Party -->
        <h2
          class="text-xl font-semibold text-secondary dark:text-background mb-4"
        >
          {{ $t('privacy.responsibleHeading') }}
        </h2>
        <p class="mb-4 text-primary dark:text-accent" v-html="$t('privacy.responsibleText')"></p>

        <!-- Data Collection (Server Logs) -->
        <h2
          class="text-xl font-semibold text-secondary dark:text-background mb-4 mt-8"
        >
          {{ $t('privacy.dataCollectionHeading') }}
        </h2>
        <p class="mb-4 text-primary dark:text-accent" v-html="$t('privacy.dataCollectionText')"></p>

        <!-- Cookies (Mention minimal use if any, e.g., for dark mode) -->
         <h2
          class="text-xl font-semibold text-secondary dark:text-background mb-4 mt-8"
        >
          {{ $t('privacy.cookiesHeading') }}
        </h2>
        <p class="mb-4 text-primary dark:text-accent" v-html="$t('privacy.cookiesText')"></p>

        <!-- Third-Party Services (Crucial! List EVERYTHING) -->
        <h2
          class="text-xl font-semibold text-secondary dark:text-background mb-4 mt-8"
        >
          {{ $t('privacy.thirdPartiesHeading') }}
        </h2>
        <p class="mb-4 text-primary dark:text-accent" v-html="$t('privacy.thirdPartiesText')"></p>


        <!-- Your Rights -->
        <h2
          class="text-xl font-semibold text-secondary dark:text-background mb-4 mt-8"
        >
          {{ $t('privacy.rightsHeading') }}
        </h2>
         <p class="mb-4 text-primary dark:text-accent" v-html="$t('privacy.rightsText')"></p>

         <!-- Contact -->
        <h2
          class="text-xl font-semibold text-secondary dark:text-background mb-4 mt-8"
        >
          {{ $t('privacy.contactHeading') }}
        </h2>
         <p class="mb-4 text-primary dark:text-accent" v-html="$t('privacy.contactText')"></p>

      </div>
    </div>
  </section>
</template>
