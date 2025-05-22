<template>
  <div class="align-content-center">
    <n-icon class="me-2 white-icon">
      <LanguageOutline />
    </n-icon>
  </div>
  <select class="form-select form-control pl-2" @change="changeLanguage($event.target.value)">
    <option value="" disabled selected>{{ $t('select_language_text') }}</option>
    <option value="es">{{ $t('language_1') }}</option>
    <option value="en">{{ $t('language_2') }}</option>
  </select>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { NIcon } from 'naive-ui';
import { LanguageOutline } from '@vicons/ionicons5'; 

const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
};

</script>

<style scoped>
@import 'bootstrap-icons/font/bootstrap-icons.css';

.white-icon {
  color: white;
}

.language-button:hover {
  cursor: pointer;
  /* Cambia el cursor a puntero */
}
</style>