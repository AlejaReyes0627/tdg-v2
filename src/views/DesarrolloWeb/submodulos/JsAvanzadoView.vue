<template>
  <div class="page-wrapper">
    <!-- ANIMATED HERO -->
    <section class="hero-section">
      <div class="hero-code-rain">
        <div class="cr-col" v-for="i in 10" :key="i" :style="{ animationDelay: (i*0.3)+'s', left: (i*10-5)+'%' }">async await</div>
      </div>
      <div class="container text-center hero-inner">
        <n-tag type="warning" round class="mb-4">{{ $t('dev_web_page.badge') }}</n-tag>
        <h1 class="hero-title">{{ $t('dev_web_page.js_avanzado_title') }}</h1>
        <p class="hero-text">{{ $t('dev_web_page.js_avanzado_desc') }}</p>
        <div class="hero-stats">
          <div class="stat-pill pill-async">⚡ Async/Await</div>
          <div class="stat-pill pill-promise">🤝 Promises</div>
          <div class="stat-pill pill-loop">🔄 Event Loop</div>
          <div class="stat-pill pill-closure">🔒 Closures</div>
          <div class="stat-pill pill-es6">🚀 ES6+</div>
        </div>
      </div>
    </section>

    <!-- CORE CONCEPTS GLOSSARY -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-yellow">
            <n-icon :component="BookOutline" size="14" />
            Glosario Conceptual
          </div>
          <h2 class="section-title">{{ $t('dev_web_page.js_concepts_title') }}</h2>
          <p class="section-subtitle">{{ $t('dev_web_page.js_concepts_subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="glass-card concept-card" data-aos="fade-up">
            <div class="concept-icon text-amber-400">⚡</div>
            <h3>{{ $t('dev_web_page.concept_async_prog_title') }}</h3>
            <p class="high-contrast-text">{{ $t('dev_web_page.concept_async_prog_desc') }}</p>
          </div>

          <div class="glass-card concept-card" data-aos="fade-up" data-aos-delay="100">
            <div class="concept-icon text-rose-400">🤝</div>
            <h3>{{ $t('dev_web_page.concept_promises_title') }}</h3>
            <p class="high-contrast-text">{{ $t('dev_web_page.concept_promises_desc') }}</p>
          </div>

          <div class="glass-card concept-card" data-aos="fade-up" data-aos-delay="200">
            <div class="concept-icon text-emerald-400">⏳</div>
            <h3>{{ $t('dev_web_page.concept_async_await_title') }}</h3>
            <p class="high-contrast-text">{{ $t('dev_web_page.concept_async_await_desc') }}</p>
          </div>

          <div class="glass-card concept-card" data-aos="fade-up" data-aos-delay="300">
            <div class="concept-icon text-cyan-400">🔄</div>
            <h3>{{ $t('dev_web_page.concept_event_loop_title') }}</h3>
            <p class="high-contrast-text">{{ $t('dev_web_page.concept_event_loop_desc') }}</p>
          </div>

          <div class="glass-card concept-card" data-aos="fade-up" data-aos-delay="400">
            <div class="concept-icon text-purple-400">🔒</div>
            <h3>{{ $t('dev_web_page.concept_closures_title') }}</h3>
            <p class="high-contrast-text">{{ $t('dev_web_page.concept_closures_desc') }}</p>
          </div>

          <div class="glass-card concept-card" data-aos="fade-up" data-aos-delay="500">
            <div class="concept-icon text-indigo-400">🚀</div>
            <h3>{{ $t('dev_web_page.concept_es6_syntax_title') }}</h3>
            <p class="high-contrast-text">{{ $t('dev_web_page.concept_es6_syntax_desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- EVENT LOOP ARCHITECTURE -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-yellow">
            <n-icon :component="SyncOutline" size="14" />
            {{ $t('dev_web_page.event_loop_chip') }}
          </div>
          <h2 class="section-title">{{ $t('dev_web_page.event_loop_title') }}</h2>
          <p class="section-subtitle">{{ $t('dev_web_page.event_loop_desc') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="glass-card border-top-amber" data-aos="fade-up">
            <h3>{{ $t('dev_web_page.call_stack_title') }}</h3>
            <p class="high-contrast-text mb-3">{{ $t('dev_web_page.call_stack_desc') }}</p>
            <div class="code-box-mini">
              <pre><code>function main() {
  console.log('1. Pila');
}
main(); // LIFO Stack</code></pre>
            </div>
          </div>

          <div class="glass-card border-top-emerald" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ $t('dev_web_page.microtask_title') }}</h3>
            <p class="high-contrast-text mb-3">{{ $t('dev_web_page.microtask_desc') }}</p>
            <div class="code-box-mini">
              <pre><code>Promise.resolve()
  .then(() => console.log('2. Microtask'));
// Ejecuta antes que macrotareas</code></pre>
            </div>
          </div>

          <div class="glass-card border-top-cyan" data-aos="fade-up" data-aos-delay="200">
            <h3>{{ $t('dev_web_page.macrotask_title') }}</h3>
            <p class="high-contrast-text mb-3">{{ $t('dev_web_page.macrotask_desc') }}</p>
            <div class="code-box-mini">
              <pre><code>setTimeout(() => {
  console.log('3. Macrotask');
}, 0); // Timer API</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CLOSURES MASTERCLASS -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-purple">
            <n-icon :component="LockClosedOutline" size="14" />
            Patrón de Encapsulamiento
          </div>
          <h2 class="section-title">Clausuras (Closures) y Privacidad de Datos</h2>
          <p class="section-subtitle">Aprende cómo las funciones recuerdan su ámbito léxico externo</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="glass-card">
            <h3 class="text-purple-300">¿Qué es una Clausura?</h3>
            <p class="high-contrast-text mb-4">
              Una clausura da a una función interna acceso al ámbito de su función contenedora exterior. En JavaScript, las clausuras se crean cada vez que se crea una función en tiempo de creación de la función.
            </p>
            <ul class="feature-list">
              <li>Permite ocultar variables del scope global (Privacidad).</li>
              <li>Conserva el estado de variables locales entre invocaciones.</li>
              <li>Base fundamental para la creación de Fábricas de Funciones (Factory Pattern) y Módulos JS.</li>
            </ul>
          </div>

          <div class="glass-card">
            <h3 class="text-amber-300">Ejemplo Práctico de Closure</h3>
            <div class="code-box-large">
              <pre><code>function crearContador() {
  let contador = 0; // Variable privada encerrada
  
  return {
    incrementar: () => ++contador,
    decrementar: () => --contador,
    obtenerValor: () => contador
  };
}

const miContador = crearContador();
console.log(miContador.incrementar()); // 1
console.log(miContador.incrementar()); // 2
console.log(miContador.contador); // undefined (¡Protegido!)</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EVOLUCIÓN ASÍNCRONA -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <h2 class="section-title">{{ $t('dev_web_page.async_evolution_title') }}</h2>
          <p class="section-subtitle">{{ $t('dev_web_page.async_evolution_desc') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="glass-card">
            <h3 class="text-rose-400">{{ $t('dev_web_page.promises_title') }}</h3>
            <div class="code-box-large">
              <pre><code>// Manejo con Promesas (.then / .catch)
fetchUser(id)
  .then(user => fetchPosts(user.id))
  .then(posts => console.log(posts))
  .catch(err => console.error('Error:', err));</code></pre>
            </div>
          </div>

          <div class="glass-card">
            <h3 class="text-emerald-400">{{ $t('dev_web_page.async_await_title') }}</h3>
            <div class="code-box-large">
              <pre><code>// Sintaxis moderna Async/Await
async function getStudentData(id) {
  try {
    const user = await fetchUser(id);
    const posts = await fetchPosts(user.id);
    return posts;
  } catch (err) {
    console.error('Error al obtener datos:', err);
  }
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ES6+ FEATURES -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <h2 class="section-title">{{ $t('dev_web_page.es6_features_title') }}</h2>
          <p class="section-subtitle">Sintaxis moderna que simplifica el desarrollo web</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="glass-card">
            <h3 class="text-cyan-300">Desestructuración (Destructuring)</h3>
            <p class="high-contrast-text mb-3">Extrae propiedades de objetos o arrays en variables limpias.</p>
            <div class="code-box-large">
              <pre><code>const estudiante = { nombre: 'Ana', rol: 'Dev', notas: [5, 4, 5] };
const { nombre, rol } = estudiante;
const [nota1, ...restoNotas] = estudiante.notas;

console.log(nombre, nota1); // 'Ana', 5</code></pre>
            </div>
          </div>

          <div class="glass-card">
            <h3 class="text-amber-300">Operadores Spread & Rest (...)</h3>
            <p class="high-contrast-text mb-3">Expande o agrupa elementos de forma inmutable.</p>
            <div class="code-box-large">
              <pre><code>// Copia inmutable de objeto
const usuarioNuevo = { ...estudiante, activo: true };

// Agrupar parámetros rest
function sumar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}</code></pre>
            </div>
          </div>
        </div>

        <div class="glass-card" data-aos="zoom-in">
          <h3>{{ $t('dev_web_page.optional_chaining_title') }}</h3>
          <p class="high-contrast-text mb-3">{{ $t('dev_web_page.optional_chaining_desc') }}</p>
          <div class="code-box-large">
            <pre><code>const usuario = { perfil: { nombre: 'María' } };

// Acceso seguro sin error aunque 'direccion' sea undefined
const ciudad = usuario?.perfil?.direccion?.ciudad ?? 'Ciudad no registrada';
console.log(ciudad); // 'Ciudad no registrada'</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- SELF ASSESSMENT QUIZ -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="glass-card quiz-card text-center" data-aos="fade-up">
          <div class="section-chip chip-yellow mb-2">Autoevaluación</div>
          <h2>Cuestionario de JavaScript Avanzado</h2>
          <p class="high-contrast-text mb-6">Pon a prueba tu conocimiento sobre el Event Loop y Asincronía</p>

          <div v-if="!quizSubmitted" class="quiz-body text-left">
            <div v-for="(q, idx) in questions" :key="idx" class="quiz-question mb-6">
              <h4 class="text-amber-300 mb-3">{{ idx + 1 }}. {{ q.title }}</h4>
              <n-radio-group v-model:value="userAnswers[idx]" name="quiz-group">
                <n-space vertical>
                  <n-radio v-for="(opt, optIdx) in q.options" :key="optIdx" :value="optIdx" class="quiz-radio">
                    {{ opt }}
                  </n-radio>
                </n-space>
              </n-radio-group>
            </div>

            <div class="text-center mt-6">
              <n-button type="warning" size="large" round @click="submitQuiz">
                Verificar Respuestas
              </n-button>
            </div>
          </div>

          <div v-else class="quiz-results">
            <n-result
              :status="score === questions.length ? 'success' : 'info'"
              :title="`Puntaje Obtendio: ${score} / ${questions.length}`"
              :description="score === questions.length ? '¡Excelente! Dominas la asincronía y el Event Loop de JS.' : 'Repasa la ejecución de Microtareas y Promesas para perfeccionar tu dominio.'"
            >
              <template #footer>
                <n-button type="primary" round @click="resetQuiz">Intentar Nuevamente</n-button>
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
import { SyncOutline, BookOutline, LockClosedOutline } from '@vicons/ionicons5';

const { t } = useI18n();

const quizSubmitted = ref(false);
const score = ref(0);
const userAnswers = ref<(number | null)[]>([null, null, null]);

const questions = [
  {
    title: '¿En qué orden se ejecutan las Microtareas (Promises) respecto al Call Stack?',
    options: [
      'Al mismo tiempo que las funciones sincrónicas.',
      'Inmediatamente cuando la pila (Call Stack) se vacía, antes de cualquier macrotarea.',
      'Después de ejecutar todos los setTimeout() del navegador.',
      'De forma aleatoria dependiendo de la velocidad de la CPU.'
    ],
    correct: 1
  },
  {
    title: '¿Qué propiedad define fundamentalmente a una Clausura (Closure)?',
    options: [
      'Es una función que se ejecuta dentro de un try/catch.',
      'Es un método estático que no puede ser invocado más de una vez.',
      'Es una función que retiene acceso a las variables de su ámbito externo contenedor.',
      'Es una promesa cancelable en tiempo de compilación.'
    ],
    correct: 2
  },
  {
    title: '¿Qué retorna la expresión: undefined ?? "Valor por defecto"?',
    options: [
      'undefined',
      '"Valor por defecto"',
      'null',
      'Lanza un TypeError'
    ],
    correct: 1
  }
];

function submitQuiz() {
  score.value = userAnswers.value.reduce((acc: number, ans, i) => {
    return ans === questions[i].correct ? acc + 1 : acc;
  }, 0);
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
.hero-section { position: relative; overflow: hidden; padding: 110px 0 70px; background: linear-gradient(135deg, #1a1200 0%, #1a0f00 50%, #0d0d00 100%); }
.hero-code-rain { position: absolute; inset: 0; pointer-events: none; display: flex; overflow: hidden; }
.cr-col { position: absolute; font-family: 'Fira Code', monospace; font-size: 0.75rem; color: rgba(251,191,36,0.12); white-space: nowrap; animation: codeRain 10s linear infinite; top: -40px; }
@keyframes codeRain { from { top: -60px; opacity: 0.5; } to { top: 110%; opacity: 0.1; } }
.hero-inner { position: relative; z-index: 2; }
.hero-title { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 900; color: #fbbf24; margin: 12px 0; text-shadow: 0 0 40px rgba(251,191,36,0.3); line-height: 1.15; }
.hero-text { max-width: 680px; margin: 0 auto 32px; color: #fde68a; font-size: 1.15rem; line-height: 1.7; }
.hero-stats { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
.stat-pill { padding: 8px 18px; border-radius: 24px; font-size: 0.9rem; font-weight: 600; border: 1px solid; }
.pill-async { background: rgba(251,191,36,0.15); color: #fbbf24; border-color: rgba(251,191,36,0.35); }
.pill-promise { background: rgba(244,63,94,0.15); color: #fb7185; border-color: rgba(244,63,94,0.35); }
.pill-loop { background: rgba(6,182,212,0.15); color: #22d3ee; border-color: rgba(6,182,212,0.35); }
.pill-closure { background: rgba(168,85,247,0.15); color: #c084fc; border-color: rgba(168,85,247,0.35); }
.pill-es6 { background: rgba(99,102,241,0.15); color: #818cf8; border-color: rgba(99,102,241,0.35); }

/* SECTIONS */
.content-section { padding: 70px 0; }
.section-alt { background: rgba(0, 0, 0, 0.25); }
.section-header { margin-bottom: 48px; }
.section-chip { display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 700; margin-bottom: 10px; background: rgba(245, 158, 11, 0.15); color: #fbbf24; }
.chip-yellow { background: rgba(245, 158, 11, 0.15); color: #fbbf24; }
.chip-purple { background: rgba(168, 85, 247, 0.15); color: #c084fc; }
.section-title { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 800; color: #ffffff; margin-bottom: 8px; line-height: 1.2; }
.section-subtitle { color: #cbd5e1; font-size: 1.05rem; max-width: 640px; margin: 0 auto; }

/* CARDS */
.glass-card { background: rgba(15, 31, 57, 0.8); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 24px; padding: 32px; }
.concept-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.concept-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(251, 191, 36, 0.12); }
.concept-icon { font-size: 2rem; margin-bottom: 12px; }
.glass-card h3 { color: #ffffff; font-size: 1.25rem; font-weight: 700; margin-bottom: 10px; }
.high-contrast-text { color: #e2e8f0 !important; font-size: 0.97rem; line-height: 1.7; }
.border-top-amber { border-top: 4px solid #f59e0b; }
.border-top-emerald { border-top: 4px solid #10b981; }
.border-top-cyan { border-top: 4px solid #06b6d4; }
.feature-list { list-style: disc; padding-left: 20px; color: #cbd5e1; line-height: 1.9; }

/* CODE BOX */
.code-box-mini { background: #060d1a; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; }
.code-box-mini code { color: #fcd34d; font-family: 'Fira Code', monospace; font-size: 0.85rem; display: block; padding: 12px; white-space: pre; }
.code-box-large { background: #060d1a; border-radius: 14px; border: 1px solid rgba(255,255,255,0.12); overflow: hidden; margin-top: 14px; }
.code-box-large pre { margin: 0; padding: 18px; overflow-x: auto; }
.code-box-large code { color: #fcd34d; font-family: 'Fira Code', monospace; font-size: 0.9rem; white-space: pre; line-height: 1.7; }

.quiz-card { max-width: 820px; margin: 0 auto; }
.quiz-radio { color: #e2e8f0 !important; }

@media (max-width: 768px) { .hero-code-rain { display: none; } }
</style>
