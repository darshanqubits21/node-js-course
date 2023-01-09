console.log("Index Page");
// In line number 3 we are importing exposed funcanality from add.js file
const add = require("./add");

// modules.export concept
// in line number 6 we are passing value for exposed funcancality as our requirment for index page
const sum = add(25, 25);

// we can pass value as our requirment in add funcanality
const sum2 = add(50, 50);
console.log(sum);
console.log(sum2);

// we are using same code in both superman.js and batMan.js but there wont be any confilt bcz each module is wrapped with IIFE which proc=vide private scoping of code
// module scope concept
require("./superMan");
require("./batMan");

const totalBatman = require("./batMan");
const totalsuperman = require("./superMan");

console.log(totalsuperman(5, 5));
console.log(totalBatman(5, 5));

// module caching concept
const newWrapper = require("./moduleWrapper");
console.log(newWrapper.getName());
newWrapper.setName("Bijay");

const newWrapperTwo = require("./moduleWrapper");
console.log(newWrapperTwo.name);
