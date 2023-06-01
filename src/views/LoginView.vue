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
     authenticating: false,
     location: null
    }  
  },
  methods: { 
    ...mapActions([
      'captureError',
      'clearError'
    ]),
    async doLogin(table) {
      this.authenticating = true;
      const {lat, long} = await this.storeGeoData();
     
      return new Promise((resolve, reject) => {
        
          this.$store.dispatch('askForToken', {tableid:table, location: {lat, long} })
            .then(()=> resolve())
            .catch ((error) => {
              this.captureError(error)
              reject(error)
            })
          });
    },
    async directLogin(tableID){
      await this.doLogin(tableID).then(
        this.$router.push('/menu')
      );
    },
    async goTo(qrCode) {
        try {
          this.clearError();
          const url = new URL(qrCode);
          // Nos aseguramos de que el QR no nos dirija a sitios externos
          if (url.origin === window.location.origin) {
            const table = url.searchParams.get('tableID');
            await this.doLogin(table).then(
              this.$router.push('/menu')
            );
            return true
          } 
          else {
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
        return false
    },
    stopCamera() {
      if (this.videoStream) {
        const tracks = this.videoStream.getVideoTracks();
        tracks.forEach(track => track.stop());
      }
      this.isCameraRunning = false; // Detener la ejecución de scanQR()
  },
  setupCamera() {
    const video = document.getElementById('preview');
    const vm = this;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
        .then(function(stream) {
          video.srcObject = stream;
          video.setAttribute("playsinline", true);
          video.play();
          vm.videoStream = stream; // Guardar referencia al stream
          vm.isCameraRunning = true; // Iniciar la ejecución de scanQR()
          vm.scanQR(); // Iniciar la detección del código QR
        });
    }
  },
  scanQR() {
      if (!this.isCameraRunning) {
        return; // Detener la ejecución de scanQR() si la cámara ya no está en uso
      }

      const video = document.getElementById('preview');
      const canvas = document.createElement("canvas");
      const canvasElement = canvas.getContext("2d");

      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;

        canvasElement.drawImage(video, 0, 0, canvas.width, canvas.height);
        let imageData = canvasElement.getImageData(0, 0, canvas.width, canvas.height);
        // Intenta leer QR
        let qrCode = jsQR(imageData.data, imageData.width, imageData.height);

        if (qrCode) {
          this.clearError();
          this.goTo(qrCode.data);
          return;
        }
      }
      // Sigue ejecutando hasta no encontrar QR si la cámara sigue en uso
      if (this.isCameraRunning) {
        requestAnimationFrame(() => this.scanQR());
      }
  },
  getGeoLocation() {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        const options = { enableHighAccuracy: true }
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
      })
    }
    else{
      let error = new Error('Localizacion no permitida')
      this.captureError(error)
    }
  },
  async storeGeoData() {
      try {
        const location = await this.getGeoLocation();
        const lat = location.coords.latitude;
        const long = location.coords.longitude;
        console.log('Localizacion guardada')
        return { lat, long };
        
      } catch (error) {
        this.captureError(error);
      }
    },
  },
  mounted() {
    this.setupCamera();
    this.storeGeoData();
  },
  beforeDestroy(){
    this.stopCamera();
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
