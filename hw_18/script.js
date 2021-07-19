const REGEX = /^[+]*[(]?[0-9]{1,3}[)]?[-\s/0-9]*$/g;
const firstNameInput = document.getElementById("firstName");
const secondNameInput = document.getElementById("secondName");
const phoneInput = document.getElementById("phoneNumber");
const tbodyEl = document.querySelector("#tbody");

document.querySelector(".btn").addEventListener("click", applyEl);
tbodyEl.addEventListener("click", removeTableRow);

function applyEl() {
    const tableEl = createEl();
    resetInputs();
    tbodyEl.appendChild(tableEl);
}

function isTextInputInvalid(str) {
    return str.trim() !== "" && isNaN(str);
}

function isPhoneInputInvalid(str) {
    return REGEX.test(str);
}

function isInputsInvalid() {
    return isTextInputInvalid(firstNameInput.value) &&
           isTextInputInvalid(secondNameInput.value) &&
           isPhoneInputInvalid(phoneInput.value)
}

function createEl() {
    const tableRow = createTableRowEl();

    if (isInputsInvalid()) {
        tableRow.appendChild(createTableDataEl(firstNameInput.value));
        tableRow.appendChild(createTableDataEl(secondNameInput.value));
        tableRow.appendChild(createTableDataEl(phoneInput.value));
        tableRow.appendChild(createRemoveButtonEl());
    }

    return tableRow;
}

function createTableRowEl() {
    const tr = document.createElement("tr");
    tr.className = "person-info";

    return tr;
}

function createTableDataEl(input) {
    const td = createTestEl();
    td.innerText = input;

    return td;
}

function createRemoveButtonEl() {
    const el = createTestEl();

    const link = document.createElement("a");
    link.className = "remove-item";
    link.innerHTML = '<i class="fa fa-remove"></i>';

    el.appendChild(link);

    return el;
}

function createTestEl() {
    const el = document.createElement("td");
    el.className = "text-center";

    return el;
}
function resetInputs() {
    firstNameInput.value = "";
    secondNameInput.value = "";
    phoneInput.value = "";
}
function removeTableRow(e) {
    if (e.target.parentElement.classList.contains("remove-item")) {
        removeListElement(e.target.closest(".person-info"));
    }
}

function removeListElement(el) {
    el.remove();
}
