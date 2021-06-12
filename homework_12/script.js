const TASK_ITEM_CLASS = "task-item";
const DELETE_BTN_CLASS = "todo-trash";
const TEXT_ITEM_CLASS = "todo-text";

const toDoTemplate = document.getElementById("toDoTemplate").innerHTML;
const toDoInputEl = document.getElementById("input");
const toDosEl = document.getElementById("todos");
const saveBtn = document.getElementById("save");

let toDoList = [];

saveBtn.addEventListener("click", onSaveBtnClick);

toDosEl.addEventListener('click', onTaskClick);


init();


function onSaveBtnClick() {
    if (!isEmpty(toDoInputEl.value)) {
        const newToDo = getTaskData();

        addTask(newToDo);

        resetToDoInput();
    }
}

function onTaskClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const taskId = getTaskId(e.target)

        deleteTask(taskId);
        return;
    }

    if (e.target.classList.contains(TEXT_ITEM_CLASS)) {
        const taskId = getTaskId(e.target);

        toggleTask(taskId);

    }
}

function init() {
    restoreFromStorage();
    renderTasks(toDoList);
}

function deleteTask(id) {
    toDoList = toDoList.filter((item) => item.id !== id);
    saveToStorage();

    renderTasks(toDoList);
}

function toggleTask(id) {
    toDoList = toDoList.map(item => item.id === id ? { ...item, done: !item.done } : item);
    saveToStorage();

    renderTasks(toDoList);
}

function getTaskId(el) {
    const task = el.closest('.' + TASK_ITEM_CLASS);

    return +task.dataset.taskId;
}

function isEmpty(str) {
    return str === '' || str === null;
}

function addTask(inputValue) {
    toDoList.push(inputValue);
    saveToStorage();

    renderTasks(toDoList);
}

function renderTasks(list) {
    toDosEl.innerHTML = '';
    list.forEach((item) => renderTask(item));
}

function renderTask(inputValue) {
    const newToDoHtml = getTaskHtml(inputValue);

    toDosEl.insertAdjacentHTML('beforeend', newToDoHtml)

}

function getTaskHtml(item) {
    const itemData = {
        ...item,
        addClass: item.done ? 'done' : '',
    };

    let templateHtml = toDoTemplate;

    for (const key in itemData) {
        let value = itemData[key];

        templateHtml = templateHtml.replace(`{{${key}}}`, value);
    }

    return templateHtml;
}

function getTaskData() {
    return {
        id: Date.now(),
        title: toDoInputEl.value
    }
}

function resetToDoInput() {
    toDoInputEl.value = "";
}

function saveToStorage() {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function restoreFromStorage() {
    const data = localStorage.getItem('toDoList');
    if (data !== null) {
        toDoList = JSON.parse(data);
    } else {
        toDoList = [];
    }
}
