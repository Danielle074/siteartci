<template>
  <div class="bg-gray-50 text-gray-800 pb-24">
    <!-- Bannière -->
    <section class="relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-gray-900 py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mt-4 text-white">Régulation des Télécommunications</h1>
        <p class="max-w-3xl mx-auto text-white mt-4 leading-relaxed text-lg">
          L’ARTCI veille à un secteur des télécommunications sûr, concurrentiel et accessible à tous.
        </p>
        <div class="mt-8 flex justify-center gap-4">
          <RouterLink to="/contact" class="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800">
            Nous contacter
          </RouterLink>
          <RouterLink to="/documents" class="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 border border-orange-200">
            Accéder aux documents
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Intro + Quick facts -->
    <section class="container mx-auto px-6 mt-12 grid lg:grid-cols-3 gap-8 items-start">
      <div class="lg:col-span-2 bg-white rounded-2xl p-8 shadow-md">
        <h2 class="text-2xl font-bold mb-3">Mission & portée</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          L’ARTCI définit et fait appliquer les règles du secteur des télécommunications pour garantir la qualité,
          l’accès équitable, la concurrence loyale et la protection des droits des usagers. Nous coordonnons également
          la gestion du spectre radioélectrique et supervisons les opérateurs.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Cadre réglementaire</h3>
            <p class="text-gray-600 text-sm">Lois nationales, décisions d’application, et normes internationales adaptées au contexte ivoirien.</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Protection du consommateur</h3>
            <p class="text-gray-600 text-sm">Gestion des litiges, qualité de service, prix transparents et sécurité des données.</p>
          </div>
        </div>
      </div>

      <aside class="bg-white rounded-2xl p-6 shadow-md">
        <h4 class="text-lg font-semibold mb-4">Faits rapides</h4>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start gap-3"><i class="bx bx-radio-circle text-orange-500 text-xl mt-1"></i><span><strong>Gestion du spectre :</strong> Attribution, coordination et surveillance</span></li>
          <li class="flex items-start gap-3"><i class="bx bx-license text-green-600 text-xl mt-1"></i><span><strong>Licences :</strong> Attribution et renouvellement</span></li>
          <li class="flex items-start gap-3"><i class="bx bx-shield text-gray-800 text-xl mt-1"></i><span><strong>Conformité :</strong> Contrôles et sanctions</span></li>
        </ul>
      </aside>
    </section>

    <!-- Sections principales -->
    <section class="container mx-auto px-6 mt-12 space-y-12">
      <!-- Cadre légal -->
      <div class="bg-white rounded-2xl p-8 shadow-md">
        <h3 class="text-2xl font-bold mb-4">Cadre légal et normes</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Le cadre réglementaire combine la législation nationale et les recommandations internationales.
          L’ARTCI publie les décisions et directives qui encadrent l'exploitation, la qualité de service,
          la protection des données et la concurrence.
        </p>
        <div class="grid md:grid-cols-3 gap-4 mt-4">
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold">Lois & Décrets</h4>
            <p class="text-sm text-gray-600">Textes fondateurs et textes d'application.</p>
          </div>
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold">Décisions ARTCI</h4>
            <p class="text-sm text-gray-600">Mesures opérationnelles, règles tarifaires et obligations des opérateurs.</p>
          </div>
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold">Normes techniques</h4>
            <p class="text-sm text-gray-600">Interopérabilité, sécurité et qualité.</p>
          </div>
        </div>
      </div>

      <!-- Gestion du spectre -->
      <div class="bg-white rounded-2xl p-8 shadow-md">
        <h3 class="text-2xl font-bold mb-4">Gestion du spectre</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          La gestion efficace du spectre est essentielle pour assurer une connectivité fiable. L’ARTCI planifie,
          coordonne et attribue des bandes en veillant à l’usage optimal et à la prévention des interférences.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="border rounded-lg p-4">
            <h4 class="font-semibold">Attribution</h4>
            <p class="text-sm text-gray-600">Procédures d'appel d'offres et licences d'utilisation.</p>
          </div>
          <div class="border rounded-lg p-4">
            <h4 class="font-semibold">Surveillance</h4>
            <p class="text-sm text-gray-600">Stations de contrôle et mesures pour détecter les interférences.</p>
          </div>
        </div>
      </div>

      <!-- Licences & Marché -->
      <div class="bg-white rounded-2xl p-8 shadow-md">
        <h3 class="text-2xl font-bold mb-4">Licences, marché & concurrence</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          L’ARTCI gère les régimes de licences (opérateurs, fournisseurs de services) et veille à un marché compétitif
          par des règles anti-abus et la promotion de l'interopérabilité.
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-2 mt-4">
          <li>Conditions d’entrée et exigences de sécurité réseau</li>
          <li>Obligations en matière de couverture et qualité</li>
          <li>Mécanismes de résolution des conflits entre opérateurs</li>
        </ul>
      </div>

      <!-- Protection des consommateurs -->
      <div class="bg-white rounded-2xl p-8 shadow-md">
        <h3 class="text-2xl font-bold mb-4">Protection des consommateurs</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Priorité à la transparence tarifaire, la qualité de service et le traitement des réclamations. L’ARTCI assure
          la médiation entre usagers et opérateurs et publie régulièrement des indicateurs de performance.
        </p>

        <div class="grid md:grid-cols-3 gap-4 mt-4">
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold">Qualité de service</h4>
            <p class="text-sm text-gray-600">Mesures, seuils et sanctions.</p>
          </div>
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold">Réclamations</h4>
            <p class="text-sm text-gray-600">Procédure en ligne et suivi.</p>
          </div>
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold">Protection des données</h4>
            <p class="text-sm text-gray-600">Confidentialité et bonnes pratiques.</p>
          </div>
        </div>
      </div>

      <!-- Surveillance & sanctions -->
      <div class="bg-white rounded-2xl p-8 shadow-md">
        <h3 class="text-2xl font-bold mb-4">Surveillance & enforcement</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Contrôles réguliers, inspections radio et audits techniques. Les manquements sont sanctionnés selon la gravité et
          peuvent aller des avertissements aux amendes.
        </p>
        <div class="flex gap-4 mt-4">
          <RouterLink to="/reports/inspections" class="px-4 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600">
            Rapports d'inspection
          </RouterLink>
          <RouterLink to="/decisions" class="px-4 py-2 rounded-lg bg-white text-orange-600 border border-orange-200 font-semibold hover:bg-gray-50">
            Décisions & sanctions
          </RouterLink>
        </div>
      </div>

      <!-- Rapports & ressources -->
      <div class="bg-white rounded-2xl p-8 shadow-md">
        <h3 class="text-2xl font-bold mb-4">Rapports & Ressources</h3>
        <p class="text-gray-700 mb-4">Consultez les études, statistiques et rapports annuels publiés par l’ARTCI.</p>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start gap-3"><i class="bx bx-file text-orange-500 text-xl mt-1"></i><span>Rapport annuel</span></li>
          <li class="flex items-start gap-3"><i class="bx bx-bar-chart-alt-2 text-green-600 text-xl mt-1"></i><span>Indices de qualité de service</span></li>
          <li class="flex items-start gap-3"><i class="bx bx-globe text-gray-800 text-xl mt-1"></i><span>Données ouvertes (open data)</span></li>
        </ul>
      </div>

      <!-- Contact opérationnel -->
      <div class="bg-white rounded-2xl p-8 shadow-md">
        <h3 class="text-2xl font-bold mb-4">Contact opérationnel</h3>
        <p class="text-gray-700 mb-4">Pour signaler un incident, une interférence ou déposer une réclamation :</p>
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <i class="bx bx-phone text-orange-500 text-2xl"></i>
            <div>
              <div class="text-gray-900 font-semibold">Service technique</div>
              <div class="text-sm text-gray-600">Tél : (225) 27 00 00 00 00</div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <i class="bx bx-envelope text-green-600 text-2xl"></i>
            <div>
              <div class="text-gray-900 font-semibold">Email</div>
              <div class="text-sm text-gray-600">contact@artci.ci</div>
            </div>
          </div>
          <RouterLink to="/signalement" class="inline-block bg-green-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-800">
            Signaler un incident
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Telecoms",
};
</script>

<style scoped>
/* légers ajustements pour harmonie */
section h1, section h2, section h3 { letter-spacing: -0.2px; }
.bg-gradient-to-r { background-size: 200% 100%; }

/* petites animations */
.container > * { animation: fadeUp .45s ease-out both; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
