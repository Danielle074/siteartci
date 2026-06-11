<template>
  <div class="bg-white shadow-md rounded-lg p-4">

    <!-- Liste des événements -->
    <div v-if="activeTab === 'list'" class="bg-white shadow-md rounded-lg p-4">
      <h3 class="text-lg font-semibold text-orange-600 mb-4">Liste des Événements</h3>
      <table class="min-w-full border border-gray-200 rounded-lg">
        <thead class="bg-orange-600 text-white">
          <tr>
            <th class="p-3 text-left">Nom</th>
            <th class="p-3 text-left">Entreprise</th>
            <th class="p-3 text-left">Lieu</th>
            <th class="p-3 text-left">Date</th>
            <th class="p-3 text-left">Heure</th>
            <th class="p-3 text-left">Création</th>
            <th class="p-3 text-left">Lien</th>
            <th class="p-3 text-left">Participation</th>
            <th class="p-3 text-left">QR Code</th>
            <th class="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event, index) in paginatedEvents" :key="index" class="border-b hover:bg-gray-100">
            <td class="p-3 flex items-center gap-2">
              <input type="checkbox" v-model="event.selected"/>
              <span class="text-blue-700 font-semibold hover:underline cursor-pointer"
                    @click="voirParticipants(event)">
                {{ event.nom }}
              </span>
            </td>
            <td class="p-3">{{ event.entreprise }}</td>
            <td class="p-3">{{ event.lieu }}</td>
            <td class="p-3">{{ event.date }}</td>
            <td class="p-3">{{ event.heure }}</td>
            <td class="p-3">{{ event.createdAt }}</td>
            <td class="p-3"><a :href="event.lien" class="text-blue-600 hover:underline">Voir</a></td>
            <td class="p-3">
              <button class="text-orange-600 font-semibold hover:underline"
                      @click="voirParticipants(event)">
                {{ event.participation }}
              </button>
            </td>
            <td class="p-3"><img :src="event.qrCode" class="h-10 w-10"/></td>
            <td class="p-3 relative">
              <div class="inline-block text-left">
                <button @click="event.dropdown = !event.dropdown" class="px-2 py-1 rounded hover:bg-gray-200">
                  <i class='bx bx-dots-vertical-rounded text-xl'></i>
                </button>
                <div v-if="event.dropdown" class="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                  <ul>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer" @click="ajouterEvent(event)">
                      <i class='bx bx-plus'></i> Ajouter
                    </li>
                    <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer" @click="modifierEvent(event)">
                      <i class='bx bx-edit'></i> Modifier
                    </li>
                    <li class="px-4 py-2 hover:bg-red-100 cursor-pointer text-red-600" @click="supprimerEvent(index)">
                      <i class='bx bx-trash'></i> Supprimer
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="flex justify-between items-center mt-4">
        <div>
          Show
          <select v-model="perPage" class="border rounded p-1">
            <option v-for="n in [5,10,15]" :key="n" :value="n">{{ n }}</option>
          </select>
          events per page
        </div>
        <div class="flex gap-2">
          <button :disabled="currentPage === 1" @click="currentPage--" class="px-3 py-1 border rounded hover:bg-gray-200">‹</button>
          <button v-for="page in totalPages" :key="page" @click="currentPage = page"
                  :class="['px-3 py-1 border rounded hover:bg-gray-200', currentPage === page ? 'bg-orange-600 text-white' : '']">
            {{ page }}
          </button>
          <button :disabled="currentPage === totalPages" @click="currentPage++" class="px-3 py-1 border rounded hover:bg-gray-200">›</button>
        </div>
      </div>
    </div>

    <!-- Liste des participants -->
    <div v-if="activeTab === 'participants'" class="bg-white shadow-md rounded-lg p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">
          Participants de l'Événement : 
          <span class="text-orange-600">{{ selectedEvent?.nom || '---' }}</span>
        </h3>
        <button @click="activeTab = 'list'" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">Retour</button>
      </div>
      <table class="min-w-full border border-gray-200 rounded-lg">
        <thead class="bg-orange-600 text-white">
          <tr>
            <th class="p-3 text-left">ID</th>
            <th class="p-3 text-left">Email</th>
            <th class="p-3 text-left">Image</th>
            <th class="p-3 text-left">Adresse</th>
            <th class="p-3 text-left">Date d’Inscription</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(visitor, index) in selectedEvent?.visitors ?? []" :key="index" class="border-b hover:bg-gray-100">
            <td class="p-3">{{ visitor.id }}</td>
            <td class="p-3">{{ visitor.email }}</td>
            <td class="p-3"><img :src="visitor.image" class="h-10 w-10 rounded-full object-cover"/></td>
            <td class="p-3">{{ visitor.address }}</td>
            <td class="p-3">{{ visitor.createdAt }}</td>
           </tr>
          <tr v-if="!selectedEvent?.visitors?.length">
            <td colspan="5" class="text-center p-4 text-gray-500">Aucun participant pour cet événement</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// ==================== TYPES ====================
interface Visitor {
  id: string
  email: string
  image: string
  address: string
  createdAt: string
}

interface Event {
  entreprise: string
  nom: string
  lieu: string
  date: string
  heure: string
  createdAt: string
  lien: string
  participation: number
  qrCode: string
  selected: boolean
  dropdown: boolean
}

interface EventWithVisitors extends Event {
  visitors: Visitor[]
}

// ==================== DONNÉES ====================
const activeTab = ref<'list' | 'participants'>('list')
const selectedEvent = ref<EventWithVisitors | null>(null)
const perPage = ref(5)
const currentPage = ref(1)

const events = ref<Event[]>([
  { 
    entreprise: 'Mozar Group', 
    nom: 'Forum Digital', 
    lieu: 'Abidjan', 
    date: '2025-11-01', 
    heure: '09:00', 
    createdAt: '2025-09-30', 
    lien: '#', 
    participation: 124, 
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Forum+Digital', 
    selected: false, 
    dropdown: false 
  },
  { 
    entreprise: 'Masek Holding', 
    nom: 'Conférence Élite', 
    lieu: 'Plateau', 
    date: '2025-12-05', 
    heure: '14:00', 
    createdAt: '2025-10-05', 
    lien: '#', 
    participation: 58, 
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=Conference+Elite', 
    selected: false, 
    dropdown: false 
  },
])

const visitorsData: Record<string, Visitor[]> = {
  'Forum Digital': [
    { id: 'V001', email: 'john@example.com', image: 'https://randomuser.me/api/portraits/men/1.jpg', address: 'Abidjan, Cocody', createdAt: '2025-10-10' },
    { id: 'V002', email: 'marie@example.com', image: 'https://randomuser.me/api/portraits/women/2.jpg', address: 'Yopougon, Abobo', createdAt: '2025-10-12' },
    { id: 'V003', email: 'patrick@example.com', image: 'https://randomuser.me/api/portraits/men/3.jpg', address: 'Marcory, Zone 4', createdAt: '2025-10-14' },
  ],
  'Conférence Élite': [
    { id: 'V006', email: 'luc@example.com', image: 'https://randomuser.me/api/portraits/men/6.jpg', address: 'Plateau, Abidjan', createdAt: '2025-10-20' },
    { id: 'V007', email: 'sophie@example.com', image: 'https://randomuser.me/api/portraits/women/7.jpg', address: 'Cocody, Riviera', createdAt: '2025-10-21' },
  ]
}

// ==================== MÉTHODES ====================
function voirParticipants(event: Event) {
  selectedEvent.value = { 
    ...event, 
    visitors: visitorsData[event.nom] || [] 
  }
  activeTab.value = 'participants'
}

function ajouterEvent(event: Event) { 
  alert(`Ajouter pour ${event.nom}`) 
}

function modifierEvent(event: Event) { 
  alert(`Modifier ${event.nom}`) 
}

function supprimerEvent(index: number) { 
  if(confirm('Supprimer cet événement ?')) events.value.splice(index, 1) 
}

// ==================== COMPUTED ====================
const totalPages = computed(() => Math.ceil(events.value.length / perPage.value))
const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return events.value.slice(start, start + perPage.value)
})
</script>