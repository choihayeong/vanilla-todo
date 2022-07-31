const todoForm = document.querySelector('#todoForm');
const iptTodo = todoForm.querySelector('#iptTodo');
const todoList = document.querySelector('#todoList');

let todoItems = [];

const INDEXED_KEY = "TodoName";

function saveTodoItems() {
    localStorage.setItem(INDEXED_KEY, JSON.stringify(todoItems));
}

function checkTodo(event) {
    const liWrap = event.target.parentElement;

    liWrap.classList.toggle('del');
}

function deleteTodo(event) {
    const li = (event.target.parentElement).parentElement;

    li.remove();

    todoItems = todoItems.filter((ele) => ele.id !== Number(li.id));

    saveTodoItems();
}

function paintTodo(newObj) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const chkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    li.appendChild(div);
    div.appendChild(chkBtn);
    div.appendChild(span);
    div.appendChild(delBtn);

    div.classList.add('flex');
    chkBtn.classList.add('btn-check');
    delBtn.classList.add('btn-remove');
    
    li.id = newObj.id;
    span.textContent = newObj.text;

    chkBtn.textContent = "✅"
    chkBtn.addEventListener('click', checkTodo);

    delBtn.textContent = "❌";
    delBtn.addEventListener('click', deleteTodo);

    todoList.appendChild(li);
}

function todoFormSubmit(event) {
    event.preventDefault();
    const newItem = iptTodo.value;
    const newItemObj = {
        text: newItem,
        id: Date.now(),
    };

    todoItems.push(newItemObj);

    paintTodo(newItemObj);
    saveTodoItems();

    iptTodo.value = "";
}

todoForm.addEventListener('submit', todoFormSubmit);

const savedTodoItems = localStorage.getItem(INDEXED_KEY);

if (savedTodoItems) {
    const parsedTodos = JSON.parse(savedTodoItems);

    todoItems = parsedTodos;

    todoItems.forEach(ele => paintTodo(ele));
}