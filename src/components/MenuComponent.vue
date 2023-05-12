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
import { mapState, mapActions } from 'vuex'

export default{
    name: 'AppMenu',
    components: {
        CategoryButton
    },
    computed: {
        ...mapState([
            'categories',
            'fetchingData',
            'currentCategory'
        ])
    },
    methods: {
        ...mapActions([
            'fetchCategories'
        ])
     },
     created() {
         this.fetchCategories()
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