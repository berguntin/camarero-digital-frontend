<template>
    <main class="container">
        <h2>Nuestra carta</h2>
        <AppMenu></AppMenu>
       <router-view/>
    </main>
    
</template>

<script>
import AppMenu from '@/components/products/CategoryMenuComponent'
import { RouterView } from 'vue-router';

export default{
    name: 'MenuView',
    components: {
    AppMenu,
    RouterView
}
    
}

</script>
<style lang="scss" scoped>

   
</style>