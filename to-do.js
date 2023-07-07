const addTodo = (event) => {
  event.preventDefault();
  let el = document.createElement("li");
  el.innerText = document.getElementById("item").value;
  el.addEventListener("click", completeTodo);
  let btn = document.createElement("button");
  btn.innerText = "x";
  btn.addEventListener("click", removeTodo);
  el.appendChild(btn);
  document.querySelector("ul").appendChild(el);
};

const removeTodo = (event) => {
  event.stopPropagation();
  event.target.parentNode.remove();
};

const completeTodo = (event) => {
  event.target.getAttribute("aria-checked") === true
    ? event.target.setAttribute("aria-checked", "false")
    : event.target.setAttribute("aria-checked", "true");

  document.getElementById("completed-message").style.visibility = "visible";
  setTimeout(
    () =>
      (document.getElementById("completed-message").style.visibility =
        "hidden"),
    2000
  );
};

document.querySelector("form").addEventListener("submit", addTodo);
