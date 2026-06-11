<template>
  <div class="bg-gray-50 text-gray-800">
    <!-- 🟩 Section de bienvenue -->
    <section
      class="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white py-20"
    >
      <div class="container mx-auto px-6 text-center max-w-4xl">
        <h1 class="text-4xl md:text-5xl font-extrabold mt-10 tracking-tight">
          À propos de l’ARTCI
        </h1>
        <p class="text-lg text-white/90 leading-relaxed mt-6">
          L’Autorité de Régulation des Télécommunications/TIC de Côte d’Ivoire
          veille à un environnement numérique sûr, équitable et innovant pour
          tous.
        </p>
      </div>
    </section>

    <!-- 👨‍💼 Mot du Directeur Général -->
    <section class="py-20 bg-white">
      <div
        class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
      >
        <!-- Texte -->
        <div>
          <h2
            class="text-3xl font-bold text-green-800 mb-6 border-l-4 border-orange-500 pl-4"
          >
            Mot du Directeur Général
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Chers citoyens, chers acteurs du numérique,
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            À l’ARTCI, nous avons la conviction que le développement économique
            et social de notre pays passe par une transformation numérique
            responsable et inclusive. Notre mission est de garantir un cadre
            réglementaire équitable, transparent et propice à l’innovation, tout
            en protégeant les droits des consommateurs et des entreprises.
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            Ensemble, nous bâtissons une Côte d’Ivoire connectée, performante et
            sûre.
          </p>

          <div class="mt-6">
            <p class="font-semibold text-green-800 text-lg">
              Mr Lakoun OUATTARA
            </p>
            <p class="text-gray-500 italic">Directeur Général de l’ARTCI</p>
          </div>
        </div>

        <!-- Photo avec image importée -->
        <div class="flex justify-center">
          <img
            :src="dgImage"
            alt="Directeur Général ARTCI"
            class="rounded-2xl shadow-2xl w-[350px] h-[420px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>

    <!-- 🧭 Mission, Vision, Valeurs -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-green-800 mb-4">
            Notre Rôle et Engagements
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            L’ARTCI agit pour réguler, protéger et promouvoir un environnement
            numérique compétitif et sûr en Côte d’Ivoire.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-10">
          <!-- Mission -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500"
          >
            <div class="flex items-center mb-4 space-x-3">
              <i class="bx bx-target-lock text-3xl text-green-700"></i>
              <h3 class="text-xl font-semibold text-gray-900">Notre Mission</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Garantir un cadre de régulation équilibré pour le développement
              durable du secteur des télécommunications, du numérique et de la
              cybersécurité.
            </p>
          </div>

          <!-- Vision -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500"
          >
            <div class="flex items-center mb-4 space-x-3">
              <i class="bx bx-show-alt text-3xl text-orange-500"></i>
              <h3 class="text-xl font-semibold text-gray-900">Notre Vision</h3>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Faire de la Côte d’Ivoire un hub numérique africain, où la
              technologie soutient le progrès humain, la transparence et la
              sécurité.
            </p>
          </div>

          <!-- Valeurs -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500"
          >
            <div class="flex items-center mb-4 space-x-3">
              <i class="bx bx-diamond text-3xl text-green-600"></i>
              <h3 class="text-xl font-semibold text-gray-900">Nos Valeurs</h3>
            </div>
            <ul class="text-gray-600 leading-relaxed space-y-3">
              <li class="flex items-center">
                <i class="bx bx-check text-green-600 text-xl mr-2"></i>
                Intégrité et transparence
              </li>
              <li class="flex items-center">
                <i class="bx bx-check text-green-600 text-xl mr-2"></i>
                Innovation et excellence
              </li>
              <li class="flex items-center">
                <i class="bx bx-check text-green-600 text-xl mr-2"></i>
                Équité et responsabilité
              </li>
              <li class="flex items-center">
                <i class="bx bx-check text-green-600 text-xl mr-2"></i>
                Protection du citoyen numérique
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 🌍 Section finale -->
    <section class="bg-green-800 text-white py-16 text-center">
      <div class="container mx-auto px-6 max-w-3xl">
        <h2 class="text-3xl font-bold mb-4">
          Un numérique responsable pour tous
        </h2>
        <p class="text-white/90 leading-relaxed mb-8">
          L’ARTCI œuvre chaque jour à créer un écosystème numérique inclusif et
          sécurisé, au service de la croissance et du bien-être des populations
          ivoiriennes.
        </p>
        <RouterLink
          to="/mission"
          class="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          En savoir plus
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script>
// ✅ Importation de l'image (et de toutes les autres si besoin)
import dgImage from "@/assets/images/dg.jpg";

export default {
  name: "Apropos",
  data() {
    return {
      dgImage, // accessible dans le template via :src="dgImage"
    };
  },
};
</script>

<style scoped>
section {
  scroll-margin-top: 100px;
}
</style>