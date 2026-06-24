function greet(
  firstName,
  lastName,
  salutation = "Hey",
  fullName = `${firstName} ${lastName}`,
) {
  console.log(`${salutation}, ${firstName} ${lastName}: ${fullName}`);
}

greet("Ganesh", "Kolavennu", undefined); // Hey, Ganesh Kolavennu
greet("Max", "Verstappen", null); // null, Max Verstappen

// There is a difference between null & undefined
