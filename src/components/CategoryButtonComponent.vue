<template>

    <router-link :to="{name: 'products', 
                params:{ category : name}}" 
                class="btn btn-primary btn-category">
              {{ name }}
    </router-link>

    
</template>
<script>
export default {
    name:'CategoryButton',
    props: {
        name: String
    }
}

</script>