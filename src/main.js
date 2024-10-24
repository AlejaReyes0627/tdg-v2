import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router/router.js';

const app = createApp(App);
app.use(router); // Debe estar antes de montar la app
app.mount('#app');
