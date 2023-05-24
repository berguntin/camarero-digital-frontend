<template>
    <header>
         <nav>
            <router-link to="/" alt="ir al inicio">Home</router-link> |
            <router-link alt="ver el menú" to="/menu">Menu</router-link> |
            <router-link name="carrito" alt="ver el carrito" to="/cart">
              <font-awesome-icon icon="fa-solid fa-basket-shopping" />
              <small>{{ productsInCart }}</small>
            </router-link>
         <span class="table-id">Mesa: {{ getTableID }}</span>
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
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: large;
    text-decoration: none;
    position: relative;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  small{
    position: absolute;
    top: -10px;
    left: 25px;
  }
  .table-id{
    position: absolute;
    top: 1vh;
    right: 10vw;
    font-size: smaller;
  }
}

</style>