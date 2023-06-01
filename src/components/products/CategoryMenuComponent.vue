<template>

<div class="container container-cat">
    
   <div v-if="fetchingCategories" class="loader">
        <svg 
            class="ring"
            viewBox="25 25 50 50"
            stroke-width="5"
        >
        <circle cx="50" cy="50" r="20" />
        </svg>
        <span>Cargando...</span>
    </div>
  
   
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

<style lang="scss" scoped>

.container-cat{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 30vh;
    
}
 a{
    margin: 30px;
    transform: scale(1.25);
}
.loader {
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.ring {
  --uib-size: 80px;
  --uib-speed: 2s;
  --uib-color: #42B983;
  
  height: var(--uib-size);
  width: var(--uib-size);
  vertical-align: middle;
  transform-origin: center;
  animation: rotate var(--uib-speed) linear infinite;
}

.ring circle {
  fill: none;
  stroke: var(--uib-color);
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes stretch {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -124px;
  }
}
</style>