import { API_URL } from "./settings";


export default {
    getCategories() {
        return new Promise((resolve, reject) => {
          fetch(API_URL +'/api/products/categories')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        })
    },
    getProducts(category){
        return new Promise((resolve, reject) => {
            fetch(API_URL + '/api/products/'+category)
              .then(response => response.json())
              .then(data => resolve(data))
              .catch(error => reject(error));
          })
            
    },
    postOrder(){}
        
}
