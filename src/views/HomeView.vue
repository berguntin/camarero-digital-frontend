<template>
  <main class="container">

    <h1>Bienvenid@ a la app</h1>
    <p>Para utilizar las funcionalidades de la misma, debes seleccionar una mesa escaneando el QR </p>
    <div class="qr-scaner">
  <div class="corner top-left"></div>
  <div class="corner top-right"></div>
  <div class="corner bottom-left"></div>
  <div class="corner bottom-right"></div>
  <video id="preview"></video>
  </div>


  </main>
    
</template>

<script>
import jsQR from 'jsqr';


export default {
  name: 'HomeView',
  methods: { 
    async doLogin(table){
      await this.$store.dispatch('askForToken', table);
      this.$router.push('/menu');
    },
    async goTo(qrCode){
      try {
        const url = new URL(qrCode);
        if(url.origin === 'https://berguntin.github.io/'){
          const table = url.searchParams.get('tableID')
          await this.doLogin(table)
        } 
      } catch (error) {
        throw new Error(error)
      }
    },
    setupCamera() {
      let video = document.getElementById('preview');

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
          // Detener la transmisión de la cámara
            video.srcObject.getTracks().forEach(track => track.stop());
            video.srcObject = null;
            video.remove(); //Libera el uso de la camara
            this.goTo(qrCode.data);
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

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: #000;
    width: 2px;
    height: 50%;
  }

  &:before {
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
  }

  .corner {
    position: absolute;
    width: 25px;
    height: 25px;
    border: 2px solid #000;
  }

  .corner.top-left {
    border-bottom: none;
    border-right: none;
    top: -2px;
    left: -2px;
  }

  .corner.top-right {
    border-bottom: none;
    border-left: none;
    top: -2px;
    right: -2px;
  }

  .corner.bottom-left {
    border-top: none;
    border-right: none;
    bottom: -2px;
    left: -2px;
  }

  .corner.bottom-right {
    border-top: none;
    border-left: none;
    bottom: -2px;
    right: -2px;
  }
}


</style>
