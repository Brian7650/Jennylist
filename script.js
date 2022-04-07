// Select DOM
const todoInput =document.querySelector(".todo-input");
const todoButton =document.querySelector(".todo-button");
const todoList =document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

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
  
    saveLocalTodos(todoInput.value);

    // Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Create Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
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

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display ="flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }  
        }
    });
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === nul) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todo = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todo = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
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
    completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Create Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // Append to list
    todoList.appendChild(todoDiv);
    });
}