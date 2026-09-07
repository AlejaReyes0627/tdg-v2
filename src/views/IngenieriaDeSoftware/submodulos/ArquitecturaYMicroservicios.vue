<template>
  <div class="page-wrapper">

    <!-- ═══════════════════════════════════════════════════════
         HERO
    ════════════════════════════════════════════════════════════ -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-glow"></div>

      <div class="hero-center">
        <div class="container hero-content">
          <div class="hero-badge" data-aos="fade-down" data-aos-delay="100">
            <span class="badge-dot"></span>
            {{ $t('architect_page.badge') }}
          </div>

          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
            {{ $t('architect_page.hero_title') }}
            <span class="hero-title-accent">{{ $t('architect_page.hero_accent') }}</span>
          </h1>

          <p class="hero-text" data-aos="fade-up" data-aos-delay="300">
            {{ $t('architect_page.hero_text') }}
          </p>

          <div class="hero-cta" data-aos="fade-up" data-aos-delay="400">
            <button class="cta-btn" @click="scrollToSection('patterns')">
              {{ $t('architect_page.btn_explore') }}
              <n-icon :component="ArrowDownOutline" size="18" />
            </button>
          </div>
        </div>
      </div>

      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         PATRONES DE ARQUITECTURA
    ════════════════════════════════════════════════════════════ -->
    <section id="patterns" class="content-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <div class="section-chip">
            <n-icon :component="GitNetworkOutline" size="14" />
            {{ $t('architect_page.patterns_chip') }}
          </div>
          <h2 class="section-title">{{ $t('architect_page.patterns_title') }}</h2>
          <p class="section-subtitle">{{ $t('architect_page.patterns_subtitle') }}</p>
        </div>

        <div class="patterns-grid">
          <div
            v-for="(patron, index) in patrones"
            :key="index"
            class="pattern-card glass-card"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 100"
          >
            <div class="pattern-icon-wrapper">
              <div class="pattern-icon-bg" :style="{ background: patron.gradient }"></div>
              <n-icon size="46" color="white" :component="patron.icon" class="pattern-icon" />
              <div class="icon-glow" :style="{ background: patron.gradient + '60' }"></div>
            </div>

            <h3 class="pattern-title">{{ patron.nombre }}</h3>
            <p class="pattern-desc">{{ patron.descripcion }}</p>

            <div class="tag-row">
              <span
                v-for="tag in patron.tags"
                :key="tag"
                class="tag-badge"
                :class="`tag-${patron.tagType}`"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         MICROSERVICIOS
    ════════════════════════════════════════════════════════════ -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <div class="section-chip chip-violet">
            <n-icon :component="CubeOutline" size="14" />
            Arquitectura Distribuida
          </div>
          <h2 class="section-title">Microservicios: Conceptos Clave</h2>
          <p class="section-subtitle">Desacopla, escala y evoluciona tu sistema</p>
        </div>

        <div class="micro-grid" data-aos="fade-up" data-aos-delay="100">
          <div
            v-for="(micro, i) in microservicios"
            :key="i"
            class="micro-card glass-card"
            :data-aos="i === 1 ? 'zoom-in' : 'fade-up'"
            :data-aos-delay="i * 150"
          >
            <!-- Accent top bar -->
            <div class="micro-accent-bar" :style="{ background: micro.color }"></div>

            <div class="micro-header">
              <div class="micro-icon-wrapper" :style="{ background: micro.color + '1a', border: `1px solid ${micro.color}40` }">
                <n-icon size="36" :component="micro.icon" :color="micro.color" />
              </div>
              <div>
                <span class="micro-label">Concepto {{ i + 1 }}</span>
                <h3 class="micro-title">{{ micro.titulo }}</h3>
              </div>
            </div>

            <p class="micro-desc">{{ micro.descripcion }}</p>

            <n-collapse class="micro-collapse" accordion>
              <n-collapse-item title="Ver detalles">
                <div class="details-list">
                  <div v-for="(detalle, j) in micro.detalles" :key="j" class="detail-item">
                    <n-icon :component="CheckmarkCircleOutline" class="detail-icon" size="16" />
                    {{ detalle }}
                  </div>
                </div>
              </n-collapse-item>
            </n-collapse>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         COMPARACIÓN MONOLITO VS MICROSERVICIOS
    ════════════════════════════════════════════════════════════ -->
    <section class="content-section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <div class="section-chip chip-green">
            <n-icon :component="GitCompareOutline" size="14" />
            Comparativa
          </div>
          <h2 class="section-title">Monolito vs Microservicios</h2>
          <p class="section-subtitle">Elige la arquitectura adecuada para tu proyecto</p>
        </div>

        <div class="comparison-card glass-card" data-aos="fade-up" data-aos-delay="100">
          <n-tabs type="line" animated class="comparison-tabs">
            <n-tab-pane name="monolito" tab="🏛️ Monolito">
              <div class="comparison-content">
                <div class="comp-img-wrapper">
                  <img src="/assets/images/Monolith.png" alt="Arquitectura monolítica" class="comparison-img" />
                </div>
                <div class="pro-con-list">
                  <div class="pro-item">
                    <n-icon :component="CheckmarkCircleOutline" size="18" class="icon-success" />
                    <span>Fácil de desarrollar y desplegar inicialmente</span>
                  </div>
                  <div class="pro-item">
                    <n-icon :component="CheckmarkCircleOutline" size="18" class="icon-success" />
                    <span>Menor latencia en comunicación interna</span>
                  </div>
                  <div class="con-item">
                    <n-icon :component="CloseCircleOutline" size="18" class="icon-error" />
                    <span>Difícil de escalar componentes individualmente</span>
                  </div>
                  <div class="con-item">
                    <n-icon :component="CloseCircleOutline" size="18" class="icon-error" />
                    <span>Un fallo puede afectar todo el sistema</span>
                  </div>
                </div>
              </div>
            </n-tab-pane>
            <n-tab-pane name="microservicios" tab="⚙️ Microservicios">
              <div class="comparison-content">
                <div class="comp-img-wrapper">
                  <img src="/assets/images/microservices.png" alt="Arquitectura de microservicios" class="comparison-img" />
                </div>
                <div class="pro-con-list">
                  <div class="pro-item">
                    <n-icon :component="CheckmarkCircleOutline" size="18" class="icon-success" />
                    <span>Escalabilidad independiente por servicio</span>
                  </div>
                  <div class="pro-item">
                    <n-icon :component="CheckmarkCircleOutline" size="18" class="icon-success" />
                    <span>Libertad de tecnología por servicio</span>
                  </div>
                  <div class="con-item">
                    <n-icon :component="CloseCircleOutline" size="18" class="icon-error" />
                    <span>Mayor complejidad en comunicación</span>
                  </div>
                  <div class="con-item">
                    <n-icon :component="CloseCircleOutline" size="18" class="icon-error" />
                    <span>Gestión de datos distribuida más compleja</span>
                  </div>
                </div>
              </div>
            </n-tab-pane>
          </n-tabs>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         PATRONES DE COMUNICACIÓN
    ════════════════════════════════════════════════════════════ -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <div class="section-chip chip-pink">
            <n-icon :component="ChatbubblesOutline" size="14" />
            Comunicación
          </div>
          <h2 class="section-title">Patrones de Comunicación</h2>
          <p class="section-subtitle">Síncrono, asíncrono y más allá</p>
        </div>

        <div class="timeline-wrapper" data-aos="fade-up" data-aos-delay="100">
          <n-timeline class="communication-timeline">
            <n-timeline-item
              v-for="(patron, i) in comunicacion"
              :key="i"
              :type="patron.type"
              :title="patron.titulo"
              :content="patron.descripcion"
              class="timeline-item"
              :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'"
              :data-aos-delay="i * 120"
            >
              <template #icon>
                <div class="timeline-icon-wrapper" :class="`tl-${patron.type}`">
                  <n-icon size="22" :component="patron.icon" />
                </div>
              </template>
            </n-timeline-item>
          </n-timeline>
        </div>
      </div>
    </section>

    <!-- PATRONES DE RESILIENCIA Y CQRS -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-green">
            <n-icon :component="GitNetworkOutline" size="14" />
            Resiliencia en Microservicios
          </div>
          <h2 class="section-title">Circuit Breaker & CQRS</h2>
          <p class="section-subtitle">Garantiza la tolerancia a fallos y optimiza la lectura/escritura de datos</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="glass-card" data-aos="fade-right">
            <h3>⚡ Patrón Circuit Breaker (Cortacircuitos)</h3>
            <p class="text-slate-300">Evita que un fallo en un servicio remoto provoque un colapso en cadena en todo el sistema. Maneja 3 estados: <strong>Closed</strong> (Normal), <strong>Open</strong> (Fallo detectado, bloquea llamadas) y <strong>Half-Open</strong> (Prueba recuperación).</p>
            <div class="code-box-large mt-3">
              <code>// Ejemplo: Estado Open -> Retorna fallback rápido sin saturar la red</code>
            </div>
          </div>

          <div class="glass-card" data-aos="fade-left">
            <h3>🔀 CQRS (Command Query Responsibility Segregation)</h3>
            <p class="text-slate-300">Separa las operaciones de escritura (Commands) de las de lectura (Queries) en modelos de datos independientes para lograr máxima escalabilidad horizontal.</p>
            <div class="code-box-large mt-3">
              <code>// Command API: POST /orders -> BD relacional (Transaccional)
// Query API: GET /orders/stats -> BD NoSQL/Elastic (Cacheado)</code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AUTOEVALUACIÓN INTERACTIVA -->
    <section class="content-section section-alt">
      <div class="container max-w-3xl mx-auto">
        <div class="section-header text-center" data-aos="fade-up">
          <h2 class="section-title">Autoevaluación de Arquitectura de Software</h2>
        </div>

        <div class="glass-card" data-aos="fade-up">
          <n-collapse accordion default-expanded-names="1">
            <n-collapse-item title="1. ¿Cuándo es conveniente comenzar con una Arquitectura Monolítica?" name="1">
              <p class="text-slate-300">Al iniciar una startup o MVP donde los requerimientos aún están cambiando rápidamente, el equipo es pequeño y se busca validar el modelo de negocio con costos mínimos de infraestructura.</p>
            </n-collapse-item>
            <n-collapse-item title="2. ¿Qué rol cumple el API Gateway en una arquitectura distribuida?" name="2">
              <p class="text-slate-300">Actúa como fachada y punto único de entrada para los clientes web/móviles, encargándose del enrutamiento de peticiones, autenticación unificada, balanceo de carga y limitación de tasa (rate-limiting).</p>
            </n-collapse-item>
          </n-collapse>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  GitBranchOutline,
  CubeOutline,
  GitCompareOutline,
  ChatbubblesOutline,
  CheckmarkCircleOutline,
  CloseCircleOutline,
  ArrowDownOutline,
  GitNetworkOutline
} from '@vicons/ionicons5'

const gridCols = ref(3)

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const patrones = [
  {
    nombre: 'Capas (Layered)',
    descripcion: 'Divide la aplicación en capas: presentación, lógica de negocio y acceso a datos. Cada capa tiene responsabilidades bien definidas.',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    icon: GitBranchOutline,
    tags: ['Escalable', 'Mantenible'],
    tagType: 'indigo'
  },
  {
    nombre: 'MVC',
    descripcion: 'Modelo-Vista-Controlador. Separa datos, interfaz de usuario y lógica de control para mayor modularidad.',
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    icon: CubeOutline,
    tags: ['Web', 'Desktop'],
    tagType: 'pink'
  },
  {
    nombre: 'Event-Driven',
    descripcion: 'Los componentes se comunican mediante eventos asíncronos, permitiendo sistemas desacoplados y reactivos.',
    gradient: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
    icon: ChatbubblesOutline,
    tags: ['Reactivo', 'Escalable'],
    tagType: 'cyan'
  }
]

const microservicios = [
  {
    titulo: 'Desacoplamiento',
    descripcion: 'Cada servicio es independiente y se comunica con otros a través de APIs bien definidas.',
    icon: GitBranchOutline,
    color: '#6366f1',
    detalles: ['Tecnologías independientes por servicio', 'Despliegue autónomo', 'Equipo dedicado por servicio']
  },
  {
    titulo: 'API Gateway',
    descripcion: 'Punto único de entrada que enruta solicitudes a los microservicios correspondientes.',
    icon: CubeOutline,
    color: '#8b5cf6',
    detalles: ['Autenticación centralizada', 'Balanceo de carga', 'Rate limiting y throttling']
  },
  {
    titulo: 'Service Mesh',
    descripcion: 'Infraestructura dedicada para manejar la comunicación entre microservicios de forma segura.',
    icon: GitCompareOutline,
    color: '#ec4899',
    detalles: ['mTLS automático entre servicios', 'Observabilidad y trazabilidad', 'Resiliencia (retry, circuit breaker)']
  }
]

const comunicacion = [
  {
    titulo: 'REST / HTTP',
    descripcion: 'Comunicación síncrona estándar mediante endpoints HTTP con verbos semánticos (GET, POST, PUT, DELETE).',
    type: 'success',
    icon: CheckmarkCircleOutline
  },
  {
    titulo: 'gRPC',
    descripcion: 'Protocolo de alto rendimiento basado en HTTP/2 y Protocol Buffers. Ideal para comunicación interna de baja latencia.',
    type: 'info',
    icon: CheckmarkCircleOutline
  },
  {
    titulo: 'Message Queue (Kafka, RabbitMQ)',
    descripcion: 'Comunicación asíncrona y desacoplada mediante colas de mensajes. Permite tolerancia a fallos y escalabilidad masiva.',
    type: 'warning',
    icon: ChatbubblesOutline
  }
]

watch(() => window.innerWidth, (w) => {
  gridCols.value = w < 640 ? 1 : w < 1024 ? 2 : 3
}, { immediate: true })

onMounted(() => {
  AOS.init({ duration: 900, easing: 'ease-out-quart', once: true })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

/* ─────────────────────────────────────────  Variables  ───────────────────────────────────────── */
:root {
  --clr-bg:      #0a0f1e;
  --clr-surface: rgba(255,255,255,0.055);
  --clr-border:  rgba(255,255,255,0.10);
  --clr-text:    #e2e8f0;
  --clr-muted:   #94a3b8;
  --radius-lg:   20px;
  --radius-md:   14px;
  --radius-sm:   8px;
  --shadow-glow: 0 0 40px rgba(99,102,241,0.2);
  --shadow-card: 0 8px 32px rgba(0,0,0,0.35);
  --transition:  all 0.35s cubic-bezier(0.4,0,0.2,1);
}

/* Layout */
.page-wrapper { min-height: 100vh; }

.container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.glass-card {
  background: var(--clr-surface);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
}

/* ─────────────────────────────────────────  HERO  ───────────────────────────────────────── */
.hero-section {
  height: 88vh;
  min-height: 620px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: url('/assets/images/microservices-bg.jpg') center/cover no-repeat;
  filter: brightness(0.42) contrast(1.1);
  transform: scale(1.04);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(10,15,30,0.9), rgba(99,102,241,0.35), rgba(139,92,246,0.25));
}

.hero-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 55%, rgba(99,102,241,0.25), transparent 65%);
}

.hero-center {
  z-index: 2;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-content { max-width: 900px; padding: 0 1.5rem; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(99,102,241,0.18);
  border: 1px solid rgba(99,102,241,0.35);
  border-radius: 50px;
  padding: 7px 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #a5b4fc;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #818cf8;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.7); }
}

.hero-title {
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.15;
  margin: 0 0 1.2rem;
  display: block;
}

.hero-title-accent {
  display: block;
  background: linear-gradient(120deg, #a78bfa, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-text {
  font-size: 1.15rem;
  color: rgba(226,232,240,0.85);
  line-height: 1.75;
  max-width: 720px;
  margin: 0 auto 2rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 30px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-family: 'Inter', sans-serif;
  box-shadow: 0 10px 30px rgba(99,102,241,0.4);
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(99,102,241,0.5);
}

/* Floating shapes */
.floating-shapes { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
.shape { position: absolute; border-radius: 50%; background: rgba(139,92,246,0.12); filter: blur(50px); animation: float 7s ease-in-out infinite; }
.shape-1 { width: 240px; height: 240px; top: 15%; left: 5%;   animation-delay: 0s; }
.shape-2 { width: 180px; height: 180px; bottom: 20%; right: 8%; animation-delay: 2.5s; }
.shape-3 { width: 130px; height: 130px; top: 55%; left: 48%; animation-delay: 5s; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%       { transform: translateY(-22px) rotate(6deg); }
}

/* ─────────────────────────────────────────  Secciones  ───────────────────────────────────────── */
.content-section {
  padding: 88px 0;
}

.section-alt {
  background: rgba(15,23,42,0.5);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(59,130,246,0.12);
  border: 1px solid rgba(59,130,246,0.28);
  border-radius: 50px;
  padding: 6px 16px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #93c5fd;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.chip-violet { background: rgba(139,92,246,0.12); border-color: rgba(139,92,246,0.28); color: #c4b5fd; }
.chip-green  { background: rgba(16,185,129,0.12);  border-color: rgba(16,185,129,0.28); color: #6ee7b7; }
.chip-pink   { background: rgba(236,72,153,0.12);  border-color: rgba(236,72,153,0.28); color: #f9a8d4; }

.section-title {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  background: linear-gradient(120deg, #818cf8, #a78bfa, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.75rem;
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--clr-muted);
  margin: 0;
}

/* ─────────────────────────────────────────  Patrones  ───────────────────────────────────────── */
.patterns-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.pattern-card {
  padding: 2.5rem 2rem;
  text-align: center;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.pattern-card:hover {
  transform: translateY(-10px) scale(1.015);
  border-color: rgba(139,92,246,0.35);
  box-shadow: var(--shadow-glow), var(--shadow-card);
}

.pattern-icon-wrapper {
  position: relative;
  width: 96px;
  height: 96px;
  margin: 0 auto 1.5rem;
}

.pattern-icon-bg {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  box-shadow: 0 12px 30px rgba(0,0,0,0.3);
}

.pattern-icon {
  position: relative;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.icon-glow {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.6;
  z-index: 0;
  transition: opacity 0.35s ease;
}

.pattern-card:hover .icon-glow { opacity: 1; }

.pattern-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--clr-text);
  margin: 0 0 0.75rem;
}

.pattern-desc {
  color: var(--clr-muted);
  line-height: 1.7;
  font-size: 0.97rem;
  margin: 0 0 1.5rem;
}

.tag-row { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }

.tag-badge {
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
}

.tag-indigo { background: rgba(99,102,241,0.15); color: #a5b4fc; border: 1px solid rgba(99,102,241,0.3); }
.tag-pink   { background: rgba(236,72,153,0.15);  color: #f9a8d4; border: 1px solid rgba(236,72,153,0.3); }
.tag-cyan   { background: rgba(6,182,212,0.15);   color: #67e8f9; border: 1px solid rgba(6,182,212,0.3); }

/* ─────────────────────────────────────────  Microservicios  ───────────────────────────────────────── */
.micro-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.micro-card {
  padding: 1.8rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.micro-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-card);
}

.micro-accent-bar {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 3px;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.micro-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.micro-icon-wrapper {
  width: 56px;
  height: 56px;
  min-width: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.micro-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--clr-muted);
  display: block;
}

.micro-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--clr-text);
  margin: 4px 0 0;
}

.micro-desc {
  font-size: 0.92rem;
  color: var(--clr-muted);
  line-height: 1.7;
  margin: 0 0 1rem;
}

.micro-collapse :deep(.n-collapse-item__header) {
  color: var(--clr-text);
  font-weight: 600;
  font-size: 0.88rem;
}

.details-list { display: flex; flex-direction: column; gap: 8px; padding-top: 4px; }

.detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: var(--clr-muted);
}

.detail-icon { color: #34d399; flex-shrink: 0; }

/* ─────────────────────────────────────────  Comparación  ───────────────────────────────────────── */
.comparison-card {
  padding: 2.5rem;
  transition: var(--transition);
}

.comparison-card:hover {
  border-color: rgba(16,185,129,0.3);
  box-shadow: 0 0 40px rgba(16,185,129,0.12);
}

.comparison-tabs :deep(.n-tabs-tab) {
  font-weight: 600;
  color: var(--clr-muted);
}

.comparison-tabs :deep(.n-tabs-tab--active) { color: #34d399 !important; }
.comparison-tabs :deep(.n-tabs-bar)          { background: #34d399; }

.comparison-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  margin-top: 1.5rem;
}

.comp-img-wrapper {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.comparison-img {
  max-width: 100%;
  max-height: 260px;
  object-fit: contain;
  border-radius: var(--radius-sm);
  transition: transform 0.4s ease;
}

.comp-img-wrapper:hover .comparison-img { transform: scale(1.04); }

.pro-con-list { display: flex; flex-direction: column; gap: 12px; }

.pro-item, .con-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.92rem;
  font-weight: 500;
  transition: var(--transition);
}

.pro-item {
  background: rgba(16,185,129,0.10);
  border: 1px solid rgba(16,185,129,0.25);
  color: #6ee7b7;
}

.con-item {
  background: rgba(239,68,68,0.10);
  border: 1px solid rgba(239,68,68,0.25);
  color: #fca5a5;
}

.pro-item:hover { transform: translateX(4px); }
.con-item:hover { transform: translateX(4px); }

.icon-success { color: #34d399; flex-shrink: 0; }
.icon-error   { color: #f87171; flex-shrink: 0; }

/* ─────────────────────────────────────────  Timeline  ───────────────────────────────────────── */
.timeline-wrapper { max-width: 860px; margin: 0 auto; }

.communication-timeline { padding: 0 1rem; }

.timeline-item { margin-bottom: 2.5rem; }

.n-timeline :deep(.n-timeline-item__title) {
  font-weight: 700;
  color: var(--clr-text) !important;
  font-size: 1.2rem;
}

.n-timeline :deep(.n-timeline-item__content) {
  color: var(--clr-muted) !important;
  font-size: 0.97rem;
  line-height: 1.7;
}

.timeline-icon-wrapper {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 6px 18px rgba(0,0,0,0.3);
}

.tl-success { background: linear-gradient(135deg, #10b981, #059669); }
.tl-info    { background: linear-gradient(135deg, #6366f1, #4f46e5); }
.tl-warning { background: linear-gradient(135deg, #f59e0b, #d97706); }

/* ─────────────────────────────────────────  Responsive  ───────────────────────────────────────── */
@media (max-width: 1024px) {
  .patterns-grid    { grid-template-columns: repeat(2, 1fr); }
  .micro-grid       { grid-template-columns: repeat(2, 1fr); }
  .comparison-content { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .hero-section   { height: 80vh; min-height: 520px; }
  .patterns-grid  { grid-template-columns: 1fr; }
  .micro-grid     { grid-template-columns: 1fr; }
  .content-section { padding: 56px 0; }
}
</style>