<template>
<body>
    <div class="container">
        <div class="square-box">
            <section id="presentation-main">
                <div class="container">
                    <div class="card">
                        <div class="card-header">
                            <h1>Presentación</h1>
                        </div>
                        <div class="card-body">
                            <p><strong>¡Bienvenidos al Recurso Educativo Digital Abierto sobre Gestión y Configuración
                                    del
                                    Software y Desarrollo Web como parte de la Ingeniería de Software!</strong>
                                <br>
                                Este recurso educativo digital abierto es una herramienta valiosa para cualquier persona
                                interesada en la Ingeniería de Software. Te ayudará a comprender la Gestión y
                                Configuración del Software, así como el Desarrollo Web, en el contexto de un proyecto de
                                software exitoso. Al finalizar, estarás equipado con los conocimientos y
                                habilidades necesarias para gestionar y configurar el software de manera efectiva y
                                desarrollar aplicaciones web robustas y seguras. <strong>¡Esperamos que disfrutes de
                                    este curso
                                    y aprendas mucho!</strong>
                            </p>
                            <img class="imgPhrase" src="../assets/images/phrasepresentation.png" />
                        </div>
                        <div class="card-footer text-muted text-end">
                            Creado en
                            
                        </div>
                    </div>
                </div>
            </section>
            <section id="presentation-button-multimedia2">
                <div class="container text-center second-multimedia">
                    <div class="row justify-content-center">
                        <div class="col">
                            <h2 class="middleTittle">¿De qué tratará el
                                contenido de este recurso educativo?</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <iframe width="800" height="400" frameborder="0"
                                src="https://es.educaplay.com/juego/14775635-de_que_tratara_realmente_el_contenido.html"
                                allowfullscreen title="Actividad número 2"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</body>

</template>

<style lang="css" scoped>

/* Todo el bloque para el card presentación */
body #presentation-main {
  margin-bottom: 20px;
  margin-top: 20px;
}

/* Para el cuadro de card presentación */
.container .card{
  margin-left: 100px;
  margin-right: 100px;

}

/* Decoración para el header del card presentacion */
.container .card .card-header{
  background-color: #0F1F39;
  color: #ffff;
}

/* Decoración para el footer del card presentación */
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

#presentation-button-multimedia2{
  margin-bottom: 30px;
}

.breadcumbIndex{
  background-color: white;
}

</style>

<script>
/* eslint-disable */

export default {
    name: 'Principal',
    data() {
        return {
            
        };
    },
    
    methods: {
        
    },
    mounted() {
        
    },
};
</script>
