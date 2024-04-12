const imgs = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg", "img-5.jpg"];
//이미지 파일을 배열로 가져오기

const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");
const slidePagers = document.querySelector(".slider_pagers");
const pagers = document.querySelectorAll(".slide_pagers li");
//DOM에서 필요한 요소 가져오기

const img = document.createElement("img");
const src = document.createAttribute("src");

const imgSrc = `./img/${imgs[0]}`;
src.value = imgSrc;
img.setAttributeNode(src);
img.classList.add(".imgStyle");
container.appendChild(img);
//이미지 태그와 속성을 만들고 스타일을 부여한뒤 배치

let i = 0;
//초기값을 0으로

const reset = () => {
  pagers.forEach((pager, idx) => {
    pagers[idx].classList.remove("active");
  });
};
//클래스를 제거하는 리셋함수

const autoChange = () => {
  i++;
  if (i >= imgs.length) {
    i = 0;
  }
  reset();
  pagers[i].classList.add("active");
  src.value = `./img/${imgs[i]}`;
};
//i가 이미지의 전체 수 이상이 될때까지 증감연산자 적용

const autoSlider = () => {
  timer = setInterval(() => {
    autoChange();
  }, 5000);
};
//setInterval로 오토체인지 이벤트를 5초 간격으로 실행

autoSlider();

const stopSlider = () => {
  clearInterval(timer);
};

container.addEventListener("mouseenter", () => {
  stopSlider();
});

container.addEventListener("mouseleave", () => {
  autoChange();
  autoSlider();
});

const pagerChange = (e) => {
  const target = e.target.dataset.index;
  reset();
  for (let i = 0; i < pagers.length; i++) {
    if (target == i) {
      pagers[i].classList.add("active");
      src.value = `./img/${imgs[i]}`;
    }
  }
};
//pagerChange를 클릭하면 해당 페이지로 이동하는 이벤트

pagers.forEach((pager, idx) => {
  container.addEventListener("mouseenter", () => {
    pager.classList.remove("active");
  });
  pager.addEventListener("click", pagerChange);
});
