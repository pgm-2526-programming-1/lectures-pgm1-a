// we hebben meerdere variabelen over één iets -> omslachtige manier
const name = "GTA V"; // string
const publisher = "Rockstar"; // string
const releaseYear = 2013; // number
const characters = ["Michael", "Trevor", "Franklin"]; // array
const isViolent = true; // boolean

// leeg object
const object = {};

// betere manier -> object
const game = {
  name: "GTA V",
  publisher: "Rockstar",
  releaseYear: 2013,
  characters: ["Michael", "Trevor", "Franklin"],
  isViolent: true,
};

console.log(game);
console.log(game.name);
console.log(game.publisher);
console.log(game.releaseYear);

console.log(`Het spel ${game.name} is uitgebracht in ${game.releaseYear} door ${game.publisher}`);

// we willen op game nu ook de leeftijds rating zetten (property toevoegen)
game.ageRestriction = 16;
console.log(game);
// property aanpassen
game.publisher = "Rockstar Games";
console.log(game);

// name van game naar console -> 2 manieren
console.log(game.name);
console.log(game["name"]);

// for IN (niet for OF)
for (const prop in game) {
  console.log(prop);
  console.log(game[prop]);
}

// object in object
const club = {
  name: "Club Brugge KV",
  stadium: {
    name: "Jan Breydelstadion",
    street: "Koning Leopold III-laan 50",
    postalCode: "8200",
    city: "Brugge",
  },
};

console.log(club.stadium.name); // Jan Breydelstadion
