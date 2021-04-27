const askAction = prompt('Please select an action (+ - / *)');
const errorAction = 'Please use only + - / *';
const errorNumber = 'Please use only numbers';
let firstNumber = +prompt('Type first number');
let secondNumber = +prompt('Type second number');
let answer;


if (askAction !== '+' && askAction !== '-' && askAction !== '/' && askAction !== '*') {
    alert(errorAction);
} else if (isNaN(firstNumber) && isNaN(secondNumber)) {
    alert(errorNumber);
} else if (askAction === '+') {
    answer = firstNumber + secondNumber;
    alert(`${firstNumber} ${askAction} ${secondNumber} = ${answer}`);
} else if (askAction === '-') {
    answer = firstNumber - secondNumber;
    alert(`${firstNumber} ${askAction} ${secondNumber} = ${answer}`);
}else if (askAction === '*') {
    answer = firstNumber * secondNumber;
    alert(`${firstNumber} ${askAction} ${secondNumber} = ${answer}`);
}else if (askAction === '/') {
    answer = firstNumber / secondNumber;
    alert(`${firstNumber} ${askAction} ${secondNumber} = ${answer}`);
}