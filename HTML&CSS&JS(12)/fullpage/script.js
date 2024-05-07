new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  waterEffect: true,
  controlArrows: true,
  anchors: ["firstPage", "secondPage", "thirdPage"],
});

const titleArrow = document.querySelector("#nav-icon");
const arrows = document.querySelectorAll(".arrow");
const sliders = document.querySelectorAll(".event-slider");
const img = document.querySelector(".content-img");
const sections = ["sc0", "sc1", "sc2", "sc3"];
const imgs = ["img01.jpg", "img02.jpg", "img03.jpg"];
const sc0 = document.querySelector("#sc0");
const sc1 = document.querySelector("#sc1");
const arrowsNumbers = document.querySelectorAll(".arrowsNumber");

console.log(arrows);

titleArrow.addEventListener("click", () => {
  if (!titleArrow.classList.contains("arrowActive")) {
    titleArrow.classList.add("arrowActive");
  } else {
    titleArrow.classList.remove("arrowActive");
  }
});

const src = document.createAttribute("src");
src.value = `./img/sc0/${imgs[0]}`;

let imgSrc = `./img/sc0/${imgs[0]}`;

img.src = imgSrc;
sc0.style.backgroundImage = `url(./img/sc0/${imgs[0]}`;
sc1.style.backgroundImage = `url(./img/sc1/${imgs[0]}`;

let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const direction = e.target.id === "left" ? "prev" : "next";
    changeImg(direction);
  });
});

changeImg = (direction) => {
  console.log("click");
  if (direction === "next") {
    i++;
    if (i >= imgs.length) {
      i = 0;
    }
  } else if (direction === "prev") {
    i--;
    if (i < 0) {
      i = img.length - 1;
    }
  }

  imgSrc = `./img/sc0/${imgs[i]}`;

  sc0.style.backgroundImage = `url(./img/sc0/${imgs[0]}`;
  sc1.style.backgroundImage = `url(./img/sc1/${imgs[0]}`;
};
