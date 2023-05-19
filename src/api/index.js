
import { API_URL } from "./settings";

export default {
    //Usaremos un token para autenticar el envio de pedidos
    getToken(tableID) {
        return fetch(API_URL + '/api/token', {
            method: 'POST',
            headers: {
                tableid: tableID
            }
        })
        .then(response => {
            if (!response.ok) {
                return response.text()
                        .then(text => {
                            throw new Error(text || 'HTTP error ' + response.status)
                            });
            }
            return response.json();
        });
    },    
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
    postOrder(order) {
        return fetch(API_URL + '/api/orders/save', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error HTTP: ' + response.status);
            }
            return response.json();
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
