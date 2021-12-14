const age = parseInt(prompt("너 몇살이니"));

if(isNaN(age) == true || age < 0){//true
    console.log("please write a real positive number");
}else if(age < 18){ // false
    console.log("you are too young..")
}else if(age >=18 && age <= 50){
    console.log("you can drink!");
}else if(age > 80 && age <=99){
    console.log("you should exercise");
}else if(age == 100){
    console.log("wow you are wise");
}


//isNaN : 숫자가 아닌가? 맞으면 true 틀리면 false
//console.log(isNaN(age));
//const age = parseInt(15); 

//console.log(age);//age의 타입은 String(디폴트)이다.

//타입을 변경하는 법 String -> integer
//parseInt()

// const calculator={
//     plus:function(a,b){
//         return a+b;
//     },
//     minus: function(a,b){
//         return a-b;
//     },
//     devide: function(a,b){
//         return a/b;
//     },
//     multiple: function(a,b){
//         return a*b;
//     }
// }
// const plusResult = calculator.plus(2,3);
// const minusResult = calculator.minus(2,plusResult);
// const devideResult = calculator.devide(10,minusResult);
// const multipleResult = calculator.multiple(devideResult,plusResult);
// const age = 29;
// function calAge(ageOfForeigner){
//     alert(age) OfForeigner + 2;
// }

// const krAge = calAge(age);
// console.log(krAge);




//계산기 만들기
// const calculator = {
//     add: function(a,b){
//         alert(a+b);
//     },
//     minus: function(a,b){
//         alert(a-b);
//     },
//     divide:function(a,b){
//         alert(a/b);
//     },
//     multiple: function(a,b){
//         alert(a*b);
//     },
//     power : function(a,b){
//         alert(a**b);
//     }
// };

// calculator.add(2,5);
// calculator.minus(150,50);
// calculator.divide(26,8);
// calculator.multiple(7,7);
// calculator.power(2,12);











// const player = {
//     name:'jihoon',
//     sayHello: function (a){
//         console.log(a+" hello!");
//     },
//     sayJihoon: function(a,b){
//         console.log("jihoon"+a+" "+b);
//     }
// }
// console.log(player.name);
// player.sayHello("jihoon");
// player.sayJihoon("sojung");
// player.sayJihoon("s age = ",25);

// const choongang = ["jihoon"];
// choongang.push("kyeongsong");
// choongang.push("hojoon");
// choongang.push("hangle")
// choongang.push("seheon");
// choongang.push("geomhi");
// console.log(choongang);

// choongang[0]="hoonji";
// console.log(choongang);












//-----------------------------------
// //player 객체 생성
// const player = {
//     name : "wlgns",
//     points: 10,
//     fat:true,

// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// //player = 'jihoon'; 은 안됌
// //객체 자체를 바꾸는 것은 안된다.
// player.name='jihoon';
// player.fat = false;
// player.points = player.points + 15;
// //객체 안에 없는 변수 생성
// player.age = 29; // 나이 추가
// console.log(player);
// console.log(player.points);

//---------------------------------------
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri"; 
// const sat = "sat";
// const sun = "sun";

// const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];

// const nonsenese = [1,2,"hello", false, true, null,undefined,"jihoon"];

// // array에서 item 받아오기
// console.log(daysOfWeek[0],nonsenese[2]);


// //array에 item 추가하기
// daysOfWeek.push("헐");
// console.log(daysOfWeek);

// const toBuy = ['potato','apple','pizza','nuddle'];
// toBuy.push("kimbab");
// console.log(toBuy);
//console.log(toBuy[1]);


//----------------------------
// const amIFat = null;
// console.log(amIFat);

// let something;
// console.log(something );

//----------------------------
// const a = 5;
// const b = 2;
// let myName = "jihoon";

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello "+myName);
// myName = "jung";
// console.log("your name :"+myName);