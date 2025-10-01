const str2 = "don't know why";

let hasW = false;

for (char of str2) {
  if (char.toLowerCase() === "w") {
    hasW = true;
  }
}

console.log(hasW ? "Ja" : "Nee");

/*if (hasW) {
  console.log("Ja");
} else {
  console.log("Nee");
}*/
