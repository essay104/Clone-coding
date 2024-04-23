new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  waterEffect: true,
  controlArrows: true,
  anchors: ["firstPage", "secondPage", "thirdPage"],
});

const titleArrow = document.querySelector("#nav-icon");

titleArrow.addEventListener("click", () => {
  if (!titleArrow.classList.contains("arrowActive")) {
    titleArrow.classList.add("arrowActive");
  } else {
    titleArrow.classList.remove("arrowActive");
  }
});
