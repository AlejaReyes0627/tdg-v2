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
            <div style="height: 120px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center;">
              <n-icon size="48" color="white">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17L7,12L8.41,10.59L12,14.17L15.59,10.59L17,12L12,17Z"/>
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
              <n-tag size="tiny" type="success">Flexible</n-tag>
              <n-tag size="tiny" type="info">Iterativo</n-tag>
              <n-tag size="tiny" type="warning">Colaborativo</n-tag>
            </n-space>
          </template>
        </n-card>
      </n-gi>

      <!-- Scrum -->
      <n-gi>
        <n-card hoverable size="small">
          <template #cover>
            <div style="height: 120px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center;">
              <n-icon size="48" color="white">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.24,7.76C15.07,6.59 13.54,6 12,6V12L7.76,16.24C8.93,17.41 10.46,18 12,18A6,6 0 0,0 18,12C18,10.46 17.41,8.93 16.24,7.76Z"/>
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
              <n-tag size="tiny" type="primary">Sprints</n-tag>
              <n-tag size="tiny" type="success">Roles</n-tag>
              <n-tag size="tiny" type="info">Ceremonias</n-tag>
            </n-space>
          </template>
        </n-card>
      </n-gi>

      <!-- Waterfall -->
      <n-gi>
        <n-card hoverable size="small">
          <template #cover>
            <div style="height: 120px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center;">
              <n-icon size="48" color="white">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H17V15H7Z"/>
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
            <div style="height: 120px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); display: flex; align-items: center; justify-content: center;">
              <n-icon size="48" color="white">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,1L21.5,6.5V17.5L12,23L2.5,17.5V6.5L12,1M12,3.311L4.5,7.5V16.5L12,20.689L19.5,16.5V7.5L12,3.311Z"/>
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
            <div style="height: 120px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); display: flex; align-items: center; justify-content: center;">
              <n-icon size="48" color="white">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M21,16V4H3V16H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H3A2,2 0 0,1 1,16V4A2,2 0 0,1 3,2H21M5,6H11V8H5V6M5,10H9V12H5V10M5,14H11V16H5V14M13,6H19V12H13V6M13,14H17V16H13V14Z"/>
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
            <div style="height: 120px; background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%); display: flex; align-items: center; justify-content: center;">
              <n-icon size="48" color="white">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M19,19V5H5V19H19M17,17H7V15H17V17M15,13H7V11H15V13Z"/>
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
              <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
            </svg>
          </n-icon>
        </template>
        <strong>{{ $t('isw_page.methodology_tip_title') }}:</strong> 
        {{ $t('isw_page.methodology_tip_text') }}
      </n-alert>
    </template>
  </n-card>
</section>


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
