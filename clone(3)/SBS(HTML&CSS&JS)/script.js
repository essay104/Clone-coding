const nav = document.querySelector(".toggle-nav");
const navBar = document.querySelector(".toggle-nav a");
const navBarMenu = document.querySelector(".toggle-nav ul");
console.log(navBar, navBarMenu);

navBar.addEventListener("mouseenter", () => {
  console.log("enter");
  navBarMenu.style.display = "block";
});

navBarMenu.addEventListener("mouseleave", () => {
  console.log("enter");
  navBarMenu.style.display = "none";
});
