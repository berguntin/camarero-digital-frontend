import Vue from 'vue'
import * as types from './mutations-types'


export default{

    [types.FETCH_TOKEN_REQUEST] (state) {
        state.fetchingData = true
        state.auth = false
        state.error = null
        state.tableID = null
    },
    [types.FETCH_TOKEN_SUCCESS] (state, { tableID }){
        state.fetchingData = false
        state.error = null
        state.auth = true
        state.tableID = tableID
        
    },
    [types.FETCH_TOKEN_FAILURE] (state, { error }) {
        state.fetchingData = false
        state.auth = false
        state.error = error
    },
    
    //Traer las categorias de la API
    [types.FETCH_CATEGORIES_REQUEST] (state) {
        state.fetchingData = true
        state.fetchingCategories = true
        state.error = null
    },
    [types.FETCH_CATEGORIES_SUCCESS] (state, { categories }) {
        state.fetchingData = false
        state.fetchingCategories = false
        state.error = null
        state.categories =  categories 
    },
    [types.FETCH_CATEGORIES_FAILURE] (state, { error }) {
        state.fetchingData = false
        state.fetchingCategories = false
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
        localStorage.setItem('cart_'+state.tableID, JSON.stringify(state.productsInCart))
      },      

    //Eliminar un producto del carrito
    [types.DELETE_FROM_CART] (state, { product }){
        Vue.delete(state.productsInCart, product.id)
       //Guardamos el objeto en localStorage para persististencia
       localStorage.setItem('cart_'+state.tableID, JSON.stringify(state.productsInCart))
    },
    
    //Agregar una unidad a un producto en el carrito
    [types.ADD_QUANTITY_FROM_CART] (state, { product }) {
      Vue.set(state.productsInCart, product.id, {...product, quantity: product.quantity + 1})
        //Guardamos el objeto en localStorage para persististencia
       localStorage.setItem('cart_'+state.tableID, JSON.stringify(state.productsInCart))
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
        localStorage.setItem('cart_'+state.tableID, JSON.stringify(state.productsInCart))        
    },

    //GESTION DEL FILTRO DE ALERGENOS
    [types.TOGGLE_ALLERGENS_FILTER] (state, allergen) {
        let filter = Object.values(state.allergensFilter) //obtenemos un objeto iterable
       
        filter.includes(allergen) ? filter = filter.filter(item => item != allergen) : filter.push(allergen)
        state.allergensFilter = filter //reasignamos el nuevo filtro al estado
        localStorage.setItem('filter_'+state.tableID, JSON.stringify(state.allergensFilter)) //guardamos en localstorage
    },
    [types.RESET_ALLERGENS_FILTER] (state) {
        state.allergensFilter = []
        localStorage.removeItem('filter_'+state.tableID)
    },

    [types.TOGGLE_DIET_TYPE] (state, diet) {
        diet === 'vegan' ? state.vegan = !state.vegan : state.vegetarian = !state.vegetarian
        localStorage.setItem('vegan_'+state.tableID, state.vegan)
        localStorage.setItem('vegetarian_'+state.tableID, state.vegetarian) 
    },

    //Enviar el pedido
    [types.SEND_ORDER_REQUEST] (state,  { order } ) {
        state.pushingData = true,
        state.pushingOrder = true
        state.error = null
        state.orders.push(order)
    },
    [types.SEND_ORDER_SUCCESS] (state) {
        state.pushingData = false,
        state.pushingOrder = false,
        state.productsInCart = {}
        localStorage.removeItem('cart_'+state.tableID)
        localStorage.setItem('orders_'+state.tableID, JSON.stringify(state.orders))
        state.error = null
        
    },
    [types.SEND_ORDER_FAILURE] (state, { error } ) {
        state.pushingData = false,
        state.pushingOrder=false,
        state.error = error
    },
    [types.UPDATE_ORDERS_STATUS_REQUEST] (state) {
        state.fetchingData = true
        state.error = null
    },
    [types.UPDATE_ORDERS_STATUS_SUCCESS] (state,  { response }) {
        state.fetchingData = false
        state.pushingOrder = false
        state.error = null
        state.orders = response
        localStorage.setItem('orders_'+state.tableID, JSON.stringify(state.orders))
    },

    [types.UPDATE_ORDERS_STATUS_FAILURE] (state, { error }){
        state.fetchingData = false
        state.error = error
    },
    //Reinicia todos los campos del state de la app
    [types.CLEAR_STATE] (state) {
        state.tableID = null,
        state.fetchingData = false,
        state.fetchingCategories = false,
        state.pushingData = false,
        state.pushingOrder = false,
        state.error = false
        state.orders = [],
        state.allergensFilter = [],
        state.vegan = null,
        state.vegetarian = null,
        state.productsInCart = []
    }
}