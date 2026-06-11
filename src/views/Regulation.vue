<template>
  <div class="pt-28 pb-16 bg-gray-50 text-gray-800">
    <!-- En-tête -->
    <section class="text-center mb-16">
      <h1 class="text-4xl font-bold text-orange-500 mb-4">
        La Régulation du Secteur Numérique en Côte d’Ivoire
      </h1>
      <p class="text-gray-600 max-w-3xl mx-auto">
         L’<span class="text-green-700 font-semibold">ARTCI</span> veille à la
        régulation, la supervision et la sécurisation des télécommunications, du
        numérique et de la cybersécurité en Côte d’Ivoire.
      </p>
    </section>

    <!-- Trois blocs de régulation -->
    <div class="container mx-auto px-6 grid md:grid-cols-3 gap-10">
      <!-- Régulation Télécoms -->
      <div
        class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div class="flex items-center mb-4 space-x-3">
          <i class="bx bx-signal-5 text-3xl text-green-600"></i>
          <h3 class="text-xl font-semibold text-gray-900">
            Régulation des Télécommunications
          </h3>
        </div>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Garantir un accès équitable, transparent et compétitif aux
          infrastructures et services de téléphonie et d’internet sur tout le
          territoire ivoirien.
        </p>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-center">
            <i class="bx bx-check text-green-600 text-xl mr-2"></i>
            Attribution des licences et autorisations
          </li>
          <li class="flex items-center">
            <i class="bx bx-check text-green-600 text-xl mr-2"></i>
            Suivi de la qualité de service (QoS)
          </li>
          <li class="flex items-center">
            <i class="bx bx-check text-green-600 text-xl mr-2"></i>
            Contrôle de la concurrence loyale
          </li>
        </ul>

        <RouterLink
          to="/telecoms"
          class="inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition"
        >
          En savoir plus
        </RouterLink>
      </div>

      <!-- Régulation du Numérique -->
      <div
        class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div class="flex items-center mb-4 space-x-3">
          <i class="bx bx-laptop text-3xl text-green-600"></i>
          <h3 class="text-xl font-semibold text-gray-900">
            Régulation du Numérique
          </h3>
        </div>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Accompagner la transformation digitale, promouvoir l’innovation et
          garantir une utilisation responsable des technologies numériques.
        </p>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-center">
            <i class="bx bx-check text-green-600 text-xl mr-2"></i>
            Gestion des plateformes numériques
          </li>
          <li class="flex items-center">
            <i class="bx bx-check text-green-600 text-xl mr-2"></i>
            Certification et conformité des services
          </li>
          <li class="flex items-center">
            <i class="bx bx-check text-green-600 text-xl mr-2"></i>
            Promotion de l’économie numérique
          </li>
        </ul>

        <RouterLink
          to="/numerique"
          class="inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition"
        >
          Découvrir
        </RouterLink>
      </div>

      <!-- Cybersécurité et Données -->
      <div
        class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div class="flex items-center mb-4 space-x-3">
          <i class="bx bx-shield text-3xl text-green-600"></i>
          <h3 class="text-xl font-semibold text-gray-900">
            Cybersécurité & Données Personnelles
          </h3>
        </div>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Assurer la sécurité du cyberespace national et la protection des
          données personnelles de chaque citoyen.
        </p>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-center">
            <i class="bx bx-check text-green-600 text-xl mr-2"></i>
            Veille et réponse aux incidents
          </li>
          <li class="flex items-center">
            <i class="bx bx-check text-green-600 text-xl mr-2"></i>
            Sensibilisation à la cybersécurité
          </li>
          <li class="flex items-center">
            <i class="bx bx-check text-green-600 text-xl mr-2"></i>
            Protection des données à caractère personnel
          </li>
        </ul>

        <RouterLink
          to="/securitedonnees"
          class="inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-800 transition"
        >
          Explorer
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regulation",
};
</script>

<style scoped>
/* Animation douce d’apparition */
div {
  animation: fadeIn 0.5s ease-out;
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
