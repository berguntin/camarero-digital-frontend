/* import base_url from './settings' */

export default {
    getCategories() {
        return new Promise((resolve, reject) => {
          fetch('http://localhost:3000/api/products/categories')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        })
    },
    getProducts(category){
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/api/products/'+category)
              .then(response => response.json())
              .then(data => resolve(data))
              .catch(error => reject(error));
          })
            
    },
    postOrder(){}
        
}
