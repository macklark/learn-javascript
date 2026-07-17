// Sets are always guranteed to have unique elements inside them
// The same can also be achieved with a normal array but the implementation would be little difficult

const list = [1, 2, 3, 4, 5]
const newNumber = 4

if (!list.includes(newNumber)) {
  list.add(newNumber)
}

console.log(list)

const set = new Set([1, 2, 3, 4, 5])

console.log(set)

const duplicateSet = new Set([1, 2, 2, 2, 3, 4, 5])

duplicateSet.add(6)

console.log(duplicateSet)

// Generally we cannot get a value in a set through indexing, because knowing the value is present in a set is good enough
console.log(duplicateSet.has(6)) // log true

duplicateSet.delete(6) // yup, as expected this removes a elemnt from a array based upon the value to be removed

console.log(duplicateSet)

console.log(duplicateSet.size) // logs out the size of a set

function removeDuplicate(array) {
  return new Set(array)
}

console.log(removeDuplicate([1, 2, 3, 4, 3, 2, 5]))
