const list = document.querySelector(".list");
const text = document.querySelector(".text");
const button = document.querySelector(".button");
const checkbox = document.querySelector(".checkbox");

button.addEventListener("click", function () {
  let li = document.createElement("li");
  list.appendChild(li);
  if (checkbox.checked) {
    li.classList.add("important");
  }
  li.innerHTML = text.value;
  text.value = "";
});
