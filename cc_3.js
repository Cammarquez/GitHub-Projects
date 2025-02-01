// Task 1
let prices = [1000, 2000, 3000, 4000, 5000];
console.log("Prices:", prices);
    prices.push(6000);

    prices.shift();

console.log("Updated Prices:", prices);

// Task 2
let orders = [10, 20, 30, 40, 50];
    orders[2] += 5;
console.log("Orders:", orders);

let totalOrders = orders.reduce((sum, order) => sum + order, 0);
console.log("Updated Orders:", orders);
console.log("Total Order Count:", totalOrders);

