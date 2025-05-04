<template>
  <div :class="darkMode ? 'dark' : ''">
    <main class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  data() {
    return { darkMode: true }
  }
}
</script>