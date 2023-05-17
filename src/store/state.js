const tableID = localStorage.getItem('tableID') || 'TEST'

export default {
    tableID: tableID,
    fetchingData: false,
    pushingData: false,
    pushingOrder: false,
    error: null,
    orders: JSON.parse(localStorage.getItem('orders_'+tableID)) || [],
    categories: [],
    products: {
        /**
         * id: String
         * name: String
         * price: Number
         * allergens: Array
         * quantity:Number
         * vegan:Boolean
         * vegetarian:Boolean
         * available:Boolean
         */
    },
    allergensFilter: JSON.parse(localStorage.getItem('filter_'+tableID)) || [],
    vegan: null,
    vegetarian: null,
    //Si tenemos el carrito en el localStorage, lo cargamos
    productsInCart: JSON.parse(localStorage.getItem('cart_'+tableID)) || [],
}