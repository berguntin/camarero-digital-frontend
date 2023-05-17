
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
    postOrder(order){
        return new Promise((resolve, reject) => {
            fetch(API_URL + '/api/orders/save', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    },
    getOrderStatus(tableID){
        return new Promise((resolve, reject) => {
            fetch(API_URL + '/api/orders/' + tableID)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }
        
}
