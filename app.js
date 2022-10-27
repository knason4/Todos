//Part 1 - make a todo, strike through finished todos, be able to remove todos.
const form = document.querySelector('#todo-form');
//const todoInput = document.querySelector('#todo-item');
const todoList   = document.querySelector('#todo-list');

const storeTodo = JSON.parse(localStorage.getItem('todo')) || [];

todoList.addEventListener('click', function (event) {
    if(event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove();
    }
    else if (event.target.tagName === 'LI') {
		event.target.classList.add('cross-out');
	}

    
})


form.addEventListener('submit', function (e) {
    e.preventDefault();
    //console.log(todoInput.value);
    let newTodo = document.createElement('li');
    let removeButton = document.createElement('button');
    
    removeButton.innerText = 'Done!'
    newTodo.innerText = document.getElementById("todo-item").value;
    newTodo.appendChild(removeButton);
    todoList.appendChild(newTodo);
    // todoInput.value = '';
    form.reset();
})




