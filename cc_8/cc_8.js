//Initial commit - JavaScript Functions Challenge Setup

// Task 1
function calculateSalary(baseSalary, bonus, taxRate) { //to create a function and set the variables
    const netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //to calculate the net salary and define the variables
    return `Net Salary: $${netSalary.toFixed(2)}`;} //to return the net salary when the calculation is called.

console.log(calculateSalary(5000, 500, 0.1)); //to call the function and calculate the net salary
console.log(calculateSalary(7000, 1000, 0.15)); //to call the function and calculate the net salary

// Task 2
const calculateDiscount = function(price, discountRate) { //to create a function and set the variables
    const finalPrice = price - (price * discountRate); //to calculate the final price after the discount and define the variables
    return `Final Price: $${finalPrice.toFixed(2)}`;}; //to return the final price after the discount when the calculation is called.

console.log(calculateDiscount(100, 0.2)); // to call the function and calculate the final price after the discount
console.log(calculateDiscount(250, 0.15)); // to call the function and calculate the final price after the discount

// Task 3
const calculateServiceFee = (amount, serviceType) => { //to create a function and set the variables
    let feeRate; //to create a variable to calculate the fee rate
    switch (serviceType) { //to create a switch statement to calculate the fee rate
        case "Premium":
            feeRate = 0.15;
            break;
        case "Standard":
            feeRate = 0.10;
            break;
        case "Basic":
            feeRate = 0.05;
            break;
        default: // base case
            feeRate = 0;}
    const serviceFee = amount * feeRate; //to calculate the service fee
    return `Service Fee: $${serviceFee.toFixed(2)}`;}; //to return the service fee when the calculation is called.

console.log(calculateServiceFee(200, "Premium")); // calls the function and calculates the service fee
console.log(calculateServiceFee(500, "Standard")); // calls the function and calculates the service fee

// Task 4
function calculateRentalCost(days, carType, insurance = false) { //to create a function and set the variables
    let dailyRate; //to create a variable to calculate the daily rate
    switch (carType) {
        case "Economy":
            dailyRate = 40;
            break;
        case "Standard":
            dailyRate = 60;
            break;
        case "Luxury":
            dailyRate = 100;
            break;
        default:
            throw new Error("Invalid car type");} //uses a throw command to return an error message if the car type is invalid
    let totalCost = dailyRate * days;
    if (insurance) {
        totalCost += 20 * days;} //to calculate the total cost with insurance if the insurance is true
    return `Total Rental Cost: $${totalCost}`;}; //to return the total rental cost when the calculation is called.

console.log(calculateRentalCost(3, "Economy", true)); // calls the function and calculates the rental cost
console.log(calculateRentalCost(5, "Luxury", false)); // calls the function and calculates the rental cost

// Task 5
function calculateLoanPayment(principal, rate, time) { //to create a function and set the variables
    const totalPayment = principal + (principal * rate * time); //to calculate the total payment and define the variables
    return `Total Payment: $${totalPayment.toFixed(2)}`;} //to return the total payment when the calculation is called.

console.log(calculateLoanPayment(1000, 0.05, 2)); // calls the function and calculates the loan payment
console.log(calculateLoanPayment(5000, 0.07, 3)); // calls the function and calculates the loan payment

// Task 6
let transactions = [200, 1500, 3200, 800, 2500]; //to create an array and set the values

function filterLargeTransactions(transactions, filterFunction) { //to create a function and set the variables
    return transactions.filter(filterFunction);} //to return the transactions that meet the filter criteria

console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // calls the function and filters the transactions that are greater than 1000

// Task 7
function createCartTracker() { //to create a function and set the variables
    let total = 0; //to create a variable to track the total
    return function(amount) {
        total += amount; //to add the amount to the total
        return `Total Cart Value: $${total}`;};} //to return the total cart value when the calculation is called.

let cart = createCartTracker();
console.log(cart(20)); // calls the function and adds the amount to the total
console.log(cart(35)); // calls the function and adds the amount to the total