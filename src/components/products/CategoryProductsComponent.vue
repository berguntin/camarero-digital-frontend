<template>
    <div class="container">
        <app-filter></app-filter>
      <div class="products">
        <AppProduct v-for="product in filter" 
            :key="product.id" 
            :product="product"
            >
        </AppProduct>
     </div>
    
    </div>
    
 </template>
 <script>
 import AppProduct from './ProductMenuComponent';
 import AppFilter from '@/components/filter/FilterComponent.vue';
 import { mapState, mapActions, mapGetters } from 'vuex';
 
 export default {
     name: "AppCategories",
     components: {
        AppProduct,
        AppFilter,     
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
        ...mapGetters([
            'getProducts',
            'getAllergensFilter',
            'getIsVegan',
            'getIsVegetarian',
            'getCategories'
        ]),
        
        filter(){
            const whitoutAllergens =  this.getProducts.filter(product => {
                return this.getAllergensFilter.every(allergen => !product.allergens.some(item => item.toLowerCase() === allergen.toLowerCase()))
                });
            const vegan = whitoutAllergens.filter(product => product.vegan);
            const vegetarian = whitoutAllergens.filter(product => product.vegetarian); 
            
            return this.getIsVegan ? vegan
                    : this.getIsVegetarian ? vegetarian
                    : whitoutAllergens;
           
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
        margin-bottom: 20vh;

     }
     .categories-nav{
        display: flex;
        margin-bottom: 0px;
        
        .category-name{
            display: none;
        }
     }
     

 </style>