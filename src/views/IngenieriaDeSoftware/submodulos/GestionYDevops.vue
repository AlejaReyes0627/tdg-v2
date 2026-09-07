<template>
  <div class="page-wrapper">
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-center">
        <div class="container hero-content text-center">
          <div class="hero-badge" data-aos="fade-down">
            <span class="badge-dot"></span>
            {{ $t('devops_page.badge') }}
          </div>
          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
            {{ $t('devops_page.hero_title') }}
            <span class="hero-title-accent">{{ $t('devops_page.hero_accent') }}</span>
          </h1>
          <p class="hero-text" data-aos="fade-up" data-aos-delay="200">
            {{ $t('devops_page.hero_text') }}
          </p>
        </div>
      </div>
    </section>

    <!-- CONTROL DE VERSIONES (SCM) -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip">
            <n-icon :component="GitBranchOutline" size="14" />
            Gestión de Configuración
          </div>
          <h2 class="section-title">Estrategias de Ramificación en Git</h2>
          <p class="section-subtitle">Aprende cómo los equipos de desarrollo organizan el trabajo colaborativo</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="glass-card strategy-card" data-aos="fade-right">
            <div class="card-header-icon"><n-icon :component="GitNetworkOutline" size="32" /></div>
            <h3>Trunk-Based Development</h3>
            <p>Los desarrolladores fusionan cambios pequeños y frecuentes directamente en la rama principal (`main`). Requiere pruebas automatizadas sólidas y CI/CD.</p>
            <div class="feature-tags">
              <n-tag type="success" round size="small">Entrega Rápida</n-tag>
              <n-tag type="info" round size="small">Conflictos Mínimos</n-tag>
              <n-tag type="warning" round size="small">Ideal para CI/CD</n-tag>
            </div>
            <div class="code-box mt-4">
              <code>git checkout main && git pull && git merge feature-branch</code>
            </div>
          </div>

          <div class="glass-card strategy-card" data-aos="fade-left">
            <div class="card-header-icon"><n-icon :component="GitBranchOutline" size="32" /></div>
            <h3>GitFlow Workflow</h3>
            <p>Modelo estructurado basado en ramas dedicadas: `main`, `develop`, `feature/*`, `release/*` y `hotfix/*`. Ideal para ciclos de versión tradicionales.</p>
            <div class="feature-tags">
              <n-tag type="primary" round size="small">Estructurado</n-tag>
              <n-tag type="default" round size="small">Versiones Formales</n-tag>
              <n-tag type="error" round size="small">Hotfixes Aislados</n-tag>
            </div>
            <div class="code-box mt-4">
              <code>git flow feature start nueva-caracteristica</code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PIPELINE CI/CD VISUAL -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-green">
            <n-icon :component="SyncOutline" size="14" />
            Automatización Continua
          </div>
          <h2 class="section-title">El Pipeline de CI/CD</h2>
          <p class="section-subtitle">Desde que haces push en Git hasta la producción en la nube</p>
        </div>

        <div class="pipeline-flow" data-aos="zoom-in">
          <div class="pipeline-step">
            <div class="step-number">1</div>
            <h4>1. Commit & Push</h4>
            <p>El desarrollador envía código al repositorio Git.</p>
          </div>
          <div class="pipeline-arrow">➔</div>
          <div class="pipeline-step">
            <div class="step-number">2</div>
            <h4>2. Build & Lint</h4>
            <p>El servidor CI compila el código y verifica sintaxis.</p>
          </div>
          <div class="pipeline-arrow">➔</div>
          <div class="pipeline-step">
            <div class="step-number">3</div>
            <h4>3. Automated Tests</h4>
            <p>Se ejecutan pruebas unitarias y de integración.</p>
          </div>
          <div class="pipeline-arrow">➔</div>
          <div class="pipeline-step">
            <div class="step-number">4</div>
            <h4>4. Docker Image</h4>
            <p>Se empaqueta la app en una imagen de contenedor.</p>
          </div>
          <div class="pipeline-arrow">➔</div>
          <div class="pipeline-step step-deploy">
            <div class="step-number">5</div>
            <h4>5. CD Deploy</h4>
            <p>Despliegue automático a producción (Cloud/Kubernetes).</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONFIGURACIÓN PRÁCTICA: GITHUB ACTIONS & DOCKER -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <h2 class="section-title">Archivos de Configuración Reales</h2>
          <p class="section-subtitle">Aprende la sintaxis estándar utilizada en la industria de software</p>
        </div>

        <n-tabs type="segment" animated class="devops-tabs" data-aos="fade-up">
          <n-tab-pane name="actions" tab="GitHub Actions Workflow">
            <div class="glass-card tab-content">
              <h3>Workflow de Integración Continua (.github/workflows/ci.yml)</h3>
              <p>Este archivo YAML automatiza las pruebas cada vez que se envía un Pull Request a `main`.</p>
              <div class="code-box-large">
                <pre><code>name: CI/CD Pipeline REDA

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 22
      - run: npm ci
      - run: npm run build
      - run: npm test</code></pre>
              </div>
            </div>
          </n-tab-pane>

          <n-tab-pane name="docker" tab="Dockerfile de Producción">
            <div class="glass-card tab-content">
              <h3>Empaquetado Multietapa en Docker</h3>
              <p>Crea una imagen optimizada y liviana basada en Nginx para servir la aplicación web.</p>
              <div class="code-box-large">
                <pre><code># Etapa 1: Compilación
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: Servidor de producción
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]</code></pre>
              </div>
            </div>
          </n-tab-pane>
        </n-tabs>
      </div>
    </section>

    <!-- PREGUNTAS Y EVALUACIÓN -->
    <section class="content-section section-alt">
      <div class="container max-w-3xl mx-auto">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-purple">
            <n-icon :component="HelpCircleOutline" size="14" />
            Evaluación para Estudiantes
          </div>
          <h2 class="section-title">Preguntas Frecuentes sobre DevOps</h2>
        </div>

        <div class="glass-card" data-aos="fade-up">
          <n-collapse accordion default-expanded-names="1">
            <n-collapse-item title="1. ¿Cuál es la diferencia entre Integración Continua (CI) y Despliegue Continuo (CD)?" name="1">
              <p class="text-slate-300"><strong>CI (Continuous Integration):</strong> Consiste en integrar y probar cambios de código de forma automática varias veces al día.<br><strong>CD (Continuous Deployment):</strong> Automatiza la liberación del código probado directamente a producción sin intervención manual.</p>
            </n-collapse-item>
            <n-collapse-item title="2. ¿Por qué usar Docker en lugar de máquinas virtuales tradicionales?" name="2">
              <p class="text-slate-300">Docker comparte el kernel del sistema operativo anfitrión, ocupando megabytes en lugar de gigabytes y arrancando en segundos, lo que elimina el clásico problema "en mi máquina sí funciona".</p>
            </n-collapse-item>
          </n-collapse>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import { GitBranchOutline, GitNetworkOutline, SyncOutline, HelpCircleOutline } from '@vicons/ionicons5';

const { t } = useI18n();

onMounted(() => {
  AOS.init({ duration: 800, once: true });
});
</script>

<style scoped>
.page-wrapper { color: #e2e8f0; min-height: 80vh; }
.hero-section {
  position: relative;
  padding: 90px 0 60px;
  background: linear-gradient(135deg, rgba(15, 31, 57, 0.95), rgba(5, 16, 36, 0.98));
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.4);
  border-radius: 20px;
  color: #3b82f6;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 16px;
}
.badge-dot { width: 8px; height: 8px; background: #3b82f6; border-radius: 50%; }
.hero-title { font-size: 3rem; font-weight: 800; margin-bottom: 16px; }
.hero-title-accent {
  background: linear-gradient(90deg, #3b82f6, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-text { max-width: 720px; margin: 0 auto; color: #94a3b8; font-size: 1.15rem; line-height: 1.6; }
.content-section { padding: 70px 0; }
.section-alt { background: rgba(0, 0, 0, 0.2); }
.section-header { margin-bottom: 48px; }
.section-chip {
  display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 12px;
  background: rgba(59, 130, 246, 0.15); color: #3b82f6; font-size: 0.8rem; font-weight: 600; margin-bottom: 8px;
}
.chip-green { background: rgba(16, 185, 129, 0.15); color: #10b981; }
.chip-purple { background: rgba(139, 92, 246, 0.15); color: #a78bfa; }
.section-title { font-size: 2.2rem; font-weight: 700; color: #ffffff; margin-bottom: 8px; }
.section-subtitle { color: #94a3b8; font-size: 1.05rem; }
.glass-card {
  background: rgba(255, 255, 255, 0.04); backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 32px;
}
.card-header-icon { color: #3b82f6; margin-bottom: 12px; }
.strategy-card h3 { font-size: 1.35rem; color: #fff; margin-bottom: 8px; }
.strategy-card p { color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px; }
.feature-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.code-box { background: #090d16; padding: 12px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); }
.code-box code { color: #38bdf8; font-family: monospace; font-size: 0.82rem; }
.code-box-large { background: #090d16; padding: 18px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); margin-top: 16px; }
.code-box-large code { color: #38bdf8; font-family: monospace; font-size: 0.9rem; }

/* PIPELINE VISUAL */
.pipeline-flow { display: flex; align-items: center; justify-content: space-between; gap: 12px; overflow-x: auto; padding: 20px 0; }
.pipeline-step { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 16px; padding: 20px; min-width: 180px; text-align: center; }
.step-number { width: 32px; height: 32px; background: #3b82f6; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; margin: 0 auto 12px; }
.pipeline-step h4 { font-size: 1rem; color: #fff; margin-bottom: 6px; }
.pipeline-step p { color: #94a3b8; font-size: 0.82rem; line-height: 1.4; }
.pipeline-arrow { color: #3b82f6; font-size: 1.5rem; font-weight: 700; }
.step-deploy { border-color: #10b981; }
.step-deploy .step-number { background: #10b981; }
</style>
