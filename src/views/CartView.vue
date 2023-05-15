<template>
    <div>
        <h2>Carrito</h2>
        <section v-if="(inCart <= 0)">
            <span>No hay productos en el carrito...</span>
           <router-link to="/menu">Agrega productos</router-link>
        </section>
        <app-cart :order="getProductsInCart" :total="getCartTotalAmount"></app-cart>
    </div>
    
    
</template>

<script>
import AppCart from '@/components/cart/CartComponent.vue'
import { RouterLink } from 'vue-router'
import { mapGetters } from 'vuex'

export default{
    name : 'CartView',
    components: {
    AppCart,
    RouterLink
},
    data(){
        return{
            inCart: 0
        }
        
    },
    computed: {
        ...mapGetters([
            'getProductsInCart',
            'getNumberOfProductsInCart',
            'getCartTotalAmount'
        ]),
       
    },
    created() {
       this.inCart = this.getNumberOfProductsInCart
    }
    
}
    
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}
 a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

</style>