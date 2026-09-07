<template>
  <div class="page-wrapper">
    <!-- ANIMATED HERO -->
    <section class="hero-section">
      <div class="hero-bg-grid"></div>
      <div class="container text-center hero-inner">
        <n-tag type="warning" round class="mb-4">{{ $t('dev_web_page.badge') }}</n-tag>
        <h1 class="hero-title">{{ $t('dev_web_page.api_title') }}</h1>
        <p class="hero-text">{{ $t('dev_web_page.api_desc') }}</p>
        <div class="hero-stats">
          <div class="stat-pill pill-get">GET</div>
          <div class="stat-pill pill-post">POST</div>
          <div class="stat-pill pill-put">PUT</div>
          <div class="stat-pill pill-delete">DELETE</div>
          <div class="stat-pill pill-jwt">JWT Bearer</div>
        </div>
      </div>
    </section>

    <!-- ¿QUÉ ES UNA API REST? -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-purple">📡 Concepto</div>
          <h2 class="section-title">¿Qué es una API RESTful?</h2>
          <p class="section-subtitle">Interfaz para que dos aplicaciones se comuniquen a través del protocolo HTTP siguiendo restricciones REST</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="glass-card concept-pill" data-aos="fade-up">
            <div class="pill-icon">🌐</div>
            <h3>REST (Representational State Transfer)</h3>
            <p class="high-contrast-text">Arquitectura sin estado (stateless) que usa HTTP para transferir representaciones de recursos. Cada URL representa un recurso único.</p>
          </div>
          <div class="glass-card concept-pill" data-aos="fade-up" data-aos-delay="100">
            <div class="pill-icon">📦</div>
            <h3>Recurso (Resource)</h3>
            <p class="high-contrast-text">Cualquier entidad del dominio: usuario, curso, nota. Representada como JSON en las respuestas HTTP de la API.</p>
          </div>
          <div class="glass-card concept-pill" data-aos="fade-up" data-aos-delay="200">
            <div class="pill-icon">🔑</div>
            <h3>Endpoint</h3>
            <p class="high-contrast-text">URL específica que expone un recurso o acción. Ejemplo: <code class="inline-code">GET /api/v1/cursos/5</code> obtiene el curso con ID 5.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- VERBOS HTTP -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-purple">
            <n-icon :component="CloudUploadOutline" size="14" />
            {{ $t('dev_web_page.rest_chip') }}
          </div>
          <h2 class="section-title">{{ $t('dev_web_page.rest_title') }}</h2>
          <p class="section-subtitle">{{ $t('dev_web_page.rest_desc') }}</p>
        </div>

        <div class="http-verbs-grid mb-10">
          <div class="verb-card verb-get" data-aos="fade-up">
            <div class="verb-method">GET</div>
            <div class="verb-info">
              <div class="verb-desc">{{ $t('dev_web_page.get_desc') }}</div>
              <code class="verb-example">GET /api/cursos</code>
              <div class="verb-code">200 OK</div>
            </div>
          </div>
          <div class="verb-card verb-post" data-aos="fade-up" data-aos-delay="50">
            <div class="verb-method">POST</div>
            <div class="verb-info">
              <div class="verb-desc">{{ $t('dev_web_page.post_desc') }}</div>
              <code class="verb-example">POST /api/cursos</code>
              <div class="verb-code">201 Created</div>
            </div>
          </div>
          <div class="verb-card verb-put" data-aos="fade-up" data-aos-delay="100">
            <div class="verb-method">PUT</div>
            <div class="verb-info">
              <div class="verb-desc">{{ $t('dev_web_page.put_desc') }}</div>
              <code class="verb-example">PUT /api/cursos/5</code>
              <div class="verb-code">200 OK</div>
            </div>
          </div>
          <div class="verb-card verb-patch" data-aos="fade-up" data-aos-delay="150">
            <div class="verb-method">PATCH</div>
            <div class="verb-info">
              <div class="verb-desc">Actualiza parcialmente un recurso existente</div>
              <code class="verb-example">PATCH /api/cursos/5</code>
              <div class="verb-code">200 OK</div>
            </div>
          </div>
          <div class="verb-card verb-delete" data-aos="fade-up" data-aos-delay="200">
            <div class="verb-method">DELETE</div>
            <div class="verb-info">
              <div class="verb-desc">{{ $t('dev_web_page.delete_desc') }}</div>
              <code class="verb-example">DELETE /api/cursos/5</code>
              <div class="verb-code">204 No Content</div>
            </div>
          </div>
        </div>

        <!-- CÓDIGOS DE ESTADO HTTP -->
        <div class="section-header text-center mt-10">
          <h3 class="section-title" style="font-size: 1.8rem;">Códigos de Estado HTTP Esenciales</h3>
          <p class="section-subtitle">El servidor comunica el resultado de cada operación con un código numérico</p>
        </div>
        <div class="status-grid">
          <div v-for="code in statusCodes" :key="code.code" class="status-card" :style="{ borderColor: code.color }">
            <span class="status-code" :style="{ color: code.color }">{{ code.code }}</span>
            <span class="status-name">{{ code.name }}</span>
            <span class="status-desc">{{ code.desc }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- AUTENTICACIÓN JWT -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-amber">🔐 Seguridad</div>
          <h2 class="section-title">Autenticación con JWT (JSON Web Token)</h2>
          <p class="section-subtitle">Estándar RFC 7519 para transmitir claims de identidad entre partes de forma segura y compacta</p>
        </div>

        <div class="jwt-flow" data-aos="fade-up">
          <div v-for="(step, i) in jwtFlow" :key="i" class="jwt-step">
            <div class="jwt-num">{{ i + 1 }}</div>
            <div class="jwt-content">
              <div class="jwt-title">{{ step.title }}</div>
              <div class="jwt-body">{{ step.body }}</div>
            </div>
            <div v-if="i < jwtFlow.length - 1" class="jwt-arrow">→</div>
          </div>
        </div>

        <div class="glass-card mt-8" data-aos="zoom-in">
          <h3 class="text-amber-300">Estructura de un JWT</h3>
          <div class="jwt-structure">
            <span class="jwt-part jwt-header">eyJhbGciOiJIUzI1NiJ9</span>.<span class="jwt-part jwt-payload">eyJ1c2VySWQiOiI1In0</span>.<span class="jwt-part jwt-sig">XbPfbIHMI6arZ3Y9oh8</span>
          </div>
          <div class="jwt-legend">
            <span class="legend-item"><span class="legend-dot" style="background:#f59e0b"></span>Header (algoritmo)</span>
            <span class="legend-item"><span class="legend-dot" style="background:#22d3ee"></span>Payload (claims)</span>
            <span class="legend-item"><span class="legend-dot" style="background:#a78bfa"></span>Signature (verificación)</span>
          </div>
        </div>
      </div>
    </section>

    <!-- AXIOS INTERCEPTORES -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-purple">🔗 Cliente HTTP</div>
          <h2 class="section-title">{{ $t('dev_web_page.axios_title') }}</h2>
          <p class="section-subtitle">{{ $t('dev_web_page.axios_desc') }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="glass-card" data-aos="fade-right">
            <div class="card-badge badge-amber mb-3">Instancia de Axios + Interceptor de Solicitud</div>
            <div class="code-box-large">
              <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-lang">services/api.ts</span></div>
              <pre><code>import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.unibague.edu.co/v1',
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' }
});

// Interceptor de Solicitud (Request)
api.interceptors.request.use((config) =&gt; {
  const token = localStorage.getItem('jwt_token');
  if (token) {
    // Inyecta Bearer Token en CADA solicitud
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) =&gt; Promise.reject(error));

export default api;</code></pre>
            </div>
          </div>

          <div class="glass-card" data-aos="fade-left">
            <div class="card-badge badge-amber mb-3">Interceptor de Respuesta + Manejo de Errores Global</div>
            <div class="code-box-large">
              <div class="code-header"><span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span><span class="code-lang">services/api.ts</span></div>
              <pre><code>// Interceptor de Respuesta (Response)
api.interceptors.response.use(
  (response) =&gt; response, // éxito: pasar directo
  (error) =&gt; {
    const status = error.response?.status;

    if (status === 401) {
      // Token expirado: limpiar y redirigir
      localStorage.removeItem('jwt_token');
      window.location.href = '/login';
    } else if (status === 403) {
      console.warn('Acceso denegado a este recurso.');
    } else if (status === 500) {
      console.error('Error interno del servidor.');
    }

    return Promise.reject(error);
  }
);</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- QUIZ -->
    <section class="content-section">
      <div class="container">
        <div class="glass-card quiz-card text-center" data-aos="fade-up">
          <div class="section-chip chip-amber mb-3">🧪 Autoevaluación</div>
          <h2 class="quiz-title">Cuestionario: APIs RESTful & JWT</h2>
          <p class="high-contrast-text mb-6">Verifica tu comprensión de HTTP, REST y autenticación con tokens</p>

          <div v-if="!quizSubmitted" class="quiz-body text-left">
            <div v-for="(q, idx) in questions" :key="idx" class="quiz-question mb-6">
              <h4 class="text-amber-300 mb-3">{{ idx + 1 }}. {{ q.title }}</h4>
              <n-radio-group v-model:value="userAnswers[idx]" :name="`q${idx}`">
                <n-space vertical>
                  <n-radio v-for="(opt, j) in q.options" :key="j" :value="j" class="quiz-radio">{{ opt }}</n-radio>
                </n-space>
              </n-radio-group>
            </div>
            <div class="text-center mt-6">
              <n-button type="warning" size="large" round @click="submitQuiz">✅ Verificar Respuestas</n-button>
            </div>
          </div>

          <div v-else class="quiz-results">
            <n-result
              :status="score >= questions.length - 1 ? 'success' : 'info'"
              :title="`Puntaje: ${score} / ${questions.length}`"
              :description="score >= questions.length - 1 ? '¡Excelente! Dominas las APIs REST y JWT.' : 'Repasa los verbos HTTP y la estructura de JWT.'">
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
import { CloudUploadOutline } from '@vicons/ionicons5';

const { t } = useI18n();

const quizSubmitted = ref(false);
const score = ref(0);
const userAnswers = ref<(number | null)[]>([null, null, null]);

const statusCodes = [
  { code: '200', name: 'OK', desc: 'Solicitud exitosa con datos.', color: '#22c55e' },
  { code: '201', name: 'Created', desc: 'Recurso creado exitosamente.', color: '#34d399' },
  { code: '204', name: 'No Content', desc: 'Éxito sin cuerpo de respuesta.', color: '#6ee7b7' },
  { code: '400', name: 'Bad Request', desc: 'Datos del cliente inválidos.', color: '#f59e0b' },
  { code: '401', name: 'Unauthorized', desc: 'Token inválido o expirado.', color: '#fb923c' },
  { code: '403', name: 'Forbidden', desc: 'Sin permisos suficientes.', color: '#f87171' },
  { code: '404', name: 'Not Found', desc: 'Recurso no encontrado.', color: '#ef4444' },
  { code: '500', name: 'Server Error', desc: 'Error interno del servidor.', color: '#dc2626' },
];

const jwtFlow = [
  { title: 'Login', body: 'Cliente envía credenciales (email/password) al servidor.' },
  { title: 'Verificación', body: 'Servidor verifica en BD y genera un JWT firmado con clave secreta.' },
  { title: 'Token enviado', body: 'JWT devuelto al cliente. Se almacena en localStorage o httpOnly cookie.' },
  { title: 'Solicitudes autenticadas', body: 'Cada request incluye: Authorization: Bearer {JWT}' },
  { title: 'Validación', body: 'Servidor verifica la firma del JWT sin consultar la BD.' },
];

const questions = [
  {
    title: '¿Qué código de estado HTTP indica que un recurso fue creado exitosamente con POST?',
    options: ['200 OK', '201 Created', '204 No Content', '301 Moved Permanently'],
    correct: 1
  },
  {
    title: '¿Dónde se envía el JWT en cada solicitud autenticada con Axios?',
    options: [
      'En el cuerpo (body) de la solicitud como JSON.',
      'Como parámetro de URL ?token=...',
      'En el header Authorization como Bearer {token}.',
      'En el footer de la respuesta HTML.'
    ],
    correct: 2
  },
  {
    title: '¿Qué hace un Interceptor de Respuesta de Axios al recibir el código 401?',
    options: [
      'Vuelve a enviar la solicitud automáticamente.',
      'Incrementa el timeout de la conexión.',
      'Detecta sesión expirada y permite redirigir al login o limpiar el token.',
      'Convierte el error en un 200 OK para el componente.'
    ],
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
.hero-section { position: relative; overflow: hidden; padding: 100px 0 60px; background: linear-gradient(135deg, #1a0a28 0%, #1c1228 50%, #0f0f1f 100%); }
.hero-bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(167,139,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.05) 1px, transparent 1px); background-size: 40px 40px; }
.hero-inner { position: relative; z-index: 2; }
.hero-title { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 900; color: #a78bfa; margin: 12px 0; line-height: 1.15; }
.hero-text { max-width: 680px; margin: 0 auto 32px; color: #c4b5fd; font-size: 1.15rem; line-height: 1.7; }
.hero-stats { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
.stat-pill { padding: 8px 18px; border-radius: 20px; font-size: 0.9rem; font-weight: 700; border: 1px solid; }
.pill-get { background: rgba(34,197,94,0.15); color: #4ade80; border-color: rgba(34,197,94,0.3); }
.pill-post { background: rgba(59,130,246,0.15); color: #60a5fa; border-color: rgba(59,130,246,0.3); }
.pill-put { background: rgba(245,158,11,0.15); color: #fbbf24; border-color: rgba(245,158,11,0.3); }
.pill-delete { background: rgba(239,68,68,0.15); color: #f87171; border-color: rgba(239,68,68,0.3); }
.pill-jwt { background: rgba(167,139,250,0.15); color: #a78bfa; border-color: rgba(167,139,250,0.3); }

/* SECTIONS */
.content-section { padding: 70px 0; }
.section-alt { background: rgba(0,0,0,0.2); }
.section-header { margin-bottom: 48px; }
.section-chip { display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 700; margin-bottom: 10px; }
.chip-purple { background: rgba(167,139,250,0.15); color: #a78bfa; }
.chip-amber { background: rgba(245,158,11,0.15); color: #fbbf24; }
.section-title { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 800; color: #fff; margin-bottom: 8px; line-height: 1.2; }
.section-subtitle { color: #cbd5e1; font-size: 1.05rem; max-width: 640px; margin: 0 auto; }

/* CARDS */
.glass-card { background: rgba(15,31,57,0.8); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 32px; }
.glass-card h3 { color: #f8fafc; font-size: 1.2rem; font-weight: 700; margin-bottom: 10px; }
.concept-pill { border-top: 3px solid #a78bfa; transition: transform 0.3s ease; }
.concept-pill:hover { transform: translateY(-5px); }
.pill-icon { font-size: 2rem; margin-bottom: 10px; }
.high-contrast-text { color: #e2e8f0 !important; font-size: 0.97rem; line-height: 1.7; }
.inline-code { background: rgba(167,139,250,0.15); color: #c4b5fd; padding: 2px 6px; border-radius: 5px; font-family: 'Fira Code', monospace; font-size: 0.88em; }
.card-badge { display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 0.82rem; font-weight: 700; }
.badge-amber { background: rgba(245,158,11,0.2); color: #fbbf24; }

/* HTTP VERBS GRID */
.http-verbs-grid { display: flex; flex-direction: column; gap: 12px; }
.verb-card { display: flex; align-items: center; gap: 20px; background: rgba(15,31,57,0.75); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 18px 24px; transition: transform 0.2s ease; }
.verb-card:hover { transform: translateX(6px); }
.verb-method { font-family: 'Fira Code', monospace; font-size: 1rem; font-weight: 800; min-width: 80px; padding: 8px 14px; border-radius: 10px; text-align: center; }
.verb-get .verb-method { background: rgba(34,197,94,0.2); color: #4ade80; }
.verb-post .verb-method { background: rgba(59,130,246,0.2); color: #60a5fa; }
.verb-put .verb-method { background: rgba(245,158,11,0.2); color: #fbbf24; }
.verb-patch .verb-method { background: rgba(99,102,241,0.2); color: #818cf8; }
.verb-delete .verb-method { background: rgba(239,68,68,0.2); color: #f87171; }
.verb-info { flex: 1; }
.verb-desc { color: #cbd5e1; font-size: 0.95rem; margin-bottom: 4px; }
.verb-example { font-family: 'Fira Code', monospace; font-size: 0.85rem; color: #94a3b8; display: block; }
.verb-code { display: inline-block; margin-top: 4px; font-family: 'Fira Code', monospace; font-size: 0.8rem; color: #a3e635; background: rgba(163,230,53,0.1); padding: 2px 8px; border-radius: 6px; }

/* STATUS CODES GRID */
.status-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }
.status-card { background: rgba(15,31,57,0.7); border: 1px solid; border-radius: 14px; padding: 16px; text-align: center; transition: transform 0.2s; display: flex; flex-direction: column; gap: 4px; }
.status-card:hover { transform: translateY(-4px); }
.status-code { font-family: 'Fira Code', monospace; font-size: 1.6rem; font-weight: 800; }
.status-name { color: #e2e8f0; font-weight: 700; font-size: 0.95rem; }
.status-desc { color: #94a3b8; font-size: 0.82rem; }

/* JWT FLOW */
.jwt-flow { display: flex; flex-wrap: wrap; gap: 0; align-items: flex-start; justify-content: center; }
.jwt-step { display: flex; align-items: flex-start; gap: 12px; }
.jwt-num { width: 32px; height: 32px; border-radius: 50%; background: rgba(167,139,250,0.3); border: 2px solid #a78bfa; color: #a78bfa; font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; flex-shrink: 0; margin-top: 4px; }
.jwt-content { background: rgba(15,31,57,0.7); border: 1px solid rgba(167,139,250,0.2); border-radius: 14px; padding: 14px 18px; max-width: 160px; }
.jwt-title { color: #c4b5fd; font-weight: 700; font-size: 0.9rem; margin-bottom: 4px; }
.jwt-body { color: #94a3b8; font-size: 0.8rem; line-height: 1.4; }
.jwt-arrow { color: #a78bfa; font-size: 1.5rem; margin: 18px 4px 0; }

/* JWT STRUCTURE */
.jwt-structure { font-family: 'Fira Code', monospace; font-size: 1rem; word-break: break-all; margin: 16px 0 10px; background: #060d1a; padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); }
.jwt-part { padding: 2px 4px; border-radius: 4px; }
.jwt-header { color: #fbbf24; background: rgba(245,158,11,0.1); }
.jwt-payload { color: #22d3ee; background: rgba(6,182,212,0.1); }
.jwt-sig { color: #a78bfa; background: rgba(167,139,250,0.1); }
.jwt-legend { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 10px; }
.legend-item { display: flex; align-items: center; gap: 6px; color: #94a3b8; font-size: 0.88rem; }
.legend-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }

/* CODE BOX */
.code-box-large { background: #060d1a; border-radius: 14px; border: 1px solid rgba(255,255,255,0.12); overflow: hidden; margin-top: 14px; }
.code-header { display: flex; align-items: center; gap: 6px; padding: 10px 16px; background: rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.08); }
.code-dot { width: 12px; height: 12px; border-radius: 50%; }
.code-dot.red { background: #ef4444; }
.code-dot.yellow { background: #f59e0b; }
.code-dot.green { background: #10b981; }
.code-lang { margin-left: auto; color: #64748b; font-size: 0.78rem; font-family: 'Fira Code', monospace; }
.code-box-large pre { margin: 0; padding: 18px; overflow-x: auto; }
.code-box-large code { color: #c4b5fd; font-family: 'Fira Code', monospace; font-size: 0.88rem; line-height: 1.7; white-space: pre; }

/* QUIZ */
.quiz-card { max-width: 820px; margin: 0 auto; }
.quiz-title { font-size: 1.8rem; font-weight: 800; color: #fff; margin-bottom: 6px; }
.quiz-radio { color: #e2e8f0 !important; }

@media (max-width: 768px) {
  .jwt-flow { flex-direction: column; align-items: center; }
  .jwt-arrow { transform: rotate(90deg); }
  .verb-card { flex-direction: column; align-items: flex-start; }
}
</style>
