let numbers = [];
let timePassed;

let output = document.querySelector('#output');
let point = document.querySelector('#point');
let equal = document.querySelector('equal');
let exclude = document.querySelector('#exclude');



document.querySelector('#seven').addEventListener('click', () => { handleClick(7) });
document.querySelector('#eight').addEventListener('click', () => { handleClick(8) });
document.querySelector('#nine').addEventListener('click', () => { handleClick(9) });
document.querySelector('#plus').addEventListener('click', () => { handleClick('+') });
document.querySelector('#four').addEventListener('click', () => { handleClick(4) });
document.querySelector('#five').addEventListener('click', () => { handleClick(5) });
document.querySelector('#six').addEventListener('click', () => { handleClick(6) });
document.querySelector('#minus').addEventListener('click', () => { handleClick('-') });
document.querySelector('#one').addEventListener('click', () => { handleClick(1) });
document.querySelector('#two').addEventListener('click', () => { handleClick(2) });
document.querySelector('#three').addEventListener('click', () => { handleClick(3) });
document.querySelector('#mutiply').addEventListener('click', () => { handleClick('*') });
document.querySelector('#zero').addEventListener('click', () => { handleClick(0) });
document.querySelector('#divide').addEventListener('click', () => { handleClick('/') });

function handleClick(num) {
    if(typeof num === 'string') {
        if(typeof numbers[numbers.length - 1] === 'string') {
            numbers.pop();
            output.innerHTML = output.textContent.slice(0, -1);
        }
    }
    numbers.push(num);
    output.innerText += num
}

/*
criar um código em que o usuario digita o número e este é colocado em um array quando ele começar a escrever um novo dígito, esse digito vai ser armazenado em um objeto e quando ele começar a escrever o segundo número, o array será limpo e será colocado o sinal nele, e este será armazenado no objeto quando o sinal de igual OU outro sinal for pressionado, o último número também sera armazenado no objeto quando o sinal de igual for pressionado.
let sign
*/

function operate(num1, sign, num2) {
    switch (sign) {
        case "+":
            add(num1, num2)
            break;

        case "-":
            subtract(num1, num2)
            break;

        case "*":
            mutiply(num1, num2)
            break;

        case "/":
            divide(num1, num2)
            break;

        default:
            alert("what the hell did you do??")
            break;
    }
}

function add(num1, num2) {
    console.log(num1 + num2); 
}
function subtract(num1, num2) {
    console.log(num1 - num2); 
}
function mutiply(num1, num2) {
    console.log(num1 * num2); 
}
function divide(num1, num2) {
    console.log(num1 / num2); 
}
