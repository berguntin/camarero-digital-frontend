<template>

    <router-link :to="{name: 'products', 
                params:{ category : name}}" 
                class="category-btn">
                <span class='category-icon' v-if="name === 'Bebidas'">
                    <font-awesome-icon icon="fa-solid fa-champagne-glasses"/>
                    
                </span>
                <span class='category-icon' v-if="name === 'Entrantes'">
                    <font-awesome-icon icon="fa-solid fa-bowl-food" />
                </span>
                <span class='category-icon' v-if="name === 'Platos principales'">
                    <font-awesome-icon icon="fa-solid fa-burger" />
                </span>
                <span class='category-icon' v-if="name === 'Postres'">
                    <font-awesome-icon icon="fa-solid fa-ice-cream" />
                </span>          
                <span class='category-name'>{{ name }}</span> 
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
<style lang="scss" scoped>

    .category-btn{
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: column;

        .category-icon{
            font-size: xx-large;
            color: rgb(65, 177, 167);
        }
    }

</style>