function div(...numbers) {

    return numbers.reduce((a,b) => a / b);
}

module.exports = div;