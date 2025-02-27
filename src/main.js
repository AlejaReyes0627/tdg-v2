import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import router from './router/router.js';
import i18n from './i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// En main.js o App.vue
import 'bootstrap-icons/font/bootstrap-icons.css';

// Importa los iconos que necesites
import { faGlobe, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import icons from the free regular icons bundle

// Agrega iconos a la librería
library.add(faGlobe, faUser, faHome, faHeart, faGithub);


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router); 
app.use(i18n);
app.mount('#app');
