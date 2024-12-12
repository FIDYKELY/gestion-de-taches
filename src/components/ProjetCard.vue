<script setup>
const props = defineProps({
  projet: Object,
})
</script>

<template>
  <div class="p-4 border rounded-lg shadow">
    <h2 class="text-xl font-bold">{{ projet.name }}</h2>
    <p class="text-gray-600">{{ projet.description }}</p>
    <p class="mt-2 text-sm">
      {{ projet.completedTasks }} / {{ projet.tasksCount }} tâches complétées
    </p>
    <span
      :class="{
        'bg-green-500 text-white': projet.status === 'Completed',
        'bg-yellow-500 text-white': projet.status === 'In Progress',
        'bg-red-500 text-white': projet.status === 'Pending',
      }"
      class="px-2 py-1 rounded"
    >
      {{ projet.status }}
    </span>
    <router-link :to="`/projets/${projet.id}`" class="mt-4 inline-block text-blue-500">
      Voir plus
    </router-link>
  </div>
</template>

<style scoped>
</style>
