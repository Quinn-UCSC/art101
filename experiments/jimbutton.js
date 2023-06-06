// jimbutton.js
// Author: Michael Quinn
// Date: June 5th, 2023

// Define an array of random events
var events = [
    { type: 'audio', content: '../audio/SFX_Jim.mp3' },
    { type: 'party' }
];

// Variable to hold the reference to the currently playing audio
var currentAudio;

var appended = false;

var circleSize = Math.floor(Math.random() * 30) + 20;
var bodyWidth = $(window).width();
var bodyHeight = $(window).height();

var partyInterval;

// Function to generate a random event
function getRandomEvent() {
    // Generate a random index with a 95% chance for audio event and 5% chance for party event
    var randomIndex = Math.random() < 0.99 ? 0 : 1;
    var randomEvent = events[randomIndex];

    // Pause or stop the currently playing audio, if any
    if (currentAudio) {
        currentAudio.pause(); // Pause the audio
        currentAudio.currentTime = 0; // Reset the audio playback position
    }

    if (appended) {
        $('#partyContainer').empty();
        appended = false;
    }
    else {
    }

    // Check the type of the random event and perform the corresponding action
    if (randomEvent.type === 'audio') {
        var audio = new Audio(randomEvent.content);
        audio.play();
        currentAudio = audio; // Set the current audio reference
        $('#partyContainer').empty();
    } else if (randomEvent.type === 'party') {
        // Stop the main theme if it's playing
    if (mainTheme) {
        mainTheme.pause();
        mainTheme.currentTime = 0;
      }
        // Add a party animation div to the partyContainer
        var partyMusic = new Audio("../audio/03_Disco_Secret.mp3");
        partyMusic.addEventListener('ended', function() {
            stopPartyMusic();
          });
        partyMusic.play();
        currentAudio = partyMusic; // Set the current audio reference
        $('#partyContainer').append('<div class="party-animation"></div>');
        $('.party-animation').prepend("<div class= 'hanger'></div>");
        $('.party-animation').append('<img class = "discoball" src = "../img/disco.png" alt="">');
        startDiscoLights();
        appended = true;
        // Start generating random background colors
        partyInterval = setInterval(generateRandomBackgroundColor, 700);
        // Add a class to the playButton when party event is active
        $('#playButton').addClass('rotate');
    }
}

// Function to stop the party music
function stopPartyMusic() {
    if (currentAudio) {
      currentAudio.pause(); // Pause the audio
      currentAudio.currentTime = 0; // Reset the audio playback position
      currentAudio = null; // Clear the current audio reference

    // Stop generating random background colors
    clearInterval(partyInterval);
    $('body').css('background-color', "black");

    // Remove the class from the playButton when party event ends
    $('#playButton').removeClass('rotate');
  
      // Resume playing the main theme
      if (mainTheme) {
        mainTheme.play();
      }
    }
  }

      // Play the main theme upon page load
      mainTheme = new Audio("../audio/02_Introducing_Stanley.mp3");
      mainTheme.addEventListener('ended', function() {
      stopPartyMusic();
      });
      mainTheme.play();
      currentAudio = mainTheme;

// Function to generate a random background color
function generateRandomBackgroundColor() {
    var randomColor = getRandomColor();
    $('body').css('background-color', randomColor);
  }
  
// Function to get a random color in hexadecimal format
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Attach a click event listener to the playButton
$(document).ready(function() {
    $('#playButton').click(function() {
        stopDiscoLights();
        stopPartyMusic();
        getRandomEvent(); // Call the getRandomEvent function to trigger a random event
    });
});

function startDiscoLights() {
    discoLightsOn = true;
    discoLights();
  }

  function stopDiscoLights() {
    discoLightsOn = false;
    $(".circle").remove();
  }

function discoLights() {
    for (var i = 0; i < 10; i++) {
      var posX = Math.floor(Math.random() * (bodyWidth - circleSize));
      var posY = Math.floor(Math.random() * (bodyHeight - circleSize));
      var circle = $("<div>", { class: "circle" });
      circle.css({
        width: circleSize + "px",
        height: circleSize + "px",
        left: posX + "px",
        top: posY + "px",
      });
      $("body").append(circle);
      animateCircle(circle);
    }
  }

  function animateCircle(circle) {
    var velocity = 25; // Constant velocity of the circles
    var posX = parseInt(circle.css("left"));
    var posY = parseInt(circle.css("top"));
    var directionX = Math.random() > 0.5 ? 1 : -1;
    var directionY = Math.random() > 0.5 ? 1 : -1;
    var requestId;

    var hue = Math.floor(Math.random() * 360); // Random hue value

    function move() {
      posX += directionX * velocity;
      posY += directionY * velocity;

      // Check if the circle hits the edges and reverse its direction
      if (posX <= 0 || posX >= bodyWidth - circleSize) {
        directionX *= -1;
      }
      if (posY <= 0 || posY >= bodyHeight - circleSize) {
        directionY *= -1;
      }

      circle.css({
        left: posX + "px",
        top: posY + "px",
        "background-color": "hsl(" + hue + ", 100%, 50%)"
      });

      requestId = requestAnimationFrame(move);
    }

    move();

// Stop the animation when the circle is removed from the DOM
    circle.on("DOMNodeRemoved", function() {
        cancelAnimationFrame(requestId);
      });
  }