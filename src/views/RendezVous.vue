<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center p-6">
    <!-- Bouton Retour vers Dashboard -->
    <div class="w-full max-w-4xl flex justify-start mb-6">
      <router-link to="/homedashboard">
        <button
          class="flex items-center gap-2 border border-orange-600 text-orange-600 px-3 py-2 rounded-md hover:bg-orange-600 hover:text-white transition text-sm font-medium"
        >
          <i class="bx bx-arrow-back text-base"></i>
          Retour
        </button>
      </router-link>
    </div>

    <!-- Formulaire -->
    <div class="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-3xl font-bold text-center text-orange-600 mb-8">
        Formulaire de Demande de Rendez-vous
      </h2>

      <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Pièce d'identité -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Type de pièce d'identité</label>
          <select v-model="form.idType" class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200">
            <option value="">Sélectionner...</option>
            <option value="CNI">Carte Nationale d’Identité</option>
            <option value="Passeport">Passeport</option>
            <option value="Permis">Permis de conduire</option>
          </select>
        </div>

        <!-- Numéro de pièce -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Numéro de la pièce</label>
          <input v-model="form.idNumber" type="text" placeholder="Ex : C1234567"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Prénoms -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Prénoms</label>
          <input v-model="form.firstName" type="text" placeholder="Entrez vos prénoms"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200"/>
        </div>

        <!-- Nom -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Nom</label>
          <input v-model="form.lastName" type="text" placeholder="Entrez votre nom"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Adresse -->
        <div class="md:col-span-2">
          <label class="block text-gray-700 font-medium mb-2">Adresse</label>
          <input v-model="form.address" type="text" placeholder="Ex : Cocody, Riviera 2"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Ville -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Ville</label>
          <input v-model="form.city" type="text" placeholder="Entrez votre ville"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Pays -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Pays</label>
          <div class="relative">
            <select v-model="form.country" class="w-full border rounded-lg p-2 appearance-none focus:ring-2 focus:ring-orange-600 bg-gray-200">
              <option value="">Sélectionner un pays</option>
              <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
            </select>
            <span class="absolute right-3 top-3 text-gray-400">▼</span>
          </div>
        </div>

        <!-- Région / État -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Région / État</label>
          <input v-model="form.state" type="text" placeholder="Ex : Abidjan"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Code postal -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Code postal</label>
          <input v-model="form.postalCode" type="text" placeholder="Ex : 00225"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Employeur -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Employeur</label>
          <input v-model="form.employer" type="text" placeholder="Nom de l'entreprise"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Nom de l'hôte -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Nom de l'hôte</label>
          <input v-model="form.hostName" type="text" placeholder="Ex : Mme Kouassi"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Raison de la visite -->
        <div class="md:col-span-2">
          <label class="block text-gray-700 font-medium mb-2">Raison de la visite / Objet</label>
          <textarea v-model="form.reason" rows="3" placeholder="Décrivez brièvement la raison"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200"></textarea>
        </div>

        <!-- Date -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Sélectionner une date</label>
          <input v-model="form.date" type="date" class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Heure -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Sélectionner une heure</label>
          <input v-model="form.time" type="time" class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Email</label>
          <input v-model="form.email" type="email" placeholder="exemple@email.com"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Contact -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Contact</label>
          <input v-model="form.phone" type="text" placeholder="+225 0700000001"
            class="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-600 bg-gray-200" />
        </div>

        <!-- Bouton Envoyer -->
        <div class="md:col-span-2 flex justify-center mt-4">
          <button type="submit"
            class="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all">
            Envoyer la demande
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const countries = [
  'Côte d’Ivoire', 'France', 'Sénégal', 'Ghana', 'Nigeria',
  'Maroc', 'Tunisie', 'Afrique du Sud', 'Canada', 'États-Unis'
]

const form = ref({
  idType: '',
  idNumber: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  country: '',
  state: '',
  postalCode: '',
  employer: '',
  hostName: '',
  reason: '',
  date: '',
  time: '',
  email: '',
  phone: ''
})

function submitForm() {
  console.log('Données envoyées :', form.value)
  alert('Demande de rendez-vous envoyée avec succès ✅')
}
</script>
