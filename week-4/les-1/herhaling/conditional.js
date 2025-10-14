// condities
console.log(10 > 2); // true
console.log(10 >= 2); // true
console.log(10 < 2); // false
console.log(10 <= 2); // false
console.log(10 === 10); // true
console.log(10 !== 10); // false

const result = 10 > 2;
console.log(`De waarde is ${result}`);

const name = "Michael";
console.log(name === "Michael"); // true
console.log(name !== "Michael"); // false
console.log("Michael" === "Michiel"); // false

const isTuesday = true; // boolean
console.log(isTuesday);

if (isTuesday) {
  console.log("Het is dinsdag");
} else {
  console.log("Het is niet dinsdag");
}

console.log("--------------------------------");

// Michael gaat vandaag naar de zee indien het zaterdag is EN de temperatuur meer dan 25° is
const day = "zaterdag";
const temperature = 26;

console.log(day === "zaterdag");
console.log(temperature > 25);

// && = EN
if (day === "zaterdag" && temperature > 25) {
  console.log("Michael gaat naar de zee!");
} else {
  console.log("Michael gaan niet naar de zee :(");
}

console.log(day === "zondag"); // false
console.log(temperature > 25); // true

// Khalid wil naar de zee indien het of zondag is of het is een andere dag en meer dan 25 graden
// || = OF
if (day === "zondag" || temperature > 25) {
  console.log("Khalid gaat naar de zee");
} else {
  console.log("Khalid gaat niet naar de zee");
}
