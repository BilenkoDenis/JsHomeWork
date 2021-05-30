function getName (text) {
    let answer = '';

    do {
        answer = prompt(text);
    }while (!isInputValid(answer));

    return answer;
}

function isInputValid (input) {
    return input !== '' && input !== null;
}

function addName (id, name) {
    const item = document.getElementById(id);

    return item.textContent = `${item.textContent}, ${name}`;
}

const name = getName('Enter your name');

addName('greeting', name);