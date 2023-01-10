//1  Using Math as Import
// import Math from "./math-mjs.mjs";

// const sum = Math.add(5, 5);
// const minus = Math.subtract(10, 5);
// console.log(sum);
// console.log(minus);

// 2 Destructuring import
// import math from "./math-mjs.mjs";
// const { add, subtract } = math;
// const sum = add(5, 5);
// const minus = subtract(10, 5);
// console.log(sum);
// console.log(minus);

// 3 destructing in import
import { add, subtract } from "./math-mjs.mjs";
// or importing all as
// import * as Math from "./math-mjs.mjs";
// const { add, subtract } = Math;
const sum = add(5, 5);
const minus = subtract(10, 5);
console.log(sum);
console.log(minus);
