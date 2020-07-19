//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event listener

todoButton.addEventListener('click',addTodo)
//functions
function addTodo() {
    event.preventDefault();
    const toDiv = document.createElement('div')
    toDiv.classList.add('todo')
}