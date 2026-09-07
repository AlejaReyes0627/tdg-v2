<template>
  <n-layout-header class="navbar" bordered>
    <div class="navbar-container">

      <router-link to="/" class="logo-link" data-aos="fade-down">
        <img src="/assets/images/unibague-4.0.png" alt="Unibagué" class="logo-img" />
        <span class="logo-text">REDA ISW</span>
      </router-link>

      <n-space class="nav-menu" :size="32">

        <!-- 🔹 DROPDOWN PARA INGENIERÍA DE SOFTWARE -->
        <n-dropdown :options="iswOptions" @select="handleIswSelect" placement="bottom" trigger="hover"
          :show-arrow="true">
          <div class="nav-item dropdown-trigger">
            <n-icon size="22" class="nav-icon">
              <HatGraduation20Regular />
            </n-icon>
            <span>{{ $t('isw_tittle') }}</span>
            <n-icon size="16" class="dropdown-arrow">
              <ArrowDownwardFilled />
            </n-icon>
          </div>
        </n-dropdown>

        <!-- 🔹 DROPDOWN PARA DESARROLLO WEB -->
        <n-dropdown :options="webDevOptions" @select="handleWebDevSelect" placement="bottom" trigger="hover"
          :show-arrow="true">
          <div class="nav-item dropdown-trigger">
            <n-icon size="22" class="nav-icon">
              <WebFilled />
            </n-icon>
            <span>{{ $t('webDevelop_tittle') }}</span>
            <n-icon size="16" class="dropdown-arrow">
              <ArrowDownwardFilled />
            </n-icon>
          </div>
        </n-dropdown>

        <!-- 🔹 GESTIÓN Y CONFIGURACIÓN -->
        <router-link to="/isw/devops" class="nav-item" active-class="active">
          <n-icon size="22" class="nav-icon">
            <GitBranchOutline />
          </n-icon>
          <span>{{ $t('softwareConfig_tittle') }}</span>
        </router-link>

      </n-space>

      <router-link to="/githubActivity" class="nav-item" active-class="active">
        {{ $t('github_activity') }}
      </router-link>

      <n-space class="nav-actions" align="center" :size="16">
        <router-link to="/contact" class="nav-item" active-class="active">
          <n-icon size="20">
            <ContactCardGroup20Regular />
          </n-icon>
          <span class="action-text">{{ $t('contact_title') }}</span>
        </router-link>
        <SelectLang />
      </n-space>

      <n-button text class="hamburger-btn" @click="showMobileMenu = true" v-if="!isLargeScreen">
        <n-icon size="28" :style="{ color: '#e2e8f0' }">
          <MenuOutline />
        </n-icon>
      </n-button>

    </div>

    <!-- 🔹 Drawer móvil -->
    <n-drawer v-model:show="showMobileMenu" placement="right" :width="280" class="mobile-drawer">
      <n-drawer-content :title="$t('menu')" closable>
        <n-space vertical :size="16">

          <!-- Dropdown móvil para Ingeniería de Software -->
          <n-collapse>
            <n-collapse-item :title="$t('isw_tittle')">
              <n-space vertical :size="8">
                <div v-for="opt in iswOptions" :key="opt.key" class="mobile-dropdown-item"
                  @click="handleIswSelect(opt.key); showMobileMenu = false">
                  {{ opt.label }}
                </div>
              </n-space>
            </n-collapse-item>
          </n-collapse>

          <!-- Dropdown móvil para Desarrollo Web -->
          <n-collapse>
            <n-collapse-item :title="$t('webDevelop_tittle')">
              <n-space vertical :size="8">
                <div v-for="opt in webDevOptions" :key="opt.key" class="mobile-dropdown-item"
                  @click="handleWebDevSelect(opt.key); showMobileMenu = false">
                  {{ opt.label }}
                </div>
              </n-space>
            </n-collapse-item>
          </n-collapse>

          <router-link to="/isw/devops" class="mobile-nav-item" @click="showMobileMenu = false" active-class="active">
            <n-icon size="20">
              <GitBranchOutline />
            </n-icon>
            {{ $t('softwareConfig_tittle') }}
          </router-link>

          <n-divider style="margin: 12px 0;" />

          <router-link to="/contact" class="mobile-nav-item" @click="showMobileMenu = false" active-class="active">
            <n-icon size="20">
              <ContactCardGroup20Regular />
            </n-icon>
            {{ $t('contact_title') }}
          </router-link>

          <div class="mobile-lang">
            <SelectLang />
          </div>
        </n-space>
      </n-drawer-content>
    </n-drawer>
  </n-layout-header>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import AOS from 'aos';
import { MenuOutline, GitBranchOutline } from '@vicons/ionicons5';
import { HatGraduation20Regular, ContactCardGroup20Regular } from '@vicons/fluent';
import { WebFilled, ArrowDownwardFilled } from '@vicons/material';
import SelectLang from './SelectLang.vue';

export default defineComponent({
  name: 'Navbar',
  components: {
    HatGraduation20Regular,
    ContactCardGroup20Regular,
    WebFilled,
    GitBranchOutline,
    SelectLang,
    MenuOutline,
    ArrowDownwardFilled,
  },
  setup() {
    const isLargeScreen = ref(false);
    const router = useRouter();
    const { t } = useI18n();
    const showMobileMenu = ref(false);

    const iswOptions = computed(() => [
      { label: t('isw_nav.overview'), key: 'overview' },
      { label: t('isw_nav.architect'), key: 'architect' },
      { label: t('isw_nav.qa'), key: 'qa' },
      { label: t('isw_nav.devops'), key: 'devops' },
      { label: t('isw_nav.ia'), key: 'ia' },
      { label: t('isw_nav.etica'), key: 'etica' }
    ]);

    const webDevOptions = computed(() => [
      { label: t('web_nav.overview'), key: 'overview' },
      { label: t('web_nav.html_css'), key: 'html-css' },
      { label: t('web_nav.js_avanzado'), key: 'js-avanzado' },
      { label: t('web_nav.frameworks'), key: 'frameworks' },
      { label: t('web_nav.api_integration'), key: 'api_integration' },
      { label: t('web_nav.optimizacion'), key: 'optimizacion' }
    ]);

    const handleIswSelect = (key: string) => {
      if (key === 'overview') {
        router.push('/isw');
      } else {
        router.push(`/isw/${key}`);
      }
    };

    const handleWebDevSelect = (key: string) => {
      if (key === 'overview') {
        router.push('/dev-web');
      } else {
        router.push(`/dev-web/${key}`);
      }
    };

    const updateScreenSize = () => {
      isLargeScreen.value = window.matchMedia('(min-width: 1024px)').matches;
    };

    onMounted(() => {
      updateScreenSize();
      const mediaQuery = window.matchMedia('(min-width: 1024px)');
      mediaQuery.addEventListener('change', updateScreenSize);
      AOS.init({ once: true, duration: 600 });
    });

    onBeforeUnmount(() => {
      const mediaQuery = window.matchMedia('(min-width: 1024px)');
      mediaQuery.removeEventListener('change', updateScreenSize);
    });

    return {
      t,
      iswOptions,
      webDevOptions,
      handleIswSelect,
      handleWebDevSelect,
      showMobileMenu,
      isLargeScreen
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
  font-family: 'Inter', sans-serif;
}

.navbar {
  background: rgba(15, 31, 57, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(96, 165, 250, 0.2);
  padding: 12px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #114177;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.logo-link:hover {
  transform: translateY(-1px);
}

.logo-img {
  height: 42px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.logo-link:hover .logo-img {
  transform: scale(1.08) rotate(2deg);
}

.logo-text {
  background: linear-gradient(90deg, #00acdf, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.nav-menu {
  flex: 1;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #e2e8f0;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-item:hover,
.nav-item.active {
  color: #00acdf;
  background: rgba(96, 165, 250, 0.12);
  transform: translateY(-2px);
}

.nav-icon {
  transition: transform 0.3s ease;
}

.nav-item:hover .nav-icon {
  transform: scale(1.15) rotate(8deg);
}

.dropdown-trigger {
  position: relative;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  margin-left: 4px;
}

.dropdown-trigger:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.action-text {
  display: none;
}

@media (min-width: 1024px) {
  .hamburger-btn {
    display: none !important;
  }

  .action-text {
    display: inline;
  }
}

.hamburger-btn {
  color: white;
  padding: 8px;
  border-radius: 12px;
}

.hamburger-btn:hover {
  color: #00acdf !important;
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.1);
}

.mobile-drawer :deep(.n-drawer-header) {
  border-bottom: 1px solid rgba(96, 165, 250, 0.2);
  color: #114177;
}

.mobile-drawer :deep(.n-drawer-body) {
  background: #0f1f39 !important;
  padding: 8px 0;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  color: #e2e8f0;
  font-family: 'Inter', sans-serif !important;
  font-weight: 500 !important;
  font-size: 0.95rem !important;
  text-decoration: none !important;
  transition: all 0.25s ease;
  cursor: pointer;
}

.mobile-nav-item.active,
.mobile-dropdown-item.active {
  color: #00acdf !important;
  background: rgba(96, 165, 250, 0.18) !important;
  transform: translateX(4px);
}

.mobile-nav-item:hover {
  background: rgba(96, 165, 250, 0.18);
  transform: translateX(4px);
  color: #00acdf;
}

.mobile-dropdown-item {
  padding: 8px 16px;
  border-radius: 8px;
  color: #cbd5e1;
  font-family: 'Inter', sans-serif !important;
  font-weight: 500 !important;
  font-size: 0.95rem !important;
  text-decoration: none !important;
  transition: all 0.25s ease;
  cursor: pointer;
}

.mobile-dropdown-item:hover {
  background: rgba(96, 165, 250, 0.18);
  color: #00acdf;
  transform: translateX(4px);
}

.mobile-lang {
  margin-top: 16px;
  padding: 0 16px;
}

@media (max-width: 1023px) {
  .nav-menu {
    display: none !important;
  }

  .nav-actions .nav-item {
    display: none;
  }

  .hamburger-btn {
    display: flex !important;
    margin-left: auto;
    color: #e2e8f0 !important;
    padding: 10px;
    border-radius: 12px;
    background: transparent;
    transition: all 0.3s ease;
  }

  .hamburger-btn:hover {
    background: rgba(96, 165, 250, 0.2);
    color: #00acdf !important;
    transform: scale(1.1);
  }

  .navbar-container {
    padding: 0 1rem;
    gap: 0.5rem;
  }
}

@media (max-width: 640px) {
  .navbar {
    padding: 8px 0;
  }

  .logo-img {
    height: 36px;
  }

  .logo-text {
    font-size: 0.95rem;
  }
}
</style>