// index.js - This javascript file is used to experiment with DOM manipulation
// Author: Michael Quinn and Ichiro
// Date: 5/10/2023

//Constants

// Get the element with the ID "output"
var outputEl = document.getElementById("output");

// Create a new <p> element
var new1El = document.createElement("p");
// Set the inner HTML content of the first <p> element
new1El.innerHTML = "Ichiro is super cool.";

// Create another new <p> element
var new2El = document.createElement("p");
// Set the inner HTML content of the second <p> element
new2El.innerHTML = "Coding is fun.";

// Append the first <p> element to the "output" element
outputEl.appendChild(new1El);
// Append the second <p> element to the "output" element
outputEl.appendChild(new2El);

// Add styles to the first <p> element
new1El.style.color = "blue";
new1El.style.textDecoration = "underline";

// Add styles to the second <p> element
new2El.style.color = "purple";
new2El.style.fontStyle = "italic";

// Create a new <p> element
var new3El = document.createElement("p");
// Set the inner HTML content of the third <p> element
new3El.innerHTML = "Hello World!";

// Add styles to the third <p> element
new3El.style.color = "yellow";
new3El.style.fontWeight = "bold";

// Insert the third <p> element at the beginning of the second <p> element
new2El.prepend(new3El);

// Get the element with the ID "my-button"
var buttonEl = document.createElement("button");
outputEl.appendChild(buttonEl);

//Functions

// Add a click event listener to the button
buttonEl.addEventListener('click', function() {
	alert("Stop clicking me!");
});

// Add event listener for the "mouseover" event on the button element
buttonEl.addEventListener("mouseover", function(){
    // When the "mouseover" event occurs, trigger a click event on the button
    this.click();
  });


