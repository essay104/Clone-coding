const nextBtn = document.querySelector(".next-btn");
const orderBtn = document.querySelector(".ToPerchase");
const productToggle = document.querySelector(".production");
const spinner = document.querySelector(".spinner-warp");
const prev = document.querySelector(".prev-btn");
const btns = document.querySelectorAll(".main-btn")

console.log(spinner);

orderBtn.addEventListener("click", () => {
  spinner.classList.toggle("active");
  productToggle.classList.toggle("active");
  setTimeout(() => {
    window.location.href = "./PerchasePage.html";
  }, 500);
});

btns.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    if(btn.contains(prev)) {
      console.log("prev")
    }
  })
})

const pageHandler = () => {
  spinner.classList.toggle("active");
  productToggle.classList.toggle("active");
  if ()
};
