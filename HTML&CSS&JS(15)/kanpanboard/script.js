// import { v4 as uuidv4 } from "uuid";

const form = document.querySelector("form");
const boards = document.querySelectorAll("boards");

let from,
  to = undefined;

let todoList = [],
  doingList = [],
  doneList = [],
  failList = [];

const lists = {
  todo: todoList,
  doing: doingList,
  done: doneList,
  fail: failList,
};

const saveList = (listId) => {
  localStorage.setItem(listId, JSON.stringify(lists[listId]));
};

const createElement = (listId, todo) => {
  const list = document.querySelector(`#${listId}`);
  const item = document.createElement("div");

  item.id = todo.id;
  item.innerText = todo.text;
  item.className = "item";
  item.draggable = true;
  item.style.backgroundImage = "#1A1A1A";

  list.appendChild(item);
  lists[listId].push(todo);
};

const createTodo = (e) => {
  e.preventDefault();

  const input = document.querySelector("input[type='text']");

  const id = uuidv4();

  const newTodo = {
    id,
    text: input.value,
  };

  if ((input.value == "")) {
    alert("할 일을 입력해 주세요!");
  } else {
    createElement("todo", newTodo);
    input.value = "";
    saveList("todo");
  }
};

form.addEventListener("submit", createTodo);
