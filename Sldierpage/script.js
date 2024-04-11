const imgs = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg", "img-5.jpg"];

const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");
const slidePagers = document.querySelector(".slider_pagers");
const pagers = document.querySelectorAll(".slide_pagers li");

console.log(pagers);

const img = document.createElement("img");
const src = document.createAttribute("src");

const imgSrc = `./img/${imgs[0]}`;
src.value = imgSrc;
img.setAttributeNode(src);
img.classList.add(".imgStyle");
container.appendChild(img);

let i = 0;

const reset = () => {
  pagers.forEach((pager, idx) => {
    pagers[idx].classList.remove("active");
  });
};

const autoChange = () => {
  i++;
  if (i >= imgs.length) {
    i = 0;
  }
  reset();
  pagers[i].classList.add("active");
  src.value = `./img/${imgs[i]}`;
};

const autoSlider = () => {
  timer = setInterval(() => {
    autoChange();
  }, 5000);
};

autoSlider();

const stopSlider = () => {
  clearInterval(timer);
};

container.addEventListener("mouseenter", () => {
  stopSlider();
});

container.addEventListener("mouseleave", () => {
  autoSlider();
});

const pagerChange = (e) => {
  reset();
  for (let i = 0; i < pagers.length; i++) {
    if (target == i) {
      pagers[i].classList.add("active");
      src.value = `./img/${imgs[i]}`;
    }
  }
};

pagers.forEach((pager) => {
  container.addEventListener("mouseenter", () => {
    pager.classList.remove("active");
  });
  pager.addEventListener("click", pagerChange);
});
