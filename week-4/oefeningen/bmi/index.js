const length = parseFloat(window.prompt("Geef je lengte in (in m)"));
const weight = parseFloat(window.prompt("Geef je gewicht in (in kg)"));

function calculateBMI(l, w) {
  return w / (l * l);
}

const bmi = calculateBMI(length, weight);

function bmiToString(bmi) {
  if (bmi < 18.5) {
    return "ondergewicht";
  } else if (bmi > 25) {
    return "overgewicht";
  } else {
    return "een gezond gewicht";
  }
}

window.alert(bmiToString(bmi));
