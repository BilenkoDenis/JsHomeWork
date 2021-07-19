const CONTACTS_URL = `https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/`;

const REGEX = /^[+]*[(]?[0-9]{1,3}[)]?[-\s/0-9]*$/g;
const REMOVE_CLASS = `remove-item`;
const TABLE_ROW_CLASS = `person-info`;
const BTN_CLASS = `d-flex justify-content-evenly`;
const TABLE_DATA_CLASS = `text-center`;

const nameInput = document.getElementById(`name`);
const phoneInput = document.getElementById(`phoneNumber`);
const emailInput = document.getElementById(`email`);
const tbodyEl = document.getElementById(`tbody`);
const btn = document.getElementById(`addContactForm`);

let contactList = [];

init();

btn.addEventListener(`submit`, onAddContactFormSubmit);
tbodyEl.addEventListener(`click`, editTableRow);

function onAddContactFormSubmit(event) {
    event.preventDefault();
    submitForm();
    resetInputs();
}
function init() {
    fetchContacts();
}

function submitForm() {
    if (!inputValidation()) {
        return;
    }
    const contact = getFormData();
    createContact(contact);
}

function createContact(contact) {
    fetch(CONTACTS_URL, {
        method: `POST`,
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((resp) => resp.json())
        .then(addContact);
}
function addContact(contact) {
    contactList.push(contact);
    renderContacts(contactList);
}
function getFormData() {
    return {
        name: nameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
    };
}

function inputValidation() {
    return (
        isInputValid(nameInput.value) &&
        isPhoneInputValid(phoneInput.value) &&
        isInputValid(emailInput.value)
    );
}

function createTableRow(id) {
    const tr = document.createElement(`tr`);
    tr.className = TABLE_ROW_CLASS;
    tr.id = id;
    return tr;
}

function createButtons() {
    const el = createTableData();
    el.className = BTN_CLASS;
    el.appendChild(createDeleteButton());
    return el;
}

function createDeleteButton() {
    const link = document.createElement("a");
    link.className = REMOVE_CLASS;
    link.innerHTML = '<i class="fa fa-remove"></i>';
    return link;
}
function createTableData() {
    const el = document.createElement(`td`);
    el.className = TABLE_DATA_CLASS;
    return el;
}
function resetInputs() {
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
}
function editTableRow(e) {
    switch (true) {
        case e.target.parentElement.classList.contains(REMOVE_CLASS):
            deleteContact(e.target.closest(`.` + TABLE_ROW_CLASS).id);
            break;
    }
}

function isInputValid(str) {
    return str.trim() !== "" && isNaN(str);
}

function isPhoneInputValid(str) {
    return REGEX.test(str);
}

function fetchContacts() {
    fetch(CONTACTS_URL)
        .then((resp) => resp.json())
        .then(setContacts)
        .then(renderContacts);
}

function setContacts(data) {
    return (contactList = data);
}

function renderContacts(data) {
    tbodyEl.innerHTML = ``;
    data.map(renderContact);
}

function renderContact({ id, name, phone, email }) {
    const tableRow = createTableRow(id);
    tableRow.appendChild(addInputToTd(name));
    tableRow.appendChild(addInputToTd(phone));
    tableRow.appendChild(addInputToTd(email));
    tableRow.appendChild(createButtons());
    tbodyEl.appendChild(tableRow);
}

function addInputToTd(value) {
    const td = createTableData();
    td.innerText = value;
    return td;
}

function deleteContact(id) {
    fetch(CONTACTS_URL + id, {
        method: `DELETE`,
    }).then(() => {
        contactList = contactList.filter((item) => item.id !== id);
        renderContacts(contactList);
    });
}



