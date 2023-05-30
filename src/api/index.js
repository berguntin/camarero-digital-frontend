import { API_URL } from "./settings";


export default {

    //Usaremos un token para autenticar el envio de pedidos
    getToken(tableID, lat, long) {
        console.log(lat, long)
        return fetch(API_URL + '/api/token', {
            method: 'POST',
            headers: {
                tableid: tableID
            },
            body: JSON.stringify({
                lat,
                long
              }),
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
            .catch(error => {
                console.log(error)

                reject(error)
            });
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
    //Utilizamos el token para asegurar el envio de pedidos
    postOrder(token, order) {
        
        return fetch(API_URL + '/api/orders/save', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(order)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se ha validado el pedido');
                
            }
            return response.json();
        })
    },
    //Utilizamos el token para asegurar la peticion del estado del pedido
    getOrderStatus(tableID){
        return new Promise((resolve, reject) => {
            fetch(API_URL + '/api/orders/' + tableID)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }       
}
