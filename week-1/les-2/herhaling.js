const team = "FC Barcelona"; // string
const ranking = 1; // number

console.log(team + " is een voetbalteam");
console.log(`${team} is een voetbalteam`);

const isSpanish = true; // boolean
const isFrench = false; // boolean

// voorbeeld 1
if (isSpanish === true) {
  // alle code die hier komt
  console.log("Dit team is Spaans");
}
// !== wil zeggen "niet gelijk aan"
if (isSpanish !== true) {
  console.log("Dit team is niet Spaans");
}

// voorbeeld 2
if (isSpanish === true) {
  console.log("Dit team is Spaans");
} else {
  console.log("Dit team is niet Spaans");
}
