<template>

<div class="container container-cat">
    
   
    <span v-if="fetchingCategories" class='loader'></span>
   
    <div v-else>
        <category-button
        v-for="(category, index) in getCategories" 
        :key="index"
        :name="category"
        >
        </category-button>
    </div>
    
</div>
</template>

<script>
import CategoryButton from './CategoryButtonComponent'
import { mapState, mapActions, mapGetters } from 'vuex'

export default{
    name: 'AppMenu',
    components: {
        CategoryButton
    },
    computed: {
        ...mapState([
            'fetchingCategories',
        ]),
        ...mapGetters([
            'getCategories'
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
    align-items: center;
    flex-direction: column;
    max-width: 200px;
    height: 100%;
    margin-top: 15px;
    margin-bottom: 30vh;
    
}
 a{
    margin: 30px;
    transform: scale(1.5);
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