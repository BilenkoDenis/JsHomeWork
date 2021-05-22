const actions = {
    '+': function (operands) {
        return operands.reduce((acc, num) => acc + num);
    },
    '-': function (operands) {
        return operands.reduce((acc, num) => acc - num);
    },
    '*': function (operands) {
        return operands.reduce((acc, num) => acc * num);
    },
    '/': function (operands) {
        return operands.reduce((acc, num) => acc / num);
    }
}

function getOperator() {
    let answer = ' ';

    do {
        answer = prompt('Enter + - * /')
    } while (!isOperatorValid(answer))

    return answer;
}

function isOperatorValid(operator) {
    return operator === '+' ||
           operator === '-' ||
           operator === '*' ||
           operator === '/'
}


function getNumbers() {
    let numbers;
    let value;

    do {
       value = prompt("Enter numbers");
    } while (!isInputValid(value))

    let arr = value.split(',');

    numbers = arr.filter(function(number) {
        return !isNaN(+number) && number % 2 !== 0;
    });

    return numbers.map( i => +i );

}

function isInputValid(value) {
    return value !== '' &&
           value !== null;
}


function getAction(operator, numbers) {
    return actions[operator](numbers);
}


function showResult(numbers, operator, result) {
    return alert(`${numbers.join(` ${operator} `)} = ${result}`)
}


const operator = getOperator();
const numbers = getNumbers();
const result = getAction(operator, numbers);
showResult(numbers, operator, result)