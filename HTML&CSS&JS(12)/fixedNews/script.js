//scroll btn을 누르면 최하단으로 이동하는 이벤트

const btn = document.querySelector(".scroll-btn");
const body = document.querySelector("body");

const btnEventHandler = () => {
  window.scrollTo({
    top: 920,
    left: 0,
    behavior: "smooth",
  });
};

btn.addEventListener("click", btnEventHandler);

window.addEventListener("scroll", () => {
  const scrollY = this.scrollY;
  console.log(scrollY);
});

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
