const array = [1, 2, 3, 4, 5];

const driver = {
  name: "Max",
  team: "ORRB",
  metrics: {
    wins: 71,
    championships: 4,
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
const { name: firstName, team: teamName, metrics } = driver;

console.log(first, second);
console.log(sum, product);
console.log(firstName, teamName);
console.log(metrics);
