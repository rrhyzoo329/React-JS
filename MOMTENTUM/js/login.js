"use strick";

history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

const loginBox = document.querySelector("#loginBox");
const screenBox = document.querySelector("#screenBox");

const logoutBtn = document.querySelector("#changeBtn");
const userChangeBtn = document.querySelector("#userChangeBtn");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting h2:first-child");
const user = document.querySelector("#greeting h3");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


let userName = localStorage.getItem(USERNAME_KEY);



//showGreeting
function showGreeting(username){

    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
    userChangeBtn.classList.remove(HIDDEN_CLASSNAME);

    const date = new Date();
    const hours = date.getHours();

    let mention = 'Hello';
    //수정필요
    if(0 <= hours && hours <= 4 || 20 < hours){
        mention = 'Good night';

    } else if (hours <12){

        mention = 'Good morning';
    } else{

        mention = 'Good afternoon';
    }
    greeting.innerText = `${mention},`;
    user.innerText =`${username}.`


    }


 
//add

function onLoginSubmit(event){

    const nameCk = loginInput.value;

    if(nameCk.length == 0){
      alert("이름을 입력해주세요.");

    } else if(nameCk.length >= 5) {
      alert("10자 이내로 적어주세요.");

    } else {

    loginBox.style = 'opacity: 0;'
    screenBox.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    showGreeting(username);
    }
}
 
//save 

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    
    loginBox.classList.remove(HIDDEN_CLASSNAME);
    screenBox.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
   
    loginBox.classList.add(HIDDEN_CLASSNAME);
    screenBox.classList.remove(HIDDEN_CLASSNAME);
    showGreeting(savedUsername);
}

function onLogoutSubmit(){
        localStorage.removeItem(TODOS_KEY, JSON.stringify(toDos));
        localStorage.removeItem(DDAY_KEY, JSON.stringify(dDays));
        greeting.classList.remove(HIDDEN_CLASSNAME);
        screenBox.classList.remove(HIDDEN_CLASSNAME);
        loginBox.classList.add(HIDDEN_CLASSNAME);
        logoutBtn.classList.add(HIDDEN_CLASSNAME);
        localStorage.removeItem(USERNAME_KEY);
        loginInput.value = "";
        window.location.reload();
        } 


function listChek (){
    console.log(toDos);
    console.log(dDays);

    console.log(toDos);
    console.log(dDays);

    if(dDays.length > 0 && toDos.length == 0 ){
        if (!confirm("로그아웃시 저장한 디데이는 사라집니다. 로그아웃 하시겠습니까?")) {
        }else{
            onLogoutSubmit();    
        }
    } else if(toDos.length > 0 && dDays.length == 0){
        if (!confirm("로그아웃시 저장한 투두리스트는 사라집니다. 로그아웃 하시겠습니까?")) {
        }else{
            onLogoutSubmit();    
        }

    }else if(toDos.length > 0 && dDays.length > 0){
        if (!confirm("로그아웃시 저장한 디데이와 투두리스트는 사라집니다. 로그아웃 하시겠습니까?")) {
        }else{
            onLogoutSubmit();    
        }
    }else{
        onLogoutSubmit();   
    }
}
    logoutBtn.addEventListener("click", listChek);
    userChangeBtn.addEventListener("click",listChek);
    
