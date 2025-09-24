const score = 70; // score op 100

if (score >= 50) {
  console.log("Je bent geslaagd");
} else {
  console.log("Je bent niet geslaagd");
}

const temperature = 15;
// het is heet, het is warm, het is gemiddeld, het is koud, het vriest
if (temperature >= 25) {
  console.log("Het is heet");
} else if (temperature >= 19) {
  console.log("Het is warm");
} else if (temperature >= 15) {
  console.log("Het is gemiddeld");
} else if (temperature > 0) {
  console.log("Het is koud");
} else {
  console.log("Het vriest");
}
