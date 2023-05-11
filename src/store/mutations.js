import Vue from 'vue'
import * as types from './mutations-types'

export default{

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
        state.products = {...products}
    },

    [types.FETCH_PRODUCTS_FAILURE] (state, { error }) {
        state.fetchingData = false
        state.error = error
    },

    //Agregar productos al carrito
    [types.ADD_TO_CART] (state, { product }){
        Vue.set(state.productsInCart, product.id, product )
    }, 

    //Eliminar un producto del carrito
    [types.DELETE_FROM_CART] (state, { productId}){
        state.productsInCart = Object.values(state.productsInCart)
            .filter( product => product.id !== productId)
    },

    //Enviar el pedido

}