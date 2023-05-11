<template>
  
    <div class="product-card">
      <div class="product-header">
        <font-awesome-icon class="product-icon" icon="fa-solid fa-seedling" v-if="product.vegan" />
        <font-awesome-icon class="product-icon" icon="fa-solid fa-apple-whole" v-if="product.vegetarian && !product.vegan" />
        <div class="product-name">{{ product.name }}</div>
      </div>
      <div class="product-description">{{ product.description }}</div>
      <div class="product-price">{{ product.price }} &euro;</div>
      <div class="product-quantity">
        <label for="quantity">Cantidad:</label>
        <button @click="addQuantity">+</button>
        <input type="number" name="quantity" id="quantity" step="1" :value="this.selectedQuantity"/>
        <button @click="subtractQuantity">-</button>
      </div>
      <button @click="addToCart">Añadir</button>
       <small v-if="isOrdered">En tu pedido: {{ orderedQuantity }}</small>
    </div>

</template>

<script>
export default {
  name: 'AppProduct',
  props: {
    product: Object
  },
  data(){
    return {
      selectedQuantity: 1,
      isOrdered:false,
      orderedQuantity: 0
    }
  },
  methods: {
    addToCart() {
      const modifiedProduct = {...this.product, quantity: this.selectedQuantity}
      this.orderedQuantity= this.selectedQuantity
      this.$emit('add-to-cart', modifiedProduct)
    },
    addQuantity() {
      this.selectedQuantity++
    },
    subtractQuantity() {
      this.selectedQuantity > 1 ? this.selectedQuantity-- : this.selectedQuantity
    }
  },
  mounted() {
    this.getProducts(this.category)
  }
}
</script>


<style lang="scss" scoped>
 .product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  
  .product-header {
    display: flex;
    align-items: center;
    
    .product-icon {
      margin-right: 10px;
    }
    
    .product-name {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
  
  .product-description {
    margin-top: 10px;
    text-align: left;
  }
  
  .product-price {
    align-self: flex-end;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .product-quantity {
    align-self: flex-end;
    margin-top: auto;

  }
}


</style>