const amount = 1000; // number
const name = "Michael"; // string
const isDocent = true; // boolean

if (isDocent) {
  console.log(name + " is een docent");
  console.log(`${name} is een docent`);
} else {
  console.log(name + " is geen docent");
  console.log(`${name} is geen docent`);
}

if (isDocent && name === "Michael") {
  console.log(`${name} is docent Programming 1`);
} else {
  console.log(`${name} is geen docent of geen docent Programming 1`);
}

if (isDocent) {
  if (name === "Michael") {
    console.log(`${name} is docent Programming 1`);
  } else {
    console.log(`${name} is docent van een ander vak`);
  }
} else {
  console.log(`${name} is geen docent`);
}
