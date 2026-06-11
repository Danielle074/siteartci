<template>
  <div class="p-6 max-w-5xl mx-auto bg-white w-full rounded-lg shadow-lg">
    <!-- Bouton Retour aligné à droite -->
    <div class="flex mb-4">
      <router-link
        to="/dashboard/utilisateurs/list"
        class="inline-flex items-center gap-2 text-orange-600 font-medium"
      >
        <i class="bx bx-arrow-back text-lg"></i> Retour
      </router-link>
    </div>

    <!-- <h2 class="text-xl font-semibold mb-6 text-[#0297B8]">Ajouter un utilisateur</h2> -->
    <form class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div>
        <label class="block font-medium">Prénoms <span class="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="Prénoms"
          class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-600 bg-gray-200"
        />
      </div>
      <div>
        <label class="block font-medium">Nom <span class="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="Nom"
          class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-600 bg-gray-200"
        />
      </div>
      <div>
        <label class="block font-medium">Email <span class="text-red-500">*</span></label>
        <input
          type="email"
          placeholder="Email"
          class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-600 bg-gray-200"
        />
      </div>
      <div>
        <label class="block font-medium">Titre</label>
        <input
          type="text"
          placeholder="Titre"
          class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-600 bg-gray-200"
        />
      </div>
      <div>
        <label class="block font-medium">Rôle <span class="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="Rôle"
          class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-600 bg-gray-200"
        />
      </div>
      <div>
        <label class="block font-medium">Mot de passe <span class="text-red-500">*</span></label>
        <input
          type="password"
          placeholder="Mot de passe"
          class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-600 bg-gray-200"
        />
      </div>
      <div>
        <label class="block font-medium">Numéro de téléphone</label>
        <input
          type="text"
          placeholder="Numéro de téléphone"
          class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-600 bg-gray-200"
        />
      </div>
      <div>
        <label class="block font-medium">Entreprise</label>
        <input
          type="text"
          placeholder="Entreprise"
          class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-600 bg-gray-200"
        />
      </div>
    </form>

    <div class="mt-6 text-center">
      <button
        class="border-2 border-orange-600 bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition"
      >
        Ajouter un utilisateur
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Tu peux ajouter ici les fonctions de submit du formulaire si besoin
</script>
