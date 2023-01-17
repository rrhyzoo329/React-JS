const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const todo = document.querySelector("#todobar")
 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


let userName = localStorage.getItem(USERNAME_KEY);

//load
function showGreeting(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

    const date = new Date();
    const hours = date.getHours();

    let mention = 'Hello';

    if(0 <= hours && hours <= 4 || 20 < hours){
        mention = 'Good night';

    } else if (hours<12){

        mention = 'Good morning';
    } else{

        mention = 'Good afternoon';
    }
    greeting.innerText = `${mention}, ${username}.`;
}
 
//add

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    showGreeting(username);
}
 
//save 

const savedUsername = localStorage.getItem(USERNAME_KEY);
 
if (!savedUsername){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    showGreeting(savedUsername);
}

