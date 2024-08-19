document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todo = document.querySelector(".todo");
    const todoValue = "* " + todo.value;
    const newTodo = document.createElement("p");
    let clickedOnce = false;

    newTodo.textContent = todoValue;
    newTodo.addEventListener("click", () => {
      if (!clickedOnce) {
        newTodo.textContent = `${todoValue} (terminé)`;
        newTodo.style.color = "green";
        clickedOnce = true;
      } else {
        newTodo.remove();
      }
    });

    const displayTodo = document.querySelector(".display-todo");
    displayTodo.appendChild(newTodo);
    todo.value = "";
  });
});
