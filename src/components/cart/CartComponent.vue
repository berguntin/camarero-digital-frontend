<template>
    <div class="container">
       
        <product-cart-card v-for="product in cart" :key="product.id" :product="product">
        
        </product-cart-card>
        <div class="total-amount">
            Total: {{ total.toFixed(2) }}&euro;
        </div>
        
        <button class="submit-order" @click="submitOrder">Realizar pedido</button>
        
        
    </div>
    
</template>

<script>
import ProductCartCard from '@/components/cart/ProductCartComponent'
import { mapActions } from 'vuex';

    export default {
        name: 'AppCart',
        components: {
            ProductCartCard
        }, 
        props: {
            cart: Array,
            total: Number
        },
        methods: {
            ...mapActions([
                'submitOrder'
            ])
        }
       
    }

</script>
<style lang="scss" scoped>

.total-amount{
    display: flex;
    justify-content: flex-end;

}
.submit-order{
    border: none;
    margin-top: 10px;
    padding: 10px;
    border-radius: 2px;
    background-color: rgb(11, 139, 97);
    color: white;

    &:hover{
        background-color: white;
        color: rgb(11, 139, 97);
        border: 1px solid rgb(11, 139, 97);
    }
}

</style>