// index.js - Is to practice with arrays and functions.
// Author: Michael Quinn and Kira
// Date: 4/29/2023

// Constants
var myTransport = ["Car", "Bus", "Plane", "Boat", "Spaceship", "Submarine"];
var myMainRide = {
  make: "",
  model: "",
  color: "",
  year: "",
    age: function() {
    return 2023 - this.year;
  }
} 

myMainRide.make = "Ford";
myMainRide.model = "Taurus";
myMainRide.color = "Blue";
myMainRide.year = "2040";

// Functions
  
//For loop for myTransport
  for (let i = 0; i < myTransport.length; i++) {
    document.writeln("This is my transport: " + myTransport[i] + ".<br>");
  }

  // Printing out object of myMainRide
  document.writeln("My Main Ride is: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

// let's get this party started
main();
