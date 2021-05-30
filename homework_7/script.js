const actions = {
    '+': (operands) => operands.reduce((acc, num) => acc + num),
    '-': (operands) => operands.reduce((acc, num) => acc - num),
    '*': (operands) => operands.reduce((acc, num) => acc * num),
    '/': (operands) => operands.reduce((acc, num) => acc / num)
}

function getOperation(){
    let operation = ' ';

    do {
        operation = prompt('Enter operation')
    } while (!isInputValid(operation))

    return operation;
}

function isInputValid(value) {
    return value !== '' &&
           value !== null;
}

function findOperation(input) {
    const operators = ['+', '-', '*', '/'];
    return operators.find(operator => input.indexOf(operator) >= 0);
}

function getOperands(input, operator) {
    return input.split(operator)
                .filter(number => !isNaN(+number))
                .map(number => +number);
}

function getResult(operator, numbers) {
    return actions[operator](numbers);
}


function showResult(numbers, operator, result) {
    return alert(`${numbers.join(` ${operator} `)} = ${result}`)
}

const userInput = getOperation()
const operator = findOperation(userInput)
const numbers = getOperands(userInput, operator)
const result = getResult(operator, numbers);
showResult(numbers, operator, result)