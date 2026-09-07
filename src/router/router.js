import { createRouter, createWebHistory } from 'vue-router';
import Principal from '@/views/Principal.vue';
import IngenieriaDeSoftware from '@/views/IngenieriaDeSoftware/IngenieriaDeSoftware.vue';
import ArquitecturaYMicroservicios from '@/views/IngenieriaDeSoftware/submodulos/ArquitecturaYMicroservicios.vue';
import InteligenciaArtificial from '@/views/IngenieriaDeSoftware/submodulos/InteligenciaArtificial.vue';
import PruebasYAseguramiento from '@/views/IngenieriaDeSoftware/submodulos/PruebasYAseguramiento.vue';
import GestionYDevops from '@/views/IngenieriaDeSoftware/submodulos/GestionYDevops.vue';
import EticaYSostenibilidad from '@/views/IngenieriaDeSoftware/submodulos/EticaYSostenibilidad.vue';

import DesarrolloWeb from '@/views/DesarrolloWeb/DesarrolloWeb.vue';
import HtmlCssView from '@/views/DesarrolloWeb/submodulos/HtmlCssView.vue';
import JsAvanzadoView from '@/views/DesarrolloWeb/submodulos/JsAvanzadoView.vue';
import FrameworksView from '@/views/DesarrolloWeb/submodulos/FrameworksView.vue';
import ApiIntegrationView from '@/views/DesarrolloWeb/submodulos/ApiIntegrationView.vue';
import OptimizacionView from '@/views/DesarrolloWeb/submodulos/OptimizacionView.vue';

import GithubActivity from '@/views/GithubActivity/GithubActivity.vue';
import Contact from '@/views/Contacto/Contact.vue';
import NotFound from '@/views/NotFound.vue';

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
    children: [
      {
        path: 'architect',
        name: 'arquitectura',
        component: ArquitecturaYMicroservicios
      },
      {
        path: 'ia',
        name: 'inteligenciaArtificial',
        component: InteligenciaArtificial
      },
      {
        path: 'qa',
        name: 'pruebasYAseguramiento',
        component: PruebasYAseguramiento
      },
      {
        path: 'devops',
        name: 'gestionYDevops',
        component: GestionYDevops
      },
      {
        path: 'etica',
        name: 'eticaYSostenibilidad',
        component: EticaYSostenibilidad
      }
    ]
  },
  {
    path: '/dev-web',
    name: 'DevWeb',
    component: DesarrolloWeb,
    children: [
      {
        path: 'html-css',
        name: 'htmlCss',
        component: HtmlCssView
      },
      {
        path: 'js-avanzado',
        name: 'jsAvanzado',
        component: JsAvanzadoView
      },
      {
        path: 'frameworks',
        name: 'frameworks',
        component: FrameworksView
      },
      {
        path: 'api_integration',
        name: 'apiIntegration',
        component: ApiIntegrationView
      },
      {
        path: 'optimizacion',
        name: 'optimizacion',
        component: OptimizacionView
      }
    ]
  },
  {
    path: '/githubActivity',
    name: 'GitHubActivity',
    component: GithubActivity,
  },
  {
    path: '/contact',
    name: 'CONTACT',
    component: Contact,
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
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
