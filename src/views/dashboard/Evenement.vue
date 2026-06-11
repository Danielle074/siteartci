<template>
  <div class="p-6 bg-gray-100 min-h-screen">
   

 <!-- Barre de recherche + Bouton Créer un Événement -->
<div v-if="!isCreatePage" class="mb-6 flex items-center justify-between gap-4">
  <!-- Barre de recherche -->
  <input
    v-model="searchQuery"
    type="text"
    placeholder="Rechercher un évenement..."
    class="border border-orange-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
  />

  <!-- Bouton Créer un Événement -->
  <router-link
    to="/dashboard/evenement/ajouter"
    class="px-4 py-2 rounded-lg font-semibold bg-orange-600 text-white hover:bg-orange-700"
  >
    Créer un Événement
  </router-link>
</div>



    <!-- Contenu de la sous-route -->
    <router-view
      :events="filteredEvents"
      :perPage="perPage"
      :currentPage="currentPage"
      @add-event="handleAddEvent"
      @edit-event="modifierEvent"
      @delete-event="supprimerEvent"
      @view-participants="voirParticipants"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const perPage = ref(5);
const currentPage = ref(1);
const searchQuery = ref('')

const events = ref([
  { nom: "Forum Digital" },
  { nom: "Conférence Élite" },
  { nom: "Atelier Startups" },
  { nom: "Hackathon Tech" }
]);

const selectedEvent = ref<any>(null);

// 🔹 Vérifie si on est sur la page de création (pour cacher la recherche)
const isCreatePage = computed(() => route.path.includes("ajouter"));

// 🔹 Filtrage automatique des événements selon la recherche
const filteredEvents = computed(() => {
  if (!searchQuery.value) return events.value;
  return events.value.filter(event =>
    event.nom.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// 🔹 Gestion des événements
function handleAddEvent(event: any) {
  events.value.push(event);
  window.location.href = "/dashboard/evenement/liste";
}

function modifierEvent(event: any) {
  alert(`Modifier ${event.nom}`);
}

function supprimerEvent(index: number) {
  if (confirm("Supprimer cet événement ?")) events.value.splice(index, 1);
}

function voirParticipants(event: any) {
  selectedEvent.value = event;
  window.location.href = `/dashboard/evenement/participants/${event.nom}`;
}
</script>
