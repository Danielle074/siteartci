<template>
  <div class="bg-gray-50 text-gray-800 pb-20">
    <!-- 🟧 Bannière -->
    <section
      class="relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-gray-900 py-20 text-center"
    >
      <!-- Pattern overlay avec image importée -->
      <div
        class="absolute inset-0 opacity-10 bg-cover"
        :style="{ backgroundImage: `url(${bgPattern})` }"
      ></div>
      <div class="relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold mt-8 text-white">Nos Partenaires</h1>
        <p class="max-w-2xl mx-auto text-white mt-8">
          L’ARTCI collabore avec des institutions publiques, des organismes
          internationaux et des acteurs privés pour promouvoir la confiance
          numérique et l’innovation technologique en Côte d’Ivoire.
        </p>
      </div>
    </section>

    <!-- 🤝 Présentation -->
    <section class="container mx-auto px-6 mt-16 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">
        Des collaborations stratégiques pour un numérique de confiance
      </h2>
      <p class="text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Nos partenariats s’inscrivent dans une dynamique d’ouverture et de
        coopération. Ensemble, nous œuvrons pour un écosystème numérique sûr,
        inclusif et durable.
      </p>
    </section>

    <!-- 🌍 Catégories -->
    <section class="container mx-auto px-6 mt-20 space-y-20">
      <!-- 🏛 Institutions publiques -->
      <div>
        <h3
          class="text-2xl font-semibold text-gray-900 mb-8 text-center border-l-4 border-green-600 inline-block px-3"
        >
          Institutions publiques partenaires
        </h3>
        <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          <div
            v-for="(p, i) in publics"
            :key="i"
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border-t-4 border-orange-500 text-center transition-all duration-300"
          >
            <img
              :src="p.logo"
              :alt="p.nom"
              class="h-20 w-auto mx-auto mb-4 object-contain"
            />
            <h4 class="text-lg font-semibold text-gray-900">{{ p.nom }}</h4>
          </div>
        </div>
      </div>

      <!-- 🌐 Partenaires internationaux -->
      <div>
        <h3
          class="text-2xl font-semibold text-gray-900 mb-8 text-center border-l-4 border-green-600 inline-block px-3"
        >
          Partenaires internationaux
        </h3>
        <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          <div
            v-for="(p, i) in internationaux"
            :key="i"
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border-t-4 border-orange-500 text-center transition-all duration-300"
          >
            <img
              :src="p.logo"
              :alt="p.nom"
              class="h-20 w-auto mx-auto mb-4 object-contain"
            />
            <h4 class="text-lg font-semibold text-gray-900">{{ p.nom }}</h4>
          </div>
        </div>
      </div>

      <!-- 💼 Entreprises technologiques -->
      <div>
        <h3
          class="text-2xl font-semibold text-gray-900 mb-8 text-center border-l-4 border-green-600 inline-block px-3"
        >
          Entreprises technologiques
        </h3>
        <div class="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          <div
            v-for="(p, i) in entreprises"
            :key="i"
            class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border-t-4 border-orange-500 text-center transition-all duration-300"
          >
            <img
              :src="p.logo"
              :alt="p.nom"
              class="h-20 w-auto mx-auto mb-4 object-contain"
            />
            <h4 class="text-lg font-semibold text-gray-900">{{ p.nom }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- 🌱 Appel à partenariat -->
    <section
      class="mt-24 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-gray-900 py-16 px-6 text-center rounded-t-3xl shadow-inner"
    >
      <h2 class="text-3xl font-bold mb-4 text-white">Devenez partenaire de l’ARTCI</h2>
      <p class="max-w-2xl mx-auto text-white mb-8">
        Vous souhaitez collaborer avec l’ARTCI pour soutenir la transformation
        numérique en Côte d’Ivoire ? Contactez-nous pour bâtir ensemble un futur
        digital responsable et sécurisé.
      </p>
      <RouterLink
        to="/contact"
        class="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition-all"
      >
        Nous contacter
      </RouterLink>
    </section>
  </div>
</template>

<script>
// ✅ Importation de toutes les images depuis @/assets/images/
import bgPattern from "@/assets/images/header1.jpg";

// Institutions publiques
import ministereLogo from "@/assets/images/ministere.jpg";
import gouvernementLogo from "@/assets/images/gouvernement.png";
import ansiLogo from "@/assets/images/ansi.jpg";
import ansutLogo from "@/assets/images/ansut.png";

// Partenaires internationaux
import ituLogo from "@/assets/images/itu.jpg";
import atuLogo from "@/assets/images/atu.png";
import banqueMondialeLogo from "@/assets/images/banque-mondiale.png";   // renomme le fichier ou ajuste le nom
import smartAfricaLogo from "@/assets/images/smart-africa-alliance.png";

// Entreprises
import orangeLogo from "@/assets/images/orange.png";
import mtnLogo from "@/assets/images/mtn.png";
import moovAfricaLogo from "@/assets/images/moov-africa.png";
import waveLogo from "@/assets/images/wave.png";

export default {
  name: "Partenaires",
  data() {
    return {
      bgPattern,
      publics: [
        { nom: "Ministère de la Communication et de l'Économie Numérique", logo: ministereLogo },
        { nom: "Gouvernement de Côte d’Ivoire", logo: gouvernementLogo },
        { nom: "Autorité Nationale de la Cybersécurité", logo: ansiLogo },
        { nom: "Agence Nationale du Service Universel TIC", logo: ansutLogo },
      ],
      internationaux: [
        { nom: "Union Internationale des Télécommunications (UIT)", logo: ituLogo },
        { nom: "Commission Africaine des Télécommunications (CAT)", logo: atuLogo },
        { nom: "Banque Mondiale", logo: banqueMondialeLogo },
        { nom: "Smart Africa Alliance", logo: smartAfricaLogo },
      ],
      entreprises: [
        { nom: "Orange Côte d’Ivoire", logo: orangeLogo },
        { nom: "MTN Côte d’Ivoire", logo: mtnLogo },
        { nom: "Moov Africa", logo: moovAfricaLogo },
        { nom: "Wave Mobile Money", logo: waveLogo },
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
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>