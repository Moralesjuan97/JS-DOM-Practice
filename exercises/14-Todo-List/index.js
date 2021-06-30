// Your code here

const input = document.querySelector("#addToDo");
const list = document.querySelector("#my_ul");

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    let item = document.createElement("li");

    item.innerHTML = `<span><i class="fa fa-trash" id="trash"></i></span>&nbsp;${input.value}`;
    list.appendChild(item);

    input.value = "";
  }
});

list.addEventListener("click", function(e) {
  if (e.target.matches(".fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});
