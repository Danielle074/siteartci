<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 pb-20">
    <!-- 🖼 Image de l'article -->
    <div class="relative">
      <img
        :src="article.image"
        alt="Image article"
        class="w-full h-96 object-cover"
      />
      <div class="absolute inset-0 bg-black/40 flex flex-col justify-end px-6 md:px-16 pb-10">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">
          {{ article.titre }}
        </h1>
        <p class="text-gray-200 flex items-center">
          <i class="bx bx-calendar text-orange-400 mr-2"></i>
          {{ article.date }}
        </p>
      </div>
    </div>

    <!-- 📰 Contenu -->
    <div class="container mx-auto px-6 md:px-16 mt-10">
      <p class="text-lg leading-relaxed text-gray-700 mb-6">
        {{ article.contenu }}
      </p>

      <RouterLink
        to="/actualites"
        class="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all"
      >
        ← Retour aux actualités
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActualiteDetail",
  data() {
    return {
      articles: [
        {
          id: 1,
          image: "/public/infrastructure.jpg",
          titre:
            "L'ARTCI lance une campagne nationale sur la protection des données personnelles",
          date: "03 Octobre 2025",
          contenu: `
            L’Autorité de Régulation des Télécommunications de Côte d’Ivoire (ARTCI)
            a lancé une grande campagne nationale pour sensibiliser les citoyens
            sur la protection de leurs données personnelles.
            
            Cette initiative vise à renforcer la culture de la confidentialité numérique
            et à encourager les bonnes pratiques dans l’utilisation des technologies.
            Des ateliers et conférences sont organisés dans plusieurs villes du pays,
            avec la participation d’experts en cybersécurité et en droit du numérique.
          `,
        },
        {
          id: 2,
          image: "/public/partenariat.jpg",
          titre:
            "Partenariat entre l'ARTCI et les universités pour l'innovation numérique",
          date: "25 Septembre 2025",
          contenu: `
            Ce partenariat stratégique entre l'ARTCI et les principales universités
            ivoiriennes permettra de développer la recherche appliquée
            dans le domaine du numérique.
            
            Les étudiants bénéficieront de programmes de stages, de laboratoires
            d’innovation et de projets encadrés autour de la cybersécurité,
            de la data science et de la connectivité.
          `,
        },
        {
          id: 3,
          image: "/public/telecoms.jpg",
          titre:
            "Renforcement des infrastructures télécoms en zones rurales",
          date: "18 Septembre 2025",
          contenu: `
            L’ARTCI supervise actuellement le déploiement de plusieurs stations 4G
            dans les zones rurales afin d’améliorer la couverture réseau nationale.
            Ce projet, soutenu par le gouvernement et des partenaires techniques,
            vise à réduire la fracture numérique et à offrir à tous les Ivoiriens
            un accès équitable aux services numériques.
          `,
        },
      ],
      article: {},
    };
  },
  mounted() {
    const id = parseInt(this.$route.params.id);
    this.article = this.articles.find((a) => a.id === id);
  },
};
</script>
