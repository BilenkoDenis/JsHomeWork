import $ from "jquery";
import "../css/style.css";

const URL = `wss://balls-fep.herokuapp.com/`;

const $body = $(`body`);
const $sizeEl = $("#size");
const $colorEl = $("#color");
const $menu = $(`#menu`);

let socket = null;
let idBall = Date.now();

function init() {
  socket = new WebSocket(URL);

  socket.onopen = () => {
    const payload = getPayLoad();
    send({
      type: "add",
      payload: payload,
    });
  };

  socket.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    if (data.type === `add`) {
      onLoad(data);
    } else {
      update(data);
    }
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
init();

function onLoad({ payload }) {
  let $ball = $("<div></div>");
  $ball.addClass(`ball-item`);
  $ball.attr("id", payload.id);
  $ball.css("height", payload.size);
  $ball.css("width", payload.size);
  $ball.css("background", payload.color);
  $ball.css({ top: payload.top, left: payload.left });
  $(`body`).append($ball);
}
function update({ payload }) {
  let $ball = $(`#${payload.id}`);
  $ball.css(`left`, payload.left - parseInt(payload.size) / 2);
  $ball.css(`top`, payload.top - parseInt(payload.size) / 2);
  $ball.css(`background`, payload.color);
  $ball.css(`height`, payload.size);
  $ball.css(`width`, payload.size);
}
function getPayLoad() {
  let id = idBall;
  let color = $("#color").val();
  let size = $("#size").val();
  let top = 150;
  let left = 150;
  return {
    id: id,
    top,
    left,
    size,
    color,
  };
}

$body.on(`mousedown`, `#${idBall}`, onMouseDown);

function onMouseDown() {
  $body.on(`mousemove`, `#${idBall}`, onMouseMove);
  $body.on(`mouseup`, `#${idBall}`, onMouseUp);
}
function onMouseUp() {
  $body.off(`mousemove`, `#${idBall}`, onMouseMove);
  $body.off(`mouseup`, `#${idBall}`, onMouseUp);
}
function onMouseMove(e) {
  let left = e.pageX;
  let top = e.pageY;
  let id = $(e.target).attr("id");
  let color = $(e.target).css(`background`);
  let size = $(e.target).css(`width`);
  send({
    type: "update",
    payload: { id: id, top, left, size, color },
  });
}
$menu.on(`change`, changeBallParams);
function changeBallParams() {
  let $ball = $(`#${idBall}`);
  $ball.css(`background`, $colorEl.val());
  $ball.css(`width`, $sizeEl.val());
  $ball.css(`height`, $sizeEl.val());
}