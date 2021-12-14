
const API_KEY = "05d1e47f6daa66568bdac49c0b5afc5f";



function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
        .then((response) => response.json())//json 데이터들을 불러온다.
        .then((data) => { //data = JSON data..
            const city = document.querySelector("#weather .w1");
            city.innerText = "도시 : "+data.name;
            const weather = document.querySelector("#weather .w2");  
            weather.innerText =  "오늘날씨 : "+data.weather[0].description;
            const temp = document.querySelector("#weather .w3");
            temp.innerText = `온도 / 체감온도 : ${data.main.temp} / ${data.main.feels_like}`;   
           
            
        });
}
function onGeoError(){
    alert("널 찾을 수 없엉..");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);