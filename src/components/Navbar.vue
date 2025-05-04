<template>
  <nav class="p-4 flex justify-between">
    <span class="text-lg font-bold">TA</span>
    <div class="space-x-4">
      <router-link to="/">{{ $t('nav.home') }}</router-link>
      <router-link to="/services">{{ $t('nav.services') }}</router-link>
      <router-link to="/about">{{ $t('nav.about') }}</router-link>
      <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>