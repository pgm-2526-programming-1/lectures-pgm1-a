const instruments = ["gitaar", "cello", "drum", "contrabas"];

/*
 * Array functies: te kennen
 */
instruments.push("piano"); // op het einde toevoegen
console.log(instruments);

const text = instruments.join(" ~~~ "); // array omvormen naar een string
console.log(text);

const deleted = instruments.pop(); // laatste item uit een array verwijderen
console.log(instruments);
console.log(deleted);

instruments.shift(); // eerste item uit een array verwijderen
console.log(instruments);

/*
 * Array functies: opzoeken wanneer je ze nodig hebt (maar weten dat het bestaat)
 */
instruments.unshift("mondharmonica"); // item toevoegen aan het begin van de array
console.log(instruments);

instruments.splice(2, 0, "viool"); // voeg toe vanaf index 2
console.log(instruments);

instruments.splice(2, 1); // vanaf index 2 één element verwijderen
console.log(instruments);

const extraInstruments = ["harp", "kazoo"];
// concat voegt samen, maar past originele array niet aan -> nieuwe array als return
const allInstruments = instruments.concat(extraInstruments);
console.log(instruments);
console.log(allInstruments);

const part = instruments.slice(2, 4);
console.log(instruments);
console.log(part);
