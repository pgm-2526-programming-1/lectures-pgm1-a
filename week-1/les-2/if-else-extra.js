const currentCourse = "Web 1";

if (currentCourse === "Programming 1") {
  console.log("Het vak nu is Programming 1");
} else {
  console.log("Het vak nu is NIET Programming 1, maar " + currentCourse);
}

console.log(currentCourse);
console.log(currentCourse === "Programming 1");
console.log(3 > 2);

const age = 20;
const hasLicense = false;

if (age >= 18 && hasLicense === true) {
  // && = EN
  console.log("Deze persoon mag met de auto rijden");
} else {
  console.log("Deze persoon mag NIET met de auto rijden");
}

if (age >= 18 || hasLicense === true) {
  // || = OF
  console.log("Deze persoon mag misschien met de auto rijden, we zijn niet zeker");
} else {
  // geen van beide geeft true
  console.log("Deze persoon mag NIET met de auto rijden");
}
