<!-- src/views/dashboard/components/ProjectCards.vue -->
<template>
  <div class="min-h-screen bg-gray-100 font-sans p-6">
    <!-- 🧭 En-tête -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
      <h2 class="text-3xl font-bold text-gray-800">Projets</h2>

      <button
        @click="ajouterProjet"
        class="mt-3 sm:mt-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
      >
        + Ajouter un nouveau projet
      </button>
    </div>

    <!-- 🔍 Barre d’outils -->
    <div class="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 w-full">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher un projet..."
        class="w-full sm:w-1/2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
      />

      <div class="flex items-center gap-3">
        <button class="border px-4 py-2 rounded-xl text-gray-600 hover:text-orange-500 flex items-center gap-2 transition">
          <i class="fas fa-filter"></i> Filtre
        </button>
        <button class="border px-4 py-2 rounded-xl text-gray-600 hover:text-orange-500 transition">
          Trier par
        </button>
      </div>
    </div>

    <!-- 🧩 Grille des projets (cartes) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div
        v-for="projet in projetsFiltres"
        :key="projet.id"
        @click="voirDetails(projet.id)"
        class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <img :src="projet.image" alt="Image du projet" class="h-48 w-full object-cover" />

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ projet.title }}</h3>
            <p class="text-sm text-gray-500 mb-3">{{ projet.startDate }} - {{ projet.endDate }}</p>
            <span
              :class="getStatusClass(projet.status)"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-3"
            >
              {{ projet.status }}
            </span>
          </div>

          <div class="flex items-center justify-between text-gray-500 text-sm mt-auto">
            <div class="flex items-center gap-4">
              <span><i class="far fa-calendar"></i> {{ projet.company }}</span>
              <span><i class="far fa-chart-bar"></i> {{ projet.progress }}</span>
            </div>

            <div class="flex items-center gap-1">
              <span class="text-xs">{{ projet.createdBy }}</span>
              <div class="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">
                {{ projet.createdBy.charAt(0) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

// Import des images locales
import tamareImage from '@/assets/images/identite.jpg'
import conseilImage from '@/assets/images/identite.jpg'
import apolloImage from '@/assets/images/identite.jpg'
import bourseImage from '@/assets/images/identite.jpg'
import secureImage from '@/assets/images/identite.jpg'

// Image par défaut si une image est manquante
import defaultImage from '@/assets/images/identite.jpg'

const router = useRouter();
const searchQuery = ref("");

const projets = ref([
  {
    id: 1,
    creationDate: "27/10/2025",
    company: "SCB",
    title: "TAMARES",
    startDate: "27/10/2025",
    endDate: "31/12/2025",
    status: "Planifié",
    progress: "0%",
    createdBy: "Master Admin",
    image: tamareImage, // Image importée
  },
  {
    id: 2,
    creationDate: "23/10/2025",
    company: "SCB",
    title: "Conseil Chekk",
    startDate: "03/11/2025",
    endDate: "21/11/2025",
    status: "Planifié",
    progress: "0%",
    createdBy: "Master Admin",
    image: conseilImage, // Image importée
  },
  {
    id: 3,
    creationDate: "23/10/2025",
    company: "SCB",
    title: "Apollo",
    startDate: "23/10/2025",
    endDate: "31/10/2025",
    status: "Planifié",
    progress: "0%",
    createdBy: "Master Admin",
    image: apolloImage, // Image importée
  },
  {
    id: 4,
    creationDate: "23/10/2025",
    company: "SCB",
    title: "BoursePay",
    startDate: "01/10/2025",
    endDate: "17/10/2025",
    status: "Terminé",
    progress: "20%",
    createdBy: "Employee Admin",
    image: bourseImage, // Image importée
  },
  {
    id: 5,
    creationDate: "17/10/2025",
    company: "SCB",
    title: "SecureCheck",
    startDate: "17/10/2025",
    endDate: "17/10/2025",
    status: "En cours",
    progress: "20%",
    createdBy: "Employee Admin",
    image: secureImage, // Image importée
  },
]);

const projetsFiltres = computed(() => {
  if (!searchQuery.value) return projets.value;
  return projets.value.filter(
    (projet) =>
      projet.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      projet.company.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      projet.status.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const getStatusClass = (status) => {
  switch (status) {
    case "Planifié":
      return "bg-blue-100 text-blue-800";
    case "En cours":
      return "bg-yellow-100 text-yellow-800";
    case "Terminé":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// Gestionnaire d'erreur d'image
const handleImageError = (event) => {
  event.target.src = defaultImage;
};

const voirDetails = (projectId) => {
  router.push({ name: "EditProject", params: { id: projectId } });
};

const ajouterProjet = () => {
  router.push({ name: "EditProject", params: { id: "nouveau" } });
};
</script>

<style scoped>
/* Hover effet pour les cartes */
.grid > div {
  transition: all 0.3s ease;
}

/* 🔹 Cacher les scrollbars */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}

* {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

*::-webkit-scrollbar {
  display: none;
}
</style>