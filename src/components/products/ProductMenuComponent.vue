<template>
    
    <div class="product-card">
      <div class="product-header">
        <div class="product-name">{{ product.name }}</div>
          <div class="distintive-icon" v-if="product.category != 'Bebidas'">
            <span v-if="product.vegan">🥦</span>
            <span v-if="product.vegetarian && !product.vegan">🥕</span>
          </div>
      </div>
      <div class="product-description">{{ product.description }}</div>
      <div class="product-price">{{ product.price }} &euro;</div>
      <div class="product-controls">
        <div class="product-quantity">
          <label for="quantity">Cantidad:</label>
          <button @click="subtractQuantity">-</button>
          <input type="number" name="quantity" id="quantity" step="1" :value="this.selectedQuantity"/>
          <button @click="addQuantity">+</button>
        </div>
          <button :class="{ 'button-added': isAdded }" @click="addToCart">
            <span v-if="isAdded">Añadido!</span>
            <span v-else>Añadir</span>
          </button>
      </div>
      <div class="quantity-in-cart-info" v-if="isOrdered">
        <small>En tu pedido: {{ getQuantityInCart }}</small>
      </div> 
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppProduct',
  props: {
    product: Object,
  },
  data(){
    return {
      selectedQuantity: 1,
      isAdded: false
    }
  },
  computed:{
    ...mapGetters([
      'getProductsInCart',
      'getIsVegan',
      'getIsVegetarian'
    ]),
    productInCart() {
      return this.getProductsInCart.find(product => product.id === this.product.id);
    },
    getQuantityInCart() {
      return this.productInCart ? this.productInCart.quantity : 0;
    },
    isOrdered() {
      return !!this.productInCart;
    }
  },
  methods: {
    ...mapActions([
      'addProductToCart'
    ]),
    addToCart() {
      //Creamos un nuevo objeto con la cantidad seleccionada y lo guardamos
      const modifiedProduct = {...this.product, quantity: this.selectedQuantity};
      this.$store.dispatch('addProductToCart', { modifiedProduct });
      this.isAdded=true;
      this.resetQuantity(); //devolvemos la cantidad a 1 para mejorar UX
      //Devolvemos al estado inicial para cambiar clase css
      setTimeout(() => {
                      this.isAdded = false;
                      }, 2000);
    },
    addQuantity() {
      this.selectedQuantity++;
    },
    subtractQuantity() {
      if (this.selectedQuantity > 1) {
        this.selectedQuantity--;
      }
    },
    resetQuantity() {
      this.selectedQuantity = 1;
    },
    
  }
}
</script>


<style lang="scss" scoped>
 .product-card {
  display: flex;
  flex-direction: column;
  border-radius: 2%;
  border: none;
  box-shadow: 1px 3px #ccc;
  justify-content: space-between;
  margin-bottom: 15px;
  height: 90%;
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  position: relative;
  
  .product-header {
    display: flex;
    align-items: center;
    
    .distintive-icon {
      margin-right: 10px;
      position: absolute;
      top: 10px;
      right: 0px;
    }
    
    .product-name {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
  
  .product-description {
    margin-top: 10px;
    text-align: start;

    @media (max-width: 320px) {
      .product-description{
        font-size: 0.5em;
      }
    }
  }
  
  .product-price {
    align-self: flex-end;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .product-controls{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    .product-quantity {
      margin: 2px;
      width: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      label {
        margin-right: 10px;
        align-self: end;
      }
      input{
        width: 20%;
        text-align: center;
        border: none;
      }
      button{
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
        background-color: transparent;
      }
     
    }
    button{
        width: 25%;
        border-radius: 5%;
        border: none;
        padding: 5px;
        align-self: flex-end;
        margin-top: 5px;
        
      }
      .button-added {
            color: white;
            background-color: #0b8b61;
            animation: pulse 0.5s;
            transition: 1s ease-in-out;
            }
      @keyframes pulse {
        0% {
          transform: scale(1.1) ;
        }
        25% {
          transform: scale(1.15) ;
        }
        50% {
          transform: scale(1.25) ;
        }
      }
  }

}

</style>