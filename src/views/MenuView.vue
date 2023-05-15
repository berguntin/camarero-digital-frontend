<template>
    <div class="container">
        <AppMenu></AppMenu>
    </div>
    
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