<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <!-- HEADER -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur shadow ">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" @click="closeAll">
          <img :src="logo" class="h-14" alt="ARTCI Logo" />
        </router-link>

        <!-- MENU DESKTOP -->
        <nav class="hidden md:flex items-center gap-8 font-semibold">
          <router-link to="/" @click="closeAll">Accueil</router-link>

          <!-- À PROPOS -->
          <div class="relative flex items-center gap-1">
            <router-link to="/about" @click="closeAll" class="hover:text-orange-500">
              À propos
            </router-link>
            <button @click.stop="toggleDropdown('about')">
              <i class="bx bx-chevron-down"></i>
            </button>
            <transition name="fade">
              <div
                v-if="openDropdown === 'about'"
                class="absolute top-full mt-3 w-56 bg-white rounded-lg shadow-xl border border-gray-100"
              >
                <router-link to="/mission" @click="closeAll" class="menu-item">
                  Notre mission
                </router-link>
                <router-link to="/organisation" @click="closeAll" class="menu-item">
                  Organisation & Direction
                </router-link>
                <router-link to="/partenaires" @click="closeAll" class="menu-item">
                  Partenaires
                </router-link>
              </div>
            </transition>
          </div>

          <!-- RÉGULATION -->
          <div class="relative flex items-center gap-1">
            <router-link to="/regulation" @click="closeAll" class="hover:text-orange-500">
              Régulation
            </router-link>
            <button @click.stop="toggleDropdown('regulation')">
              <i class="bx bx-chevron-down"></i>
            </button>
            <transition name="fade">
              <div
                v-if="openDropdown === 'regulation'"
                class="absolute top-full mt-3 w-64 bg-white rounded-lg shadow-xl border border-gray-100"
              >
                <router-link to="/telecoms" @click="closeAll" class="menu-item">
                  Télécoms
                </router-link>
                <router-link to="/numerique" @click="closeAll" class="menu-item">
                  Numérique
                </router-link>
                <router-link to="/securiteDonnees" @click="closeAll" class="menu-item">
                  Données personnelles
                </router-link>
              </div>
            </transition>
          </div>

          <router-link to="/actualites" @click="closeAll">Actualités</router-link>
          <router-link to="/contact" @click="closeAll">Contact</router-link>

          <!-- LOGIN / LOGOUT -->
          <router-link v-if="!isAuthenticated" to="/login">
            <button class="btn-orange">Login</button>
          </router-link>
          <button v-else @click="logout" class="btn-orange btn-logout">
            Déconnexion
          </button>
        </nav>
      </div>
    </header>

    <!-- CONTENU PRINCIPAL  -->
    <main>
      <router-view /> 
    </main>

    <!-- Footer -->
    <div class="border-t-4 border-orange-500"></div>
    <footer class="bg-green-50 text-gray-700 pt-14 pb-8 border-t border-green-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <router-link to="/">
              <h2 class="text-2xl font-bold text-green-800 mb-3">ARTCI</h2>
            </router-link>
            <p class="text-sm leading-relaxed text-gray-600">
              Autorité de Régulation des Télécommunications / TIC de Côte
              d’Ivoire. Nous œuvrons pour un environnement numérique sûr,
              équitable et innovant.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-green-800 mb-4">Navigation</h3>
            <ul class="space-y-2">
              <li><router-link to="/" class="hover:text-orange-500">Accueil</router-link></li>
              <li><router-link to="/mission" class="hover:text-orange-500">Mission</router-link></li>
              <li><router-link to="/organisation" class="hover:text-orange-500">Organisation</router-link></li>
              <li><router-link to="/contact" class="hover:text-orange-500">Contact</router-link></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-green-800 mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-700">
              <li>📞 (225) 27 00 00 00 00</li>
              <li>✉️ contact@artci.ci</li>
              <li>📍 Abidjan, Côte d’Ivoire</li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-green-800 mb-4">Newsletter</h3>
            <p class="text-sm text-gray-600 mb-4">
              Recevez les dernières actualités et informations du numérique.
            </p>
            <div class="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Votre email"
                class="px-4 py-2.5 w-full border border-green-300 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none focus:ring-2 focus:ring-green-600"
              />
              <router-link
                to="/newsletter"
                class="bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none font-medium transition text-center"
              >
                S’abonner
              </router-link>
            </div>
          </div>
        </div>

        <div class="border-t border-green-800 mt-10 pt-6 text-center text-sm text-gray-600">
          © 2025 <span class="text-orange-500 font-semibold">SCB-SYSTEMS AFRICA</span> — Tous droits réservés.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import logo from "@/assets/images/logo-artci.png"; // ✅ Import du logo depuis assets

export default {
  name: 'Layout',
  data() {
    return {
      openDropdown: null,
      isAuthenticated: false,
      logo,
    };
  },

  mounted() {
    console.log('✅ Layout ARTCI monté');
    this.isAuthenticated = !!localStorage.getItem("auth");
    document.addEventListener("click", this.closeAll);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.closeAll);
  },

  methods: {
    toggleDropdown(menu) {
      this.openDropdown = this.openDropdown === menu ? null : menu;
    },
    closeAll() {
      this.openDropdown = null;
    },
    logout() {
      localStorage.removeItem("auth");
      this.isAuthenticated = false;
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.menu-item {
  display: block;
  padding: 12px 16px;
  font-size: 14px;
}
.menu-item:hover {
  background: #fff7ed;
  color: #f97316;
}

.btn-orange {
  background: linear-gradient(to right, #f97316, #ea580c);
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
}

.btn-logout {
  background: #e5e7eb;
  padding: 8px 16px;
  border-radius: 12px;
}
.btn-logout:hover {
  background: #fee2e2;
  color: #dc2626;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Pour le header fixe */
main {
  min-height: calc(100vh - 400px); /* Ajustez selon la hauteur de votre footer */
}
</style>