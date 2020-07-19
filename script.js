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
    toDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText ='hey';
    newTodo.classList.add('todo-item');
    toDiv.append(newTodo);

    //completed button

    const completdButton = document.createElement('button');
    completdButton.innerHTML = '<i class="fa fa-plus"></i>'
    completdButton.classList('complete-btn');
    toDiv.append(completdButton);

    //delete button

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-minus"></i>'
    deleteButton.classList('complete-btn');
    toDiv.append(completdButton);
}