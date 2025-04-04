let currentNumber = ""
let operator = ""
let output = ""

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
let display = document.querySelector("#outputDisplay")

// On click event listeners for numbers and operators

numButtons.forEach(button =>{
    button.addEventListener("click", updateDisplay)
})

opButtons.forEach(button =>{
    button.addEventListener("click", handleOperator)
})

clear.addEventListener("click", clearScreen)

del.addEventListener("click", deleteLast)

// Update display when buttons are clicked

function updateDisplay(event){
    let clickedButton = event.target

    if (clickedButton.classList.contains("num")){
        currentNumber = clickedButton.getAttribute("data-value")
    } else if (clickedButton.classList.contains("op")){
        operator = clickedButton.getAttribute("data-value")
    }

    display.textContent += currentNumber
}

// Handling operators

function handleOperator(){

}

// Clears screen or deletes last number

function clearScreen(){
    display.textContent = ""
}

function deleteLast(){
    display.textContent = display.textContent.slice(0, -1)
}