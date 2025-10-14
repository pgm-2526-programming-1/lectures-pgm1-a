// console log dient enkel voor onszelf als developer
console.log("Hallo iedereen");
console.log("Nog een log");

console.log(window.innerHeight);
console.log(window.innerWidth);

// backgroundColor aanpassen puur om te tonen, gebruik CSS
document.body.style.backgroundColor = "#ff33aa";

// html aanpassen
// via tag -> gaan we niet zo veel doen
const $h1 = document.getElementsByTagName("h1")[0];
$h1.innerText = "Dit is mijn nieuwe titel";

// via className -> enkel indien er meerdere zijn (meerdere tegelijk ophalen)
document.getElementsByClassName("heading")[0].innerText = "Nog een andere titel";

const $elements = document.getElementsByClassName("test");
if ($elements.length > 0) {
  $elements[0].innerText = "Hallo";
}

// via id -> beste manier
const $title = document.getElementById("title");
$title.innerText = "Dit hebben we gisteren gegeten:";
$title.style.fontSize = "3.5rem";
$title.style.color = "#ffffff";

// array naar HTML
const items = [
  "chicken samurai",
  "pizza",
  "lasagne",
  "stoofvlees",
  "aardappelen met hamburger",
  "aardappelen met fishsticks",
];

const $list = document.getElementById("list");
if ($list !== null) {
  let html = "";
  for (const item of items) {
    html += `<li class="list-item">${item}</li>`;
  }

  $list.innerHTML = html;
}
