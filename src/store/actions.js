import * as types from './mutations-types'
import API from '@/api'

export default {

    //Cargar las categorias
    fetchCategories({ commit }){
        commit(types.FETCH_CATEGORIES_REQUEST)
        API.getCategories('Bebidas')
        .then(data => commit(types.FETCH_CATEGORIES_SUCCESS, data))
        .catch( error => commit(types.FETCH_CATEGORIES_FAILURE, { error }))
    },
    //Cargar los productos de una categoria
    fetchProducts({ commit }){
        commit(types.FETCH_PRODUCTS_REQUEST)
        API.getProducts()
        .then(data => commit(types.FETCH_PRODUCTS_SUCCESS, data.json()))
        .catch( error => commit(types.FETCH_PRODUCTS_FAILURE, { error }))
    }

}
