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

// BMI CALCULATOR // BMI CALCULATOR// BMI CALCULATOR
let heightInput = document.getElementById('height');
let weightInput  = document.getElementById('weight');
let BMIresult = document.getElementById('BMIresult');
const resetBtn = document.getElementById('resetBtn');
const calcBtn = document.getElementById('calcBtn');
let BMI; 

function calcBMI(){
    
    height = parseFloat(heightInput.value)/100;
    
    weight = parseFloat(weightInput.value);
    

    if(!height || !weight || height <= 0 || weight <= 0){
        window.alert= 'Please enter a valid height and weight';
        
    }
    else{
        BMI = weight/(height*height);
        BMIresult.textContent = `BMI = ${BMI.toFixed(1)}`
    };
    // CALCULATE BMI
    
    
}


[height, weight].forEach(el => el.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        calcBMI();
    }
}))

resetBtn.addEventListener('click', (e)=> {
    heightInput.value = "";
    weightInput.value = "";
    BMIresult.textContent = "Enter weight & height to calculate your BMI";
    setTimeout(() =>{
        BMIresult.textContent = ''
    }, 3000)
    
})









// BMI CALCULATOR