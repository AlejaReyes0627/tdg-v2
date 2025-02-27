<template>

  <body>
    <div class="container">
      <div class="square-box">
        <section id="presentation-main">
          <div class="container">
            <div class="card">
              <div class="card-header">
                <h1>{{ $t('principal_page.first_card_tittle') }}</h1>
              </div>
              <div class="card-body">
                <p><strong>{{ $t('principal_page.first_card_bold_text') }}</strong>
                  <br>
                  {{ $t('principal_page.first_card_text') }} <strong>{{ $t('principal_page.last_card_bold_text')
                    }}</strong>
                </p>
                <img class="imgPhrase" :src="$t('principal_page.image_url')" />
              </div>
              <div class="card-footer text-muted text-end">
                {{ $t('principal_page.created_card_text') }}{{ year }}
              </div>
            </div>
          </div>
        </section>
        <section id="presentation-button-multimedia2">
          <div class="container text-center second-multimedia">
            <div class="row justify-content-center">
              <div class="col">
                <h2 class="middleTittle">{{ $t('principal_page.mini_game_text') }}</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <iframe width="800" height="400" frameborder="0" :src="$t('principal_page.mini_game_url')"
                  allowfullscreen title="Actividad número 2"></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </body>

</template>


<script>
/* eslint-disable */

export default {
  name: 'Principal',
  data() {
    return {
      year: new Date().getFullYear()
    };
  },

  methods: {

  },
  mounted() {

  },
};
</script>



<style lang="css" scoped>
/* Todo el bloque para el card presentación */
body #presentation-main {
  margin-bottom: 20px;
  margin-top: 20px;
}

/* Para el cuadro de card presentación */
.container .card {
  margin-left: 100px;
  margin-right: 100px;

}

/* Decoración para el header del card presentacion */
.container .card .card-header {
  background-color: #0F1F39;
  color: #ffff;
}

/* Decoración para el footer del card presentación */
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

#presentation-button-multimedia2 {
  margin-bottom: 30px;
}

.breadcumbIndex {
  background-color: white;
}
</style>