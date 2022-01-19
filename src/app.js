const container = document.getElementById("container");
const input = document.getElementById("input");
const inputDelete = document.getElementById("deleteInput");
let hijos = document.getElementById("container").getElementsByTagName("div");

//Prevenimos que se recargue la pagina
document
  .querySelector("#myForm")
  .addEventListener("submit", ev => ev.preventDefault());

//Creamos titulos aleatorios de H1-H6
document.getElementById("button").addEventListener("click", () => {
  let div = document.createElement("div");
  div.setAttribute("class", "col");
  let randomNum = Math.floor(Math.random() * 6) + 1;
  div.innerHTML = `<h${randomNum}>${input.value.toUpperCase()}</h${randomNum}>`;
  container.appendChild(div);
});

//Eliminamos ultima fila siempre hasta no quedar mas
document.getElementById("deleteButton").addEventListener("click", () => {
  if (hijos.length > 0) {
    container.removeChild(hijos[hijos.length - 1]);
  } else {
    console.error("No se puede eliminar lo que no hay");
  }
});

//Creamos nuevos titulos
input.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    //Si rompemos la estructura principal creamos nuevos
    if (hijos.length < 4) {
      let div = document.createElement("div");
      div.setAttribute("class", "col");
      let random = Math.floor(Math.random() * 6) + 1;
      div.innerHTML += `<h${random}>${input.value.toUpperCase()}</h${random}>`;
      container.appendChild(div);
    } else {
      for (let value of hijos) {
        value.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
      }
    }
  }
});

//Eliminamos la fila que queramos
inputDelete.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    if (
      inputDelete.value <= hijos.length &&
      inputDelete.value >= 0 &&
      hijos.length > 0
    ) {
      container.removeChild(hijos[inputDelete.value]);
    } else if (
      inputDelete.value > hijos.length ||
      inputDelete.value < 0 ||
      hijos.length <= 0
    ) {
      console.error("No se puede eliminar lo que no existe");
    }
  }
});
