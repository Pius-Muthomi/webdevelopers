const clockDisplay = document.getElementById('clock-display');
const dateDisplay = document.getElementById('date-display');
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

function updateDate () {
    const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1;
    // const day = date.getDate().toString().padStart(2, 0);

    const options = {
        day: "numeric", month:"long", year:"numeric"
    };
    dateDisplay.textContent = date.toLocaleDateString("en-GB", options)
}

updateDate();