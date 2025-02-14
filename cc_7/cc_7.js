//Initial commit - JavaScript Functions Challenge Setup

// Task 1
function calculateInvoice(subtotal, taxRate, discount) { // Defines the function and set varriables
    const total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;} //puts the total in a string and formats it to 2 decimal places

console.log(calculateInvoice(100, 0.08, 5)); // Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total Invoice: $530.00"