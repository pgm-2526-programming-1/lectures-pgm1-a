const year = 2025;
let isLeapYear = false;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = true;
  }
}

// kortere versie
if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 400 === 0)) {
  isLeapYear = true;
}

if (isLeapYear) {
  console.log(`${year} is een schrikkeljaar`);
} else {
  console.log(`${year} is geen schrikkeljaar`);
}

// korte if
console.log(`Het jaar ${year} is ${isLeapYear ? "een schrikkeljaar" : "geen schrikkeljaar"}`);
