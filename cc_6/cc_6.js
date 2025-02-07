// Task 1
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;} // Calculate profit using the formula, return shows the result as a string when the calculateProfit function is called


console.log(calculateProfit(20, 30, 100)); // To log the result of the calculateProfit function when called
console.log(calculateProfit(50, 70, 200)); // To log the result of the calculateProfit function when called

//Task 2
const calculateSalesTax = function(amount, taxRate) {
    const salesTax = amount * taxRate;
    return `Sales Tax: $${salesTax}`;}; // Function to calculate sales tax based on the amount and tax rate, return shows the result as a string when the calculateSalesTax function is called

console.log(calculateSalesTax(100, 0.07)); // To log the result of the calculateSalesTax function when called
console.log(calculateSalesTax(500, 0.1));  // To log the result of the calculateSalesTax function when called

//Task 3
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage;

    switch (performanceRating) { // Switch statement to determine the bonus percentage based on the performance rating
        case "Excellent":
            bonusPercentage = 0.2;
            break;
        case "Good":
            bonusPercentage = 0.1;
            break;
        case "Average":
            bonusPercentage = 0.05;
            break;
        default: // If the performance rating is not recognized, default sets the bonus percentage to 0
            bonusPercentage = 0;}

    const bonus = salary * bonusPercentage;
    return `Bonus: $${bonus}`;}; // Function to calculate bonus based on salary and performance rating, return shows the result as a string when the calculateBonus function is called

console.log(`Salary: 5000, Performance Rating: "Excellent"`);
console.log(calculateBonus(5000, "Excellent")); // Returns the bonus amount when the function is called
console.log(`Salary: 7000, Performance Rating: "Good"`);
console.log(calculateBonus(7000, "Good"));      // Returns the bonus amount when the function is called

//Task 4
function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthlyCost;

    switch (plan) { // Switch statement to determine the monthly cost based on the plan
        case "Basic":
            monthlyCost = 10;
            break;
        case "Premium":
            monthlyCost = 20;
            break;
        case "Enterprise":
            monthlyCost = 50;
            break;
        default: // If the plan is not recognized, default returns an error message
            return "Invalid plan";}

    const totalCost = (monthlyCost * months) - discount;
    return `Total Cost: $${totalCost}`;} // Function to calculate subscription cost based on the plan, number of months, and discount, return shows the result as a string when the calculateSubscriptionCost function is called

console.log(calculateSubscriptionCost("Basic", 6, 10)); // Returns the total cost when the function is called
console.log(calculateSubscriptionCost("Premium", 12, 0)); // Returns the total cost when the function is called

//Task 5
function convertCurrency(amount, exchangeRate) {
    const convertedAmount = amount * exchangeRate;
    return `Converted Amount: $${convertedAmount.toFixed(2)}`;} // Function to convert currency based on the amount and exchange rate, return shows the result as a string when the convertCurrency function is called

console.log(convertCurrency(100, 1.1)); // Returns the converted amount when the function is called
console.log(convertCurrency(250, 0.85));  // Returns the converted amount when the function is called

//Task 6
let orders = [200, 600, 1200, 450, 800];

function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction); //Defines the function to apply a discount to each order amount in the orders array
}
console.log('Orders: ', orders);
console.log('Discounted Orders:', applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount)); // Returns the discounted orders when the function is called

//Task 7
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense;
        return `Total Expenses: $${totalExpenses}`;};} // Function to create an expense tracker, return shows the total expenses as a string when the function is called

let tracker = createExpenseTracker();
console.log(tracker(200)); // Logs the first value of the expense tracker
console.log(tracker(150)); // Adds this value and logs the total expenses