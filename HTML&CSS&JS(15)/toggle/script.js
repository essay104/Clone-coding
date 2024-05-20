const titles = document.querySelectorAll(".accordion h3");

// console.log(titles);

// titles.forEach((title) => {
//   title.addEventListener("click", function () {
//     const content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//     this.classList.toggle("active");
//     console.log("click");
//   });
// });

const loginPage = document.querySelector(".login-page");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    console.log("click");
    loginPage.style.display = "block";
  });
});
