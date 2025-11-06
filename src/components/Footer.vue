<template>
  <footer class="footer-premium" data-aos="fade-up" data-aos-delay="100">
    <div class="footer-container">


      <h5 class="footer-title" data-aos="fade-up" data-aos-delay="200">
        <span class="gradient-text">
          {{ $t('footer_page.footer_social_networks') }}
        </span>
      </h5>


      <n-space justify="center" :size="40" class="social-links" data-aos="fade-up" data-aos-delay="300">
        <a
          v-for="(social, index) in socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          class="social-icon-link"
          :data-aos="index % 2 === 0 ? 'flip-left' : 'flip-right'"
          :data-aos-delay="400 + index * 100"
        >
          <div class="icon-wrapper" :class="`icon-${social.name}`">
            <n-icon :component="social.icon" size="28" />
          </div>
          <span class="sr-only">{{ social.name }}</span>
        </a>
      </n-space>


      <div class="separator-container" data-aos="zoom-in" data-aos-delay="600">
        <div class="separator-line"></div>
      </div>


      <div class="footer-bottom" data-aos="fade-up" data-aos-delay="700">
        <p class="footer-copy">
          {{ $t('footer_page.footer_copyright') }} {{ currentYear }}
          <span class="heart">♥</span>
          <strong class="highlight">REDA ISW</strong>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';

import {
  LogoFacebook,
  LogoTwitter,
  LogoYoutube,
  LogoInstagram
} from '@vicons/ionicons5';

export default defineComponent({
  components: {
    LogoFacebook,
    LogoTwitter,
    LogoYoutube,
    LogoInstagram
  },
  setup() {
    const { t } = useI18n();
    const currentYear = ref(new Date().getFullYear());

    const socialLinks = [
      { name: 'Facebook', url: 'https://www.facebook.com/SoyUnibague/', icon: LogoFacebook },
      { name: 'Twitter', url: 'https://twitter.com/unibagueoficial', icon: LogoTwitter },
      { name: 'YouTube', url: 'https://www.youtube.com/user/universidadeibague', icon: LogoYoutube },
      { name: 'Instagram', url: 'https://www.instagram.com/soyunibague/', icon: LogoInstagram }
    ];

    onMounted(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-out-quart',
        once: true
      });
    });

    return {
      t,
      currentYear,
      socialLinks
    };
  }
});
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
  font-family: 'Inter', sans-serif;
}


.footer-premium {
  background: linear-gradient(135deg, #0F1F39 0%, #051024 50%, #3d3d3d 100%);
  padding: 60px 20px 40px;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(96, 165, 250, 0.15);
}

.footer-premium::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(96, 165, 250, 0.08), transparent 70%);
  pointer-events: none;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}


.footer-title {
  margin: 0 0 2.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.gradient-text {
  background: linear-gradient(90deg, #2d82a6, #00acdf, #ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}


.social-links {
  margin-bottom: 2.5rem;
}

.social-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.social-icon-link::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 0; height: 0;
  background: rgba(96, 165, 250, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
  z-index: 0;
}

.social-icon-link:hover::before {
  width: 300%;
  height: 300%;
}

.social-icon-link:hover {
  transform: translateY(-6px) scale(1.1);
  box-shadow: 0 15px 30px rgba(96, 165, 250, 0.25);
  border-color: #00acdf;
}

.icon-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}

.social-icon-link:hover .icon-wrapper {
  transform: rotate(15deg) scale(1.2);
}


.icon-Facebook { color: #1877f2; }
.icon-Twitter { color: #1da1f2; }
.icon-YouTube { color: #ff0000; }
.icon-Instagram { color: #e4408d; }

.social-icon-link:hover .icon-Facebook,
.social-icon-link:hover .icon-Twitter,
.social-icon-link:hover .icon-YouTube,
.social-icon-link:hover .icon-Instagram {
  color: #fff;
}


.separator-container {
  margin: 2.5rem auto;
  width: 120px;
  height: 4px;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
}

.separator-line {
  height: 100%;
  background: linear-gradient(90deg, transparent, #114177, #00acdf, #ffff, transparent);
  animation: flow 3s linear infinite;
  border-radius: 2px;
}

@keyframes flow {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}


.footer-bottom {
  margin-top: 1.5rem;
}

.footer-copy {
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
}

.heart {
  color: red;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}

.highlight {
  background: linear-gradient(90deg, #00acdf, #ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}


@media (max-width: 768px) {
  .footer-title { font-size: 1.3rem; }
  .social-links { gap: 24px !important; }
  .social-icon-link { width: 48px; height: 48px; }
  .footer-copy { font-size: 0.85rem; flex-direction: column; }
}

@media (max-width: 480px) {
  .social-links { gap: 18px !important; }
  .social-icon-link { width: 44px; height: 44px; }
}
</style>