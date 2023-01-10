function add(numberOne, numberTwo) {
    return numberOne += numberTwo
    }
    
     function subtract(numberOne, numberTwo) {
    return numberOne -= numberTwo
    }
    
     function multiply(numberOne, numberTwo) {
        return numberOne *= numberTwo
        }
    
     function divide(numberOne, numberTwo) {
        return numberOne /= numberTwo
        }



const inputOne =  prompt("enter a number")
const operational = prompt("enter an operational")
const inputThree = prompt("enter a number")

function calculate(inputOne, operational, inputThree){


if (operational === "+"){
    alert (add(Number(inputOne), Number(inputThree)))
    }
if (operational === "-"){
    alert (subtract(Number(inputOne), Number(inputThree)))
    }
if (operational === "*"){
    alert (multiply(Number(inputOne), Number(inputThree)))
    }
if (operational === "/"){
    alert (divide(Number(inputOne), Number(inputThree)))
    }

} 

calculate(inputOne, operational, inputThree)