// aanmaken array
const days = [
  "Maandag", // index 0
  "Dinsdag", // 1
  "Woensdag", // 2
  "Donderdag", // 3
  "Vrijdag", // 4
  "Zaterdag", // 5
  "Zondag", // 6 (7 - 1)
];

const firstDayOfTheWeek = days[0];
console.log(firstDayOfTheWeek);

console.log(days.length); // hoeveel items er in? 7
console.log([2, 3, 5].length); // 3

const lastDayOfTheWeek = days[days.length - 1];
console.log(lastDayOfTheWeek);

// for ... of
for (const day of days) {
  // voer dit stukje code uit voor elk element uit de array
  console.log("het is " + day);
}

const numbers = [3, 40, 29];
let total = 0; // number
for (const number of numbers) {
  // DIT ZAL 3 KEER WORDEN UITGEVOERD
  total = total + number;
  console.log(total);
}
console.log(total);

numbers.push(50);
console.log(numbers);

let total2 = 0;
for (const number of numbers) {
  // DIT ZAL 4 KEER WORDEN UITGEVOERD
  total2 = total2 + number;
  console.log(total2);
}
console.log(total2);
