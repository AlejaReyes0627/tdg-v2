<template>
    <section id="presentation-main">
      <div class="container">
        <n-card hoverable style="padding: 20px; overflow: hidden; border-radius: 10px; margin-top: 10px;"
          :title="$t('principal_page.first_card_tittle')" :segmented="{ content: true, footer: 'soft' }">
          <div class="card-content">
            <p><strong>{{ $t('principal_page.first_card_bold_text') }}</strong></p>
            <p>{{ $t('principal_page.first_card_text') }} <strong>{{ $t('principal_page.last_card_bold_text')
                }}</strong></p>
            <img class="imgPhrase" :src="$t('principal_page.image_url')" />
          </div>
          <template #footer>
            <div class="text-muted text-end">
              {{ $t('principal_page.created_card_text') }} {{ year }}
            </div>
          </template>
        </n-card>
      </div>
    </section>

    <section id="presentation-button-multimedia2" style="margin-top: 50px; margin-bottom: 10px;">
      <div class="text-center second-multimedia">
        <n-text tag="h2" strong style="font-size: 24px;">{{ $t('principal_page.mini_game_text') }}</n-text>
        <iframe width="90%" height="500" frameborder="0" :src="$t('principal_page.mini_game_url')" allowfullscreen
          title="Actividad número 2">
        </iframe>
      </div>
    </section>

    <section id="temario" style="margin-top: 30px; text-align: center;">
      <div class="container">
        <n-text tag="h2" strong style="font-size: 24px;">{{ $t('principal_page.temario_tittle') }}</n-text>
        <n-divider />
      </div>
    </section>

    <section id="topics" style="margin-bottom: 10px;">
      <div class="container">
        <n-grid :cols="gridCols" x-gap="20" y-gap="20">
          <n-gi v-for="(topic, index) in topics" :key="index">
            <n-card hoverable style="border-radius: 10px;">
              <template #header>
                <n-space align="center">
                  <n-icon :component="topic.icon" size="20" />
                  <n-text strong>{{ topic.title }}</n-text>
                </n-space>
              </template>
              <p>{{ topic.description }}</p>
              <n-button type="primary">Leer más</n-button>
            </n-card>
          </n-gi>
        </n-grid>
      </div>
    </section>
</template>

<script>
import { watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { SettingsOutline, GlobeOutline, FlashOutline } from '@vicons/ionicons5';

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

    fetchTranslations();

    return {
      year,
      gridCols,
      topics,
      locale
    };
  }
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.imgPhrase {
  display: block;
  max-width: 100%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.middleTittle {
  text-align: center;
  font-weight: bold;
  color: #0F1F39;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    width: 90%;
  }
}
</style>
