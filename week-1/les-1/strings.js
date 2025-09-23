const brand = "BMW";
const model = "M4";
const year = 2010;

// dit is puur strings gebruiken
console.log("Hallo iedereen, ik heb een " + brand + " " + model + " van " + year);
// dit is een template literal
console.log(`Hallo iedereen, ik heb een ${brand} ${model} van ${year}`);

const today = 23;

// TYPES VAN BENAMING
// snake case
const day_of_tomorrow = today + 1;

// kebab case -> gaat niet in JavaScript
// const day-of-tomorrow = today + 1;

// pascal case
const DayOfTomorrow = today + 1;

// camelCase
const dayOfTomorrow = today + 1;

// MATH
const a = 10;
const b = 20;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
