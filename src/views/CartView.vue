<template>
    <main>
        <h2>Carrito</h2>
        <section v-if="(refreshCartcount < 1)">
            <span>No hay productos en el carrito...</span>
            <router-link to="/menu">Agrega productos</router-link>
        </section>
        <div v-else>
            <app-cart  
                :cart="getProductsInCart" 
                :total="getCartTotalAmount"
            >
            </app-cart>
        </div>
        <div v-if="getOrders">
            <app-orders :orders="getOrders()">

            </app-orders>
        </div>
    </main>
</template>

<script>
import AppCart from '@/components/cart/CartComponent.vue'
import AppOrders from '@/components/cart/OrderPaymentComponent.vue'
import { RouterLink } from 'vue-router'
import { mapGetters, mapState } from 'vuex'

export default{
    name : 'CartView',
    components: {
    AppCart,
    RouterLink,
    AppOrders
    },
    computed: {
        ...mapGetters([
            'getProductsInCart',
            'getNumberOfProductsInCart',
            'getCartTotalAmount'
        ]),
        ...mapState([
            'orders'
        ]),
        refreshCartcount(){
            return this.getNumberOfProductsInCart
        },
    },
    methods: {
        ...mapGetters([
            'getOrders'
        ])
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