
//анимация стикера
gsap.from(".santa", {opacity:0, duration:10, stagger:1, repeat:-1});

// этот  код позволяет включать и выключать музыку

const button = document.querySelector('.myButton'); // этот доступ нужен если использовать одну кнопку без изменения иконки
const audio = document.querySelector('#myAudio'); //доступ к audio
const play = document.querySelector('#play'); //доступ к кнопке play
const pause = document.querySelector('#pause'); //доступ к кнопке pause

play.addEventListener('click', playMusic );

function playMusic(){
    audio.play();
    pause.style.display = "block";
    play.style.display = "none";

}

pause.addEventListener('click', pauseMusic);

function pauseMusic(){
    audio.pause();
    pause.style.display = "none";
    play.style.display = "block";

}
//это код на нажатие одной кнопки без изменения иконки
// button.addEventListener('click', playMusic);
// function playMusic(){
//     if(audio.paused){
//         audio.play();
//     }

//     else {audio.pause();
//  }
// }



//счетчик
function christmasCountdown() {
    const christmasDate = new Date("May 25, 2023 11:41");
    const now = new Date();
    const diff = christmasDate - now;

   const msInSecond = 1000; //сколько миллисекунд в секунде - 1,000
   const msInMinute = 60 * 1000; // сколько миллисекунд в минуте - 60,000 
   const msInHour = 60 * 60 * 1000; // сколько миллисекунд в часе - 3 600 000
   const msInDay = 24 * 60 * 60 * 1000; // сколько миллисекунд в сутках - 86 400 000


   //дни
   const displayDay =  Math.floor(diff/msInDay);
   //здесь и далее константа склонения слов сопряженных с числительными
   const dayInRussia = function declOfNum(number, titles) { 
    cases = [2, 0, 1, 1, 1, 2]; 
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
   }   
   const dayInRussiaDisplay = dayInRussia(displayDay,['день', 'дня', 'дней']);
    //
   document.querySelector(".days").textContent = displayDay;
    document.querySelector(".text-days").innerHTML = dayInRussiaDisplay;

    //часы
   const displayHour = Math.floor((diff%msInDay) / msInHour);
   const hourInRussia = function declOfNum(number, titles) { 
    cases = [2, 0, 1, 1, 1, 2]; 
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
   }   
   const hourInRussiaDisplay = hourInRussia(displayHour,['час', 'часа', 'часов']);
   document.querySelector(".hours").textContent = displayHour;
   document.querySelector(".text-hours").innerHTML = hourInRussiaDisplay;
   

   //минуты
   const displayMinute = Math.floor((diff%msInHour) / msInMinute);
   const minuteInRussia = function declOfNum(number, titles) { 
    cases = [2, 0, 1, 1, 1, 2]; 
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
   }   
   const minuteInRussiaDisplay = minuteInRussia(displayMinute,['минута', 'минуты', 'минут']);
   document.querySelector(".minutes").textContent = displayMinute;
   document.querySelector(".text-minutes").innerHTML = minuteInRussiaDisplay;


   //секунды
   const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
   const secondInRussia = function declOfNum(number, titles) { 
    cases = [2, 0, 1, 1, 1, 2]; 
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
   }   
   const secondInRussiaDisplay = secondInRussia(displaySecond,['секунда', 'секунды', 'секунд']);
   document.querySelector(".seconds").textContent = displaySecond;
   document.querySelector(".text-seconds").innerHTML = secondInRussiaDisplay;

   if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID);
    merryChristmas();//вызов функции по достижении времени
   }

}

let timerID = setInterval(christmasCountdown, 1000);


//описание ф-ции по достижении времени
function merryChristmas() {
    const heading = document.querySelector("h1");
    const headingTwo = document.querySelector(".time");
    const timerOff = document.querySelector(".container");
    const santa = document.querySelector(".santa");
    heading.textContent = "С Новым годом!";
    headingTwo.textContent = "Мира, добра, счастья!";
    heading.classList.add("d-day");
    timerOff.style = "display:none";
    santa.classList.toggle('santaCame');
    
}


