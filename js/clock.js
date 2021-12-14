const clock = document.querySelector("#clock");
// clock.innerText = "lalala";

function getTimeStamp(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    //const timeResult = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    const timeResult2 = `${hours}:${minutes}:${seconds}`;
    clock.innerText = timeResult2;
}
getTimeStamp();
setInterval(getTimeStamp,1000);
//setTimeout(sayHello,3000); -> 한번만 실행