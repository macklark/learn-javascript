// It's mapping from one value to another value

const currencyMap = {
  USA: "USD",
  India: "rupee",
};

console.log(currencyMap["USA"]);

const currencies = [
  { name: "USD", country: "USA" },
  { name: "rupee", country: "India" },
];

const currency = currencies.find((c) => c.country === "India").name;

console.log(currency);

// The difference between a object and a map is that we can use anything as a key, not just strings
const map = new Map([
  ["United States", "USD"],
  ["India", "rupee"],
  [false, "euro"],
  [{"country": "china"}, "yuan"]
])

// In a map the order is accounted for, unlike objects
const numberMap = new Map([
  [1, 'A'],
  [2, 'B'],
  [3, 'C'],
  [4, 'D']
])

// console.log(map)

console.log(numberMap)

// Looping through a map is more convenient then a normal object
numberMap.forEach((value, key) => {
  console.log(value, key)
})

console.log(numberMap.size)

map.set(5, 'E')

map.delete(5)

console.log(map)

console.log(map.get(5))

console.log(map.has(7))

// This is more tuffer with a normal object

const object = {
  '1': 'a',
  '2': 'b',
  '3': 'c'
}

let size = 0

// We have to use Object instance, then entries method will accept a parameter of object...
Object.entries(object).forEach(([key, value]) => {
  size++
  console.log(key, value)
})

console.log(size)

const items = new Map([
  [1, { id: '1', title: 'titleOne', description: 'descOne' }],
  [2, { id: '2', title: 'titleTwo', description: 'descTwo' }],
  [3, {id: '3', title: 'titleThree', description: 'descThree'}]
])

function getItem(id) {
  return items.get(id)
}

console.log(getItem(2))
