<template>
  <n-layout-header class="navbar">
    <div class="container-fluid d-flex align-items-center justify-between flex-wrap">

      <router-link to="/" class="logo d-flex align-items-center">
        <img src="/assets/images/unibague-4.0.png" alt="Logo" height="40" />
      </router-link>

      <n-space size="large" justify="start" class="nav-links">
        <router-link to="/isw" class="nav-item">
          <n-icon size="20">
            <HatGraduation20Regular />
          </n-icon>
          {{ $t('isw_tittle') }}
        </router-link>

        <n-dropdown :options="webDevOptions" @select="handleWebDevSelect">
          <div class="nav-item dropdown-toggle">
            <n-icon size="20">
              <WebFilled />
            </n-icon>
            {{ $t('webDevelop_tittle') }}
          </div>
        </n-dropdown>

        <div class="nav-item">
          <n-icon size="20">
            <GitBranchOutline />
          </n-icon>
          {{ $t('softwareConfig_tittle') }}
        </div>
      </n-space>

      <n-space justify="end" align="center" size="large">
        <router-link to="/contact" class="nav-item">
          <n-icon size="20">
            <ContactCardGroup20Regular />
          </n-icon>
          {{ $t('contact_title') }}
        </router-link>
        <SelectLang />
      </n-space>
    </div>
  </n-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { HatGraduation20Regular, ContactCardGroup20Regular } from '@vicons/fluent';
import { WebFilled } from '@vicons/material';
import { GitBranchOutline } from '@vicons/ionicons5';

import SelectLang from './SelectLang.vue';

export default defineComponent({
  components: {
    HatGraduation20Regular,
    ContactCardGroup20Regular,
    WebFilled,
    GitBranchOutline,
    SelectLang
  },
  setup() {
    const router = useRouter();
    const { t } = useI18n();

    const webDevOptions = [
      { label: 'Opción 1', key: 'opcion1' },
      { label: 'Opción 2', key: 'opcion2' },
      { label: 'Opción 3', key: 'opcion3' }
    ];

    const handleWebDevSelect = (key: string) => {
      router.push(`/${key}`);
    };

    return {
      t,
      webDevOptions,
      handleWebDevSelect
    };
  }
});
</script>

<style scoped>
.navbar {
  background-color: #0F1F39;
  padding: 10px 20px;
  color: white;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: #cccccc;
}

.logo img {
  max-height: 40px;
}

.dropdown-toggle {
  cursor: pointer;
}

.n-dropdown-menu {
  background-color: #0F1F39;
  color: white;
}

.n-dropdown-option:hover {
  background-color: #14294b;
}

.container-fluid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.nav-links {
  flex-grow: 1;
  margin-left: 20px;
}

a { text-decoration: none;}

.n-space[justify='end'] {
  white-space: nowrap;
}
@media (max-width: 767px) {
  .container-fluid {
    flex-wrap: wrap;
    justify-content: center;
  }

  .logo {
    flex: 1 1 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .nav-links {
    flex: 1 1 100%;
    justify-content: center !important; 
    margin-left: 0;
    margin-bottom: 10px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .n-space[justify='end'] {
    flex: 1 1 100%;
    justify-content: center !important;
    gap: 20px;
  }

  .nav-item {
    font-size: 1rem;
  }
}
</style>