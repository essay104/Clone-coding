const markers = document.querySelectorAll(".marker");
const modal = document.querySelector(".modal");
const btn = document.querySelector(".modal-header button");
const form = document.querySelector("form");
const submit = document.querySelector(".info-submit");
const storeName = document.querySelector(".modal-header h1");
const modalImg = document.querySelector(".modal-img");
const img = [
  "img01.jpg",
  "img02.jpg",
  "img03.jpg",
  "img04.jpg",
  "img05.jpg",
  "img06.jpg",
  "img07.jpg",
];

console.log(modalImg);

// console.log(storeName);

console.log(markers);

markers.forEach((marker) => {
  marker.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

btn.addEventListener("click", () => {
  modal.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault;
  const content = form.value;
  console.log(content);
});

// markers.forEach((marker, idx) => {
//   marker.addEventListener("click", () => {
//     if (idx == 0) {
//       storeName.innerText = "함스브로제과점";
//     } else if (idx == 1) {
//       storeName.innerText = "옛가 칼국수"
//     }
//   });
// });

markers.forEach((marker, idx) => {
  marker.addEventListener("click", () => {
    switch (idx) {
      case 0:
        storeName.innerText = "함스브로제과점";
        modalImg.style.backgroundImage = `url(./img/${img[0]})`;
        break;
      case 1:
        storeName.innerText = "옛가 칼국수";
        modalImg.style.backgroundImage = `url(./img/${img[1]})`;
        break;
      case 2:
        storeName.innerText = "마쓰무라 돈까스";
        modalImg.style.backgroundImage = `url(./img/${img[2]})`;
        break;
      case 3:
        storeName.innerText = "장충 왕족발";
        modalImg.style.backgroundImage = `url(./img/${img[3]})`;
        break;
      case 4:
        storeName.innerText = "최고성";
        modalImg.style.backgroundImage = `url(./img/${img[4]})`;
        break;
      case 5:
        storeName.innerText = "뼈다귀 해장국";
        modalImg.style.backgroundImage = `url(./img/${img[5]})`;
        break;
      case 6:
        storeName.innerText = "소문난 보배곱창";
        modalImg.style.backgroundImage = `url(./img/${img[6]})`;
        break;
    }
  });
});

const init = () => {
  storeName.innerText = "";
};
