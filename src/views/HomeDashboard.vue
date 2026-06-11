<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center">
    <!-- Navbar -->
    <nav class="flex items-center justify-between w-full relative pt-2 pb-2">
      <!-- Logo seul (ne bouge pas) -->
      <div class="flex items-center ml-6">
        <router-link to="/" class="flex items-center justify-center">
          <img :src="logo" alt="Secure Check" class="h-24 mr-3" />
        </router-link>
      </div>

      <!-- Section droite : Accueil + Déconnexion -->
      <div class="flex items-center gap-4 mr-6">
        <!-- Bouton Accueil -->
        <router-link 
          to="/" 
          class="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-50 hover:bg-orange-100 transition group"
          title="Retour à l'accueil principal"
        >
          <i class="bx bx-home text-xl text-orange-600 group-hover:text-orange-700"></i>
          <span class="text-sm font-medium text-orange-700">Accueil</span>
        </router-link>

        <!-- Déconnexion -->
        <router-link to="/login">
          <button
            class="flex items-center gap-2 border border-orange-600 text-orange-600 px-3 py-2 rounded-md hover:bg-orange-600 hover:text-white transition text-sm font-medium"
          >
            <i class="bx bx-log-out text-base"></i>
            Déconnexion
          </button>
        </router-link>
      </div>

      <!-- Trait orange fin et brillant -->
      <div
        class="absolute bottom-0 left-0 w-screen h-[2px] bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 animate-gradient-glitter"
      ></div>
    </nav>

    <!-- Cards -->
    <div class="flex flex-col md:flex-row gap-8 w-full max-w-3xl mt-24">
      <!-- Card 1 -->
      <div
        class="flex-1 bg-orange-600 rounded-xl shadow-md p-5 flex flex-col items-center text-center transform hover:scale-[1.02] transition"
      >
        <div class="bg-white p-4 rounded-full mb-3">
          <i class="bx bx-calendar-check text-orange-600 text-4xl"></i>
        </div>
        <h3 class="text-lg font-semibold mb-3 text-white">Demande de rendez-vous</h3>
        <router-link to="/rendezvous" class="w-full">
          <button
            class="bg-white text-orange-600 px-3 py-2 rounded-md text-sm font-semibold hover:bg-orange-600 hover:text-white transition"
          >
            Demander un rendez-vous
          </button>
        </router-link>
      </div>

      <!-- Card 2 -->
      <div
        class="flex-1 bg-orange-600 rounded-xl shadow-md p-5 flex flex-col items-center text-center transform hover:scale-[1.02] transition"
      >
        <div class="bg-white p-4 rounded-full mb-3">
          <i class="bx bx-navigation text-orange-600 text-4xl"></i>
        </div>
        <h3 class="text-lg font-semibold mb-3 text-white">Menu de navigation</h3>
        <router-link to="/dashboard" class="w-full">
          <button
            class="bg-white text-orange-600 px-3 py-2 rounded-md text-sm font-semibold hover:bg-orange-600 hover:text-white transition"
          >
            Accéder au menu
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoImg from '@/assets/images/logo-artci.png'
const logo = logoImg
</script>

<style scoped>
button {
  transition: all 0.3s ease;
}

/* Animation pour le bouton d'accueil */
.group:hover {
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2);
}

/* Pour aligner verticalement les boutons */
.flex.items-center.gap-4 {
  gap: 1rem; /* 16px d'espacement */
}
</style>