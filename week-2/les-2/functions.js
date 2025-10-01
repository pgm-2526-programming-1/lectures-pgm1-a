function sayHello() {
  console.log("Hallo");
}

// uitvoerende functie
function sayHelloTo(name = "Onbekende persoon", age) {
  console.log(`Goeiemorgen ${name} die ${age} jaar oud is`);
}

sayHello();
sayHello();
sayHello();
sayHelloTo("Seppe", 20);
sayHelloTo("Jelle", 21);
sayHelloTo("Khalid", 22);
sayHelloTo();

console.log("==========================");

// return functie -> functie waarvan je resultaat verwacht
function getHelloPhrase(name) {
  // geeft als resultaat de string Goeiemorgen ...
  return `Goeiemorgen ${name} vanuit de return functie`;
}

const text1 = getHelloPhrase("Mustafa");
console.log(text1);

console.log(getHelloPhrase("Serkan"));
console.log(getHelloPhrase("Naomi"));
console.log(getHelloPhrase("Nick"));

function calculateAge(birthYear) {
  const age = 2025 - birthYear;
  return age;
}

console.log(`De leeftijd is ${calculateAge(2006)}`);
console.log(`Een andere leeftijd is ${calculateAge(1983)}`);
console.log(`Mijn leeftijd is ${calculateAge(1992)}`);
