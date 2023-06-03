// lab.js - Using AJAX for pokemon
// Author: Michael Quinn and Kira 
// Date: 5/31/2023

// Generate a random number between 1 and 64
function randomize() {
    var num = Math.ceil(Math.random() * 64);
    return num;
}

$("#activate").click(function(){
    // Get a random number
    var ranNum = randomize();
    
    $.ajax( {
        url: "https://pokeapi.co/api/v2/berry/" + ranNum + "/",
        type: "GET",
        data: {},
    })
    .done(function(data) {
        $("#output").empty();
        
        // Extract the necessary data
        var berry = "My favorite berry from Pokemon is " + data.name + ".";
        var flavors = data.flavors;
        var firmness = data.firmness.name;

        // Extract potency values from flavors
        var potencyList = flavors.map(function(flavorData) {
            return flavorData.potency;
        });

        // Filter out potency values greater than 0
        potencyList = potencyList.filter(function(potency) {
            return potency > 0;
        });

        // Sort the potency values in descending order
        potencyList.sort(function(a, b) {
            return b - a;
        });

        // Retrieve highest potency value
        var highestPotency = potencyList[0];

        // Find flavor with the highest potency
        var highestPotencyFlavor = flavors.find(function(flavorData) {
            return flavorData.potency === highestPotency;
        }).flavor.name;

        // Find second highest potency value and flavor
        var secondHighestPotency = potencyList[1];
        var secondHighestPotencyFlavor = "";
        if (secondHighestPotency) {
            secondHighestPotencyFlavor = flavors.find(function(flavorData) {
                return flavorData.potency === secondHighestPotency;
            }).flavor.name;
        }

        // Find third highest potency value and flavor
        var thirdHighestPotency = potencyList[2];
        var thirdHighestPotencyFlavor = "";
        if (thirdHighestPotency) {
            thirdHighestPotencyFlavor = flavors.find(function(flavorData) {
                return flavorData.potency === thirdHighestPotency;
            }).flavor.name;
        }

        // Generate flavor descriptions
        var flavor = "The primary flavor of the berry is " + highestPotencyFlavor + " with the highest potency of " + highestPotency + ". The berry is " + firmness + " in firmness.";
        var secondFlavor = "";
        var thirdFlavor = "";
        if (secondHighestPotencyFlavor) {
            secondFlavor = "The flavor with the second highest potency is " + secondHighestPotencyFlavor + " with a potency of " + secondHighestPotency + ".";
        }
        if (thirdHighestPotencyFlavor) {
            thirdFlavor = "The flavor with the third highest potency is " + thirdHighestPotencyFlavor + " with a potency of " + thirdHighestPotency + ".";
        }

        // Display the results on the page
        $("#output").append("<p>" + berry + "</p>");
        $("#output").append("<p>" + flavor + "</p>");
        $("#output").append("<p>" + secondFlavor + "</p>");
        $("#output").append("<p>" + thirdFlavor + "</p>");
    }) 
});
