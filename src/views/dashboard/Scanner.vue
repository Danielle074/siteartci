<template>
  <div class="p-6 bg-gray-100 min-h-screen">
   

    <!-- Bouton retour à la liste -->
    <div class="mb-4">
      <button
        v-if="route.name !== 'listeQRCode'"
        @click="goToList"
        class="px-4 py-2 rounded-lg hover:bg-gray-300 transition"
      >
        ← Retour à la liste
      </button>
    </div>

    <!-- Navigation entre sous-pages -->
    <div class="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 ">
      <div class="flex gap-4">
        <RouterLink
          to="/dashboard/scanner/qr-code"
          :class="btnClass('scannerQRCode')"
        >
          Scanner un code
        </RouterLink>

        <RouterLink
          to="/dashboard/scanner/manuel"
          :class="btnClass('qrManuel')"
        >
          QR Code manuel
        </RouterLink>

        <RouterLink
          to="/dashboard/scanner/creer"
          :class="btnClass('creerQRCode')"
        >
          Créer QR code
        </RouterLink>
      </div>
    </div>

    <!-- Contenu selon la sous-route -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 🔁 Redirection automatique vers la liste
onMounted(() => {
  if (
    route.path === '/dashboard/scanner' ||
    route.path === '/dashboard/scanner/'
  ) {
    router.replace({ name: 'listeQRCode' })
  }
})

// 🏷️ Titre dynamique
const pageTitle = computed(() => {
  switch (route.name) {
    case 'scannerQRCode':
      return 'Scanner un code'
    case 'qrManuel':
      return 'QR Code manuel'
    case 'listeQRCode':
      return 'Liste des QR Codes'
    case 'creerQRCode':
      return 'Créer un QR Code'
    default:
      return 'La gestion des QR Codes'
  }
})

// ⬅️ Retour à la liste
function goToList() {
  router.push({ name: 'listeQRCode' })
}

// 🎨 Style des boutons
function btnClass(tab: string) {
  return route.name === tab
    ? 'bg-orange-600 text-white px-3 py-2 rounded-lg font-semibold'
    : 'border-2 border-orangee-600 text-orange-600 px-3 py-2 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition'
}
</script>
