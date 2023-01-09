console.log("Index Page");
// In line number 3 we are importing exposed funcanality from add.js file
const add = require("./add");

// in line number 6 we are passing value for exposed funcancality as our requirment for index page
const sum = add(25, 25);

// we can pass value as our requirment in add funcanality
const sum2 = add(50, 50);
console.log(sum);
console.log(sum2);
