$(document).ready(function() {
    var pokedexElement = $("#pokemon-container");
    var randomizeButton = $("#randomize-button");
    var screenElement = $(".screen");
  
    randomizeButton.on("click", function() {
      getRandomPokemon();
    });
  
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
          var pokemonAttributes = $("<ul>");
          
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
          pokedexElement.append(pokemonCard);
          pokedexElement.append(pokemonAttributes);
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

    // Initial random Pokémon
    getRandomPokemon();
  });