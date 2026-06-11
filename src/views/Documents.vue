<template>
  <div class="bg-gray-50 min-h-screen py-16">
    <div class="max-w-6xl mx-auto px-6">
      
      <!-- En-tête -->
      <div class="text-center mt-12">
        <h1 class="text-4xl font-bold text-green-700 mt-4">Documents officiels de l’ARTCI</h1>
        <p class="text-black text-lg max-w-2xl mx-auto mt-6">
          Retrouvez ici l’ensemble des textes, rapports et publications de l’Autorité de Régulation des Télécommunications/TIC de Côte d’Ivoire.
        </p>
      </div>

      <!-- Section Catégories -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Lois & Décrets -->
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-orange-500 mt-16">
          <div class="flex items-center gap-3 mt-3">
            <i class="bx bx-book-alt text-3xl text-green-700"></i>
            <h3 class="text-xl font-semibold text-green-700">Lois & Décrets</h3>
          </div>
          <p class="text-gray-600 mb-4 text-sm">
            Textes législatifs et réglementaires encadrant les télécommunications et le numérique en Côte d’Ivoire.
          </p>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2"><i class="bx bx-file text-orange-500"></i> Loi N° 2012-112 du 13 décembre 2012</li>
            <li class="flex items-center gap-2"><i class="bx bx-file text-orange-500"></i> Décret N° 2013-xxx sur les communications électroniques</li>
            <li class="flex items-center gap-2"><i class="bx bx-link-external text-gray-700"></i> 
              <RouterLink to="/documents/lois" class="text-green-600 hover:underline">Voir tous les textes</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Décisions ARTCI -->
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-orange-500 mt-16">
          <div class="flex items-center gap-3 mb-3">
            <i class="bx bx-check-shield text-3xl text-orange-500"></i>
            <h3 class="text-xl font-semibold text-green-700">Décisions & Réglementations</h3>
          </div>
          <p class="text-gray-600 mb-4 text-sm">
            Décisions adoptées par le Conseil de Régulation et les instructions applicables aux opérateurs et prestataires.
          </p>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2"><i class="bx bx-file text-orange-500"></i> Décision N° 2024-013 relative à la portabilité</li>
            <li class="flex items-center gap-2"><i class="bx bx-file text-orange-500"></i> Décision N° 2024-021 sur la cybersécurité</li>
            <li class="flex items-center gap-2"><i class="bx bx-link-external text-gray-700"></i> 
              <RouterLink to="/documents/decisions" class="text-green-600 hover:underline">Voir toutes les décisions</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Rapports & Publications -->
        <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-orange-500 mt-16">
          <div class="flex items-center gap-3 mb-3">
            <i class="bx bx-bar-chart-alt-2 text-3xl text-green-600"></i>
            <h3 class="text-xl font-semibold text-green-700">Rapports & Publications</h3>
          </div>
          <p class="text-gray-600 mb-4 text-sm">
            Études, rapports annuels et publications relatives au développement du secteur.
          </p>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2"><i class="bx bx-file text-orange-500"></i> Rapport annuel 2024</li>
            <li class="flex items-center gap-2"><i class="bx bx-file text-orange-500"></i> Rapport sur la qualité du service 2023</li>
            <li class="flex items-center gap-2"><i class="bx bx-link-external text-gray-700"></i> 
              <RouterLink to="/documents/rapports" class="text-green-600 hover:underline">Voir tous les rapports</RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Section téléchargement -->
      <div class="mt-16 bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-500">
        <div class="flex items-center justify-center gap-3 mb-6">
          <i class="bx bx-download text-3xl text-orange-500"></i>
          <h2 class="text-2xl font-semibold text-green-700">Téléchargements rapides</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <RouterLink to="/downloads/code-telecom" class="flex items-center gap-3 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
            <i class="bx bx-file-pdf text-2xl text-red-600"></i>
            <span>Code des Télécommunications (PDF)</span>
          </RouterLink>
          <RouterLink to="/downloads/rapport-conformite-2023" class="flex items-center gap-3 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
            <i class="bx bx-file-pdf text-2xl text-red-600"></i>
            <span>Rapport de conformité 2023</span>
          </RouterLink>
          <RouterLink to="/downloads/guide-consommateur" class="flex items-center gap-3 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition">
            <i class="bx bx-file-pdf text-2xl text-red-600"></i>
            <span>Guide du consommateur</span>
          </RouterLink>
        </div>
      </div>

      <!-- Bouton retour -->
      <div class="text-center mt-12">
        <RouterLink
          to="/regulation"
          class="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all"
        >
          ← Retour à la Régulation
        </RouterLink>
      </div>

    </div>
  </div>
</template>

<script setup>
// Page statique
</script>

<style scoped>
div {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
