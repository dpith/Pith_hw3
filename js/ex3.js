/* Tutorial 4
   Example 3 JavaScript code
*/

console.log("Doug's Output from Tutorial 4 Example 3");

// Notify user of what program does
alert("Enter two integer numbers and this program will perform simple calculations");

// Get user input
const num1 = Number(prompt("Enter first integer:"));
const num2 = Number(prompt("Enter second integer:"));

// Simple calculations
sum = num1 + num2;
diff = num1 - num2;
prod = num1 * num2;
quot = num1 / num2;
remain = num1 % num2;

// Display calculations in console
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${diff}`);
console.log(`${num1} * ${num2} = ${prod}`);
console.log(`${num1} / ${num2} = ${quot}`);
console.log(`${num1} % ${num2} = ${remain}`);



