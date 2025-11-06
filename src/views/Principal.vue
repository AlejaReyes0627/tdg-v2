<template>
  <section id="presentation-main" class="hero-section" data-aos="fade-up">
    <div class="container">
      <n-card
        hoverable
        class="hero-card glass-card"
        :segmented="{ content: true, footer: 'soft' }"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div class="card-content">
          <h1 class="hero-title">
            <strong>{{ $t('principal_page.first_card_tittle') }}</strong>
          </h1>
          <p class="hero-text">
            {{ $t('principal_page.first_card_text') }}
            <strong class="highlight">{{ $t('principal_page.last_card_bold_text') }}</strong>
          </p>
          <div class="image-container" data-aos="fade-up" data-aos-delay="400">
            <img class="imgPhrase" :src="$t('principal_page.image_url')" alt="Ingeniería de Software" />
          </div>
        </div>
        <template #footer>
          <div class="footer-text">
            <n-icon :component="CalendarOutline" />
            {{ $t('principal_page.created_card_text') }} {{ year }}
          </div>
        </template>
      </n-card>
    </div>
  </section>

  <!-- Mini Juego Interactivo -->
  <section id="presentation-button-multimedia2" class="game-section" data-aos="fade-up">
    <div class="text-center second-multimedia">
      <h2 class="section-title">
        <n-icon :component="GameControllerOutline" class="title-icon" />
        {{ $t('principal_page.mini_game_text') }}
      </h2>
      <div class="game-container" data-aos="flip-left" data-aos-delay="200">
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
  </section>

  <!-- Temario -->
  <section id="temario" class="temario-section" data-aos="fade-up">
    <div class="container">
      <h2 class="section-title main-title">
        <n-icon :component="BookOutline" class="title-icon" />
        {{ $t('principal_page.temario_tittle') }}
      </h2>
      <n-divider class="custom-divider" />
    </div>
  </section>

  <!-- Topics Grid con cards animadas -->
  <section id="topics" class="topics-section">
    <div class="container">
      <n-grid :cols="gridCols" x-gap="24" y-gap="32" class="topics-grid">
        <n-gi v-for="(topic, index) in topics" :key="index" data-aos="fade-up" :data-aos-delay="100 * (index + 1)">
          <n-card
            hoverable
            class="topic-card glass-card"
            @click="goToTopic(index)"
          >
            <template #header>
              <n-space align="center" class="card-header">
                <div class="icon-wrapper" :class="`icon-${index}`">
                  <n-icon :component="topic.icon" size="28" />
                </div>
                <n-text strong class="card-title">{{ topic.title }}</n-text>
              </n-space>
            </template>
            <p class="card-description">{{ topic.description }}</p>
            <template #footer>
              <n-button type="primary" ghost class="read-more-btn">
                {{ $t('principal_page.read_more') || 'Leer más' }}
                <n-icon :component="ArrowForward" />
              </n-button>
            </template>
          </n-card>
        </n-gi>
      </n-grid>
    </div>
  </section>
</template>

<script>
import { watch, ref, onMounted } from 'vue';
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
        duration: 800,
        easing: 'ease-out-quart',
        once: true
      });
      fetchTranslations();
    });

    const goToTopic = (index) => {
      // Aquí puedes navegar a las secciones o páginas correspondientes
      console.log('Navegar al tema:', index);
    };

    return {
      year,
      gridCols,
      topics,
      locale,
      goToTopic
    };
  }
};
</script>

<style scoped>
/* Fuentes premium */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

* {
  font-family: 'Inter', sans-serif;
}

body {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  min-height: 100vh;
}

p{
  color: black !important;
}

/* Contenedor principal */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Hero Section */
.hero-section {
  padding: 60px 0 40px;
}

.hero-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
}

.hero-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.hero-title {
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #114177, #00acdf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 16px;
  text-align: center;
}

.hero-text {
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: center;
}

.highlight {
  color: #a78bfa;
  font-weight: 600;
}

.image-container {
  margin: 2rem 0;
  text-align: center;
}

.imgPhrase {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

.imgPhrase:hover {
  transform: scale(1.02);
}

/* Footer del card */
.footer-text {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  color: #94a3b8;
  font-size: 0.9rem;
}

/* Sección del juego */
.game-section {
  padding: 80px 0;
  background: rgba(30, 41, 59, 0.4);
  border-radius: 20px;
  margin: 40px 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.title-icon {
  color: #60a5fa;
  font-size: 1.8rem;
}

.game-iframe {
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  max-width: 900px;
  margin: 0 auto;
  display: block;
}

/* Temario */
.temario-section {
  padding: 40px 0;
}

.main-title {
  font-size: 2.3rem;
  background: linear-gradient(90deg, #114177, #00acdf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.custom-divider {
  background: linear-gradient(90deg, transparent, #60a5fa, transparent);
  height: 3px;
  margin: 20px 0;
}

/* Grid de temas */
.topics-section {
  padding: 40px 0 80px;
}

.topic-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  transition: all 0.4s ease;
  height: 100%;
  cursor: pointer;
}

.topic-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #60a5fa;
  box-shadow: 0 15px 30px rgba(96, 165, 250, 0.2);
}

.topic-card.featured {
  border-color: #a78bfa;
  position: relative;
  overflow: hidden;
}

.topic-card.featured::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 4px;
  background: linear-gradient(90deg, #114177, #00acdf);
}

.card-header {
  margin-bottom: 12px;
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(96, 165, 250, 0.15);
  transition: all 0.3s ease;
}

.icon-0 { background: linear-gradient(135deg, #60a5fa, #3b82f6); }
.icon-1 { background: linear-gradient(135deg, #a78bfa, #8b5cf6); }
.icon-2 { background: linear-gradient(135deg, #34d399, #10b981); }

.topic-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(8deg);
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.4);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: black;
}

.card-description {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.read-more-btn {
  width: 100%;
  border-radius: 12px;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title { font-size: 1.9rem; }
  .section-title { font-size: 1.8rem; }
  [data-cols] { --cols: 2; }
}

@media (max-width: 640px) {
  .hero-title { font-size: 1.7rem; }
  .section-title { font-size: 1.6rem; }
  .game-iframe { height: 400px; }
  [data-cols] { --cols: 1; }
  .topics-grid { x-gap: 16; y-gap: 24; }
}
</style>