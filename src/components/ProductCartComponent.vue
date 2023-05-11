<template>
    <div>
        {{ product.name }}
    </div>

</template>

<script>

export default {
    name: 'ProductCartCard',
    props: {
        product: Object
    }
}

</script>