<template>

<div class="container container-cat">
    <category-button 
        v-for="(category, index) in categories" 
        :key="index"
        :name="category">
    </category-button>
</div>
</template>

<script>
import CategoryButton from './CategoryButtonComponent.vue'

export default{
    name: 'AppMenu',
    components: {
        CategoryButton
    },
    data(){ 
        return {
            categories: [],
            }
    },
    methods: {
         getCategories() {
             fetch(process.env.VUE_APP_API_BASE_URL +"products/categories")
                 .then( res => res.json())
                 .then(data => this.categories = data)
         }
     },
     mounted() {
         this.getCategories()
         
     }
}

</script>

<style lang="scss">

.container-cat{
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 200px;
    height: 90vh;
    
}
 a{
    margin: 10px;
}

</style>