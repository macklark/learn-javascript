function greet(firstName, lastName) {
  // The null colescing operator makes sure that if a value passed to it is falsy then default values is being used
  // The variable on the left side of the operator is being acessed, while the value on the right is the default value if the variable on the left is falsy
  lastName = lastName ?? "Kolavennu";
  console.log(`${firstName} ${lastName}`);
}

greet("Ganesh", 0);
greet("Ganesh", undefined);
greet("Ganesh", null);
greet("Ganesh", "");

console.log(undefined ?? (false && (false || true))); // false

// Maybe safari browser does not support this null coalescing operator
