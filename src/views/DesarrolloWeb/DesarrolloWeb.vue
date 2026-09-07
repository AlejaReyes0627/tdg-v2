<template>
  <div class="devweb-container">
    <!-- SOLO MOSTRAR EN /dev-web (PÁGINA PRINCIPAL DE DESARROLLO WEB) -->
    <div v-if="$route.path === '/dev-web'" class="devweb-home">
      <!-- HERO SECTION -->
      <section class="hero-section">
        <div class="hero-bg">
          <div class="overlay"></div>
          <div class="hero-center">
            <div class="container hero-content">
              <n-tag round :bordered="false" type="info" class="hero-tag" data-aos="fade-down">
                {{ $t('dev_web_page.badge') }}
              </n-tag>
              <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
                {{ $t('dev_web_page.main_title') }}
              </h1>
              <p class="hero-text" data-aos="fade-up" data-aos-delay="200">
                {{ $t('dev_web_page.main_body') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- INTRODUCCIÓN -->
      <section class="intro-section">
        <div class="container">
          <n-card class="glass-card intro-card" hoverable data-aos="zoom-in">
            <n-grid :cols="12" x-gap="32" y-gap="16">
              <n-gi :span="5">
                <div class="intro-image">
                  <img src="/assets/images/ingenieriadesoftware.jpg" alt="Desarrollo Web" class="rounded-lg shadow-lg w-full h-full object-cover" />
                </div>
              </n-gi>
              <n-gi :span="7">
                <div class="intro-body">
                  <h3>{{ $t('dev_web_page.card_title') }}</h3>
                  <p>{{ $t('dev_web_page.card_text') }}</p>
                </div>
              </n-gi>
            </n-grid>
          </n-card>
        </div>
      </section>

      <!-- SUBMÓDULOS GRID -->
      <section class="topics-section">
        <div class="container">
          <div class="section-header text-center" data-aos="fade-up">
            <h2 class="section-title">{{ $t('dev_web_page.topics_title') }}</h2>
            <p class="section-subtitle">{{ $t('dev_web_page.topics_subtitle') }}</p>
          </div>

          <div class="topics-grid">
            <div
              v-for="sub in submodules"
              :key="sub.key"
              class="topic-card glass-card"
              data-aos="fade-up"
              @click="router.push(`/dev-web/${sub.key}`)"
            >
              <div class="card-icon">
                <n-icon :component="sub.icon" size="36" />
              </div>
              <h3>{{ sub.title }}</h3>
              <p>{{ sub.description }}</p>
              <n-button type="primary" ghost size="small" class="mt-3">
                {{ $t('principal_page.read_more') }}
              </n-button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- AQUÍ SE CARGAN LOS SUBMÓDULOS DE DESARROLLO WEB -->
    <div v-else class="submodule-container">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  CodeSlashOutline,
  LogoJavascript,
  LayersOutline,
  CloudUploadOutline,
  SpeedometerOutline
} from '@vicons/ionicons5';

const router = useRouter();
const { t } = useI18n();

const submodules = computed(() => [
  {
    key: 'html-css',
    title: t('dev_web_page.html_css_title'),
    description: t('dev_web_page.html_css_desc'),
    icon: CodeSlashOutline
  },
  {
    key: 'js-avanzado',
    title: t('dev_web_page.js_avanzado_title'),
    description: t('dev_web_page.js_avanzado_desc'),
    icon: LogoJavascript
  },
  {
    key: 'frameworks',
    title: t('dev_web_page.frameworks_title'),
    description: t('dev_web_page.frameworks_desc'),
    icon: LayersOutline
  },
  {
    key: 'api_integration',
    title: t('dev_web_page.api_title'),
    description: t('dev_web_page.api_desc'),
    icon: CloudUploadOutline
  },
  {
    key: 'optimizacion',
    title: t('dev_web_page.optimizacion_title'),
    description: t('dev_web_page.optimizacion_desc'),
    icon: SpeedometerOutline
  }
]);

onMounted(() => {
  AOS.init({ duration: 800, once: true });
});
</script>

<style scoped>
.devweb-container {
  color: #e2e8f0;
  min-height: 80vh;
}
.hero-section {
  position: relative;
  padding: 80px 0 60px;
  background: linear-gradient(135deg, rgba(15, 31, 57, 0.95), rgba(5, 16, 36, 0.98));
  text-align: center;
}
.hero-tag {
  margin-bottom: 16px;
}
.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: #00acdf;
  margin-bottom: 16px;
}
.hero-text {
  max-width: 720px;
  margin: 0 auto;
  color: #94a3b8;
  font-size: 1.15rem;
  line-height: 1.6;
}
.intro-section {
  padding: 50px 0;
}
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 28px;
}
.intro-body h3 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 12px;
}
.intro-body p {
  color: #94a3b8;
  line-height: 1.7;
}
.topics-section {
  padding: 40px 0 70px;
}
.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}
.section-subtitle {
  color: #94a3b8;
  margin-bottom: 40px;
}
.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.topic-card {
  cursor: pointer;
  transition: all 0.35s ease;
}
.topic-card:hover {
  transform: translateY(-8px);
  border-color: #00acdf;
  box-shadow: 0 12px 30px rgba(0, 172, 223, 0.2);
}
.card-icon {
  color: #00acdf;
  margin-bottom: 16px;
}
.topic-card h3 {
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 10px;
}
.topic-card p {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>