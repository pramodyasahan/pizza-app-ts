type Pizza = {
    id: number;
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "pending" | "complete"
}

const menu = [
    {id: 1, name: "Margherita", price: 8},
    {id: 2, name: "Pepperoni", price: 10},
    {id: 3, name: "Hawaiian", price: 10},
    {id: 4, name: "Veggie", price: 9},
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
    const newOrder: Order = {id: nextOrderId++, pizza: selectedPizza, status: "pending"};
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

addNewPizza({id: 5, name: "Chicken Bacon", price: 12})
addNewPizza({id: 6, name: "BBQ Chicken", price: 11})

placeOrder("Chicken Bacon")
completeOrder(1)

console.log('Menu', menu)
console.log("Cash in Register", cashInRegister)
console.log("Order Queue", orderQueue)