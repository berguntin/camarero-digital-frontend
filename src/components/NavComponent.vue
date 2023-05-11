<template>
    <header>
         <nav>
       
            <router-link to="/">Home</router-link> |
            <router-link to="/menu">Menu</router-link> |
            <router-link to="/cart">Carrito</router-link>
         
        </nav>
    </header>
</template>
<script>

export default {
    name: 'NavComponent'
}

</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>