// index.js - Is to practice with Anon Functions and Callbacks.
// Author: Michael Quinn and Darshaya Washington
// Date: 5/8/2023

//Constants

//Function checks whether or not number is even.
function isEven(x){
  return (x % 2 == 0);
}
//Function uses the value inputted and square-roots it and returns the resulting value.
function sqrt(x) {
  return x ** 0.5;
}
//Testing isEven() function.
console.log("Is '1' even?: ",isEven(1));
console.log("Is '2' even?: ",isEven(2));
//Making new array
var makeArray = [5, 10, 15, 30, 60, 120, 240];
//Printing new array
console.log("This is an array I made: ", makeArray);

//Create a variable to check if each value in the array is even.
var result = makeArray.map(isEven);
//Should return: false, true, false, true, true, true, true
console.log("Test whether or not each element is even: ", result);
//Should return the values of the array but each values is square-rooted.
console.log("New values of array once square-rooted: ", makeArray.map(sqrt));
//Creating a new variable which creates a function to square-root 
var squareRoot = makeArray.map(function sq(x) {
  return x * x;
})
//Should return the values of the array but each value is squared.
console.log("This is the square-root of my array: ", squareRoot);

var mapResults = ["This is an array I made: " + makeArray + ".</br>" + "Test whether or not each element is even: " + result + ".</br>" + "New values of array once squared: " + squareRoot + ".</br>"];

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = mapResults; // put your results here

function runCallback(callback) {
  // Check if the callback is actually a function
  if (typeof callback === 'function') {
    // Call the callback function and pass a message as an argument
    callback('Hello, callback function!');
  } else {
    console.error('Error: The parameter must be a function');
  }
}
function myCallback(message) {
  console.log('Callback function says:', message);
}
runCallback(myCallback);
