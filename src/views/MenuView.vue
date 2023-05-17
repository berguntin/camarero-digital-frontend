<template>
    <main class="container">
        <h2>Nuestra carta</h2>
        <div v-if="error">Ha ocurrido un error inesperado</div>
        <AppMenu></AppMenu>
    </main>
    
</template>

<script>
import AppMenu from '@/components/products/CategoryMenuComponent'
import { mapState } from 'vuex';

export default{
    name: 'MenuView',
    components: {
        AppMenu,
        
    },
    computed: {
        ...mapState([
            'error'
        ])
    },
    data() {
        return {
            showFilter: true
        }
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