<template>
  <div class="bg-gray-50 text-gray-800 pb-20">
    <!-- 🟧 Bannière -->
    <section class="relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-gray-900 py-20 text-center">
      <!-- Pattern overlay avec image importée -->
      <div
        class="absolute inset-0 opacity-10 bg-cover"
        :style="{ backgroundImage: `url(${bgPattern})` }"
      ></div>
      <div class="relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold mt-4 text-white">Régulation du Numérique</h1>
        <p class="max-w-2xl mx-auto text-white mt-4">
          L’ARTCI veille à garantir un environnement numérique sûr, équitable et propice à l’innovation en Côte d’Ivoire.
        </p>
      </div>
    </section>

    <!-- 🧭 Introduction -->
    <section class="container mx-auto px-6 mt-16 text-center">
      <h2 class="text-3xl font-bold mb-6 text-gray-900">
        Une régulation au service de la transformation digitale
      </h2>
      <p class="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        La régulation du numérique vise à encadrer les activités liées aux technologies de l’information et de la communication (TIC),
        tout en assurant la protection des citoyens, la libre concurrence et la promotion de l’innovation.
        L’ARTCI joue un rôle central dans cet écosystème en accompagnant les acteurs publics et privés.
      </p>
    </section>

    <!-- ⚖️ Missions principales -->
    <section class="container mx-auto px-6 mt-20">
      <h3 class="text-2xl font-semibold text-center mb-12 text-gray-900">
        Les axes majeurs de la régulation numérique
      </h3>
      <div class="grid md:grid-cols-3 gap-10">
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500 p-8 text-center">
          <img :src="headerImage" alt="Cybersécurité" class="h-16 mx-auto mb-4" />
          <h4 class="text-xl font-semibold text-gray-900 mb-2">Cybersécurité & Protection</h4>
          <p class="text-gray-600">
            L’ARTCI garantit la sécurité des données personnelles et accompagne les entreprises dans la mise en conformité numérique.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-600 p-8 text-center">
          <img :src="headerImage" alt="Innovation" class="h-16 mx-auto mb-4" />
          <h4 class="text-xl font-semibold text-gray-900 mb-2">Innovation & Économie numérique</h4>
          <p class="text-gray-600">
            Encourager la créativité, l’entrepreneuriat et l’intégration des solutions digitales dans tous les secteurs économiques.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-400 p-8 text-center">
          <img :src="headerImage" alt="Inclusion numérique" class="h-16 mx-auto mb-4" />
          <h4 class="text-xl font-semibold text-gray-900 mb-2">Inclusion & Accessibilité</h4>
          <p class="text-gray-600">
            Promouvoir un accès équitable aux services numériques pour tous les citoyens, y compris dans les zones rurales.
          </p>
        </div>
      </div>
    </section>

    <!-- 🌍 Cadre réglementaire -->
    <section class="container mx-auto px-6 mt-24">
      <div class="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-3xl shadow-lg p-10 text-center">
        <h3 class="text-2xl font-bold mb-4 text-white mt-6">Cadre réglementaire</h3>
        <p class="max-w-3xl mx-auto text-white mt-6">
          L’ARTCI élabore et veille à l’application des règlements relatifs aux télécommunications, à la protection des données et aux
          services numériques. Elle travaille en étroite collaboration avec les institutions nationales et internationales pour une
          gouvernance numérique transparente et responsable.
        </p>
        <RouterLink
          to="/reglementations"
          class="inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-all mt-6"
        >
          Voir les régulations
        </RouterLink>
      </div>
    </section>

    <!-- 🤝 Appel à collaboration -->
    <section class="mt-24 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white py-16 px-6 text-center shadow-inner">
      <h2 class="text-3xl font-bold mb-6">Collaborons pour un numérique responsable</h2>
      <p class="max-w-2xl mx-auto text-white mb-6">
        L’ARTCI invite les entreprises, institutions et citoyens à participer à la construction d’un environnement numérique sécurisé et inclusif.
      </p>
      <RouterLink
        to="/contact"
        class="bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-all"
      >
        Nous contacter
      </RouterLink>
    </section>
  </div>
</template>

<script>
// ✅ Importation des images depuis @/assets/images/
import bgPattern from "@/assets/images/header2.jpg"; 

import headerImage from "@/assets/images/header1.jpg";


export default {
  name: "Numerique",
  data() {
    return {
      bgPattern,
      headerImage,
    };
  },
};
</script>

<style scoped>
div {
  animation: fadeIn 0.7s ease-out;
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
</style>