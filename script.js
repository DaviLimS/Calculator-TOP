let numbers = [];
let time;
var result;

let output = document.querySelector('#output');
let exclude = document.querySelector('#exclude');

exclude.addEventListener('mousedown', () => {
    time = Date.now();

});

exclude.addEventListener('mouseup', () => {
    if(Date.now() - time >= 750) {
        numbers = []
        output.innerText = '';
    }
    else {
        output.innerText = output.textContent.slice(0, -1);
        numbers.pop();
    }
})

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

document.querySelector('#point').addEventListener('click', () => { handleClick('.') });
document.querySelector('#equal').addEventListener('click', () => {
    evaluate(numbers.join(''));
});

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

function evaluate(expression) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = 'result = ' + expression + ';';
    document.body.appendChild(script);
    output.innerText = result;
    numbers = [result];
    document.body.removeChild(script);
}
