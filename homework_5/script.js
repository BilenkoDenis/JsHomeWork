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
        return !isNaN(+number);
    });

    return numbers;

}

function isInputValid(value) {
    return value !== '' &&
           value !== null;
}

function calculate(operator, a, b) {

    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

function getResult(operator, numbers ) {

    let result = +numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        result = calculate(operator,result,+numbers[i]);
    }
    return result;
}

function showResult(numbers, operator, result) {
    return alert(`${numbers.join(` ${operator} `)} = ${result}`)
}


const operator = getOperator();
const numbers = getNumbers();
const result = getResult(operator, numbers);
showResult(numbers, operator, result)