const actions = {
    '+': function (obj) {
        let result = obj[1];

        for (let i = 2; i <= limit; i++) {
            result += obj[i];
        }

        return result;
    },
    '-': function (obj) {
        let result = obj[1];

        for (let i = 2; i <= limit; i++) {
            result -= obj[i];
        }

        return result;
    },
    '*': function (obj) {
        let result = obj[1];

        for (let i = 2; i <= limit; i++) {
            result *= obj[i];
        }

        return result;
    },
    '/': function (obj) {
        let result = obj[1];

        for (let i = 2; i <= limit; i++) {
            result /= obj[i];
        }

        return result;
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

function getLimit(text) {
    let answer = ' ';

    do {
        answer = prompt(text);
    } while (!isLimitValid(answer))

    return +answer;
}

function isLimitValid(value) {
    return isNumbersValid(value) &&
           value < 6 &&
           value > 1;
}

function getNumbers(limit) {
    let numbers = { };

    for(let newIndex = 1; newIndex <= limit; newIndex++) {
        do {
            numbers[newIndex] = +prompt(`Enter value ${newIndex}`);
        } while (!isNumbersValid(numbers[newIndex]))

    }


    return numbers;
}

function isNumbersValid(value) {
    return !isNaN(value) &&
           value !== null &&
           value !== '';
}

function getAction(operator, obj) {
    return actions[operator](obj);
}

function showResult(obj, operator, result, limit) {
    let answer = obj[1];

    for (let i = 2; i <= limit; i++) {
        answer += ` ${operator} ${obj[i]}`;
    }

    answer += ` = ${result}`;

    alert(answer);
}

const operator = getOperator();
const limit = getLimit('How many numbers ?');
const numbers = getNumbers(limit);
const result = getAction(operator, numbers);
showResult(numbers,operator,result,limit)