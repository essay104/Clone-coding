//openning

const openPage = document.querySelector(".openning-page");

const openPageEvent = () => {
  openPage.style.opacity = "0";
  openPage.style.zIndex = "-999";
};

setTimeout(openPageEvent, "3000");

// input text

const time = document.querySelector(".left-time-event");
const form = document.querySelector("form");
const submit = document.querySelector(".input-submit");
const ul = document.querySelector(".TodoList-result ul");
const inputText = document.querySelector(".input-text");
const allDelete = document.querySelector(".todo-delete");

inputText.addEventListener("focus", () => {
  inputText.setAttribute("placeholder", "");
  inputText.value = "";
});

form.addEventListener("focusout", () => {
  inputText.setAttribute("placeholder", "과유불급, 최대 5개까지 입력하세요");
});

//todo List

let todos = [];

const addItem = (todo) => {
  if (todo.text != "") {
    const li = document.createElement("li");
    const btn1 = document.createElement("input");
    const span = document.createElement("span");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    const insert = document.createElement("input");

    span.innerText = todo.text;
    btn1.type = "checkbox";
    btn2.innerText = "취소";
    btn2.style.background = "crimson";
    btn2.classList.add("del");
    btn2.addEventListener("click", delItem);
    btn3.style.background = "orange";
    btn3.innerText = "수정";
    insert.style.display = "none";
    insert.type = "text";
    insert.value = todo.text;

    li.appendChild(btn1);
    li.appendChild(span);
    li.appendChild(insert);
    li.appendChild(btn2);
    li.appendChild(btn3);
    ul.appendChild(li);
    li.id = todo.id;

    btn3.addEventListener("click", () => {
      if (btn3.innerText === "수정") {
        btn3.innerText = "확인";

        span.style.display = "none";
        insert.style.display = "block";
      } else {
        btn3.innerText = "수정";

        span.innerText = insert.value;
        insert.style.display = "none";
        span.style.display = "block";
      }
    });

    allDelete.addEventListener("click", () => {
      console.log("click");
      todos = todos.filter((todo) => todo.id != li.id);
      save();
      li.remove();
      li.delItem();
    });

    const timeReset = () => {
      if (time.innerText === `00 : 00 : 01`) {
        li.delItem();
      }
    };

    timeReset();

    const complete = () => {
      const result = document.querySelector(".complete-mission");
      console.log("클릭");
      const total = todos.length;
      const checkedMission = document.querySelectorAll(
        "input[type=checkbox]:checked"
      );
      const mission = checkedMission.length;
      result.innerText = `축하합니다! 오늘  ${total}개 중에서 ${mission}개 완료하셨습니다!!`;
    };

    btn1.addEventListener("click", complete);
    btn2.addEventListener("click", complete);
    allDelete.addEventListener("click", complete);
    form.addEventListener("submit", complete);
  }
};

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};

const handler = (e) => {
  e.preventDefault();
  if (inputText.value !== "") {
    const todo = {
      id: Date.now(),
      text: inputText.value,
    };
    todos.push(todo);
    addItem(todo);
    save();

    if (todos.length > 5) {
      alert("조금씩 천천히! 5개면 충분합니다.");
    }
  }
};

init();
form.addEventListener("submit", handler);

//All delete event

//Date Event

time.innerText = `00 : 00 : 00`;

const timeEvent = () => {
  let today = new Date();
  let hrs = today.getHours();
  let mins = today.getMinutes();
  let secs = today.getSeconds();

  let leftHrs = `${23 - hrs}`;
  let leftMins = `${59 - mins}`;
  let leftSecs = `${59 - secs}`;

  leftHrs = leftHrs < 10 ? "0" + leftHrs : leftHrs;
  leftMins = leftMins < 10 ? "0" + leftMins : leftMins;
  leftSecs = leftSecs < 10 ? "0" + leftSecs : leftSecs;

  time.innerText = `${leftHrs} : ${leftMins} : ${leftSecs}`;
};

setInterval(timeEvent, 1000);

//
