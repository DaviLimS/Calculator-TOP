let numbers = [];

let output = document.querySelector('#output');
let btn7 = document.querySelector('#seven');
let btn8 = document.querySelector('#eight');
let btn9 = document.querySelector('#nine');
let plus = document.querySelector('#plus');
let btn4 = document.querySelector('#four');
let btn5 = document.querySelector('#five');
let btn6 = document.querySelector('#six');
let minus = document.querySelector('minus');
let btn1 = document.querySelector('#one');
let btn2 = document.querySelector('#two');
let btn3 = document.querySelector('#three');
let times = document.querySelector('#mutiply');
let point = document.querySelector('#point');
let btn0 = document.querySelector('zero');
let equal = document.querySelector('equal');
let bar = document.querySelector('#divide');

function handleClick(num) {
    if(typeof num === 'string') {
        if(typeof numbers[numbers.length - 1] === 'string') {
            numbers.pop();
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
