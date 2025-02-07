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

console.log(calculateSalesTax(100, 0.07)); // To log the result of the calculateSalesTax function when called
console.log(calculateSalesTax(500, 0.1));  // To log the result of the calculateSalesTax function when called

//Task 3
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage;

    switch (performanceRating) {
        case "Excellent":
            bonusPercentage = 0.2;
            break;
        case "Good":
            bonusPercentage = 0.1;
            break;
        case "Average":
            bonusPercentage = 0.05;
            break;
        default:
            bonusPercentage = 0;}

    const bonus = salary * bonusPercentage;
    return `Bonus: $${bonus}`;}; // Function to calculate bonus based on salary and performance rating, return shows the result as a string when the calculateBonus function is called

console.log(`Salary: 5000, Performance Rating: "Excellent"`);
console.log(calculateBonus(5000, "Excellent")); // Returns the bonus amount when the function is called
console.log(`Salary: 7000, Performance Rating: "Good"`);
console.log(calculateBonus(7000, "Good"));      // Returns the bonus amount when the function is called