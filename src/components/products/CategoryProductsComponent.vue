<template>
    <div class="container">
        
      <div class="products">
        <span v-if="fetchingData">Cargando productos...</span>
        <AppProduct v-for="product in products" 
            :key="product.id" 
            :product="product"
            >
        </AppProduct>
     </div>   
    </div>
    
 </template>
 <script>
 import AppProduct from './ProductMenuComponent'
 import { mapState, mapActions } from 'vuex';
 
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
        ...mapActions([
            'fetchProducts'
        ])
    },
    created(){
       this.fetchProducts(this.category)
    }
     
 }
 </script>
 
 <style lang="scss" scoped>
     
     .products{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 500px;
        margin: 2px auto;

     }

 </style>