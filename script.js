//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todosSelect = document.querySelector('.filter-todo');
//Event listener

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteTodo);
todosSelect.addEventListener('click',filterTodo)

//functions
function addTodo(event) {
    event.preventDefault();
    const toDiv = document.createElement('div')
    toDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    toDiv.append(newTodo);

    //completed button

    const completdButton = document.createElement('button');
    completdButton.innerHTML = '<i class="fa fa-plus"></i>'
    completdButton.classList.add('complete-btn');
    toDiv.append(completdButton);

    //delete button

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>'
    deleteButton.classList.add('trash-btn');
    toDiv.append(deleteButton);

    //append to list
    todoList.append(toDiv);
    todoInput.value = ''

}
function deleteTodo(event) {
    const item = event.target;
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function (){
            todo.remove()
        })
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}
function filterTodo(event){
    const todos = todoList.childNodes;
    console.log(todos)
}