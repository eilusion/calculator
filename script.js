const displayBot = document.querySelector('.displayBot');
const displayTop = document.querySelector('.displayTop');
const numBtns = document.querySelectorAll('.numBtn');
const divideBtn = document.querySelector('.divide');
const multiplyBtn = document.querySelector('.multiply');
const subtractBtn = document.querySelector('.subtract');
const addBtn = document.querySelector('.add');
const decimal = document.querySelector('.decimal');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clearBtn');
let displayValue;
let firstNum;
let secondNum;
let operator;

function divide(x, y) {
    return x / y;
};
function multiply(x, y) {
    return x * y;
};
function subtract(x, y) {
    return x - y;
};
function add(x, y) {
    return x + y;
};

function operate(x, y, operator) {
    switch (operator) {
        case '/': return divide(x, y);
        case '*': return multiply(x, y);
        case '-': return subtract(x, y);
        case '+': return add(x, y);
    };
};

numBtns.forEach(numBtn => numBtn.addEventListener('click', function () {
    let sum = displayBot.textContent += numBtn.innerHTML;
    displayValue = sum;
    console.log(displayValue);
}));

divideBtn.addEventListener('click', function () {
    firstNum = Number.parseFloat(displayValue);
    displayTop.textContent = `${firstNum} ÷`;
    displayBot.textContent = '';
    operator = '/';
});

multiplyBtn.addEventListener('click', function () {
    firstNum = Number.parseFloat(displayValue);
    displayTop.textContent = `${firstNum} *`;
    displayBot.textContent = '';
    operator = '*';
});

subtractBtn.addEventListener('click', function () {
    firstNum = Number.parseFloat(displayValue);
    displayTop.textContent = `${firstNum} -`;
    displayBot.textContent = '';
    operator = '-';
});

addBtn.addEventListener('click', function () {
    firstNum = Number.parseFloat(displayValue);
    displayTop.textContent = `${firstNum} +`;
    displayBot.textContent = '';
    operator = '+';
});

equalsBtn.addEventListener('click', function () {
    secondNum = Number.parseFloat(displayValue);
    displayBot.textContent = operate(firstNum, secondNum, operator).toFixed(2);
    displayTop.textContent = `${firstNum} ${operator} ${secondNum} =`;
});

clearBtn.addEventListener('click', function () {
    displayBot.textContent = '';
    displayTop.textContent = '';
    displayValue = 0;
    firstNum = 0;
    secondNum = 0;
    operator = '';
});