// 1. press one number - save it
// 2. press operation - save it
// 3. press second numbber - save second number 
// 4. press equal sign - make calculation

let firstNumber 
let secondNumber
let operation
let step = 0
let results = 0

const numArray= []

const display = document.getElementById('display')

function getNumber (num) {
    if (step === 0 || step === 1){
        numArray.push(num)
        step = 1
        firstNumber = numArray.joint('')
        display.value = firstNumber
    }