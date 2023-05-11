// index.js - Is to practice with arrays and functions.
// Author: Michael Quinn and Kira
// Date: 5/2/2023

// Sorts alphabetically and case-insensitive
function sortInput() {
  // Prompt the user for input and store it in the variable 'userName'
  var userName = window.prompt("[INSERT NAME]");
  console.log("userName =", userName);

  // Split the user input into an array of characters and store it in 'nameArray'
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  // Sort the 'nameArray' using a custom sorting function that compares characters in a case-insensitive manner
  var nameArraySort = nameArray.sort(function(a, b) {
    // Convert both characters to lowercase for comparison
    a = a.toLowerCase();
    b = b.toLowerCase();

    // Compare the lowercase characters and determine their order
    if (a < b) {
      return -1; // 'a' should come before 'b'
    }
    if (a > b) {
      return 1; // 'a' should come after 'b'
    }
    return 0; // 'a' and 'b' are equal

    // The custom sorting function determines the order of elements in the 'nameArraySort' array
  });
  console.log("nameArraySort =", nameArraySort);

  // Join the sorted characters in 'nameArraySort' back into a string and store it in 'sorted'
  var sorted = nameArraySort.join('');
  console.log("nameSorted =", sorted);

  // Return the sorted string
  return sorted;
}

function main() {
  // Call the 'sortInput' function to sort the user's name and display the result on the webpage
  document.writeln("I have sorted your name, is this correct: ", sortInput(), "<br>");
}

// Call the 'main' function to start the execution of the program
main();