function getOperator(text) {
    let operator;

    do {
        operator = prompt(text)
    }while (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*');

    return operator;
}

function getNumber(text) {
    let result;

    do {
        result = +prompt(text);
    }while (isNaN(result));

    return result;
}

function calculator(operator, numberA, numberB) {
    let result = 0;

    switch (operator) {
        case '+':
            result = numberA + numberB;
            break;
        case '-':
            result = numberA - numberB;
            break;
        case '/':
            result = numberA / numberB;
            break;
        case '*':
            result = numberA * numberB;
            break;
    }

    return alert(`${numberA} ${operator} ${numberB} = ${result}`);
}

const operator = getOperator('Please choose operator ( + - / *)');
const numberA = getNumber('Enter number A');
const numberB = getNumber('Enter number B');
calculator(operator, numberA, numberB);