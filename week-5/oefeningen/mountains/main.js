(() => {
  const mountains = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" },
  ];

  let highest = 0;
  for (const mountain of mountains) {
    if (mountain.height > highest) {
      highest = mountain.height;
    }
  }

  const $container = document.getElementById("container");

  let html = "";
  for (const mountain of mountains) {
    html += `
    <li class="mountain" style="height: ${(mountain.height / highest) * 100}%;">${mountain.name}</li>
  `;
  }

  $container.innerHTML = html;
})();
