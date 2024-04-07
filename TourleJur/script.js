const aDeco = document.querySelectorAll("a");

//a태그에 mousehover했을때 스타일이 변하는 이벤트

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
