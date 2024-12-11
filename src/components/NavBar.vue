<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'NavBar',
}
</script>

<template>
  <div class="bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50">
    <!-- Barre de navigation -->
    <nav class="flex justify-center space-x-6">
      <RouterLink
        to="/"
        class="text-white hover:bg-gray-700 px-4 py-2 rounded transition-all duration-200"
        active-class="bg-gray-600"
      >
        Dashboard
      </RouterLink>

      <RouterLink
        to="/about"
        class="text-white hover:bg-gray-700 px-4 py-2 rounded transition-all duration-200"
        active-class="bg-gray-600"
      >
        About
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
</style>
