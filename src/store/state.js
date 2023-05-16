export default {
    tableID: 'TEST',
    fetchingData: false,
    pushingData: false,
    error: null,
    orders: JSON.parse(localStorage.getItem('orders')) || {},
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
    allergensFilter: JSON.parse(localStorage.getItem('filter')) || [],
    vegan: null,
    vegetarian: null,
    //Si tenemos el carrito en el localStorage, lo cargamos
    productsInCart: JSON.parse(localStorage.getItem('cart')) || {},
}