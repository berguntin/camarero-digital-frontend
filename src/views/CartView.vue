<template>
    <div>
        <h2>Carrito</h2>
        <app-cart :order="orderedProducts"></app-cart>
    </div>
    
    
</template>

<script>
import AppCart from '@/components/CartComponent.vue'


export default{
    name : 'CartView',
    components: {
        AppCart
    },
    data() {
        return {
            orderedProducts: [{id: 1, name:'Cola-Cola'}, {id:2, name:'Fanta naranja'}]
        }
    },
    methods: {
        addToCart(event){
            const product = event.params
            this.orderedProducts.push(product)
        }
    }
}
</script>

<style lang="scss" scoped>


</style>