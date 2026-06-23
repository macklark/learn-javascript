const array = [1, 2, 3, 4, 5];

const driver = {
  name: "Max",
  team: "ORRB",
  metrics: {
    wins: 71,
    championships: 4,
    poles: 48,
  },
};

// Indexing multiple elements of a array at a time
const [first, second] = array;

function addAndMultiply(a, b) {
  return [a + b, a * b];
}

// If the return type is a array, and know the position of the return element we can destructure the return elements
const [sum, product] = addAndMultiply(2, 3);

// The same can be applied to a object, but the convention is {} instead of []
const { name, team } = driver;

// can add alias in this way
// can also perform nested destructuring as follows
// and default values as well
const {
  name: firstName,
  team: teamName,
  metrics: { wins, championships, poles = 47 },
} = driver;

// EXERCISE
function convertFullNametoFirstAndLast(fullName) {
  const [fnName, lnName] = fullName.split(" ");
  return {
    returnArray: [fnName, lnName],
    returnObject: {
      fnName,
      lnName,
    },
  };
}

const { returnArray, returnObject } =
  convertFullNametoFirstAndLast("Max Verstappen");

function subtractAndDivide({ numOne = 15, numTwo = 5 }) {
  return [numOne - numTwo, numOne / numTwo];
}

const [subtract, divide] = subtractAndDivide({ numOne: 4, numTwo: 2 });

console.log(first, second);
console.log(sum, product);
console.log(firstName, teamName);
console.log(wins, championships, poles);
console.log(returnArray);
console.log(returnObject);
console.log(subtract);
console.log(divide);
