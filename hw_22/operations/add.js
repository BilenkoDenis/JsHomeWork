function add(...numbers) {

    return numbers.reduce((a,b) => a + b);
}

module.exports = add;