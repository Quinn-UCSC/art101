// index.js - Is to practice with arrays and functions.
// Author: Michael Quinn and Kira
// Date: 5/2/2023

function sortInput() {
  var userName = window.prompt("[INSERT NAME]");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort()
  console.log("nameArraySort =", nameArraySort);

  var sorted = nameArraySort.join('');
  console.log("nameSorted =", sorted);
  return sorted;
}

function main() {
  document.writeln("I have sorted your name, is this correct: ", sortInput(), "<br>");
}

main();