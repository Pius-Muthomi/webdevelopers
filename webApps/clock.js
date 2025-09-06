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