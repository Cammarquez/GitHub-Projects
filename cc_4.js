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

// Task 8
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

let amount = 200;
let taxRate = 0.02;
let tax = calculateTax(amount, taxRate);
let availableFunds = amount - tax;
console.log(`Ammount: $${amount}`);
console.log(`Total Tax: $${tax}`);
console.log(`Available Funds: $${availableFunds}`);

// Task 9
const applyDiscount = function(price, discount) {
    return price * (1 - discount / 100);};

let price = 975;
let discount = 25;
let discountedPrice = applyDiscount(price, discount);
console.log(`Price: $${price}`);
console.log(`Discounted Price: $${discountedPrice}`);

// Task 10
const calculatePoints = (purchaseAmount) => Math.floor(purchaseAmount / 10);

let points = calculatePoints(225);
console.log(`Points earned: ${points}`);