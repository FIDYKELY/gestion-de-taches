<script setup>
import { ref } from 'vue'
import ProjetCard from '@/components/ProjetCard.vue'
const listProjets = ref([
  {
    id: '1',
    name: 'Website Redesign',
    description: "Redesign the company's main website for better UX.",
    tasksCount: 12,
    completedTasks: 5,
    status: 'In Progress',
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: "Develop the company's mobile app for iOS and Android.",
    tasksCount: 20,
    completedTasks: 20,
    status: 'Completed',
  },
  {
    id: '3',
    name: 'Marketing Campaign',
    description: 'Launch a marketing campaign for the product release.',
    tasksCount: 8,
    completedTasks: 3,
    status: 'Pending',
  },
])
</script>

<template>
  <ProjetCard v-for="projet in listProjets" :key="projet.id" :projet="projet" />
</template>

<style scoped>
</style>
