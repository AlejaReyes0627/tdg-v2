<template>
        <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
            <a class="navbar-brand">
                <img src="../assets/images/unibague-4.0.png" width="200" height="40">
            </a>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="navItem navbar-brand">
                            Software Engineering
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="navItem navbar-brand" >
                            Web Development
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="navItem navbar-brand" >
                            SCM
                        </a>
                    </li>
                </ul>
                <span class="navbar-text">
                    <div class="row">
                        <div class="col" style="padding: 0px 0px 0px 0px;">
                            <a >
                                <!--<img src="../resources/icons/españa.ico" style="width: 90%;">-->
                            </a>

                        </div>
                        <div class="col" style="padding: 0px 0px 0px 0px;">
                            <a >
                                <!--<img src="../resources/icons/ingles.ico" style="width:90%">-->
                            </a>

                        </div>
                        <div class="col">
                            <a >
                                <img src="../assets/images/logo_acreditacion.png" width="200" height="50">
                            </a>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    </nav>
</template>

<style lang="css" scoped>
/*Todo el navbar*/
nav {
  background-color: #0F1F39;
  padding: 0; /* Asegúrate de que no haya padding adicional */
  margin: 0;
}

/*Cada item del navbar*/
.navItem.navbar-brand {
  color: #ffff;
  padding: 10px 20px; /* Ajusta el padding según sea necesario */
  font-family: 'Corbel';
}

/* Lo que pasará cuando le pasemos el mouse encima */
.navItem.navbar-brand:hover {
  color: #ffff;
  background-color: #14294b;
}

body {
    margin: 0;
    padding: 0;
}
</style>

<script>
/* eslint-disable */

export default {
    name: 'nav',
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
