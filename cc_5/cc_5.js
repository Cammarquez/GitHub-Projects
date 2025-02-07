//Task 1
const customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"};// create an object called customer with the properties name, age and email

console.log(`Name: ${customer.name}`);// log the name of the customer
console.log(`Age: ${customer.age}`);// log the age of the customer
console.log(`Email: ${customer.email}`);// log the email of the customer

//Task 2
const order = {
    orderId: 12345, 
    totalAmount: 150, 
    status: "Processing", 
    displayOrder: function() { // method to display order details
        console.log(`Order ID: ${this.orderId}`); 
        console.log(`Total Amount: ${this.totalAmount}`); 
        console.log(`Status: ${this.status}`); 
    }
};

order.displayOrder(); // This calls the method to display the order details. Method allows for the storage of the order details and the ability to display them.

//Task 3
const cartItems = ["Grape", "Flower", "Box", "Juice"]; 

cartItems.push("Brick"); // Adds a new product to the end of cart
console.log(cartItems);
cartItems.pop(); // Removes the last item
console.log(cartItems); 
cartItems.unshift("Sasafrass"); // Adds an item at the beginning
console.log(cartItems); 
cartItems.shift(); // Removes the first item

console.log(cartItems); // Log the final array to the console


//Task 4
const prices = [100, 200, 300]; // Create an array of prices
console.log(prices);
const discountedPrices = prices.map(price => price * 0.9); // Applies a 10% discount to each price in the array using the map method
console.log(discountedPrices);

//Task 5
const inventory = [5, 0, 12, 8, 0]; // Declare an array with product quantities
console.log(`Total Inventory: ${inventory}`);
const availableInventory = inventory.filter(quantity => quantity > 0); // Filter out products with zero stock
console.log(`Available Inventory: ${availableInventory}`); 

//Task 6
const sales = [500, 300, 200, 400]; // Declare an array with sales amounts
console.log(`Sales: ${sales}`);
const totalRevenue = sales.reduce((total, sale) => total + sale, 0); // Calculate total revenue using reduce
console.log(`Total Revenue: ${totalRevenue}`); 

//Task 7
const customers = ["Alice", "Bob", "Charlie", "David"];
console.log(`Customers: ${customers}`);
const foundCustomer = customers.find(customer => customer === "Charlie"); // Find a specific customer in the array
console.log(`Found Customer: ${foundCustomer}`); 

//Task 8
function calculateTax(amount, taxRate) {
    const tax = amount * taxRate;
    return tax;} // Function to calculate tax amount based on the amount and tax rate

const amount = 20000;
console.log(`Amount: ${amount}`);
const taxRate = 0.40;
console.log(`Tax Rate: ${taxRate * 100}%`);
console.log(`Tax Expense: ${calculateTax(amount, taxRate)}`) // Calculate and log the tax expense
console.log(`Total Balance: ${amount - calculateTax(amount, taxRate)}`); // Calculate the remaining balance after tax expense