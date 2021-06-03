const input = document.getElementById("input");
const ul = document.getElementById("todos");
const saveBtn = document.getElementById("save");

function createTextSpan() {
    const textSpan = document.createElement("span");
    textSpan.classList.add("todo-text");

    return textSpan;
}

function createDeleteBtn() {
    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("todo-trash");

    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-trash-alt");

    return deleteBtn.appendChild(icon);
}

function createTodo() {
    const li = document.createElement("li");
    const textSpan = createTextSpan();
    const newTodo = input.value;
    const deleteBtn = createDeleteBtn();

    textSpan.append(newTodo)
    ul.appendChild(li).append(textSpan, deleteBtn);

    input.value = "";
}

saveBtn.addEventListener("click", createTodo)