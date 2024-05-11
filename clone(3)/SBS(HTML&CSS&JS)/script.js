const nav = document.querySelector(".toggle-nav");
const navBar = document.querySelector(".toggle-nav a");
const navBarMenu = document.querySelector(".toggle-nav ul");
const navBarTitle = document.querySelector(".toggle-nav-title");
const navBarAngle = document.querySelector(".fa-angle-down");
console.log(navBar, navBarMenu);

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
