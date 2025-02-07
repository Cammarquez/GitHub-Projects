// Task 1
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;} // Calculate profit using the formula, return shows the result as a string when the calculateProfit function is called


console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000" 
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"