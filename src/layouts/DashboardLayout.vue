<template>
  <div class="flex h-screen bg-gray-100 overflow-hidden">
    <!-- Sidebar (fixe avec ref) -->
    <Sidebar ref="sidebarRef" />

    <!-- Zone principale -->
    <div 
      :class="[
        'flex-1 flex flex-col overflow-hidden transition-all duration-300',
        'lg:ml-64'
      ]"
    >
      <!-- Header -->
      <Header :pageTitle="pageTitle" />

      <!-- Contenu dynamique -->
      <main class="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar p-3 sm:p-4 md:p-6">
        <div class="container mx-auto max-w-full">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue' // Ajout de ref ici
import { useRoute } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'

const route = useRoute()
const sidebarRef = ref(null)

// Écouter l'événement de toggle du menu mobile
const handleToggleMenu = () => {
  if (sidebarRef.value && sidebarRef.value.openMobileMenu) {
    sidebarRef.value.openMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('toggle-mobile-menu', handleToggleMenu)
})

onUnmounted(() => {
  window.removeEventListener('toggle-mobile-menu', handleToggleMenu)
})

const pageTitle = computed(() => {
  switch (route.name) {
    case 'dashboard':
      return 'Accueil'
    case 'userList':
      return 'Utilisateurs > Liste'
    case 'addUser':
      return 'Utilisateurs > Ajouter'
    case 'demande':
      return 'Demandes'
    case 'DetailsDemande':
      return 'Demandes > Détails'
    case 'listeQRCode':
      return 'Scanner > Liste QR Code'
    case 'scannerQRCode':
      return 'Scanner > QR Code'
    case 'qrManuel':
      return 'Scanner > Manuel'
    case 'creerQRCode':
      return 'Scanner > Créer QR Code'
    case 'listeEvenement':
      return 'Évènements > Liste'
    case 'ajouterEvenement':
      return 'Évènements > Ajouter'
    case 'companyList':
      return 'Entreprises > Liste'
    case 'addCompany':
      return 'Entreprises > Ajouter'
    case 'editCompany':
      return 'Entreprises > Modifier'
    case 'badgeCompany':
      return 'Entreprises > Badge'
    case 'membersCompany':
      return 'Entreprises > Membres'
    case 'cardList':
      return 'Cartes > Liste'
    case 'createCard':
      return 'Cartes > Créer'
    case 'ListeCourrier':
      return 'Courriers > Liste'
    case 'ajouterCourrier':
      return 'Courriers > Ajouter'
    case 'presence':
      return 'Liste de présence'
    default:
      return 'Tableau de bord'
  }
})
</script>

<style scoped>
/* Cache la scrollbar mais garde le scroll */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Responsive container */
@media (max-width: 640px) {
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>