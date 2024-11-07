<template>
    <div class="container">
        <div class="square-box">
            <section id="ingsoft-main">
                <div class="container">
                    <div class="card" style="max-width: 100%;">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="../../assets/images/ingenieriadesoftware.jpg" class="img-fluid rounded-start"
                                    alt="..." style="width: 100%; height: 100%;">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">¿Qué es la Ingeniería de Software?</h5>
                                    <p class="card-text">"La ingeniería de software es una disciplina de la informática
                                        que se enfoca en el
                                        desarrollo y mantenimiento de sistemas de software de alta calidad y
                                        confiabilidad.
                                        Esta disciplina se basa en un conjunto de métodos, herramientas y técnicas para
                                        la
                                        construcción y evolución de software que cumpla con los requisitos del cliente,
                                        sea fácil de mantener y esté libre de errores.

                                        La ingeniería de software implica el uso de modelos y procesos formales para el
                                        desarrollo de software. Estos modelos y procesos incluyen la especificación de
                                        requisitos, el diseño de arquitecturas de software, la implementación de
                                        software,
                                        la verificación y validación del software y la gestión de la configuración del
                                        software."</p>
                                    <p class="card-footer text-muted text-end"><small class="text-body-secondary">Última
                                            edición en

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
                            <h2 class="middleTittle">Principios Básicos</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <iframe width="795" height="690" frameborder="0"
                                src="https://es.educaplay.com/juego/14808143-principios_basicos_de_la_ingenieria_de_software.html"
                                allowfullscreen title="Actividad número 3"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ingsoft-main">
                <div class="container">
                    <div class="card">
                        <div class="card-header">
                            <h1>Libro SWEBOK</h1>
                        </div>
                        <div class="card-body">
                            <p>"El SWEBOK (Software Engineering Body of Knowledge) es una guía que recopila
                                el conocimiento fundamental en ingeniería de software. El libro SWEBOK
                                proporciona una visión general de los principales conceptos, principios
                                y prácticas que conforman la ingeniería de software.</p>

                            <p>El libro está organizado en diez áreas de conocimiento, que son:</p>
                            <ul>
                                <li>Requerimientos de software</li>
                                <li>Diseño de software</li>
                                <li>Construcción de software</li>
                                <li>Pruebas de software</li>
                                <li>Mantenimiento de software</li>
                                <li>Gestión de la configuración de software</li>
                                <li>Ingeniería de software basada en modelos</li>
                                <li>Calidad de software</li>
                                <li>Proceso de ingeniería de software</li>
                            </ul>

                            <p>Cada área de conocimiento es tratada de manera detallada, incluyendo una
                                descripción de los conceptos clave, los principios y prácticas relevantes,
                                y las técnicas y herramientas comúnmente utilizadas en cada una."
                            </p>
                            <PdfViewer :pdfPath="'/assets/pdf/swebokv3.pdf'" class="justify-center items-center"/>
                        </div>
                        <div class="card-footer text-muted text-end">
                            Creado en 2023
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
        return {}
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
.container .card{
  margin-left: 100px;
  margin-right: 100px;

}

/* Decoración para el header del card ingsoft */
.container .card .card-header{
  background-color: #0F1F39;
  color: #ffff;
}

/* Decoración para el footer del card ingsoft */
.container .card .card-footer{
  background-color: #ffffff;
  font-weight: bold;
}

/*  */
.container .card .card-body{
  text-align: center;
}

.container .card .card-body .imgPhrase{
  border-radius: 5px;
  box-shadow: 0 0 10px #000000;
}

body .carousel-inner img{
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

.square-box{
  border: 1px solid;
}

.breadcumbIndex{
  background-color: white;
}
</style>
