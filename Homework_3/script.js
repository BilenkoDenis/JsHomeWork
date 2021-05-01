function getOperator() {
    let operator;

    do {
        operator = prompt('Please choose operator ( + - / *)')
    }while (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*');

    return operator;
}

function getNumberA() {
    let numberA;

    do {
        numberA = +prompt('Please enter number A')
    }while (isNaN(numberA));

    return numberA;
}

function getNumberB() {
    let numberB;

    do {
        numberB = +prompt('Please enter number B')
    }while (isNaN(numberB));

    return numberB;
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

calculator(getOperator(),getNumberA(),getNumberB());