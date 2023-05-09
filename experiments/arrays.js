/*
*   Author: Michael Quinn
*   Date: 04-27-2023
*   Description: Practicing Arrays
*/

//Constants
var array = [1,2,3,4];
var shopping_list = ["yellow onions", "bananas", "milk", "eggs", "H202", "chips", "freedom bread", "apples", "Yugioh 1 pack"];
var x = 1;
var last = shopping_list.pop();    //Removes and returns last element
var first = shopping_list.shift();    //Removes and returns last element
var sort = shopping_list.sort();    //Sorts the array
var reverse = shopping_list.reverse();    //Reverses the order of the array
var newArray = ["zeroth element", 
["one", "two", 3],
"last element"];
var myRide = [];
myRide.make = "Ford";
myRide.model = "Taurus";
myRide.color = "Grey";
myRide.year = "1995";
myRide.extras = ["torn seats", "leaky moon roofs", "broken cassette player"];
var transportation = [myRide];
sortMyArray = [1,2,3,4,5];
mySortedArray = [1,15,2,24,3,45,5,6,65];

//Functions
function betterSort(a,b) {
	return a-b;
}

function main() {
    console.log(shopping_list[1]);
    console.log(shopping_list.length);
    shopping_list.push = "chorizo";     //Adds new element to the end of the array
    console.log(shopping_list);
    console.log(newArray[newArray.length - 1]);
    console.log(newArray[1][2]);
    console.log("My ride is a", myRide.color, myRide.year, myRide.make, myRide.model, myRide.extras);
    document.writeln("My ride is a", myRide.color, myRide.year, myRide.make, myRide.model, myRide.extras);
    console.log("Array sorted: ", sorted(sortMyArray));
    console.log("Array more accurately sorted:" , mySortedArray.sort(betterSort));
}

//Runs main function
    main();