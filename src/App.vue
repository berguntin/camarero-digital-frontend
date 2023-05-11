<template>
  <div id="app">
    
      <nav-component></nav-component>
      <router-view/>

  </div>
  
</template>

<script>

import NavComponent from '@/components/NavComponent.vue'


export default {
  name: "App",
  components: {
      NavComponent,
  },
  data(){
    return {
        
    }
  }, 
  
}

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
