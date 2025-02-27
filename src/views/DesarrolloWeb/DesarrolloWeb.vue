<template>
    <div class="container">
      <div class="square-box">
        <section id="ingsoft-main">
          <div class="container">
            <div class="card" style="max-width: 100%;">
              <div class="row">
                <div class="col-md-4">
                  <img src="../../../public/assets/images/ingenieriadesoftware.jpg" class="img-fluid rounded-start"
                    alt="..." style="width: 100%; height: 100%;">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ $t('isw_page.first_card_tittle') }}</h5>
                    <p class="card-text">{{ $t('isw_page.middle_card_text') }}</p>
                    <p class="card-footer text-muted text-end"><small class="text-body-secondary">{{
                      $t('isw_page.created_card_text') }}{{ year }}
                      </small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="presentation-button-multimedia2">
          <div class="container text-center second-multimedia">
            <div class="row justify-content-center">
              <div class="col">
                <h2 class="middleTittle">{{ $t('isw_page.mini_game_text') }}</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <iframe width="795" height="690" frameborder="0"
                  :src="$t('isw_page.mini_game_url') "
                  allowfullscreen title="Actividad número 3"></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id="ingsoft-main">
          <div class="container">
            <div class="card">
              <div class="card-header">
                <h1>{{ $t('isw_page.swebok_tittle') }}</h1>
              </div>
              <div class="card-body">
                <p>{{ $t('isw_page.swebok_first_text') }}</p>
                <ul>
                  <li>{{ $t('isw_page.swebok_list_1') }}</li>
                  <li>{{ $t('isw_page.swebok_list_2') }}</li>
                  <li>{{ $t('isw_page.swebok_list_3') }}</li>
                  <li>{{ $t('isw_page.swebok_list_4') }}</li>
                  <li>{{ $t('isw_page.swebok_list_5') }}</li>
                  <li>{{ $t('isw_page.swebok_list_6') }}</li>
                  <li>{{ $t('isw_page.swebok_list_7') }}</li>
                  <li>{{ $t('isw_page.swebok_list_8') }}</li>
                  <li>{{ $t('isw_page.swebok_list_9') }}</li>
                </ul>
  
                <p>{{ $t('isw_page.swebok_last_text') }}
                </p>
                <PdfViewer :pdfPath="$t('isw_page.swebok_url')" class="justify-center items-center" />
              </div>
              <div class="card-footer text-muted text-end">
                {{ $t('isw_page.last_edited_in') }}{{ year }}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  import PdfViewer from '@/components/PdfViewer.vue';
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
  /* Todo el bloque para el card ingsoft */
  body #ingsoft-main {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  
  /* Para el cuadro de card ingsoft */
  .container .card {
    margin-left: 100px;
    margin-right: 100px;
  
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
    font-family: 'Impact';
  }
  
  body h2 {
    font-family: 'Impact';
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
  