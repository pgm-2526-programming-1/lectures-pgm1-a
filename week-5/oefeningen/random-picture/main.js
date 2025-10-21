(() => {
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const images = [
    "images/test.png",
    "https://miro.medium.com/max/700/1*ev7PO4Oq0zUc98H6epI4uw.jpeg",
    "https://miro.medium.com/max/700/1*f1YhaSL3mEABO6ZM8dCfZw.jpeg",
    "https://miro.medium.com/max/700/1*56Bv4MGd4QIKUBl43YkxPQ.jpeg",
    "https://miro.medium.com/max/700/1*WrXHQXrns2t6PI_3iyvHug.jpeg",
  ];
  const $btn = document.getElementById("btn");

  $btn.addEventListener("click", function (e) {
    const url = images[generateRandomNumber(0, images.length - 1)];
    console.log(url);

    document.body.style.backgroundImage = `url(${url})`;
  });
})();
