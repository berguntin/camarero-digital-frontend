<template>
    <header>
         <nav>
       
            <router-link to="/">Home</router-link> |
            <router-link to="/menu">Menu</router-link> |
            <router-link to="/cart">
              <font-awesome-icon icon="fa-solid fa-basket-shopping" />
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
        'getNumberOfProductsInCart'
      ])
    }, 
    watch: {
        getNumberOfProductsInCart(newVal, oldVal){
          this.productsInCart = newVal
          console.log(oldVal)
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
}

</style>