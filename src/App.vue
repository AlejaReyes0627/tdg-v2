<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script>

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
