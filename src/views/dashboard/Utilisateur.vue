<template>
  <div class="p-6 bg-gray-100 min-h-screen">
   

    <!-- 📦 Contenu dynamique -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// 🧭 Titre dynamique selon la page
const pageTitle = computed(() => {
  if (route.name === "dashboard/AddUser") return "➕ Ajouter un Utilisateur";
  if (route.name === "UserList") return "👥 Liste des Utilisateurs";
  return "👤 Gestion des Utilisateurs";
});
</script>
