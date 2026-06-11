<template>
  <div class="min-h-screen flex flex-col md:flex-row bg-white">
    <!--  FORMULAIRE À GAUCHE  -->
    <div class="flex w-full md:w-1/2 items-center justify-center relative">
      <!-- Bouton Retour en haut à gauche -->
      <div class="absolute top-4 left-4 md:top-6 md:left-6">
        <router-link 
          to="/" 
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-50 hover:bg-orange-100 transition group"
          title="Retour au site ARTCI"
        >
          <i class="bx bx-arrow-back text-lg text-orange-600 group-hover:text-orange-700"></i>
          <span class="text-sm font-medium text-orange-700">Retour au site</span>
        </router-link>
      </div>

      <div class="p-8 w-full max-w-md">
        <!-- Logo et titre -->
        <div class="flex flex-col items-center mb-6">
          <img :src="formLogo" alt="Logo ARTCI" class="w-28 h-auto mb-3" />
          <h2 class="text-2xl font-bold text-orange-600">Connexion</h2>
          <p class="text-sm text-gray-500 mt-1">
            Plateforme sécurisée de l'ARTCI
          </p>
        </div>

        <!-- Formulaire -->
        <form class="space-y-5">
          <!-- Email -->
          <div>
            <input
              type="email"
              placeholder="email@artci.ci"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>

          <!-- Mot de passe avec œil -->
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Mot de passe"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg
                     focus:ring-2 focus:ring-orange-500 focus:outline-none pr-10"
            />

            <!-- Icône œil -->
            <button
              type="button"
              @click="togglePassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-600"
            >
              <i
                :class="showPassword ? 'bx bx-hide' : 'bx bx-show'"
                class="text-xl"
              ></i>
            </button>
          </div>

          <div class="flex items-center justify-between text-sm text-gray-600">
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                class="rounded text-orange-600 focus:ring-orange-500"
              />
              <span>Rester connecté</span>
            </label>
            <a href="#" class="text-orange-600 hover:underline">
              Mot de passe oublié ?
            </a>
          </div>

          <router-link
            to="/homedashboard"
            class="w-full inline-block text-center bg-orange-600 hover:bg-orange-700
                   text-white py-2 rounded-full font-semibold transition duration-200"
          >
            Connexion
          </router-link>
        </form>

        <p class="text-center text-gray-500 text-sm mt-8 leading-tight">
          Système sécurisé de gestion et de suivi <br />
          des services de l'
          <span class="font-semibold text-orange-600">ARTCI</span>
        </p>
      </div>
    </div>

    <!-- IMAGE BIEN GRANDE À DROITE -->
    <div class="hidden md:flex md:w-1/2 relative">
      <img
        :src="logoImage"
        alt="ARTCI Secure"
        class="w-full h-screen object-cover"
      />
      <!-- Overlay noir -->
      <div class="absolute inset-0 bg-black/40"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logoImage from "@/assets/images/artci-secure.jpg";
import formLogo from "@/assets/images/logo-artci.png";

/* Show / Hide password */
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped>
body {
  font-family: 'Geist', sans-serif;
}

/* Animation pour le bouton retour */
.group:hover {
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.2);
  transform: translateX(-2px);
  transition: all 0.3s ease;
}
</style>