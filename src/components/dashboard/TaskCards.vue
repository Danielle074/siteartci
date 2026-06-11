<!-- src/views/dashboard/components/TaskCards.vue -->
<template>
  <div class="min-h-screen bg-gray-100 font-sans p-6">
    <!-- 🧭 En-tête -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
      <div>
        <h2 class="text-3xl font-bold text-gray-800">Tâches</h2>
        <p class="text-gray-500 mt-1">Gestion des tâches du projet</p>
      </div>

      <button
        @click="ajouterTache"
        class="mt-3 sm:mt-0 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
      >
        + Ajouter une nouvelle tâche
      </button>
    </div>

    <!-- 🔍 Barre d’outils -->
    <div class="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 w-full">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher une tâche..."
        class="w-full sm:w-1/2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
      />

      <div class="flex items-center gap-3">
        <select
          v-model="statusFilter"
          class="border px-4 py-2 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Tous les statuts</option>
          <option value="Terminé">Terminé</option>
          <option value="En cours">En cours</option>
          <option value="A faire">A faire</option>
        </select>
        
        <select
          v-model="priorityFilter"
          class="border px-4 py-2 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Toutes les priorités</option>
          <option value="Urgente">Urgente</option>
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
      </div>
    </div>

    <!-- 🧩 Grille des tâches (cartes) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div
        v-for="task in tasksFiltres"
        :key="task.id"
        @click="voirDetails(task.id)"
        class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <!-- Image d'illustration -->
        <img :src="task.image" alt="Image de la tâche" class="h-40 w-full object-cover" />

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span
                :class="getStatusClass(task.status)"
                class="text-xs font-semibold px-3 py-1 rounded-full"
              >
                {{ task.status }}
              </span>
              <span
                :class="getPriorityClass(task.priority)"
                class="text-xs font-semibold px-3 py-1 rounded-full"
              >
                {{ task.priority }}
              </span>
            </div>
            
            <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">{{ task.title }}</h3>
            <p class="text-sm text-gray-500 mb-2">Projet: {{ task.parent }}</p>
            <p class="text-xs text-gray-400">{{ task.startDate }} - {{ task.endDate }}</p>
          </div>

          <div class="flex items-center justify-between text-gray-500 text-sm mt-4 pt-3 border-t border-gray-100">
            <div class="flex items-center gap-2">
              <i class="bx bx-user"></i>
              <span class="text-xs">{{ task.assignedTo }}</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="bx bx-time"></i>
              <span class="text-xs">{{ task.estimatedTime }}h</span>
            </div>
            <div class="flex items-center gap-1">
              <i class="bx bx-chat"></i>
              <span class="text-xs">{{ task.commentsCount || 0 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Message si aucune tâche -->
    <div v-if="tasksFiltres.length === 0" class="text-center py-12">
      <i class="bx bx-task text-6xl text-gray-300 mb-4"></i>
      <p class="text-gray-500">Aucune tâche trouvée</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

// Import des images locales pour les tâches
import taskImage1 from '@/assets/images/identite.jpg'
import taskImage2 from '@/assets/images/identite.jpg'
import taskImage3 from '@/assets/images/identite.jpg'
import taskImage4 from '@/assets/images/identite.jpg'
import defaultImage from '@/assets/images/identite.jpg' // Image par défaut en cas d'erreur

const router = useRouter();
const searchQuery = ref("");
const statusFilter = ref("");
const priorityFilter = ref("");

const tasks = ref([
  {
    id: 1,
    creationDate: '23/10/2025',
    parent: 'API List',
    title: 'Update liste',
    assignedTo: 'Employee Admin',
    priority: 'Urgente',
    startDate: '23/10/2025',
    endDate: '23/10/2025',
    estimatedTime: 4,
    actualTime: 15,
    status: 'Terminé',
    createdBy: 'Employee Admin',
    commentsCount: 3,
    image: taskImage1,
  },
  {
    id: 2,
    creationDate: '23/10/2025',
    parent: 'Accune',
    title: 'Edit List',
    assignedTo: 'Employee Admin',
    priority: 'Urgente',
    startDate: '23/10/2025',
    endDate: '23/10/2025',
    estimatedTime: 1,
    actualTime: 1,
    status: 'Terminé',
    createdBy: 'Employee Admin',
    commentsCount: 1,
    image: taskImage2,
  },
  {
    id: 3,
    creationDate: '23/10/2025',
    parent: 'Accune',
    title: 'API List',
    assignedTo: 'Employee Admin',
    priority: 'Urgente',
    startDate: '23/10/2025',
    endDate: '23/10/2025',
    estimatedTime: 0,
    actualTime: 0,
    status: 'A faire',
    createdBy: 'Employee Admin',
    commentsCount: 0,
    image: taskImage3,
  },
  {
    id: 4,
    creationDate: '17/10/2025',
    parent: 'Accune',
    title: 'Api create',
    assignedTo: 'Employee Admin',
    priority: 'Urgente',
    startDate: '17/10/2025',
    endDate: '17/10/2025',
    estimatedTime: 2,
    actualTime: 0,
    status: 'A faire',
    createdBy: 'Employee Admin',
    commentsCount: 0,
    image: taskImage4,
  },
]);

const tasksFiltres = computed(() => {
  let filtered = tasks.value;

  // Recherche textuelle
  if (searchQuery.value) {
    filtered = filtered.filter(task =>
      task.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      task.parent.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      task.assignedTo.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // Filtre par statut
  if (statusFilter.value) {
    filtered = filtered.filter(task => task.status === statusFilter.value);
  }

  // Filtre par priorité
  if (priorityFilter.value) {
    filtered = filtered.filter(task => task.priority === priorityFilter.value);
  }

  return filtered;
});

const getStatusClass = (status) => {
  switch (status) {
    case "Terminé":
      return "bg-green-100 text-green-700";
    case "En cours":
      return "bg-yellow-100 text-yellow-700";
    case "A faire":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getPriorityClass = (priority) => {
  switch (priority) {
    case "Urgente":
      return "bg-red-100 text-red-700";
    case "Haute":
      return "bg-orange-100 text-orange-700";
    case "Moyenne":
      return "bg-yellow-100 text-yellow-700";
    case "Basse":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const voirDetails = (taskId) => {
  router.push({ name: "EditTask", params: { id: taskId } });
};

const ajouterTache = () => {
  router.push({ name: "AddTask" });
};

// Gestionnaire d'erreur d'image
const handleImageError = (event) => {
  event.target.src = defaultImage;
};
</script>

<style scoped>
/* Hover effet pour les cartes */
.grid > div {
  transition: all 0.3s ease;
}

/* Pour limiter le texte à 1 ligne */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
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