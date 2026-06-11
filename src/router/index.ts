import { createRouter, createWebHistory } from 'vue-router'

/* ====================== LAYOUTS ====================== */
import Layout from '@/components/Layout.vue'          // Layout pour le site vitrine
import DashboardLayout from '@/layouts/DashboardLayout.vue'  // Layout pour le dashboard

/* ====================== SITE VITRINE ====================== */
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Regulation from '@/views/Regulation.vue'
import Actualites from '@/views/Actualites.vue'
import Contact from '@/views/Contact.vue'


/* DASHBOARD - PAGES */
import Dashboard from '@/views/dashboard/Dashboard.vue'
import Demande from '@/views/dashboard/Demande.vue'
import Utilisateur from '@/views/dashboard/Utilisateur.vue'
import Scanner from '@/views/dashboard/Scanner.vue'
import Evenement from '@/views/dashboard/Evenement.vue'
import Entreprises from '@/views/dashboard/Entreprises.vue'
import Visiteurs from '@/views/dashboard/Visiteurs.vue'
import Presence from '@/views/dashboard/Presence.vue'
import Carte from '@/views/dashboard/Carte.vue'
import Courriers from '@/views/dashboard/Courriers.vue'
import Document from "@/views/dashboard/Document.vue"
import Projet from "@/views/dashboard/Projet.vue"
import Taches from "@/views/dashboard/Taches.vue"

/* USERS */
import AddUser from '@/components/dashboard/AddUser.vue'
import UserList from '@/components/dashboard/UserList.vue'

/* SCANNER */
import ListeQRCode from '@/components/dashboard/ListeQRCode.vue'
import ScannerQRCode from '@/components/dashboard/ScannerQRCode.vue'
import QRManuel from '@/components/dashboard/QRManuel.vue'
import CreerQRCode from '@/components/dashboard/CreerQRCode.vue'

/* ÉVÉNEMENTS */
import AjouterEvenement from '@/components/dashboard/AjouterEvenement.vue'
import ListeEvenement from '@/components/dashboard/ListeEvenement.vue'

/* ENTREPRISES */
import AddCompany from '@/components/dashboard/AddCompany.vue'
import CompanyList from '@/components/dashboard/CompanyList.vue'
import BadgeModal from '@/components/dashboard/BadgeModal.vue'
import MembersModal from '@/components/dashboard/MembersModal.vue'
import EditCompanyForm from '@/components/dashboard/EditCompanyForm.vue'

/* CARTES */
import CardList from '@/components/dashboard/CardList.vue'
import CreateCard from '@/components/dashboard/CreateCard.vue'

/* COURRIER */
import AjouterCourrier from "@/components/dashboard/AjouterCourrier.vue"
import ListeCourrier from '@/components/dashboard/ListeCourrier.vue'

/* PROJETS - COMPOSANTS */
import ProjectList from "@/components/dashboard/ProjectList.vue"
import DocumentPreview from "@/components/dashboard/DocumentProjet.vue"
import EditProject from "@/components/dashboard/EditProject.vue"
import DashboardProjet from "@/components/dashboard/DashboardProjet.vue"
import ProjectCards from "@/components/dashboard/ProjectCards.vue"

/* TÂCHES - COMPOSANTS */
import TaskList from "@/components/dashboard/TaskList.vue"
import TaskCards from "@/components/dashboard/TaskCards.vue"
import EditTask from "@/components/dashboard/EditTask.vue"
import AddTimeEntry from "@/components/dashboard/AddTimeEntry.vue"
import TimeEntries from "@/components/dashboard/TimeEntries.vue"
import TaskComments from "@/components/dashboard/TaskComments.vue"
import AddComment from "@/components/dashboard/AddComment.vue"
/* ====================== ROUTES ====================== */
const routes = [
  /* --- SITE VITRINE --- */
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'about', name: 'about', component: About },
      { path: 'regulation', name: 'regulation', component: Regulation },
      { path: 'actualites', name: 'actualites', component: Actualites },
      { path: 'actualites/details/:id', name: 'actualite-detail', component: () => import('@/views/ActualiteDetail.vue') },
      { path: 'contact', name: 'contact', component: Contact },
      { path: 'mission', name: 'mission', component: () => import('@/components/Mission.vue') },
      { path: 'organisation', name: 'organisation', component: () => import('@/components/Organisation.vue') },
      { path: 'partenaires', name: 'partenaires', component: () => import('@/components/Partenaires.vue') },
      { path: 'telecoms', name: 'telecoms', component: () => import('@/components/Telecoms.vue') },
      { path: 'numerique', name: 'numerique', component: () => import('@/components/Numerique.vue') },
      { path: 'securite-donnees', name: 'securiteDonnees', component: () => import('@/components/SecuriteDonnees.vue') },
      { path: 'postal', name: 'postal', component: () => import('@/views/Postal.vue') },
      { path: 'documents', name: 'documents', component: () => import('@/views/Documents.vue') },
    ]
  },

  /* --- AUTH --- */
  { path: '/login', name: 'login', component: () => import('@/views/Login.vue') },
  { path: '/homedashboard', name: 'homedashboard', component: () => import('@/views/HomeDashboard.vue') },

  /* DASHBOARD */
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      /* HOME */
      { path: '', name: 'dashboard', component: Dashboard },

      /* DEMANDES */
      { path: 'demande', name: 'demande', component: Demande },
      { path: 'document', name: 'document', component: Document },

      /* VISITEURS & PRÉSENCE */
      { path: 'visiteurs', name: 'visiteurs', component: Visiteurs },
      { path: 'presence', name: 'presence', component: Presence },

      /* UTILISATEURS */
      { path: 'utilisateurs', name: 'utilisateurs', component: Utilisateur },
      { path: 'utilisateurs/add', name: 'addUser', component: AddUser },
      { path: 'utilisateurs/list', name: 'userList', component: UserList },

      /* SCANNER */
      {
        path: 'scanner',
        component: Scanner,
        redirect: { name: 'listeQRCode' },
        children: [
          { path: 'liste', name: 'listeQRCode', component: ListeQRCode },
          { path: 'qr-code', name: 'scannerQRCode', component: ScannerQRCode },
          { path: 'manuel', name: 'qrManuel', component: QRManuel },
          { path: 'creer', name: 'creerQRCode', component: CreerQRCode },
        ],
      },

      /* ÉVÉNEMENTS */
      {
        path: 'evenement',
        component: Evenement,
        redirect: { name: 'listeEvenement' },
        children: [
          { path: 'liste', name: 'listeEvenement', component: ListeEvenement },
          { path: 'ajouter', name: 'ajouterEvenement', component: AjouterEvenement },
        ],
      },

      /* ENTREPRISES */
      {
        path: 'entreprises',
        component: Entreprises,
        redirect: { name: 'companyList' },
        children: [
          { path: 'liste', name: 'companyList', component: CompanyList },
          { path: 'ajouter', name: 'addCompany', component: AddCompany },
          { path: 'edit/:id', name: 'editCompany', component: EditCompanyForm, props: true },
          { path: 'badge/:id', name: 'badgeCompany', component: BadgeModal, props: true },
          { path: 'members/:id', name: 'membersCompany', component: MembersModal, props: true },
        ],
      },

      /* CARTES */
      {
        path: 'carte',
        component: Carte,
        redirect: { name: 'cardList' },
        children: [
          { path: 'liste', name: 'cardList', component: CardList },
          { path: 'creer', name: 'createCard', component: CreateCard },
        ],
      },

      /* COURRIER */
      {
        path: 'courriers',
        component: Courriers,
        redirect: { name: 'ListeCourrier' },
        children: [
          { path: 'liste', name: 'ListeCourrier', component: ListeCourrier },
          { path: 'ajouter', name: 'ajouterCourrier', component: AjouterCourrier },
        ],
      },

     // 🧩 Projets
{
  path: "projet",
  component: Projet,
  children: [
    { path: "", redirect: { name: "ProjectCards" } }, // Redirige vers les cartes par défaut
    { path: "cartes", name: "ProjectCards", component: ProjectCards }, // Vue cartes
    { path: "liste", name: "ProjectList", component: ProjectList }, // Vue tableau
    { path: "document/:id", name: "DocumentPreview", component: DocumentPreview },
    { path: "editer/:id", name: "EditProject", component: EditProject },
  ],
},

      
      // 🧾 Tâches
{
  path: "taches",
  component: Taches,
  redirect: { name: "TaskCards" }, // Changé pour rediriger vers les cartes par défaut
  children: [
    { path: "cartes", name: "TaskCards", component: TaskCards }, // Vue cartes
    { path: "liste", name: "TaskList", component: TaskList },
    { path: "ajouter", name: "AddTask", component: EditTask },
    { path: "editer/:id", name: "EditTask", component: EditTask },
    { path: "times/:id", name: "TimeEntries", component: TimeEntries },
    { path: "times/ajouter/:id", name: "AddTimeEntry", component: AddTimeEntry },
    { path: "commentaires/:id", name: "TaskComments", component: TaskComments },
    { path: "commentaires/ajouter/:id", name: "AddComment", component: AddComment },
    { path: "commentaires/editer/:id/:commentId", name: "EditComment", component: AddComment },
  ],
},
    ],
  },
  // Redirection 404
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

/* ====================== CREATE ROUTER ====================== */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
