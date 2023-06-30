import { createRouter, createWebHistory } from 'vue-router'
import DataEditor from '../components/DataEditor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DataEditor
    },
  ]
})

export default router
