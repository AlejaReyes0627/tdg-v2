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
                            <a target="_blank" href="https://www.facebook.com/SoyUnibague/">
                                <n-icon size="30">
                                    <LogoFacebook />
                                </n-icon>
                            </a>
                            <a target="_blank" href="https://twitter.com/unibagueoficial">
                                <n-icon size="30">
                                    <LogoTwitter />
                                </n-icon>
                            </a>
                            <a target="_blank" href="https://www.youtube.com/user/universidadeibague">
                                <n-icon size="30">
                                    <LogoYoutube />
                                </n-icon>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/soyunibague/">
                                <n-icon size="30">
                                    <LogoInstagram />
                                </n-icon>
                            </a>
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
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0">
                </div>
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

<script lang="ts">
import { LogoInstagram, LogoFacebook, LogoTwitter, LogoYoutube } from '@vicons/ionicons5'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        LogoInstagram,
        LogoFacebook,
        LogoTwitter,
        LogoYoutube
    },
    setup() {
        return {
            LogoInstagram,
            LogoFacebook,
            LogoTwitter,
            LogoYoutube
        }
    }
})
</script>

<style lang="css" scoped>
/* Todo el footer */
footer {
    background-color: #0D0D0D;
    width: 100%;
}

/* Mensaje del footer  */
.footerMsg {
    color: #ffff;
    text-align: center;
    padding-top: 10px;
}

.rowIcons a{
    text-decoration: none !important; 
    color: white;
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

/* Darle color a los íconos  */
.container .row .col .material-icons {
    color: #FFFF;
    font-size: 48px;
}

/* Color del texto del footer */ 
.footer-text {
    color: rgb(156, 156, 156);
} 
</style>
