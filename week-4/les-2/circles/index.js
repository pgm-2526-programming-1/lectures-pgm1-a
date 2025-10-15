const $circles = document.getElementById("circles");

const colors = ["red", "blue", "green", "orange", "purple", "yellow"];

function generateRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

let html = "";
for (let i = 0; i < 1500; i++) {
  const randomWidth = generateRandomNumber(45);
  const randomColor = colors[generateRandomNumber(colors.length - 1)];
  const randomTop = generateRandomNumber(window.innerHeight - randomWidth);
  const randomLeft = generateRandomNumber(window.innerWidth - randomWidth);

  html += `<div 
              class='circle' 
              style='top: ${randomTop}px; 
                      left: ${randomLeft}px;  
                      width: ${randomWidth}px; 
                      height: ${randomWidth}px;
                      animation-delay: -${Math.random()}s;
                      background-color: ${randomColor};'>
            </div>`;
}

console.log(html);

$circles.innerHTML = html;
