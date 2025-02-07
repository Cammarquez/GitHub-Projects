// Task 1
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;} // Calculate profit using the formula, return shows the result as a string when the calculateProfit function is called


console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000" 
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

//Task 2
const calculateSalesTax = function(amount, taxRate) {
    const salesTax = amount * taxRate;
    return `Sales Tax: $${salesTax}`;}; // Function to calculate sales tax based on the amount and tax rate, return shows the result as a string when the calculateSalesTax function is called

console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1));  // Expected output: "Sales Tax: $50"