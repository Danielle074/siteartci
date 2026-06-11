<template>
  <div>
    <!-- Hero Section - Image fixe -->
    <section class="relative w-full h-[90vh] overflow-hidden">
      <div class="absolute inset-0">
        <img
          :src="heroImage"
          alt="ARTCI - Régulation Télécommunications et Numérique"
          class="w-full h-full object-cover brightness-90"
        />
      </div>

      <!-- Overlay centré avec dégradé -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center justify-center text-center px-6 lg:px-20"
      >
        <div class="max-w-3xl text-white">
          <h1
            class="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mt-20 drop-shadow-2xl"
          >
            L'Autorité de Régulation des Télécommunications<br />
            <span class="text-orange-500">et du Numérique de Côte d'Ivoire</span>
          </h1>

          <p class="text-base md:text-lg text-gray-200 mt-8 leading-relaxed">
            Promouvoir l'innovation, protéger les usagers et assurer un
            numérique fiable, inclusif et performant pour tous.
          </p>

          <div
            class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
          >
            <router-link
              to="/mission"
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
            >
              Découvrir notre mission
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services clés ARTCI -->
    <section class="py-24 bg-gradient-to-b from-white to-orange-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-4">
          Services clés de l'ARTCI
        </h2>
        <p class="text-lg text-gray-600 text-center mb-14 max-w-2xl mx-auto">
          Découvrez nos principales missions et services au service du développement numérique
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <!-- Régulation -->
          <div class="group bg-white p-7 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition">
              <i class="bx bx-network-chart text-2xl text-orange-500 group-hover:text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Régulation</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Supervision et régulation du marché des télécommunications et du numérique.
            </p>
          </div>

          <!-- Protection -->
          <div class="group bg-white p-7 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition">
              <i class="bx bx-shield-quarter text-2xl text-orange-500 group-hover:text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Protection</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Protection des consommateurs et des données personnelles.
            </p>
          </div>

          <!-- Innovation -->
          <div class="group bg-white p-7 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition">
              <i class="bx bx-bulb text-2xl text-orange-500 group-hover:text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Promotion de l'innovation et du développement technologique.
            </p>
          </div>

          <!-- Sécurité -->
          <div class="group bg-white p-7 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition">
              <i class="bx bx-lock-alt text-2xl text-orange-500 group-hover:text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Sécurité</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Renforcement de la cybersécurité et de la confiance numérique.
            </p>
          </div>

          <!-- Inclusion -->
          <div class="group bg-white p-7 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition">
              <i class="bx bx-universal-access text-2xl text-orange-500 group-hover:text-white"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">Inclusion</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Développement d'un numérique accessible et inclusif pour tous.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles récents / Actualités -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Actualités récentes
        </h2>
        <p class="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Restez informé des dernières nouvelles et développements dans le secteur
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Article 1 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
            <div class="h-48 overflow-hidden">
              <img
                :src="articleImage2"
                alt="Nouvelle réglementation"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-500 transition">
                Nouvelle réglementation des télécoms
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                L'ARTCI publie de nouvelles directives pour renforcer la protection des consommateurs et promouvoir la concurrence...
              </p>
              <button class="text-orange-500 font-semibold hover:text-orange-600 transition flex items-center">
                Lire plus
                <i class="bx bx-right-arrow-alt ml-2"></i>
              </button>
            </div>
          </div>

          <!-- Article 2 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
            <div class="h-48 overflow-hidden">
              <img
                :src="articleImage3"
                alt="Forum digital"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-500 transition">
                Forum Digital 2024
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Retour sur le forum annuel qui a réuni les acteurs majeurs du numérique pour discuter des enjeux futurs...
              </p>
              <button class="text-orange-500 font-semibold hover:text-orange-600 transition flex items-center">
                Lire plus
                <i class="bx bx-right-arrow-alt ml-2"></i>
              </button>
            </div>
          </div>

          <!-- Article 3 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
            <div class="h-48 overflow-hidden">
              <img
                :src="heroImage"
                alt="Cybersécurité"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-500 transition">
                Stratégie Cybersécurité
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">
                Lancement d'un nouveau plan national pour renforcer la sécurité des infrastructures critiques...
              </p>
              <button class="text-orange-500 font-semibold hover:text-orange-600 transition flex items-center">
                Lire plus
                <i class="bx bx-right-arrow-alt ml-2"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/actualites"
            class="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 hover:shadow-lg transition"
          >
            Voir toutes les actualités
          </router-link>
        </div>
      </div>
    </section>

    <!-- Domaines d'intervention -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Domaines d'intervention
        </h2>
        <p class="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Nos champs d'action pour un secteur des télécommunications et du numérique performant
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500 hover:shadow-2xl transition group">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-orange-500 transition">
              Télécommunications
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Supervision des opérateurs et maintien d'un marché concurrentiel et équitable pour une connectivité optimale.
            </p>
            <router-link
              to="/telecoms"
              class="text-orange-500 font-medium hover:text-orange-400 transition flex items-center"
            >
              Découvrir
              <i class="bx bx-right-arrow-alt ml-1"></i>
            </router-link>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500 hover:shadow-2xl transition group">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-orange-500 transition">
              Numérique & Cybersécurité
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Protection des données personnelles et renforcement de la sécurité numérique pour un écosystème de confiance.
            </p>
            <router-link
              to="/numerique"
              class="text-orange-500 font-medium hover:text-orange-400 transition flex items-center"
            >
              Découvrir
              <i class="bx bx-right-arrow-alt ml-1"></i>
            </router-link>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500 hover:shadow-2xl transition group">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-orange-500 transition">
              Service Postal
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Modernisation et régulation d'un service postal performant et accessible sur l'ensemble du territoire.
            </p>
            <router-link
              to="/postal"
              class="text-orange-500 font-medium hover:text-orange-400 transition flex items-center"
            >
              Découvrir
              <i class="bx bx-right-arrow-alt ml-1"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Médiathèque -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 lg:px-12">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Médiathèque
        </h2>
        <p class="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez nos ressources multimédias : photos, vidéos et publications
        </p>

        <div class="flex justify-center space-x-4 mb-10">
          <button
            @click="selectedTab = 'photos'"
            :class="[
              'px-6 py-2 rounded-full font-semibold transition-all',
              selectedTab === 'photos'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-700 border hover:bg-orange-100',
            ]"
          >
            Photos
          </button>
          <button
            @click="selectedTab = 'videos'"
            :class="[
              'px-6 py-2 rounded-full font-semibold transition-all',
              selectedTab === 'videos'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-700 border hover:bg-orange-100',
            ]"
          >
            Vidéos
          </button>
          <button
            @click="selectedTab = 'articles'"
            :class="[
              'px-6 py-2 rounded-full font-semibold transition-all',
              selectedTab === 'articles'
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-700 border hover:bg-orange-100',
            ]"
          >
            Articles
          </button>
        </div>

        <div
          v-if="selectedTab === 'photos'"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn"
        >
          <div
            v-for="(photo, i) in photos"
            :key="i"
            class="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              :src="photo.src"
              :alt="photo.title"
              class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold p-4"
            >
              {{ photo.title }}
            </div>
          </div>
        </div>

        <div
          v-if="selectedTab === 'videos'"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn"
        >
          <div
            v-for="(video, i) in videos"
            :key="i"
            class="rounded-xl overflow-hidden shadow-lg bg-white group hover:shadow-xl transition"
          >
            <div class="relative aspect-video">
              <iframe
                :src="video.url"
                frameborder="0"
                allowfullscreen
                class="w-full h-full"
              ></iframe>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition">
                {{ video.title }}
              </h3>
            </div>
          </div>
        </div>

        <div
          v-if="selectedTab === 'articles'"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn"
        >
          <div
            v-for="(article, i) in articles"
            :key="i"
            class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition group"
          >
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-500 transition">
                {{ article.title }}
              </h3>
              <p class="text-gray-600 mb-4 leading-relaxed">{{ article.description }}</p>
              <div class="flex justify-between text-sm text-gray-500">
                <span>{{ article.date }}</span>
                <router-link
                  to="/news"
                  class="text-orange-500 hover:text-orange-600 font-medium transition"
                >
                  Lire plus
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/actualites"
            class="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 hover:shadow-lg transition"
          >
            Voir toute la médiathèque
          </router-link>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-20 bg-white border-t border-gray-200">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Abonnez-vous à notre newsletter
        </h2>
        <p class="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Recevez les dernières actualités, rapports et informations sur la
          régulation du secteur numérique en Côte d'Ivoire.
        </p>
        <form
          @submit.prevent="subscribeNewsletter"
          class="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Entrez votre adresse email"
            required
            v-model="email"
            class="w-full sm:flex-1 px-5 py-3.5 rounded-full border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          <button
            type="submit"
            class="bg-orange-500 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-orange-600 hover:shadow-md transition"
          >
            S'abonner
          </button>
        </form>
        <p class="text-sm text-gray-500 mt-6">
          Vous pouvez vous désabonner à tout moment. Votre adresse restera
          confidentielle.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// IMPORT DES IMAGES
import heroImage from "@/assets/images/header1.jpg";
import articleImage2 from "@/assets/images/header2.jpg";
import articleImage3 from "@/assets/images/header3.jpg";
import photo1 from "@/assets/images/header1.jpg";
import photo2 from "@/assets/images/header2.jpg";
import photo3 from "@/assets/images/header3.jpg";

// État pour les onglets
const selectedTab = ref("photos");

// Données pour la médiathèque
const photos = ref([
  { src: photo1, title: "Conférence ARTCI" },
  { src: photo2, title: "Atelier numérique" },
  { src: photo3, title: "Événement citoyen" },
]);

const videos = ref([
  {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Présentation ARTCI",
  },
  {
    url: "https://www.youtube.com/embed/ysz5S6PUM-U",
    title: "Forum sur le numérique",
  },
  {
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    title: "Spot institutionnel",
  },
]);

const articles = ref([
  {
    title: "Nouvelle réglementation télécom",
    description:
      "Découvrez les dernières mesures prises pour renforcer la sécurité numérique.",
    date: "02 Oct 2025",
  },
  {
    title: "L'ARTCI au service de l'innovation",
    description: "Un regard sur nos projets de transformation digitale.",
    date: "18 Sept 2025",
  },
  {
    title: "Semaine du numérique",
    description:
      "Retour sur un événement marquant pour les acteurs du secteur.",
    date: "01 Sept 2025",
  },
]);

// Newsletter
const email = ref("");

const subscribeNewsletter = () => {
  console.log("Email inscrit:", email.value);
  email.value = "";
};
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

section {
  animation: fadeIn 0.8s ease-in-out;
}

@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
}
</style>