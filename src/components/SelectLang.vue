<template>
  <n-space align="center" class="language-select">
    <n-icon class="white-icon" size="20">
      <LanguageOutline />
    </n-icon>
    <n-select
      v-model:value="selectedLang"
      :options="languageOptions"
      placeholder="{$t('select_language_text')}"
      size="small"
      show-arrow
      class="lang-select"
      @update:value="changeLanguage"
    />
  </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { NIcon, NSelect } from 'naive-ui';
import { LanguageOutline } from '@vicons/ionicons5';

const { locale, t } = useI18n();

const languageOptions = [
  { label: t('language_1'), value: 'es' },
  { label: t('language_2'), value: 'en' }
];

const selectedLang = ref(locale.value);

const changeLanguage = (val: string) => {
  locale.value = val;
};
</script>

<style scoped>
.language-select {
  color: white;
  gap: 8px;
  user-select: none;
}

.white-icon {
  color: white;
}

.lang-select {
  width: 120px;
  color: white;
}

.lang-select .n-base-selection {
  color: white;
}

.lang-select .n-base-selection--single {
  background-color: transparent;
  border: none;
  box-shadow: none;
}

.lang-select:hover .n-base-selection--single {
  background-color: rgba(255, 255, 255, 0.1);
}

.lang-select .n-base-selection-arrow {
  color: white;
}

::v-deep(.n-base-selection) {
  border: 1px solid #00acdf !important; 
  
  border-radius: 6px;
  transition: border-color 0.3s ease;
}

::v-deep(.n-base-selection:hover) {
  border-color: #00acdf !important; 
  
}

::v-deep(.n-base-selection--active) {
  border-color: #00acdf !important;
  box-shadow: 0 0 4px #3ba0ff66; 
  
}

</style>