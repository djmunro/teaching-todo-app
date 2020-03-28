// get the todo-input element
const todoInput = document.querySelector(".todo-input");
// console.log(todoInput.value);

// get the todo-add-btn
const addBtn = document.querySelector(".add-todo-btn");

// create a onclick event for todo-add-btn
addBtn.onclick = addTodo;

function addTodo() {
  console.log("foo bar baz bah bing boo");
  // take the todo-input value and create a new <li> element
  const todo = document.createElement("li");
  todo.innerText = todoInput.value;

  // append the new list item to our todo list
  const todoList = document.querySelector(".todo-list");
  todoList.appendChild(todo);
}
