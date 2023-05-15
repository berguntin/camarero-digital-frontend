
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

    //Agregar un producto al carrito
    addProductToCart({ commit },  modifiedProduct ){
        commit(types.ADD_TO_CART, modifiedProduct)
    },

    //Eliminar el producto del carrito
    deleteProductFromCart( { commit }, product){
        commit(types.DELETE_FROM_CART, product)
    },

    //Aumentar cantidad pedida en el carrito
    addQuantityFromCart ( { commit }, product){
        commit(types.ADD_QUANTITY_FROM_CART, product)
    },

    //Decrementar cantidad pedida en el carrito
    substractQuantityFromCart ( { commit }, product){
        commit(types.SUBSTRACT_QUANTITY_FROM_CART, product)
    },

    //Enviar el pedido a la API
    submitOrder( { commit, state }){
        commit(types.SEND_ORDER_REQUEST)
        
        //Creamos la Order tal y como espera la API
        const order = {
            table: state.tableID || 'TEST',
            status: 'sent',
            date: new Date().toISOString(),
            items: Object.values(state.productsInCart).map(product => ({
                productId: product.id,
                quantity: product.quantity,
            }))
        };

        API.postOrder(order)
            .then(response => commit(types.SEND_ORDER_SUCCESS, { response }))
            .catch(error => commit(types.SEND_ORDER_FAILURE, { error }))
    }
}
