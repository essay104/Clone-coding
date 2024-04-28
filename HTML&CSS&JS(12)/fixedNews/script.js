const btn = document.querySelector(".scroll-btn");
const body = document.querySelector("body");
const todayDate = document.querySelector(".today");
const content01 = document.querySelector(".content01");
const content02 = document.querySelector(".content02");
const content03 = document.querySelector(".content03");
const iframe = document.querySelector("iframe");

//페이지이동

const newsChange01 = () => {
  iframe.setAttribute("src", "./index2.html");
};

const newsChange02 = () => {
  iframe.setAttribute("src", "./index3.html");
};

const newsChange03 = () => {
  iframe.setAttribute("src", "./index4.html");
};

content01.addEventListener("click", newsChange01);
content02.addEventListener("click", newsChange02);
content03.addEventListener("click", newsChange03);

//scroll btn을 누르면 최하단으로 이동하는 이벤트

const btnEventHandler = () => {
  window.scrollTo({
    top: 920,
    left: 0,
    behavior: "smooth",
  });
};

btn.addEventListener("click", btnEventHandler);

window.addEventListener("wheel", (e) => {
  if (window.innerHeight >= 900) {
    if (e.deltaY < 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
});

//날짜표시 이벤트

const newDay = new Date();

const todayYear = newDay.getFullYear();
const today = newDay.getMonth() + 1;
const todayDay = newDay.getDate();

todayDate.innerText = `${todayYear}년 ${today}월 ${todayDay}일`;
