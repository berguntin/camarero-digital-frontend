<template>
    <div v-if="error" class="error-message">
       <!--  <img src="@/assets/error.png" alt="error"> -->
        {{ translateError }}
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'AppError',
    
    computed: {
        ...mapState([
            'error'
        ]),
        translateError(){
            if(this.error.name === 'TypeError'){
                return 'Error de conexion'
            }
            else{
                return this.error
            }
        }
    }
}

</script>
<style lang="scss" scoped>

    .error-message{
        width: 100%;
        height: 20px;
        background-color: #ee5348;
        color: white;
        padding: 5px;
        position: fixed;
        left: 0px;
        top: 0px;
        align-self: center;
        margin-bottom: 5px;
    }

</style>