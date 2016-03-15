/*global $, document, Image, window, setTimeout, setInterval, clearInterval */

//split v slice v splice

//split is only for strings and returns arrays based off what it's using as the ',' prelacement
//usually the space, but doesnt have to be

var sen = "This those and the thing";

var newSen = sen.split(" ").join(" ");

console.log(newSen);

//////////////////////////////

var oldArray = ["milk", "cheese", "eggs", "ham"];

var newSlice = oldArray.slice(1, 3)[0];
//var newSlicer = oldArray.splice(0, 2, "bob")[0];

//console.log(oldArray);
//console.log(newSlice);
//console.log(newSlicer);

var sent = "";

var a = "Part 1 ";
var b = "Part 2 ";
var c = "Part 3";
console.time();
sent += a;
console.log(sent);
sent += b;
console.log(sent);
sent += c;

console.log(sent);
console.timeEnd();