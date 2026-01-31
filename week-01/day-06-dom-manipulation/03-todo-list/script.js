const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const todoText = input.value;
  if (todoText.trim() === "") {
    alert("Please enter a task");
    return;
  } else {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `<span>${todoText}</span>
    <button class="delete-btn">Delete</button>`;
    todoList.appendChild(li);
    input.value = "";
    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
  }
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
