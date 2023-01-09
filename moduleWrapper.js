const wrapper = (function (userName) {
  const value = "hello";
  console.log(value, userName);
})("Darshan");

// In this example we are using module caching concept. In this concept if we define the value and assing new value then the second assign value will render instead of first value because of caching
class superHero {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}
module.exports = new superHero("Darsan");
