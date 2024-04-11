const data = fetch("setting.json").then((response) => response.json());

const outPut = document.querySelector(".output");
const result = document.querySelector(".result");

const createID = (king) => {
  const content = document.createElement("div");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  content.id = king.id;
  content.className = "king";

  div.className = "kings-info";

  h3.className = "name";
  h3.innerText = king.name;

  result.appendChild(content);
  content.append(img, div);
  div.append(h3, p);
};

const importData = () => {
  data.kings.map((king) => {
    if (!document.getElementById(king.id)) {
      createID(king);
    }
  });
};

outPut.addEventListener("click", importData);

console.log(data);
