<template>
    <section class="product-card">
        <article class="product-details">
            <h2 class="product-name">{{ product.name }}</h2>
            <div class="product-quantity-control">
                <button class="quantity-button" @click="substractQuantityFromCart( {product} )">-</button>
                <span class="product-quantity"> {{ product.quantity }}</span>
                <button class="quantity-button" @click="addQuantityFromCart( { product } )">+</button>
            </div>
            <p class="product-total-price">{{ (product.price * product.quantity).toFixed(2) }}&euro;</p>
        </article>
        <button class="delete-button" @click="deleteProductFromCart( { product } )">
          <font-awesome-icon class="product-icon" icon="fa-solid fa-trash"></font-awesome-icon>
        </button>
    </section>
</template>

<script>
import { mapActions } from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: 'ProductCartCard',
    components:{
      FontAwesomeIcon
    },
    props: {
        product: Object
    },
    methods: {
        ...mapActions([
            'deleteProductFromCart',
            'addQuantityFromCart',
            'substractQuantityFromCart'
        ])
    }
   
}

</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

$primary-color: #3498db; // Definimos un color primario para usar en el diseño.

.product-card {
  position: relative; // Agregado para posicionamiento absoluto de .delete-button
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 1em;
  border: 1px solid $primary-color;
  border-radius: 4px;
  background-color: #fff;
  max-width: 400px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.product-details {
  display: flex;
  align-items: center;
  padding: 2px auto;
  width: 95%;
.product-total-price{
  position: absolute;
  width: 10%;
  right: 20%;
  margin: 0px auto;
  padding: 2px;
  font-size: small;
  /* text-align: flex-end; */
  
  
}
  .product-name {
    margin: 0;
    margin-right: 0px auto;
    font-size: 0.75em;
    text-align: start;
    color: $primary-color;
    width: 50%;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }
}

.product-quantity-control {
  position: absolute;
  left: 58%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 .5vw 0px .5vw ;

  .quantity-button {
    margin-right: 0.1em;
    border: none;
    border-radius: 10%;
    width: 20px;
    height: 20px;
    background-color: white; 
    color: darken($primary-color, 20%);
    font-size: .8em;
    cursor: pointer;
/* 
    @media (min-width: 768px) {
      font-size: 1.2em;
    } */
  }
  .product-quantity {
    margin: 0 .2em 0 .2em;
  }

}
.delete-button {
  position: absolute;
  right: 1px; 
  top: 50%; 
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  color: #fc5b5b;
  cursor: pointer;
}


</style>