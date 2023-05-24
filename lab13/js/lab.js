// lab.js - Loops
// Author: Michael Quinn and Kira 
// Date: 5/24/2023

// loop from start to end
for (var i=1; i<201; i++) {
  var str = "";

	// Conditionals

  // if a multiple of 3, print 'Fuzz' and add "Fizz" to string.
  if (i % 3 == 0) {
  	console.log("Fizz");
    str += "Fizz";
  }
  // if a multiple of 5, print 'Buzz' and add "Buzz" to string.
  if (i % 5 == 0) {
  	console.log("Buzz");
    str += "Buzz";
  }
  // if a multiple of 7, print 'Boom' and add "Boom" to string.
  if (i % 7 == 0) {
  	console.log("Boom");
    str += "Boom";
  }

  //If the string is empty, the string is just the index.
  if (str == "") {
    str = i;
  }
  //If the string isn't empty, add an exclamation point!
  else {
    str += "!";
  }
  //Appends str to id output.
  $("#output").append("<div>" + str);
  
}