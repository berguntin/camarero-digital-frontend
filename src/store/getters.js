export default {

    getProductsInCart: (state) => {
        return Object.values(state.productsInCart)
    },

    addProductToCart: (state) => (product) => {
        return state.productsInCart.push(product)
    },

    deleteProductFromCart: (state) => (productId) => {
        return Object.values(state.productsInCart)
            .filter(product => product.id !== productId)
    }


}