<!-- src/views/dashboard/Taches.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Boutons pour switcher entre vue cartes et vue tableau -->
    <div class="bg-white border-b border-gray-200 px-6 py-3">
      <div class="flex gap-2">
        <router-link 
          to="/dashboard/taches/cartes"
          class="px-4 py-2 rounded-lg transition"
          :class="$route.path.includes('/cartes') ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
        >
          <i class="fas fa-th-large mr-2"></i>
          Vue Cartes
        </router-link>
        <router-link 
          to="/dashboard/taches/liste"
          class="px-4 py-2 rounded-lg transition"
          :class="$route.path.includes('/liste') ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
        >
          <i class="fas fa-table mr-2"></i>
          Vue Tableau
        </router-link>
      </div>
    </div>

    <!-- Router-view pour afficher les composants enfants -->
    <router-view />
  </div>
</template>

<script setup>
// Ce composant sert de layout pour les routes tâches
</script>