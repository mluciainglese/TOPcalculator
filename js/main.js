let isSecondNumber = false
let justCalculated = false
let isError = false
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
    if (b === 0){
        isError = true
        return "I don't think so" // Makes sure you can't divide by zero
        
    }
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
        return "Error"
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
    let clickedValue = clickedButton.getAttribute("data-value")

    // Prevents decimal point to be entered more than once per number

    if (clickedValue === "."){
        if(!isSecondNumber){
            if (firstNumber.includes(".")){
                return
            }
        } else if (secondNumber.includes(".")){
            return
        }
    }

    // Clear screen if there's an error, keeps calculator from trying to do a calculation using the error as a parameter

    if (isError){
        clearScreen()
        isError = false // resets error state
    }

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

    // Storing numbers and preventing long numbers

    if(!isSecondNumber){
        if(firstNumber.length >= 10){
            return
        }
        firstNumber += clickedValue
    } else {
        if(secondNumber.length >= 10){
            return
        }
        secondNumber += clickedValue
    }

    // Update display
    
    display.textContent += clickedValue
}

// Handling operators

function handleOperator(event){
    
    // Prevents adding operators when an error occurred

    if (isError){
        return
    }

    // Perform calculation once there's a second number added

    if(isSecondNumber){
        calculate()
    }

    // Prevents calculations when there's no initial value

    if (firstNumber === ""){
        return
    }

    // Makes sure first calculated number is show when chaining calculations

    if(justCalculated){
        display.textContent = firstNumber
        justCalculated = false
    }

    // Switches variable to true to allow calculations

    isSecondNumber = true

    // Stores operator to be used in calculation

    let clickedButton = event.target

    operator = clickedButton.getAttribute("data-value")

    // Updates display

    display.textContent += ` ${operator} `
}

// Perform calculations

function calculate(){
    let num1 = parseFloat(firstNumber)
    let num2 = parseFloat(secondNumber)

    // Stops calculations if there's an error

    if(isError){
        return
    }

    // Calculation time

    if(secondNumber === ""){
        result = firstNumber
    } else {
        result = operate(num1, operator, num2)
    }

    // Prevents calculations when pressing equals button first

    if(firstNumber === "" && operator === "" && secondNumber === ""){
        display.textContent = 0
        return
    }

    // Limits results to 12 characters

    if(result.length >= 12){
        result = result.slice(0, 12) + "..."
    }
    
    // Makes sure new number doesn't get appended to previous result when starting a new calculation without clearing display

    justCalculated = true

    // Updates display and clears variables

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
    isError = false
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

