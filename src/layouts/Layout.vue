<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <RouterLink to="/" @click="closeAll">
          <img :src="logo" class="h-10 sm:h-14 w-auto object-contain" alt="ARTCI Logo" />
        </RouterLink>

        <nav class="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold">
          <RouterLink to="/" @click="closeAll" class="hover:text-orange-500 transition-colors">Accueil</RouterLink>

          <div class="relative flex items-center gap-1">
            <RouterLink to="/about" @click="closeAll" class="hover:text-orange-500 transition-colors">À propos</RouterLink>
            <button @click.stop="toggleDropdown('about', $event)" class="focus:outline-none p-1 hover:text-orange-500" aria-label="Menu À propos">
              <i class="bx bx-chevron-down text-lg"></i>
            </button>
            <transition name="fade">
              <div v-if="openDropdown === 'about'" class="absolute top-full mt-3 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden">
                <RouterLink to="/mission" @click="closeAll" class="menu-item">Notre mission</RouterLink>
                <RouterLink to="/organisation" @click="closeAll" class="menu-item">Organisation & Direction</RouterLink>
                <RouterLink to="/partenaires" @click="closeAll" class="menu-item">Partenaires</RouterLink>
              </div>
            </transition>
          </div>

          <div class="relative flex items-center gap-1">
            <RouterLink to="/regulation" @click="closeAll" class="hover:text-orange-500 transition-colors">Régulation</RouterLink>
            <button @click.stop="toggleDropdown('regulation', $event)" class="focus:outline-none p-1 hover:text-orange-500" aria-label="Menu Régulation">
              <i class="bx bx-chevron-down text-lg"></i>
            </button>
            <transition name="fade">
              <div v-if="openDropdown === 'regulation'" class="absolute top-full mt-3 w-64 bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden">
                <RouterLink to="/telecoms" @click="closeAll" class="menu-item">Télécoms</RouterLink>
                <RouterLink to="/numerique" @click="closeAll" class="menu-item">Numérique</RouterLink>
                <RouterLink to="/securiteDonnees" @click="closeAll" class="menu-item">Données personnelles</RouterLink>
              </div>
            </transition>
          </div>

          <RouterLink to="/actualites" @click="closeAll" class="hover:text-orange-500 transition-colors">Actualités</RouterLink>
          <RouterLink to="/contact" @click="closeAll" class="hover:text-orange-500 transition-colors">Contact</RouterLink>

          <RouterLink v-if="!isAuthenticated" to="/login">
            <button class="btn-orange">Login</button>
          </RouterLink>
          <button v-else @click="logout" class="btn-logout">Déconnexion</button>
        </nav>

        <button @click="toggleMobileMenu" class="lg:hidden p-2 text-2xl text-gray-700 focus:outline-none hover:text-orange-500 transition-colors" aria-label="Ouvrir le menu">
          <i :class="mobileMenuOpen ? 'bx bx-x' : 'bx bx-menu'"></i>
        </button>
      </div>
    </header>

    <transition name="slide-fade">
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-50 lg:hidden">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeMobileMenu"></div>
        <div class="absolute top-0 left-0 w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div class="flex justify-end mb-4">
              <button @click="closeMobileMenu" class="p-2 text-2xl text-gray-500 hover:text-orange-500 transition-colors" aria-label="Fermer le menu">
                <i class="bx bx-x"></i>
              </button>
            </div>
            
            <nav class="flex flex-col gap-1 font-medium">
              <RouterLink to="/" @click="closeMobileMenu" class="block py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-all">Accueil</RouterLink>

              <div class="border-b border-gray-100 py-1">
                <button @click="mobileAboutOpen = !mobileAboutOpen" class="flex justify-between items-center w-full py-3 px-4 rounded-lg hover:bg-orange-50 text-left transition-all">
                  <span class="hover:text-orange-500">À propos</span>
                  <i :class="mobileAboutOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-xl text-gray-400"></i>
                </button>
                <div v-if="mobileAboutOpen" class="bg-gray-50/50 rounded-lg mt-1 ml-2 pl-2 flex flex-col gap-1">
                  <RouterLink to="/mission" @click="closeMobileMenu" class="block py-2.5 px-4 text-sm text-gray-600 hover:text-orange-500 rounded-md">Notre mission</RouterLink>
                  <RouterLink to="/organisation" @click="closeMobileMenu" class="block py-2.5 px-4 text-sm text-gray-600 hover:text-orange-500 rounded-md">Organisation & Direction</RouterLink>
                  <RouterLink to="/partenaires" @click="closeMobileMenu" class="block py-2.5 px-4 text-sm text-gray-600 hover:text-orange-500 rounded-md">Partenaires</RouterLink>
                </div>
              </div>

              <div class="border-b border-gray-100 py-1">
                <button @click="mobileRegulationOpen = !mobileRegulationOpen" class="flex justify-between items-center w-full py-3 px-4 rounded-lg hover:bg-orange-50 text-left transition-all">
                  <span class="hover:text-orange-500">Régulation</span>
                  <i :class="mobileRegulationOpen ? 'bx bx-chevron-up' : 'bx bx-chevron-down'" class="text-xl text-gray-400"></i>
                </button>
                <div v-if="mobileRegulationOpen" class="bg-gray-50/50 rounded-lg mt-1 ml-2 pl-2 flex flex-col gap-1">
                  <RouterLink to="/telecoms" @click="closeMobileMenu" class="block py-2.5 px-4 text-sm text-gray-600 hover:text-orange-500 rounded-md">Télécoms</RouterLink>
                  <RouterLink to="/numerique" @click="closeMobileMenu" class="block py-2.5 px-4 text-sm text-gray-600 hover:text-orange-500 rounded-md">Numérique</RouterLink>
                  <RouterLink to="/securiteDonnees" @click="closeMobileMenu" class="block py-2.5 px-4 text-sm text-gray-600 hover:text-orange-500 rounded-md">Données personnelles</RouterLink>
                </div>
              </div>

              <RouterLink to="/actualites" @click="closeMobileMenu" class="block py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-all">Actualités</RouterLink>
              <RouterLink to="/contact" @click="closeMobileMenu" class="block py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-all">Contact</RouterLink>
            </nav>
          </div>

          <div class="pt-6 mt-6 border-t border-gray-200">
            <RouterLink v-if="!isAuthenticated" to="/login" @click="closeMobileMenu" class="block w-full">
              <button class="btn-orange w-full py-3 text-base">Login</button>
            </RouterLink>
            <button v-else @click="logout" class="btn-logout w-full py-3 text-base">Déconnexion</button>
          </div>
        </div>
      </div>
    </transition>

    <main class="flex-1 pt-16 sm:pt-20">
      <router-view />
    </main>

    <div class="border-t-4 border-orange-500"></div>
    <footer class="bg-green-50 text-gray-700 pt-10 sm:pt-14 pb-8 border-t border-green-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div>
            <RouterLink to="/">
              <h2 class="text-2xl font-bold text-green-800 mb-3 hover:text-green-900 transition-colors">ARTCI</h2>
            </RouterLink>
            <p class="text-sm leading-relaxed text-gray-600">
              Autorité de Régulation des Télécommunications / TIC de Côte d’Ivoire. Nous œuvrons pour un environnement numérique sûr, équitable et innovant.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-green-800 mb-4">Navigation</h3>
            <ul class="space-y-3">
              <li><RouterLink to="/" class="block py-1 hover:text-orange-500 transition-colors">Accueil</RouterLink></li>
              <li><RouterLink to="/mission" class="block py-1 hover:text-orange-500 transition-colors">Mission</RouterLink></li>
              <li><RouterLink to="/organisation" class="block py-1 hover:text-orange-500 transition-colors">Organisation</RouterLink></li>
              <li><RouterLink to="/contact" class="block py-1 hover:text-orange-500 transition-colors">Contact</RouterLink></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-green-800 mb-4">Contact</h3>
            <ul class="space-y-3 text-gray-700 text-sm">
              <li class="flex items-center gap-2"><span>📞</span> (225) 27 00 00 00 00</li>
              <li class="flex items-center gap-2"><span>✉️</span> contact@artci.ci</li>
              <li class="flex items-center gap-2"><span>📍</span> Abidjan, Côte d’Ivoire</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-green-800 mb-4">Newsletter</h3>
            <p class="text-sm text-gray-600 mb-4">Recevez les dernières actualités et informations du numérique.</p>
            <div class="flex flex-col sm:flex-row w-full gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Votre email"
                class="px-4 py-3 w-full border border-green-300 rounded-lg sm:rounded-r-none focus:ring-2 focus:ring-green-600 focus:outline-none bg-white text-base"
              />
              <RouterLink
                to="/newsletter"
                class="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-lg sm:rounded-l-none font-medium transition text-center text-base whitespace-nowrap flex items-center justify-center"
              >
                S’abonner
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="border-t border-green-200 mt-10 pt-6 text-center text-sm text-gray-600">
          © 2025 <span class="text-orange-500 font-semibold">SCB-SYSTEMS AFRICA</span> — Tous droits réservés.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import logo from "@/assets/images/logo-artci.png";

export default {
  data() {
    return {
      openDropdown: null,
      isAuthenticated: false,
      logo,
      mobileMenuOpen: false,
      mobileAboutOpen: false,
      mobileRegulationOpen: false,
    };
  },
  mounted() {
    this.isAuthenticated = !!localStorage.getItem("auth");
    document.addEventListener("click", this.closeAll);
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeAll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    toggleDropdown(menu, event) {
      event?.stopPropagation();
      this.openDropdown = this.openDropdown === menu ? null : menu;
    },
    closeAll(event) {
      if (event?.target?.closest?.('.relative')) return;
      this.openDropdown = null;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      document.body.style.overflow = this.mobileMenuOpen ? "hidden" : "";
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      this.mobileAboutOpen = false;
      this.mobileRegulationOpen = false;
      document.body.style.overflow = "";
    },
    handleResize() {
      if (window.innerWidth >= 1024 && this.mobileMenuOpen) {
        this.closeMobileMenu();
      }
    },
    logout() {
      localStorage.removeItem("auth");
      this.isAuthenticated = false;
      this.closeMobileMenu();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* --- Éléments du Menu Desktop --- */
.menu-item {
  display: block;
  padding: 12px 16px;
  font-size: 14px;
  color: #374151;
  transition: all 0.2s ease-in-out;
}
.menu-item:hover {
  background: #fff7ed;
  color: #f97316;
}

/* --- Boutons globaux --- */
.btn-orange {
  background: linear-gradient(to right, #f97316, #ea580c);
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: transform 0.1s ease, opacity 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn-orange:hover {
  opacity: 0.95;
}
.btn-orange:active {
  transform: scale(0.98);
}

.btn-logout {
  background: #f3f4f6;
  color: #374151;
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.2s ease;
}
.btn-logout:hover {
  background: #fee2e2;
  color: #dc2626;
}

/* --- Animations Dropdown Desktop --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* --- Animations Menu Mobile (Drawer) --- */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-enter-active .absolute:first-child,
.slide-fade-leave-active .absolute:first-child {
  transition: opacity 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-from .absolute:last-child,
.slide-fade-leave-to .absolute:last-child {
  transform: translateX(-100%);
}
.slide-fade-enter-to .absolute:last-child,
.slide-fade-leave-from .absolute:last-child {
  transform: translateX(0);
}
</style>