// TEMPERATURE COVERTER // TEMPERATURE COVERTER// TEMPERATURE COVERTER

const tempInput = document.getElementById('tempInput');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelcius = document.getElementById('toCelcius');
const tempResult = document.getElementById('tempResult')
let temp;

function convertTemp() {
    if(toFahrenheit.checked){
        temp = tempInput.value;
        temp = Number(temp);
        temp = temp * 9/5 + 32;
        tempResult.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelcius.checked){
        temp = tempInput.value;
        temp = Number(temp);
        temp = (temp-32) * 5/9;
        tempResult.textContent = temp.toFixed(1) + "°C";
    }
    else{
        tempResult.textContent = ("You have not entered any value")
    }

}

// TEMPERATURE COVERTER// TEMPERATURE COVERTER// TEMPERATURE COVERTER