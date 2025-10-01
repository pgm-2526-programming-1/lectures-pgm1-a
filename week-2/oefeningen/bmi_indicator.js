const length = 1.72;
const weight = 100;

const bmi = Math.floor(weight / (length * length));

let text = `Je hebt een bmi van ${bmi}.`;
if (bmi <= 18.5) {
  text += " Je hebt ondergewicht";
} else if (bmi < 25) {
  text += " Je hebt het aanbevolen gewicht";
} else if (bmi <= 30) {
  text += " Je hebt overgewicht";
} else {
  text += " Je bent zwaarlijvig";
}

console.log(text);
