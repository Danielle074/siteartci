<template>
  <header class="bg-white shadow-sm px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <!-- Bouton menu mobile/tablette -->
      <button 
        @click="toggleMobileMenu"
        class="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition"
      >
        <i class="bx bx-menu text-2xl"></i>
      </button>
      
      <h1 class="text-lg sm:text-xl font-semibold text-gray-800 truncate">
        {{ pageTitle }}
      </h1>
    </div>

    <div class="flex items-center gap-2 sm:gap-4">
      <button class="relative p-2 rounded-lg hover:bg-gray-100 transition">
        <i class="bx bx-bell text-xl sm:text-2xl text-gray-600"></i>
        <span class="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
      </button>

      <div class="flex items-center gap-2 lg:hidden">
        <img 
          :src="avatar" 
          alt="Avatar" 
          class="h-8 w-8 rounded-full object-cover border border-gray-300"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import avatarImage from '@/assets/images/identite.jpg'

defineProps({
  pageTitle: {
    type: String,
    default: 'Tableau de bord'
  }
})

const avatar = avatarImage

const toggleMobileMenu = () => {
  window.dispatchEvent(new CustomEvent('toggle-mobile-menu'))
}
</script>

<style scoped>
@media (max-width: 640px) {
  header {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>