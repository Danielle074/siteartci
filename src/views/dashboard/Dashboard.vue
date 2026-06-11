<template>
  <div class="min-h-screen bg-gray-100 p-6">


<!-- Pour que le contenu principal ne soit pas caché par le header -->
<div class="h-20"></div>



    <!-- STATISTIQUES -->
    <section class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
        <h2 class="text-sm opacity-80">Revenus</h2>
        <p class="text-4xl font-bold mt-3">$628</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-600">
        <h2 class="text-sm text-gray-500">Partages</h2>
        <p class="text-4xl font-bold mt-3 text-gray-700">2 434</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-600">
        <h2 class="text-sm text-gray-500">Likes</h2>
        <p class="text-4xl font-bold mt-3 text-gray-700">1 259</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-600">
        <h2 class="text-sm text-gray-500">Note</h2>
        <p class="text-4xl font-bold mt-3 text-gray-700">8.5</p>
      </div>
    </section>

    <!-- GRAPHIQUES -->
    <section class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <!-- BAR CHART -->
      <div class=" p-6  xl:col-span-2">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold text-gray-700">Résultats</h2>
          <button
            class="bg-orange-600 text-white px-4 py-1 rounded-full text-sm hover:bg-orange-700"
          >
            Voir plus
          </button>
        </div>
        <canvas ref="barChart"></canvas>
      </div>

      <!-- DONUT CHART -->
      <div class=" p-6 flex flex-col items-center">
        <canvas ref="donutChart" width="200" height="200"></canvas>
        <p class="text-2xl font-bold mt-4 text-orange-600">45%</p>
        <p class="text-gray-600">Taux de satisfaction</p>
      </div>

      <!-- LINE CHART -->
      <div class=" p-6 xl:col-span-2">
        <h2 class="text-lg font-semibold text-gray-700 mb-4">Évolution</h2>
        <canvas ref="lineChart"></canvas>
      </div>

      <!-- LISTE DES VISITEURS -->
      <div class=" p-6 text-center xl:col-span-1">
        <h2 class="text-lg font-semibold text-gray-700 mb-4">Liste des visiteurs</h2>
        <ul class="text-gray-700 space-y-2">
          <li
            v-for="visitor in visitors"
            :key="visitor"
            class="p-2 border-b border-gray-200"
          >
            {{ visitor }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

// Remplacé le calendrier par une liste dynamique
const visitors = ref([
  'Alice Dupont',
  'Jean Martin',
  'Sophie Bernard',
  'Marc Leroy',
  'Claire Petit',
  'Paul Durand'
])

const barChart = ref(null)
const donutChart = ref(null)
const lineChart = ref(null)

onMounted(() => {
  // BAR CHART
  new Chart(barChart.value, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
      datasets: [
        {
          label: '2024',
          data: [20, 30, 40, 25, 50, 35],
          backgroundColor: '#F54A00',
          borderRadius: 8,
        },
        {
          label: '2025',
          data: [15, 25, 35, 45, 40, 55],
          backgroundColor: '#9CA3AF',
          borderRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: '#E5E7EB' } },
      },
    },
  })

  // DONUT CHART
  new Chart(donutChart.value, {
    type: 'doughnut',
    data: {
      labels: ['Satisfait', 'Non satisfait'],
      datasets: [
        {
          data: [45, 55],
          backgroundColor: ['#F54A00', '#9CA3AF'],
          cutout: '70%',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
    },
  })

  // LINE CHART
  new Chart(lineChart.value, {
    type: 'line',
    data: {
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      datasets: [
       {
  label: 'Performance',
  data: [12, 19, 10, 25, 20, 30, 28],
  borderColor: '#F54A00', // orange
  backgroundColor: 'rgba(245, 74, 0, 0.25)', // orange transparent
  fill: true,
  tension: 0.4,
},
{
  label: 'Progression',
  data: [8, 14, 9, 20, 15, 25, 22],
  borderColor: '#F54A00', // orange
  backgroundColor: 'rgba(245, 74, 0, 0.15)', // orange un peu plus clair
  fill: true,
  tension: 0.4,
},

      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: '#E5E7EB' } },
      },
    },
  })
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}
</style>
