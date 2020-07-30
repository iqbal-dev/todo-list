//selector
const todoButton = document.querySelector('.todo-button')
const todoInput = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')


//event listener
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', todoDelete)
filterOption.addEventListener('click',filterTodo)

//function
function addTodo(e) {
    console.log('hello');
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");


    const newTodo = document.createElement("li")
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    const completeButton = document.createElement('Button')
    completeButton.innerHTML = '<li class="fas fa-check"></li>'
    completeButton.classList.add("complete-btn")
    todoDiv.appendChild(completeButton)

    const trashButton = document.createElement('Button')
    trashButton.innerHTML = '<li class="fas fa-trash"></li>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
    todoInput.value = "";
}
//delete
function todoDelete(e) {
    const item = e.target;
    if (item.className === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }
    if (item.className === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}


function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                    console.log(todo.classList)

                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if ( !todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    });
    
}

