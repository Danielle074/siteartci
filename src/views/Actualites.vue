<template>
  <div class="pb-20 bg-gray-50 text-gray-800">
    <!-- 🌿 Bannière - seulement couleur, sans image -->
    <section
      class="relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white py-20 px-6 text-center"
    >
      <div class="relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold mt-4">
          Actualités & Communiqués
        </h1>
        <p class="max-w-2xl mx-auto text-white/90 mt-6">
          Restez informés des dernières actions, innovations et événements de
          l'ARTCI dans le domaine du numérique et des télécommunications.
        </p>
      </div>
    </section>

    <!-- 🗞 Liste d'actualités -->
    <div class="container mx-auto px-6 mt-16 grid md:grid-cols-3 gap-10">
      <div
        v-for="(article, index) in actualites"
        :key="index"
        class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-orange-500 overflow-hidden"
      >
        <img
          :src="article.image"
          :alt="article.titre"
          class="w-full h-56 object-cover"
        />
        <div class="p-6">
          <div class="flex items-center text-sm text-gray-500 mb-3">
            <i class="bx bx-calendar text-green-600 mr-2"></i>
            {{ article.date }}
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3 hover:text-green-700">
            {{ article.titre }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            {{ article.resume }}
          </p>
          <RouterLink
            :to="article.lien"
            class="inline-flex items-center text-green-700 font-medium hover:underline"
          >
            Lire la suite
            <i class="bx bx-right-arrow-alt text-lg ml-1"></i>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- 📣 Pagination ou bouton -->
    <div class="text-center mt-16">
      <RouterLink
        to="/actualites/archive"
        class="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all"
      >
        Voir toutes les actualités
      </RouterLink>
    </div>

    <!-- 📹 Section Vidéos -->
    <section class="container mx-auto px-6 mt-20">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Vidéos</h2>

      <!-- Grille des vidéos -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(video, idx) in videos"
          :key="idx"
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <div class="relative pb-[56.25%]">
            <iframe
              class="absolute inset-0 w-full h-full rounded-xl"
              :src="video.src"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-900">{{ video.titre }}</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// ✅ Import des images pour les articles (toujours nécessaires)
import infrastructureImage from "@/assets/images/infrastructure.jpg";
import partenariatImage from "@/assets/images/partenariat.jpg";
import telecomsImage from "@/assets/images/telecoms.jpg";

export default {
  name: "Actualites",
  data() {
    return {
      actualites: [
        {
          image: infrastructureImage,
          titre:
            "L'ARTCI lance une campagne nationale sur la protection des données personnelles",
          date: "03 Octobre 2025",
          resume:
            "L'Autorité a démarré une vaste campagne de sensibilisation à travers le pays pour renforcer la culture de la sécurité numérique.",
          lien: "/actualites/details/1",
        },
        {
          image: partenariatImage,
          titre:
            "Partenariat entre l'ARTCI et les universités pour l'innovation numérique",
          date: "25 Septembre 2025",
          resume:
            "Ce partenariat vise à encourager la recherche et le développement dans le secteur des technologies de l'information.",
          lien: "/actualites/details/2",
        },
        {
          image: telecomsImage,
          titre:
            "Renforcement des infrastructures télécoms en zones rurales",
          date: "18 Septembre 2025",
          resume:
            "L'ARTCI supervise la mise en œuvre de nouvelles stations 4G dans plusieurs localités reculées pour améliorer la connectivité nationale.",
          lien: "/actualites/details/3",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          titre: "Présentation du Projet Numérique",
        },
        {
          src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
          titre: "Conférence sur la cybersécurité",
        },
        {
          src: "https://www.youtube.com/embed/abc123def456",
          titre: "Interview du Directeur Général",
        },
      ],
    };
  },
};
</script>

<style scoped>
div {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>