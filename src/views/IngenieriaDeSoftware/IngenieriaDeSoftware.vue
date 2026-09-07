<template>
  <div class="isw-container">

    <!-- === SOLO MOSTRAR ESTO EN /isw (página principal) === -->
    <div v-if="$route.path === '/isw'" class="isw-home">
      <!-- HERO SECTION -->
      <section class="hero-section">
        <div class="hero-bg">
          <div class="overlay"></div>
          <div class="hero-center">
            <div class="container hero-content">
              <n-tag round :bordered="false" type="info" class="hero-tag" data-aos="fade-down">
                {{ $t('isw_page.main_remember') }}
              </n-tag>
              <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
                {{ $t('isw_page.main_title') }}
              </h1>
              <p class="hero-text" data-aos="fade-up" data-aos-delay="200">
                {{ $t('isw_page.main_body') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- INTRODUCCIÓN -->
      <section class="intro-section">
        <div class="container">
          <n-card class="glass-card intro-card" hoverable data-aos="zoom-in">
            <n-grid :cols="12" x-gap="32" y-gap="16">
              <n-gi :span="5">
                <div class="intro-image">
                  <n-image src="/assets/images/ingenieriaSoftware.jpg" alt="Ingeniería de Software" />
                </div>
              </n-gi>
              <n-gi :span="7">
                <div class="intro-body">
                  <h3>{{ $t('isw_page.first_card_tittle') }}</h3>
                  <p>{{ $t('isw_page.middle_card_text') }}</p>
                  <n-divider class="soft-divider" />
                </div>
              </n-gi>
            </n-grid>
            <div class="principles-section" data-aos="fade-up">
              <n-grid :cols="gridCols" x-gap="24" y-gap="24">
                <n-gi v-for="(card, index) in principles" :key="index">
                  <n-card class="glass-card principle-card" hoverable>
                    <div class="principle-icon">
                      <n-icon size="40" :component="card.icon" />
                    </div>
                    <h4 class="principle-title">{{ card.title }}</h4>
                    <p class="principle-text">{{ card.text }}</p>
                  </n-card>
                </n-gi>
              </n-grid>
            </div>
            <div class="footer-date">
              <n-icon :component="CalendarOutline" size="18" />
              <span>{{ $t('isw_page.created_card_text') }} {{ year }}</span>
            </div>
          </n-card>
        </div>
      </section>

      <!-- MINI JUEGO -->
      <section class="game-section">
        <div class="container">
          <h2 class="section-title" data-aos="fade-up">
            <n-icon :component="GameControllerOutline" class="title-icon" />
            {{ $t('isw_page.mini_game_text') }}
          </h2>
          <div class="game-wrapper" data-aos="flip-left" data-aos-delay="200">
            <iframe :src="$t('isw_page.mini_game_url')" class="game-iframe" frameborder="0" allowfullscreen
              title="Mini Juego Interactivo" sandbox="allow-scripts allow-popups allow-forms"></iframe>
          </div>
        </div>
      </section>

      <!-- SWEBOK - TEMARIO OFICIAL -->
      <section class="swebok-section">
        <div class="container">
          <n-card class="glass-card swebok-card" hoverable data-aos="fade-up">
            <template #header>
              <h2 class="section-title">
                <n-icon :component="BookOutline" class="title-icon" />
                {{ $t('isw_page.swebok_tittle') }}
              </h2>
            </template>

            <n-collapse accordion class="swebok-collapse">
              <n-collapse-item v-for="(item, index) in swebokItems" :key="index" :title="item.title"
                :name="`item-${index}`">
                <p class="collapse-text">{{ item.text }}</p>
              </n-collapse-item>
            </n-collapse>

            <n-divider class="soft-divider" />

            <div class="pdf-container">
              <PdfViewer :pdfPath="$t('isw_page.swebok_url')" />
            </div>

            <template #footer>
              <small class="footer-text">
                {{ $t('isw_page.last_edited_in') }} {{ year }}
              </small>
            </template>
          </n-card>
        </div>
      </section>

      <!-- METODOLOGÍAS - TEMARIO INTERACTIVO -->
      <section class="methodologies-section">
        <div class="container">
          <h2 class="section-title" data-aos="fade-up">Metodologías de Desarrollo</h2>

          <n-tabs type="line" animated class="method-tabs" data-aos="fade-up" data-aos-delay="100">
            <n-tab-pane v-for="method in methodologies" :key="method.key" :name="method.key" :tab="method.title">
              <n-card class="method-card glass-card" hoverable>
                <n-grid :cols="12" x-gap="32" y-gap="16">
                  <n-gi :span="4">
                    <div :class="`method-icon ${method.key}`">
                      <n-icon size="60" color="white">
                        <component :is="method.icon" />
                      </n-icon>
                    </div>
                  </n-gi>
                  <n-gi :span="8">
                    <div class="method-body">
                      <h3>{{ method.title }}</h3>
                      <p>{{ method.description }}</p>
                      <n-space class="method-tags" :size="8">
                        <n-tag v-for="tag in method.tags" :key="tag.label" :type="tag.type" size="small" round>
                          {{ tag.label }}
                        </n-tag>
                      </n-space>
                      <!-- BOTÓN LEER MÁS -->
                      <n-button type="primary" ghost size="small" class="mt-3" @click="openModal(method)">
                        Leer más
                      </n-button>
                    </div>
                  </n-gi>
                </n-grid>
              </n-card>
            </n-tab-pane>
          </n-tabs>
        </div>
      </section>

      <!-- MODAL DINÁMICO -->
      <n-modal v-model:show="showModal" preset="dialog" :title="selectedMethod?.title" :segmented="false"
        :closable="true" class="method-modal" :style="{ maxWidth: '800px', width: '90%' }" @close="showModal = false">
        <div v-if="selectedMethod" class="modal-content">
          <div :class="`modal-icon ${selectedMethod.key}`">
            <n-icon size="60" color="white">
              <component :is="selectedMethod.icon" />
            </n-icon>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">{{ selectedMethod.title }}</h3>
          <p class="text-gray-600 leading-relaxed mb-4">{{ selectedMethod.longDescription }}</p>

          <n-collapse v-if="selectedMethod.steps?.length" class="mt-4">
            <n-collapse-item title="Pasos clave" name="steps">
              <n-ol>
                <n-li v-for="(step, i) in selectedMethod.steps" :key="i" class="mb-2">
                  <strong>{{ step.title }}:</strong> {{ step.desc }}
                </n-li>
              </n-ol>
            </n-collapse-item>
          </n-collapse>

          <n-space class="method-tags mt-4" :size="8">
            <n-tag v-for="tag in selectedMethod.tags" :key="tag.label" :type="tag.type" size="small" round>
              {{ tag.label }}
            </n-tag>
          </n-space>

          <n-button v-if="selectedMethod.link" type="primary" ghost class="mt-5"
            @click="openExternalLink(selectedMethod.link)">
            Ver documentación oficial
          </n-button>
        </div>
      </n-modal>
    </div>

    <!-- === AQUÍ SE CARGA LA VISTA DE ARQUITECTURA === -->
    <div class="submodule">
      <router-view />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, h } from 'vue'
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {
  CalendarOutline,
  GameControllerOutline,
  BookOutline,
  RocketOutline,
  ConstructOutline,
  ShieldCheckmarkOutline,
  GitBranchOutline,
  LogoIonic,
  LogoBuffer,
  LogoOctocat,
  LogoDocker,
  LogoTableau,
  LogoGithub
} from '@vicons/ionicons5'

import PdfViewer from '@/components/PdfViewer.vue'

// Iconos personalizados
const icons = {
  agile: LogoIonic,
  scrum: LogoBuffer,
  waterfall: LogoOctocat,
  devops: LogoDocker,
  kanban: LogoTableau,
  lean: LogoGithub
}

const { t } = useI18n()
const year = ref(new Date().getFullYear())
const gridCols = ref(3)

// SWEBOK Items
const swebokItems = computed(() => [
  { title: t('isw_page.swebok_list_1'), text: t('isw_page.swebok_list_1') },
  { title: t('isw_page.swebok_list_2'), text: t('isw_page.swebok_list_2') },
  { title: t('isw_page.swebok_list_3'), text: t('isw_page.swebok_list_3') },
  { title: t('isw_page.swebok_list_4'), text: t('isw_page.swebok_list_4') },
  { title: t('isw_page.swebok_list_5'), text: t('isw_page.swebok_list_5') },
  { title: t('isw_page.swebok_list_6'), text: t('isw_page.swebok_list_6') },
  { title: t('isw_page.swebok_list_7'), text: t('isw_page.swebok_list_7') },
  { title: t('isw_page.swebok_list_8'), text: t('isw_page.swebok_list_8') },
  { title: t('isw_page.swebok_list_9'), text: t('isw_page.swebok_list_9') }
])

const principles = computed(() => [
  {
    icon: RocketOutline,
    title: t('isw_page.principle1_title'),
    text: t('isw_page.principle1_desc')
  },
  {
    icon: ConstructOutline,
    title: t('isw_page.principle2_title'),
    text: t('isw_page.principle2_desc')
  },
  {
    icon: ShieldCheckmarkOutline,
    title: t('isw_page.principle3_title'),
    text: t('isw_page.principle3_desc')
  },
  {
    icon: GitBranchOutline,
    title: t('isw_page.principle4_title'),
    text: t('isw_page.principle4_desc')
  }
])

// === METODOLOGÍAS ===
const methodologies = computed(() => [
  {
    key: 'agile',
    title: t('isw_page.agile_title'),
    description: t('isw_page.agile_description'),
    icon: icons.agile,
    tags: [
      { label: t('isw_page.tag1'), type: 'success' },
      { label: t('isw_page.tag2'), type: 'info' },
      { label: t('isw_page.tag3'), type: 'warning' }
    ]
  },
  {
    key: 'scrum',
    title: t('isw_page.scrum_title'),
    description: t('isw_page.scrum_description'),
    icon: icons.scrum,
    tags: [
      { label: t('isw_page.tag4'), type: 'primary' },
      { label: t('isw_page.tag5'), type: 'success' },
      { label: t('isw_page.tag6'), type: 'info' }
    ]
  },
  {
    key: 'waterfall',
    title: t('isw_page.waterfall_title'),
    description: t('isw_page.waterfall_description'),
    icon: icons.waterfall,
    tags: [
      { label: 'Secuencial', type: 'default' },
      { label: 'Documentado', type: 'warning' },
      { label: 'Fases', type: 'info' }
    ]
  },
  {
    key: 'devops',
    title: t('isw_page.devops_title'),
    description: t('isw_page.devops_description'),
    icon: icons.devops,
    tags: [
      { label: 'CI/CD', type: 'error' },
      { label: 'Automatización', type: 'success' },
      { label: 'Colaboración', type: 'warning' }
    ]
  },
  {
    key: 'kanban',
    title: t('isw_page.kanban_title'),
    description: t('isw_page.kanban_description'),
    icon: icons.kanban,
    tags: [
      { label: 'Tablero', type: 'primary' },
      { label: 'Flujo', type: 'info' },
      { label: 'Límites', type: 'success' }
    ]
  },
  {
    key: 'lean',
    title: t('isw_page.lean_title'),
    description: t('isw_page.lean_description'),
    icon: icons.lean,
    tags: [
      { label: 'Valor', type: 'warning' },
      { label: 'Desperdicio', type: 'error' },
      { label: 'Mejora', type: 'info' }
    ]
  }
])

// === MODAL ===
const showModal = ref(false)
const selectedMethod = ref<any>(null)

const openModal = (method: any) => {
  selectedMethod.value = {
    ...method,
    longDescription: getLongDescription(method.key),
    steps: getSteps(method.key),
    link: getLink(method.key)
  }
  showModal.value = true
}

const openExternalLink = (url: string) => {
  window.open(url, '_blank')
}

const getLongDescription = (key: string) => {
  const desc: Record<string, string> = {
    agile: 'Agile es una filosofía de desarrollo que promueve entregas frecuentes, colaboración con el cliente y adaptabilidad al cambio. Se basa en el Manifiesto Ágil (2001) y prioriza individuos e interacciones sobre procesos y herramientas.',
    scrum: 'Scrum es un framework ágil que organiza el trabajo en sprints de 2-4 semanas. Incluye roles (Product Owner, Scrum Master, Equipo), eventos (Daily, Sprint Planning, Review, Retro) y artefactos (Product Backlog, Sprint Backlog, Incremento).',
    waterfall: 'Modelo tradicional secuencial donde cada fase (requisitos, diseño, implementación, pruebas, despliegue, mantenimiento) debe completarse antes de la siguiente. Ideal para proyectos con requisitos estables.',
    devops: 'Cultura y conjunto de prácticas que unifican desarrollo (Dev) y operaciones (Ops) para acelerar entregas con calidad. Incluye CI/CD, infraestructura como código, monitoreo continuo y automatización.',
    kanban: 'Método visual de gestión de flujo de trabajo. Usa tableros con columnas (To Do, Doing, Done) y límites WIP para optimizar el flujo y reducir cuellos de botella.',
    lean: 'Enfoque que maximiza el valor para el cliente eliminando desperdicios. Aplicado al software: eliminar funcionalidades innecesarias, reducir esperas, optimizar procesos.'
  }
  return desc[key] || 'Sin descripción extendida.'
}

const getSteps = (key: string) => {
  const steps: Record<string, Array<{ title: string; desc: string }>> = {
    scrum: [
      { title: 'Sprint Planning', desc: 'Definir qué se hará en el sprint.' },
      { title: 'Daily Scrum', desc: 'Reunión diaria de 15 min para sincronizar.' },
      { title: 'Sprint Review', desc: 'Mostrar el incremento al cliente.' },
      { title: 'Sprint Retrospective', desc: 'Mejorar el proceso.' }
    ],
    kanban: [
      { title: 'Visualizar flujo', desc: 'Tablero con columnas claras.' },
      { title: 'Limitar WIP', desc: 'No más tareas de las que se pueden manejar.' },
      { title: 'Medir Lead Time', desc: 'Tiempo desde idea hasta entrega.' }
    ],
    devops: [
      { title: 'CI/CD', desc: 'Integración y despliegue continuo.' },
      { title: 'IaC', desc: 'Infraestructura como código.' },
      { title: 'Monitoreo', desc: 'Observabilidad en producción.' }
    ]
  }
  return steps[key] || []
}

const getLink = (key: string) => {
  const links: Record<string, string> = {
    agile: 'https://agilemanifesto.org',
    scrum: 'https://scrumguides.org',
    waterfall: 'https://en.wikipedia.org/wiki/Waterfall_model',
    devops: 'https://aws.amazon.com/devops/',
    kanban: 'https://www.atlassian.com/agile/kanban',
    lean: 'https://www.lean.org'
  }
  return links[key]
}

// Responsive Grid
watch(
  () => window.innerWidth,
  (width) => {
    if (width < 640) gridCols.value = 1
    else if (width < 992) gridCols.value = 2
    else gridCols.value = 3
  },
  { immediate: true }
)

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out-quart',
    once: true
  })
})
</script>

<style scoped>

/* === FUENTES PREMIUM === */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

* {
  font-family: 'Inter', sans-serif;
}

/* === FONDO GLOBAL === */
body {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  min-height: 100vh;
}

/* === CONTENEDOR === */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* === HERO === */
.hero-section {
  height: 80vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 0 !important;
  overflow: hidden;
}

.isw-container { min-height: 100vh; }
.isw-home { padding: 2rem; max-width: 1200px; margin: 0 auto; }

.hero-bg {
  position: absolute;
  inset: 0;
  background: url('/assets/images/ingenieriadesoftware.jpg') center/cover no-repeat;
}

.overlay {
  background: linear-gradient(135deg, rgba(15, 31, 57, 0.92), rgba(30, 41, 59, 0.85));
  position: absolute;
  inset: 0;
}

.hero-center {
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.hero-content {
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
}

.hero-tag {
  background: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  display: inline-block;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(90deg, #114177, #00acdf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1.5rem 0;
}

.hero-text {
  font-size: 1.25rem;
  color: #cbd5e1;
  line-height: 1.8;
  margin-top: 1rem;
}

/* === PRINCIPLES SECTION === */
.principles-section {
  margin-top: 3rem;
}

.principle-card {
  text-align: center;
  padding: 2rem 1.5rem;
  min-height: 260px;
}

.principle-icon {
  background: linear-gradient(135deg, #114177, #3b82f6);
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.principle-title {
  font-weight: 700;
  color: #0f1f39;
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
}

.principle-text {
  color: #94a3b8;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* === GLASS CARD === */
.glass-card {
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  transition: all 0.4s ease;
  overflow: hidden;
}

.glass-card:hover {
  transform: translateY(-10px);
  border-color: #60a5fa;
}

/* === INTRO CARD === */
.intro-image {
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.intro-image :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.intro-image:hover :deep(img) {
  transform: scale(1.08);
}

.intro-body h3 {
  color: #1e293b;
  font-weight: 700;
  font-size: 1.7rem;
  margin-bottom: 0.8rem;
}

.intro-body p {
  color: #475569;
  line-height: 1.7;
  font-size: 1.05rem;
}

.footer-date {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #94a3b8;
  font-size: 0.9rem;
}

/* === GAME SECTION === */
.game-section {
  padding: 90px 0;
  text-align: center;
}

.game-wrapper {
  max-width: 1000px;
  margin: 2.5rem auto;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
}

.game-iframe {
  width: 100%;
  height: 540px;
  border: none;
}

/* === SWEBOK === */
.swebok-collapse :deep(.n-collapse-item__header) {
  background: rgba(96, 165, 250, 0.1);
  border-radius: 12px;
  margin-bottom: 8px;
  font-weight: 600;
  color: #e2e8f0;
}

.collapse-text {
  color: #94a3b8;
  line-height: 1.7;
  padding: 0.5rem 0;
}

.soft-divider {
  background: linear-gradient(90deg, transparent, #00acdf, transparent);
  height: 2px;
  margin: 1.8rem 0;
}

.pdf-container {
  margin-top: 1.5rem;
  text-align: center;
}

/* === METODOLOGÍAS === */
.method-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.method-icon.agile {
  background: linear-gradient(135deg, #3498db, #2980b9);
}

.method-icon.scrum {
  background: linear-gradient(135deg, #8e44ad, #9b59b6);
}

.method-icon.waterfall {
  background: linear-gradient(135deg, #74b9ff, #0984e3);
}

.method-icon.devops {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
}

.method-icon.kanban {
  background: linear-gradient(135deg, #f39c12, #e67e22);
}

.method-icon.lean {
  background: linear-gradient(135deg, #27ae60, #1abc9c);
}

.method-body h3 {
  color: #1e293b;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
}

.method-body p {
  color: #475569;
  line-height: 1.7;
  margin-bottom: 1rem;
}

/* === TÍTULOS === */
.section-title {
  font-size: 2.4rem;
  font-weight: 700;
  color: black;
  text-align: center;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.title-icon {
  color: #60a5fa;
  font-size: 2rem;
}

.methodologies-section {
  margin-bottom: 50px;
}

/* === MODAL === */
.method-modal :deep(.n-dialog) {
  background: rgba(255, 255, 255, 0.12) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.method-modal :deep(.n-dialog__title) {
  font-weight: 700;
  color: #1e293b;
  font-size: 1.5rem;
}

.modal-icon {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.modal-icon.agile {
  background: linear-gradient(135deg, #3498db, #2980b9);
}

.modal-icon.scrum {
  background: linear-gradient(135deg, #8e44ad, #9b59b6);
}

.modal-icon.waterfall {
  background: linear-gradient(135deg, #74b9ff, #0984e3);
}

.modal-icon.devops {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
}

.modal-icon.kanban {
  background: linear-gradient(135deg, #f39c12, #e67e22);
}

.modal-icon.lean {
  background: linear-gradient(135deg, #27ae60, #1abc9c);
}

.modal-content {
  text-align: center;
  padding: 1rem;
}

/* === RESPONSIVE === */
@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .game-iframe {
    height: 480px;
  }
}

@media (max-width: 640px) {
  .hero-section {
    height: 70vh;
    min-height: 500px;
  }

  .hero-title {
    font-size: 2.3rem;
  }

  .hero-text {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .game-iframe {
    height: 380px;
  }
}
</style>