import base_url from './settings'

export default {
    
    getCategories(){
        fetch(this.base_url +"products/categories")
        .then( res => res.json())
    },
    getProducts(category){
        fetch(base_url +'products/' + category)
            .then(res => res.json())
    
            
    },
    createOrder(){}
        
}
