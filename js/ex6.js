/* Tutorial 4
   Example 6 JavaScript code
*/

console.log("Doug's Output from Tutorial 4 Example 6");

// Correct Solution #1

// Tell user what program does
alert("This program will take the time entered as three values: hours, minutes, and seconds. Then it will output the time one second later from the entered time.");

// // Get input (all input method)
let hr = (prompt("Enter hours (0-23):"));
let min = (prompt("Enter minutes (0-59):"));
let sec = (prompt("Enter seconds (0-59):"));

// Validate input
if ((Number(hr) >= 0 && Number(hr) <= 23 && Number(min) >= 0 && Number(min) <= 59 && Number(sec) >= 0 && Number(sec) <= 59)) {
   console.log(`Time Input: ${hr}hr${min}min${sec}sec`) // Display og time
   // Iniatialize variables for new time
   let newHr = Number(hr);
   let newMin = Number(min);
   let newSec = Number(sec);
   sec++; // Increment by one second
      // Calculate new time
      if (sec === 60) { // Minute elapsed
         newSec = 0;
         newMin++;
         if (newMin === 60) { // Hour elapsed
            newMin = 0;
            newHr++;
            if (newHr === 24) { // Day elapsed
            newHr = 0;
            }   
         }
      }
   console.log(`One Second Later: ${newHr}hr${newMin}min${newSec}sec`) // Display new time 
} else {
   alert("Invalid input!"); // Error message for invalid input
}




