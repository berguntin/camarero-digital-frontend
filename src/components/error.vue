<template>
    <div class="container error-message">
        <img src="@/assets/error.png" alt="error">
        Ha ocurrido un error inesperado!
    </div>
</template>
<script>
export default {
    name: 'AppError',
    props: {
        error:String
    }
}

</script>
<style lang="scss" scoped>

    .error-message{
        width: 80vw;
        height: 15vh;
        background-color: #F44336;
        color: white;
        border-radius: 5px;
        padding: 5px;
        margin-top: 10px;

        img {
            width: 10%;
            height: auto; 
        }
    }

</style>