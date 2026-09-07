<template>
  <div class="page-wrapper">
    <!-- ANIMATED HERO -->
    <section class="hero-section">
      <div class="hero-particles">
        <div class="particle p1"></div><div class="particle p2"></div>
        <div class="particle p3"></div><div class="particle p4"></div>
        <div class="particle p5"></div>
      </div>
      <div class="container text-center hero-inner">
        <n-tag type="success" round class="mb-4 hero-badge">{{ $t('dev_web_page.badge') }}</n-tag>
        <h1 class="hero-title">{{ $t('dev_web_page.frameworks_title') }}</h1>
        <p class="hero-text">{{ $t('dev_web_page.frameworks_desc') }}</p>
        <div class="hero-stats">
          <div class="stat-pill"><span>⚡</span> Composition API</div>
          <div class="stat-pill"><span>🍍</span> Pinia Store</div>
          <div class="stat-pill"><span>🧩</span> Composables</div>
          <div class="stat-pill"><span>🔄</span> Reactivity</div>
        </div>
      </div>
    </section>

    <!-- ¿QUÉ ES VUE 3? -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-green">💡 Fundamento</div>
          <h2 class="section-title">¿Qué es Vue 3 y por qué la Composition API?</h2>
          <p class="section-subtitle">Entiende el paradigma que revolucionó la organización de lógica en frontends modernos</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="glass-card concept-highlight" data-aos="fade-up">
            <div class="concept-emoji">🎯</div>
            <h3>Reactividad</h3>
            <p class="high-contrast-text">Sistema que automáticamente rastrea dependencias y actualiza el DOM cuando los datos cambian, usando <code class="inline-code">ref()</code> y <code class="inline-code">reactive()</code>.</p>
          </div>
          <div class="glass-card concept-highlight" data-aos="fade-up" data-aos-delay="100">
            <div class="concept-emoji">🧬</div>
            <h3>Composables</h3>
            <p class="high-contrast-text">Funciones con estado reutilizables extraídas de componentes. Equivalente moderno y sin colisiones a los mixins de Vue 2.</p>
          </div>
          <div class="glass-card concept-highlight" data-aos="fade-up" data-aos-delay="200">
            <div class="concept-emoji">🏪</div>
            <h3>Pinia (Store)</h3>
            <p class="high-contrast-text">Almacén de estado global centralizado, tipado con TypeScript, sin mutations forzadas. Reemplaza a Vuex con una API mucho más simple.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPOSITION API -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-green">
            <n-icon :component="LayersOutline" size="14" />
            {{ $t('dev_web_page.vue_core_chip') }}
          </div>
          <h2 class="section-title">{{ $t('dev_web_page.vue_comp_title') }}</h2>
          <p class="section-subtitle">{{ $t('dev_web_page.vue_comp_desc') }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="glass-card" data-aos="fade-right">
            <div class="card-badge badge-green mb-3">{{ $t('dev_web_page.counter_comp_title') }}</div>
            <p class="high-contrast-text mb-4">{{ $t('dev_web_page.counter_comp_desc') }}</p>
            <div class="code-box-large">
              <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-lang">Vue SFC</span></div>
              <pre><code>&lt;template&gt;
  &lt;button @click="incrementar" class="btn"&gt;
    Clicks: {{ contador }} — Doble: {{ doble }}
  &lt;/button&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref, computed } from 'vue';

const contador = ref(0);           // Estado reactivo
const doble = computed(           // Valor derivado cacheado
  () => contador.value * 2
);

function incrementar() {
  contador.value++;                // Mutación directa
}
&lt;/script&gt;</code></pre>
            </div>
          </div>

          <div class="glass-card" data-aos="fade-left">
            <div class="card-badge badge-green mb-3">{{ $t('dev_web_page.composables_title') }}</div>
            <p class="high-contrast-text mb-4">{{ $t('dev_web_page.composables_desc') }}</p>
            <div class="code-box-large">
              <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-lang">useFetch.ts</span></div>
              <pre><code>// Extrae la lógica fuera del componente
import { ref } from 'vue';

export function useFetch&lt;T&gt;(url: string) {
  const data = ref&lt;T | null&gt;(null);
  const loading = ref(true);
  const error = ref&lt;string | null&gt;(null);

  fetch(url)
    .then(r =&gt; r.json())
    .then(json =&gt; { data.value = json; })
    .catch(e  =&gt; { error.value = e.message; })
    .finally(() =&gt; { loading.value = false; });

  return { data, loading, error };
}

// Uso en cualquier componente:
// const { data, loading } = useFetch('/api/cursos');</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REF VS REACTIVE -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-cyan">🔬 Reactividad</div>
          <h2 class="section-title">ref() vs reactive() — ¿Cuándo usar cada uno?</h2>
          <p class="section-subtitle">La diferencia fundamental en el sistema de reactividad de Vue 3</p>
        </div>

        <div class="comparison-table" data-aos="zoom-in">
          <div class="comp-header">
            <div class="comp-col comp-title">Característica</div>
            <div class="comp-col comp-ref"><code>ref()</code></div>
            <div class="comp-col comp-reactive"><code>reactive()</code></div>
          </div>
          <div class="comp-row" v-for="(row, i) in refVsReactive" :key="i">
            <div class="comp-col comp-title">{{ row.feature }}</div>
            <div class="comp-col comp-ref">{{ row.ref }}</div>
            <div class="comp-col comp-reactive">{{ row.reactive }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CICLO DE VIDA -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-green">🔁 Lifecycle</div>
          <h2 class="section-title">Ciclo de Vida de un Componente Vue 3</h2>
          <p class="section-subtitle">Hooks disponibles en Composition API para controlar el ciclo de vida</p>
        </div>

        <div class="lifecycle-flow" data-aos="fade-up">
          <div v-for="(step, i) in lifecycleSteps" :key="i" class="lc-step">
            <div class="lc-hook" :style="{ borderColor: step.color, color: step.color }">{{ step.hook }}</div>
            <p class="lc-desc">{{ step.desc }}</p>
            <div v-if="i < lifecycleSteps.length - 1" class="lc-arrow">↓</div>
          </div>
        </div>

        <div class="glass-card mt-8" data-aos="zoom-in">
          <h3 class="text-emerald-300">Ejemplo de Hooks de Ciclo de Vida</h3>
          <div class="code-box-large">
            <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-lang">Vue 3</span></div>
            <pre><code>&lt;script setup lang="ts"&gt;
import { ref, onMounted, onUnmounted, watch } from 'vue';

const datos = ref([]);
let intervalId: number;

// Se ejecuta después de que el DOM está disponible
onMounted(async () =&gt; {
  datos.value = await fetchCursos();
  intervalId = setInterval(actualizarDatos, 30_000);
});

// Limpieza: evita memory leaks
onUnmounted(() =&gt; clearInterval(intervalId));

// Observar cambios reactivos
watch(datos, (nuevoValor) =&gt; {
  console.log('Datos actualizados:', nuevoValor.length);
});
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- PINIA STORE -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-green">🍍 Estado Global</div>
          <h2 class="section-title">{{ $t('dev_web_page.pinia_title') }}</h2>
          <p class="section-subtitle">{{ $t('dev_web_page.pinia_desc') }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="glass-card" data-aos="fade-right">
            <div class="card-badge badge-yellow mb-3">Definición del Store</div>
            <div class="code-box-large">
              <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-lang">stores/auth.ts</span></div>
              <pre><code>import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// Setup Store (sintaxis Composition API)
export const useAuthStore = defineStore('auth', () =&gt; {
  // State
  const usuario = ref(null);
  const token = ref(localStorage.getItem('token') || '');

  // Getter como computed
  const estaAutenticado = computed(() =&gt; !!token.value);

  // Actions
  async function iniciarSesion(credenciales) {
    const res = await api.post('/auth/login', credenciales);
    token.value = res.data.token;
    usuario.value = res.data.usuario;
    localStorage.setItem('token', token.value);
  }

  function cerrarSesion() {
    usuario.value = null;
    token.value = '';
    localStorage.removeItem('token');
  }

  return { usuario, token, estaAutenticado, iniciarSesion, cerrarSesion };
});</code></pre>
            </div>
          </div>

          <div class="glass-card" data-aos="fade-left">
            <div class="card-badge badge-yellow mb-3">Consumo del Store en Componentes</div>
            <div class="code-box-large">
              <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-lang">LoginView.vue</span></div>
              <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;p v-if="auth.estaAutenticado"&gt;
      Bienvenido, {{ auth.usuario?.nombre }}!
    &lt;/p&gt;
    &lt;button v-else @click="login"&gt;Iniciar Sesión&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { useAuthStore } from '@/stores/auth';

// Obtener la instancia del store
const auth = useAuthStore();

async function login() {
  await auth.iniciarSesion({ email: 'user@u.edu', pass: '1234' });
  // Reactivo: el template actualiza automáticamente
}
&lt;/script&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- QUIZ -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="glass-card quiz-card text-center" data-aos="fade-up">
          <div class="section-chip chip-green mb-3">🧪 Autoevaluación</div>
          <h2 class="quiz-title">Cuestionario: Vue 3 & Pinia</h2>
          <p class="high-contrast-text mb-6">Evalúa tu comprensión de Composition API y gestión de estado</p>

          <div v-if="!quizSubmitted" class="quiz-body text-left">
            <div v-for="(q, idx) in questions" :key="idx" class="quiz-question mb-6">
              <h4 class="text-emerald-300 mb-3">{{ idx + 1 }}. {{ q.title }}</h4>
              <n-radio-group v-model:value="userAnswers[idx]" :name="`q-${idx}`">
                <n-space vertical>
                  <n-radio v-for="(opt, j) in q.options" :key="j" :value="j" class="quiz-radio">{{ opt }}</n-radio>
                </n-space>
              </n-radio-group>
            </div>
            <div class="text-center mt-6">
              <n-button type="success" size="large" round @click="submitQuiz">✅ Verificar Respuestas</n-button>
            </div>
          </div>

          <div v-else class="quiz-results">
            <n-result
              :status="score >= questions.length - 1 ? 'success' : 'info'"
              :title="`Puntaje: ${score} / ${questions.length}`"
              :description="score >= questions.length - 1 ? '¡Excelente dominio de Vue 3 y Pinia!' : 'Revisa los ciclos de vida y la diferencia entre ref() y reactive().'">
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
import { LayersOutline } from '@vicons/ionicons5';

const { t } = useI18n();

const quizSubmitted = ref(false);
const score = ref(0);
const userAnswers = ref<(number | null)[]>([null, null, null]);

const refVsReactive = [
  { feature: 'Tipo de dato', ref: 'Primitivos y Objetos', reactive: 'Solo Objetos/Arrays' },
  { feature: 'Acceso al valor', ref: '.value requerido en script', reactive: 'Acceso directo a props' },
  { feature: 'Desestructuración', ref: 'Mantiene reactividad', reactive: 'Pierde reactividad' },
  { feature: 'Retorno de Composable', ref: '✅ Recomendado', reactive: '⚠️ Con cuidado' },
  { feature: 'Uso en Template', ref: 'Auto-unwrap (sin .value)', reactive: 'Acceso directo' },
];

const lifecycleSteps = [
  { hook: 'setup()', desc: 'Punto de entrada. Define estado y lógica reactiva.', color: '#6ee7b7' },
  { hook: 'onBeforeMount()', desc: 'Antes de insertar el componente en el DOM.', color: '#93c5fd' },
  { hook: 'onMounted()', desc: 'DOM listo. Ideal para llamadas a APIs y timers.', color: '#34d399' },
  { hook: 'onBeforeUpdate()', desc: 'Datos cambiaron pero DOM no se actualizó aún.', color: '#fcd34d' },
  { hook: 'onUpdated()', desc: 'DOM re-renderizado tras cambio de datos reactivos.', color: '#f9a8d4' },
  { hook: 'onUnmounted()', desc: 'Limpieza: cancelar suscripciones, timers, listeners.', color: '#f87171' },
];

const questions = [
  {
    title: '¿Qué función se debe usar para crear estado reactivo con primitivos (string, number, boolean) en Vue 3?',
    options: ['reactive()', 'ref()', 'computed()', 'watch()'],
    correct: 1
  },
  {
    title: '¿En qué hook del ciclo de vida de Vue 3 se recomienda hacer llamadas a APIs externas?',
    options: ['setup()', 'onBeforeMount()', 'onMounted()', 'onUpdated()'],
    correct: 2
  },
  {
    title: '¿Qué ventaja tiene Pinia sobre Vuex en Vue 3?',
    options: [
      'Pinia requiere mutations para modificar el estado.',
      'Pinia soporta TypeScript nativo, elimina mutations y tiene una API más simple.',
      'Pinia solo funciona con la Options API.',
      'Pinia no soporta acciones asíncronas.'
    ],
    correct: 1
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
.hero-section { position: relative; overflow: hidden; padding: 100px 0 60px; background: linear-gradient(135deg, #0a1628 0%, #0f2a1a 50%, #0a1f1a 100%); }
.hero-particles { position: absolute; inset: 0; pointer-events: none; }
.particle { position: absolute; border-radius: 50%; animation: float 6s ease-in-out infinite; }
.p1 { width: 60px; height: 60px; background: rgba(52, 211, 153, 0.15); top: 15%; left: 10%; animation-delay: 0s; }
.p2 { width: 40px; height: 40px; background: rgba(110, 231, 183, 0.1); top: 60%; left: 80%; animation-delay: 1s; }
.p3 { width: 80px; height: 80px; background: rgba(52, 211, 153, 0.08); bottom: 20%; left: 30%; animation-delay: 2s; }
.p4 { width: 30px; height: 30px; background: rgba(167, 243, 208, 0.2); top: 30%; right: 15%; animation-delay: 3s; }
.p5 { width: 50px; height: 50px; background: rgba(52, 211, 153, 0.12); top: 75%; left: 50%; animation-delay: 4s; }
@keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(180deg); } }
.hero-inner { position: relative; z-index: 2; }
.hero-badge { font-weight: 700; letter-spacing: 0.5px; }
.hero-title { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 900; color: #34d399; margin: 12px 0; text-shadow: 0 0 40px rgba(52, 211, 153, 0.3); line-height: 1.15; }
.hero-text { max-width: 680px; margin: 0 auto 32px; color: #a7f3d0; font-size: 1.15rem; line-height: 1.7; }
.hero-stats { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
.stat-pill { background: rgba(52, 211, 153, 0.15); border: 1px solid rgba(52, 211, 153, 0.3); color: #6ee7b7; padding: 8px 18px; border-radius: 24px; font-size: 0.9rem; font-weight: 600; display: flex; align-items: center; gap: 6px; }

/* SECTIONS */
.content-section { padding: 70px 0; }
.section-alt { background: rgba(0,0,0,0.2); }
.section-header { margin-bottom: 48px; }
.section-chip { display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 700; margin-bottom: 10px; letter-spacing: 0.3px; background: rgba(52, 211, 153, 0.15); color: #34d399; }
.chip-green { background: rgba(52, 211, 153, 0.15); color: #34d399; }
.chip-cyan { background: rgba(6, 182, 212, 0.15); color: #22d3ee; }
.chip-yellow { background: rgba(251, 191, 36, 0.15); color: #fbbf24; }
.section-title { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 800; color: #fff; margin-bottom: 8px; line-height: 1.2; }
.section-subtitle { color: #cbd5e1; font-size: 1.05rem; max-width: 640px; margin: 0 auto; }

/* CARDS */
.glass-card { background: rgba(15, 31, 57, 0.8); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 32px; }
.glass-card h3 { color: #f8fafc; font-size: 1.25rem; font-weight: 700; margin-bottom: 10px; }
.concept-highlight { border-top: 3px solid #34d399; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.concept-highlight:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(52,211,153,0.15); }
.concept-emoji { font-size: 2.2rem; margin-bottom: 12px; }
.high-contrast-text { color: #e2e8f0 !important; font-size: 0.97rem; line-height: 1.7; }
.inline-code { background: rgba(52,211,153,0.15); color: #6ee7b7; padding: 2px 6px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 0.88em; }
.card-badge { display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 0.82rem; font-weight: 700; }
.badge-green { background: rgba(52,211,153,0.2); color: #34d399; }
.badge-yellow { background: rgba(251,191,36,0.2); color: #fbbf24; }

/* CODE BOX */
.code-box-large { background: #060d1a; padding: 0; border-radius: 14px; border: 1px solid rgba(255,255,255,0.12); margin-top: 14px; overflow: hidden; }
.code-header { display: flex; align-items: center; gap: 6px; padding: 10px 16px; background: rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.08); }
.code-dot { width: 12px; height: 12px; border-radius: 50%; }
.code-dot.red { background: #ef4444; }
.code-dot.yellow { background: #f59e0b; }
.code-dot.green { background: #10b981; }
.code-lang { margin-left: auto; color: #64748b; font-size: 0.78rem; font-family: 'Fira Code', monospace; }
.code-box-large pre { margin: 0; padding: 18px; overflow-x: auto; }
.code-box-large code { color: #6ee7b7; font-family: 'Fira Code', monospace; font-size: 0.88rem; line-height: 1.7; white-space: pre; }

/* REF VS REACTIVE TABLE */
.comparison-table { background: rgba(15,31,57,0.8); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; overflow: hidden; }
.comp-header { display: grid; grid-template-columns: 1fr 1fr 1fr; background: rgba(52,211,153,0.1); border-bottom: 2px solid rgba(52,211,153,0.3); }
.comp-row { display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.06); transition: background 0.2s; }
.comp-row:last-child { border-bottom: none; }
.comp-row:hover { background: rgba(52,211,153,0.05); }
.comp-col { padding: 14px 20px; font-size: 0.92rem; color: #e2e8f0; }
.comp-title { color: #94a3b8; font-weight: 600; }
.comp-ref { color: #6ee7b7; font-family: 'Fira Code', monospace; }
.comp-reactive { color: #93c5fd; font-family: 'Fira Code', monospace; }
.comp-header .comp-col { font-weight: 800; color: #fff; font-size: 1rem; }
.comp-header .comp-ref { color: #34d399; }
.comp-header .comp-reactive { color: #60a5fa; }

/* LIFECYCLE FLOW */
.lifecycle-flow { display: flex; flex-wrap: wrap; gap: 0; justify-content: center; align-items: flex-start; }
.lc-step { display: flex; flex-direction: column; align-items: center; text-align: center; width: 160px; }
.lc-hook { border: 2px solid; padding: 10px 14px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.82rem; font-weight: 700; background: rgba(0,0,0,0.3); width: 100%; }
.lc-desc { color: #94a3b8; font-size: 0.78rem; margin: 6px 0 0; line-height: 1.4; max-width: 140px; }
.lc-arrow { font-size: 1.4rem; color: #475569; margin: 4px 0; }

/* QUIZ */
.quiz-card { max-width: 820px; margin: 0 auto; }
.quiz-title { font-size: 1.8rem; font-weight: 800; color: #fff; margin-bottom: 6px; }
.quiz-radio { color: #e2e8f0 !important; }

@media (max-width: 768px) {
  .comp-col { padding: 10px 12px; font-size: 0.82rem; }
  .lifecycle-flow { flex-direction: column; align-items: center; }
  .lc-step { width: 100%; max-width: 300px; }
}
</style>
