const nextBtn = document.querySelector(".next-btn");
const productToggle = document.querySelector(".production");
const spinner = document.querySelector(".spinner-warp");
const prev = document.querySelector(".prev");
const btns = document.querySelectorAll(".main-btn");
const idxBtn = document.querySelector(".next-btn");
const container = document.querySelector(".container");
const inputs = document.querySelectorAll("input");
const certificationBtn = document.querySelectorAll(".sell-index-button");
const numberInput = document.querySelector(".number-input-submit");
const phoneNumber = document.querySelector(".number-input");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    spinner.classList.toggle("active");
    productToggle.classList.toggle("active");
    if (btn.classList.contains("prev")) {
      setTimeout(() => {
        window.location.href = "./production.html";
      }, 300);
    } else if (btn.classList.contains("next")) {
      setTimeout(() => {
        window.location.href = "./perchasePage.html";
      }, 300);
    }
  });
});

inputs.forEach((input, idx) => {
  input.addEventListener("focus", () => {
    input.placeholder = "";
  });
  input.addEventListener("blur", () => {
    if (input.placeholder === "") {
      switch (idx) {
        case 0:
          input.placeholder = "성함을 입력해주세요";
          break;
        case 1:
          input.placeholder = "배송받을 주소를 입력해주세요";
          break;
        case 2:
          input.placeholder = "휴대 전화번호 입력";
          break;
        case 3:
          input.placeholder = "인증 번호를 입력해주세요";
          break;
      }
    }
  });
});

certificationBtn.forEach((btn, idx) => {
  if (idx === 0) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      numberInput.style.display = "block";
      btn.innerText = "재발급 받기";
      btn.style.display = "none";
    });
  } else if (idx === 1) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      numberInput.style.display = "none";
      phoneNumber.classList.remove("borderActive");
      phoneNumber.value = "";
      phoneNumber.placeholder = "인증이 완료되었습니다";
      phoneNumber.classList.add("bgActive");
      phoneNumber.disabled = true;
    });
  } else if (idx === 2) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
});

const agreeBtn = document.querySelectorAll(".fa-circle-check");

console.log(agreeBtn);

agreeBtn.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    if (!idx == 0) {
      btn.classList.toggle("agreeActive");
    } else {
    }
  });
});

// idxBtn.addEventListener("click", () => {
//   container.classList.toggle("containerAnime");
//   setTimeout(() => {
//     window.location.href = "./production.html";
//   }, 800);
// });

const imgs = document.querySelectorAll(".product-img");
const imgContent = document.querySelector(".production img");

console.log(imgContent);

imgs.forEach((img, idx) => {
  img.addEventListener("click", () => {
    productToggle.classList.toggle("active");
    imgContent.classList.toggle("active");
    // imgContent.style.display = "block";
  });
});

// 가상클래스 : 실제 DOM을 구성하는 시점에서는 입력x
// 그런데, 사용자가 어떤 이벤트를 실행하게 되면, 그 시점에만 DOM 구현이 되는것임 => 가상

// 가상클래스가 작동하도록 JS를 통해서 코드 구현!!!