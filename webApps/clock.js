const clockDisplay = document.getElementById('clock-display');
function updateTime (){
    const time = new Date();
    const hours = time.getHours().toString().padStart(2, 0);
    const minutes = time.getMinutes().toString().padStart(2, 0);
    const seconds = time.getSeconds().toString().padStart(2, 0);
    
    if(hours<12){
        clockDisplay.textContent = `${hours}:${minutes}:${seconds} AM`
    }
    else {
        clockDisplay.textContent = `0${hours-12}:${minutes}:${seconds} PM`
    }

    
}

setInterval(updateTime, 1000);

// CREATING A DATE DISPLAY
const month =  document.getElementById('monthEl');
const day =  document.getElementById('dayEl');
const dayNum =  document.getElementById('dayNum');
const yearEl =  document.getElementById('yearEl');


function updateCalendar (){
    const today = new Date();
    

    month.innerText = today.toLocaleString("en", {month: "long"});
    day.innerText = today.toLocaleString("en", {weekday: "long"});
    dayNum.innerText = today.getDate();
    yearEl.innerText = today.getFullYear();
}

updateCalendar();


















// function updateDate () {
//     const date = new Date();
//     // const year = date.getFullYear();
//     // const month = date.getMonth() + 1;
//     // const day = date.getDate().toString().padStart(2, 0);

//     const options = {
//         day: "numeric", month:"long", year:"numeric"
//     };
//     dateDisplay.textContent = date.toLocaleDateString("en-GB", options)
// }

// updateDate();


// STOPWATCH JS SCRIPT
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');


let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer (){
    startTime = Date.now() - elapsedTime;

  

    timeInterval = setInterval( ()=>{
          elapsedTime = Date.now() - startTime;
          display.textContent = formatTime(elapsedTime);
    } ,10)
    

    startBtn.disabled = true;
    stopBtn.disabled = false;
}


function formatTime(elapsedTime){
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 *60)) / 1000);
    const minutes = Math.floor(elapsedTime % (1000 * 60 * 60) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    return(
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")  + ":" + 
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")  + ":" + 
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    )
}

startBtn.addEventListener('click', startTimer);

stopBtn.addEventListener('click', ()=>{
    clearInterval(timeInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
})

resetBtn.addEventListener('click', ()=>{
    elapsedTime = 0
    display.textContent = "00:00:00:00";
    startBtn.disabled = false;
    stopBtn.disabled = false;
})


