import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import QuestionnaireView from '@/views/QuestionnaireView.vue'
import ProductsView from '@/views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/About',
      name: 'about',
      component: AboutView

    },
    {
      path: '/Questionnaire',
      name: 'questionnaire',
      component: QuestionnaireView
    },
    {
      path: '/Products',
      name: 'products',
      component: ProductsView
    }
  ]
})

export default router
