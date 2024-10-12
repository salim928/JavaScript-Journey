// // TEXT BASED CALCULATOR
// //To convert a string into an integer, the module 'Parsefloat' is used

const prompt = require("prompt-sync")()

function getNumber(numberString) {
    //do something
    while (true) {
        const  number = parseFloat(prompt("Please enter number "+ numberString + ": "))
        if (isNaN(number)){
            console.log("Invalid Input.")
        }
        else{
            return number
        }
    }
    return 
}

const number1 = getNumber('One');
const number2 = getNumber('Two');

const operator = prompt("Enter sign: ");


let result;
let valid = true;

switch (operator) {
    case "+":
        result  = number1 + number2
        break;

    case "-":
        result = number1 - number2 
        break;

    case "*":
        result = number1 * number2
        break;
    
    case "/":
        if (number2 === 0){
            valid = false;
            console.log("Zero Division Error.")
        }
        result = number1 / number2
        break;

    default:
        console.log("Invalid")
        valid = false;
        break;

   
    
}
if (valid) console.log(number1, operator, number2, "=" , result)




//Writing functions in javascript



