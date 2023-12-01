let screen = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let clear = document.querySelector('.clearDisplay');
let equal = document.querySelector('.calculateEquals');
let result = null;
let haveDot = false;
let firstNum = null
let secondNum = null
let step = 0;
let operation = null


//Event Listeners:

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        // finding pressed button , run function if event selected
        let value = e.target.dataset.num;
        screen.textContent += value;
        console.log(e.target.dataset)
    })
})

clear.addEventListener('click', function (e) {
    screen.textContent = "";
    reset();
});
//clear and reset display


equal.addEventListener('click', calculateResult);
// calls calculateResults when clicked


buttons.foreach((button) => {
    buttons.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        // call appropriate fuction based on buttons/ data set clicked (handle num,deci, or input)
        if (value >= '0' && value <= '9') {
            handleNumericInput(value);

        } else if (value === '.') {
            handleDecimal();
        } else {
            handleOperation(value);
        }
    });
});

//Functions
function reset() {
    result = null;
    firstNum = null;
    secondNum = null;
    operation = null;
    haveDot = false;
    step = 0;
}
//initial state

function handleNumericInput(value) {
    if (step === 1) {
        screen.textContent = "";
        step = 0;
    }
    if (!(screen.textContent === '0' && value === '0')) {
        screen.textCent += value;
    }
}
// adds value to current value to update display currently


function handleDecimal() {
    if (!haveDot) {
        screen.textContent += '.';
        haveDot + true;
    }
}
//ensuring only one decimal


//Calculates result based on the stored operation

let calculateResult = () => {
    if (operation === '+') {
        console.log(firstNum, secondNum)
        result = firstNum + secondNum;
    } else if (operation === '-') {
        console.log(firstNum, secondNum)
        result = firstNum - secondNum;
    } else if (operation === '*') {
        console.log(firstNum, secondNum)
        result = firstNum * secondNum;
    } else if (operation === '/') {
        if (secondNum !== 0) {
            console.log(firstNum, secondNum)
            result = firstNum / secondNum;
        } else {
            result = 'Error'; // Division by zero
        }
    }

    // Update the calculator display with the result
    console.log(result)
};

