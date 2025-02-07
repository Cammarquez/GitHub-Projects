//Task 1
console.log("Task 1")

let purchaseAmount = 120        //Declaring an initial purchase amount
const discount = 0.9            //Declaring a constant dicount amount of 10%
if (purchaseAmount > 100) {     //Here I let an if statement say if purchaseAmount is 
    purchaseAmount = purchaseAmount * discount  //greater than 100, multiply by discount
}

console.log(`Total amount after discount: $${purchaseAmount}`);     //Used a template literal to log the string and variable

//Task 2
console.log("Task 2")

let sales = [100, 140, 180, 230, 300];       //Declaring an array of sales
let totalSales = 0;                        //Declaring a variable of totalSales, I put its value
                                            //at zero to make it easier to incorporate it in the for loop
for (let i=0; i < sales.length; i++) {      //For loop that lays out the following conditions, i=0
    totalSales += sales[i];               //If i is less than sales.length then add all sales together.
}

console.log(`Total Revenue: $${totalSales}`); //Template literal using the totalSales variable.

//Task 3
console.log("Task 3")

let stock = 10                                  //Declared variable stock = 10
while (stock >= 0) {                          
    console.log(`Inventory depleting: ${stock}`);      //Created a while loop which as long as stock
    stock--;                                        //is greater than 0 will subtract 1 and log the decrement.
}

//Task 4
console.log("Task 4")

responses = 0                       //Declared responses variable and set = 0

do {                                //Created a do-while loop that logs each increment and increases by 1
    console.log(`Responses:${responses}`);  //while responses is less than or equal to 3
    responses++;
    

} while (responses <=3);

//Task 5
console.log("Task 5")

let employee = { name: "Alice", position: "Manager", salary: 75000 };   //Declared employee object

for (let property in employee) {        //Created a for..in loop that console logs each property on different lines
    console.log(`${property}: ${employee[property]}`);
}


//Task 6
console.log("Task 6")

let products = ["Laptop", "Mouse", "Keyboard"]  //Declared array of products

for (let product of products) {                 //Created a for..of loop to print each product on different lines
    console.log(`Product: ${product}`);
}

//Task 7
console.log("Task 7")

let orders = [803, 804, 805]        //Declared array of three order numbers

orders.forEach((order, index) =>  { //Created a forEach loop that goes through the index and console logs each value in array
    console.log(`Order Number: ${index+1}: ${order}`);
});

//Task 8
console.log("Task 8")

let amount = 7800                   //Declared amount
let taxRate = 0.07                  //Declared tax rate

let calculateTax = () => amount * taxRate;  //Function to calculate tax
let tax = calculateTax()                    //Call the function to variable tax
console.log(`Tax amount: $${tax}`);

//Task 9
console.log("Task 9")

let applyDiscount = (price, discountRate) => price * 1 - discountRate;  //Created function that multiplies price * 1 - the discount rate
let disco = applyDiscount(4325, 0.25);      //Called the function to variable disco and input values of price 4325 and discount rate of 0.25

console.log(`Discounted price: $${disco}`);  

//Task 10
console.log("Task 10")

let calculatePoints = (pAmount) => {    //Created a function that declares a new variable points as 
    points = pAmount / 10               //pAmount/10. I then included a math.round on the points 
    return Math.round(points)}          //in order to not give out something like 14.6667 points. 
                                        //This ensures that one will always get a nice full integer with no decimals.
let earnedPoints = calculatePoints(124)     //Called the function on a variable declared as earnedPoints

console.log(`You have earned ${earnedPoints} points!`)