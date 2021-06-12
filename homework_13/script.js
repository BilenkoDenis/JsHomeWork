function Calculator(num) {
    this.result = num;

    this.sum = (operand) => this.result += operand;
    this.sub = (operand) => this.result -= operand;
    this.mult = (operand) => this.result *= operand;
    this.div = (operand) => this.result /= operand;
    this.set = (operand) => this.result = operand;
}
const calc = new Calculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100
console.log(calc.sum(10)); /// 110
console.log(calc.result); /// 110
