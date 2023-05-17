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
        <div v-if="pushingOrder" class="sending-order">Enviando pedido....</div>
        <app-order v-if="areOrders"></app-order>

    </main>
</template>

<script>
import AppCart from '@/components/cart/CartComponent.vue'
import AppOrder from '@/components/cart/OrderPaymentComponent.vue'
import { RouterLink } from 'vue-router'
import { mapGetters, mapState } from 'vuex'

export default{
    name : 'CartView',
    components: {
    AppCart,
    RouterLink,
    AppOrder
    },
    computed: {
        ...mapGetters([
            'getProductsInCart',
            'getNumberOfProductsInCart',
            'getCartTotalAmount'
        ]),
        ...mapState([
            'orders',
            'pushingOrder'
        ]),
        refreshCartcount(){
            return this.getNumberOfProductsInCart
        },
        areOrders(){
            return Array.isArray(this.orders) && this.orders.length > 0
        }
    },
    methods: {
        ...mapGetters([
            'getOrders'
        ]),
        
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
  

</style>