<template>
  <div class="page-wrapper">
    <!-- HERO -->
    <section class="hero-section">
      <div class="speed-lines">
        <div class="sl sl1"></div><div class="sl sl2"></div>
        <div class="sl sl3"></div><div class="sl sl4"></div>
      </div>
      <div class="container text-center hero-inner">
        <n-tag type="error" round class="mb-4">{{ $t('dev_web_page.badge') }}</n-tag>
        <h1 class="hero-title">{{ $t('dev_web_page.optimizacion_title') }}</h1>
        <p class="hero-text">{{ $t('dev_web_page.optimizacion_desc') }}</p>
        <div class="vital-preview">
          <div class="vp-card vp-lcp">
            <div class="vp-value">LCP</div>
            <div class="vp-target">&lt; 2.5s</div>
          </div>
          <div class="vp-card vp-inp">
            <div class="vp-value">INP</div>
            <div class="vp-target">&lt; 200ms</div>
          </div>
          <div class="vp-card vp-cls">
            <div class="vp-value">CLS</div>
            <div class="vp-target">&lt; 0.1</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE WEB VITALS -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-red">
            <n-icon :component="SpeedometerOutline" size="14" />
            Métricas de Google
          </div>
          <h2 class="section-title">Core Web Vitals — ¿Qué miden exactamente?</h2>
          <p class="section-subtitle">Las 3 métricas que Google utiliza para medir experiencia de usuario y afectan el ranking SEO</p>
        </div>

        <div class="vitals-grid">
          <div class="vital-card vital-lcp" data-aos="fade-up">
            <div class="vital-header">
              <div class="vital-badge">LCP</div>
              <div class="vital-threshold good">&lt; 2.5s ✅ Bueno</div>
            </div>
            <h3>Largest Contentful Paint</h3>
            <p class="high-contrast-text">Mide el tiempo en que el <strong>elemento de contenido más grande</strong> (imagen, video, texto) es visible en el viewport. Percepción de velocidad de carga.</p>
            <div class="vital-scale">
              <div class="scale-bar">
                <div class="scale-good">Bueno (&lt;2.5s)</div>
                <div class="scale-need">Necesita mejoras (2.5-4s)</div>
                <div class="scale-bad">Mal (&gt;4s)</div>
              </div>
            </div>
            <div class="vital-tips">
              <div class="tip-title">Cómo mejorar LCP:</div>
              <ul class="tip-list">
                <li>Usar <code>&lt;img loading="eager"&gt;</code> para hero images</li>
                <li>Aplicar <code>rel="preload"</code> en fuentes críticas</li>
                <li>Optimizar imágenes a formato WebP/AVIF</li>
              </ul>
            </div>
          </div>

          <div class="vital-card vital-inp" data-aos="fade-up" data-aos-delay="100">
            <div class="vital-header">
              <div class="vital-badge">INP</div>
              <div class="vital-threshold good">&lt; 200ms ✅ Bueno</div>
            </div>
            <h3>Interaction to Next Paint</h3>
            <p class="high-contrast-text">Reemplazó a FID en 2024. Mide el tiempo de respuesta ante <strong>cualquier interacción del usuario</strong> (click, touch, teclado) durante toda la sesión.</p>
            <div class="vital-tips">
              <div class="tip-title">Cómo mejorar INP:</div>
              <ul class="tip-list">
                <li>Evitar tareas largas en el hilo principal (&gt;50ms)</li>
                <li>Usar <code>requestIdleCallback</code> para trabajo no urgente</li>
                <li>Web Workers para cálculos intensivos</li>
              </ul>
            </div>
          </div>

          <div class="vital-card vital-cls" data-aos="fade-up" data-aos-delay="200">
            <div class="vital-header">
              <div class="vital-badge">CLS</div>
              <div class="vital-threshold good">&lt; 0.1 ✅ Bueno</div>
            </div>
            <h3>Cumulative Layout Shift</h3>
            <p class="high-contrast-text">Mide la estabilidad visual. Cuantifica cuánto <strong>se desplazan los elementos</strong> inesperadamente mientras la página carga (anuncios, fuentes, imágenes sin tamaño).</p>
            <div class="vital-tips">
              <div class="tip-title">Cómo mejorar CLS:</div>
              <ul class="tip-list">
                <li>Definir siempre <code>width</code> y <code>height</code> en imágenes</li>
                <li>Usar <code>font-display: swap</code> en fuentes web</li>
                <li>Reservar espacio para anuncios y embeds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TÉCNICAS DE OPTIMIZACIÓN -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-red">⚡ Técnicas</div>
          <h2 class="section-title">Técnicas de Optimización de Rendimiento</h2>
          <p class="section-subtitle">Estrategias prácticas aplicadas directamente en código Vue 3 + Vite</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div class="glass-card" data-aos="fade-right">
            <div class="card-badge badge-red mb-3">🚀 Code-Splitting con Importaciones Dinámicas</div>
            <p class="high-contrast-text mb-4">Divide el bundle JavaScript en fragmentos más pequeños que se descargan <em>solo cuando el usuario navega a esa ruta</em>. Reduce drásticamente el tiempo de carga inicial.</p>
            <div class="code-box-large">
              <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-lang">router.ts</span></div>
              <pre><code>import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () =&gt; import('./views/HomePage.vue') // Lazy
  },
  {
    path: '/admin',
    // Este chunk solo se descarga si navegan a /admin
    component: () =&gt; import('./views/AdminDashboard.vue'),
    meta: { requiresAuth: true }
  }
];

// Resultado: En vez de un bundle 3MB,
// index.js = 150KB + chunks bajo demanda</code></pre>
            </div>
          </div>

          <div class="glass-card" data-aos="fade-left">
            <div class="card-badge badge-red mb-3">🖼️ Optimización de Imágenes</div>
            <p class="high-contrast-text mb-4">Las imágenes son el mayor cuello de botella de LCP. Usar formatos modernos y carga diferida es fundamental.</p>
            <div class="code-box-large">
              <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-lang">HTML</span></div>
              <pre><code>&lt;!-- ✅ Buenas prácticas de imágenes --&gt;
&lt;img
  src="/hero.webp"
  alt="Descripción accesible de la imagen"
  width="800"
  height="450"
  loading="lazy"
  decoding="async"
  fetchpriority="high"  &lt;!-- Solo para hero image --&gt;
/&gt;

&lt;!-- Imágenes responsivas con srcset --&gt;
&lt;img
  srcset="img-400.webp 400w, img-800.webp 800w"
  sizes="(max-width: 640px) 400px, 800px"
  src="img-800.webp"
  alt="Imagen responsiva"
/&gt;</code></pre>
            </div>
          </div>
        </div>

        <div class="glass-card" data-aos="zoom-in">
          <div class="card-badge badge-red mb-3">⚙️ Configuración de Vite para Optimización de Bundle</div>
          <div class="code-box-large">
            <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-lang">vite.config.ts</span></div>
            <pre><code>import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        // Separar dependencias grandes en chunks propios
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'ui-vendor': ['naive-ui'],
          'chart-vendor': ['chart.js']
        }
      }
    },
    // Comprimir con brotli + gzip
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000 // KB
  }
});</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- ACCESIBILIDAD WCAG 2.1 -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-amber">♿ WCAG 2.1</div>
          <h2 class="section-title">Accesibilidad Web (WCAG 2.1 AA)</h2>
          <p class="section-subtitle">Pautas de Accesibilidad para el Contenido Web — estándar internacional que garantiza usabilidad para todas las personas</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div class="glass-card" data-aos="fade-right">
            <h3 class="text-amber-300">Los 4 Principios POUR</h3>
            <div class="pour-list">
              <div v-for="p in pour" :key="p.letter" class="pour-item">
                <div class="pour-letter" :style="{ color: p.color }">{{ p.letter }}</div>
                <div>
                  <div class="pour-name">{{ p.name }}</div>
                  <div class="pour-desc">{{ p.desc }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card" data-aos="fade-left">
            <h3 class="text-amber-300">Atributos ARIA Esenciales</h3>
            <p class="high-contrast-text mb-4">ARIA (Accessible Rich Internet Applications) provee semántica adicional para tecnologías asistivas como lectores de pantalla.</p>
            <div class="code-box-large">
              <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-lang">HTML</span></div>
              <pre><code>&lt;!-- Botón con acción descriptiva --&gt;
&lt;button
  aria-label="Abrir menú de navegación"
  :aria-expanded="isMenuOpen"
  aria-controls="nav-menu"&gt;
  &lt;svg aria-hidden="true"&gt;...&lt;/svg&gt;
&lt;/button&gt;

&lt;!-- Imagen decorativa (ignorada) vs informativa --&gt;
&lt;img src="deco.svg" alt="" aria-hidden="true" /&gt;
&lt;img src="logo.png" alt="Universidad de Ibagué" /&gt;

&lt;!-- Rol de región landmark --&gt;
&lt;div role="alert" aria-live="polite"&gt;
  Formulario guardado correctamente
&lt;/div&gt;</code></pre>
            </div>
          </div>
        </div>

        <!-- CONTRASTE DE COLORES -->
        <div class="glass-card" data-aos="fade-up">
          <h3 class="text-amber-300">Contraste de Color — WCAG AA requiere mínimo 4.5:1 para texto normal</h3>
          <div class="contrast-examples">
            <div class="contrast-item contrast-fail">
              <div class="contrast-preview" style="background:#ffffff; color:#aaaaaa;">Texto Claro</div>
              <div class="contrast-label">❌ Falla: 2.3:1</div>
            </div>
            <div class="contrast-item contrast-pass">
              <div class="contrast-preview" style="background:#0f1f39; color:#f8fafc;">Texto Brillante</div>
              <div class="contrast-label">✅ Pasa: 14.7:1</div>
            </div>
            <div class="contrast-item contrast-fail">
              <div class="contrast-preview" style="background:#1e293b; color:#64748b;">Texto Gris</div>
              <div class="contrast-label">❌ Falla: 3.1:1</div>
            </div>
            <div class="contrast-item contrast-pass">
              <div class="contrast-preview" style="background:#1e293b; color:#e2e8f0;">Texto Claro Fuerte</div>
              <div class="contrast-label">✅ Pasa: 9.5:1</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LIGHTHOUSE AUDIT -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-amber">🏆 Herramienta</div>
          <h2 class="section-title">Auditoría con Google Lighthouse</h2>
          <p class="section-subtitle">Herramienta automatizada integrada en Chrome DevTools para medir rendimiento, accesibilidad, SEO y buenas prácticas</p>
        </div>

        <div class="lighthouse-card" data-aos="zoom-in">
          <div class="lh-scores">
            <div v-for="score in lighthouseScores" :key="score.name" class="lh-score-item">
              <div class="lh-circle" :style="{ '--clr': score.color, '--pct': score.value + '%' }">
                <span class="lh-value">{{ score.value }}</span>
              </div>
              <div class="lh-name">{{ score.name }}</div>
            </div>
          </div>
          <div class="lh-info">
            <h3 class="text-white mb-3">Cómo ejecutar Lighthouse</h3>
            <ol class="lh-steps">
              <li>Abre Chrome DevTools (F12)</li>
              <li>Ve a la pestaña <strong>"Lighthouse"</strong></li>
              <li>Selecciona categorías (Performance, Accessibility, SEO, Best Practices)</li>
              <li>Haz click en <strong>"Analyze page load"</strong></li>
              <li>Revisa el reporte y las recomendaciones específicas</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- QUIZ -->
    <section class="content-section">
      <div class="container">
        <div class="glass-card quiz-card text-center" data-aos="fade-up">
          <div class="section-chip chip-red mb-3">🧪 Autoevaluación</div>
          <h2 class="quiz-title">Cuestionario: Web Vitals & Accesibilidad</h2>
          <p class="high-contrast-text mb-6">Verifica tu comprensión de rendimiento web y accesibilidad WCAG</p>

          <div v-if="!quizSubmitted" class="quiz-body text-left">
            <div v-for="(q, idx) in questions" :key="idx" class="quiz-question mb-6">
              <h4 class="text-red-400 mb-3">{{ idx + 1 }}. {{ q.title }}</h4>
              <n-radio-group v-model:value="userAnswers[idx]" :name="`opt${idx}`">
                <n-space vertical>
                  <n-radio v-for="(opt, j) in q.options" :key="j" :value="j" class="quiz-radio">{{ opt }}</n-radio>
                </n-space>
              </n-radio-group>
            </div>
            <div class="text-center mt-6">
              <n-button type="error" size="large" round @click="submitQuiz">✅ Verificar Respuestas</n-button>
            </div>
          </div>

          <div v-else class="quiz-results">
            <n-result
              :status="score >= questions.length - 1 ? 'success' : 'info'"
              :title="`Puntaje: ${score} / ${questions.length}`"
              :description="score >= questions.length - 1 ? '¡Excelente! Dominas el rendimiento y accesibilidad web.' : 'Repasa los Core Web Vitals y los principios WCAG POUR.'">
              <template #footer>
                <n-button type="primary" round @click="resetQuiz">🔄 Reintentar</n-button>
              </template>
            </n-result>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import { SpeedometerOutline } from '@vicons/ionicons5';

const { t } = useI18n();

const quizSubmitted = ref(false);
const score = ref(0);
const userAnswers = ref<(number | null)[]>([null, null, null]);

const pour = [
  { letter: 'P', name: 'Perceptible', desc: 'La información y UI deben ser presentables para todos los usuarios.', color: '#38bdf8' },
  { letter: 'O', name: 'Operable', desc: 'Los controles de UI deben ser navegables con teclado y sin tiempo límite.', color: '#4ade80' },
  { letter: 'U', name: 'Comprensible', desc: 'El contenido y operación deben ser comprensibles por todos.', color: '#fbbf24' },
  { letter: 'R', name: 'Robusto', desc: 'El contenido debe ser interpretable por tecnologías asistivas actuales y futuras.', color: '#a78bfa' },
];

const lighthouseScores = [
  { name: 'Performance', value: 98, color: '#22c55e' },
  { name: 'Accessibility', value: 100, color: '#22c55e' },
  { name: 'Best Practices', value: 96, color: '#22c55e' },
  { name: 'SEO', value: 100, color: '#22c55e' },
];

const questions = [
  {
    title: '¿Qué métrica de Core Web Vitals mide el tiempo en que el elemento de contenido más grande es visible?',
    options: ['INP (Interaction to Next Paint)', 'CLS (Cumulative Layout Shift)', 'LCP (Largest Contentful Paint)', 'FID (First Input Delay)'],
    correct: 2
  },
  {
    title: '¿Qué técnica divide el bundle JS en fragmentos que se cargan solo cuando se necesitan?',
    options: ['Tree Shaking', 'Code-Splitting con importaciones dinámicas', 'Minificación con Terser', 'Bundling con Webpack'],
    correct: 1
  },
  {
    title: '¿Cuál es el ratio mínimo de contraste de color para texto normal según WCAG 2.1 AA?',
    options: ['2.1:1', '3.0:1', '4.5:1', '7.0:1'],
    correct: 2
  }
];

function submitQuiz() {
  score.value = userAnswers.value.reduce((acc: number, ans, i) =>
    ans === questions[i].correct ? acc + 1 : acc, 0);
  quizSubmitted.value = true;
}
function resetQuiz() {
  userAnswers.value = [null, null, null];
  quizSubmitted.value = false;
}

onMounted(() => {
  AOS.init({ duration: 800, once: true });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');

.page-wrapper { color: #f8fafc; min-height: 80vh; }

/* HERO */
.hero-section { position: relative; overflow: hidden; padding: 100px 0 60px; background: linear-gradient(135deg, #1f0a0a 0%, #1a0000 50%, #0f0f1f 100%); }
.speed-lines { position: absolute; inset: 0; pointer-events: none; }
.sl { position: absolute; height: 2px; background: linear-gradient(90deg, transparent, rgba(239,68,68,0.3), transparent); border-radius: 2px; animation: speedLine 3s linear infinite; }
.sl1 { width: 60%; top: 25%; left: -60%; animation-delay: 0s; }
.sl2 { width: 40%; top: 50%; left: -40%; animation-delay: 1s; }
.sl3 { width: 80%; top: 70%; left: -80%; animation-delay: 0.5s; }
.sl4 { width: 50%; top: 85%; left: -50%; animation-delay: 1.5s; }
@keyframes speedLine { to { left: 120%; } }
.hero-inner { position: relative; z-index: 2; }
.hero-title { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 900; color: #f87171; margin: 12px 0; text-shadow: 0 0 40px rgba(239,68,68,0.3); line-height: 1.15; }
.hero-text { max-width: 680px; margin: 0 auto 32px; color: #fca5a5; font-size: 1.15rem; line-height: 1.7; }
.vital-preview { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 16px; }
.vp-card { padding: 14px 24px; border-radius: 16px; text-align: center; border: 2px solid; }
.vp-lcp { background: rgba(34,197,94,0.1); border-color: rgba(34,197,94,0.4); }
.vp-inp { background: rgba(56,189,248,0.1); border-color: rgba(56,189,248,0.4); }
.vp-cls { background: rgba(251,191,36,0.1); border-color: rgba(251,191,36,0.4); }
.vp-value { font-family: 'Fira Code', monospace; font-size: 1.2rem; font-weight: 900; color: #fff; }
.vp-target { font-size: 0.85rem; color: #94a3b8; margin-top: 2px; }

/* SECTIONS */
.content-section { padding: 70px 0; }
.section-alt { background: rgba(0,0,0,0.2); }
.section-header { margin-bottom: 48px; }
.section-chip { display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 700; margin-bottom: 10px; }
.chip-red { background: rgba(239,68,68,0.15); color: #f87171; }
.chip-amber { background: rgba(245,158,11,0.15); color: #fbbf24; }
.section-title { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 800; color: #fff; margin-bottom: 8px; line-height: 1.2; }
.section-subtitle { color: #cbd5e1; font-size: 1.05rem; max-width: 640px; margin: 0 auto; }

/* CARDS */
.glass-card { background: rgba(15,31,57,0.8); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 32px; }
.glass-card h3 { color: #f8fafc; font-size: 1.2rem; font-weight: 700; margin-bottom: 10px; }
.high-contrast-text { color: #e2e8f0 !important; font-size: 0.97rem; line-height: 1.7; }
.card-badge { display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 0.82rem; font-weight: 700; }
.badge-red { background: rgba(239,68,68,0.2); color: #f87171; }

/* VITALS GRID */
.vitals-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.vital-card { background: rgba(15,31,57,0.8); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 28px; }
.vital-lcp { border-top: 4px solid #22c55e; }
.vital-inp { border-top: 4px solid #38bdf8; }
.vital-cls { border-top: 4px solid #fbbf24; }
.vital-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.vital-badge { font-family: 'Fira Code', monospace; font-size: 1.1rem; font-weight: 900; color: #fff; background: rgba(255,255,255,0.1); padding: 6px 14px; border-radius: 10px; }
.vital-threshold { font-size: 0.82rem; font-weight: 700; padding: 4px 10px; border-radius: 8px; }
.vital-threshold.good { background: rgba(34,197,94,0.2); color: #4ade80; }
.vital-scale { margin: 14px 0; }
.scale-bar { display: flex; height: 10px; border-radius: 5px; overflow: hidden; gap: 2px; }
.scale-good { background: #22c55e; flex: 2.5; border-radius: 5px 0 0 5px; }
.scale-need { background: #f59e0b; flex: 1.5; }
.scale-bad { background: #ef4444; flex: 1; border-radius: 0 5px 5px 0; }
.vital-tips { background: rgba(0,0,0,0.2); border-radius: 12px; padding: 14px; margin-top: 12px; }
.tip-title { color: #94a3b8; font-size: 0.82rem; font-weight: 700; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
.tip-list { list-style: none; padding: 0; color: #cbd5e1; font-size: 0.88rem; line-height: 1.8; }
.tip-list li::before { content: '→ '; color: #f87171; }
.tip-list code { background: rgba(239,68,68,0.1); color: #fca5a5; padding: 1px 5px; border-radius: 4px; font-family: 'Fira Code', monospace; font-size: 0.85em; }

/* CODE BOX */
.code-box-large { background: #060d1a; border-radius: 14px; border: 1px solid rgba(255,255,255,0.12); overflow: hidden; margin-top: 14px; }
.code-header { display: flex; align-items: center; gap: 6px; padding: 10px 16px; background: rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.08); }
.code-dot { width: 12px; height: 12px; border-radius: 50%; }
.code-dot.red { background: #ef4444; }
.code-dot.yellow { background: #f59e0b; }
.code-dot.green { background: #10b981; }
.code-lang { margin-left: auto; color: #64748b; font-size: 0.78rem; font-family: 'Fira Code', monospace; }
.code-box-large pre { margin: 0; padding: 18px; overflow-x: auto; }
.code-box-large code { color: #fca5a5; font-family: 'Fira Code', monospace; font-size: 0.88rem; line-height: 1.7; white-space: pre; }

/* POUR */
.pour-list { display: flex; flex-direction: column; gap: 14px; margin-top: 12px; }
.pour-item { display: flex; gap: 14px; align-items: flex-start; }
.pour-letter { font-size: 2rem; font-weight: 900; min-width: 40px; }
.pour-name { color: #f8fafc; font-weight: 700; font-size: 1rem; }
.pour-desc { color: #94a3b8; font-size: 0.9rem; margin-top: 2px; }

/* CONTRAST EXAMPLES */
.contrast-examples { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-top: 16px; }
.contrast-item { border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
.contrast-preview { padding: 20px; font-weight: 600; font-size: 1rem; text-align: center; }
.contrast-label { padding: 8px 12px; font-size: 0.85rem; font-weight: 700; text-align: center; }
.contrast-fail .contrast-label { background: rgba(239,68,68,0.2); color: #f87171; }
.contrast-pass .contrast-label { background: rgba(34,197,94,0.2); color: #4ade80; }

/* LIGHTHOUSE */
.lighthouse-card { background: rgba(15,31,57,0.8); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 36px; display: flex; gap: 40px; flex-wrap: wrap; align-items: center; }
.lh-scores { display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; }
.lh-score-item { text-align: center; }
.lh-circle { width: 90px; height: 90px; border-radius: 50%; border: 5px solid #22c55e; display: flex; align-items: center; justify-content: center; background: rgba(34,197,94,0.1); }
.lh-value { font-size: 1.5rem; font-weight: 900; color: #22c55e; }
.lh-name { color: #94a3b8; font-size: 0.82rem; font-weight: 600; margin-top: 8px; }
.lh-info { flex: 1; min-width: 220px; }
.lh-steps { list-style: decimal; padding-left: 20px; color: #cbd5e1; line-height: 2; }
.lh-steps strong { color: #f8fafc; }

/* QUIZ */
.quiz-card { max-width: 820px; margin: 0 auto; }
.quiz-title { font-size: 1.8rem; font-weight: 800; color: #fff; margin-bottom: 6px; }
.quiz-radio { color: #e2e8f0 !important; }

@media (max-width: 768px) {
  .lighthouse-card { flex-direction: column; }
}
</style>
