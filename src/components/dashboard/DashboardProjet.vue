<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <!-- HEADER -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-200 text-gray-700 cursor-pointer"
        >
          ☰
        </div>
        <h1 class="text-2xl font-semibold text-gray-800">
          Executive Portfolio Dashboard
        </h1>
      </div>
      <!-- BOUTON AJOUTÉ -->
      <router-link
        to="/dashboard/projet/liste"
        class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
      >
        Voir la liste
      </router-link>
    </div>

    <!-- GRID PRINCIPAL - 2 LIGNES DE CARTES -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <!-- Première ligne de 3 cartes -->
      <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
        <p class="text-gray-500 text-sm">Total Projects</p>
        <p class="text-3xl font-semibold mt-2 text-gray-800">129</p>
      </div>

      <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
        <p class="text-gray-500 text-sm">Overall Completion</p>
        <p class="text-3xl font-semibold mt-2 text-orange-400">52%</p>
      </div>

      <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
        <p class="text-gray-500 text-sm">Total Actual Costs</p>
        <p class="text-3xl font-semibold mt-2 text-gray-800">$423.1K</p>
      </div>

      <!-- Deuxième ligne de 3 cartes -->
      <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
        <p class="text-gray-500 text-sm">Active Programs</p>
        <p class="text-3xl font-semibold mt-2 text-gray-800">34</p>
      </div>

      <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
        <p class="text-gray-500 text-sm">Overdue Projects</p>
        <p class="text-3xl font-semibold mt-2 text-red-500">13</p>
      </div>

      <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
        <p class="text-gray-500 text-sm">Remaining Budget</p>
        <p class="text-3xl font-semibold mt-2 text-gray-800">$264K</p>
      </div>
    </div>

    <!-- PROJECTS BY OWNER -->
    <div class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <p class="font-semibold mb-6 text-gray-800">Projects by Owner</p>

      <!-- CHART avec papier millimétré CORRIGÉ -->
      <div class="relative">
        <!-- Grille de fond AVEC Z-INDEX BAS pour être derrière les barres -->
        <div
          class="absolute inset-0 flex flex-col justify-between h-64 pointer-events-none z-0"
        >
          <!-- Lignes horizontales - 5 lignes pour 0, 80, 160, 240, 320 -->
          <div class="border-t border-gray-300"></div>
          <!-- 320 -->
          <div class="border-t border-gray-300"></div>
          <!-- 240 -->
          <div class="border-t border-gray-300"></div>
          <!-- 160 -->
          <div class="border-t border-gray-300"></div>
          <!-- 80 -->
          <div class="border-t border-gray-300"></div>
          <!-- 0 -->
        </div>

        <!-- Étiquettes Y-axis -->
        <div
          class="absolute left-0 top-0 h-full flex flex-col justify-between py-1 z-10"
        >
          <span class="text-xs text-gray-500">320</span>
          <span class="text-xs text-gray-500">240</span>
          <span class="text-xs text-gray-500">160</span>
          <span class="text-xs text-gray-500">80</span>
          <span class="text-xs text-gray-500">0</span>
        </div>

        <!-- Barres avec hauteurs spécifiques -->
        <div class="flex items-end justify-between h-64 pl-10 relative z-20">
          <!-- AM: sur 240 (h-48 = 240px) -->
          <div class="flex flex-col items-center w-12">
            <div
              class="flex flex-col-reverse w-full h-48 rounded-t overflow-hidden border border-gray-200 shadow-sm"
            >
              <div class="bg-orange-400 h-1/6"></div>
              <div class="bg-orange-600 h-1/6"></div>
              <div class="bg-orange-500 h-1/6"></div>
              <div class="bg-orange-300 h-1/6"></div>
              <div class="bg-orange-200 h-1/6"></div>
              <div class="bg-orange-100 h-1/6"></div>
            </div>
            <span class="mt-2 text-xs text-gray-600">AM</span>
          </div>

          <!-- CH: entre 240 et 320 (h-56 = 280px) -->
          <div class="flex flex-col items-center w-12">
            <div
              class="flex flex-col-reverse w-full h-56 rounded-t overflow-hidden border border-gray-200 shadow-sm"
            >
              <div class="bg-orange-400 h-1/6"></div>
              <div class="bg-orange-600 h-1/6"></div>
              <div class="bg-orange-500 h-1/6"></div>
              <div class="bg-orange-300 h-1/6"></div>
              <div class="bg-orange-200 h-1/6"></div>
              <div class="bg-orange-100 h-1/6"></div>
            </div>
            <span class="mt-2 text-xs text-gray-600">CH</span>
          </div>

          <!-- CR: entre 160 et 240 (h-40 = 200px) -->
          <div class="flex flex-col items-center w-12">
            <div
              class="flex flex-col-reverse w-full h-40 rounded-t overflow-hidden border border-gray-200 shadow-sm"
            >
               <div class="bg-orange-400 h-1/6"></div>
              <div class="bg-orange-600 h-1/6"></div>
              <div class="bg-orange-500 h-1/6"></div>
              <div class="bg-orange-300 h-1/6"></div>
              <div class="bg-orange-200 h-1/6"></div>
              <div class="bg-orange-100 h-1/6"></div>
            </div>
            <span class="mt-2 text-xs text-gray-600">CR</span>
          </div>

          <!-- EK: sur 240 (h-48 = 240px) -->
          <div class="flex flex-col items-center w-12">
            <div
              class="flex flex-col-reverse w-full h-48 rounded-t overflow-hidden border border-gray-200 shadow-sm"
            >
              <div class="bg-orange-400 h-1/6"></div>
              <div class="bg-orange-600 h-1/6"></div>
              <div class="bg-orange-500 h-1/6"></div>
              <div class="bg-orange-300 h-1/6"></div>
              <div class="bg-orange-200 h-1/6"></div>
              <div class="bg-orange-100 h-1/6"></div>
            </div>
            <span class="mt-2 text-xs text-gray-600">EK</span>
          </div>

          <!-- FA: entre 240 et 320 (h-52 = 260px) -->
          <div class="flex flex-col items-center w-12">
            <div
              class="flex flex-col-reverse w-full h-52 rounded-t overflow-hidden border border-gray-200 shadow-sm"
            >
              <div class="bg-orange-400 h-1/6"></div>
              <div class="bg-orange-600 h-1/6"></div>
              <div class="bg-orange-500 h-1/6"></div>
              <div class="bg-orange-300 h-1/6"></div>
              <div class="bg-orange-200 h-1/6"></div>
              <div class="bg-orange-100 h-1/6"></div>
            </div>
            <span class="mt-2 text-xs text-gray-600">FA</span>
          </div>

          <!-- HT: sur 240 (h-48 = 240px) -->
          <div class="flex flex-col items-center w-12">
            <div
              class="flex flex-col-reverse w-full h-48 rounded-t overflow-hidden border border-gray-200 shadow-sm"
            >
               <div class="bg-orange-400 h-1/6"></div>
              <div class="bg-orange-600 h-1/6"></div>
              <div class="bg-orange-500 h-1/6"></div>
              <div class="bg-orange-300 h-1/6"></div>
              <div class="bg-orange-200 h-1/6"></div>
              <div class="bg-orange-100 h-1/6"></div>
            </div>
            <span class="mt-2 text-xs text-gray-600">HT</span>
          </div>

          <!-- HA: presque sur 320 (h-60 = 300px) -->
          <div class="flex flex-col items-center w-12">
            <div
              class="flex flex-col-reverse w-full h-60 rounded-t overflow-hidden border border-gray-200 shadow-sm"
            >
               <div class="bg-orange-400 h-1/6"></div>
              <div class="bg-orange-600 h-1/6"></div>
              <div class="bg-orange-500 h-1/6"></div>
              <div class="bg-orange-300 h-1/6"></div>
              <div class="bg-orange-200 h-1/6"></div>
              <div class="bg-orange-100 h-1/6"></div>
            </div>
            <span class="mt-2 text-xs text-gray-600">HA</span>
          </div>

          <!-- JP: pareillement (h-60 = 300px) -->
          <div class="flex flex-col items-center w-12">
            <div
              class="flex flex-col-reverse w-full h-60 rounded-t overflow-hidden border border-gray-200 shadow-sm"
            >
              <div class="bg-orange-400 h-1/6"></div>
              <div class="bg-orange-600 h-1/6"></div>
              <div class="bg-orange-500 h-1/6"></div>
              <div class="bg-orange-300 h-1/6"></div>
              <div class="bg-orange-200 h-1/6"></div>
              <div class="bg-orange-100 h-1/6"></div>
            </div>
            <span class="mt-2 text-xs text-gray-600">JP</span>
          </div>

          <!-- KN: en bas de 240 (h-44 = 220px) -->
          <div class="flex flex-col items-center w-12">
            <div
              class="flex flex-col-reverse w-full h-44 rounded-t overflow-hidden border border-gray-200 shadow-sm"
            >
             <div class="bg-orange-400 h-1/6"></div>
              <div class="bg-orange-600 h-1/6"></div>
              <div class="bg-orange-500 h-1/6"></div>
              <div class="bg-orange-300 h-1/6"></div>
              <div class="bg-orange-200 h-1/6"></div>
              <div class="bg-orange-100 h-1/6"></div>
            </div>
            <span class="mt-2 text-xs text-gray-600">KN</span>
          </div>

          <!-- KW: dépasse légèrement 240 (h-50 = 250px) -->
          <div class="flex flex-col items-center w-12">
            <div
              class="flex flex-col-reverse w-full h-50 rounded-t overflow-hidden border border-gray-200 shadow-sm"
            >
             <div class="bg-orange-400 h-1/6"></div>
              <div class="bg-orange-600 h-1/6"></div>
              <div class="bg-orange-500 h-1/6"></div>
              <div class="bg-orange-300 h-1/6"></div>
              <div class="bg-orange-200 h-1/6"></div>
              <div class="bg-orange-100 h-1/6"></div>
            </div>
            <span class="mt-2 text-xs text-gray-600">KW</span>
          </div>

          <!-- MR: dépasse un peu 240 (h-52 = 260px) -->
          <div class="flex flex-col items-center w-12">
            <div
              class="flex flex-col-reverse w-full h-52 rounded-t overflow-hidden border border-gray-200 shadow-sm"
            >
            <div class="bg-orange-400 h-1/6"></div>
              <div class="bg-orange-600 h-1/6"></div>
              <div class="bg-orange-500 h-1/6"></div>
              <div class="bg-orange-300 h-1/6"></div>
              <div class="bg-orange-200 h-1/6"></div>
              <div class="bg-orange-100 h-1/6"></div>
            </div>
            <span class="mt-2 text-xs text-gray-600">MR</span>
          </div>
        </div>
      </div>

      <!-- LEGEND -->
      <div class="flex flex-wrap gap-6 mt-6 text-sm">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-orange-400 rounded-full"></span>New
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-orange-600 rounded-full"></span>In research
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-orange-500 rounded-full"></span>In progress
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-orange-300 rounded-full"></span>In review
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-orange-200 rounded-full"></span>Completed
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-orange-100 rounded-full"></span>Canceled
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-orange-700 rounded-full"></span>Backlog
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const owners = [
  "AM",
  "CH",
  "CR",
  "EK",
  "FA",
  "HT",
  "HA",
  "JP",
  "KN",
  "KW",
  "MR",
];
</script>

<style scoped>
/* Correction pour h-50 qui n'existe pas dans Tailwind par défaut */
.h-50 {
  height: 12.5rem; /* 200px */
}
</style>