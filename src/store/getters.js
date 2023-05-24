

export default {

    getProductsInCart: (state) => {
        return Object.values(state.productsInCart);
    },
    getNumberOfProductsInCart: (state) => {
        return Object.values(state.productsInCart).length;
    },
    getCartTotalAmount : (state) => {
        return Object.values(state.productsInCart).reduce((total, current) =>{
            return total + (current.price * current.quantity)
        }, 0);     
    },
    getTableID: (state) => {
        return state.tableID;
    },
    getAllergensFilter: (state) => {
        return Object.values(state.allergensFilter);
    },
    getIsVegan: (state) => {
        return state.vegan;
    },
    getIsVetetarian: (state) => {
        return state.vegetarian;
    },
    getOrders: (state) => {
        
        if(Object.values(state.orders) !== []){
            return Object.values(state.orders);
        }
        else return [];
    }
}