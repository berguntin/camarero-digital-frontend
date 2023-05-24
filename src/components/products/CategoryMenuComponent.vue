<template>

<div class="container container-cat">
    
   
    <span v-if="fetchingCategories" class='loader'></span>
   
    <div v-else>
        <category-button
        v-for="(category, index) in categories" 
        :key="index"
        :name="category">
    </category-button>
    </div>
    
</div>
</template>

<script>
import CategoryButton from './CategoryButtonComponent'
import { mapState, mapActions } from 'vuex'

export default{
    name: 'AppMenu',
    components: {
        CategoryButton
    },
    computed: {
        ...mapState([
            'categories',
            'fetchingCategories',
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
    justify-content: flex-start;
    flex-direction: column;
    max-width: 200px;
    height: 90vh;
    margin-top: 25px;
}
 a{
    margin: 10px;
}

.loader {
      width: 48px;
      height: 48px;
      border:10px solid #FFF;
      border-radius: 50%;
      position: relative;
      transform:rotate(45deg);
      box-sizing: border-box;
    }
    .loader::before {
      content: "";
      position: absolute;
      box-sizing: border-box;
      inset:-10px;
      border-radius: 50%;
      border:10px solid rgb(65, 177, 167);
      animation: prixClipFix 2s infinite linear;
    }

    @keyframes prixClipFix {
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }
      
</style>