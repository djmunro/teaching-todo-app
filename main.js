// get the todo-input element
const todoInput = document.querySelector(".todo-input");

// get the todo-add-btn
const addBtn = document.querySelector(".add-todo-btn");

// create a onclick event for todo-add-btn
addBtn.onclick = addTodo;

function addTodo() {
  console.log("foo bar baz bah bing boo");

  // take the todo-input value and create a new <li> element
  const todo = makeTodoListItem();

  // append the new list item to our todo list
  const todoList = document.querySelector(".todo-list");
  todoList.appendChild(todo);
}

function makeTodoListItem() {
  // create list item
  const todo = document.createElement("li");
  todo.className = "todo-item";

  // create todoText element
  const todoText = document.createElement("span");
  todoText.innerText = todoInput.value;

  // creates deleteButton element
  const deleteButton = document.createElement("button");
  deleteButton.onclick = deleteTodo(todo);
  deleteButton.className = "delete-todo";
  deleteButton.innerText = "X";

  // add todo text to list item
  // add delete button to list item
  todo.appendChild(todoText);
  todo.appendChild(deleteButton);

  return todo;
}

function deleteTodo() {
  // create a function to delete the list item
  /*
    <li class="todo-item">
      <span>Bar</span>
      <button class="delete-todo">X</button>
    </li>
  */
}
