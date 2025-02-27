<template>
<footer>
    <div class="container">
        <div class="row">
            <div class="col">
                <h6 class="footerMsg">
                    <strong>
                        {{ $t('footer_page.footer_social_networks') }}
                    </strong>
                </h6>
                <div class="row rowIcons">
                    <div class="col">
                        <a target="_blank" href="https://www.facebook.com/SoyUnibague/"
                            class="fa fa-brands fa-facebook-f fa-xl"></a>
                        <a target="_blank" href="https://twitter.com/unibagueoficial"
                            class="fa fa-brands fa-twitter fa-xl"></a>
                        <a target="_blank" href="https://www.youtube.com/user/universidadeibague"
                            class="fa fa-brands fa-youtube fa-xl"></a>
                        <a target="_blank" href="https://www.instagram.com/soyunibague/"
                            class="fa fa-brands fa-instagram fa-xl"></a>
                    </div>
                </div>
                <br>
                <div class="row text-sm-center">
                    <h6><a type="button" class="btn btn-outline-light"> {{ $t('footer_page.footer_credits') }} </a>
                    </h6>
                </div>

            </div>
        </div>
        <br>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0"></div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <p class="footerMsg">{{ $t('footer_page.footer_copyright') }}
                 ©
            </p>
        </div>
    </div>

</footer>
</template>

<style lang="css" scoped>

/* Todo el footer */
footer {
  background-color: #0D0D0D;
  width: 100%;
}

/* Mensaje del footer */
.footerMsg {
  color: #ffff;
  text-align: center;
  padding-top: 10px;
}

/* Barra de progreso para cada item del footer */
.col .progress {
  height: 1px;
}

/* Linea separadora entre los items y los derechos de autor */
.col .progress .progress-bar {
  width: 25%;
}

/* Lo que esté dentro del footer de la clase progress */
footer .progress {
  height: 1px;
}

/* Darle color a los íconos */
.container .row .col .material-icons {
  color: #FFFF;
  font-size: 48px;
}

/* Color del texto del footer */
.footer-text {
  color: rgb(156, 156, 156);
}
</style>

<script>
/* eslint-disable */

export default {
    name: 'footer',
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
