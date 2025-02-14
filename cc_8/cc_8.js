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