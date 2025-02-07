// Task 1
let products = ["Box", "Shirt", "Shoes"];
console.log("Products:", products);
products.unshift("Hat");
products.pop();
console.log("New Products:", products);

// Task 2
let scores = [10, 20, 30, 40, 50];
console.log("Initial Scores:", scores);
scores[1] = 25;
console.log("Updated Scores:", scores);
let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];}
let average = total / scores.length;
console.log("Average Score:", average);

// Task 3
let employee = {
    name: "John Pork",
    age: 40,
    department: "Accounting",
    isActive: true
};
console.log("Employee:", employee);
employee.department = "Finance";
employee.position = "Analyst";
console.log("Updated Employee:", employee);

// Task 4
let customers = [{
    name: "Barry Allen",
    email: "daflash@yahoo.com",
    purchaseAmount: 10
}]
console.log("Customers:", customers);
customers.push({
    name: "Oliver Queen",
    email: "bullseye12@hotmail.com",
    purchaseAmount: 5000
});
console.log("Updated Customers:", customers);

// Task 5
let orders = [{
    orderId: "1234",
    customerName: "Kal El",
    ammount: 50,
    calculateTax: function() {
        return this.ammount * 0.10;
    }
}];
console.log("Order Details:", orders);
console.log("Tax Amount:", orders[0].calculateTax());