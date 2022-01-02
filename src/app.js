window.onload = () => {
  const container = document.querySelector(".container");
  const input = document.querySelector(".input");
  const delInp = document.querySelector(".deleteInput");

  // Prevents the FORM's default event (reload page)
  document
    .querySelector("#myForm")
    .addEventListener("submit", ev => ev.preventDefault());

  var myArray = [1, 2, 3, 4, 5, 6];
  // Creates a <div class="col"> when you click the button
  // The content will be inside of a random title from H1 to H6
  document.querySelector(".button").addEventListener("click", () => {
    // If there is options availables...
    if (myArray.length > 0) {
      // It chooses a random index inside of the array
      let random = Math.floor(Math.random() * (myArray.length - 1));
      //Creates the div element and sets the attribute class="col"
      let div = document.createElement("div");
      div.setAttribute("class", "col");
      // It sets the content of the div with value of the input and adds it
      // The content will be a title HN
      div.innerHTML = `<h${myArray[random]}>${input.value.toUpperCase()}</h${
        myArray[random]
      }>`;
      container.appendChild(div);
      // Removes the HN option of the array so you don't repeat that title
      myArray.splice(random, 1);
    } else console.error("You already created the 6 types of titles");
  });

  // Erases the column with the index you choose
  document.querySelector(".deleteButton").addEventListener("click", () => {
    // Allows you to delete the column, only if it exists
    if (container.children[delInp.value]) {
      // If it does, it removes the column with the index obtained by the input
      container.removeChild(container.children[delInp.value]);
      // If it doesn't, error message:
    } else console.error("That column doesn't exist, my friend (:");
  });

  // Erases last column
  document.querySelector(".deleteLast").addEventListener("click", () => {
    // First checks if there is at least 1 column
    if (container.children.length > 0) {
      // If it does, removes the last one
      container.removeChild(container.children[container.children.length - 1]);
      // If it doesn't...
    } else console.error("There is no one to erase :( ");
  });

  // Changes the content of every column when you press ENTER (key 13)
  input.addEventListener("keyup", ev => {
    if (ev.keyCode == 13) {
      // Iterates every node of the container and changes its value
      // for a H1 title with the value of the input
      for (let value of container.children)
        value.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
    }
  });
};
