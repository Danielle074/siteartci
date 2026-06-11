<template>
  <div class="bg-gray-50 text-gray-800 pb-20">
    <!-- 🟩 Bannière -->
    <section
      class="relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white py-20 text-center"
    >
      <!-- Pattern en overlay (image importée) -->
      <div
        class="absolute inset-0 opacity-10 bg-cover"
        :style="{ backgroundImage: `url(${bgPattern})` }"
      ></div>
      <div class="relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold mt-4">
          Organisation & Direction
        </h1>
        <p class="max-w-2xl mx-auto text-white/90 mt-4">
          Découvrez la structure organisationnelle de l’ARTCI et les femmes et hommes qui la dirigent
          avec engagement, intégrité et vision pour le numérique ivoirien.
        </p>
      </div>
    </section>

    <!-- 🏢 Structure organisationnelle -->
    <section class="container mx-auto px-6 mt-16">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Structure de l’ARTCI
      </h2>

      <div
        class="bg-white rounded-2xl shadow-lg border-t-4 border-orange-500 p-8 md:p-12 max-w-5xl mx-auto text-center"
      >
        <p class="text-gray-700 leading-relaxed text-lg">
          L’ARTCI est organisée autour d’une Direction Générale et de plusieurs
          directions techniques et administratives. Cette structure permet une
          gouvernance efficace et transparente des activités liées à la régulation
          du secteur des télécommunications, de la poste, et de la cybersécurité.
        </p>

        <img
          :src="organigrammeImage"
          alt="Organigramme ARTCI"
          class="mx-auto mt-10 rounded-xl shadow-md max-w-full"
        />
      </div>
    </section>

    <!-- 👨‍💼 Direction Générale -->
    <section class="container mx-auto px-6 mt-24">
      <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
        Direction Générale
      </h2>

      <div
        class="bg-white rounded-2xl shadow-lg border-l-4 border-green-500 p-8 md:flex items-center gap-8 hover:shadow-2xl transition-all duration-300"
      >
        <img
          :src="directeurImage"
          alt="Directeur Général"
          class="w-48 h-48 object-cover rounded-full shadow-md mx-auto md:mx-0"
        />
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-semibold text-gray-900">
            M. KOUADIO Jean-Luc
          </h3>
          <p class="text-green-700 font-medium mb-3">
            Directeur Général de l’ARTCI
          </p>
          <p class="text-gray-600 leading-relaxed">
            Sous sa direction, l’ARTCI œuvre à renforcer la confiance numérique,
            à protéger les consommateurs et à stimuler l’innovation dans le
            secteur des TIC. Son leadership repose sur la transparence, la
            performance et l’excellence du service public.
          </p>
        </div>
      </div>
    </section>

    <!-- 👥 Équipe de direction -->
    <section class="container mx-auto px-6 mt-20">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Membres du Comité de Direction
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(membre, index) in direction"
          :key="index"
          class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center p-6 border-t-4 border-orange-500"
        >
          <img
            :src="membre.photo"
            :alt="membre.nom"
            class="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 class="text-xl font-semibold text-gray-900">
            {{ membre.nom }}
          </h3>
          <p class="text-green-700 font-medium mb-2">
            {{ membre.poste }}
          </p>
          <p class="text-gray-600 text-sm">
            {{ membre.description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// ✅ Importation de toutes les images depuis le dossier assets
import bgPattern from "@/assets/images/header1.jpg";
import organigrammeImage from "@/assets/images/header1.jpg";
import directeurImage from "@/assets/images/header1.jpg";
import dir1 from "@/assets/images/header1.jpg";
import dir2 from "@/assets/images/header1.jpg";
import dir3 from "@/assets/images/header1.jpg";

export default {
  name: "Organisation",
  data() {
    return {
      bgPattern,
      organigrammeImage,
      directeurImage,
      direction: [
        {
          nom: "Mme TRAORÉ Aminata",
          poste: "Directrice de la Régulation",
          photo: dir1,
          description:
            "Supervise la conformité et la régulation du secteur des télécommunications et de la poste.",
        },
        {
          nom: "M. KOFFI Bernard",
          poste: "Directeur des Affaires Juridiques",
          photo: dir2,
          description:
            "Garantit la légalité des décisions et veille à la bonne application des textes réglementaires.",
        },
        {
          nom: "Mme DIARRA Nadège",
          poste: "Directrice des Technologies Numériques",
          photo: dir3,
          description:
            "Pilote les projets liés à l’innovation et à la transformation digitale nationale.",
        },
      ],
    };
  },
};
</script>

<style scoped>
div {
  animation: fadeIn 0.6s ease-out;
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