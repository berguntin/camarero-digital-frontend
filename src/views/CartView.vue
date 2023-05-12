<template>
    <div>
        <h2>Carrito</h2>
        <span>No hay productos en el carrito...</span>
        <app-cart :order="getProductsInCart"></app-cart>
    </div>
    
    
</template>

<script>
import AppCart from '@/components/CartComponent.vue'
import { mapGetters } from 'vuex'

export default{
    name : 'CartView',
    components: {
        AppCart
    },
    computed: {
        ...mapGetters([
            'getProductsInCart'
        ]),
        /* calculateTotal(){
           //Desarrollar
            }
        } */
    },
}
    
</script>

<style lang="scss" scoped>


</style>