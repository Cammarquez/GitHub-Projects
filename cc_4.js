// Task 1
let purchaseAmount = 150;
console.log(`Initial Ammount: $${purchaseAmount}`);

    if (purchaseAmount > 100) {
    purchaseAmount *= 0.9;}

console.log(`Final amount after discount: $${purchaseAmount}`);

// Task 2
let sales = [10, 55, 420, 10000, 99];
let totalSales = 0;

    for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];}

console.log(`Total sales: $${totalSales}`);

// Task 3
let stock = 10;

while (stock > -1) {
    console.log(`Stock remaining: ${stock}`);
    stock--;}