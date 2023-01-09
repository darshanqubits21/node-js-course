// PATTERN ONE
// module.exports = (a, b) => {
//   return a + b;
// };

// patternTwo

// export.add = (a, b) => {
//     return a + b;
//   };
//   export.subtract = (a, b) => {
//     return a - b;
//   };

const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};

// PATTERN THREE
module.exports = { add, subtract };

// // PATTERNFOUR
// module.exports = add;
// module.exports = subtract;
