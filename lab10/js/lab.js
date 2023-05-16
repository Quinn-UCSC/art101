// index.js - Practicing with button :)
// Author: Michael Quinn and Kira
// Date: 5/14/2023

// Sorts alphabetically and case-insensitive
function sortInput(name) {
    console.log("userName =", name);
  
    // Split the user input into an array of characters and store it in 'nameArray'
    var nameArray = name.split('');
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

  var buttonEl = document.getElementById("my-button");

  buttonEl.addEventListener('click', function() {
    var name = document.getElementById("user-name").value;
    var sorted = sortInput(name);
    var output = document.getElementById("output");
    output.innerHTML = sorted;
    // var newEl = document.createElement("h1");
    // newEl.innerHTML = sorted;
    // output.appendChild(newEl);
  })

colorChanger();

function randomColor(){
  var randomNum = Math.floor(Math.random() * 16777215);
  return '#' + randomNum.toString(16);
}

function colorChanger(){
  var rainbows = document.getElementsByClassName("minor-section");
  for (let i = 0; i < rainbows.length; i++){
    rainbows[i].style.backgroundColor = randomColor();
  }
  setTimeout(colorChanger, 1500);
}

//Functions