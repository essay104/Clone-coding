const markers = document.querySelectorAll(".marker");
const modal = document.querySelector(".modal");
const btn = document.querySelector(".modal-header button");

markers.forEach((marker) => {
  marker.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

btn.addEventListener("click", () => {
  modal.style.display = "none";
});
