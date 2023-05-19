<template>
    <main>
        <h2>Carrito</h2>
        <section v-if="(refreshCartcount < 1)">
            <span>No hay productos en el carrito...</span>
            <router-link class="router-link" to="/menu">¿Tienes hambre? Pide algo!</router-link>
        </section>
        <app-cart v-else  
            :cart="getProductsInCart" 
            :total="getCartTotalAmount"
        ></app-cart>
        <div v-if="pushingOrder" class="sending-order">Enviando pedido<span class="loading">.</span></div>
        <app-error v-if="error" :error="error"></app-error>
        <app-order v-if="thereAreOrders"></app-order>

    </main>
</template>

<script>
import AppCart from '@/components/cart/CartComponent.vue'
import AppOrder from '@/components/cart/OrderPaymentComponent.vue'
import AppError from '@/components/error.vue'

import { RouterLink } from 'vue-router'
import { mapGetters, mapState } from 'vuex'

export default{
    name : 'CartView',
    components: {
    AppCart,
    RouterLink,
    AppOrder,
    AppError
    },
    computed: {
        ...mapGetters([
            'getProductsInCart',
            'getNumberOfProductsInCart',
            'getCartTotalAmount',
            'getOrders'
        ]),
        ...mapState([
            'orders',
            'pushingOrder',
            'error'
        ]),
        refreshCartcount(){
            return this.getNumberOfProductsInCart
        },
        thereAreOrders(){
            return Array.isArray(this.getOrders) && this.getOrders.length > 0
        }
    },
   
    

    
}
    
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}
 .router-link {
    font-weight: bold;
    color: #2c3e50;
    width: auto;
    height: 3em;

    /* &:hover {
        background-color: #42b983;
        color: white;
    } */
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .sending-order{
    width: 100%;
    height: 50px;
    background-color: #42b983c2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .loading {
    overflow: hidden;
    display: inline-block;
    position: relative;
    width: 10px;
}

.loading::after {
    content: "...";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    animation: loading 1s steps(4, end) infinite;
}

@keyframes loading {
    0%, 80%, 100% {
        text-indent: -10px;
    }
    40% {
        text-indent: 0;
    }
}

  

</style>