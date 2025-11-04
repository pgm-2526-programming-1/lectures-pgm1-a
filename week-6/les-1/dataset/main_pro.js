(() => {
  const $list = document.getElementById("list");
  const $detail = document.getElementById("detail");

  function generateHTMLForTeams(teams) {
    let html = "";
    for (const team of teams) {
      html += `
      <li data-id="${team.id}" class="item">
        <h2>${team.name}</h2>
      </li>
    `;
    }
    return html;
  }

  function generateHTMLForTeamDetail(team) {
    return `
      <h1>${team.name}</h1>
      <p>Komt uit ${team.country}</p>
    `;
  }

  $list.innerHTML = generateHTMLForTeams(teams);

  function setItemListeners() {
    const $items = document.getElementsByClassName("item");
    for (const $item of $items) {
      $item.addEventListener("click", function (e) {
        const id = e.currentTarget.dataset.id;
        for (const team of teams) {
          if (team.id === id) {
            // html zetten met juiste team
            $detail.innerHTML = generateHTMLForTeamDetail(team);
            $detail.classList.add("open");
          }
        }
      });
    }
  }

  setItemListeners();
})();
