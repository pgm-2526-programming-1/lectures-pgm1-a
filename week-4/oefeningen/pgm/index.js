const $students = document.getElementById("students");

const students = [
  {
    firstName: "Bas",
    name: "De Ruyter",
    email: "bas.dr@dr.be",
    image: "loyle.webp",
  },
  {
    firstName: "Greg",
    name: "Keymolen",
    email: "greg@greg.bee",
    image: "giraf.jpg",
  },
  {
    firstName: "Yens",
    name: "Van Voren",
    email: "yens@vv.be",
    image: "pokemon.jpg",
  },
];

function convertStudentToHTMLString(student) {
  return `
    <li class="item">
      <h2>${student.firstName} ${student.name}</h2>
      <a href="mailto:${student.email}">${student.email}</a>
      <image src="images/${student.image}" alt="${student.firstName} ${student.name}" />
    </li>
  `;
}

let html = "";
for (const student of students) {
  html += convertStudentToHTMLString(student);
}
$students.innerHTML = html;
