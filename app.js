const URL = `wss://fep-app.herokuapp.com/`;

const formEl = document.getElementById("submitMsg");
const nameEl = document.getElementById("userName");
const msgEl = document.getElementById("userMsg");
const chatBox = document.getElementById("chatBox");

let socket = null;

function init() {
  socket = new WebSocket(URL);

  socket.onopen = () => {
    console.log(`connected`);
  };

  socket.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    showMsg(data);
  };

  socket.onclose = () => {
    init();
    console.log(`closed`);
  };

  socket.onerror = () => {
    alert(`disconected`);
  };
}
function send(msg) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(msg));
  }
}
function showMsg(data) {
  let div = createDiv();
  let p = createPTag(data.payload.username);
  let span = createSpan(data.payload.message);
  div.appendChild(p);
  div.appendChild(span);
  chatBox.appendChild(div);
  msgEl.value = ``;
}
init();

formEl.addEventListener("click", onSendClick);

function onSendClick(e) {
  e.preventDefault();
  if (!isInputValid(nameEl.value) || !isInputValid(msgEl.value)) {
    alert(`Fill all fields!`);
    return;
  }
  send({
    type: "message",
    payload: {
      username: nameEl.value,
      message: msgEl.value,
    },
  });
}

function createDiv() {
  let div = document.createElement("div");
  div.classList = "container";
  return div;
}
function createPTag(username) {
  let p = document.createElement("p");
  p.innerHTML = `${username}` + ":" + " ";
  return p;
}
function createSpan(message) {
  let span = document.createElement("span");
  span.innerHTML = message;
  return span;
}

function isInputValid(str) {
  return str !== `` && str !== null;
}
