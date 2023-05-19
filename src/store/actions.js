import * as types from './mutations-types'
import API from '@/api/index.js'

export default {

    /* //Guardar el tableID   
    initializeTableID({ commit }, tableID) {
        commit('SET_TABLE_ID', tableID)
    }, */
    //Pedir el token para realizar pedidos
    async askForToken({ commit }, tableid) {
        commit(types.FETCH_TOKEN_REQUEST)

        try {
            const { tableID: responseTableID, token } = await API.getToken(tableid); //desestructuramos tableID y token
            commit(types.FETCH_TOKEN_SUCCESS, { tableID: responseTableID, token });
        } catch (error) {
            console.error(error);
            commit(types.FETCH_TOKEN_FAILURE, { error: error.message });
        }
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
        const cart =  Object.values(state.productsInCart)
        const items = cart.map(product => ({
                                    productId: product.id,
                                    name: product.name,
                                    quantity: product.quantity,
                                    price: product.price
                                    }))
        let totalPrice = items.map(item => item.price * item.quantity).reduce((curr, accum) => curr+accum, 0)
        totalPrice = totalPrice.toFixed(2)
        
        //Creamos la Order tal y como espera la API
        const order = {
            table: state.tableID || 'TEST',
            status: 'sent',
            date: new Date().toISOString(),
            items,
            totalPrice,
            token: state.token
        };
        commit(types.SEND_ORDER_REQUEST,  { order } )

        API.postOrder(order)
            .then(response => commit(types.SEND_ORDER_SUCCESS, { response }))
            .catch(error => {
                console.error(error); // Muestra el error en la consola
                commit(types.SEND_ORDER_FAILURE, { error }) 
            })
}, 
    updateOrderStatus( { commit }, tableID) {
        commit(types.UPDATE_ORDERS_STATUS_REQUEST)

        API.getOrderStatus(tableID)
            .then(response => commit(types.UPDATE_ORDERS_STATUS_SUCCESS, { response }))
            .catch(error => commit(types.UPDATE_ORDERS_STATUS_FAILURE, { error }))
    }
}
