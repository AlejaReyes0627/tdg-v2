<template>
  <div class="page-wrapper">
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-center">
        <div class="container hero-content text-center">
          <div class="hero-badge" data-aos="fade-down">
            <span class="badge-dot"></span>
            {{ $t('ethics_page.badge') }}
          </div>
          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
            {{ $t('ethics_page.hero_title') }}
            <span class="hero-title-accent">{{ $t('ethics_page.hero_accent') }}</span>
          </h1>
          <p class="hero-text" data-aos="fade-up" data-aos-delay="200">
            {{ $t('ethics_page.hero_text') }}
          </p>
        </div>
      </div>
    </section>

    <!-- GREEN SOFTWARE ENGINEERING -->
    <section class="content-section">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-green">
            <n-icon :component="LeafOutline" size="14" />
            Sostenibilidad Digital
          </div>
          <h2 class="section-title">Green Software Engineering (GSE)</h2>
          <p class="section-subtitle">Construye aplicaciones eficientes que reduzcan el consumo de energía y la huella de carbono digital</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="glass-card green-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-icon"><n-icon :component="LeafOutline" size="32" /></div>
            <h3>Eficiencia de Carbono</h3>
            <p>Escribe código que emita la menor cantidad posible de CO2 por cada transacción o petición realizada por el usuario.</p>
            <div class="tip-box">💡 Usa almacenamiento en caché agresivo y compresión WebP/AVIF.</div>
          </div>

          <div class="glass-card green-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-icon"><n-icon :component="FlashOutline" size="32" /></div>
            <h3>Eficiencia Energética</h3>
            <p>Diseña algoritmos optimizados que requieran menos ciclos de CPU y consumo de memoria RAM en servidores y dispositivos cliente.</p>
            <div class="tip-box">💡 Evita bucles innecesarios y debounce en eventos frecuentes.</div>
          </div>

          <div class="glass-card green-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-icon"><n-icon :component="ShieldCheckmarkOutline" size="32" /></div>
            <h3>Conciencia de Red</h3>
            <p>Minimiza el volumen de datos transferidos a través de la red de internet (payloads JSON pequeños, minificación).</p>
            <div class="tip-box">💡 Prefiere GraphQL o endpoints REST específicos sin sobredatos.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ÉTICA Y PRIVACIDAD -->
    <section class="content-section section-alt">
      <div class="container">
        <div class="section-header text-center" data-aos="fade-up">
          <div class="section-chip chip-purple">
            <n-icon :component="LockClosedOutline" size="14" />
            Responsabilidad Social
          </div>
          <h2 class="section-title">Ética en la Ingeniería de Software</h2>
          <p class="section-subtitle">Privacidad por diseño, equidad algorítmica y seguridad del usuario</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="glass-card ethics-detail-card" data-aos="fade-right">
            <h3>🔒 Privacidad por Diseño (Privacy by Design)</h3>
            <p class="text-slate-300">Los datos del usuario deben protegerse por defecto desde la fase inicial de arquitectura. Aplica la minimización de datos (recolecta solo lo estrictamente necesario) y encriptación de extremo a extremo.</p>
            <div class="code-box mt-3">
              <code>// Ejemplo: Hash salado de contraseñas con bcrypt en lugar de texto plano
const hash = await bcrypt.hash(userPassword, 10);</code>
            </div>
          </div>

          <div class="glass-card ethics-detail-card" data-aos="fade-left">
            <h3>⚖️ Sesgo y Equidad en Inteligencia Artificial</h3>
            <p class="text-slate-300">Los modelos de IA y algoritmos de decisión automatizada deben ser auditablemente justos, transparentes y libres de discriminación por origen, género o condición socioeconómica.</p>
            <div class="code-box mt-3">
              <code>// Auditoría de datos: Verificar balance de clases y eliminación de sesgos éticos</code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EVALUACIÓN PARA ESTUDIANTES -->
    <section class="content-section">
      <div class="container max-w-3xl mx-auto">
        <div class="section-header text-center" data-aos="fade-up">
          <h2 class="section-title">Autoevaluación sobre Ética y Sostenibilidad</h2>
        </div>

        <div class="glass-card" data-aos="fade-up">
          <n-collapse accordion default-expanded-names="1">
            <n-collapse-item title="1. ¿Qué es el Manifiesto de Green Software?" name="1">
              <p class="text-slate-300">Es un conjunto de 8 principios que guían a los ingenieros de software para construir aplicaciones que consuman menos electricidad, transfieran menos datos por la red y aprovechen energías renovables.</p>
            </n-collapse-item>
            <n-collapse-item title="2. ¿Cómo contribuye un desarrollador frontend a la sostenibilidad?" name="2">
              <p class="text-slate-300">Optimizando imágenes, eliminando librerías innecesarias, usando temas oscuros (OLED consume menos energía) y aplicando lazy loading para no descargar assets no visibles.</p>
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
import { LeafOutline, FlashOutline, ShieldCheckmarkOutline, LockClosedOutline } from '@vicons/ionicons5';

const { t } = useI18n();

onMounted(() => {
  AOS.init({ duration: 800, once: true });
});
</script>

<style scoped>
.page-wrapper { color: #e2e8f0; min-height: 80vh; }
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
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.4);
  border-radius: 20px;
  color: #10b981;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 16px;
}
.badge-dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; }
.hero-title { font-size: 3rem; font-weight: 800; margin-bottom: 16px; }
.hero-title-accent {
  background: linear-gradient(90deg, #10b981, #00acdf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-text { max-width: 720px; margin: 0 auto; color: #94a3b8; font-size: 1.15rem; line-height: 1.6; }
.content-section { padding: 70px 0; }
.section-alt { background: rgba(0, 0, 0, 0.2); }
.section-header { margin-bottom: 48px; }
.section-chip {
  display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 12px;
  background: rgba(59, 130, 246, 0.15); color: #3b82f6; font-size: 0.8rem; font-weight: 600; margin-bottom: 8px;
}
.chip-green { background: rgba(16, 185, 129, 0.15); color: #10b981; }
.chip-purple { background: rgba(139, 92, 246, 0.15); color: #a78bfa; }
.section-title { font-size: 2.2rem; font-weight: 700; color: #ffffff; margin-bottom: 8px; }
.section-subtitle { color: #94a3b8; font-size: 1.05rem; }
.glass-card {
  background: rgba(255, 255, 255, 0.04); backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 32px;
}
.card-icon { color: #10b981; margin-bottom: 16px; }
.green-card h3 { font-size: 1.3rem; color: #fff; margin-bottom: 10px; }
.green-card p { color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin-bottom: 16px; }
.tip-box { background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; padding: 10px 14px; color: #6ee7b7; font-size: 0.85rem; }
.ethics-detail-card h3 { font-size: 1.35rem; color: #fff; margin-bottom: 12px; }
.code-box { background: #090d16; padding: 12px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); }
.code-box code { color: #38bdf8; font-family: monospace; font-size: 0.85rem; }
</style>
