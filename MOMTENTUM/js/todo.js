const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");


const TODOS_KEY = "todos";

let toDos = [];


//save
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


//delete

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}



//show
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  const ckBox = document.createElement("input");
  ckBox.type = "checkbox";
  
  li.appendChild(ckBox); 
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  toDoList.appendChild(li);
  
  ckBox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });
}

//add

function handleToDoSubmit(event){
  event.preventDefault(); 

  console.log(toDos);
  if(toDos.length >= 10){
      alert("두투리스트는 총 10개까지 등록 가능합니다.");
      toDoInput.value = "";

  }else{

    const newToDo = toDoInput.value;

    if(newToDo.length == 0){
      alert("내용을 입력해주세요.");

    } else if(newToDo.length >= 10) {
      alert("10자 이내로 적어주세요.");

    } else {

    toDoInput.value = "";
    
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos();
    }
  }
}



toDoForm.addEventListener("submit", handleToDoSubmit);

//storage 확인

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}








