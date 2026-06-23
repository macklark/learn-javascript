// If the number of numbers are not certain, we can use spread operator to accept multiple arguements for a function in array form
function sum(multiplier, ...numbers) {
  return multiplier * numbers.reduce((sum, number) => sum + number, 0);
}

// Generally the spread operator creates a new copy of array
function mergeNumberArrays(numsOne, numsTwo) {
  return [...numsOne, ...numsTwo];
}

const originalArray = [5, 10, 15, 20];
const cloneArray = [...originalArray];

originalArray.push(25);

const driver = {
  name: "Max",
  team: "ORRB",
  metrics: {
    wins: 71,
    championships: 4,
    poles: 48,
  },
};

const { name, team, ...rest } = driver;
const cloneMax = { ...driver };

console.log(sum(2, 3, 6, 7, 9));
console.log(mergeNumberArrays([1, 2, 3], [4, 5, 6]));
console.log(originalArray);
console.log(cloneArray);
console.log(name, team, rest);
console.log(cloneMax);
