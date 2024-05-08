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

const autoSlider = () => {
  auto = setInterval(sliderChangeEvent, 5000);
};

autoSlider();

const stopSlider = () => {
  clearInterval(auto);
};

const sliderBtns = document.querySelectorAll(".slider-btn");
const autoSliderBtn = document.querySelector(".slider01-button");
const autoSliderBtnIcon = document.querySelector(".slider01-button i");

sliderBtns.forEach((sliderBtn) => {
  sliderBtn.addEventListener("click", () => {
    sliderBtns.forEach((sliderBtn) => {
      sliderBtn.classList.remove("active");
    });
    sliderBtn.classList.add("active");
  });
});

autoSliderBtn.addEventListener("click", () => {
  if (autoSliderBtnIcon.classList.contains("fa-play")) {
    autoSliderBtnIcon.classList.remove("fa-play");
    autoSliderBtnIcon.classList.add("fa-pause");
    stopSlider();
  } else {
    autoSliderBtnIcon.classList.remove("fa-pause");
    autoSliderBtnIcon.classList.add("fa-play");
    autoSlider();
  }
});

const reset = () => {
  sliderBtns.forEach((sliderBtn, idx) => {
    sliderBtns[idx].classList.remove("active");
  });
};

const pagerChange = (e) => {
  const target = e.target.dataset.index;
  console.log("click");
  reset();
  for (let i = 0; i < sliderBtns.length; i++) {
    if (target == i) {
      sliderBtns[i].classList.add("active");
      slider01.src = `/img/events/${slider01Imgs[i]}`;
    }
  }
};

sliderBtns.forEach((sliderBtn) => {
  sliderBtn.addEventListener("click", pagerChange);
});
