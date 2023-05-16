<template>

    <div class="orders container">
        <h5>Pedidos realizados</h5>
        <div v-for="order in orders" :key="order.id">
            {{ order.id }}
        </div>
        
    </div>

</template>

<script>

export default {
    name: 'AppOrder',
    props: {
        orders: Object
    },
    computed: {

    }

}


</script>

<style lang="scss" scoped>

    .orders{
        margin-top: 30px;
        background-color: #D2E9E9;
        padding: 30px;
    }

</style>