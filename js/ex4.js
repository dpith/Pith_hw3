/* Tutorial 4
   Example 4 JavaScript code
*/

console.log("Doug's Output from Tutorial 4 Example 4");

// let userInput = "";
// let i = 0;


// practice code #1 - wrong
// for (let i = 1; i < 4; i++) {
//    userInput = prompt("Password:");
//    if (userInput === password) {
//       alert(`You entered the correct password after ${i} times`);
//       i++;
//    } else { 
//       alert("Invalid password");
//    }
// }   
// alert(`Your account is locked! You failed to enter the correct password ${i} times`);

// practice code #2 - wrong
// while ((userInput !== password || i < 3)) {
//    userInput = prompt("Password:");
//    if (userInput === password) {
//       alert(`You entered the correct password after ${i} times`);
//       i++;
//    } else { 
//       alert("Invalid password");
//       i++;
//    }
// }   
// alert(`Your account is locked! You failed to enter the correct password ${i} times`);

// Initialize variables
const password = "secret";
let attempts = 0;
let userInput = "";

// Repeat while password is wrong and if there's no more than 3 attempts
while ((userInput !== password && attempts < 4)) {
   if (attempts === 3) {
      alert(`Your account is locked! You failed to enter the correct password 3 times`); 
      attempts++;
   } else {
      userInput = prompt("What's the secret password?");
      attempts++;
   }
}

// If user enters the correct password 
if (userInput === password) {
   alert(`You entered the correct password after ${attempts} times`);
   console.log(`Password is "${userInput}"`);
}
