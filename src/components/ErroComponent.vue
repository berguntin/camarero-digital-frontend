<template>
    <div class="error-message">
       <!--  <img src="@/assets/error.png" alt="error"> -->
        {{ translateError }}
    </div>
</template>
<script>
export default {
    name: 'AppError',
    props: {
        error: Error
    }, 
    computed: {
        translateError(){
            if(this.error.name === 'TypeError'){
                return 'Error de conexion'
            }
            else{
                return this.error.message
            }
        }
    }
}

</script>
<style lang="scss" scoped>

    .error-message{
        width: 100%;
        height: 20px;
        background-color: #F44336;
        color: white;
        padding: 5px;
        position: fixed;
        left: 0px;
        top: 0px;
        align-self: center;
        margin-bottom: 5px;
    }

</style>