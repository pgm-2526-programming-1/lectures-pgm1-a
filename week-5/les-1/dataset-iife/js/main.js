// IIFE -> I... Invoked Function Expression
(() => {
  const number = 10;

  const $list = document.getElementById("list");

  // de html gaan opbouwen
  let html = "";
  for (const destination of destinations) {
    html += `
      <li class="item">
        <h2>${destination.name} (${destination.country})</h2>
        <p>Continent: ${destination.continent}</p>
      </li>
    `;
  }

  $list.innerHTML = html;
})();
