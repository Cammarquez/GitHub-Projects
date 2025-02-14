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

// Task 4
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost;
    switch (location) { // defines the base cost based on the location using a switch statement
        case 'USA':
            baseCost = 5 + (0.5 * weight);
            break;
        case 'Canada':
            baseCost = 10 + (0.7 * weight);
            break;
        default:
            return 'Location not supported';
    }
    if (expedited) { // adds an additional cost if the shipping is expedited
        baseCost += 10;} // calculates the shipping cost based on the weight and location
    return `Shipping Cost: $${baseCost.toFixed(2)}`;} // puts the shipping cost in a string and formats it to 2 decimal places

console.log(calculateShippingCost(10, 'USA', true)); // calculates the shipping cost and logs it to the console
console.log(calculateShippingCost(5, 'Canada', false)); // calculates the shipping cost with expedited shipping and logs it to the console

// Task 5
function calculateLoanInterest(principal, rate, years) { // Defines the function and sets varriables
    const interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;} // puts the total interest in a string and formats it to 2 decimal places

console.log(calculateLoanInterest(1000, 0.05, 3)); // calculates the total interest and logs it to the console
console.log(calculateLoanInterest(5000, 0.07, 5)); // calculates the total interest and logs it to the console

// Task 6
let transactions = [500, 1200, 3000, 800, 2200]; // creates an array of transactions

function filterHighValueTransactions(transactions, filterFunction) { // defines the function and sets varriables
    return transactions.filter(filterFunction);} // filters the transactions based on the filter function

console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // filters the transactions and logs them to the console