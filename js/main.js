let isSecondNumber = false
let justCalculated = false
let firstNumber = ""
let secondNumber = ""
let operator = ""
let result = ""

// Basic calculation functions

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
 return a / b
}

// Function to call the above functions

function operate(a, op, b){
    if (op === "+"){
        return add(a, b)
    } else if (op === "-"){
        return subtract(a, b)
    } else if (op === "*"){
        return multiply(a, b)
    } else if (op === "/"){
        return divide(a, b)
    } else {
        return "Err"
    }
}

// Targetting different types of buttons

let numButtons = document.querySelectorAll(".num")
let opButtons = document.querySelectorAll(".op")
let clear = document.querySelector(".clear")
let del = document.querySelector(".del")
let equalsButton = document.querySelector(".equals-button")
let display = document.querySelector("#outputDisplay")

// On click event listeners for numbers and operators

numButtons.forEach(button =>{
    button.addEventListener("click", updateDisplay)
})

opButtons.forEach(button =>{
    button.addEventListener("click", handleOperator)
})

equalsButton.addEventListener("click", calculate)

clear.addEventListener("click", clearScreen)

del.addEventListener("click", deleteLast)

// Update display when buttons are clicked (using isSecondNumber to know which part of the calculation is happening)

function updateDisplay(event){
    let clickedButton = event.target

    // Start fresh with new number if calculation was just made 

    if (justCalculated){
        if (!operator){
            firstNumber = ""
        }
        secondNumber = ""
        isSecondNumber = false
        justCalculated = false
        display.textContent = ""
    }

    if(!isSecondNumber){
        firstNumber += clickedButton.getAttribute("data-value")
    } else {
        secondNumber += clickedButton.getAttribute("data-value")
    }
    
    display.textContent += clickedButton.getAttribute("data-value")
}

// Handling operators

function handleOperator(event){
    if(isSecondNumber){
        calculate()
    }

    if (firstNumber === ""){
        return
    }

    // Makes sure first calculated number is show when chaining calculations

    if (justCalculated){
        display.textContent = firstNumber
        justCalculated = false
    }

    isSecondNumber = true
    let clickedButton = event.target

    operator = clickedButton.getAttribute("data-value")

    display.textContent += ` ${operator} `
}

// Perform calculations

function calculate(){
    let num1 = parseFloat(firstNumber)
    let num2 = parseFloat(secondNumber)

    if(secondNumber === ""){
        result = firstNumber
    } else {
        result = operate(num1, operator, num2)
    }
    
    // Makes sure new number doesn't get appended to previous result when starting a new calculation without clearing display

    justCalculated = true

    display.textContent = result

    firstNumber = result
    secondNumber = ""
    operator = ""
    isSecondNumber = false
}

// Clears screen or deletes last number

function clearScreen(){
    firstNumber = ""
    secondNumber = ""
    operator = ""
    result = ""
    isSecondNumber = false
    justCalculated = false
    display.textContent = ""
}

function deleteLast(){

    if(secondNumber !== ""){
        secondNumber = secondNumber.slice(0, -1)
    } else if (operator !== "" && secondNumber === ""){
        operator = operator.slice(0, -1)
    } else if (firstNumber !== "" && operator === "" && secondNumber === ""){
        firstNumber = firstNumber.slice(0, -1)
    }

    display.textContent = firstNumber + operator + secondNumber
}