<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">

      <!-- Barre action -->
      <div class="flex justify-between items-center mb-6">
        

        <!-- Bouton dynamique -->
        <div>
          <!-- Sur liste : bouton pour créer une carte -->
          <router-link
            v-if="activeTab === 'liste'"
            to="/dashboard/carte/creer"
            class="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
          >
            Créer une Carte
          </router-link>

          <!-- Sur création : bouton retour à la liste -->
          <router-link
            v-else
            to="/dashboard/carte/liste"
            class=" text-black px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Retour à la Liste
          </router-link>
        </div>
      </div>

      <!-- Contenu dynamique -->
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Détermine si on est sur la page création ou la liste
const activeTab = computed(() => {
  return route.path.includes('/creer') ? 'creer' : 'liste'
})
</script>
