




let screen = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let clear = document.querySelector('.clearDisplay');
let equal = document.querySelector('.calculateEquals');

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        // finding pressed button , run function if event selected
        let value = e.target.dataset.num;
        console.log(e.target.dataset)
        screen.textContent += value;
    })
})

 clear .addEventListener ('click', function (e){
    screen.textContent = "";
 })
