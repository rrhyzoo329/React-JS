/* 두가지 방법이 있음 미리 구역 login-form을 알려주고 찾냐 아니면 login-form input 값 앞에 명시해주냐 

1)
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

2)
const loginForm = document.getElementById(" ");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

>> 
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/* 링크
 const link = document.querySelector("a");
    function handleLinkClick(event){
     event.preventDefault(); 
link.addEventListener("click",handleLinkClick);
 } */


/*
submit은 엔터를 누르거나 버튼을 클릭할 때 발생함


const loginButton = document.querySelector("#login-form button");
function onLoginClick(){
    const username = loginInput.value;
    if( username === ""){
        alert("PLEASE WRITE YOUR NAME");
    }else if(username.length > 15){
    alert("YOUR NAME IS TOO LONG");

    이 if문을 사용하는 법외에 폼을 사용하는 방법도 있음 
    form에 required 넣으면 브라우저가 입력하라고 도와줌
    }
}
loginButton.addEventListener("click", onLoginClick); 


/* 여기까지 하면 새고로침이 일어남 
function onLoginSubmit(){
    const username = loginInput.value;
    console.log(username);
} */

//기본 동작 작동하지 않게 만들기 
function onLoginSubmit(event){
    // prevent form event let page refresh
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    //이벤트 리스너 처리 및 local storage를 위해 내부에서 선언
    //const username = loginInput.value;
  
    //value 값이 입력되면 폼이 사라지도록 하는 이벤트 
    //grettig.innerText ="HELLO" + userName;
    
    //localStorage : 브라우저에 무언가를 저장한 후 나중에 가져오기 
    //localStorage.setItem("key",value);
    localStorage.setItem(USERNAME_KEY,username);
    // greeting.innerText = `HELLO ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings();
    
}

function paintGreetings(){
    const username =localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `HELLO ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);

//회원정보 저장 
const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else {
    //show the greetigs
    paintGreetings();
}







