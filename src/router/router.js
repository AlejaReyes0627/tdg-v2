import Opcion1 from '@/components/DesarrolloWeb/Opcion1.vue';
import DesarrolloWeb from '@/views/DesarrolloWeb/DesarrolloWeb.vue';
import IngenieriaDeSoftware from '@/views/IngenieriaDeSoftware/IngenieriaDeSoftware.vue';
import NotFound from '@/views/NotFound.vue';
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
  },
  {
    path: '/dev-web',
    name: 'DevWeb',
    component: DesarrolloWeb,
    children: [
      {
        path: '/opcion1',
        name: 'Opcion1',
        component: Opcion1
      }
      
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
