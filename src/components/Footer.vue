<template>
  <footer class="footer-dark text-white py-5">
    <div class="container text-center">

      <h5 class="mb-3 fw-bold">
        {{ $t('footer_page.footer_social_networks') }}
      </h5>

      <n-space justify="center" size="large">
        <a href="https://www.facebook.com/SoyUnibague/" target="_blank">
          <n-icon size="32" color="white">
            <LogoFacebook />
          </n-icon>
        </a>
        <a href="https://twitter.com/unibagueoficial" target="_blank">
          <n-icon size="32" color="white">
            <LogoTwitter />
          </n-icon>
        </a>
        <a href="https://www.youtube.com/user/universidadeibague" target="_blank">
          <n-icon size="32" color="white">
            <LogoYoutube />
          </n-icon>
        </a>
        <a href="https://www.instagram.com/soyunibague/" target="_blank">
          <n-icon size="32" color="white">
            <LogoInstagram />
          </n-icon>
        </a>
      </n-space>

      <div class="my-4 mx-auto separator"></div>

      <small class="footer-copy">
        {{ $t('footer_page.footer_copyright') }} ©
      </small>
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
  }
})
</script>

<style scoped>
.footer-dark {
  background-color: #0D0D0D;
}

.separator {
  width: 25%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  opacity: 0.85;
}

.footer-copy {
  color: white;
  font-size: 0.9rem;
  opacity: 0.9;
}
</style>