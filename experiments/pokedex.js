$(document).ready(function() {
    var pokedexElement = $("#pokemon-container");
    var randomizeButton = $("#randomize-button");
    var powerButton = $(".power-button");
    var screenElement = $(".screen");
    var isPokedexOn = true;
    var audio = new Audio(); // Create an audio object without specifying the source initially
    var volumeStep = 0.1; // Volume step value
    audio.volume = 0.7;

    powerButton.on("click", function() {
      if (isPokedexOn) {
        turnOffPokedex();
      } else {
        turnOnPokedex();
      }
    });
  
    function turnOnPokedex() {
      // Display loading GIF
      var loadingImage = $("<img>").attr("src", "https://thumbs.gfycat.com/AcclaimedUnsightlyAngelfish-size_restricted.gif").addClass("loading-gif");
      screenElement.append(loadingImage);
      playSoundEffect("../audio/01_Opening_Movie.mp3");
  
      // Simulate delay before showing the Pokedex
      setTimeout(function() {
        loadingImage.remove();
        playSoundEffect("../audio/startup.mp3");
        isPokedexOn = true;
        powerButton.addClass("on");
        getRandomPokemon();
      }, 10000);
    }
  
    function turnOffPokedex() {
      isPokedexOn = false;
      powerButton.removeClass("on");
      pokedexElement.empty();
    }
  
    function getRandomNumber() {
      return Math.ceil(Math.random() * 37);
    }

    randomizeButton.on("click", function() {
      playSoundEffect("../audio/SFX_PRESS_AB.wav");
      var cry = "SFX_CRY_" + getRandomNumber() + ".wav";
      playSoundEffect(cry);
      getRandomPokemon();
    });

    function playSoundEffect(soundFile) {
      // audio.pause(); // Pause the currently playing audio, if any
      audio.src = "../audio/" + soundFile; // Set the new audio source
      audio.play(); // Play the audio
    }

    $("#controller_up").on("click", function() {
      showVolumeAdjustmentText("Volume: " + audio.volume)
      adjustVolume(volumeStep);
    });
  
    $("#controller_down").on("click", function() {
      showVolumeAdjustmentText("Volume: " + audio.volume)
      adjustVolume(-volumeStep);
    });
  
    function adjustVolume(step) {
      audio.volume += step;
      audio.volume = Math.max(0, Math.min(1, audio.volume)); // Ensure volume stays within the range [0, 1]
    }
  
    function getRandomPokemon() {
      var randomId = Math.floor(Math.random() * 898) + 1; // Generate a random Pokémon ID between 1 and 898
  
      // Make AJAX request to get the random Pokémon details
      $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + randomId,
        dataType: "json",
        success: function(pokemonData) {
          // Clear the previous Pokémon card
          pokedexElement.empty();
  
          // Create a Pokémon card
          var pokemonBackground = $("<img>").addClass("pokemon-background").attr("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a831d50-b2b4-449c-8e6f-09845f00ee8e/d2k6bdr-7dfaae85-2444-4b72-b653-54d38de39b9a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhODMxZDUwLWIyYjQtNDQ5Yy04ZTZmLTA5ODQ1ZjAwZWU4ZVwvZDJrNmJkci03ZGZhYWU4NS0yNDQ0LTRiNzItYjY1My01NGQzOGRlMzliOWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.d40DCBvgWfc29HVgmEaZ-Vz3Kt8i2XQGKoDWP8T5yvE");
          var pokemonCard = $("<div>").addClass("pokemon-card");
          var pokemonInfo = $("<h2>").addClass("pokemonInfo").text(pokemonData.order + " " + capitalizeFirstLetter(pokemonData.name)); // Combine Pokémon number and name

          // Create a container div for height and weight
          var pokemonAttributesContainer = $("<div>").addClass("pokemonAttributes");
          var pokemonHeight = $("<p>").addClass("pokemonHeight").text(pokemonData.height);
          var pokemonWeight = $("<p>").addClass("pokemonWeight").text(pokemonData.weight);
          pokemonAttributesContainer.append(pokemonHeight);
          pokemonAttributesContainer.append(pokemonWeight);

          // Adjust font size based on name length
        if (pokemonData.name.length > 15) {
          pokemonInfo.addClass("long-name");
        }
          // Continue making Pokémon card
          var pokemonTypes = $("<div>").addClass("pokemonTypes");
          var typeNames = getPokemonTypes(pokemonData.types);

          // Append each type as a separate <p> element with different classes
          typeNames.forEach(function(type, index) {
            var typeElement = $("<p>").addClass("pokemonType").addClass("type-" + (index + 1)).text(type);
            pokemonTypes.append(typeElement);

          //    // Adjust spacing based on the length of the types
          // if (index < typeNames.length - 1) {
          //   var spacing = calculateSpacing(typeNames[index].length, typeNames[index + 1].length);
          //   pokemonTypes.append($("<span>").addClass("type-spacing").css("margin-right", spacing));
          // }
       });

          // Continue making Pokémon card
          var pokemonImage = $("<img>").addClass("pokemon-image").attr("src", pokemonData.sprites.front_default);
          var pokemonAttributes = $("<ul>").addClass("basestats");
          
          // Add each attribute/statistic to the Pokémon card
          for (var i = 0; i < pokemonData.stats.length; i++) {
            var statName = pokemonData.stats[i].stat.name;
            var statValue = pokemonData.stats[i].base_stat;
            var statItem = $("<li>").text(statName + ": " + statValue);
            pokemonAttributes.append(statItem);
          }
          // Show the screen overlay
          screenElement.append(pokemonCard);
          // Append the background image to the Pokémon card
          pokemonCard.append(pokemonBackground);
          // Append the Pokémon card elements to the Pokédex container
          pokemonCard.append(pokemonInfo);
          pokemonCard.append(pokemonTypes);
          pokemonCard.append(pokemonImage);
          pokemonCard.append(pokemonAttributesContainer);
          pokemonCard.append(pokemonImage);
          pokemonCard.append(pokemonAttributes);
          pokedexElement.append(pokemonCard);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
        }
      });
    }

  // Function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
   // Function to retrieve and format the Pokémon types
   function getPokemonTypes(types) {
    var typeNames = types.map(function(type) {
      return capitalizeFirstLetter(type.type.name);
    });

    return typeNames;
  }

  // // Function to calculate spacing based on the lengths of the first and second type names
  // function calculateSpacing(firstTypeLength, secondTypeLength) {
  //   var baseSpacing = 60; // Base spacing value
  //   var maxLength = Math.max(firstTypeLength, secondTypeLength); // Maximum length of the first and second type names
  //   var spacing = baseSpacing + (10 - maxLength) * 2; // Adjust spacing based on the difference in length

  //   return spacing + "px";
  // }

  // Show volume adjustment text and fade it out after a delay
  function showVolumeAdjustmentText(text) {
    var volumeText = $("<h2>")
      .addClass("volume-text")
      .text(text)
      .css({
        top: "20px",
        left: "20px"
      })
      .appendTo("#begin")
      .fadeOut(2000, function() {
        $(this).remove();
      });
  }

    // Initial random Pokémon
    getRandomPokemon();
  });