

export default {

    getProductsInCart: (state) => {
        return Object.values(state.productsInCart)
    },
    getNumberOfProductsInCart: (state) => {
        return Object.values(state.productsInCart).length
    },
    getCartTotalAmount : (state) => {
        return Object.values(state.productsInCart).reduce((total, current) =>{
            return total + (current.price * current.quantity);
        }, 0)     
    },
    getTableID: (state) => {
        return state.tableID
    }

}