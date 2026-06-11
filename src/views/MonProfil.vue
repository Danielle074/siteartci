<template>
  <div class="p-6 min-h-screen bg-gray-100">
    <!-- Header avec retour -->
    <div class="flex items-center gap-4 mb-6">
      <router-link
        to="/dashboard"
        class="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
      >
        <i class="bx bx-arrow-back text-xl"></i>
        Retour au dashboard
      </router-link>
    </div>

    <h1 class="text-3xl font-bold text-orange-600 mb-6">Mon Profil</h1>

    <div class="max-w-3xl mx-auto p-6">
      <!-- Avatar et nom -->
      <div class="flex items-center gap-6 mb-6">
        <img
          src="https://i.pravatar.cc/100"
          alt="Avatar"
          class="w-24 h-24 rounded-full border-2 border-orange-600"
        />
        <div>
          <h2 class="text-2xl font-semibold text-gray-700">John Doe</h2>
          <p class="text-gray-500">Utilisateur du dashboard</p>
        </div>
      </div>

      <!-- Informations utilisateur -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-gray-600 mb-1">Nom</label>
          <input
            type="text"
            v-model="user.nom"
            class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-orange-600"
          />
        </div>

        <div>
          <label class="block text-gray-600 mb-1">Prénom</label>
          <input
            type="text"
            v-model="user.prenom"
            class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-orange-600"
          />
        </div>

        <div>
          <label class="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            v-model="user.email"
            class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-orange-600"
          />
        </div>

        <div>
          <label class="block text-gray-600 mb-1">Téléphone</label>
          <input
            type="text"
            v-model="user.telephone"
            class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-orange-600"
          />
        </div>

        <!-- Mot de passe -->
        <div>
          <label class="block text-gray-600 mb-1">Nouveau mot de passe</label>
          <input
            type="password"
            v-model="user.password"
            class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-orange-600"
            placeholder="••••••••"
          />
        </div>

        <!-- Confirmation -->
        <div>
          <label class="block text-gray-600 mb-1">Confirmer le mot de passe</label>
          <input
            type="password"
            v-model="user.confirmPassword"
            class="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-orange-600"
            placeholder="••••••••"
          />
        </div>
      </div>

      <!-- Boutons -->
      <div class="mt-6 flex justify-end gap-4">
        <button
          class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          @click="resetForm"
        >
          Annuler
        </button>
        <button
          class="px-4 py-2 rounded bg-orange-600 text-white hover:bg-orange-700"
          @click="saveProfile"
        >
          Enregistrer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const user = reactive({
  nom: 'Doe',
  prenom: 'John',
  email: 'john.doe@example.com',
  telephone: '+225 01 23 45 67 89',
  password: '',
  confirmPassword: ''
})

const saveProfile = () => {
  if (user.password && user.password !== user.confirmPassword) {
    alert('Les mots de passe ne correspondent pas ❌')
    return
  }

  alert('Profil mis à jour avec succès ✅')
}

const resetForm = () => {
  user.password = ''
  user.confirmPassword = ''
}
</script>

<style scoped>
input:focus {
  transition: all 0.2s ease-in-out;
}
</style>
