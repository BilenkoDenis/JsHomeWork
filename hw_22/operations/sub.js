function sub(...numbers) {

    return numbers.reduce((a,b) => a - b);
}

module.exports = sub;