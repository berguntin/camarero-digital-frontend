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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  margin-bottom: 1em;
  border: 1px solid $primary-color;
  border-radius: 4px;
  background-color: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.product-details {
  display: flex; // Cambiamos la dirección del flex para que todo salga en una línea.
  align-items: center;
  padding: 2px auto;
.product-total-price{
  margin: 0px auto;
  padding: 5px;
  font-size: small;
  text-align: center;
  border: 1px solid black;
  
}
  .product-name {
    margin: 0;
    margin-right: 0px auto;
    font-size: 0.75em;
    text-align: start;
    color: $primary-color;
    width: 120px;

  }
}

.product-quantity-control {
  display: flex;
  align-items: center;

  .quantity-button {
    margin-right: 0.5em;
    border: none;
    border-radius: 10%;
    width: 20px;
    height: 20px;
    background-color: lighten($primary-color, 30%); // Usamos una versión más clara del color primario para el fondo del botón.
    color: darken($primary-color, 20%); // Usamos una versión más oscura del color primario para el texto del botón.
    font-size: .8em;
    cursor: pointer;

    @media (min-width: 768px) {
      font-size: 1.2em;
    }
  }

  .product-quantity {
    margin-right: 0.5em;
  }

}

.delete-button {
  border: none;
  background-color: transparent;
  color: #ff0000;
  cursor: pointer;
}


</style>