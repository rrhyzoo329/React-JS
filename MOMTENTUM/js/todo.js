const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//show
function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText="delete";
    button.addEventListener("click",deleteToDo);
    //appendChild(는 맨 마지막에 위치
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//create

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value ="";
    toDos.push(newToDo);
    paintToDo(newToDo);
    savedToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


//delete

function deleteToDo(event){
    const li = event.target.parentElement
    // 로컬스토리지 id와 버튼의 id를 비교하여 필터링 후 toDos(배열)에 저장 [필터는 True만 리턴한다.]
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove(); 
    // 로컬스토리지에 저장
    saveTodos(); 
}

//saving 
// localstorage 는 오직 text만 저장 >> JSON.stringify("배열") 이용 >> JSON.Parse 이용

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

//storage 확인

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

