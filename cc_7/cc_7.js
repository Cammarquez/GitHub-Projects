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

// Task 3
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate; // defines the discount rate
    if (years >= 5) {
        discountRate = 0.15;
    } else if (years >= 3) {
        discountRate = 0.10;
    } else {
        discountRate = 0.05;} // calculates the discount rate based on the number of years
    const discountedPrice = amount * (1 - discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;}; // puts the discounted price in a string and formats it to 2 decimal places

console.log(calculateLoyaltyDiscount(100, 6)); // calculates the discounted price and logs it to the console
console.log(calculateLoyaltyDiscount(200, 2)); // calculates the discounted price and logs it to the console