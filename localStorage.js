//Part 2 Save todos in local storage, on refresh, the todo should remain during session.

const form = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-item');
const todoList   = document.querySelector('#todo-list');

//local storage - first get the todo
const storeTodo = JSON.parse(localStorage.getItem('todo')) || [];
for(let i = 0; i < storeTodo.length; i++) {
    let newTodo = document.createElement('li');
    newTodo.innerText = storeTodo[i].todoInput;
    todoList.appendChild(newTodo);
}


//adding css to strike through text
todoList.addEventListener('click', function (event) {
 
    if(event.target.tagName === 'LI') {
        event.target.classList.add('cross-out');
    }

})


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    todoList.appendChild(newTodo);
    todoInput.value = '';

    //push all the new todos into storage
    storeTodo.push(newTodo.innerText);
    localStorage.setItem("todos", JSON.stringify(storeTodo));
});





