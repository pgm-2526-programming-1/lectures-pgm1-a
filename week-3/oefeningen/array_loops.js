const players = ["Eden Hazard", "Kevin De Bruyne", "Romelu Lukaku", "Thibault Courtois", "Dries Mertens"];

console.log(players);

let tempStr = "";

players.forEach(function (player) {
  tempStr += player + " - ";
});
console.log(tempStr);

// leeg maken
tempStr = "";

for (const player of players) {
  tempStr += player + " - ";
}
console.log(tempStr);
