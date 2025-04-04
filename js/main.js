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

// Update display when buttons are clicked

let numButtons = document.querySelectorAll(".num")
let opButtons = document.querySelectorAll(".op")
let clear = document.querySelector(".clear")
let del = document.querySelector(".del")
let display = document.querySelector("#outputDisplay")

numButtons.forEach(button =>{
    button.addEventListener("click", updateDisplay)
})

opButtons.forEach(button =>{
    button.addEventListener("click", updateDisplay)
})

clear.addEventListener("click", clearScreen)

del.addEventListener("click", deleteLast)

function updateDisplay(){
    
}

function clearScreen(){
    display.textContent = ""
}

function deleteLast(){
    display.textContent = display.textContent.slice(0, -1)
}