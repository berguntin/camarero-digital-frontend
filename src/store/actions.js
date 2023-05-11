import * as types from './mutations-types'
import API from '@/api/index.js'

export default {

    //Cargar las categorias
    fetchCategories({ commit }){
        commit(types.FETCH_CATEGORIES_REQUEST)
        
        API.getCategories()
        .then( categories => commit(types.FETCH_CATEGORIES_SUCCESS, { categories }))
        .catch( error => commit(types.FETCH_CATEGORIES_FAILURE, { error }))
    },
    //Cargar los productos de una categoria
    fetchProducts({ commit }, { category } ){
        commit(types.FETCH_PRODUCTS_REQUEST)

        API.getProducts(category)
        .then(data => commit(types.FETCH_PRODUCTS_SUCCESS,  { data }))
        .catch( error => commit(types.FETCH_PRODUCTS_FAILURE, { error }))
    }
}
