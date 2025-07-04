
const images = [
    "https://t4.ftcdn.net/jpg/05/67/93/65/240_F_567936543_WvrDVoOYaxjtAOnXxrPgtIWeHOsCmyq4.jpg",
    "https://t3.ftcdn.net/jpg/05/74/18/34/240_F_574183420_pc0caByueQA0QjQMsJr0lY5txOaQoBmo.jpg",
    "https://t4.ftcdn.net/jpg/11/11/53/09/240_F_1111530935_PuXGtqBJQZMK69kxnQ81ZWqcU7NJvzds.jpg",
    "https://t4.ftcdn.net/jpg/05/67/93/65/240_F_567936543_WvrDVoOYaxjtAOnXxrPgtIWeHOsCmyq4.jpg",
    "https://t3.ftcdn.net/jpg/11/41/49/08/240_F_1141490828_pNlOfrChoaXusZLJ1TvNidB9KCAz4WEw.jpg"
  ];

  const dots = document.querySelectorAll('.carousel-dots .dot');
  const img = document.getElementById("solution-img");
  let currentImg = 0;

  function updateDots(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
  updateDots(currentImg);

  setInterval(() => {
    currentImg = (currentImg + 1) % images.length;
    img.src = images[currentImg];
    updateDots(currentImg);
  }, 3000);




