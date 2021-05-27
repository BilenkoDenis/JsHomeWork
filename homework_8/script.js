function createCalculator(num) {
    let result = num;

    return {
        sum: (operand) => result += operand,
        sub: (operand) => result -= operand,
        mult: (operand) => result *= operand,
        div: (operand) => result /= operand,
        set: (operand) => result = operand
    }
}
const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100
console.log(calc.sum(5)); /// 105
