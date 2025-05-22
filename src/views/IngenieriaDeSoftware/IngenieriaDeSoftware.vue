<template>
  <div class="hero-wrapper">
    <div class="overlay"></div>
    <n-space vertical align="center" class="hero-content">
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
