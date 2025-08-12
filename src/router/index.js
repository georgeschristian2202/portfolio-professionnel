import { createRouter, createWebHistory } from 'vue-router'

// Pages
import LandingPage from '@/pages/LandingPage.vue'
import CvPage from '@/pages/CvPage.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: LandingPage },
    { path: '/cv', name: 'cv', component: CvPage },
  ],
  scrollBehavior() { return { top: 0 } }
})
