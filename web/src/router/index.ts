import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import { onMounted } from 'vue';

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

onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get('redirect');

  if (redirectPath) {
    window.history.replaceState({}, '', redirectPath); // Update URL without causing another reload
    router.replace(redirectPath); // Ensure Vue Router recognizes the new path
  }
});

export default router
