<template>
  <div class="bg-gray-50 text-gray-800 pb-20">
    <!-- 🟧 Bannière -->
    <section class="relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white py-20 text-center mt-6">
      <div class="absolute inset-0 opacity-10 bg-[url('/bg-pattern.png')] bg-cover"></div>
      <div class="relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Sécurité & Données personnelles</h1>
        <p class="max-w-2xl mx-auto text-white mt-5">
          L’ARTCI protège vos données et veille à la cybersécurité dans le secteur numérique ivoirien.
        </p>
      </div>
    </section>

    <!-- 🛡️ Introduction -->
    <section class="container mx-auto px-6 mt-16 text-center">
      <h2 class="text-3xl font-bold mb-6 text-gray-900">
        Une protection renforcée pour tous les citoyens
      </h2>
      <p class="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Dans un monde numérique en constante évolution, la sécurité des informations et la protection de la vie privée sont primordiales. 
        L’ARTCI met en place des régulations et des outils pour garantir que les données personnelles soient protégées et que les systèmes numériques restent fiables et sécurisés.
      </p>
    </section>

    <!-- 🔑 Nos axes principaux -->
    <section class="container mx-auto px-6 mt-20">
      <h3 class="text-2xl font-semibold text-center mb-12 text-gray-900">
        Axes majeurs de la régulation
      </h3>
      <div class="grid md:grid-cols-3 gap-10">
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500 p-8 text-center">
          <i class="bx bx-shield-quarter text-5xl text-orange-500 mb-4"></i>
          <h4 class="text-xl font-semibold text-gray-900 mb-2">Cybersécurité</h4>
          <p class="text-gray-600">
            Mise en place de standards et outils pour sécuriser les réseaux, systèmes et applications numériques en Côte d’Ivoire.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-600 p-8 text-center">
          <i class="bx bx-lock text-5xl text-green-600 mb-4"></i>
          <h4 class="text-xl font-semibold text-gray-900 mb-2">Protection des données personnelles</h4>
          <p class="text-gray-600">
            Encadrement légal et technique pour assurer la confidentialité, la sécurité et l’intégrité des données personnelles.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-400 p-8 text-center">
          <i class="bx bx-network-chart text-5xl text-orange-400 mb-4"></i>
          <h4 class="text-xl font-semibold text-gray-900 mb-2">Sensibilisation & conformité</h4>
          <p class="text-gray-600">
            Programmes éducatifs et audits pour garantir que entreprises et citoyens respectent les normes de sécurité et confidentialité.
          </p>
        </div>
      </div>
    </section>

    <!-- 🌍 Cadre réglementaire -->
    <section class="container mx-auto px-6 mt-24">
      <div class="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-3xl shadow-lg p-10 text-center">
        <h3 class="text-2xl font-bold mb-4 text-white">Cadre légal et bonnes pratiques</h3>
        <p class="max-w-3xl mx-auto text-white mb-6">
          L’ARTCI élabore et applique des règlements relatifs à la sécurité numérique et à la protection des données.
          Elle accompagne également les entreprises et institutions pour se conformer aux standards nationaux et internationaux.
        </p>
        <RouterLink
          to="/reglementations"
          class="inline-block bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-all"
        >
          Voir les régulations
        </RouterLink>
      </div>
    </section>

    <!-- 🤝 Appel à collaboration -->
    <section class="mt-24 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white py-16 px-6 text-center shadow-inner">
      <h2 class="text-3xl font-bold text-white mb-4">Collaborons pour un numérique sécurisé</h2>
      <p class="max-w-2xl mx-auto text-white mb-8">
        Entreprises, institutions et citoyens sont invités à travailler avec l’ARTCI pour renforcer la sécurité et la confiance numérique en Côte d’Ivoire.
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
export default {
  name: "SecuriteDonnees",
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
