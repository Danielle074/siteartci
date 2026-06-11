<template>
  <div class="bg-gray-50 text-gray-800 pb-20">
    <!-- 🌿 Bannière -->
    <section class="relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white py-20 text-center">
      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mt-4">Nos Missions</h1>
        <p class="text-white/90 leading-relaxed text-lg mt-4">
          L’ARTCI œuvre chaque jour pour réguler, promouvoir et sécuriser le développement du numérique en Côte d’Ivoire.
        </p>
      </div>
    </section>

    <!-- 💼 Nos missions principales -->
    <section class="py-20 container mx-auto px-6">
      <h2 class="text-3xl font-semibold text-center text-orange-500 mb-12">
        Nos missions principales
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(mission, index) in missions"
          :key="index"
          class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500"
        >
          <div class="text-green-700 text-5xl mb-4">
            <i :class="mission.icon"></i>
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900">
            {{ mission.titre }}
          </h3>
          <p class="text-gray-600 leading-relaxed">{{ mission.description }}</p>
        </div>
      </div>
    </section>

    <!-- 🎯 Vision et Objectifs -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <!-- Texte -->
        <div>
          <h2 class="text-3xl font-semibold text-green-800 mb-6">
            Vision & Objectifs
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            L’ARTCI ambitionne de faire de la Côte d’Ivoire un leader du numérique en Afrique, 
            grâce à un environnement réglementaire clair, innovant et inclusif.
          </p>
          <p class="text-gray-700 leading-relaxed">
            En encourageant la concurrence saine, la protection des données et la transformation digitale, 
            l’ARTCI œuvre à renforcer la confiance et la transparence au sein du secteur.
          </p>
          <blockquote class="mt-6 italic border-l-4 border-orange-500 pl-4 text-gray-600">
            “Le numérique est le moteur du développement, et la régulation en est le garant.”
          </blockquote>
        </div>

        <!-- Image Directeur Général (importée) -->
        <div class="text-center">
          <img
            :src="dgImage"
            alt="Directeur Général ARTCI"
            class="rounded-2xl shadow-xl w-80 h-80 object-cover mx-auto"
          />
          <h4 class="text-lg font-semibold text-green-800 mt-4">
            M. Ibrahim Koné
          </h4>
          <p class="text-gray-500">Directeur Général de l’ARTCI</p>
        </div>
      </div>
    </section>

    <!-- 🤝 Engagement -->
    <section class="bg-orange-500 text-white text-center py-20 px-6">
      <h2 class="text-3xl font-bold mb-6">Notre Engagement</h2>
      <p class="max-w-3xl mx-auto text-white/90 text-lg leading-relaxed">
        L’ARTCI s’engage à garantir un espace numérique fiable, éthique et accessible à tous,
        tout en favorisant l’innovation, la confiance et la protection des citoyens.
      </p>
    </section>
  </div>
</template>

<script>
// ✅ Importation de l'image du Directeur Général
import dgImage from "@/assets/images/dg.jpg";

export default {
  name: "Missions",
  data() {
    return {
      dgImage, // Rendre l'image accessible dans le template
      missions: [
        {
          icon: "bx bx-shield-quarter",
          titre: "Régulation du secteur",
          description:
            "Assurer la régulation et le suivi des acteurs du numérique et des télécommunications pour un marché équilibré et compétitif.",
        },
        {
          icon: "bx bx-lock-alt",
          titre: "Protection des données",
          description:
            "Garantir la confidentialité, la sécurité et la protection des informations personnelles des citoyens et entreprises.",
        },
        {
          icon: "bx bx-broadcast",
          titre: "Développement du numérique",
          description:
            "Promouvoir l’innovation et soutenir la transformation digitale au service du développement économique national.",
        },
        {
          icon: "bx bx-network-chart",
          titre: "Gestion du spectre radioélectrique",
          description:
            "Superviser et optimiser l’utilisation des fréquences pour garantir un accès équitable et efficace.",
        },
        {
          icon: "bx bx-user-voice",
          titre: "Protection des consommateurs",
          description:
            "Assurer la qualité de service et défendre les droits des usagers face aux opérateurs du secteur.",
        },
        {
          icon: "bx bx-book-content",
          titre: "Veille technologique et juridique",
          description:
            "Anticiper les évolutions du numérique afin d’adapter la réglementation aux nouveaux enjeux mondiaux.",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  animation: fadeIn 0.7s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>