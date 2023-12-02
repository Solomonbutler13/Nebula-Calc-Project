let screen = document.getElementById('display');
let numberButtons = document.querySelectorAll('.number-btn');
let operationButtons = document.querySelectorAll('.operation-btn');
let clear = document.querySelector('.clearDisplay');
let equal = document.querySelector('.calculateEquals');
let result = null;
let haveDot = false;
let firstNum = null;
let secondNum = null;
let step = 0;
let operation = null;

numberButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        handleNumericInput(value);
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        handleOperation(value);
    });
});

clear.addEventListener('click', function (e) {
    screen.textContent = "";
    reset();
});

equal.addEventListener('click', calculateResult);

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
        screen.textContent = "";
        step = 0;
    }
    if (!(screen.textContent === '0' && value === '0')) {
        screen.textContent += value;
    }
}

function handleOperation(operator) {
    if (firstNum === null) {
        firstNum = parseFloat(screen.textContent);
        operation = operator;
        step = 1;
    } else {
        secondNum = parseFloat(screen.textContent);
        calculateResult();
        operation = operator;
        step = 1;
        haveDot = false; // Reset the decimal point flag
    }
}

function handleDecimal() {
    if (!haveDot) {
        screen.textContent += '.';
        haveDot = true;
    }
}

function calculateResult() {
    if (operation !== null) {
        secondNum = parseFloat(screen.textContent);

        if (operation === '+') {
            result = firstNum + secondNum;
        } else if (operation === '-') {
            result = firstNum - secondNum;
        } else if (operation === '*') {
            result = firstNum * secondNum;
        } else if (operation === '/') {
            if (secondNum !== 0) {
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
