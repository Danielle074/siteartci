<template>
  <div class="min-h-screen bg-gray-50 p-6 overflow-hidden">
    <div class="max-w-4xl mx-auto">
      <!-- En-tête -->
      <div class="mb-12">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <!-- Barre de recherche -->
          <div class="relative w-full md:w-1/3 mt-5">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search"
              class="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <i class="bx bx-search absolute left-3 top-2.5 text-gray-400 text-lg"></i>
          </div>
        </div>
      </div>

      <!-- Tableau des demandes -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-orange-600 text-white">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">Visitor Email</th>
                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">Contact</th>
                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">Image</th>
                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">Host</th>
                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">Reason</th>
                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">Status</th>
                <th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">Date de création</th>

                <!-- COLONNE VALIDATION MODIFIÉE -->
                <th class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider whitespace-nowrap">Validation</th>

                <th class="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider whitespace-nowrap">Supprimer</th>
              </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                v-for="(request, index) in filteredRequests"
                :key="request.id"
                :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                class="hover:bg-gray-100"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ request.email }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ request.contact }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <img :src="request.image" class="h-10 w-10 rounded-full object-cover" />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ request.host }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ request.reason }}</td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="{
                      'text-green-600 font-semibold': request.status === 'Approved',
                      'text-yellow-600 font-semibold': request.status === 'Pending',
                      'text-red-600 font-semibold': request.status === 'Rejected'
                    }"
                  >
                    {{ request.status }}
                  </span>
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ request.createdAt }}</td>

                <!-- COLONNE VALIDATION - UNE SEULE ICÔNE -->
                <td class="px-6 py-4 whitespace-nowrap text-sm text-center">
                  <!-- En attente - Icône pour ouvrir formulaire -->
                  <button
                    v-if="request.status === 'Pending'"
                    @click="openValidationForm(request)"
                    class="text-gray-500 hover:text-orange-600 transition-colors p-1 rounded"
                    title="Valider la demande"
                  >
                    <i class="bx bx-check-circle text-2xl"></i>
                  </button>

                  <!-- Approuvé - Icône verte -->
                  <div
                    v-else-if="request.status === 'Approved'"
                    class="text-green-600"
                    title="Déjà approuvé"
                  >
                    <i class="bx bx-check-circle text-2xl"></i>
                  </div>

                  <!-- Refusé - Icône rouge -->
                  <div
                    v-else-if="request.status === 'Rejected'"
                    class="text-red-600"
                    title="Demande refusée"
                  >
                    <i class="bx bx-x-circle text-2xl"></i>
                  </div>
                </td>

                <!-- SUPPRIMER -->
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div class="flex justify-center">
                    <button
                      @click="removeRequest(request.id)"
                      class="text-red-600 hover:text-red-800 transition-colors p-1 rounded"
                      title="Supprimer"
                    >
                      <i class="bx bx-trash text-lg"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- MODAL FORMULAIRE DE VALIDATION - PLUS GRAND -->
    <div
      v-if="showValidationForm"
      class="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4 overflow-y-auto"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto my-8">
        <!-- En-tête avec bouton retour -->
        <div class="bg-orange-600 text-white p-6 flex justify-between items-center sticky top-0 z-10">
          <button
            @click="showValidationForm = false"
            class="flex items-center text-white hover:text-gray-200 transition-colors"
          >
            <i class="bx bx-arrow-back text-xl mr-2"></i> Retour
          </button>
          <h2 class="text-xl font-semibold">Formulaire de Validation</h2>
          <div class="w-10"></div> <!-- Espaceur pour centrer le titre -->
        </div>

        <!-- Contenu du formulaire -->
        <div class="p-8">
          <!-- Grille des informations -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <!-- Colonne gauche -->
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">Nom :</h3>
                <p class="text-lg font-medium">{{ validationFormData.nom || "aussi ssss" }}</p>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">N° Pièce d'identité :</h3>
                <p class="text-lg font-mono">{{ validationFormData.pieceIdentite || "1344555" }}</p>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">Adresse :</h3>
                <p class="text-lg">{{ validationFormData.adresse || "1050 Connecticut Ave NW, Washington" }}</p>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">Ville :</h3>
                <p class="text-lg">{{ validationFormData.ville || "cocoservice" }}</p>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">Pays :</h3>
                <p class="text-lg">{{ validationFormData.pays || "Austria" }}</p>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">Région / État :</h3>
                <p class="text-lg">{{ validationFormData.region || "erterte" }}</p>
              </div>
            </div>

            <!-- Colonne droite -->
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">Code postal :</h3>
                <p class="text-lg">{{ validationFormData.codePostal || "20036" }}</p>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">Employeur :</h3>
                <p class="text-lg">{{ validationFormData.employeur || "CGDS" }}</p>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">Raison de la visite :</h3>
                <p class="text-lg text-orange-600 font-semibold">{{ validationFormData.raison || "Visite" }}</p>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">Date de la demande :</h3>
                <p class="text-lg font-semibold">{{ validationFormData.dateDemande || "05/12/2025" }}</p>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">Heure de la demande :</h3>
                <p class="text-lg">{{ validationFormData.heure || "22:31" }}</p>
              </div>

              <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-500 mb-2">Email :</h3>
                <p class="text-lg text-orange-600">{{ validationFormData.email || "achidanielle@gmail.com" }}</p>
              </div>
            </div>
          </div>

          <!-- Informations supplémentaires sur une ligne -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 class="text-sm font-semibold text-gray-500 mb-2">Contact :</h3>
              <p class="text-lg font-mono">{{ validationFormData.contact || "0504044770" }}</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 class="text-sm font-semibold text-gray-500 mb-2">Médecin :</h3>
              <p class="text-lg font-bold text-orange-600">{{ validationFormData.medecin || "Admin Superviseur" }}</p>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 class="text-sm font-semibold text-gray-500 mb-2">Statut :</h3>
              <span class="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                En attente de validation
              </span>
            </div>
          </div>

          <!-- Section Documents - Les 3 cartes -->
          <div class="mb-10">
            <h3 class="text-lg font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-200">Documents</h3>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Carte d'identité -->
              <div class="bg-linear-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-sm border border-orange-200">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <i class="bx bx-id-card text-white text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">Carte d'identité</h4>
                    <p class="text-sm text-gray-600">Document officiel</p>
                  </div>
                </div>
                <div class="bg-white p-4 rounded-lg border border-orange-300 mb-4">
                  <p class="text-center text-gray-700 font-mono">{{ validationFormData.pieceIdentite || "1344555" }}</p>
                </div>
                <button
                  @click="viewDocument('identity')"
                  class="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-medium flex items-center justify-center transition-colors"
                >
                  <i class="bx bx-show mr-2"></i> Voir le document
                </button>
              </div>

              <!-- Carte d'assurance -->
              <div class="bg-linear-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-sm border border-orange-200">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <i class="bx bx-health text-white text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">Carte d'assurance</h4>
                    <p class="text-sm text-gray-600">Couverture santé</p>
                  </div>
                </div>
                <div class="bg-white p-4 rounded-lg border border-orange-300 mb-4">
                  <p class="text-center text-gray-700 font-mono">AS-7890-4567</p>
                </div>
                <button
                  @click="viewDocument('insurance')"
                  class="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-medium flex items-center justify-center transition-colors"
                >
                  <i class="bx bx-show mr-2"></i> Voir le document
                </button>
              </div>

              <!-- Carte CMU -->
              <div class="bg-linear-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-sm border border-orange-200">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <i class="bx bx-card text-white text-2xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">Carte CMU</h4>
                    <p class="text-sm text-gray-600">Couverture maladie</p>
                  </div>
                </div>
                <div class="bg-white p-4 rounded-lg border border-orange-300 mb-4">
                  <p class="text-center text-gray-700 font-mono">CMU-1234-5678</p>
                </div>
                <button
                  @click="viewDocument('cmu')"
                  class="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-medium flex items-center justify-center transition-colors"
                >
                  <i class="bx bx-show mr-2"></i> Voir le document
                </button>
              </div>
            </div>
          </div>

          <!-- Boutons d'action -->
          <div class="flex justify-center space-x-8 pt-6 border-t border-gray-200">
            <button
              @click="cancelValidation"
              class="bg-gray-400 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-500 transition-colors flex items-center shadow-lg"
            >
              <i class="bx bx-x text-2xl mr-3"></i> Annuler
            </button>
            <button
              @click="approveAndShowQR"
              class="bg-orange-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-700 transition-colors flex items-center shadow-lg hover:shadow-xl"
            >
              <i class="bx bx-check text-2xl mr-3"></i> Approuver
            </button>
          </div>

          <!-- Bouton pour refuser directement -->
          <div class="flex justify-center mt-6">
            <button
              @click="rejectFromForm"
              class="text-red-600 hover:text-red-800 transition-colors flex items-center text-sm"
            >
              <i class="bx bx-x-circle mr-2"></i> Refuser cette demande
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Page d'attente (maintenant déclenchée après "Approuver") -->
    <div
      v-if="isConfirming"
      class="fixed inset-0 flex flex-col items-center justify-center bg-gray-50 text-center z-50"
    >
      <h2 class="text-2xl font-semibold text-orange-600 mb-6">
        En attente de confirmation<span class="animate-pulse">...</span>
      </h2>
      <div class="flex space-x-6">
        <button
          @click="generateQrCard(selectedRequest)"
          class="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
        >
          Valider
        </button>
        <button
          @click="cancelConfirmation"
          class="bg-gray-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-500 transition-colors"
        >
          Annuler
        </button>
      </div>
    </div>

    <!-- Affichage de la carte stylée (QR Code) -->
    <div
      v-if="showQrCard"
      class="fixed inset-0 flex flex-col items-center min-h-screen bg-white z-50 overflow-y-auto pt-1"
    >
      <!-- Bouton Retour en haut -->
      <div class="self-start ml-6 mb-4">
        <button
          @click="showQrCard = false"
          class="flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
        >
          <i class="bx bx-arrow-back text-xl mr-2"></i> Retour
        </button>
      </div>

      <!-- Carte principale -->
      <div class="relative bg-orange-600 text-white w-96 rounded-3xl shadow-lg overflow-hidden pt-2">
        <!-- Logo -->
        <div class="flex justify-center">
          <div class="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-orange-600 -mt-14">
            <img :src="logo" alt="Logo" class="w-20 h-20 object-contain mt-6" />
          </div>
        </div>

        <!-- Corps -->
        <div class="relative mb-32 px-6">
          <div class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-r-full w-6 h-6"></div>
          <div class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-l-full w-6 h-6"></div>

          <!-- QR Code -->
          <div class="flex justify-center mt-4">
            <div class="bg-white p-4 rounded-xl">
              <img :src="qrCodeUrl" alt="QR Code" class="w-32 h-32" />
            </div>
          </div>

          <div class="flex justify-center mb-1">
            <div class="text-white font-medium">Ticket #{{ selectedRequest.id }}</div>
          </div>
          <div class="border-t-2 border-dashed border-white w-3/4 mx-auto mb-3"></div>

          <div class="grid grid-cols-2 gap-3 mb-6 text-sm">
            <div class="flex items-start space-x-2">
              <i class="bx bx-calendar text-xl"></i>
              <div>
                <h3 class="font-bold">Event</h3>
                <p>{{ selectedRequest.reason }}</p>
                <p class="text-xs">By {{ selectedRequest.host }}</p>
              </div>
            </div>
            <div class="flex items-start space-x-2">
              <i class="bx bx-envelope text-xl"></i>
              <div>
                <h3 class="font-bold">Email</h3>
                <p class="text-xs">{{ selectedRequest.email }}</p>
              </div>
            </div>
            <div class="flex items-start space-x-2">
              <i class="bx bx-phone text-xl"></i>
              <div>
                <h3 class="font-bold">Contact</h3>
                <p class="text-xs">{{ selectedRequest.contact }}</p>
              </div>
            </div>
            <div class="flex items-start space-x-2">
              <i class="bx bx-time text-xl"></i>
              <div>
                <h3 class="font-bold">Date</h3>
                <p>11 Octobre 2025</p>
                <p class="text-xs">13h00 - 14h00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center gap-4 mt-2 mb-8">
        <button class="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow hover:bg-gray-500 transition-colors">
          <i class="bx bx-share-alt"></i> Partager
        </button>
        <button class="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow hover:bg-gray-500 transition-colors">
          <i class="bx bx-download"></i> Capturer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import logo from "@/assets/images/logo-artci.png";

const searchQuery = ref("");
const showValidationForm = ref(false);
const validationFormData = ref<any>({});

const requests = ref(
  Array.from({ length: 15 }, (_, i) => ({
    id: `R00${i + 1}`,
    email: `user${i + 1}@example.com`,
    contact: `+225 07000000${i + 1}`,
    image: `https://randomuser.me/api/portraits/${i % 2 ? "women" : "men"}/${i + 1}.jpg`,
    host: ["Mozar Group", "Tech CI", "Masek Holding"][i % 3],
    reason: ["Visite", "Réunion", "Inspection"][i % 3],
    status: ["Pending", "Approved", "Rejected"][i % 3],
    createdAt: `2025-10-${10 + i}`,
  }))
);

const filteredRequests = computed(() => {
  if (!searchQuery.value) return requests.value;
  return requests.value.filter((request) => {
    const query = searchQuery.value.toLowerCase();
    const host = request.host ?? "";      // Si undefined, on met ""
    const reason = request.reason ?? "";  // Si undefined, on met ""
    return (
      (request.email ?? "").toLowerCase().includes(query) ||
      (request.contact ?? "").toLowerCase().includes(query) ||
      host.toLowerCase().includes(query) ||
      reason.toLowerCase().includes(query)
    );
  });
});


const selectedRequest = ref<any>(null);
const isConfirming = ref(false);
const showQrCard = ref(false);
const qrCodeUrl = ref("");

// Ouvrir le formulaire de validation
function openValidationForm(request: any) {
  if (request.status === 'Approved') return; // Déjà approuvé
  selectedRequest.value = request;
  validationFormData.value = {
    nom: `Nom ${request.id}`,
    adresse: "1050 Connecticut Ave NW, Washington",
    pays: "Austria",
    codePostal: "20036",
    raison: request.reason,
    heure: "22:31",
    contact: request.contact,
    pieceIdentite: "1344555",
    ville: "cocoservice",
    region: "erterte",
    employeur: "CGDS",
    dateDemande: "05/12/2025",
    email: request.email,
    medecin: "Admin Superviseur"
  };
  showValidationForm.value = true;
}

// Voir un document
function viewDocument(type: string) {
  let title = '';
  let content = '';

  switch(type) {
    case 'identity':
      title = 'Carte d\'identité';
      content = `Numéro: ${validationFormData.value.pieceIdentite}\nNom: ${validationFormData.value.nom}`;
      break;
    case 'insurance':
      title = 'Carte d\'assurance';
      content = 'Numéro: AS-7890-4567\nValidité: 01/01/2024 - 31/12/2025';
      break;
    case 'cmu':
      title = 'Carte CMU';
      content = 'Numéro: CMU-1234-5678\nBénéficiaire: ' + validationFormData.value.nom;
      break;
  }

  alert(`${title}\n\n${content}`);
}

// Refuser depuis le formulaire
function rejectFromForm() {
  if (selectedRequest.value && confirm(`Voulez-vous refuser la demande de ${selectedRequest.value.email} ?`)) {
    selectedRequest.value.status = 'Rejected';
    showValidationForm.value = false;
  }
}

// Approuver et montrer le QR code
function approveAndShowQR() {
  if (selectedRequest.value) {
    selectedRequest.value.status = 'Approved';
    showValidationForm.value = false;
    isConfirming.value = true;
  }
}

// Annuler la validation
function cancelValidation() {
  showValidationForm.value = false;
  selectedRequest.value = null;
}

// Générer la carte QR
function generateQrCard(request: any) {
  qrCodeUrl.value = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    `Accès validé pour ${request.email}`
  )}`;
  isConfirming.value = false;
  showQrCard.value = true;
}

function cancelConfirmation() {
  selectedRequest.value = null;
  isConfirming.value = false;
}

function removeRequest(id: string) {
  requests.value = requests.value.filter((r: any) => r.id !== id);
  if (selectedRequest.value && selectedRequest.value.id === id) {
    selectedRequest.value = null;
    isConfirming.value = false;
    showQrCard.value = false;
  }
}
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");

.overflow-x-auto::-webkit-scrollbar { height: 8px; }
.overflow-x-auto::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 4px; }
.overflow-x-auto::-webkit-scrollbar-thumb { background: #c1c1c1; border-radius: 4px; }
.overflow-x-auto::-webkit-scrollbar-thumb:hover { background: #a8a8a8; }
.min-h-screen { overflow: hidden; }

/* Styles pour le modal */
.max-h-\[90vh\] {
  max-height: 90vh;
}
</style>
