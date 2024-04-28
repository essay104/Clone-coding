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
const imgs = ["img01.jpg", "img02.jpg", "img03.jpg"];
const slider = document.querySelector(".event-slider");
const img = document.querySelector(".content-img");
const sc0 = document.querySelector("#sc0");
console.log(sc0);

console.log(slider);

titleArrow.addEventListener("click", () => {
  if (!titleArrow.classList.contains("arrowActive")) {
    titleArrow.classList.add("arrowActive");
  } else {
    titleArrow.classList.remove("arrowActive");
  }
});

let imgSrc = `./img/sc01/${imgs[0]}`;
img.src = imgSrc;
sc0.style.background = `url(./img/sc01/${imgs[0]}`;

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
  img.src = `./img/sc01/${imgs[i]}`;
  sc0.style.background = `url(./img/sc01/${imgs[i]})`;
};
