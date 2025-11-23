let current = [];
let numbers = [];
let index = 0;

let btn7 = document.querySelector("#seven")
btn7.addEventListener(onclick, numbers(7), 'click')

function numbers(btn) {
    numbers[index] = current[0];
    current = [];
    current[0] = btn;
    index++;
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
