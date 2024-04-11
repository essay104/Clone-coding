const aDeco = document.querySelectorAll("a");
const headerToggle = document.querySelector(".header-toggle");
const headerBottomA = document.querySelectorAll(".headerBottom a");
const headerTop = document.querySelector(".headerTop");
const headerBottom = document.querySelector(".headerBottom");

// a태그에 mousehover했을때 스타일이 변하는 이벤트

aDeco.forEach((a) => {
  if (a.innerText != "Login") {
    a.addEventListener("mouseover", () => {
      a.style.color = "#f26b24";
      a.style.textDecoration = "underline";
    });
    a.addEventListener("mouseleave", () => {
      a.style = "";
    });
  }
});

//toggle button 출현 이벤트

headerBottomA.forEach((a) => {
  a.addEventListener("mouseover", () => {
    headerToggle.classList.add("toggle");
    // headerToggle.style.height = "150px";
  });
  // a.addEventListener("mouseleave", () => {
  //   headerToggle.classList.remove("toggle");
  // });
});

headerToggle.addEventListener("mouseleave", () => {
  headerToggle.classList.remove("toggle");
});
headerTop.addEventListener("mouseover", () => {
  console.log("evnet");
  headerToggle.classList.remove("toggle");
});
