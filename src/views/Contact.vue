<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- 🌿 Bannière -->
    <section
      class="relative bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white py-20 px-6 text-center"
    >
      <div
        class="absolute inset-0 opacity-10 bg-[url('/public/bg-pattern.png')] bg-cover"
      ></div>
      <div class="relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold mt-6">Contactez-nous</h1>
        <p class="max-w-2xl mx-auto text-white/90 mt-8">
          Vous avez des questions, des suggestions ou souhaitez en savoir plus
          sur nos activités ? Envoyez-nous un message et nous vous répondrons
          rapidement.
        </p>
      </div>
    </section>

    <!-- 📨 Formulaire & Infos -->
    <section class="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
      <!-- Formulaire de contact -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">
          Envoyez-nous un message
        </h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1" for="name">Nom</label>
            <input
              v-model="form.nom"
              type="text"
              id="name"
              placeholder="Votre nom"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1" for="email"
              >Email</label
            >
            <input
              v-model="form.email"
              type="email"
              id="email"
              placeholder="Votre email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1" for="subject"
              >Sujet</label
            >
            <input
              v-model="form.sujet"
              type="text"
              id="subject"
              placeholder="Sujet"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1" for="message"
              >Message</label
            >
            <textarea
              v-model="form.message"
              id="message"
              rows="5"
              placeholder="Votre message"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-orange-500 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Envoyer
          </button>
        </form>
      </div>

      <!-- Informations de contact -->
      <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">
          Nos coordonnées
        </h2>
        <div class="space-y-3">
          <p class="flex items-center text-gray-700">
            <i class="bx bx-phone mr-2 text-green-600 text-lg"></i> Téléphone :
            (225) 27 00 00 00 00
          </p>
          <p class="flex items-center text-gray-700">
            <i class="bx bx-envelope mr-2 text-green-600 text-lg"></i> Email :
            contact@artci.ci
          </p>
          <p class="flex items-center text-gray-700">
            <i class="bx bx-map mr-2 text-green-600 text-lg"></i> Abidjan, Côte
            d’Ivoire
          </p>

          <!-- 🔗 Bouton Rendez-vous -->
          <a
            href="http://localhost:5173/rendezvous"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block mt-4 bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Prendre rendez-vous
          </a>
        </div>

        <!-- Carte Google Maps -->
        <div class="mt-6 rounded-lg overflow-hidden shadow-lg">
          <iframe
            class="w-full h-64 md:h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.123456789!2d-4.012345678!3d5.3456789123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb3bc123456!2sARTCI!5e0!3m2!1sfr!2sci!4v1600000000000!5m2!1sfr!2sci"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          >
          </iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: { nom: "", email: "", sujet: "", message: "" },
    };
  },
  methods: {
    submitForm() {
      alert(`Merci ${this.form.nom}, votre message a été envoyé !`);
      this.form = { nom: "", email: "", sujet: "", message: "" };
    },
  },
};
</script>

<style scoped>
section {
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
