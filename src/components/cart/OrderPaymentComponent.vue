<template>

    <section class="orders container">
        <h5>Pedidos realizados</h5>
        <table v-for="order in orders.toReversed()" :key="order.id">
            <thead>
            <tr>
                <td>
                    Hace {{ calculateTimeFromOrder(order.date) }} min
                </td>
                <td class="order-status">
                    {{ translateStatus(order.status) }}
                </td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in order.items" :key="index">
                    <td colspan="2">{{ item.name }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>Importe</td>
                    <td> {{ order.totalPrice }} &euro;</td>
                </tr>
                
            </tfoot>
        </table>
        <button class="submit-payment">Pagar {{ totalOrdersPrice() }} &euro;</button>
    </section>

</template>

<script>
import { mapActions, mapState } from 'vuex'


export default {
    name: 'AppOrder',
    data() {
        return {
            interval: null
        }
    },
    computed: {
        ...mapState([
            'tableID',
            'orders'
        ])
    },
    methods: {
        calculateTimeFromOrder(time){
            //Pasamos los valores a objeto DATE
            const currTime = new Date()
            const orderedTime = new Date(time)
            //Obtenemos diferencia en milisegundos y minutos
            const milisecondsDiff = currTime - orderedTime
            const minutesDiff = Math.floor(milisecondsDiff / (1000 * 60))

            return minutesDiff
        },
        ...mapActions([
            'updateOrderStatus'
        ]),
        startUpdatingOrders() {
            this.interval = setInterval( () => {
                this.updateOrderStatus(this.tableID)
                this.totalOrdersPrice()
            }, 30000) //Actualizamos el estado cada 30 segundos
        },
        translateStatus(status){
            switch (status){
                case 'recieved': return 'recibido'
                case 'preparing' : return 'en preparacion....'
                case 'served' : return 'servido!'
                case 'payed' : return 'pagado'
                default: status
            }
        },
        totalOrdersPrice(){
            if (this.orders !== []) {

                const prices = this.orders.map(order => order.totalPrice)                          
                const ordersTotalAmount = prices.reduce((curr, accum) => curr + accum, 0)

                return ordersTotalAmount.toFixed(2)
            }
            else return 0
            
        }
    },
    created() {
        this.startUpdatingOrders()
    },  
    beforeDestroy() {
        clearInterval(this.interval)
    }


}

</script>

<style lang="scss" scoped>

    .orders{
        margin-top: 30px;
        padding: 30px;
        max-width: 400px;
    }
    table {
        border-top: 1px solid black;
        margin-top: 3px;
        font-size: smaller;
        width: 100%;
        
        td{
            padding: 2px 5px 2px 5px;
        }
        tbody{
            font-size: 0.8em;
            text-align: center;
        }
        
    }
    .order-status{
            color: rgb(8, 194, 8);
            text-align: end;
        }
    .submit-payment{
        border: none;
        margin-top: 20px;
        padding: 10px;
        width: auto;
        border-radius: 2px;
        background-color: rgb(11, 139, 97);
        color: white;

        &:hover{
            background-color: transparent;
            color: rgb(11, 139, 97);
            border: 1px solid rgb(11, 139, 97);
        }
}

</style>