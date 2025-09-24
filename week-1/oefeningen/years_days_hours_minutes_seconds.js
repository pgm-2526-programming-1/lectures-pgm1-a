const timeInSeconds = 99876;

const secondsInYear = 365 * 24 * 60 * 60;
const years = Math.floor(timeInSeconds / secondsInYear);
let remainingSeconds = timeInSeconds % secondsInYear;

const secondsInDays = 24 * 60 * 60;
const days = Math.floor(remainingSeconds / secondsInDays);
remainingSeconds = remainingSeconds % secondsInDays;

const secondsInHours = 60 * 60;
const hours = Math.floor(remainingSeconds / secondsInHours);
remainingSeconds = remainingSeconds % secondsInHours;

const secondsInMinutes = 60;
const minutes = Math.floor(remainingSeconds / secondsInMinutes);
remainingSeconds = remainingSeconds % secondsInMinutes;

console.log(`
=====================================================================
Amount of seconds to convert = ${timeInSeconds}
=====================================================================
${timeInSeconds} seconds = ${years}years ${days}days ${hours}hours ${minutes}minutes ${remainingSeconds}seconds
=====================================================================
`);
