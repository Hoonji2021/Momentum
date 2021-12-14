const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];
const choseImg = images[Math.floor(Math.random()*images.length)];
console.log(choseImg); // img3.jpg

const bgImg = document.createElement("img");
bgImg.src=`img/${choseImg}`;//<img src="img/img3.jpg">

//실제 html에 만든 태그를 추가
//append는 가장 뒤에, prepend는 가장 위에 오게한다.
document.body.appendChild(bgImg);