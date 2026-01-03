<template>
  <section
    class="min-h-[calc(100vh-64px)] bg-background dark:bg-gray-900 py-12 px-4 sm:px-8 md:px-16"
  >
    <div class="w-full max-w-5xl xl:max-w-6xl mx-auto">
      <h1
        class="text-3xl sm:text-4xl font-bold text-secondary dark:text-background mb-6"
      >
        {{ $t('imprint.title') }}
      </h1>

      <div class="bg-surface dark:bg-surfaceDark shadow-md rounded-lg p-8">

        <!-- Information according to § 5 TMG -->
        <h2
          class="text-xl font-semibold text-secondary dark:text-background mb-4"
        >
          {{ $t('imprint.legalBasisHeading') }}
        </h2>

        <!-- Provider Details -->
        <p class="mb-4 text-primary dark:text-accent">
          {{ $t('imprint.providerName') }}<br />
          {{ $t('imprint.providerStreet') }}<br />
          {{ $t('imprint.providerZipCity') }}
        </p>

        <!-- Contact Information (Email is generally sufficient for basic sites) -->
        <h2
          class="text-xl font-semibold text-secondary dark:text-background mb-4 mt-8"
        >
           {{ $t('imprint.contact.heading') }}
        </h2>
        <p class="mb-4 text-primary dark:text-accent">
          {{ $t('imprint.contact.emailLabel') }}: <a :href="'mailto:' + $t('imprint.contact.emailAddress')" class="underline hover:no-underline">{{ $t('imprint.contact.emailAddress') }}</a>
        </p>

        <!-- Basic Disclaimers (Highly Recommended) -->
         <h2
          class="text-xl font-semibold text-secondary dark:text-background mb-4 mt-8"
        >
          {{ $t('imprint.disclaimerHeading') }}
        </h2>

         <h3
          class="text-lg font-semibold text-secondary dark:text-background mb-2 mt-6"
        >
           {{ $t('imprint.linkLiabilityHeading') }}
        </h3>
         <p class="mb-4 text-primary dark:text-accent" v-html="$t('imprint.linkLiabilityText')"></p>

         <h3
          class="text-lg font-semibold text-secondary dark:text-background mb-2 mt-6"
        >
           {{ $t('imprint.copyrightHeading') }}
        </h3>
         <p class="mb-4 text-primary dark:text-accent" v-html="$t('imprint.copyrightText')"></p>

      </div>
    </div>
  </section>
</template>
