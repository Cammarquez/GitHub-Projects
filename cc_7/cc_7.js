//Initial commit - JavaScript Functions Challenge Setup

// Task 1
function calculateInvoice(subtotal, taxRate, discount) { // Defines the function and set varriables
    const total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;} //puts the total in a string and formats it to 2 decimal places

console.log(calculateInvoice(100, 0.08, 5)); // Calculates the total and logs it to the console
console.log(calculateInvoice(500, 0.1, 20)); // calculates the total and logs it to the console

// Task 2
const calculateHourlyWage = function(salary, hoursPerWeek) { // Defines the function and sets varriables
    const hourlyWage = salary / (hoursPerWeek * 52); // defines the hourly wage and creates the formula
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;}; // puts the hourly wage in a string and formats it to 2 decimal places

console.log(calculateHourlyWage(52000, 40)); // calculates the hourly wage and logs it to the console
console.log(calculateHourlyWage(75000, 35)); // calculates the hourly wage and logs it to the console