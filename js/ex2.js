/* Tutorial 4
   Example 2 JavaScript code
*/

console.log("Doug's Output from Tutorial 4 Example 2");

// Get user input and determine cases
const dayEntered = prompt("What day of the week is it? (Enter in lowercase three letter abbreviation. e.g. mon, tue, wed)"); 
switch (dayEntered) {
   case "sun": 
      console.log(`You entered: ${dayEntered}`); 
      console.log("The following day is: mon"); 
      break;
   case "mon": 
      console.log(`You entered: ${dayEntered}`); 
      console.log("The following day is: tue");
      break;
   case "tue":
      console.log(`You entered: ${dayEntered}`); 
      console.log("The following day is: wed");
      break;
   case "wed":
      console.log(`You entered: ${dayEntered}`); 
      console.log("The following day is: thu");
      break;
   case "thu":
      console.log("The following day is: fri");
      console.log(`You entered: ${dayEntered}`); 
      break;
   case "fri":
      console.log(`You entered: ${dayEntered}`); 
      console.log("The following day is: sat");
      break;
   case "sat":
      console.log(`You entered: ${dayEntered}`); 
      console.log("The following day is: sun");
      break;
   default:
      console.log("Not a valid day type");
   }