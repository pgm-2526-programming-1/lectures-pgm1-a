(() => {
  const $btn = document.getElementById("btn-toggle");
  const $circle = document.getElementById("circle");

  $btn.addEventListener("click", function (e) {
    /*if ($circle.classList.contains("alternative")) {
      $circle.classList.remove("alternative");
    } else {
      $circle.classList.add("alternative");
    }*/

    $circle.classList.toggle("alternative");
  });
})();
