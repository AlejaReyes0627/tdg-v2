import IngenieriaDeSoftware from '@/views/IngenieriaDeSoftware/IngenieriaDeSoftware.vue';
import Principal from '@/views/Principal.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal,
  },
  {
    path: '/isw',
    name: 'ISW',
    component: IngenieriaDeSoftware,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
