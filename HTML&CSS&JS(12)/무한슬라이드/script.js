const slider = document.querySelector(".slides");
const slides = document.querySelectorAll(".slides li");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgs = [
  "img01.jpg",
  "img02.jpg",
  "img03.jpg",
  "img04.jpg",
  "img05.jpg",
];
const bg = document.querySelector(".wrap");
const spinner = document.querySelector(".hidden_spinner");

bg.style.backgroundImage = `url(./imgs/${imgs[1]})`;

let currentIdx = 0;

const slideWidth = 200;
const slideMargin = 30;

const dummySlide = () => {
  for (let i = 0; i < slides.length; i++) {
    let dummy = slides[i].cloneNode(true);
    dummy.classList.add("dummy");
    slider.appendChild(dummy);
  }

  for (let i = slides.length - 1; i >= 0; i--) {
    let dummy = slides[i].cloneNode(true);
    dummy.classList.add("dummy");
    slider.prepend(dummy);
  }

  slidesWidth();

  setSliderPosition();

  setTimeout(() => {
    time = slider.classList.add("animated");
  }, 100);
};

const slidesWidth = () => {
  let currentSlides = document.querySelectorAll(".slides li");
  const totalWidth =
    (slideWidth + slideMargin) * currentSlides.length - slideMargin + `px`;

  slider.style.width = totalWidth;
  console.log(totalWidth);
};

const setSliderPosition = () => {
  const setSliderTranslateX = -(slideWidth + slideMargin) * slides.length;

  slider.style.transform = `translateX(${setSliderTranslateX}px)`;
};

dummySlide();

next.addEventListener("click", () => {
  setTimeout(() => {
    slideEvent(currentIdx + 1);
  }, 300);
  changeBg(next);
  showSpinner();
  setTimeout(() => {
    hiddenSpinner();
  }, 500);
});

prev.addEventListener("click", () => {
  setTimeout(() => {
    slideEvent(currentIdx - 1);
  });
  changeBg(prev);
  showSpinner();
  setTimeout(() => {
    hiddenSpinner();
  }, 500);
});

const slideEvent = (num) => {
  currentIdx = num;
  slider.style.left = -num * (slideWidth + slideMargin) + `px`;
  if (currentIdx == slides.length || currentIdx == -slides.length) {
    setTimeout(() => {
      slider.classList.remove("animated");
      slider.style.left = `0px`;
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slider.classList.add("animated");
    }, 600);
  }
  // if (currentIdx == 5 || currentIdx == -5) {
  //   bg.style.backgroundImage = `url(./imgs/${imgs[1]})`;
  // } else if (currentIdx !== 5) {
  //   bg.style.backgroundImage = `url(./imgs/${imgs[currentIdx + 1]})`;
  // }
};

const changeBg = (e) => {
  let i = 1;
  if (e === "next") {
    i++;
    // i += 1;
    if (i >= imgs.length) {
      i = 0;
    }
  } else if (e === "prev") {
    i--;
    // i -= 1;
    if (i < 0) {
      i = imgs.length - 1;
    }
  }
  console.log({ i });
  bg.style.backgroundImage = `url(./imgs/${imgs[i]})`;
};

//spinner

const showSpinner = () => {
  spinner.classList.add("show");
};

const hiddenSpinner = () => {
  spinner.classList.remove("show");
};
