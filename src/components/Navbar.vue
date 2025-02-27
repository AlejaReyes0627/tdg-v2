<template>
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../../public/assets/images/unibague-4.0.png" width="200" height="40">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/isw">
                {{ $t('isw_tittle') }}
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="webDevDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ $t('webDevelop_tittle') }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="webDevDropdown">
                <!-- Hard-code the options since translation might not be working properly -->
                <li>
                  <router-link class="dropdown-item" to="/opcion1">Opción 1</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/opcion2">Opción 2</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/opcion3">Opción 3</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                {{ $t('softwareConfig_tittle') }}
              </a>
            </li>
          </ul>
          <form class="d-flex justify-content-around">
            <SelectLang />
          </form>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import SelectLang from './SelectLang.vue';
  import { useI18n } from 'vue-i18n';
  /* eslint-disable */
  export default {
    name: 'NavBar',
    components: {
      SelectLang
    },
    setup() {
      const { t } = useI18n();
      
      return {
        // Return the function instead of trying to evaluate it immediately
        t
      };
    }
  };
  </script>
  
  <style scoped>
  @import 'bootstrap-icons/font/bootstrap-icons.css';
  
  nav {
    background-color: #0F1F39;
    padding: 0;
    margin: 0;
  }
  
  .nav-link, .dropdown-item {
    color: white;
    text-decoration: none;
  }
  
  .nav-link:hover, .dropdown-item:hover {
    color: #cccccc;
  }
  
  .navbar-brand {
    color: #ffff;
    padding: 10px 20px;
    font-family: 'Corbel';
  }
  
  .navbar-brand:hover {
    color: #ffff;
    background-color: #14294b;
  }
  
  /* Ensure dropdown styling works correctly */
  .dropdown-menu {
    background-color: #0F1F39;
    border: 1px solid #14294b;
  }
  
  .dropdown-item {
    color: white;
  }
  
  .dropdown-item:hover, .dropdown-item:focus {
    background-color: #14294b;
    color: white;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  </style>