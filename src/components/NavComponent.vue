<template>
    <header>
        <router-link v-if="getTableID" to="/login" id="table-id">Mesa: {{ getTableID }}</router-link>
         <nav class="container navigation">
            <router-link to="/" alt="ir al inicio">
              <font-awesome-icon icon="fa-solid fa-house" />
              <span class="navigation-text">Inicio</span>
            </router-link>
            <router-link alt="ver la carta" to="/menu">
              <font-awesome-icon icon="fa-solid fa-utensils" />
              <span class="navigation-text">Carta</span>
            </router-link>
            <router-link name="carrito" alt="ver el carrito" to="/cart">
              <font-awesome-icon icon="fa-solid fa-basket-shopping" />
              <span class="navigation-text">Carrito</span>
              <small>{{ productsInCart }}</small>
            </router-link>
        </nav>
    </header>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'NavComponent',
    data(){
      return {
        productsInCart: undefined
      }
    },
    computed: {
      ...mapGetters([
        'getNumberOfProductsInCart',
        'getTableID'
      ])
    }, 
    watch: {
        getNumberOfProductsInCart(newVal){
          this.productsInCart = newVal

        }
    }
}

</script>

<style lang="scss">
header {
  box-shadow: 1px 6px 5px -5px rgba(44, 62, 80, 0.5411764706)
}
.navigation{
  flex-direction: row;
  justify-content: space-around;
}

nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: large;
    text-decoration: none;
    display: flex;
    flex-direction: column;

    &.router-link-exact-active {
      color: #42b983;
    }
    .navigation-text{
      font-size: small;
      margin-bottom: 5px;
    }
  }
  small{
    position: absolute;
    top: -10px;
    left: 25px;
  }
  
}
#table-id{
    font-size: smaller;
    text-decoration: none;
  }
  
@media screen and (max-width: 767px) and (orientation: portrait) {
    /* Estilos para dispositivos móviles en orientación vertical */
    header{
      display: flex;
      justify-content: center;
      width: 100%;
      box-shadow: none;
    }
    .container {
      max-width: 100%;
    }
    .navigation{
       box-sizing: border-box;
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 15vh;
        padding: 20px;
        background-color:white;
        z-index: 10;
        box-shadow: 0px -2px 2px #2c3e508a;
       
      nav{
        display: flex;
        justify-content: space-evenly;
      }
        
    }
  
    .products {
      margin-bottom: calc(100vh - 90vh);
    }
  }

</style>