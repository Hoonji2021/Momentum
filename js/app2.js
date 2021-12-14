const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clicked = "clicked";
    //classList가 clicked를 포함하고 있는지 확인
    // add, remove도 잇다.
    //h1.classList.toggle()는 h1의 classList에 클레스 네임을 확인해서
    // 해당 이름이 있으면 지우고, 없으면 추가해줌
    h1.classList.toggle(clicked);
    
}

h1.addEventListener("click",handleTitleClick);




// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor == "blue"){
//         newColor = "tomato";
//     }else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click",handleTitleClick);





// function handMouseEnter(){
//     h1.innerHTML = "Mous is here!";
// }
// function handleMouseLeave(){
//     h1.innerHTML = "Mous is gone!";
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy(){
//     alert("복사는 불법입니다만..?")
// }
// function handleWindowOffline(){
//     alert("SOS no wifi");
// }
// function handleWindowOnline(){
//     alert("good wifi");
// }

//함수를 사용하는 방법은 2가지가 있다..
// 첫번째,
// h1.onclick=ChangeColor; 
// h1.onmouseenter=handMouseEnter;
// //두번째
// h1.addEventListener("mouseleave",handleMouseLeave);
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline",handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);


//querySelector은 element를 css방식으로 검색할 수 있다.
//특정 클래스 안에 있는 특정 태그만 가져오기
//querySelector 은 단 하나의 element를(맨첫번째꺼) return한다.
// const title2 = document.querySelector(".hello:nth-child(2) h1");
// console.dir(title2);


// function handleTitleClick(){
//     title2.style.color="red";
// }
// // 함수명 끝에 () 붙이지 않는다.
// title2.addEventListener("click",handleTitleClick);



//태그를 가지고올 때
// const title = document.getElementsByTagName("h1");
// console.log(title);




//getElementById >> 하나의 값
//getElementsByClassName >> 배열 한번에 여러개의 element를 가져와야 하는 경우 사용
//getElementsByTagName . . . >> 배열
// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);




//document 는 html 을 가리키는 객체이다.
//자바스크립트는 HTML element을 읽어오는 것이다.
//document가 모든 것의 출발점이다.
// const title = document.getElementById("title");//String형이어야 함.
// title.innerText = "Got you!"; // 태그 안에 text를 넣음
// console.log(title.id); // title
// console.log(title.className = "helloWord");
