const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
//const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    //내가 삭제하고자 하는 li(타겟의 부모)
    const li = event.target.parentElement; // target을 넣어주면 지금 클릭하는게 어떤 버튼인지 알려줌. 그 버튼의 부모(button의 부모 = li)
    console.log(typeof li.id);
    li.remove(); // li 를 삭제..!
    toDos = toDos.filter((item) => item.id != parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){//newTodo는 todoSubmit함수에서 보낸 object이다.
    const li = document.createElement("li");
    li.id = newTodo.id; // li태그에 id를 준다..! newTodo는 이 함수가 호출될때 담긴 인자임 즉, newTodoObj
    const span = document.createElement("span"); // span 태그 생성
    span.innerText = newTodo.text; // span태그 안에 작성했던 문자들을 넣어준다.
    const button = document.createElement("button"); // button 태그 생성
    button.innerText = "❌"; // button 태그 안에(>x<) X를 넣어준다.
    
    //append는 맨 뒤에 있어야 한다.
    li.appendChild(span); // li태그 안에 span태그를 자식태그로 넣어준다.
    li.appendChild(button); // li태그 안에 button태그를 자식태그로 넣어준다.
    todoList.appendChild(li); // ul태그 안에 li태그를 자식태그로 넣어준다.

    button.addEventListener("click",deleteTodo);
}

function todoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value; // input.value의 값을 newTodo에 복사하고
    todoInput.value = ""; // 엔터를치면 인풋바가 비워지도록 설정
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj); // toDos는 배열 (맨 상단에 선언함)
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit",todoSubmit);

// function sayHello(item){
//     console.log("what the fuck",item);
// }

const savedTodos = localStorage.getItem(TODOS_KEY); // 여기는 아직 String 형태임
console.log(savedTodos);
if(savedTodos!=null){
    const parsedTodos = JSON.parse(savedTodos); // String 를 array로...
    //array에 있는 각각의 item에 대해 fucntion을 실행할 수 있게 해준다.
    //둘다 똑같다. 방식이 다를뿐..
 
    // parsedTodos.forEach(sayHello);//forEach는 반복문이다. 배열에 각각의 item에 대해 function을 실행하게 해줌
    
    //arrow function..forEach((item)=> 사용할 function 기능)
   //paintTodo("a"~"c")를 하는 것과 같다.
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
    //새로운 array에도 기존 데이터들을 포함하고 싶다면 
    //return true를 해야한다!!!!
    //false를 리턴하면 그 item은 새로운 array에 포함X

//.filter : forEach처럼 array에 있는 item들이 하나씩 다 들어감
