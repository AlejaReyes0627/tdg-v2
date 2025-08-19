<template>
  <div class="hero-wrapper">
    <div class="overlay"></div>
    <n-space vertical align="center" class="hero-content">
      <n-space>
        <n-tag round :bordered="false" type="info">
          {{ $t('isw_page.main_remember') }}
        </n-tag>
      </n-space>
      <h1 style="font-size: 40px;">{{ $t('isw_page.main_title') }}</h1>
      <p style="max-width: 600px; text-align: center;">
        {{ $t('isw_page.main_body') }}
      </p>
    </n-space>
  </div>
  <div class="container">
    <section id="ingsoft-main">
      <n-card hoverable style="padding: 0; overflow: hidden;">
        <n-grid cols="12" x-gap="0" responsive="screen">
          <n-gi :span="4">
            <div style="height: 100%; width: 100%; overflow: hidden;">
              <n-image src="/assets/images/ingenieriaSoftware.jpg" alt="Ingeniería de Software"
                style="width: 100%; height: 100%; max-height: 250px; object-fit: contain;" />
            </div>
          </n-gi>
          <n-gi :span="8">
            <div style="padding: 1.5rem;">
              <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">
                {{ $t('isw_page.first_card_tittle') }}
              </h3>
              <p style="margin-bottom: 1.5rem;">
                {{ $t('isw_page.middle_card_text') }}
              </p>
              <div style="text-align: right; color: #999;">
                <small>{{ $t('isw_page.created_card_text') }} {{ year }}</small>
              </div>
            </div>
          </n-gi>
        </n-grid>
      </n-card>
    </section>
    <section id="presentation-button-multimedia2">
      <div class="text-center second-multimedia">
        <div class="row justify-content-center">
          <div class="col">
            <h2 class="middleTittle">{{ $t('isw_page.mini_game_text') }}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <iframe width="795" height="690" frameborder="0" :src="$t('isw_page.mini_game_url')" allowfullscreen
              title="Actividad número 3"></iframe>
          </div>
        </div>
      </div>
    </section>
    <section id="ingsoft-main">
      <div class="card">
        <div class="card-header">
          <h1>{{ $t('isw_page.swebok_tittle') }}</h1>
        </div>
        <div class="card-body">
          <p>{{ $t('isw_page.swebok_first_text') }}</p>
          <n-thing>
            {{ $t('isw_page.swebok_list_1') }}<br>
            {{ $t('isw_page.swebok_list_2') }}<br>
            {{ $t('isw_page.swebok_list_3') }}<br>
            {{ $t('isw_page.swebok_list_4') }}<br>
            {{ $t('isw_page.swebok_list_5') }}<br>
            {{ $t('isw_page.swebok_list_6') }}<br>
            {{ $t('isw_page.swebok_list_7') }}<br>
            {{ $t('isw_page.swebok_list_8') }}<br>
            {{ $t('isw_page.swebok_list_9') }}<br>
          </n-thing>
          <p>{{ $t('isw_page.swebok_last_text') }}
          </p>
          <PdfViewer :pdfPath="$t('isw_page.swebok_url')" class="justify-center items-center" />
        </div>
        <div class="card-footer text-muted text-end">
          {{ $t('isw_page.last_edited_in') }}{{ year }}
        </div>
      </div>
    </section>


      <section id="metodologias-section" style="margin: 2rem 0;">
    <n-card>
      <template #header>
        <h2 style="text-align: center; margin: 0;">
          {{ $t('isw_page.methodologies_title') }}
        </h2>
      </template>

      <n-grid cols="1 s:2 m:3" responsive="screen" x-gap="16" y-gap="16">
        <!-- Metodología Ágil -->
        <n-gi>
          <n-card hoverable size="small">
            <template #cover>
              <div
                style="height: 120px; background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%); display: flex; align-items: center; justify-content: center;">
                <n-icon size="48" color="white">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12,4V2C13.30,2.13 14.55,2.45 15.68,2.94L14.81,4.54C14.00,4.24 13.11,4.07 12,4M4,12C4,13.11 4.24,14.00 4.54,14.81L2.94,15.68C2.45,14.55 2.13,13.30 2,12H4M15.46,4.54L16.94,2.94C18.22,3.86 19.35,5.00 20.27,6.29L18.68,7.76C17.96,6.78 17.05,5.87 15.46,4.54M20,12H22C21.87,13.30 21.55,14.55 21.06,15.68L19.46,14.81C19.76,14.00 19.93,13.11 20,12M17.24,18.68L18.76,20.27C17.5,21.13 16.06,21.74 14.50,22.05L14.07,20.14C15.17,19.92 16.21,19.42 17.24,18.68M4.54,9.46L2.94,8.06C3.86,6.78 5.00,5.65 6.29,4.73L7.76,6.32C6.78,7.04 5.87,7.95 4.54,9.46M12,20V22C10.70,21.87 9.45,21.55 8.32,21.06L9.19,19.46C10.00,19.76 10.89,19.93 12,20M6.76,17.24L5.24,18.76C4.38,17.5 3.77,16.06 3.46,14.50L5.37,14.07C5.58,15.17 6.08,16.21 6.76,17.24M9.46,19.46L8.06,21.06C6.78,20.14 5.65,19.00 4.73,17.71L6.32,16.24C7.04,17.22 7.95,18.13 9.46,19.46M14.07,3.86L14.50,1.95C16.06,2.26 17.5,2.87 18.76,3.73L17.24,5.32C16.21,4.58 15.17,4.08 14.07,3.86Z" />
                  </svg>
                </n-icon>
              </div>
            </template>
            <template #header>
              <n-space justify="space-between" align="center">
                <span style="font-weight: bold;">{{ $t('isw_page.agile_title') }}</span>
                <n-tag type="info" size="small">Popular</n-tag>
              </n-space>
            </template>
            <p style="margin: 0; font-size: 14px; line-height: 1.4;">
              {{ $t('isw_page.agile_description') }}
            </p>
            <template #footer>
              <n-space>
                <n-tag size="tiny" type="success">{{ $t('isw_page.tag1') }}</n-tag>
                <n-tag size="tiny" type="info">{{ $t('isw_page.tag2') }}</n-tag>
                <n-tag size="tiny" type="warning">{{ $t('isw_page.tag3') }}</n-tag>
              </n-space>
            </template>
          </n-card>
        </n-gi>

        <!-- Scrum -->
        <n-gi>
          <n-card hoverable size="small">
            <template #cover>
              <div
                style="height: 120px; background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); display: flex; align-items: center; justify-content: center;">
                <n-icon size="48" color="white">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                  </svg>
                </n-icon>
              </div>
            </template>
            <template #header>
              <n-space justify="space-between" align="center">
                <span style="font-weight: bold;">{{ $t('isw_page.scrum_title') }}</span>
                <n-tag type="success" size="small">Ágil</n-tag>
              </n-space>
            </template>
            <p style="margin: 0; font-size: 14px; line-height: 1.4;">
              {{ $t('isw_page.scrum_description') }}
            </p>
            <template #footer>
              <n-space>
                <n-tag size="tiny" type="primary">{{ $t('isw_page.tag4') }}</n-tag>
                <n-tag size="tiny" type="success">{{ $t('isw_page.tag5') }}</n-tag>
                <n-tag size="tiny" type="info">{{ $t('isw_page.tag6') }}</n-tag>
              </n-space>
            </template>
          </n-card>
        </n-gi>

        <!-- Waterfall -->
        <n-gi>
          <n-card hoverable size="small">
            <template #cover>
              <div
                style="height: 120px; background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%); display: flex; align-items: center; justify-content: center;">
                <n-icon size="48" color="white">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M2,3V6H8V3H2M2,7V10H8V7H2M2,11V14H8V11H2M10,3V6H16V3H10M10,7V10H16V7H10M10,11V14H16V11H10M18,3V6H24V3H18M18,7V10H24V7H18M18,11V14H24V11H18M2,15V18H8V15H2M10,15V18H16V15H10M18,15V18H24V15H18M2,19V22H8V19H2M10,19V22H16V19H10M18,19V22H24V19H18Z" />
                  </svg>
                </n-icon>
              </div>
            </template>
            <template #header>
              <n-space justify="space-between" align="center">
                <span style="font-weight: bold;">{{ $t('isw_page.waterfall_title') }}</span>
                <n-tag type="default" size="small">Tradicional</n-tag>
              </n-space>
            </template>
            <p style="margin: 0; font-size: 14px; line-height: 1.4;">
              {{ $t('isw_page.waterfall_description') }}
            </p>
            <template #footer>
              <n-space>
                <n-tag size="tiny" type="default">Secuencial</n-tag>
                <n-tag size="tiny" type="warning">Documentado</n-tag>
                <n-tag size="tiny" type="info">Fases</n-tag>
              </n-space>
            </template>
          </n-card>
        </n-gi>

        <!-- DevOps -->
        <n-gi>
          <n-card hoverable size="small">
            <template #cover>
              <div
                style="height: 120px; background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%); display: flex; align-items: center; justify-content: center;">
                <n-icon size="48" color="white">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M18.6,6.62C21.58,9.6 21.58,14.4 18.6,17.38C17.72,18.26 16.66,18.86 15.54,19.16L14.44,17.73C15.27,17.5 16.04,17.05 16.67,16.42C18.78,14.31 18.78,10.69 16.67,8.58C14.56,6.47 10.94,6.47 8.83,8.58C7.72,9.69 7.72,11.31 8.83,12.42L10.76,14.35L12.18,12.93L10.25,11C9.64,10.39 9.64,9.61 10.25,9C10.86,8.39 11.64,8.39 12.25,9L14.18,10.93L15.6,9.51L13.67,7.58C12.56,6.47 10.94,6.47 9.83,7.58C6.85,10.56 6.85,15.44 9.83,18.42C10.71,19.3 11.77,19.9 12.89,20.2L14,18.77C13.16,18.54 12.39,18.09 11.76,17.46C9.65,15.35 9.65,11.73 11.76,9.62C13.87,7.51 17.49,7.51 19.6,9.62C20.71,10.73 20.71,12.35 19.6,13.46L17.67,15.39L16.25,13.97L18.18,12.04C18.79,11.43 18.79,10.65 18.18,10.04C17.57,9.43 16.79,9.43 16.18,10.04L14.25,11.97L12.83,10.55L14.76,8.62C15.87,7.51 17.49,7.51 18.6,8.62Z" />
                  </svg>
                </n-icon>
              </div>
            </template>
            <template #header>
              <n-space justify="space-between" align="center">
                <span style="font-weight: bold;">{{ $t('isw_page.devops_title') }}</span>
                <n-tag type="error" size="small">Moderno</n-tag>
              </n-space>
            </template>
            <p style="margin: 0; font-size: 14px; line-height: 1.4;">
              {{ $t('isw_page.devops_description') }}
            </p>
            <template #footer>
              <n-space>
                <n-tag size="tiny" type="error">CI/CD</n-tag>
                <n-tag size="tiny" type="success">Automatización</n-tag>
                <n-tag size="tiny" type="warning">Colaboración</n-tag>
              </n-space>
            </template>
          </n-card>
        </n-gi>

        <!-- Kanban -->
        <n-gi>
          <n-card hoverable size="small">
            <template #cover>
              <div
                style="height: 120px; background: linear-gradient(135deg, #3498db 0%, #2980b9 100%); display: flex; align-items: center; justify-content: center;">
                <n-icon size="48" color="white">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M3,3V21H21V3H3M19,19H5V5H19V19M7,7V17H9V7H7M11,7V13H13V7H11M15,7V15H17V7H15Z" />
                  </svg>
                </n-icon>
              </div>
            </template>
            <template #header>
              <n-space justify="space-between" align="center">
                <span style="font-weight: bold;">{{ $t('isw_page.kanban_title') }}</span>
                <n-tag type="primary" size="small">Visual</n-tag>
              </n-space>
            </template>
            <p style="margin: 0; font-size: 14px; line-height: 1.4;">
              {{ $t('isw_page.kanban_description') }}
            </p>
            <template #footer>
              <n-space>
                <n-tag size="tiny" type="primary">Tablero</n-tag>
                <n-tag size="tiny" type="info">Flujo</n-tag>
                <n-tag size="tiny" type="success">Límites</n-tag>
              </n-space>
            </template>
          </n-card>
        </n-gi>

        <!-- Lean -->
        <n-gi>
          <n-card hoverable size="small">
            <template #cover>
              <div
                style="height: 120px; background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%); display: flex; align-items: center; justify-content: center;">
                <n-icon size="48" color="white">
                  <svg viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M4,15V9H12L11.5,7.5H4V6.5H12.5L13.5,9H20V10H14L13.5,8.5H5.5V14.5H13.5L14,16H20V17H13.5L12.5,14.5H5.5V16H12L11.5,17.5H4V15M16,12V18L20,15L16,12Z" />
                  </svg>
                </n-icon>
              </div>
            </template>
            <template #header>
              <n-space justify="space-between" align="center">
                <span style="font-weight: bold;">{{ $t('isw_page.lean_title') }}</span>
                <n-tag type="warning" size="small">Eficiente</n-tag>
              </n-space>
            </template>
            <p style="margin: 0; font-size: 14px; line-height: 1.4;">
              {{ $t('isw_page.lean_description') }}
            </p>
            <template #footer>
              <n-space>
                <n-tag size="tiny" type="warning">Valor</n-tag>
                <n-tag size="tiny" type="error">Desperdicio</n-tag>
                <n-tag size="tiny" type="info">Mejora</n-tag>
              </n-space>
            </template>
          </n-card>
        </n-gi>
      </n-grid>

      <!-- Comparación rápida -->
      <template #footer>
        <n-alert type="info" style="margin-top: 1rem;">
          <template #icon>
            <n-icon>
              <svg viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
              </svg>
            </n-icon>
          </template>
          <strong>{{ $t('isw_page.methodology_tip_title') }}:</strong>
          {{ $t('isw_page.methodology_tip_text') }}
        </n-alert>
      </template>
    </n-card>
  </section>


  </div>
</template>

<script>
/* eslint-disable */
import PdfViewer from '@/components/PdfViewer.vue';
import { NSpace, NButton, NCard, NGrid, NGi, NImage } from 'naive-ui'
export default {
  name: 'ISW',
  components: {
    PdfViewer
  },
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.hero-wrapper {
  position: relative;
  background-image: url('/assets/images/ingenieriadesoftware.jpg');
  background-size: cover;
  background-position: center;
  padding: 4rem 1rem;
  color: white;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  /* 0.5 = 50% oscuridad */
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

/* Todo el bloque para el card ingsoft */
body #ingsoft-main {
  margin-bottom: 20px;
  margin-top: 20px;
}


/* Decoración para el header del card ingsoft */
.container .card .card-header {
  background-color: #0F1F39;
  color: #ffff;
}

/* Decoración para el footer del card ingsoft */
.container .card .card-footer {
  background-color: #ffffff;
  font-weight: bold;
}

/*  */
.container .card .card-body {
  text-align: center;
}

.container .card .card-body .imgPhrase {
  border-radius: 5px;
  box-shadow: 0 0 10px #000000;
}

body .carousel-inner img {
  height: 500px;
}

body h1 {
  text-align: start;
  font-family: 'Arial';
  font-weight: bold;
}

body h2 {
  font-family: 'Arial';
}

.first-multimedia .row .col {
  padding-top: 20px;
}

.second-multimedia .row .col {
  padding-top: 20px;
}

.btn.btn-primary.content-button {
  background-color: #00ACDF;
}

.btn.btn-primary.content-button:hover {
  background-color: #2D82A6;
}

.square-box {
  border: 1px solid;
}

.breadcumbIndex {
  background-color: white;
}
</style>
