// lab.js - Using AJAX for pokemon
// Author: Michael Quinn and Kira 
// Date: 5/31/2023

function randomize() {
    var num = Math.ceil(Math.random() * 64);
    return num;
}

$("#activate").click(function(){
    var ranNum = randomize();
    $.ajax( {
        url:"https://pokeapi.co/api/v2/berry/" + ranNum + "/",
        type: "GET",
        data: {},
    })
    .done(function(data) {
        var berry = "My favorite berry from Pokemon is " + data.name + ".";
        // var flavor = "The flavor of the berry is " + JSON.stringify(data.flavors) + ".";
        console.log(berry);
        $("#output").append("<p>" + berry + "</p>");
        // $("#output").append("<p>" + flavor + "</p>");
    }) 
})
