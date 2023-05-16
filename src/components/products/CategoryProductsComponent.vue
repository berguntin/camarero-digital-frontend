<template>
    <div class="container">
        <app-filter></app-filter>
      <div class="products">
        <span v-if="fetchingData">Cargando productos...</span>
        <AppProduct v-for="product in filter" 
            :key="product.id" 
            :product="product"
            >
        </AppProduct>
     </div>   
    </div>
    
 </template>
 <script>
 import AppProduct from './ProductMenuComponent'
 import AppFilter from '@/components/filter/FilterComponent.vue'
 import { mapState, mapActions } from 'vuex';
 
 export default {
     name: "AppCategories",
     components: {
        AppProduct,
        AppFilter
     },
     props:{
        category: String
    },
    computed: {
        ...mapState([
            'products', 
            'fetchingData',
            'allergensFilter'
        ]),
        
        filter(){
            return Object.values(this.products).filter(product => {
                return Object.values(this.allergensFilter).every(allergen => {
                    return !Object.values(product.allergens).some(item => {
                        return item.toLowerCase() === allergen.toLowerCase();
                        })
                    })
                });

        },
    },
     methods: {
        ...mapActions([
            'fetchProducts'
        ]),       
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