type Pizza = {
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: string
}

const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9},
]

let cashInRegister: number = 100
let nextOrderId: number = 1
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error('Pizza name is missing in the menu')
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: "pending"};
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error('Order ID is missing in the menu')
        return
    }
    order.status = "complete"
    return order
}

addNewPizza({name: "Chicken Bacon", price: 12})
addNewPizza({name: "BBQ Chicken", price: 11})

placeOrder("Chicken Bacon")
completeOrder(1)

console.log('Menu', menu)
console.log("Cash in Register", cashInRegister)
console.log("Order Queue", orderQueue)