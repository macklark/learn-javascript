const max = {
  name: undefined,
  //name: "Max Verstappen",
  age: 28,
  address: {
    //city: undefined,
    city: "Monaco",
  },
  // sayHi() {
  //   console.log("Hi !");
  // },
  championships: [2021, 2022, 2023, 2024],
};

function print(person) {
  // if (person && person.name) {
  //   console.log(person.name);
  // }
  console.log(person?.address?.city);
}

function callSayHi(person) {
  person?.sayHi?.();
  console.log(person?.championships?.[0]);
}

print(max);
callSayHi(max);
