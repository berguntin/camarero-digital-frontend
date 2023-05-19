<template>

    <section class="orders container">
        <h5>Pedidos realizados</h5>
        <table v-for="order in this.getOrders().toReversed()" :key="order.id">
            <thead>
            <tr>
                <td v-bind:style="{ color: calculateTimeFromOrder(order.date) < 10 ? 'green' : calculateTimeFromOrder(order.date) < 20 ? 'orange' : 'red' }">
                    Hace {{ calculateTimeFromOrder(order.date) }} min
                </td>
                <td class="order-status" v-bind:style="{ color: order.status === 'received' ? 'green' : order.status ==='preparing' ? 'orange' : 'black'}">
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
                    <td>{{ order.totalPrice }} &euro;</td>
                </tr>
                
            </tfoot>
        </table>
        <button class="submit-payment">Pagar {{ totalOrdersPrice() }} &euro;</button>
    </section>

</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'


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
        ...mapGetters([
            'getOrders'
        ]),
        startUpdatingOrders() {
            this.interval = setInterval( () => {
                this.updateOrderStatus(this.tableID)
            }, 30000) //Actualizamos el estado cada 30 segundos
        },
        translateStatus(status){
            switch (status){
                case 'sent': return 'enviado'
                case 'received': return 'recibido'
                case 'preparing' : return 'en preparacion....'
                case 'served' : return 'servido!'
                case 'payed' : return 'pagado'
                default: status
            }
        },
        totalOrdersPrice(){
            if (this.getOrders() !== []) {
                const prices = this.getOrders().map(order => order.totalPrice)                          
                const ordersTotalAmount = prices.reduce((curr, accum) => curr + accum, 0)
                const formatedResult = ordersTotalAmount.toFixed(2)
                return Number.isNaN(formatedResult) ? 'Calculando...' : formatedResult
            }else if (this.getOrders().length === 1 ){
                return this.getOrders().map(order => order.totalPrice) 
            }
            else return 0
            
        }
    },
    created() {
        this.startUpdatingOrders()
    },  
    beforeDestroy() {
        clearInterval(this.interval)
    },
   


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
        
        thead td{
            width: 50%;
            text-align: start;
        }
        
        td{
            padding: 2px 5px 2px 5px;
        }
        tbody td{
            font-size: 0.8em;
            text-align: start;
        }
        tfoot td{
            width: 50%;
            text-align: end;
        }
        
    }
    .order-status{

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