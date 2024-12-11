<template>
  <div class="min-h-screen flex flex-col">
    <!-- Barre de navigation fixée en haut -->
    <NavBar class="bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50" />

    <!-- Contenu principal -->
    <main class="flex-1 mt-16 p-4">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Mon Application - Tous droits réservés</p>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>

<style scoped>
/* Aucune modification spécifique ici, car Tailwind gère la mise en page */
</style>
