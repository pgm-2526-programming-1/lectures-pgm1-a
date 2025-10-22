(() => {
  // date is een moment opname, geen klok
  const date = new Date();
  console.log(date);
  // 1 seconde = 1000 milliseconden

  // todo padStart op alle elementjes
  const text = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}/${date.getFullYear()} ${String(date.getHours()).padStart(
    2,
    "0"
  )}:${date.getMinutes()}:${date.getSeconds()} ${date.getMilliseconds()}`;
  console.log(text);
})();
