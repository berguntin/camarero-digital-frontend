<template>
  <div id="app">
    
      <nav-component></nav-component>
      <router-view/>

  </div>
  
</template>

<script>

import NavComponent from '@/components/NavComponent'
import { mapActions, mapGetters } from 'vuex';


export default {
  name: "App",
  components: {
      NavComponent,
  },
  computed: {
    ...mapGetters([
      'getTableID'
    ])
  },
  methods: {
    ...mapActions([
      'initializeTableID',
      'askForToken'
    ])
  },
  created() {
        //solicitamos el token para verificar que la mesa existe
        const tableID = this.$route.query.tableID || this.state.tableID
        this.askForToken(tableID)
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
  width: 100%;
  height: 100%;
}


</style>
