function naamFunctie(argument1, argument2 = 20) {
  console.log("Hallo");
  console.log("Argument 1: " + argument1);
  console.log("Argument 2: " + argument2);
}

naamFunctie(10);
naamFunctie(10, 30);

/* ***************************************
 * Originele manier (function)
 *****************************************/
// 1: Een functie die iets uitvoert
function doSomething() {
  console.log("Ik ben een functie die iets uitvoert");
}
const result = doSomething();
console.log(result); // undefined -> nutteloos

// 2: Een functie die iets berekend, iets samenstelt, ...
function getSomething() {
  return "Ik ben een functie die iets terug geeft";
}
const result2 = getSomething();
console.log(result2);

function getEmoji(name) {
  if (!name) {
    return "Geen naam mee gegeven";
  }

  if (name === "vuur") {
    return "🔥";
  } else if (name === "computer") {
    return "💻";
  } else {
    return "❓";
  }
}

console.log(getEmoji());
console.log(getEmoji("vuur"));
console.log(getEmoji("computer"));
console.log(getEmoji("onbekend"));

/* ***************************************
 * Modernere manier (arrow function)
 *****************************************/
// 1: Een functie die iets uitvoert
const doSomethingArrow = () => {
  console.log("Ik ben een functie die iets uitvoert");
};
// 2: Een functie die iets berekend, iets samenstelt, ...
const getSomethingArrow = () => {
  return "Ik ben een functie die iets terug geeft";
};
// 2.1: Kortere versie om iets terug te geven (geen brackets!)
const getSomethingArrowShort = () => "Ik ben een functie die iets terug geeft";
