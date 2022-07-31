const loginForm = document.querySelector('#loginForm');
const loginResult = document.querySelector('#loginResult');
const loginArea = document.querySelector('#login');
const dashboard = document.querySelector('#dashboard');
const loginInput = loginForm.querySelector('input');
const greeting = loginResult.querySelector('#greeting');
const logoutBtn = loginResult.querySelector('#btnLogOut');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function showGreetings(username) {
    greeting.innerText = `Welcome :) ${username}`;
    loginResult.classList.remove(HIDDEN_CLASSNAME);
    dashboard.classList.remove(HIDDEN_CLASSNAME);
    loginArea.setAttribute('data-login', 'on');
}

function onLoginSubmit(event) {
    event.preventDefault();

    const userName = loginInput.value;
    
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    showGreetings(userName);
}

function handelLogOutclick() {
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginResult.classList.add(HIDDEN_CLASSNAME);
    dashboard.classList.add(HIDDEN_CLASSNAME);
    loginArea.setAttribute('data-login', 'off');
    greeting.innerText= "";
    loginInput.value = "";
}

loginForm.addEventListener('submit', onLoginSubmit);
logoutBtn.addEventListener('click', handelLogOutclick);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greetings
    showGreetings(savedUserName);
}