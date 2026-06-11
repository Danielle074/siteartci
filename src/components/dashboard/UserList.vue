<template>
  <!-- Affichage conditionnel Liste des utilisateurs -->
  <div v-if="showList" class="min-h-screen p-6">
    <!-- Attendance header -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
          <button @click="prevDay" class="p-1 rounded-md hover:bg-gray-100">
            <i class="bx bx-chevron-left text-xl text-gray-600"></i>
          </button>
          <div class="text-gray-700 font-medium">
            <div class="text-sm">{{ currentDate }}</div>
          </div>
          <button @click="nextDay" class="p-1 rounded-md hover:bg-gray-100">
            <i class="bx bx-chevron-right text-xl text-gray-600"></i>
          </button>
          <div class="ml-3 relative">
            <button
              @click="toggleYearDropdown"
              class="flex items-center gap-2 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-50"
            >
              <span class="font-medium">{{ year }}</span>
              <i class="bx bx-chevron-down text-gray-600"></i>
            </button>
            <div
              v-if="yearDropdown"
              class="absolute left-0 mt-2 bg-white border rounded-md shadow-md py-2 w-28 z-10"
            >
              <button
                class="w-full text-left px-3 py-1 hover:bg-gray-100"
                @click="selectYear(2024)"
              >
                2024
              </button>
              <button
                class="w-full text-left px-3 py-1 hover:bg-gray-100"
                @click="selectYear(2025)"
              >
                2025
              </button>
              <button
                class="w-full text-left px-3 py-1 hover:bg-gray-100"
                @click="selectYear(2026)"
              >
                2026
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search"
            class="border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <i class="bx bx-search absolute left-3 top-2.5 text-gray-400 text-lg"></i>
        </div>

        <button
          @click="toggleFilter"
          class="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50"
        >
          <i class="bx bx-filter-alt text-gray-600"></i>
          <span class="text-sm">Filter</span>
        </button>

        <router-link
          to="/dashboard/utilisateurs/add"
          class="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 transition flex items-center gap-2"
        >
          <i class="bx bx-plus text-lg"></i>
          Ajouter un Utilisateur
        </router-link>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-md overflow-hidden w-full">
      <div class="overflow-x-auto w-full" style="max-height: 500px;">
        <table class="w-full text-left border-collapse min-w-max">
          <thead class="bg-orange-600 text-white">
            <tr>
              <th class="p-4 whitespace-nowrap">Employee name</th>
              <th class="p-4 whitespace-nowrap">Clock-in & Out</th>
              <th class="p-4 whitespace-nowrap">Break time</th>
              <th class="p-4 whitespace-nowrap">Overtime</th>
              <th class="p-4 whitespace-nowrap">Status</th>
              <th class="p-4 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(emp, index) in paginatedEmployees"
              :key="emp.id"
              :class="[
                index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200',
                'hover:bg-gray-50'
              ]"
            >
              <td class="p-4 flex items-center gap-3 whitespace-nowrap">
                <input type="checkbox" class="h-4 w-4" />
                <img :src="emp.image" class="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p class="font-semibold text-gray-800">{{ emp.name }}</p>
                  <p class="text-gray-400 text-sm">{{ emp.email }}</p>
                </div>
              </td>

              <td class="p-4 whitespace-nowrap">
                <div class="text-sm">{{ emp.clockIn }} — {{ emp.clockOut }}</div>
                <div class="text-xs text-gray-400">{{ emp.totalHours }}</div>
              </td>

              <td class="p-4 whitespace-nowrap">{{ emp.breakTime }}</td>
              <td class="p-4 whitespace-nowrap">{{ emp.overtime }}</td>

              <td class="p-4 whitespace-nowrap">
                <span
                  :class="emp.status === 'On time'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'"
                  class="px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ emp.status }}
                </span>
              </td>

              <td class="p-4 text-xl relative whitespace-nowrap">
                <button
                  @click="emp.showActions = !emp.showActions"
                  class="px-3 py-1 hover:bg-gray-50"
                >
                  <i class="bx bx-dots-vertical"></i>
                </button>

                <div
                  v-if="emp.showActions"
                  class="absolute right-0 mt-2 bg-white rounded-md shadow-md flex flex-col gap-1 w-36 z-10"
                >
                  <button @click="editEmployee(emp)" class="px-3 py-2 hover:bg-gray-100 text-sm">
                    <i class="bx bx-pencil"></i> Modifier
                  </button>
                  <button @click="deleteEmployee(emp)" class="px-3 py-2 hover:bg-gray-100 text-sm">
                    <i class="bx bx-trash"></i> Supprimer
                  </button>
                  <button @click="addEmployee(emp)" class="px-3 py-2 hover:bg-gray-100 text-sm">
                    <i class="bx bx-plus-circle"></i> Ajouter
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="paginatedEmployees.length === 0">
              <td colspan="6" class="p-6 text-center text-gray-500">No visitors found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between px-4 py-3 bg-white border-t">
      <div class="flex items-center gap-2">
        <span class="text-sm">Show</span>
        <button @click="togglePerPageDropdown" class="border px-2 py-1 rounded-md">
          {{ perPage }}
        </button>

        <div v-if="perPageDropdown" class="absolute mt-1 w-24 bg-white border rounded-md shadow-md">
          <button class="w-full px-3 py-1" @click="setPerPage(15)">15</button>
          <button class="w-full px-3 py-1" @click="setPerPage(10)">10</button>
          <button class="w-full px-3 py-1" @click="setPerPage(5)">5</button>
        </div>

        <span class="text-sm">Employees per page</span>
      </div>

      <div class="flex items-center gap-1">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
          <i class="bx bx-chevron-left"></i>
        </button>

        <button
          v-for="page in pageNumbers"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'px-3 py-1 rounded-md border',
            currentPage === page ? 'bg-orange-600 text-white' : ''
          ]"
        >
          {{ page }}
        </button>

        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
          <i class="bx bx-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

/* UI STATE */
const showList = ref(true);
const searchQuery = ref("");
const showFilterPanel = ref(false);
const yearDropdown = ref(false);
const perPageDropdown = ref(false);
const perPage = ref(15);
const currentPage = ref(1);
const filterStatus = ref("");
const filterDept = ref("");
const year = ref(2025);

/* Dates */
const dates = ref<string[]>([
  "Monday 05 October",
  "Tuesday 06 October",
  "Wednesday 07 October",
  "Thursday 08 October",
  "Friday 09 October",
]);

const currentDate = ref<string>(dates.value[0] ?? 'Monday 05 October')


function prevDay() {
  const index = dates.value.indexOf(currentDate.value);
  currentDate.value = dates.value[index - 1] ?? currentDate.value;
}

function nextDay() {
  const index = dates.value.indexOf(currentDate.value);
  currentDate.value = dates.value[index + 1] ?? currentDate.value;
}

/* Dropdowns */
function toggleYearDropdown() {
  yearDropdown.value = !yearDropdown.value;
}
function selectYear(y: number) {
  year.value = y;
  yearDropdown.value = false;
}
function toggleFilter() {
  showFilterPanel.value = !showFilterPanel.value;
}
function togglePerPageDropdown() {
  perPageDropdown.value = !perPageDropdown.value;
}
function setPerPage(n: number) {
  perPage.value = n;
  perPageDropdown.value = false;
  currentPage.value = 1;
}

/* Pages */
function goToPage(n: number) {
  if (n < 1) n = 1;
  if (n > totalPages.value) n = totalPages.value;
  currentPage.value = n;
}

/* Employees Type */
type Employee = {
  id: string;
  name: string;
  email: string;
  image: string;
  clockIn: string;
  clockOut: string;
  totalHours: string;
  breakTime: string;
  overtime: string;
  status: string;
  dept: string;
  showActions: boolean;
};

/* Employees Data */
const employees = ref<Employee[]>([
  {
    id: "E01",
    name: "Jerome Bell",
    email: "nuray@alignui.com",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    clockIn: "10:02 AM",
    clockOut: "09:10 PM",
    totalHours: "8h 58m",
    breakTime: "10:00–10:15",
    overtime: "2h 10",
    status: "On time",
    dept: "Engineering",
    showActions: false,
  },
  {
    id: 'E02',
    name: 'Liam Carter',
    email: 'liam@alignui.com',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    clockIn: '12:02 PM',
    clockOut: '09:00 PM',
    totalHours: '8h 58m',
    breakTime: '11:00–11:10',
    overtime: '-',
    status: 'Late',
    dept: 'Sales',
    showActions: false,
  },
  {
    id: 'E03',
    name: 'Maya Ross',
    email: 'maya@alignui.com',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    clockIn: '10:02 AM',
    clockOut: '09:10 PM',
    totalHours: '8h 58m',
    breakTime: '11:00–11:10',
    overtime: '2h 10',
    status: 'Late',
    dept: 'Design',
    showActions: false,
  },
  {
    id: 'E04',
    name: 'Ethan Cole',
    email: 'ethan@alignui.com',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    clockIn: '10:02 AM',
    clockOut: '09:10 PM',
    totalHours: '8h 58m',
    breakTime: '12:00–12:20',
    overtime: '2h 10',
    status: 'On time',
    dept: 'Engineering',
    showActions: false,
  },
  {
    id: 'E05',
    name: 'Ava Brooks',
    email: 'ava@alignui.com',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    clockIn: '10:02 AM',
    clockOut: '07:00 PM',
    totalHours: '8h 58m',
    breakTime: '10:00–10:15',
    overtime: '-',
    status: 'On time',
    dept: 'Sales',
    showActions: false,
  },
]);

/* Filtered + Paginated */
const filteredEmployees = computed(() => {
  return employees.value.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
      (!filterStatus.value || emp.status === filterStatus.value) &&
      (!filterDept.value || emp.dept === filterDept.value)
  );
});

const totalPages = computed(
  () => Math.ceil(filteredEmployees.value.length / perPage.value)
);

const paginatedEmployees = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  return filteredEmployees.value.slice(start, start + perPage.value);
});

const pageNumbers = computed(() => {
  return Array.from({ length: totalPages.value }, (_, i) => i + 1);
});

/* Actions */
function editEmployee(emp: Employee) {
  alert(`Modifier ${emp.name}`);
}
function deleteEmployee(emp: Employee) {
  alert(`Supprimer ${emp.name}`);
}
function addEmployee(emp: Employee) {
  alert(`Ajouter ${emp.name}`);
}
</script>



<style scoped>
@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");

/* Scrollbar horizontale */
.overflow-x-auto {
  overflow-x: auto;
  overflow-y: hidden;
}

/* Style de la scrollbar horizontale */
.overflow-x-auto::-webkit-scrollbar {
  height: 12px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 6px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 6px;
  border: 2px solid #f1f5f9;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Pour Firefox */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f1f5f9;
}
</style>
