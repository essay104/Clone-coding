const markers = document.querySelectorAll(".marker");
const modal = document.querySelector(".modal");
const btn = document.querySelector(".modal-header button");
const form = document.querySelector("form");
const submit = document.querySelector(".info-submit");
const storeName = document.querySelector(".modal-header h1");

console.log(storeName);

console.log(markers);

markers.forEach((marker) => {
  marker.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

btn.addEventListener("click", () => {
  modal.style.display = "none";
  storeName.innerText = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault;
  const content = form.value;
  console.log(content);
});

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    if ((marker.classList == "store01")) {
      storeName.innerText = "함스브로제과점";
    } 
  });
});

const init = () => {
  storeName.innerText = "";
};
