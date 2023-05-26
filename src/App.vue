<template>
  <div v-no-double-click id="app">
      <nav-component></nav-component>
     
      <router-view/>
      
      <app-error v-if="error" :error="error"></app-error>
  </div>
  
</template>

<script>

import NavComponent from '@/components/NavComponent'
import AppError from '@/components/ErrorComponent'
import { mapState } from 'vuex';

export default {
  name: "App",
  components: {
      NavComponent,
      AppError
  },
  computed: {
    ...mapState([
      'error'
    ])
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
