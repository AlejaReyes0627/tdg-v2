<template>
  <div class="page-wrapper">
    <!-- ANIMATED HERO -->
    <section class="hero-section">
      <div class="hero-floating-tags">
        <span class="ftag" style="top:10%;left:5%;animation-delay:0s">&lt;header&gt;</span>
        <span class="ftag" style="top:20%;right:8%;animation-delay:0.5s">&lt;main&gt;</span>
        <span class="ftag" style="top:55%;left:12%;animation-delay:1s">&lt;section&gt;</span>
        <span class="ftag" style="top:70%;right:5%;animation-delay:1.5s">&lt;article&gt;</span>
        <span class="ftag" style="top:38%;right:20%;animation-delay:2s">&lt;nav&gt;</span>
        <span class="ftag css-tag" style="top:75%;left:40%;animation-delay:0.8s">display: flex</span>
        <span class="ftag css-tag" style="top:15%;left:45%;animation-delay:1.2s">clamp()</span>
      </div>
      <div class="container text-center hero-inner">
        <n-tag type="info" round class="mb-4">{{ $t('dev_web_page.badge') }}</n-tag>
        <h1 class="hero-title">{{ $t('dev_web_page.html_css_title') }}</h1>
        <p class="hero-text">{{ $t('dev_web_page.html_css_desc') }}</p>
        <div class="hero-stats">
          <div class="stat-pill pill-html">🏛️ HTML5 Semántico</div>
          <div class="stat-pill pill-css">🎨 CSS Custom Props</div>
          <div class="stat-pill pill-flex">📐 Flexbox & Grid</div>
          <div class="stat-pill pill-resp">📱 Responsive Design</div>
        </div>
      </div>
    </section>

    <!-- HTML & CSS OVERALL CONCEPTS -->
    <section class="content-section">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="glass-card concept-box-html" data-aos="fade-right">
            <div class="badge-chip chip-orange mb-3">Estándar W3C</div>
            <h2 class="concept-header-title text-orange-400">{{ $t('dev_web_page.html_concept_title') }}</h2>
            <p class="high-contrast-text mb-4">{{ $t('dev_web_page.html_concept_desc') }}</p>
            <div class="code-box-mini">
              <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
  &lt;head&gt;&lt;meta charset="UTF-8"&gt;&lt;/head&gt;
  &lt;body&gt;&lt;h1&gt;Estructura Semántica&lt;/h1&gt;&lt;/body&gt;
&lt;/html&gt;</code></pre>
            </div>
          </div>

          <div class="glass-card concept-box-css" data-aos="fade-left">
            <div class="badge-chip chip-blue mb-3">Diseño y Estilo</div>
            <h2 class="concept-header-title text-sky-400">{{ $t('dev_web_page.css_concept_title') }}</h2>
            <p class="high-contrast-text mb-4">{{ $t('dev_web_page.css_concept_desc') }}</p>
            <div class="code-box-mini">
              <pre><code>:root { --accent: #38bdf8; }
body {
  font-family: system-ui, sans-serif;
  color: var(--accent);
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HTML TAGS DICTIONARY -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip">
            <n-icon :component="CodeSlashOutline" size="14" />
            Diccionario Magistral
          </div>
          <h2 class="section-title">{{ $t('dev_web_page.html_dict_title') }}</h2>
          <p class="section-subtitle">{{ $t('dev_web_page.html_dict_subtitle') }}</p>
        </div>

        <n-tabs type="segment" animated class="custom-tabs mb-8">
          <!-- ESTRUCTURA Y SEMÁNTICA -->
          <n-tab-pane name="estructura" tab="🏛️ Estructura & Semántica">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div v-for="tag in structureTags" :key="tag.name" class="glass-card tag-card">
                <code class="tag-badge">&lt;{{ tag.name }}&gt;</code>
                <p class="high-contrast-text mt-2">{{ $t(tag.descKey) }}</p>
              </div>
            </div>
          </n-tab-pane>

          <!-- TEXTO Y ENCABEZADOS -->
          <n-tab-pane name="texto" tab="✍️ Texto & Encabezados">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div v-for="tag in textTags" :key="tag.name" class="glass-card tag-card">
                <code class="tag-badge">&lt;{{ tag.name }}&gt;</code>
                <p class="high-contrast-text mt-2">{{ $t(tag.descKey) }}</p>
              </div>
            </div>
          </n-tab-pane>

          <!-- FORMULARIOS E INTERACCIÓN -->
          <n-tab-pane name="formularios" tab="📋 Formularios & Entradas">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div v-for="tag in formTags" :key="tag.name" class="glass-card tag-card">
                <code class="tag-badge">&lt;{{ tag.name }}&gt;</code>
                <p class="high-contrast-text mt-2">{{ $t(tag.descKey) }}</p>
              </div>
            </div>
          </n-tab-pane>

          <!-- MULTIMEDIA Y TABLAS -->
          <n-tab-pane name="multimedia" tab="🎨 Media & Tablas">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div v-for="tag in mediaTags" :key="tag.name" class="glass-card tag-card">
                <code class="tag-badge">&lt;{{ tag.name }}&gt;</code>
                <p class="high-contrast-text mt-2">{{ $t(tag.descKey) }}</p>
              </div>
            </div>
          </n-tab-pane>
        </n-tabs>
      </div>
    </section>

    <!-- COMPARATIVA SEMÁNTICA -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <h2 class="section-title">{{ $t('dev_web_page.html_semantic_title') }}</h2>
          <p class="section-subtitle">{{ $t('dev_web_page.html_semantic_desc') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="glass-card bad-practice" data-aos="fade-right">
            <h3>{{ $t('dev_web_page.html_bad_title') }}</h3>
            <p class="high-contrast-text mb-3">{{ $t('dev_web_page.html_bad_desc') }}</p>
            <div class="code-box mt-3">
              <pre><code>&lt;div class="header"&gt;Mi Sitio&lt;/div&gt;
&lt;div class="nav"&gt;...&lt;/div&gt;
&lt;div class="content"&gt;
  &lt;div class="post"&gt;...&lt;/div&gt;
&lt;/div&gt;
&lt;div class="footer"&gt;Copyright&lt;/div&gt;</code></pre>
            </div>
          </div>

          <div class="glass-card good-practice" data-aos="fade-left">
            <h3>{{ $t('dev_web_page.html_good_title') }}</h3>
            <p class="high-contrast-text mb-3">{{ $t('dev_web_page.html_good_desc') }}</p>
            <div class="code-box mt-3">
              <pre><code>&lt;header&gt;&lt;h1&gt;Mi Sitio&lt;/h1&gt;&lt;/header&gt;
&lt;nav&gt;...&lt;/nav&gt;
&lt;main&gt;
  &lt;article&gt;...&lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt;Copyright&lt;/footer&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PILARES DE CSS -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-green">
            <n-icon :component="GridOutline" size="14" />
            Arquitectura CSS
          </div>
          <h2 class="section-title">{{ $t('dev_web_page.css_pillars_title') }}</h2>
          <p class="section-subtitle">Los 4 fundamentos técnicos para maquetar interfaces profesionales</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <!-- BOX MODEL -->
          <div class="glass-card" data-aos="fade-up">
            <h3 class="text-sky-300">{{ $t('dev_web_page.box_model_title') }}</h3>
            <p class="high-contrast-text mb-4">{{ $t('dev_web_page.box_model_desc') }}</p>
            <div class="box-model-diagram">
              <div class="bm-margin">
                <span>Margin (Margen Externo)</span>
                <div class="bm-border">
                  <span>Border (Borde)</span>
                  <div class="bm-padding">
                    <span>Padding (Relleno)</span>
                    <div class="bm-content">Content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SELECTORES -->
          <div class="glass-card" data-aos="fade-up" data-aos-delay="100">
            <h3 class="text-amber-300">{{ $t('dev_web_page.selectors_title') }}</h3>
            <p class="high-contrast-text mb-4">{{ $t('dev_web_page.selectors_desc') }}</p>
            <div class="code-box-large">
              <pre><code>/* Elemento y Clase */
header .nav-link { color: #fff; }

/* Pseudoclase y Pseudoelemento */
.btn:hover::after {
  content: ' →';
  color: #38bdf8;
}

/* Atributo */
input[type="email"] { border-color: #38bdf8; }</code></pre>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- FLEXBOX VS GRID -->
          <div class="glass-card" data-aos="fade-up">
            <h3>{{ $t('dev_web_page.flex_title') }}</h3>
            <p class="high-contrast-text mb-3">{{ $t('dev_web_page.flex_desc') }}</p>
            <div class="code-box-large">
              <pre><code>.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}</code></pre>
            </div>
          </div>

          <div class="glass-card" data-aos="fade-up" data-aos-delay="100">
            <h3>{{ $t('dev_web_page.grid_title') }}</h3>
            <p class="high-contrast-text mb-3">{{ $t('dev_web_page.grid_desc') }}</p>
            <div class="code-box-large">
              <pre><code>.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RESPONSIVE DESIGN Y VARIABLES -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <h2 class="section-title">{{ $t('dev_web_page.fluid_title') }}</h2>
        </div>

        <div class="glass-card" data-aos="zoom-in">
          <h3>Variables Personalizadas (CSS Custom Properties) y `clamp()`</h3>
          <p class="high-contrast-text mb-4">{{ $t('dev_web_page.fluid_desc') }}</p>
          <div class="code-box-large">
            <pre><code>:root {
  --primary-color: #00acdf;
  --bg-dark: #0f1f39;
  --font-fluid: clamp(1rem, 2.5vw, 2.5rem);
}

h1 {
  font-size: var(--font-fluid);
  color: var(--primary-color);
}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- SELF ASSESSMENT QUIZ FOR HTML/CSS -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="glass-card quiz-card text-center" data-aos="fade-up">
          <div class="section-chip chip-blue mb-2">Autoevaluación</div>
          <h2>Cuestionario de HTML5 & CSS3</h2>
          <p class="high-contrast-text mb-6">Evalúa tu comprensión sobre etiquetas semánticas y el Modelo de Caja</p>

          <div v-if="!quizSubmitted" class="quiz-body text-left">
            <div v-for="(q, idx) in questions" :key="idx" class="quiz-question mb-6">
              <h4 class="text-sky-300 mb-3">{{ idx + 1 }}. {{ q.title }}</h4>
              <n-radio-group v-model:value="userAnswers[idx]" name="quiz-group-html">
                <n-space vertical>
                  <n-radio v-for="(opt, optIdx) in q.options" :key="optIdx" :value="optIdx" class="quiz-radio">
                    {{ opt }}
                  </n-radio>
                </n-space>
              </n-radio-group>
            </div>

            <div class="text-center mt-6">
              <n-button type="info" size="large" round @click="submitQuiz">
                Verificar Respuestas
              </n-button>
            </div>
          </div>

          <div v-else class="quiz-results">
            <n-result
              :status="score === questions.length ? 'success' : 'info'"
              :title="`Puntaje Obtenido: ${score} / ${questions.length}`"
              :description="score === questions.length ? '¡Felicidades! Dominas la maquetación semántica y los pilares de CSS.' : 'Revisa las diferencias entre box-sizing y las etiquetas de sección semánticas.'"
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
import { CodeSlashOutline, GridOutline } from '@vicons/ionicons5';

const { t } = useI18n();

const quizSubmitted = ref(false);
const score = ref(0);
const userAnswers = ref<(number | null)[]>([null, null, null]);

const structureTags = [
  { name: 'header', descKey: 'dev_web_page.tag_header_desc' },
  { name: 'nav', descKey: 'dev_web_page.tag_nav_desc' },
  { name: 'main', descKey: 'dev_web_page.tag_main_desc' },
  { name: 'section', descKey: 'dev_web_page.tag_section_desc' },
  { name: 'article', descKey: 'dev_web_page.tag_article_desc' },
  { name: 'aside', descKey: 'dev_web_page.tag_aside_desc' },
  { name: 'footer', descKey: 'dev_web_page.tag_footer_desc' }
];

const textTags = [
  { name: 'h1 a h6', descKey: 'dev_web_page.tag_h1_h6_desc' },
  { name: 'p', descKey: 'dev_web_page.tag_p_desc' },
  { name: 'a', descKey: 'dev_web_page.tag_a_desc' },
  { name: 'ul / ol / li', descKey: 'dev_web_page.tag_ul_ol_desc' }
];

const formTags = [
  { name: 'form', descKey: 'dev_web_page.tag_form_desc' },
  { name: 'input', descKey: 'dev_web_page.tag_input_desc' },
  { name: 'select / option', descKey: 'dev_web_page.tag_select_desc' },
  { name: 'button', descKey: 'dev_web_page.tag_button_desc' }
];

const mediaTags = [
  { name: 'img', descKey: 'dev_web_page.tag_img_desc' },
  { name: 'video / audio', descKey: 'dev_web_page.tag_video_audio_desc' },
  { name: 'canvas', descKey: 'dev_web_page.tag_canvas_desc' },
  { name: 'table', descKey: 'dev_web_page.tag_table_desc' }
];

const questions = [
  {
    title: '¿Qué etiqueta HTML5 debe utilizarse para el contenido principal único de la página?',
    options: [
      '<div id="main">',
      '<section class="primary">',
      '<main>',
      '<article>'
    ],
    correct: 2
  },
  {
    title: '¿Qué efecto produce la propiedad CSS `box-sizing: border-box`?',
    options: [
      'Añade un borde transparente alrededor del elemento.',
      'Incluye el padding y el border dentro del ancho y alto total calculado del elemento.',
      'Aumenta el margen externo (margin) de forma automática.',
      'Transforma el elemento en una rejilla bidimensional Grid.'
    ],
    correct: 1
  },
  {
    title: '¿Cuál es la función principal de la función `clamp(min, val, max)` en CSS?',
    options: [
      'Crear una animación en bucle infinito.',
      'Definir tipografía o dimensiones fluidas responsivas que se ajustan entre un mínimo y un máximo sin media queries.',
      'Restringir el acceso a fuentes externas no seguras.',
      'Alinear elementos verticalmente en Flexbox.'
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
.hero-section { position: relative; overflow: hidden; padding: 110px 0 70px; background: linear-gradient(135deg, #060d1a 0%, #0a1628 50%, #00182e 100%); }
.hero-floating-tags { position: absolute; inset: 0; pointer-events: none; }
.ftag { position: absolute; font-family: 'Fira Code', monospace; font-size: 0.85rem; color: rgba(56,189,248,0.3); animation: floatTag 8s ease-in-out infinite; }
.css-tag { color: rgba(52,211,153,0.3); }
@keyframes floatTag { 0%,100% { transform: translateY(0) rotate(-2deg); opacity: 0.5; } 50% { transform: translateY(-18px) rotate(2deg); opacity: 1; } }
.hero-inner { position: relative; z-index: 2; }
.hero-title { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 900; color: #38bdf8; margin: 12px 0; text-shadow: 0 0 40px rgba(56,189,248,0.3); line-height: 1.15; }
.hero-text { max-width: 680px; margin: 0 auto 32px; color: #bae6fd; font-size: 1.15rem; line-height: 1.7; }
.hero-stats { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
.stat-pill { padding: 8px 18px; border-radius: 24px; font-size: 0.9rem; font-weight: 600; border: 1px solid; }
.pill-html { background: rgba(249,115,22,0.15); color: #fb923c; border-color: rgba(249,115,22,0.35); }
.pill-css { background: rgba(56,189,248,0.15); color: #38bdf8; border-color: rgba(56,189,248,0.35); }
.pill-flex { background: rgba(52,211,153,0.15); color: #34d399; border-color: rgba(52,211,153,0.35); }
.pill-resp { background: rgba(167,139,250,0.15); color: #a78bfa; border-color: rgba(167,139,250,0.35); }

/* SECTIONS */
.content-section { padding: 70px 0; }
.section-alt { background: rgba(0, 0, 0, 0.25); }
.section-header { margin-bottom: 48px; }
.section-chip { display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px; border-radius: 20px; font-size: 0.82rem; font-weight: 700; margin-bottom: 10px; background: rgba(0, 172, 223, 0.15); color: #38bdf8; }
.chip-green { background: rgba(16, 185, 129, 0.15); color: #34d399; }
.chip-blue { background: rgba(56, 189, 248, 0.15); color: #38bdf8; }
.chip-orange { background: rgba(249, 115, 22, 0.15); color: #fb923c; }
.section-title { font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 800; color: #ffffff; margin-bottom: 8px; line-height: 1.2; }
.section-subtitle { color: #cbd5e1; font-size: 1.05rem; max-width: 640px; margin: 0 auto; }
.badge-chip { display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 0.82rem; font-weight: 700; }
.concept-header-title { font-size: 1.4rem; font-weight: 700; margin-bottom: 10px; }

/* CARDS */
.glass-card { background: rgba(15, 31, 57, 0.8); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 24px; padding: 32px; }
.glass-card h3 { color: #f8fafc; font-size: 1.2rem; font-weight: 700; margin-bottom: 10px; }
.bad-practice { border-top: 4px solid #ef4444; }
.good-practice { border-top: 4px solid #10b981; }
.tag-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
.tag-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(56,189,248,0.15); }
.tag-badge { font-family: 'Fira Code', monospace; font-size: 1.05rem; color: #38bdf8; background: rgba(0, 172, 223, 0.15); padding: 5px 12px; border-radius: 8px; display: inline-block; border: 1px solid rgba(56,189,248,0.25); }
.high-contrast-text { color: #e2e8f0 !important; font-size: 0.97rem; line-height: 1.7; }

/* CODE BOX */
.code-box-mini { background: #060d1a; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; }
.code-box-mini code { color: #38bdf8; font-family: 'Fira Code', monospace; font-size: 0.85rem; display: block; padding: 14px; white-space: pre; }
.code-box { background: #060d1a; padding: 14px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); }
.code-box code { color: #e2e8f0; font-family: 'Fira Code', monospace; font-size: 0.85rem; white-space: pre; }
.code-box-large { background: #060d1a; border-radius: 14px; border: 1px solid rgba(255,255,255,0.12); overflow: hidden; margin-top: 14px; }
.code-box-large pre { margin: 0; padding: 18px; overflow-x: auto; }
.code-box-large code { color: #38bdf8; font-family: 'Fira Code', monospace; font-size: 0.9rem; white-space: pre; }
.custom-tabs { background: rgba(15, 31, 57, 0.4); border-radius: 16px; padding: 10px; }

/* BOX MODEL DIAGRAM */
.box-model-diagram { text-align: center; font-size: 0.82rem; font-weight: 600; }
.bm-margin { background: rgba(249, 115, 22, 0.2); border: 2px dashed #f97316; padding: 14px; border-radius: 14px; color: #fed7aa; }
.bm-border { background: rgba(234, 179, 8, 0.2); border: 2px solid #eab308; padding: 12px; border-radius: 10px; color: #fef08a; margin-top: 8px; }
.bm-padding { background: rgba(34, 197, 94, 0.2); border: 2px solid #22c55e; padding: 10px; border-radius: 8px; color: #bbf7d0; margin-top: 8px; }
.bm-content { background: rgba(56, 189, 248, 0.25); border: 2px solid #38bdf8; padding: 14px; border-radius: 6px; color: #ffffff; font-size: 0.95rem; font-weight: 700; margin-top: 8px; }

.quiz-card { max-width: 820px; margin: 0 auto; }
.quiz-radio { color: #e2e8f0 !important; }

@media (max-width: 768px) { .hero-floating-tags { display: none; } }
</style>
