<template>
  <main class="container">

    <h3>Necesitamos verificar tu mesa</h3>
    <p>Para utilizar las funcionalidades de la app, debes seleccionar una mesa escaneando el QR </p>
    <div v-if="!authenticating" class="qr-scaner">
      <video id="preview"></video>
    </div>
    <div v-else>Verificando....</div>
    <button @click="directLogin(1)">Logearme como mesa 1 sin escanear QR</button>

  </main>
    
</template>

<script>
import jsQR from 'jsqr';
import { mapActions } from 'vuex';

export default {
  name: 'LoginView',
  data() {
    return{
     authenticating: false
    }  
  },
  methods: { 
    ...mapActions([
      'captureError',
      'clearError'
    ]),
    doLogin(table) {
      this.authenticating = true;
      return new Promise((resolve, reject) => {
          this.$store.dispatch('askForToken', table)
            .then(()=> { 
              this.authenticating = true;
              resolve()
            })
            .catch ((error) => reject(error))
          });
    },
    async directLogin(tableID){
      await this.doLogin(tableID);
      console.log('Resuelta')
      this.$router.push('/menu');
    },
    async goTo(qrCode) {
        try {
          this.clearError();
          const url = new URL(qrCode);
          // Nos aseguramos de que el QR no nos dirija a sitios externos
          if (url.origin === window.location.origin) {
            const table = url.searchParams.get('tableID');
            await this.doLogin(table);
            this.$router.push('/menu');
          } else {
            const error = Error('El QR no es válido, intenta de nuevo');
            this.captureError(error);
            this.setupCamera();
          }
        } 
        catch (err) {
          const error = new Error('Error autenticando');
          this.captureError(error);
          this.setupCamera();
        }
    },
    setupCamera() {
     
      let video = document.getElementById('preview');
      const vm = this; //apunta al contexto del componente
      //Pedimos permiso al usuario
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
          //creamos el capturador de imagen
          .then(function(stream) {
            video.srcObject = stream;
            video.setAttribute("playsinline", true); //iPhone
            video.play();
            requestAnimationFrame(tick);
          });
      }

      const canvas = document.createElement("canvas");
      const canvasElement = canvas.getContext("2d");

      const tick = () => {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvas.height = video.videoHeight;
          canvas.width = video.videoWidth;

          canvasElement.drawImage(video, 0, 0, canvas.width, canvas.height);
          let imageData = canvasElement.getImageData(0, 0, canvas.width, canvas.height);
          //intenta leer QR
          let qrCode = jsQR(imageData.data, imageData.width, imageData.height);

          if (qrCode) {
            vm.clearError();
            vm.goTo(qrCode.data);
            return;
          }
        }
        //Sigue ejecutando hasta no encontrar QR
        requestAnimationFrame(tick);
      }
    },
  },
  mounted() {
    this.setupCamera();
    
  }
}

</script>
<style lang="scss" scoped>

.qr-scaner {
  position: relative;
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  box-shadow: 0 0 10px rgba(40, 197, 9, 0.644);
  border-radius: 5px;
  overflow: hidden;

  #preview {
    width: 100%;
    height: 100%;
  }

}
button {
    border: none;
    margin-top: 10px;
    padding: 10px;
    border-radius: 2px;
    background-color: rgb(11, 139, 97);
    color: white;

    &:hover{
        background-color: white;
        color: rgb(11, 139, 97);
        border: 1px solid rgb(11, 139, 97);
    }
}



</style>
