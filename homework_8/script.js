function createCalculator(num) {
    let firstOperand = num;

    return {
        sum: (operand) => firstOperand = firstOperand + operand,
        sub: (operand) => firstOperand = firstOperand - operand,
        mult: (operand) => firstOperand = firstOperand * operand,
        div: (operand) => firstOperand = firstOperand / operand,
        set: (operand) => firstOperand = operand
    }
}
const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100
console.log(calc.sum(5)); /// 105
