<template>
  <!-- Overlay pour mobile/tablette -->
  <div
    v-if="isMobileMenuOpen"
    @click="closeMobileMenu"
    class="fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-300"
    :class="isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
  ></div>

  <!-- Sidebar -->
  <aside
    :class="[
      'fixed top-0 left-0 z-40 h-screen flex flex-col bg-gray-100 border-r border-gray-200 transition-all duration-300 ease-in-out',
      'rounded-tr-lg rounded-br-lg overflow-hidden',
      // Sur mobile/tablette: menu coulissant
      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
      'lg:translate-x-0 lg:w-64 lg:min-w-[16rem] lg:max-w-[16rem]',
      // Largeur variable sur mobile (80% de l'écran)
      'w-4/5 max-w-xs'
    ]"
  >
    <!-- Logo -->
    <div
      class="flex justify-center items-center pt-6 pb-2 cursor-pointer"
      @click="$router.push('/dashboard'); closeMobileMenu()"
    >
      <img :src="logo" alt="Artci secure" class="h-18 w-auto" />
    </div>
    <div class="border-t border-orange-600 mb-4"></div>

    <!-- Bouton de fermeture pour mobile/tablette (optionnel) -->
    <button
      @click="closeMobileMenu"
      class="absolute top-4 right-4 text-2xl text-gray-500 lg:hidden"
    >
      <i class="bx bx-x"></i>
    </button>

    <!-- MENU SCROLLABLE -->
    <div class="flex-1 overflow-y-auto scrollbar-hidden px-4 py-6">
      <ul class="space-y-1 text-sm font-medium">
        <!-- Dashboard -->
        <li>
          <router-link
            to="/dashboard"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
          >
            <i class="bx bx-line-chart text-xl"></i>
            <span class="flex-1">Dashboard</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Utilisateurs -->
        <li>
          <router-link
            to="/dashboard/utilisateurs/list"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-user text-xl"></i>
            <span class="flex-1">Utilisateurs</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Scanners QR Code -->
        <li>
          <router-link
            to="/dashboard/scanner"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-qr-scan text-xl"></i>
            <span class="flex-1">Scanners QR Code</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Évènements -->
        <li>
          <router-link
            to="/dashboard/evenement"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-calendar-event text-xl"></i>
            <span class="flex-1">Évènements</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Entreprises -->
        <li>
          <router-link
            to="/dashboard/entreprises"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-building text-xl"></i>
            <span class="flex-1">Entreprises</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Liste des visiteurs -->
        <li>
          <router-link
            to="/dashboard/visiteurs"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-list-ul text-xl"></i>
            <span class="flex-1">Liste des visiteurs</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Demande -->
        <li>
          <router-link
            to="/dashboard/demande"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-envelope text-xl"></i>
            <span class="flex-1">Demandes</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Liste de présence -->
        <li>
          <router-link
            to="/dashboard/presence"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-check-square text-xl"></i>
            <span class="flex-1">Liste de présence</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Carte de membre -->
        <li>
          <router-link
            to="/dashboard/carte"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-id-card text-xl"></i>
            <span class="flex-1">Carte de membre</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Liste de courriers -->
        <li>
          <router-link
            to="/dashboard/courriers/liste"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-mail-send text-xl"></i>
            <span class="flex-1">Liste de courriers</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Tâches -->
        <li>
          <router-link
            to="/dashboard/taches/liste"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-task text-xl"></i>
            <span class="flex-1">Tâches</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Projets -->
        <li>
          <router-link
            to="/dashboard/projet"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-folder text-xl"></i>
            <span class="flex-1">Projets</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>

        <!-- Documents -->
        <li>
          <router-link
            to="/dashboard/document"
            @click="closeMobileMenuOnLink"
            class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-200"
            active-class="bg-orange-50 text-orange-600"
          >
            <i class="bx bx-file text-xl"></i>
            <span class="flex-1">Documents</span>
            <i class="bx bxs-chevron-right text-sm text-gray-400"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- PROFIL EN BAS -->
    <div class="px-4 py-6 bg-white border-t border-gray-200 mt-auto space-y-3 shrink-0">
      <div class="flex items-center gap-3">
        <img :src="logo" alt="Logo" class="h-10 w-10 rounded-full border-2 border-gray-300" />
        <div>
          <h4 class="font-semibold text-gray-800">Administration</h4>
          <p class="text-xs text-gray-500">Gestion des utilisateurs</p>
        </div>
      </div>

      <div class="flex gap-2">
        <router-link
          to="/mon-profil"
          @click="closeMobileMenuOnLink"
          class="flex-1 text-center bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg text-sm font-medium transition"
        >
          Profil
        </router-link>
        <button
          @click="logout"
          class="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-semibold transition"
        >
          Déconnexion
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import logoImage from '@/assets/images/logo-artci.png'

const router = useRouter()
const logo = logoImage

// État du menu mobile
const isMobileMenuOpen = ref(false)

// Ouvrir le menu (appelé depuis DefaultLayout)
const openMobileMenu = () => {
  isMobileMenuOpen.value = true
  document.body.style.overflow = 'hidden'
}

// Fermer le menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Fermer après clic sur un lien (sur mobile)
const closeMobileMenuOnLink = () => {
  if (window.innerWidth < 1024) {
    closeMobileMenu()
  }
}

// Déconnexion
const logout = () => {
  localStorage.clear()
  router.push('/login')
}

// Exposer la méthode pour le composant parent (DefaultLayout)
defineExpose({ openMobileMenu })

// Nettoyer le style du body à la destruction
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.scrollbar-hidden {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.router-link-active {
  position: relative;
}
.router-link-active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 60%;
  width: 4px;
  background-color: #f97316;
  border-radius: 0 4px 4px 0;
}
.router-link-active i:last-child {
  transform: rotate(90deg);
  transition: transform 0.2s ease;
  color: #f97316;
}
li a i:last-child {
  transition: transform 0.2s ease;
}
</style>