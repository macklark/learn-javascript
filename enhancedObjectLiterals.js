const fnName = "Max";
const championships = 4;
// const sayNumberOfWins = function () {
//   console.log(71);
// };

// instead of assigning fnName again, we can simply declare it in this way
const driver = {
  fnName: fnName,
  championships: championships,
  //sayNumberOfWins: sayNumberOfWins,
};

const anotherDriver = {
  fnName,
  championships,
  sayNumberOfWins() {
    console.log(71);
  },
};

// above both objects return in the same way

console.log(driver);
console.log(anotherDriver);
