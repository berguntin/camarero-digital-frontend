<template>
    <main class="container">
        <h2>Nuestra carta</h2>
        <AppMenu></AppMenu>
       
    </main>
    
</template>

<script>
import AppMenu from '@/components/products/CategoryMenuComponent'

export default{
    name: 'MenuView',
    components: {
        AppMenu,
        
    }
    
}

</script>
<style lang="scss" scoped>

    .filter{
        display: flex;
        justify-content: center;
        align-items: center;
    }
   
</style>