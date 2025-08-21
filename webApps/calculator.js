// const display  = document.getElementById("display");

// function appendToDisplay(input){
//   display.value += input;

// }

// function clearDisplay(){
//     display.value = ""
// }

// function calculate(){
//     try{
//         display.value = eval(display.value); 
//     }
//     catch(error){
//         display.value = "Error";
//     }


// }

const display   = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;

}

function calculate(){
    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Syntax ERROR";
        display.style.fontFamily= "monospace";

    }

}
function clearDisplay(){
    display.value = "";
}

function clearOneNumber(){
    display.value = display.value.toString().slice(0, -1);
}


document.title = "My Calculator";

const username = "63";

const welcomeMsg = document.getElementById("welcomeMsg");

welcomeMsg.textContent += username === " "? 'Guest' : username;

