//Initial commit - JavaScript Functions Challenge Setup

// Task 1
function calculateSalary(baseSalary, bonus, taxRate) { //to create a function and set the variables
    const netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //to calculate the net salary and define the variables
    return `Net Salary: $${netSalary.toFixed(2)}`;} //to return the net salary when the calculation is called.

console.log(calculateSalary(5000, 500, 0.1)); //to call the function and calculate the net salary
console.log(calculateSalary(7000, 1000, 0.15)); //to call the function and calculate the net salary