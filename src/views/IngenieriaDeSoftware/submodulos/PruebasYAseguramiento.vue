<template>
  <div class="page-wrapper">
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-center">
        <div class="container hero-content text-center">
          <div class="hero-badge" data-aos="fade-down">
            <span class="badge-dot"></span>
            {{ $t('qa_page.badge') }}
          </div>
          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
            {{ $t('qa_page.hero_title') }}
            <span class="hero-title-accent">{{ $t('qa_page.hero_accent') }}</span>
          </h1>
          <p class="hero-text" data-aos="fade-up" data-aos-delay="200">
            {{ $t('qa_page.hero_text') }}
          </p>
        </div>
      </div>
    </section>

    <!-- PIRÁMIDE DE PRUEBAS -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip">
            <n-icon :component="TriangleOutline" size="14" />
            {{ $t('qa_page.pyramid_chip') }}
          </div>
          <h2 class="section-title">{{ $t('qa_page.pyramid_title') }}</h2>
          <p class="section-subtitle">{{ $t('qa_page.pyramid_subtitle') }}</p>
        </div>

        <div class="pyramid-wrapper glass-card" data-aos="zoom-in">
          <div class="pyramid-level level-e2e">
            <div class="level-content">
              <h4>{{ $t('qa_page.e2e_level') }}</h4>
              <p>{{ $t('qa_page.e2e_level_desc') }}</p>
            </div>
          </div>
          <div class="pyramid-level level-integration">
            <div class="level-content">
              <h4>{{ $t('qa_page.integration_level') }}</h4>
              <p>{{ $t('qa_page.integration_level_desc') }}</p>
            </div>
          </div>
          <div class="pyramid-level level-unit">
            <div class="level-content">
              <h4>{{ $t('qa_page.unit_level') }}</h4>
              <p>{{ $t('qa_page.unit_level_desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TÉCNICAS DE PRUEBAS: CAJA NEGRA, CAJA BLANCA Y CAJA GRIS -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-blue">
            <n-icon :component="EyeOutline" size="14" />
            {{ $t('qa_page.box_chip') }}
          </div>
          <h2 class="section-title">{{ $t('qa_page.box_title') }}</h2>
          <p class="section-subtitle">{{ $t('qa_page.box_subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- CAJA NEGRA -->
          <div class="glass-card box-card box-black" data-aos="fade-right">
            <div class="box-icon-header">
              <div class="box-icon-bg bg-black-icon">
                <n-icon :component="CubeOutline" size="32" color="#ffffff" />
              </div>
              <span class="box-badge badge-black">Inputs / Outputs</span>
            </div>
            <h3>{{ $t('qa_page.black_box_title') }}</h3>
            <p>{{ $t('qa_page.black_box_desc') }}</p>
            <div class="box-techniques mt-3">
              <h5>{{ $t('qa_page.black_box_tech') }}</h5>
            </div>
          </div>

          <!-- CAJA BLANCA -->
          <div class="glass-card box-card box-white" data-aos="fade-up">
            <div class="box-icon-header">
              <div class="box-icon-bg bg-white-icon">
                <n-icon :component="CodeSlashOutline" size="32" color="#38bdf8" />
              </div>
              <span class="box-badge badge-white">Source Code</span>
            </div>
            <h3>{{ $t('qa_page.white_box_title') }}</h3>
            <p>{{ $t('qa_page.white_box_desc') }}</p>
            <div class="box-techniques mt-3">
              <h5>{{ $t('qa_page.white_box_tech') }}</h5>
            </div>
          </div>

          <!-- CAJA GRIS -->
          <div class="glass-card box-card box-grey" data-aos="fade-left">
            <div class="box-icon-header">
              <div class="box-icon-bg bg-grey-icon">
                <n-icon :component="LayersOutline" size="32" color="#a78bfa" />
              </div>
              <span class="box-badge badge-grey">Hybrid</span>
            </div>
            <h3>{{ $t('qa_page.grey_box_title') }}</h3>
            <p>{{ $t('qa_page.grey_box_desc') }}</p>
            <div class="box-techniques mt-3">
              <h5>{{ $t('qa_page.grey_box_tech') }}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TIPOS Y CLASES DE PRUEBAS: FUNCIONALES VS NO FUNCIONALES -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-purple">
            <n-icon :component="CheckmarkDoneCircleOutline" size="14" />
            {{ $t('qa_page.taxonomy_chip') }}
          </div>
          <h2 class="section-title">{{ $t('qa_page.taxonomy_title') }}</h2>
          <p class="section-subtitle">{{ $t('qa_page.taxonomy_subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- FUNCIONALES -->
          <div class="glass-card category-card" data-aos="fade-right">
            <h3 class="category-title text-sky-400">{{ $t('qa_page.functional_title') }}</h3>
            <p class="category-desc">{{ $t('qa_page.functional_desc') }}</p>
            
            <div class="qa-type-item">
              <h4>{{ $t('qa_page.smoke_test_title') }}</h4>
              <p>{{ $t('qa_page.smoke_test_desc') }}</p>
            </div>
            <div class="qa-type-item">
              <h4>{{ $t('qa_page.regression_test_title') }}</h4>
              <p>{{ $t('qa_page.regression_test_desc') }}</p>
            </div>
            <div class="qa-type-item">
              <h4>{{ $t('qa_page.uat_test_title') }}</h4>
              <p>{{ $t('qa_page.uat_test_desc') }}</p>
            </div>
          </div>

          <!-- NO FUNCIONALES -->
          <div class="glass-card category-card" data-aos="fade-left">
            <h3 class="category-title text-emerald-400">{{ $t('qa_page.non_functional_title') }}</h3>
            <p class="category-desc">{{ $t('qa_page.non_functional_desc') }}</p>
            
            <div class="qa-type-item">
              <h4>{{ $t('qa_page.load_test_title') }}</h4>
              <p>{{ $t('qa_page.load_test_desc') }}</p>
            </div>
            <div class="qa-type-item">
              <h4>{{ $t('qa_page.security_test_title') }}</h4>
              <p>{{ $t('qa_page.security_test_desc') }}</p>
            </div>
            <div class="qa-type-item">
              <h4>{{ $t('qa_page.usability_test_title') }}</h4>
              <p>{{ $t('qa_page.usability_test_desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CICLO TDD INTERACTIVO -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-green">
            <n-icon :component="SyncOutline" size="14" />
            {{ $t('qa_page.tdd_chip') }}
          </div>
          <h2 class="section-title">{{ $t('qa_page.tdd_title') }}</h2>
          <p class="section-subtitle">{{ $t('qa_page.tdd_subtitle') }}</p>
        </div>

        <div class="tdd-grid">
          <div class="glass-card tdd-card tdd-red" data-aos="fade-right">
            <div class="tdd-badge">Step 1</div>
            <h3>{{ $t('qa_page.tdd_red_title') }}</h3>
            <p>{{ $t('qa_page.tdd_red_desc') }}</p>
            <div class="code-box">
              <code>it('calcula IVA 19%', () => { expect(calcularIVA(100)).toBe(19); }); // Fail!</code>
            </div>
          </div>

          <div class="glass-card tdd-card tdd-green" data-aos="fade-up">
            <div class="tdd-badge">Step 2</div>
            <h3>{{ $t('qa_page.tdd_green_title') }}</h3>
            <p>{{ $t('qa_page.tdd_green_desc') }}</p>
            <div class="code-box">
              <code>function calcularIVA(monto) { return monto * 0.19; } // Pass!</code>
            </div>
          </div>

          <div class="glass-card tdd-card tdd-refactor" data-aos="fade-left">
            <div class="tdd-badge">Step 3</div>
            <h3>{{ $t('qa_page.tdd_refactor_title') }}</h3>
            <p>{{ $t('qa_page.tdd_refactor_desc') }}</p>
            <div class="code-box">
              <code>const IVA_RATE = 0.19; const calcularIVA = (m) => m * IVA_RATE;</code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EJEMPLOS PRÁCTICOS DE CÓDIGO POR TIPO -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <h2 class="section-title">{{ $t('qa_page.code_examples_title') }}</h2>
          <p class="section-subtitle">{{ $t('qa_page.code_examples_subtitle') }}</p>
        </div>

        <n-tabs type="segment" animated class="qa-tabs" data-aos="fade-up">
          <n-tab-pane name="unit" tab="Unitaria (Vitest)">
            <div class="glass-card tab-content">
              <h3>Prueba Unitaria de una Función de Descuento</h3>
              <p>Verificamos que el cálculo de descuento aplique correctamente la lógica de negocios aislada.</p>
              <div class="code-box-large">
                <pre><code>import { describe, it, expect } from 'vitest';
import { aplicarDescuento } from './carrito';

describe('Módulo de Carrito de Compras', () => {
  it('aplica 10% de descuento para clientes VIP', () => {
    const total = 100;
    const esVIP = true;
    const resultado = aplicarDescuento(total, esVIP);
    expect(resultado).toBe(90);
  });

  it('lanza un error si el precio es negativo', () => {
    expect(() => aplicarDescuento(-50, false)).toThrow('Precio inválido');
  });
});</code></pre>
              </div>
            </div>
          </n-tab-pane>

          <n-tab-pane name="integration" tab="Integración (API Supertest)">
            <div class="glass-card tab-content">
              <h3>Prueba de Integración de Endpoint HTTP</h3>
              <p>Comprobamos la respuesta de la API Node.js conectada a la base de datos.</p>
              <div class="code-box-large">
                <pre><code>import request from 'supertest';
import app from '../app';

describe('GET /api/v1/estudiantes', () => {
  it('retorna lista de estudiantes con estado 200 OK', async () => {
    const response = await request(app)
      .get('/api/v1/estudiantes')
      .set('Authorization', 'Bearer token_demo');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0]).toHaveProperty('id');
  });
});</code></pre>
              </div>
            </div>
          </n-tab-pane>

          <n-tab-pane name="e2e" tab="End-to-End (Cypress)">
            <div class="glass-card tab-content">
              <h3>Prueba E2E de Flujo de Autenticación</h3>
              <p>Simulación del navegador del usuario al iniciar sesión en el portal educativo.</p>
              <div class="code-box-large">
                <pre><code>describe('Flujo de Iniciar Sesión en REDA', () => {
  it('permite al estudiante iniciar sesión con credenciales válidas', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('estudiante@unibague.edu.co');
    cy.get('input[name="password"]').type('Password123!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/isw');
    cy.contains('Bienvenido al Recurso Educativo').should('be.visible');
  });
});</code></pre>
              </div>
            </div>
          </n-tab-pane>
        </n-tabs>
      </div>
    </section>

    <!-- AUTOEVALUACIÓN INTERACTIVA (QUIZ ESTUDIANTIL) -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-purple">
            <n-icon :component="HelpCircleOutline" size="14" />
            Evaluación Rápida
          </div>
          <h2 class="section-title">Comprueba tus Conocimientos</h2>
          <p class="section-subtitle">Responde estas preguntas claves sobre Aseguramiento de Calidad</p>
        </div>

        <div class="quiz-container max-w-3xl mx-auto glass-card" data-aos="fade-up">
          <n-collapse accordion default-expanded-names="1">
            <n-collapse-item title="1. ¿Cuál es la diferencia principal entre Caja Negra y Caja Blanca?" name="1">
              <div class="quiz-answer">
                <p><strong>Respuesta:</strong> En las pruebas de <strong>Caja Negra</strong> el tester evalúa únicamente entradas y salidas sin conocer el código interno. En las pruebas de <strong>Caja Blanca</strong> el tester analiza el código fuente, la lógica interna y la cobertura de condiciones/rutas de ejecución.</p>
              </div>
            </n-collapse-item>
            <n-collapse-item title="2. ¿Qué diferencia hay entre Pruebas Funcionales y No Funcionales?" name="2">
              <div class="quiz-answer">
                <p><strong>Respuesta:</strong> Las <strong>Pruebas Funcionales</strong> comprueban *qué hace el sistema* en función de los requisitos del usuario. Las <strong>Pruebas No Funcionales</strong> comprueban *cómo lo hace* (rendimiento, seguridad, escalabilidad, usabilidad).</p>
              </div>
            </n-collapse-item>
            <n-collapse-item title="3. ¿Por qué las pruebas unitarias deben ser la base de la pirámide?" name="3">
              <div class="quiz-answer">
                <p><strong>Respuesta:</strong> Porque son las más rápidas de ejecutar (milisegundos), se pueden correr miles en cada commit y son económicas de mantener. Identifican errores de lógica de inmediato antes de llegar a etapas tardías.</p>
              </div>
            </n-collapse-item>
            <n-collapse-item title="4. ¿En qué consiste la regla FIRST en Pruebas Unitarias?" name="4">
              <div class="quiz-answer">
                <ul>
                  <li><strong>F (Fast):</strong> Rápidas.</li>
                  <li><strong>I (Independent):</strong> Independientes unas de otras.</li>
                  <li><strong>R (Repeatable):</strong> Repetibles en cualquier entorno.</li>
                  <li><strong>S (Self-validating):</strong> Autovalidables (pasan o fallan automáticamente).</li>
                  <li><strong>T (Timely):</strong> Oportunas (escritas justo antes o al tiempo con el código).</li>
                </ul>
              </div>
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
import {
  TriangleOutline,
  SyncOutline,
  HelpCircleOutline,
  EyeOutline,
  CubeOutline,
  CodeSlashOutline,
  LayersOutline,
  CheckmarkDoneCircleOutline
} from '@vicons/ionicons5';

const { t } = useI18n();

onMounted(() => {
  AOS.init({ duration: 800, once: true });
});
</script>

<style scoped>
.page-wrapper {
  color: #f8fafc;
  min-height: 80vh;
}
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
  background: rgba(0, 172, 223, 0.2);
  border: 1px solid rgba(0, 172, 223, 0.4);
  border-radius: 20px;
  color: #38bdf8;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 16px;
}
.badge-dot {
  width: 8px;
  height: 8px;
  background: #38bdf8;
  border-radius: 50%;
}
.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
}
.hero-title-accent {
  background: linear-gradient(90deg, #38bdf8, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-text {
  max-width: 720px;
  margin: 0 auto;
  color: #cbd5e1;
  font-size: 1.15rem;
  line-height: 1.6;
}
.content-section {
  padding: 70px 0;
}
.section-alt {
  background: rgba(0, 0, 0, 0.25);
}
.section-header {
  margin-bottom: 48px;
}
.section-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 8px;
}
.chip-blue { background: rgba(0, 172, 223, 0.2); color: #38bdf8; }
.chip-green { background: rgba(16, 185, 129, 0.2); color: #34d399; }
.chip-purple { background: rgba(139, 92, 246, 0.2); color: #c4b5fd; }

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}
.section-subtitle {
  color: #cbd5e1;
  font-size: 1.05rem;
}
.glass-card {
  background: rgba(15, 31, 57, 0.75);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 32px;
}

/* PIRÁMIDE ESTILOS */
.pyramid-wrapper {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.pyramid-level {
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}
.pyramid-level:hover {
  transform: scale(1.02);
}
.level-e2e {
  background: linear-gradient(90deg, rgba(239, 68, 68, 0.25), rgba(245, 158, 11, 0.25));
  border: 1px solid rgba(239, 68, 68, 0.5);
  width: 55%;
  margin: 0 auto;
}
.level-integration {
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.25));
  border: 1px solid rgba(59, 130, 246, 0.5);
  width: 78%;
  margin: 0 auto;
}
.level-unit {
  background: linear-gradient(90deg, rgba(16, 185, 129, 0.25), rgba(6, 182, 212, 0.25));
  border: 1px solid rgba(16, 185, 129, 0.5);
  width: 100%;
}
.level-content h4 {
  font-weight: 700;
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 6px;
}
.level-content p {
  color: #e2e8f0;
  font-size: 0.95rem;
}

/* CAJA NEGRA, BLANCA Y GRIS */
.box-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.box-black { border-top: 4px solid #cbd5e1; }
.box-white { border-top: 4px solid #38bdf8; }
.box-grey { border-top: 4px solid #c4b5fd; }

.box-icon-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.box-icon-bg {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-black-icon { background: rgba(255, 255, 255, 0.2); }
.bg-white-icon { background: rgba(56, 189, 248, 0.2); }
.bg-grey-icon { background: rgba(167, 139, 250, 0.2); }

.box-badge {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 12px;
}
.badge-black { background: rgba(255, 255, 255, 0.15); color: #f8fafc; }
.badge-white { background: rgba(56, 189, 248, 0.2); color: #38bdf8; }
.badge-grey { background: rgba(167, 139, 250, 0.2); color: #c4b5fd; }

.box-card h3 {
  font-size: 1.35rem;
  color: #ffffff;
  margin-bottom: 10px;
}
.box-card p {
  color: #e2e8f0;
  font-size: 0.98rem;
  line-height: 1.6;
  margin-bottom: 16px;
}
.box-techniques {
  background: rgba(0, 0, 0, 0.35);
  border-radius: 12px;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.box-techniques h5 {
  color: #e2e8f0;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.box-techniques p {
  color: #cbd5e1;
  font-size: 0.88rem;
  margin: 0;
}

/* CATEGORÍAS FUNCIONALES VS NO FUNCIONALES */
.category-card {
  height: 100%;
}
.category-title {
  font-size: 1.55rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.category-desc {
  color: #cbd5e1;
  font-size: 0.98rem;
  margin-bottom: 24px;
}
.qa-type-item {
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 14px;
}
.qa-type-item h4 {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
}
.qa-type-item p {
  color: #e2e8f0;
  font-size: 0.92rem;
  line-height: 1.5;
  margin: 0;
}

/* TDD GRID */
.tdd-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.tdd-card {
  position: relative;
  overflow: hidden;
}
.tdd-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.15);
  color: #f1f5f9;
}
.tdd-red { border-top: 4px solid #ef4444; }
.tdd-green { border-top: 4px solid #10b981; }
.tdd-refactor { border-top: 4px solid #3b82f6; }

.tdd-card h3 {
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 12px;
}
.tdd-card p {
  color: #e2e8f0;
  font-size: 0.98rem;
  line-height: 1.6;
  margin-bottom: 16px;
}
.code-box {
  background: #090d16;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.code-box code {
  color: #38bdf8;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
}
.code-box-large {
  background: #090d16;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 16px;
}
.code-box-large code {
  color: #38bdf8;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
}
.tab-content h3 {
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 8px;
}
.tab-content p {
  color: #e2e8f0;
}
.quiz-answer p, .quiz-answer li {
  color: #e2e8f0;
  font-size: 0.98rem;
  line-height: 1.6;
}
</style>
