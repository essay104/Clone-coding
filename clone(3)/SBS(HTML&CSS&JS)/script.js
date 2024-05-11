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
const prev01 = document.querySelector(".prev");
const next01 = document.querySelector(".next");

let currentIdx = 0;

const slideWidth = 1140;

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
};

cloneSlides();
