// switch statement

const day = 2;

// if - else if met enkel "===" -> we controleren enkel of het exact gelijk is aan
if (day === 1) {
  console.log("Het is maandag");
} else if (day === 2) {
  console.log("Het is dinsdag");
} else if (day === 3) {
  console.log("Het is woensdag");
} else if (day === 4) {
  console.log("Het is donderdag");
} else if (day === 5) {
  console.log("Het is vrijdag");
} else if (day === 6) {
  console.log("Het is zaterdag");
} else if (day === 7) {
  console.log("Het is zondag");
} else {
  console.log("Het getal klopt niet");
}

switch (day) {
  case 1:
    console.log("Het is maandag");
    break;
  case 2:
    console.log("Het is dinsdag");
    break;
  case 3:
    console.log("Het is woensdag");
    break;
  case 4:
    console.log("Het is donderdag");
    break;
  case 5:
    console.log("Het is vrijdag");
    break;
  case 6:
    console.log("Het is zaterdag");
    break;
  case 7:
    console.log("Het is zondag");
    break;
  default: // else
    console.log("Het getal klopt niet");
    break;
}

const dayInWords = "monday";

if (dayInWords === "monday") {
  console.log("Het is maandag");
} else if (dayInWords === "tuesday") {
  console.log("Het is dinsdag");
} else if (dayInWords === "wednesday") {
  console.log("Het is woensdag");
} else {
  console.log("Dag bestaat niet");
}

switch (dayInWords) {
  case "monday":
    console.log("Het is maandag");
    break;
  case "tuesday":
    console.log("Het is dinsdag");
    break;
  case "wednesday":
    console.log("Het is woensdag");
    break;
  default:
    console.log("Dag bestaat niet");
    break;
}
