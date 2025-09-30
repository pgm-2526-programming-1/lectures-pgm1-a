const team1 = "Brazilië";
const team2 = "Nederland";
const team3 = "Marokko";
const team4 = "Frankrijk";
const team5 = "België";
const team6 = "Spanje";
const team7 = "Italië";
const team8 = "Kroatië";

console.log(`${team1} neemt deel aan het WK`);
console.log(`${team2} neemt deel aan het WK`);
console.log(`${team3} neemt deel aan het WK`);
console.log(`${team4} neemt deel aan het WK`);
console.log(`${team5} neemt deel aan het WK`);
console.log(`${team6} neemt deel aan het WK`);
console.log(`${team7} neemt deel aan het WK`);
console.log(`${team8} neemt deel aan het WK`);

console.log("=======================================");

// array
// zero index based
const teams = [
  "Brazilië", // 0
  "Nederland", // 1
  "Marokko", // 2
  "Frankrijk", // 3
  "België", // 4
  "Spanje", // 5
  "Italië", // 6
]; // array

console.log(`${teams[0]} neemt deel aan het WK`);
console.log(`${teams[1]} neemt deel aan het WK`);
console.log(`${teams[2]} neemt deel aan het WK`);
console.log(`${teams[3]} neemt deel aan het WK`);
console.log(`${teams[4]} neemt deel aan het WK`);
console.log(`${teams[5]} neemt deel aan het WK`);
console.log(`${teams[6]} neemt deel aan het WK`);

console.log("===================================");

// item toevoegen (super onhandig)
teams[7] = "Kroatië";
// andere (betere manier) om een item toe te voegen (achteraan aan de lijst)
teams.push("Rwanda");

console.log(teams);

// array loopen
// for...of loop
for (const team of teams) {
  // dit stukje code -> zoveel keer herhaald worden voor elk team
  console.log(`${team} neemt deel aan het WK`);
}
