/**
 * Author:    Michael Quinn & Logan
 * Created:   2023-26-04
 **/

// Constants
var make = "Ford";
var model = "Taurus";
var color = "Grey";
var carYear = "2001";
var currentYear = "2023";
const ownIt = true;
var age = currentYear - carYear;

// Functions
function main() {
  console.log("Main function started.");
  document.writeln("The car is made by: " + make + ".<br>");
  document.writeln("The car's model: " + model + ".<br>");
  document.writeln("The car's color: " + color + ".<br>");
  document.writeln("The current year is : " + currentYear + ".<br>");
  document.writeln("This car is currently owned. True or false? = " + ownIt + ".<br>");
  document.writeln("The age of the car is " + currentYear + ".<br>");
}

// let's get this party started
main();
