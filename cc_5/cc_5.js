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