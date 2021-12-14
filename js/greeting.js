const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
// const click = document.querySelector("a");
const USER_NAME = "username";
const savedUsername = localStorage.getItem(USER_NAME);

if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",ClickSubmit);
    // show input form
}else{
    paintGreetings(savedUsername);
}
function ClickSubmit(event){
    // preventDefault : 어떤 event의 기본 행동이든지 발생되지 않도록 막는것.
    event.preventDefault(); // SubmitEvent
    // const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USER_NAME,username);

    // greeting.innerText = "Hello! "+username;
    // (``) 백틱이라고 한다.. el태그랑 같이 쓰는거인듯.. 
    // 변수값을 String으로 사용할 때 사용한다..!
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}
// function ClickLink(event){
//     event.preventDefault();
//     console.dir(event);
// }



// click.addEventListener("click",ClickLink);
//submit 이벤트가 발생하면 브라우저가 알아서 저 function을 실행시킴
//addEventListener을 활용할때는 바로 실행시키려는게 아니다.

//이벤트가 발생할 때 브라우저가 애를 실행시킴 ->
//추가적인 정보(argument)를 가진채로 호출ClickSubmit(info)