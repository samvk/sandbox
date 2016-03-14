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