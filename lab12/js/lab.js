// lab.js - Conditionals
// Author: Michael Quinn and Newton 
// Date: 5/20/2023

// Append a button to the element with ID "output"
 $("#output").append("<button id='my-button'>Click me!</button>");
 // Prepend an input element to the parent of the button
 $("#my-button").parent().prepend("<input type = 'text' id = 'input'></input>");

// Attach a click event handler to the button
 $("#my-button").click(function() {
  // Get the value of the input element
  var name = $("input").val();
  // Call the sortingGender function to determine the gender
  var gender = sortingGender(name);

  // Get the parent container of the button
  var outputContainer = $(this).parent();

  // Remove existing paragraph element
  outputContainer.find("p").remove();

  // Append a new paragraph element with the gender information
  outputContainer.append("<p>The government has assigned you a new gender identity: " + "<span style='font-style: italic;'>" + gender + "</span>" + ".</p>");
}); 

// Function to determine gender based on input length
function sortingGender(str) {
  leng = str.length;
  mode = leng % 4;

  if (mode == 0) {
    return "TBoy";
  }
  else if (mode == 1) {
    return "TGirl";
  }
  else if (mode == 2) {
    return "Non-Binary";
  }
  else if (mode == 3) {
    return "Genderfluid";
  }
}