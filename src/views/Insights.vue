<template>
  <div class="container mx-auto px-6 py-12 lg:py-20">
    <div class="max-w-3xl mx-auto">
      <p class="text-sm font-semibold uppercase tracking-wide text-accent">{{ $t('insights.kicker') }}</p>
      <h1 class="mt-2 text-3xl md:text-4xl font-bold text-secondary dark:text-background leading-tight">
        {{ $t('insights.article.title') }}
      </h1>
      <p class="mt-6 text-lg text-primary dark:text-accent">
        {{ $t('insights.article.lead') }}
      </p>

      <article class="mt-10 space-y-8">
        <section v-for="n in sectionCount" :key="n">
          <h2 class="text-xl md:text-2xl font-semibold text-secondary dark:text-background">
            {{ $t(`insights.article.s${n}Title`) }}
          </h2>
          <p class="mt-3 text-secondary dark:text-background leading-relaxed">
            {{ $t(`insights.article.s${n}Body`) }}
          </p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup>
// First-draft article scaffold; copy is reviewed separately before publishing.
const sectionCount = 4
</script>
