// Task 1
let prices = [1000, 2000, 3000, 4000, 5000];
console.log("Prices:", prices);
    prices.push(6000);

    prices.shift();

console.log("Updated Prices:", prices);

// Task 2
let orders = [10, 20, 30, 40, 50];
    orders[2] += 5;
console.log("Orders:", orders);

let totalOrders = orders.reduce((sum, order) => sum + order, 0);
console.log("Updated Orders:", orders);
console.log("Total Order Count:", totalOrders);

// Task 3
let employee = {
    name: "Harvey Dent",
    role: "District Attorney",
    performanceScore: 2,
    isActive: true
};
console.log("Employee:", employee);

employee.performanceScore = 1;
employee.promotionEligible = false;
console.log("Updated Employee:", employee);

// Task 4
let feedback = [
    { customerName: "Bruce Wayne", feedbackText: "Great work, left a hefty tip!", rating: 5 },
    { customerName: "Clark Kent", feedbackText: "Food still tasted good even if it was cold.", rating: 4 },
    { customerName: "Barry Allen", feedbackText: "Could improve the delivery time.", rating: 3 }
];
console.log("Customer Feedback:", feedback);

feedback.push({ customerName: "John Jones", feedbackText: "Otherworldly service!", rating: 5 });
console.log("Customer Feedback:", feedback);