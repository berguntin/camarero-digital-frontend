<template>
    <div class="products">
        <span v-if="fetchingData">Cargando productos...</span>
        <AppProduct v-for="product in products" 
            :key="product.id" 
            :product="product"
            >
        </AppProduct>
    </div>
    
 </template>
 <script>
 import AppProduct from './ProductMenuComponent.vue'
 import { mapState } from 'vuex';
 
 export default {
     name: "AppCategories",
     props:{
        category: String
    },
    computed: {
        ...mapState([
            'products', 
            'fetchingData'
        ])
    },
     components: {   
        AppProduct
    },
     data() {
         return{}

    },
     methods: {
        
    },
    created(){
       
    }
     
 }
 </script>
 
 <style lang="scss" scoped>
     
     .container-cat{
         display: flex;
         flex-direction: column;
         justify-content: center;
         padding: 10%;
     }
     .btn-category {
         margin-top: 1rem;
     }

 </style>