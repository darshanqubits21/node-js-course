// const counterOne = require("./count");
// const counterTwo = require("./count");

// counterOne.increment();
// counterOne.increment();
// counterOne.increment();
// counterOne.increment();

// console.log(counterOne.total());
// console.log(counterTwo.total());

// concept of moduling caches
// 1: if we require same funcanality more than onr time then it will return cache value

const oddNoOne = require("./count");
const oddNoTwo = require("./count");
oddNoOne.oddNumber();
oddNoOne.oddNumber();
oddNoOne.oddNumber();
oddNoOne.oddNumber();
oddNoOne.oddNumber();
oddNoOne.oddNumber();
oddNoOne.oddNumber();
oddNoOne.oddNumber();

console.log(oddNoOne.myOddNumber());

// oddNoOne.oddNumber();
oddNoTwo.oddNumber();
oddNoTwo.oddNumber();
oddNoTwo.oddNumber();
oddNoTwo.oddNumber();

console.log(oddNoTwo.myOddNumber());
