// index.js - Is to practice with arrays and functions.
// Author: Michael Quinn and Kira
// Date: 5/2/2023

//Sorts alphabetically but case-sensitive
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

function input() {
  var userName = window.prompt("[INSERT NAME]");
  var nameArray = userName.split('');
  //var nameArraySort = nameArray.sort();
  var sorted = nameArray.join('');
  return sorted;
}

function caseInsensitiveSort(a, b) {
  // Convert both strings to lowercase before comparing them
  const lowerA = a.toLowerCase();
  const lowerB = b.toLowerCase();

  if (lowerA < lowerB) {
    return -1;
  } else if (lowerA > lowerB) {
    return 1;
  } else {
    return 0;
  }
}

// var arrayInput = input();

function main() {
  document.writeln("I have sorted your name, is this correct: ", sortInput(), "<br>");
}

main();