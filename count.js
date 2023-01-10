//
let oddNumber = 1;

module.exports.oddNumber = () => {
  oddNumber++;
};

module.exports.myOddNumber = () => {
  return oddNumber;
};
