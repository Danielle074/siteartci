import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
console.log('🚀 Démarrage ARTCI...')

// Debug router
router.beforeEach((to, from, next) => {
  console.log(`📍 Navigation: ${from.path || '/'} → ${to.path}`)
  console.log('Route:', to)
  next()
})

router.afterEach(() => {
  console.log('✅ Navigation terminée')
  console.log('---')
})

const app = createApp(App)

app.use(router)

// Gestion des erreurs
app.config.errorHandler = (err) => {
  console.error('🔥 ERREUR VUE:', err)
}

app.mount('#app')

console.log('🎉 Application ARTCI démarrée !')
console.log('URL actuelle:', window.location.href)