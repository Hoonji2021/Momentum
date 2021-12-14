const quotes =[
    {quote:"당연히 흐르는 시간처럼 추운 겨울은 다음의 계절을 반드시 데리고 온다.",
     writer:"공부해 이쉐키야"    
},
    {quote:"고뇌에 지는 것은 수치가 아니다. 쾌락에 지는 것이야말로 수치다.",
     writer:"공부해 이쉐키야"    
},
    {quote:"반복은 천재를 낳고 믿음은 기적을 낳는다.",
     writer:"정신차려 이쉐키야"    
},
    {quote:"이바닥에서 성공하고 싶거든 같은 꿈을 꾸는 경쟁자보다 더 많은 시간을 노력하고 또 노력해라. 비교도 안될정도로.",
     writer:"공부해 이쉐키야"    
},
    {quote:"99도까지 열심히 온도를 올려놓아도 마지막 1도를 넘기지 못하면 물이 끓지 않는다. 물을 끓이는건 마지막 1도, 포기하고 싶은 바로 그 1분이다.",
     writer:"힘드냐 이쉐키야"    
},
    {quote:"너에게 너 자신이, 그리고 너를 사랑하는 사람들이 걸었던 3년간의 기대를 네가 처참히 무너뜨렸을 때 그 비참함을 감히 네가 감당할 수 있다면 지금처럼 살아도 좋다.",
     writer:"공부 더 해 이쉐키야"    
},
    {quote:"정말 신기하단 말이야. 나는 분명히 무언가를 위해 고민하고, 생각하고, 계획하는데 변하는게 하나도 없는거야.. 당연하지 넌 아무것도 하고 있지 않잖아.",
     writer:"미쳤냐 이쉐키야"    
},
    {quote:"죄송합니다. 합격자 명단에 없습니다. 본사에 지원해주셔서 감사합니다. 더 공부하고 오세요 ㅅㄱ",
     writer:"눕지마 이쉐키야"    
},
    {quote:"실력없는 자존심만큼 비참한 것은 없다.",
     writer:"지금 시작해 이쉐키야"    
},
    {quote:"왜 다시 과거로 돌아가 살고 싶어 하는가? 당신은 매일 아침 새로운 인생을 시작하고 있는데.",
     writer:"장난하냐 이쉐키야"    
}

];

const quote = document.querySelector("#quote span:first-child");
const writer = document.querySelector("#quote span:last-child");
const quoteTotal = quotes.length;
const todayQuote = quotes[Math.floor(Math.random()*quoteTotal)];

quote.innerText = todayQuote.quote;
writer.innerText = todayQuote.writer;