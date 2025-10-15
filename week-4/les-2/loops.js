// for-loop (met een tellertje)
// waarvoor gebruiken? iets x aantal keer uitvoeren
for (let i = 0; i < 20; i++) {
  console.log(i);
}

// vroeger: arrays met for-loop
const items = ["a", "b", "c"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

console.log("-------------------------------");
function generateRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

// do...while loop -> altijd 1x ongeacht de conditie
let index = 10;
do {
  console.log(index);
  index = index + 1;
} while (index < 5);

// while -> minstens 0x uitgevoerd
while (index < 5) {
  console.log(index);
  index = index + 1;
}

const winningNumber = 20;
let guess = generateRandomNumber(100);
while (guess !== winningNumber) {
  guess = generateRandomNumber(100);
  console.log(guess);
}
