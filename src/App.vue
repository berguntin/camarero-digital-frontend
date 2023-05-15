<template>
  <div id="app">
    
      <nav-component></nav-component>
      <router-view/>

  </div>
  
</template>

<script>

import NavComponent from '@/components/NavComponent'
import { mapActions } from 'vuex';

export default {
  name: "App",
  components: {
      NavComponent,
  },
  methods: {
    ...mapActions([
      'initializeTableID'
    ])
  },
  created() {
        //Guardamos la id de la mesa en el estado y en localStorage
        this.initializeTableID(this.$route.query.tableID)
    }  
  
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
