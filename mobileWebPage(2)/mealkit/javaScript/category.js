const titles = document.querySelectorAll(".category-accordion .title");

const detailes = document.querySelectorAll(".category-accordion .detail");

const firstDetail = titles[0].nextElementSibling;
firstDetail.style.display = "block";

titles.forEach((title) => {
  title.addEventListener("click", function () {
    titles.forEach((title) => {
      title.classList.remove("acitve");
    });
    this.classList.toggle("active");
    const detail = this.nextElementSibling;
    detail.style.display = "block";

    detail.forEach((d) => {
      if (d !== detail) {
        d.style.display = "none";
      }
    });
  });
});
