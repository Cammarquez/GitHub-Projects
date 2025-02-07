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
const prices = [100, 200, 300];
console.log(prices);
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices);