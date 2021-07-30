const BTN_SELECTOR = `.save-btn`;
const DELETE_BTN_SELECTOR = `.fa-trash-alt`;
const ITEM_SELECTOR = `.todo-item`;
class TodosView {
  constructor($el, config = {}) {
    this._container = $el;
    this._$list = null;
    this._$todo = null;
    this._config = config;
    this.$taskInput = $(`#input`);
    this.initView();
  }
  initView() {
    this._$list = $(`<ul class = "todos"></ul>`);
    this._$list.on(`click`, DELETE_BTN_SELECTOR, this.onListClick.bind(this));
    this._container.on(`click`, ITEM_SELECTOR, this.onItemClick.bind(this));
    this._container.on(`click`, BTN_SELECTOR, this.onAddBtnClick.bind(this));
    this._container.prepend(this._$list);
  }
  onAddBtnClick() {
    const todo = {
      isDone: false,
      title: this.$taskInput.val(),
    };

    this._config.onAdd(todo);
    this.clearInput();
  }

  clearInput() {
    this.$taskInput.val("");
  }
  onListClick(e) {
    const id = this.getElementId($(e.target));

    this._config.onDelete(id);
  }
  onItemClick(e) {
    const id = this.getElementId($(e.target));
    this._config.onToggle(id);
  }
  renderList(list) {
    this._$list.html(list.map(this.getListItemHtml).join(""));
  }
  getListItemHtml({ id, title, isDone }) {
    return `<li class="todo-item ${
      isDone ? `green` : ``}" id="${id}">
                ${title}
                <a class="fas fa-trash-alt">
                    
                </a>
            </li>`;
  }
  getElementId($el) {
    return $el.closest(ITEM_SELECTOR).attr("id");
  }
}
