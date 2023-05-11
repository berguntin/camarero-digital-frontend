<template>
    <div>
       
        <product-cart-card v-for="product in order" :key="product.id" :product="product">
        
        </product-cart-card>
        
    </div>
    
</template>

<script>
import ProductCartCard from '@/components/ProductCartComponent.vue'

    export default {
        name: 'AppCart',
        components: {
            ProductCartCard
        }, 
        props: {
            order: Array
            
        }
        
    }
       
    

</script>