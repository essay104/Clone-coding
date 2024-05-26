const headerlogo = document.querySelectorAll(".logo span");
console.log(headerlogo);

const headerFirstEvent = () => {
  setTimeout(() => {
    headerlogo.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, index * 100);
    });
  }, 1000);
};

headerFirstEvent();
