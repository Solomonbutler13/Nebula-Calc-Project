
//Variable Declarations:

let screen = document.getElementById('display');
let numberButtons = document.querySelectorAll('.number-btn');
let operationButtons = document.querySelectorAll('.operation-btn');
let clear = document.querySelector('.clearDisplay');
let equal = document.querySelector('.calculateEquals');
let decimal = document.querySelector('.decimal-btn');
let result = null;
let haveDot = false;
let firstNum = null;
let secondNum = null;
let step = 0;
let operation = null;

// Event Listeners:

numberButtons.forEach((button) => {
    //iterating over each buttton
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        // assign variable to value.
        handleNumericInput(value);
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        //assign variables to value.
        handleOperation(value);
    });
});

clear.addEventListener('click', function (e) {
    screen.textContent = "";
    //empty string 
    reset();
    // default
});

equal.addEventListener('click', calculateResult);

decimal.addEventListener('click', handleDecimal);

//Functions

function reset() {
    result = null;
    firstNum = null;
    secondNum = null;
    operation = null;
    haveDot = false;
    step = 0;
}

function handleNumericInput(value) {
    if (step === 1) {
        //if step 1 there should be a empty string prior.
        screen.textContent = "";
        step = 0;
    }
    if (!(screen.textContent === '0' && value === '0')) {
        // if the screen doesnt show zero and the value is zero it skips adding zeros to avoid having leading or multiple zeros.
        screen.textContent += value;
    }
}

function handleOperation(operator) {
    if (firstNum === null) {
        // if first num isnt entered
        firstNum = parseFloat(screen.textContent);
        //parse the content of display into "the clouds" and assign variable "firstNum"
        operation = operator;
        // assigns Value
        step = 1;
    } else { // if the first number has aready been entered 
        secondNum = parseFloat(screen.textContent);
        // send current display content into the "clouds"
        calculateResult(); //perform operation
        operation = operator;
        step = 1;
        haveDot = false; // ensures if a decimal was entered before the operation, it doesnt show in the new operand.
    }
}

function handleDecimal() {
    if (!screen.textContent.includes('.')) {
        screen.textContent += '.';
    }
}  // if screen doesnt have a dot add one and then no reason for an else after to ensure there is only one decimal

function calculateResult() { // check for operation 
    if (operation !== null) { // if there is an operation
        secondNum = parseFloat(screen.textContent); // send current display into "clouds" and assign to the secondNum 
        if (operation === '+') {
            result = firstNum + secondNum;
        } else if (operation === '-') {
            result = firstNum - secondNum;
        } else if (operation === '*') {
            result = firstNum * secondNum;
        } else if (operation === '/') {
            if (secondNum !== 0) { // check for second number not to be zero
                result = firstNum / secondNum;
            } else {
                result = 'Error'; // Division by zero
            }
        }

        screen.textContent = result;
        reset();
    }
}

reset();
