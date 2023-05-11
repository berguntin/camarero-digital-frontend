export default {

    getProductsInCart: (state) => () => {
        return state.productsInCart
    },

    addProductToCart: (state) => (product) => {
        return Object.values(state.productsInCart).push(product)
    },

    deleteProductFromCart: (state) => (productId) => {
        return Object.values(state.productsInCart)
            .filter(product => product.id !== productId)
    }


}