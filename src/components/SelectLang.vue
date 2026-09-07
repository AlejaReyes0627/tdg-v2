<template>
  <n-space align="center" class="language-select">
    <n-icon class="white-icon" size="20">
      <LanguageOutline />
    </n-icon>
    <n-select
      v-model:value="selectedLang"
      :options="languageOptions"
      :placeholder="t('select_language_text')"
      size="small"
      show-arrow
      class="lang-select"
      @update:value="changeLanguage"
    />
  </n-space>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { NIcon, NSelect } from 'naive-ui';
import { LanguageOutline } from '@vicons/ionicons5';

const { locale, t } = useI18n();

const selectedLang = ref(locale.value);

const languageOptions = computed(() => [
  { label: t('language_1'), value: 'es' },
  { label: t('language_2'), value: 'en' }
]);

const changeLanguage = (val: string) => {
  locale.value = val;
  selectedLang.value = val;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('reda_lang', val);
  }
};

watch(locale, (newVal) => {
  if (selectedLang.value !== newVal) {
    selectedLang.value = newVal;
  }
});
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
  width: 130px;
  color: white;
}

.lang-select :deep(.n-base-selection) {
  border: 1px solid rgba(0, 172, 223, 0.6) !important;
  border-radius: 8px;
  background-color: rgba(15, 31, 57, 0.6);
  transition: all 0.3s ease;
}

.lang-select :deep(.n-base-selection-input__content) {
  color: white !important;
}

.lang-select :deep(.n-base-selection-placeholder) {
  color: rgba(255, 255, 255, 0.7) !important;
}

.lang-select :deep(.n-base-selection:hover) {
  border-color: #00acdf !important;
  box-shadow: 0 0 8px rgba(0, 172, 223, 0.4);
}
</style>