<template>
  <div class="bg-white shadow-md rounded-lg p-4 overflow-x-auto relative">
    <table class="min-w-full border border-gray-200 rounded-lg">
      <thead class="bg-orange-600 text-white">
        <tr>
          <th class="p-3">ID</th>
          <th class="p-3">Photo</th>
          <th class="p-3">Nom</th>
          <th class="p-3">Contact</th>
          <th class="p-3">Email</th>
          <th class="p-3">QR Code</th>
          <th class="p-3">Lien</th>
          <th class="p-3">Employés</th>
          <th class="p-3">Membres</th>
          <th class="p-3">Edit</th>
          <th class="p-3">Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(company, index) in companies" :key="company.id" class="border-b hover:bg-gray-100">
          <td class="p-3">{{ company.id }}</td>
          <td class="p-3"><img :src="company.logo" class="h-10 w-10 rounded-full"/></td>
          <td class="p-3">{{ company.nom }}</td>
          <td class="p-3">{{ company.phone }}</td>
          <td class="p-3">{{ company.email }}</td>
          <td class="p-3">
            <img :src="company.qrCode" class="h-10 w-10 cursor-pointer" @click="emit('open-badge', company)"/>
          </td>
          <td class="p-3 flex items-center gap-2">
            <a :href="company.lien" class="text-blue-600 hover:underline">Lien</a>
            <button @click="emit('copy-link', company.lien)"><i class='bx bx-copy'></i></button>
          </td>
          <td class="p-3 text-center">
            <button class="text-gray-700 hover:text-gray-900"><i class='bx bx-user'></i></button>
          </td>
          <td class="p-3 text-center">
            <button @click="emit('open-members', company)" class="text-gray-700 hover:text-gray-900"><i class='bx bx-group'></i></button>
          </td>
          <td class="p-3 text-center">
            <button @click="emit('open-edit', company)" class="text-gray-700 hover:text-gray-900"><i class='bx bx-edit'></i></button>
          </td>
          <td class="p-3 text-center">
            <button @click="emit('delete-company', index)" class="text-red-600 hover:text-red-800"><i class='bx bx-trash'></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
export interface Company {
  id: number
  nom: string
  logo: string
  qrCode: string
  lien: string
  phone: string
  email: string
  members: string[]
}

const props = defineProps<{ companies: Company[] }>()

const emit = defineEmits<{
  (e: 'open-badge', company: Company): void
  (e: 'open-members', company: Company): void
  (e: 'open-edit', company: Company): void
  (e: 'delete-company', index: number): void
  (e: 'copy-link', text: string): void
}>()
</script>