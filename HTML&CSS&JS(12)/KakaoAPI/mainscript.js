const markers = document.querySelectorAll(".marker");
const modal = document.querySelector(".modal");
const btn = document.querySelector(".modal-header button");
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

// console.log(storeName);

markers.forEach((marker) => {
  marker.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

btn.addEventListener("click", () => {
  modal.style.display = "none";
});

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

//accordion Events

const oppener = document.querySelector(".select-opener");
const accordion = document.querySelector(".select-accordion");
const infos = document.querySelectorAll(".fa-info");
const locations = document.querySelectorAll(".fa-location-dot");

oppener.addEventListener("click", () => {
  oppener.classList.toggle("active");
  accordion.classList.toggle("activeAccordion");
});

infos.forEach((info, idx) => {
  info.addEventListener("click", () => {
    modal.style.display = "block";
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

var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.6513398, 127.0362835), //지도의 중심좌표.
  level: 5, //지도의 레벨(확대, 축소 정도)
};

