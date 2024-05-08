const aDeco = document.querySelectorAll("a");
const headerToggle = document.querySelector(".header-toggle");
const headerBottomA = document.querySelectorAll(".headerBottom a");
const headerTop = document.querySelector(".headerTop");
const headerBottom = document.querySelector(".headerBottom");
const slider01 = document.querySelector(".slider-img img");

console.log(slider01);

const slider01Imgs = [
  "img01.jpg",
  "img02.jpg",
  "img03.jpg",
  "img04.jpg",
  "img05.jpg",
];

console.log(slider01Imgs);

// a태그에 mousehover했을때 스타일이 변하는 이벤트

aDeco.forEach((a) => {
  if (a.innerText != "Login") {
    a.addEventListener("mouseover", () => {
      a.style.color = "#f26b24";
      a.style.textDecoration = "underline";
    });
    a.addEventListener("mouseleave", () => {
      a.style = "";
    });
  }
});

//toggle button 출현 이벤트

headerBottomA.forEach((a) => {
  a.addEventListener("mouseover", () => {
    headerToggle.classList.add("toggle");
    // headerToggle.style.height = "150px";
  });
  // a.addEventListener("mouseleave", () => {
  //   headerToggle.classList.remove("toggle");
  // });
});

// headerToggle.addEventListener("mouseleave", () => {
//   headerToggle.classList.toggle("toggle");
// });
// headerTop.addEventListener("mouseover", () => {
//   headerToggle.classList.toggle("toggle");
// });

//slider01 Events

slider01.src = `/img/events/${slider01Imgs[0]}`;

i = 0;

const sliderChangeEvent = () => {
  slider01.src = `/img/events/${slider01Imgs[i]}`;
  i++;
  if (i >= slider01Imgs.length) {
    i = 0;
  }
};

setInterval(sliderChangeEvent, 3000);

const sliderBtns = document.querySelectorAll(".slider-btn");

sliderBtns.forEach((sliderBtn, idx) => {
  sliderBtn.addEventListener("click", () => {
    sliderBtns.forEach((sliderBtn) => {
      sliderBtn.classList.remove("active");
    });
    sliderBtn.classList.add("active");
  });
});
