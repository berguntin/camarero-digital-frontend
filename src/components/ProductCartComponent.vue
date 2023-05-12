<template>
    <div>
        <span>{{ product.name }}</span>  
        <span>Cantidad: {{ product.quantity }}</span>
        <button><font-awesome-icon class="product-icon" icon="fa-ligth fa-trash"/></button>
    </div>
    

</template>

<script>



export default {
    name: 'ProductCartCard',
    props: {
        product: Object
    },
   
}

</script>
<style>

</style>