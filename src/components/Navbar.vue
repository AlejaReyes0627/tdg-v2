<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand">
                <router-link to="/">
                    <img src="../../public/assets/images/unibague-4.0.png" width="200" height="40">
                </router-link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link to="/isw">
                                <span>{{ $t('isw_tittle') }}</span>
                            </router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <span>{{ $t('webDevelop_tittle') }}</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <span>{{ $t('softwareConfig_tittle') }}</span>
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
/* eslint-disable */
export default {
    name: 'nav',
    components: {
        SelectLang
    },
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

<style scoped>
@import 'bootstrap-icons/font/bootstrap-icons.css';
/*nav {
    background-color: #0F1F39;
    padding: 0;
    margin: 0;
}

.navItem.navbar-brand {
    color: #ffff;
    padding: 10px 20px;
    font-family: 'Corbel';
}

.navItem.navbar-brand:hover {
    color: #ffff;
    background-color: #14294b;
}

body {
    margin: 0;
    padding: 0;
}*/
</style>
