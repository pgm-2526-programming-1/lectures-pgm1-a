(() => {
  const $title = document.getElementById("title");

  // setTimeout -> in de toekomst iets 1x uit te voeren
  setTimeout(function () {
    $title.innerText = "Ik ben vervangen";
  }, 2000); // 2000 miliseconden = 2 seconden

  // setInterval -> in de toekomst om de x seconden iets uit te voeren (oneindig)
  setInterval(function () {
    console.log("Hallo");
  }, 1000);

  const $name = document.getElementById("name");
  const students = ["Greg", "Jelle", "Bas", "Seppe", "Nick"];
  const intervalId = setInterval(function () {
    const student = students.pop();
    console.log("test");

    if (student) {
      $name.innerText = student;
    } else {
      // interval stoppen wanneer er geen namen meer zijn
      clearInterval(intervalId);
    }
  }, 1000);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const $circle = document.getElementById("circle");
  const colors = ["#b4b443", "orange", "#9847ee", "red", "green", "#23eeee", "#fafafa", "#a45837"];
  let index = 0;
  setInterval(() => {
    const size = generateRandomNumber(50, 80);
    // ook arrow functie kan
    $circle.style.width = size + "vw";
    $circle.style.height = size + "vw";
    $circle.style.backgroundColor = colors[index];
    index = index + 1 >= colors.length ? 0 : index + 1;
  }, 2000);
})();
