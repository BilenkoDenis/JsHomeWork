function mult(...numbers) {

    return numbers.reduce((a,b) => a * b);
}

module.exports = mult;