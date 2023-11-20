import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'

export const ROUTES = {
  home: 'home',
  project: 'project'
} 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTES.home,
      component: HomeView
    },
    {
      path: '/projects/:projectName',
      name: ROUTES.project,
      component: ProjectView,
      props: true, // This allows the route params to be passed as props to the component
    },

  ]
})

export default router
