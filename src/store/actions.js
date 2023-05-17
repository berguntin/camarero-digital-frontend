import * as types from './mutations-types'
import API from '@/api/index.js'

export default {

    //Guardar el tableID   
    initializeTableID({ commit }, tableID) {
        commit('SET_TABLE_ID', tableID)
    },
 
    //Cargar las categorias
    fetchCategories({ commit }){
        commit(types.FETCH_CATEGORIES_REQUEST)
        
        API.getCategories()
        .then( categories => commit(types.FETCH_CATEGORIES_SUCCESS, { categories }))
        .catch( error => commit(types.FETCH_CATEGORIES_FAILURE, { error }))
    },

    //Cargar los productos de una categoria
    fetchProducts({ commit },   category   ){
        commit(types.FETCH_PRODUCTS_REQUEST)

        API.getProducts(category)
        .then(products => commit(types.FETCH_PRODUCTS_SUCCESS,  { products }))
        .catch( error => commit(types.FETCH_PRODUCTS_FAILURE, { error }))
    },

    /**GESTION DEL CARRITO */
    addProductToCart({ commit },  modifiedProduct ){
        commit(types.ADD_TO_CART, modifiedProduct)
    },
    deleteProductFromCart( { commit }, product){
        commit(types.DELETE_FROM_CART, product)
    },
    addQuantityFromCart ( { commit }, product){
        commit(types.ADD_QUANTITY_FROM_CART, product)
    },
    substractQuantityFromCart ( { commit }, product){
        commit(types.SUBSTRACT_QUANTITY_FROM_CART, product)
    },

    /** GESTION DEL FILTRO DE ALERGENOS */
    toggleAllergensFilter( { commit }, item) {
       commit(types.TOGGLE_ALLERGENS_FILTER, item)
    },
    resetAllergensFilter( { commit }){
        commit(types.RESET_ALLERGENS_FILTER)
    },
    toggleDietType({ commit }, diet){
        commit(types.TOGGLE_DIET_TYPE, diet)
    },

    /**GESTION DE PEDIDOS A LA API */
    submitOrder( { commit, state }){
        
        //Creamos la Order tal y como espera la API
        const order = {
            table: state.tableID || 'TEST',
            status: 'sent',
            date: new Date().toISOString(),
            items: Object.values(state.productsInCart).map(product => ({
                productId: product.id,
                name: product.name,
                quantity: product.quantity,
            }))
        };
        commit(types.SEND_ORDER_REQUEST, { order })

        API.postOrder(order)
            .then(response => commit(types.SEND_ORDER_SUCCESS, { response }))
            .catch(error => commit(types.SEND_ORDER_FAILURE, { error }))
    }, 
    updateOrderStatus( { commit }, tableID) {
        commit(types.UPDATE_ORDERS_STATUS_REQUEST)

        API.getOrderStatus(tableID)
            .then(response => commit(types.UPDATE_ORDERS_STATUS_SUCCESS, { response }))
            .catch(error => commit(types.UPDATE_ORDERS_STATUS_FAILURE, { error }))
    }
}
