<template>
  <div class="bg-gray-50 min-h-screen py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Titre principal -->
      <div class="text-center mt-12">
        <h1 class="text-4xl font-bold text-green-700 mb-4">
          Service Postal en Côte d’Ivoire
        </h1>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Le service postal, un pilier essentiel de la communication et de l’économie nationale,
          modernisé pour répondre aux défis du numérique et de la mondialisation.
        </p>
      </div>

      <!-- Section Présentation -->
      <div class="bg-white rounded-xl shadow-lg p-8 mt-12 border-t-4 border-orange-500">
        <div class="flex items-center gap-3 mb-4">
          <i class="bx bx-bullseye text-3xl text-orange-500"></i>
          <h2 class="text-2xl font-semibold text-green-700">Objectif principal</h2>
        </div>
        <p class="text-gray-700 leading-relaxed">
          L’Autorité de Régulation des Télécommunications/TIC de Côte d’Ivoire (ARTCI)
          œuvre pour un <span class="font-medium text-orange-600">service postal performant, fiable et accessible à tous</span>.
          Cette mission vise à garantir la qualité, la sécurité et l’efficacité du réseau postal
          sur l’ensemble du territoire ivoirien.
        </p>
      </div>

      <!-- Section Missions -->
      <div class="grid md:grid-cols-2 gap-8 mt-12">
        <!-- Bloc 1 -->
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-green-600">
          <div class="flex items-center gap-3 mb-3">
            <i class="bx bx-package text-3xl text-green-600"></i>
            <h3 class="text-xl font-semibold text-green-700">Modernisation du secteur</h3>
          </div>
          <p class="text-gray-600">
            L’ARTCI accompagne la transformation numérique du secteur postal en favorisant
            l’innovation et l’adoption de nouvelles technologies pour améliorer la distribution du courrier et des colis.
          </p>
        </div>

        <!-- Bloc 2 -->
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-green-600">
          <div class="flex items-center gap-3 mb-3">
            <i class="bx bx-shield-quarter text-3xl text-green-600"></i>
            <h3 class="text-xl font-semibold text-green-700">Régulation et contrôle</h3>
          </div>
          <p class="text-gray-600">
            L’Autorité veille au respect des normes, au suivi de la qualité de service,
            et à la protection des consommateurs face aux prestataires postaux.
          </p>
        </div>
      </div>

      <!-- Section Avantages -->
      <div class="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500 mt-12">
        <div class="flex items-center justify-center gap-3 mb-6">
          <i class="bx bx-globe text-3xl text-orange-500"></i>
          <h2 class="text-2xl font-semibold text-green-700 text-center">
            Un service postal au cœur du développement
          </h2>
        </div>

        <p class="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
          Grâce à une régulation rigoureuse et à la digitalisation des processus, 
          le service postal contribue activement à l’inclusion financière et au développement économique local.
        </p>

        <!-- Bouton contact -->
        <div class="text-center">
          <RouterLink
            to="/contact"
            class="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-all mt-8 inline-block"
          >
            Nous contacter
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pas de logique nécessaire pour cette page statique
</script>

<style scoped>
/* Animation douce */
div {
  animation: fadeIn 0.5s ease-out;
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
