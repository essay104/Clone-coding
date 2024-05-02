const goodSlider = document.querySelector(".goods-detail-slider");
const pagers = document.querySelectorAll(".pagers span");

//main slider

const pics = [
  "goods-detail-01.jpg",
  "goods-detail-02.jpg",
  "goods-detail-03.jpg",
  "goods-detail-04.jpg",
];

goodSlider.style.backgroundImage = `url(../img/${pics[0]})`;

let idx = 0;

const rotation = () => {
  idx = (idx + 1) % pics.length;
  pagers.forEach((pager, idx) => {
    if (idx !== idx) {
      pager.classList.add("active");
    } else {
      pager.classList.remove("active");
    }
    pager.addEventListener("click", function () {
      pagers.forEach((pager) => {
        pager.classList.remove("active");
      });
      this.classList.add("active");
      goodSlider.style.backgroundImage = `url(../img/${pics[idx]})`;
    });
  });
};

setInterval(rotation, 3000);

//accordion

const goodsTitles = document.querySelectorAll(".goods-accordion .title");

goodsTitles.forEach((title) => {
  title.addEventListener("click", function () {
    const nextSibling = this.nextElementSibling;
    goodsTitles.forEach((otherTitle) => {
      if (otherTitle !== this) {
        otherTitle.nextElementSibling.style.display = "none";
      }
    });
    if (nextSibling.style.display === "block") {
      nextSibling.style.display = "none";
    } else {
      nextSibling.style.display = "block";
    }
  });
});
