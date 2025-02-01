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

// Task 4
let responses = 0;

do {
    console.log(`Response count: ${responses}`);
    responses++;} while (responses < 3);

// Task 5
let employee = {
    name: "Alicia Keys",
    position: "Artist",
    salary: 75000000};

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);}

// Task 6
let products = ["Book", "Books", "Bookz", "Bookzzz"];

for (let product of products) {
    console.log(`Product: ${product}`);}

 // Task 7
let orders = [44, 19128, 9383];

orders.forEach(order => {
    console.log(`Order ID: ${order}`);});