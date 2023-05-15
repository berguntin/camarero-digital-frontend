export default {
    tableID: localStorage.getItem('tableID') || 'TEST',
    fetchingData: false,
    pushingData: false,
    error: null,
    orders: {},
    categories: [],
    products: {
        /**
         * id: String
         * name: String
         * price: 
         * allergens: 
         * quantity:
         * vegan:
         * vegetarian:
         * available:
         */
    },
    allergensFiter: {},
    //Si tenemos el carrito en el localStorage, lo cargamos
    productsInCart: JSON.parse(localStorage.getItem('cart')) || {},
}