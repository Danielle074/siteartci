<template>
  <div class="w-full rounded-lg shadow-lg bg-white p-4">
    <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-4">
      <div class="col-span-2">
        <label class="block mb-2 text-gray-700">Nom de l'entreprise <span class="text-red-600">*</span></label>
        <input v-model="company.nom" type="text" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div>
        <label class="block mb-2 text-gray-700">Logo (URL) <span class="text-red-600">*</span></label>
        <input v-model="company.logo" type="url" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div>
        <label class="block mb-2 text-gray-700">Téléphone <span class="text-red-600">*</span></label>
        <input v-model="company.phone" type="tel" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div>
        <label class="block mb-2 text-gray-700">Email <span class="text-red-600">*</span></label>
        <input v-model="company.email" type="email" required class="w-full border rounded-lg p-2 bg-gray-200"/>
      </div>
      <div class="col-span-2">
        <label class="block mb-2 text-gray-700">Membres (séparés par des virgules)</label>
        <input v-model="membersInput" type="text" class="w-full border rounded-lg p-2 bg-gray-200" placeholder="Membre1, Membre2"/>
      </div>
      <div class="col-span-2 flex justify-center mt-4">
        <button type="submit" class="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">
          Créer l'entreprise
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface CompanyInput {
  nom: string
  logo: string
  phone: string
  email: string
  members: string[]
  lien: string
  qrCode: string
}

const company = ref({
  nom: '',
  logo: '',
  phone: '',
  email: '',
})

const membersInput = ref('')

const emit = defineEmits<{
  (e: 'add-company', company: CompanyInput): void
}>()

function submitForm() {
  const members = membersInput.value.split(',').map(m => m.trim()).filter(m => m)
  const lien = `https://entreprise-${Date.now()}.example.com`
  const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(lien)}`
  
  emit('add-company', {
    ...company.value,
    members,
    lien,
    qrCode
  })
  
  // Reset
  company.value = { nom: '', logo: '', phone: '', email: '' }
  membersInput.value = ''
}
</script>