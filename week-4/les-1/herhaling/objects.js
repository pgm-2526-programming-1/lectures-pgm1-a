const person = {
  name: "Greg",
  age: 20,
  address: "Straat 19",
  postalCode: "1000",
  city: "Brussel",
};

console.log(person.name + " woont in " + person.city);
console.log(`${person.name} woont in ${person.city}`);

// Greg verhuisd
person.city = "Antwerpen";

console.log(`${person.name} woont in ${person.city}`);
