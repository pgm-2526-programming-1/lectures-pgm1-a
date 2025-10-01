const groceries = ["brood", "appels", "melk", "koekjes", "Chocomel"]; // array
// mag alle datatypes door elkaar zijn
const items = [true, "brood", 30, "appels"];

// length
console.log(groceries.length);
console.log(groceries[groceries.length - 1]);

// push
groceries.push("eieren");
console.log(groceries.length);
console.log(groceries[groceries.length - 1]);
console.log(groceries);

groceries[0] = "volkoren brood";
console.log(groceries);

let text = "";
for (const grocery of groceries) {
  // text += `• ${grocery}\n`;
  text = text + `• ${grocery}\n`; // \n is een enter
}

console.log(`
Boodschappenlijst:
${text}
`);

// join -> van een array naar een string
// groceries zelf is niet aangepast, nog steeds een array
// resultaat is een string
const joined = groceries.join(" - ");
console.log(joined);

// split -> van een string naar een array
const date = "01/10/2025";
const array = date.split("/");
console.log(array);
