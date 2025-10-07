const dogBreeds = ["Teckel", "Labrador", "Golden Retriever", "Windhond"];

// wat is het item op index 1?
console.log(dogBreeds[1]);

// omgekeerd -> wat is de index van Labrador?
const index = dogBreeds.indexOf("Labrador");
console.log(index); // 1
console.log(dogBreeds.indexOf("Windhond")); // 3
console.log(dogBreeds.indexOf("Rotweiler")); // -1

// we weten dat een onbekend item -1 terug geeft
// zo kunnen we controleren of een item in een array bestaat
if (dogBreeds.indexOf("Rotweiler") >= 0) {
  console.log("De array bevat rotweiler");
} else {
  console.log("De array bevat NIET het item rotweiler");
}

// er is ook een kortere manier om te kijken of een item in array bestaat
// includes -> geeft true of false terug
if (dogBreeds.includes("Rotweiler")) {
  console.log("De array bevat rotweiler");
} else {
  console.log("De array bevat NIET het item rotweiler");
}

// includes bestaat ook voor een string
const sentence = "Goeiemorgen 1PGMa in lokaal H0.12";
console.log(sentence.includes("in")); // true
console.log(sentence.includes("lokaal")); // true
console.log(sentence.includes("paddestoel")); // false
console.log(sentence.includes("goeiemorgen")); // false (hoofdletter!)
console.log(sentence.includes("Goeiemorgen")); // true (hoofdletter!)
console.log(sentence.toLowerCase());
console.log(sentence.toLowerCase().includes("goeiemorgen")); // true
