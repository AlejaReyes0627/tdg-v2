import Principal from '@/views/Principal.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
