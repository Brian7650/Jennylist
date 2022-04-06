// Select DOM
const todoInput =document.querySelector(".todo-input");
const todoButton =document.querySelector(".todo-button");
const todoList =document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event) {
    event.preventDefault();
    // Create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    // Append
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
  
    // Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<font-awesome-icon icon="fa-solid fa-circle-plus" />`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Create Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<font-awesome-icon icon="fa-solid fa-trash-can-xmark" />`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // Append to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }
if(item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    }
}
