
function getGeoLocation() {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        const options = { enableHighAccuracy: true }
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
      })
    }
    else{
      throw new Error('Localizacion no permitida')
      
    }
  }
  async function storeGeoData() {
      try {
        const location = await getGeoLocation();
        const lat = location.coords.latitude;
        const long = location.coords.longitude;
        return { lat, long };
        
      } catch (error) {
        console.error(error)
      }
    }
  
    module.exports = {
        getGeoLocation, storeGeoData
    }