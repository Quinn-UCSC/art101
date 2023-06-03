// xkcd comics
// Author: Michael Quinn and Kira
// Date: 03/06/2023

// Using the core $.ajax() method

$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json",
    data: {},
    type: "GET",
    dataType: "json",
  
    success: function (comicObj) {
      console.log(comicObj);
      $("#output").html("<h2>" + comicObj.title + "</h2>");
      $("#output").append("<img src =" + comicObj.img + " alt =\"" + comicObj.alt + "\">");
    },
  
    // What we do if the API call fails
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    }
  });