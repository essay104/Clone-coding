const nav = document.querySelector(".toggle-nav");
const navBar = document.querySelector(".toggle-nav a");
const navBarMenu = document.querySelector(".toggle-nav ul");
const navBarTitle = document.querySelector(".toggle-nav-title");
const navBarAngle = document.querySelector(".fa-angle-down");

navBar.addEventListener("mouseenter", () => {
  console.log("enter");
  navBarMenu.style.display = "block";
  navBarTitle.style.color = "#f47499";
  navBarTitle.style.textDecoration = "underline";
  navBarTitle.style.transition = "all 0.5s";
  navBarAngle.style.transform = "rotate(180deg)";
});

navBarMenu.addEventListener("mouseleave", () => {
  console.log("enter");
  navBarMenu.style.display = "none";
  navBarTitle.style.color = "#000";
  navBarTitle.style.textDecoration = "none";
  navBarAngle.style.transform = "rotate(0deg)";
});

window.addEventListener("click", (e) => {
  if (e.target !== navBarMenu) {
    navBarMenu.style.display = "none";
    navBarTitle.style.color = "#000";
    navBarTitle.style.textDecoration = "none";
    navBarAngle.style.transform = "rotate(0deg)";
  }
});

//slider Event

const slider = document.querySelector(".main-slider-container");
const slides = document.querySelectorAll(".main-slider-container li");
const prev01 = document.querySelector(".prev01");
const next01 = document.querySelector(".next01");

let currentIdx = 0;

const slideWidth = 1160;
const slideMargin = 30;

const cloneSlides = () => {
  for (let i = 0; i < slides.length; i++) {
    let clone = slides[i].cloneNode(true);
    clone.classList.add("clone");
    slider.appendChild(clone);
  }

  for (let i = slides.length - 1; i >= 0; i--) {
    let clone = slides[i].cloneNode(true);
    clone.classList.add("clone");
    slider.prepend(clone);
  }

  sliderWidth();

  setSliderPosition();
};

const sliderWidth = () => {
  let currentSlides = document.querySelectorAll(".main-slider-container li");
  const totalWidth =
    (slideWidth + slideMargin) * currentSlides.length - slideMargin + `px`;

  slider.style.width = totalWidth;
  console.log(totalWidth);
};

const setSliderPosition = () => {
  const setSliderTranslate = -(slideWidth + slideMargin) * slides.length;

  slider.style.transform = `translateX(${setSliderTranslate}px)`;
};

cloneSlides();

next01.addEventListener("click", () => {
  slideEvent(currentIdx + 1);
  console.log(currentIdx);
});

prev01.addEventListener("click", () => {
  slideEvent(currentIdx - 1);
  console.log(currentIdx);
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
};

// sliderIdx Event

const currentIdx01 = document.querySelector(".main-slider-01-currentIdx");
const playBtn01 = document.querySelector(".playBtn");

let num = 0;

next01.addEventListener("click", () => {
  num++;
  if (num >= slides.length) {
    num = 0;
  }
  IdxPlus(num);
});

prev01.addEventListener("click", () => {
  num--;
  if (num <= -1) {
    num = slides.length - 1;
  } else if (num >= slides.length) {
    num = 0;
  }
  IdxPlus(num);
});

const IdxPlus = () => {
  currentIdx01.innerText = `${num + 1}`;
};

//autoSlide Event

const autoSlideEvent = () => {
  timer = setInterval(() => {
    num++;
    if (num >= slides.length + 1) {
      num = 0;
    }
    console.log(num);
    IdxPlus(num);
    slideEvent(num);
  }, 5000);
};

autoSlideEvent();

const stopSlideEvent = () => {
  clearInterval(timer);
};

playBtn01.addEventListener("click", () => {
  if (!playBtn01.classList.contains("stop")) {
    stopSlideEvent();
    playBtn01.classList.add("stop");
  } else {
    playBtn01.classList.remove("stop");
    setTimeout(() => {
      autoSlideEvent();
    }, 5000);
  }
});
