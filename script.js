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
let num1;
let num2;
let values = [
    
]

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

// CALLS THE CORRECT OPERATOR

function operate(x, y, operator) {
    x = Number(x)
    y = Number(y)
    switch (operator) {
        case '/': return divide(x, y);
        case '*': return multiply(x, y);
        case '-': return subtract(x, y);
        case '+': return add(x, y);
        default:
            return y
    };
};
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// USE THIS FUNCTION IDIOT

function operationHandler(op) {
    if (values.length < 1) {
        num1 = displayValue
        displayTop.textContent = `${num1} ${op}`;
        displayBot.textContent = ``
        values.push({number: `${num1}`, operator: `${op}`})
    } else if (values.length > 0)
}
console.log(values)

divideBtn.addEventListener('click', () => operationHandler('/'));
multiplyBtn.addEventListener('click', () => operationHandler('*'));
subtractBtn.addEventListener('click', () => operationHandler('-'));
addBtn.addEventListener('click', () => operationHandler('+'));

function equals() {
    num2 = displayValue
    displayBot.textContent = operate(values[0].number, num2, values[0].operator)
}
equalsBtn.addEventListener('click', () => equals());

// TAKES NUMBERS FROM ARRAY AND PERFORMS/CHAINS CORRECT OPERATORS

function calculate(state) {
    return state.reduce(
        (sum, value) => {
            return operate(sum, value.number, value.operator)
        },
        0
    )
}

// TAKES INPUT VALUES FROM USER

numBtns.forEach(numBtn => numBtn.addEventListener('click', function () {
    displayValue = displayBot.textContent += numBtn.innerHTML;
}));

// RESETS CALCULATOR AND CLEARS SCREEN

function clear() {
    displayBot.textContent = '';
    displayTop.textContent = '';
    displayValue = 0;
    operator = '';
}
clearBtn.addEventListener('click', () => clear());

