const nextBtn = document.querySelector(".next-btn");
const productToggle = document.querySelector(".production");
const spinner = document.querySelector(".spinner-warp");
const prev = document.querySelector(".prev");
const btns = document.querySelectorAll(".main-btn");
const idxBtn = document.querySelector(".next-btn");
const container = document.querySelector(".container");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    spinner.classList.toggle("active");
    productToggle.classList.toggle("active");
    if (btn.classList.contains("prev")) {
      setTimeout(() => {
        window.location.href = "./production.html";
      }, 300);
    } else if (btn.classList.contains("next")) {
      setTimeout(() => {
        window.location.href = "./perchasePage.html";
      }, 300);
    }
  });
});

idxBtn.addEventListener("click", () => {
  container.classList.toggle("containerAnime");
  setTimeout(() => {
    window.location.href = "./production.html";
  }, 800);
});
