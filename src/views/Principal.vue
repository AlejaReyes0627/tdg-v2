<template>
  <!-- ═══════════════════════════════════════════════════════
       HERO SECTION
  ════════════════════════════════════════════════════════════ -->
  <section id="presentation-main" class="hero-section" data-aos="fade-up">
    <div class="hero-bg-glow"></div>
    <div class="container">
      <div class="hero-card glass-card" data-aos="zoom-in" data-aos-delay="150">
        <!-- Badge superior -->
        <div class="hero-badge">
          <span class="badge-dot"></span>
          REDA · Recurso Educativo Digital Abierto
        </div>

        <!-- Título principal -->
        <h1 class="hero-title">
          {{ $t('principal_page.first_card_tittle') }}
        </h1>

        <!-- Texto descriptivo -->
        <p class="hero-text">
          {{ $t('principal_page.first_card_text') }}
          <strong class="highlight">{{ $t('principal_page.last_card_bold_text') }}</strong>
        </p>

        <!-- Imagen central -->
        <div class="image-container" data-aos="fade-up" data-aos-delay="350">
          <div class="image-glow-ring"></div>
          <img
            class="imgPhrase"
            :src="$t('principal_page.image_url')"
            alt="Ingeniería de Software"
          />
        </div>

        <!-- Footer del card -->
        <div class="hero-footer">
          <div class="footer-chip">
            <n-icon :component="CalendarOutline" size="14" />
            {{ $t('principal_page.created_card_text') }} {{ year }}
          </div>
          <div class="footer-stats">
            <span class="stat-item">
              <n-icon :component="BookOutline" size="14" />
              {{ $t('principal_page.modules_count') }}
            </span>
            <span class="stat-divider">·</span>
            <span class="stat-item">
              <n-icon :component="FlashOutline" size="14" />
              {{ $t('principal_page.interactive_tag') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════
       MINI JUEGO INTERACTIVO
  ════════════════════════════════════════════════════════════ -->
  <section id="presentation-button-multimedia2" class="game-section" data-aos="fade-up">
    <div class="container">
      <!-- Encabezado de sección -->
      <div class="section-header" data-aos="fade-up" data-aos-delay="100">
        <div class="section-chip">
          <n-icon :component="GameControllerOutline" size="16" />
          {{ $t('principal_page.interactive_tag') }}
        </div>
        <h2 class="section-title">
          {{ $t('principal_page.mini_game_text') }}
        </h2>
        <p class="section-subtitle">{{ $t('principal_page.test_knowledge_subtitle') }}</p>
      </div>

      <!-- Iframe del juego -->
      <div class="game-wrapper" data-aos="flip-up" data-aos-delay="200">
        <div class="game-frame-outer">
          <div class="game-frame-inner">
            <iframe
              width="100%"
              height="520"
              frameborder="0"
              :src="$t('principal_page.mini_game_url')"
              allowfullscreen
              title="Mini Juego Interactivo"
              sandbox="allow-scripts allow-same-origin allow-popups"
              class="game-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════
       TEMARIO / CONTENIDO
  ════════════════════════════════════════════════════════════ -->
  <section id="temario" class="temario-section" data-aos="fade-up">
    <div class="container">
      <div class="section-header">
        <div class="section-chip">
          <n-icon :component="BookOutline" size="16" />
          {{ $t('principal_page.study_plan_tag') }}
        </div>
        <h2 class="section-title main-gradient-title">
          {{ $t('principal_page.temario_tittle') }}
        </h2>
        <p class="section-subtitle">{{ $t('principal_page.explore_modules_subtitle') }}</p>
      </div>
      <div class="divider-line"></div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════
       TOPICS GRID
  ════════════════════════════════════════════════════════════ -->
  <section id="topics" class="topics-section">
    <div class="container">
      <div class="topics-grid">
        <div
          v-for="(topic, index) in topics"
          :key="index"
          class="topic-card glass-card"
          :class="`topic-card--${index}`"
          data-aos="fade-up"
          :data-aos-delay="120 * (index + 1)"
          @click="goToTopic(index)"
        >
          <!-- Decoración top -->
          <div class="topic-card__accent-bar"></div>

          <!-- Header -->
          <div class="topic-card__header">
            <div class="icon-wrapper" :class="`icon-${index}`">
              <n-icon :component="topic.icon" size="26" />
            </div>
            <div class="topic-card__meta">
              <span class="card-module-label">{{ $t('principal_page.modules_count').split(' ')[0] }} {{ index + 1 }}</span>
              <h3 class="card-title">{{ topic.title }}</h3>
            </div>
          </div>

          <!-- Descripción -->
          <p class="card-description">{{ topic.description }}</p>

          <!-- Footer -->
          <div class="topic-card__footer">
            <button class="read-more-btn">
              {{ $t('principal_page.read_more') }}
              <n-icon :component="ArrowForward" size="16" class="btn-icon" />
            </button>
          </div>

          <!-- Glow decorativo en hover -->
          <div class="card-glow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { watch, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  SettingsOutline,
  GlobeOutline,
  FlashOutline,
  CalendarOutline,
  GameControllerOutline,
  BookOutline,
  ArrowForward
} from '@vicons/ionicons5';

export default {
  name: 'Principal',
  setup() {
    const router = useRouter();
    const { locale, t } = useI18n();
    const year = ref(new Date().getFullYear());
    const gridCols = ref(3);
    const topics = ref([]);

    const fetchTranslations = () => {
      topics.value = [
        {
          title: t('principal_page.config_title'),
          description: t('principal_page.config_text'),
          icon: SettingsOutline,
        },
        {
          title: t('principal_page.web_title'),
          description: t('principal_page.web_text'),
          icon: GlobeOutline,
        },
        {
          title: t('principal_page.agile_title'),
          description: t('principal_page.agile_text'),
          icon: FlashOutline,
        }
      ];
    };

    watch(locale, () => {
      fetchTranslations();
    });

    onMounted(() => {
      AOS.init({
        duration: 900,
        easing: 'ease-out-quart',
        once: true
      });
      fetchTranslations();
    });

    const goToTopic = (index) => {
      if (index === 0) router.push('/isw');
      else if (index === 1) router.push('/dev-web');
      else if (index === 2) router.push('/isw/devops');
    };

    return {
      year,
      gridCols,
      topics,
      locale,
      goToTopic,
      CalendarOutline,
      BookOutline,
      FlashOutline,
      GameControllerOutline,
      ArrowForward
    };
  }
};
</script>

<style scoped>
/* ─────────────────────────────────────────
   Fuentes Premium
───────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

/* ─────────────────────────────────────────
   Variables de diseño
───────────────────────────────────────── */
:root {
  --clr-bg:        #0a0f1e;
  --clr-surface:   rgba(255, 255, 255, 0.055);
  --clr-border:    rgba(255, 255, 255, 0.10);
  --clr-primary:   #3b82f6;
  --clr-secondary: #8b5cf6;
  --clr-accent:    #00d4ff;
  --clr-success:   #10b981;
  --clr-text:      #e2e8f0;
  --clr-muted:     #94a3b8;
  --radius-lg:     20px;
  --radius-md:     14px;
  --radius-sm:     8px;
  --shadow-glow:   0 0 40px rgba(59, 130, 246, 0.18);
  --shadow-card:   0 8px 32px rgba(0, 0, 0, 0.35);
  --transition:    all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ─────────────────────────────────────────
   Utilidades
───────────────────────────────────────── */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

.glass-card {
  background: var(--clr-surface);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius-lg);
}

/* ─────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────── */
.hero-section {
  position: relative;
  padding: 72px 0 48px;
  overflow: hidden;
}

.hero-bg-glow {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.hero-card {
  position: relative;
  z-index: 1;
  padding: 2.5rem 3rem;
  transition: var(--transition);
  overflow: hidden;
}

.hero-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(59,130,246,0.07), rgba(139,92,246,0.05), transparent);
  pointer-events: none;
}

.hero-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-glow), var(--shadow-card);
  border-color: rgba(59, 130, 246, 0.3);
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 50px;
  padding: 6px 16px;
  font-size: 0.72rem;
  font-weight: 600;
  color: #93c5fd;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #3b82f6;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.7); }
}

/* Título */
.hero-title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  background: linear-gradient(120deg, #60a5fa, #a78bfa, #34d399);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1.2rem;
  text-align: center;
  line-height: 1.25;
  animation: gradient-shift 6s ease infinite;
}

@keyframes gradient-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Texto descriptivo */
.hero-text {
  font-size: 1.05rem;
  line-height: 1.75;
  text-align: center;
  color: var(--clr-muted);
  max-width: 780px;
  margin: 0 auto 1.5rem;
}

.highlight {
  color: #c4b5fd;
  font-weight: 600;
}

/* Contenedor de imagen */
.image-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 2rem 0 2.5rem;
}

.image-glow-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 520px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(139,92,246,0.22) 0%, transparent 65%);
  pointer-events: none;
  filter: blur(16px);
}

.imgPhrase {
  max-width: 100%;
  max-height: 340px;
  width: auto;
  height: auto;
  border-radius: var(--radius-md);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.06);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  z-index: 1;
}

.imgPhrase:hover {
  transform: scale(1.025);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55), 0 0 30px rgba(99,102,241,0.25);
}

/* Footer del hero */
.hero-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 1.2rem;
  border-top: 1px solid var(--clr-border);
  margin-top: 0.5rem;
}

.footer-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--clr-muted);
}

.footer-stats {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
  color: var(--clr-muted);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.stat-divider {
  opacity: 0.3;
}

/* ─────────────────────────────────────────
   GAME SECTION
───────────────────────────────────────── */
.game-section {
  padding: 80px 0;
  position: relative;
}

.game-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, rgba(30,27,75,0.25), transparent);
  pointer-events: none;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(139, 92, 246, 0.12);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 50px;
  padding: 6px 16px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #c4b5fd;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.section-title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--clr-text);
  margin: 0 0 0.75rem;
  line-height: 1.3;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--clr-muted);
  margin: 0;
}

.main-gradient-title {
  background: linear-gradient(120deg, #60a5fa 0%, #a78bfa 60%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Wrapper del iframe */
.game-wrapper {
  display: flex;
  justify-content: center;
}

.game-frame-outer {
  max-width: 940px;
  width: 100%;
  border-radius: var(--radius-lg);
  padding: 3px;
  background: linear-gradient(135deg, rgba(59,130,246,0.5), rgba(139,92,246,0.5), rgba(52,211,153,0.4));
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), var(--shadow-glow);
}

.game-frame-inner {
  background: #0f1629;
  border-radius: calc(var(--radius-lg) - 3px);
  overflow: hidden;
}

.game-iframe {
  display: block;
  border: none;
  border-radius: calc(var(--radius-lg) - 3px);
}

/* ─────────────────────────────────────────
   TEMARIO SECTION
───────────────────────────────────────── */
.temario-section {
  padding: 56px 0 24px;
}

.divider-line {
  width: 100%;
  max-width: 600px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(96,165,250,0.8), rgba(167,139,250,0.8), transparent);
  margin: 1.5rem auto 0;
  border-radius: 2px;
}

/* ─────────────────────────────────────────
   TOPICS SECTION
───────────────────────────────────────── */
.topics-section {
  padding: 32px 0 96px;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

/* Topic Card */
.topic-card {
  position: relative;
  overflow: hidden;
  padding: 1.8rem;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.topic-card::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  background: linear-gradient(135deg, rgba(59,130,246,0.08), transparent 60%);
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.topic-card:hover::before {
  opacity: 1;
}

.topic-card:hover {
  transform: translateY(-10px) scale(1.015);
  box-shadow: 0 24px 48px rgba(0,0,0,0.4), var(--shadow-glow);
}

/* Acent bar top */
.topic-card__accent-bar {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 3px;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.topic-card--0 .topic-card__accent-bar {
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
}
.topic-card--1 .topic-card__accent-bar {
  background: linear-gradient(90deg, #8b5cf6, #c4b5fd);
}
.topic-card--2 .topic-card__accent-bar {
  background: linear-gradient(90deg, #10b981, #34d399);
}

.topic-card:hover .topic-card__accent-bar {
  opacity: 1;
}

/* Card hover border color */
.topic-card--0:hover { border-color: rgba(59, 130, 246, 0.4); }
.topic-card--1:hover { border-color: rgba(139, 92, 246, 0.4); }
.topic-card--2:hover { border-color: rgba(16, 185, 129, 0.4); }

/* Header */
.topic-card__header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.icon-wrapper {
  width: 52px;
  height: 52px;
  min-width: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  color: #fff;
}

.icon-0 { background: linear-gradient(135deg, #2563eb, #60a5fa); box-shadow: 0 4px 16px rgba(59,130,246,0.35); }
.icon-1 { background: linear-gradient(135deg, #7c3aed, #a78bfa); box-shadow: 0 4px 16px rgba(139,92,246,0.35); }
.icon-2 { background: linear-gradient(135deg, #059669, #34d399); box-shadow: 0 4px 16px rgba(16,185,129,0.35); }

.topic-card:hover .icon-wrapper {
  transform: scale(1.12) rotate(6deg);
}

.topic-card--0:hover .icon-wrapper { box-shadow: 0 8px 24px rgba(59,130,246,0.5); }
.topic-card--1:hover .icon-wrapper { box-shadow: 0 8px 24px rgba(139,92,246,0.5); }
.topic-card--2:hover .icon-wrapper { box-shadow: 0 8px 24px rgba(16,185,129,0.5); }

.topic-card__meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 4px;
}

.card-module-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--clr-muted);
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--clr-text);
  margin: 0;
  line-height: 1.3;
}

.card-description {
  font-size: 0.92rem;
  color: var(--clr-muted);
  line-height: 1.65;
  flex: 1;
  margin: 0;
}

/* Footer de la card */
.topic-card__footer {
  padding-top: 0.75rem;
  border-top: 1px solid var(--clr-border);
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  justify-content: center;
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.05);
  color: var(--clr-text);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  font-family: 'Inter', sans-serif;
}

.read-more-btn:hover {
  background: rgba(59, 130, 246, 0.18);
  border-color: rgba(59, 130, 246, 0.4);
  color: #93c5fd;
}

.topic-card--1 .read-more-btn:hover {
  background: rgba(139, 92, 246, 0.18);
  border-color: rgba(139, 92, 246, 0.4);
  color: #c4b5fd;
}

.topic-card--2 .read-more-btn:hover {
  background: rgba(16, 185, 129, 0.18);
  border-color: rgba(16, 185, 129, 0.4);
  color: #6ee7b7;
}

.btn-icon {
  transition: transform 0.25s ease;
}

.read-more-btn:hover .btn-icon {
  transform: translateX(4px);
}

/* Glow decorativo */
.card-glow {
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59,130,246,0.1), transparent 70%);
  pointer-events: none;
  transition: opacity 0.35s ease;
  opacity: 0;
}

.topic-card:hover .card-glow {
  opacity: 1;
}

/* ─────────────────────────────────────────
   RESPONSIVE
───────────────────────────────────────── */
@media (max-width: 1024px) {
  .topics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-card {
    padding: 2rem 1.5rem;
  }

  .hero-title {
    font-size: 1.7rem;
  }

  .topics-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .game-iframe {
    height: 420px;
  }
}

@media (max-width: 480px) {
  .hero-section  { padding: 40px 0 28px; }
  .game-section  { padding: 56px 0; }
  .topics-section { padding: 24px 0 64px; }

  .hero-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .game-iframe { height: 360px; }
}
</style>