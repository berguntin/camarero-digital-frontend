<template>
  <main class="container">

    <h1>Bienvenid@ a la app</h1>
    <p>Para utilizar las funcionalidades de la misma, debes seleccionar una mesa escaneando el QR </p>
    <div class="qr-scaner">
      <video id="preview"></video>
    </div>


  </main>
    
</template>

<script>
import jsQR from 'jsqr';

export default {
  name: 'HomeView',
  data() {
    return{
     authenticating: false
    }  
  },
  methods: { 
    async doLogin(table){
      await this.$store.dispatch('askForToken', table);
      this.$router.push('/menu');
    },
    async goTo(qrCode){
      try {
        const url = new URL(qrCode);
        //nos aseguramos que el QR no nos dirija a sitios externos
        if(url.origin === window.location.origin){ 
          this.authenticating = true
          const table = url.searchParams.get('tableID')
          console.log('autenticado')
          await this.doLogin(table)
        } 
      } catch (error) {
        throw new Error(error)
      }
    },
    setupCamera() {
      let video = document.getElementById('preview');
      const vm = this; //apunta al contexto del componente
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
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
          let qrCode = jsQR(imageData.data, imageData.width, imageData.height);

          if (qrCode) {
            console.log('QR detectado!')
          // Detener la transmisión de la cámara
            video.srcObject.getTracks().forEach(track => track.stop());
            video.srcObject = null;
            video.remove(); //Libera el uso de la camara
            vm.goTo(qrCode.data);
            return;
          }
        }
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
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border-radius: 5px;
  overflow: hidden;

  #preview {
    width: 100%;
    height: 100%;
  }

}


</style>
