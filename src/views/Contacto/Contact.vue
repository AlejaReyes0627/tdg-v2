<template>
  <div class="container py-5">

    <div class="text-center mb-4">
      <h2 class="fw-bold">Equipo de Desarrollo</h2>
      <p class="text-muted">Personas detrás de la idea y su ejecución</p>
    </div>

    <div class="row g-4 justify-content-center mb-5">
      <div class="col-md-4" v-for="dev in developers" :key="dev.name">
        <n-card hoverable class="h-100 shadow-lg border-0">
          <template #header>
            <div class="d-flex align-items-center gap-3">
              <n-avatar round :size="48" :src="dev.avatar" />
              <div>
                <h5 class="mb-0">{{ dev.name }}</h5>
                <small class="text-muted">{{ dev.role }}</small>
              </div>
            </div>
          </template>
          <div class="mt-3">
            <p><strong>Email:</strong> <a :href="`mailto:${dev.email}`">{{ dev.email }}</a></p>
            <p><strong>Teléfono:</strong> {{ dev.phone }}</p>
          </div>
        </n-card>
      </div>
    </div>

    <n-card class="shadow-sm mt-4" title="Tecnologías Utilizadas">
      <div class="row">
        <div class="col-md-6 mb-3">
          <h5 class="text-primary mb-3">Versión Original</h5>
          <n-space vertical :size="8">
            <div class="tech-item">
              <n-tag type="default" size="large">
                <n-icon>
                  <LogoHtml5 />
                </n-icon>
                HTML5
              </n-tag>
              <small class="tech-desc"> Lenguaje base para estructuras web.</small>
            </div>
            <div class="tech-item">
              <n-tag type="default" size="large">
                <n-icon>
                  <LogoCss3 />
                </n-icon>
                CSS3
              </n-tag>
              <small class="tech-desc"> Estilos visuales para páginas web.</small>
            </div>
            <div class="tech-item">
              <n-tag type="default" size="large">
                <n-icon>
                  <LogoJavascript />
                </n-icon>
                JavaScript
              </n-tag>
              <small class="tech-desc"> Interactividad y comportamiento dinámico.</small>
            </div>
            <div class="tech-item">
              <n-tag type="default" size="large">
                <n-icon>
                  <CodeSlashOutline />
                </n-icon>
                jQuery
              </n-tag>
              <small class="tech-desc"> Librería JS para manipulación del DOM.</small>
            </div>
            <div class="tech-item">
              <n-tag type="default" size="large">
                <n-icon>
                  <Bootstrap />
                </n-icon>
                Bootstrap 4
              </n-tag>
              <small class="tech-desc"> Framework de estilos responsive.</small>
            </div>
          </n-space>
        </div>

        <div class="col-md-6">
          <h5 class="text-success mb-3">Versión Moderna</h5>
          <n-space vertical :size="8">
            <div class="tech-item">
              <n-tag type="success" size="large">
                <n-icon>
                  <LogoVue />
                </n-icon>
                Vue 3
              </n-tag>
              <small class="tech-desc"> Framework progresivo para interfaces modernas.</small>
            </div>
            <div class="tech-item">
              <n-tag type="success" size="large">
                <n-icon>
                  <FlashOutline />
                </n-icon>
                Vite
              </n-tag>
              <small class="tech-desc"> Empaquetador rápido para proyectos frontend.</small>
            </div>
            <div class="tech-item">
              <n-tag type="success" size="large">
                <n-icon>
                  <AppsOutline />
                </n-icon>
                Naive UI
              </n-tag>
              <small class="tech-desc"> Biblioteca de componentes UI para Vue 3.</small>
            </div>
            <div class="tech-item">
              <n-tag type="success" size="large">
                <n-icon>
                  <GitBranchOutline />
                </n-icon>
                Vue Router
              </n-tag>
              <small class="tech-desc"> Gestión de rutas en SPA con Vue.</small>
            </div>
            <div class="tech-item">
              <n-tag type="success" size="large">
                <n-icon>
                  <LanguageOutline />
                </n-icon>
                i18n
              </n-tag>
              <small class="tech-desc"> Internacionalización y soporte multilenguaje.</small>
            </div>
            <div class="tech-item">
              <n-tag type="success" size="large">
                <n-icon>
                  <Bootstrap />
                </n-icon>
                Bootstrap 5
              </n-tag>
              <small class="tech-desc"> Framework de diseño adaptado a la web moderna.</small>
            </div>
            <div class="tech-item">
              <n-tag type="success" size="large">
                <n-icon>
                  <LogoJavascript />
                </n-icon>
                JavaScript
              </n-tag>
              <small class="tech-desc"> Interactividad y comportamiento dinámico.</small>
            </div>
          </n-space>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import {
  LogoHtml5,
  LogoCss3,
  LogoJavascript,
  LogoVue,
  FlashOutline,
  GitBranchOutline,
  LanguageOutline,
  LayersOutline,
  AppsOutline,
  CodeSlashOutline
} from '@vicons/ionicons5';

import { Bootstrap } from '@vicons/fa';
import { NIcon, NCard, NTag, NAvatar } from 'naive-ui';

const developers = [
  {
    name: 'Maria José Villalba',
    role: 'Desarrolladora / Developer',
    email: '2220191004@estudiantesunibague.edu.co',
    phone: '+57 3012879345',
    avatar: 'https://media.licdn.com/dms/image/v2/C5603AQFav5YZ6d5ByA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1657298313863?e=2147483647&v=beta&t=9r1HoxKTDBD6jaKSCFEQ6ArptlCTjgwx5mmN10KEgMM'
  },
  {
    name: 'Maria Alejandra Reyes',
    role: 'Desarrolladora / Developer',
    email: '2220191023@estudianteunibague.edu.co',
    phone: '+57 3107500760',
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQHuzXOJqS998w/profile-displayphoto-shrink_200_200/B4EZPk.hYjHkAY-/0/1734713415693?e=2147483647&v=beta&t=HcEO1MOCyQh7piqEDRQGXHQ7pizDn5s2sgK4fL8VZkk'
  },
  {
    name: 'Gustavo Martinez',
    role: 'Coordinador / Tutor',
    email: 'gustavo.martinez@unibague.edu.co',
    phone: '+57 310 4764257',
    avatar: 'https://profesores.unibague.edu.co/images/2019/03/12/gustavo.jpg'
  }
]
</script>

<style scoped>
h2,
h5 {
  font-family: 'Arial';
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.tech-tag {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  font-size: 1rem;
}

.tech-tag .tech-desc {
  font-size: 0.8rem;
  color: #666;
  margin-top: 4px;
}
</style>