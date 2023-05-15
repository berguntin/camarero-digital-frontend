import Vue from 'vue'
import * as types from './mutations-types'

export default{

    //Guardar el parametro TableId desde la ruta
    [types.SET_TABLE_ID](state, tableID) {
        state.tableID = tableID
        localStorage.setItem('tableID', tableID);
    },
    
    //Traer las categorias de la API
    [types.FETCH_CATEGORIES_REQUEST] (state) {
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_CATEGORIES_SUCCESS] (state, { categories }) {
        state.fetchingData = false
        state.error = null
        state.categories =  categories 
    },
    [types.FETCH_CATEGORIES_FAILURE] (state, { error }) {
        state.fetchingData = false
        state.error = error
    },

    //Traer los productos de la API
    [types.FETCH_PRODUCTS_REQUEST] (state) {
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_PRODUCTS_SUCCESS] (state, { products }) {
        state.fetchingData = false
        state.error = null
        state.products = products 
    },
    [types.FETCH_PRODUCTS_FAILURE] (state, { error }) {
        state.fetchingData = false
        state.error = error
    },

    //Agregar productos al carrito
    [types.ADD_TO_CART](state, { modifiedProduct }) {
        const cart = state.productsInCart
        if(cart[modifiedProduct.id]){
            const existingProduct = cart[modifiedProduct.id]
            const newQuantityProduct = {...existingProduct, quantity: existingProduct.quantity + modifiedProduct.quantity }
            Vue.set(state.productsInCart, modifiedProduct.id, newQuantityProduct)
        }
        else{
            Vue.set(state.productsInCart, modifiedProduct.id, modifiedProduct)
        }
        localStorage.setItem('cart', JSON.stringify(state.productsInCart))
      },      

    //Eliminar un producto del carrito
    [types.DELETE_FROM_CART] (state, { product }){
 
        Vue.delete(state.productsInCart, product.id)
       //Guardamos el objeto en localStorage para persististencia
       localStorage.setItem('cart', JSON.stringify(state.productsInCart))
    },
    
    //Agregar una unidad a un producto en el carrito
    [types.ADD_QUANTITY_FROM_CART] (state, { product }) {
        console.log('Aumentamos una unidad de ' + product.name)
      Vue.set(state.productsInCart, product.id, {...product, quantity: product.quantity + 1})
        //Guardamos el objeto en localStorage para persististencia
       localStorage.setItem('cart', JSON.stringify(state.productsInCart))
    },

    //Substraer una unidad de un producto en el carrito
    [types.SUBSTRACT_QUANTITY_FROM_CART] (state, { product }) {
        if(product.quantity > 1){
            Vue.set(state.productsInCart, product.id, {...product, quantity: product.quantity - 1})
        }
        else {
            Vue.delete(state.productsInCart, product.id)
        }
        //Guardamos el objeto en localStorage para persististencia
        localStorage.setItem('cart', JSON.stringify(state.productsInCart))        
    },

    //Enviar el pedido
    [types.SEND_ORDER_REQUEST] (state) {
        state.pushingData = true,
        state.error = null
    },
    [types.SEND_ORDER_SUCCESS] (state , { response }) {
        state.pushingData = false,
        state.productsInCart = {}
        localStorage.removeItem('cart')
        state.error = null
        Vue.set(state.orders, response.id, response)
    },
    [types.SEND_ORDER_FAILURE] (state, { error } ) {
        state.pushingData = false,
        state.error = error
    }
}