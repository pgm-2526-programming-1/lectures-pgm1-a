const ageRanges = [
  "7 tot 11", // 0
  "11 tot 15", // 1
  "15 - 18", // 2
  "18 - 23", // 3
  "23 - 28", // 4
  "28 - 36", // 5
  "36 - 50", // 6
  "50 - 64", // 7
  "64 - 80", // 8
];
const subjects = ["pruiken", "nagels", "aquariums", "mondmaskers", "sneakers", "gepersonaliseerd wc-papier"];

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateMatch() {
  const randomAge = ageRanges[generateRandomNumber(0, ageRanges.length - 1)];
  const randomSubject = subjects[generateRandomNumber(0, subjects.length - 1)];
  return `Maak een webshop voor ${randomAge} jarigen waar ze ${randomSubject} verkopen.`;
}

// test output
console.log(generateMatch());
console.log(generateMatch());
console.log(generateMatch());
